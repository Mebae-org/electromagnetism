const crypto = require("node:crypto");

module.exports = async ({ github, context, core }) => {
  // 下の値は PLACEHOLDER-1 / 2 のハッシュ。生成した正答ハッシュに差し替える。
  // 正答の平文はリポジトリに置かない。
  const assignments = {
    ch01: [
      { label: "問1", hash: "954314516526bcb5ab0d799b23db74cf43412c2e0267eaf74f7d38b18837cc4b" },
      { label: "問2", hash: "180f643b5a41152b1faae18ab693f8fe98fb47ebcf8274c7ef70bc1836a9ad1a" }
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
