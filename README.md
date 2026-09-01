# 電磁気学: 電気分野

静電場と直流回路の基礎を学ぶための教材リポジトリです。各章に解説（`docs/`）、練習問題（`exercises/`）、提出課題（`assignments/`）をまとめます。

## 対象

- 対象者: 高等学校から大学初年次程度の電気分野を学ぶ人
- 前提知識: 中学校理科の電気、比例・反比例、一次方程式、平方根、ベクトルの基本
- 到達目標: 電荷、電場、電位、コンデンサおよび直流回路の基本法則を説明し、標準的な問題を計算できる

## 使い方

1. 各章の `README.md` で概要と学習目標を確認します。
2. `docs/` で内容を学びます。
3. `exercises/` で理解を確認します。
4. `assignments/` の課題に取り組み、Issue フォームから数値で回答します。GitHub Actions が回答を自動採点します。

## 章一覧

| 章 | タイトル | 概要 |
|----|----------|------|
| [第1章](./ch01-electrostatics/) | 静電場 | 導体と不導体、クーロン力、電場、電位、コンデンサ |
| [第2章](./ch02-dc-circuits/) | 直流回路 | 電流、オームの法則、合成抵抗、キルヒホッフの法則、電力とジュール熱 |

## ディレクトリ構成

```text
electromagnetism/
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

執筆手順は [`CONTRIBUTING.md`](./CONTRIBUTING.md) を参照してください。誤りの指摘や提案は [Issue](https://github.com/Mebae-org/electromagnetism/issues/new/choose) からお願いします。
