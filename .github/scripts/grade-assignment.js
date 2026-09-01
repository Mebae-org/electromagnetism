const crypto = require("node:crypto");

module.exports = async ({ github, context, core }) => {
  // 正答はハッシュのみで保持する。正答の平文はリポジトリに置かない。
  // ハッシュは scripts/make-answer-hash.js で生成する。
  const assignments = {
    ch01: [
      { label: "問1", hash: "9c9e5b4a9207b3c014ac5ebe6b6ff68d0fcef40c4c92d575950cfa6d89e7a928" },
      { label: "問2", hash: "69f59c273b6e669ac32a6dd5e1b2cb63333d8b004f9696447aee2d422ce63763" },
      { label: "問3", hash: "2c624232cdd221771294dfbb310aca000a0df6ac8b66b696d90ef06fdefb64a3" }
    ],
    ch02: [
      { label: "問1", hash: "b8736b999909049671d0ea075a42b308a5fbe2df1854899123fe09eb0ee9de61" },
      { label: "問2", hash: "e29c9c180c6279b0b02abd6a1801c7c04082cf486ec027aa13515e4f3884bb6b" },
      { label: "問3", hash: "69f59c273b6e669ac32a6dd5e1b2cb63333d8b004f9696447aee2d422ce63763" }
    ]
  };
  const issue = context.payload.issue;
  const chapterMatch = issue.title.match(/^\[課題(\d+)\]/);

  if (!chapterMatch) {
    core.info("課題 Issue ではないため採点を省略します。");
    return;
  }

  const chapter = chapterMatch[1].padStart(2, "0");
  const marker = "<!-- assignment-grader -->";
  let resultBody;
  let failed = false;

  try {
    const questions = assignments[`ch${chapter}`];
    const sections = new Map();
    const headings = [...issue.body.matchAll(/^###\s+(.+?)\s*$/gm)];

    for (let index = 0; index < headings.length; index += 1) {
      const start = headings[index].index + headings[index][0].length;
      const end = headings[index + 1]?.index ?? issue.body.length;
      sections.set(headings[index][1], issue.body.slice(start, end).trim());
    }

    if (!Array.isArray(questions) || questions.length === 0) {
      throw new Error(`ch${chapter} の正答ハッシュが設定されていません`);
    }

    // scripts/make-answer-hash.js と同じ規則で正規化する。
    const normalize = (value) => String(value)
      .replace(/[！-～]/g, (character) =>
        String.fromCharCode(character.charCodeAt(0) - 0xfee0))
      .replace(/[−–—]/g, "-")
      .replace(/[\s　]/g, "");
    const sha256 = (value) => crypto.createHash("sha256")
      .update(normalize(value), "utf8")
      .digest("hex");
    const numberPattern = /^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i;
    const results = questions.map((question) => {
      if (
        typeof question.label !== "string" ||
        typeof question.hash !== "string" ||
        !/^[0-9a-f]{64}$/.test(question.hash)
      ) {
        throw new Error(`${question.label ?? "不明な問"} の正答ハッシュが不正です`);
      }

      const submitted = sections.get(question.label) ?? "";
      const normalized = normalize(submitted);
      if (!numberPattern.test(normalized)) {
        return { label: question.label, status: "数値を入力してください", correct: false };
      }

      const correct = sha256(submitted) === question.hash;
      return { label: question.label, status: correct ? "正解" : "不正解", correct };
    });

    const correctCount = results.filter((result) => result.correct).length;
    failed = correctCount !== results.length;
    resultBody = [
      marker,
      "## 自動採点結果",
      "",
      ...results.map((result) => `- **${result.label}**: ${result.status}`),
      "",
      `**${correctCount} / ${results.length} 問正解**`,
      "",
      failed ? "回答を修正すると自動で再採点します。" : "全問正解です。"
    ].join("\n");
  } catch (error) {
    failed = true;
    resultBody = [
      marker,
      "## 自動採点結果",
      "",
      "採点設定を読み込めませんでした。リポジトリ管理者は正答設定を確認してください。",
      "",
      `\`${error.message}\``
    ].join("\n");
  }

  const comments = await github.paginate(github.rest.issues.listComments, {
    owner: context.repo.owner,
    repo: context.repo.repo,
    issue_number: issue.number,
    per_page: 100
  });
  const previous = comments.find(
    (comment) => comment.user?.type === "Bot" && comment.body?.includes(marker)
  );

  if (previous) {
    await github.rest.issues.updateComment({
      owner: context.repo.owner,
      repo: context.repo.repo,
      comment_id: previous.id,
      body: resultBody
    });
  } else {
    await github.rest.issues.createComment({
      owner: context.repo.owner,
      repo: context.repo.repo,
      issue_number: issue.number,
      body: resultBody
    });
  }

  if (failed) {
    core.setFailed("全問正解ではありません。");
  }
};
