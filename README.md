<!-- MAGI -->
<!-- このリポジトリは course-template から作成されました。この行を削除してください -->

# [SUBJECT]

[SUBJECT] を学ぶための教材リポジトリです。各章に解説（`docs/`）、練習問題（`exercises/`）、提出課題（`assignments/`）をまとめます。

## 対象

- 対象者: [LEARNERS]
- 前提知識: [PREREQUISITES]
- 到達目標: [COURSE GOAL]

## 使い方

1. 各章の `README.md` で概要と学習目標を確認します。
2. `docs/` で内容を学びます。
3. `exercises/` で理解を確認します。
4. `assignments/` の課題に取り組み、Issue フォームから数値で回答します。GitHub Actions が回答を自動採点します。

## 章一覧

| 章 | タイトル | 概要 |
|----|----------|------|
| [ch01-example](./ch01-example/) | [CHAPTER TITLE] | [CHAPTER SUMMARY] |

章を追加するときは、`ch01-example/` を複製して `chNN-short-name/` に変更してください。

## ディレクトリ構成

```text
[REPOSITORY]/
├── README.md
├── CONTRIBUTING.md
├── LICENSE
├── LICENSE-CODE
├── scripts/            正答ハッシュ生成などの補助スクリプト
├── .github/
│   ├── scripts/       自動採点処理
│   └── workflows/     GitHub Actions ワークフロー
└── chNN-short-name/
    ├── README.md
    ├── docs/
    ├── exercises/
    └── assignments/
```

## ライセンス

- **教材・文章・図版**: [CC BY 4.0](./LICENSE)
- **サンプルコード**: [MIT](./LICENSE-CODE)

## 貢献・誤り報告

執筆手順は [`CONTRIBUTING.md`](./CONTRIBUTING.md) を参照してください。誤りの指摘や提案は [Issue](https://github.com/Mebae-org/course-template/issues/new/choose) からお願いします。
<!-- /MAGI -->
