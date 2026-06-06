# 生成AI活用OSS 実践ガイド

## オープンソースで学ぶ生成AIスタックの全体像

この教材は、エージェント、RAG、推論基盤、UI、評価、マルチモーダル、可視化、プロトコル、コード生成を横断して学べる実践ガイドです。

> 💡 ブラウザで https://duwenji.github.io/spa-quiz-app/ を開くと、関連トピックをクイズ形式で復習できます。

---

> 📚 全体ガイド | 前提: -

**📢 更新状況**: 🔄 公式ドキュメントとの差分確認を継続中  
**最終更新**: 2026年5月 | LangChain `init_chat_model()`、Haystack 2.x、MCP 1.0 対応

## この教材の使い方（3ステップ）

1. まず各カテゴリの `00-README.md` を読んで全体像を把握する
2. 興味のある個別教材（`01-*.md` など）を1つ動かす
3. 最後に「選定理由」と「運用上の注意点」を3行でメモする

## カテゴリ一覧

| # | カテゴリ | 難易度 | 学習入口 |
|---|---|---|---|
| 1 | エージェント・オーケストレーション | 🔰 初〜中 | [01-agent-orchestration](./docs/01-agent-orchestration/00-README.md) |
| 2 | RAG・ナレッジ検索 | 🔰 初〜中 | [docs/02-rag/00-README.md](./docs/02-rag/00-README.md) |
| 3 | 推論実行基盤 | 🔧 中 | [docs/03-inference/00-README.md](./docs/03-inference/00-README.md) |
| 4 | UI・チャットアプリ基盤 | 🔰 初 | [docs/04-ui/00-README.md](./docs/04-ui/00-README.md) |
| 5 | 評価・ガードレール・監視 | 📖 中 | [docs/05-evaluation/00-README.md](./docs/05-evaluation/00-README.md) |
| 6 | マルチモーダル | 📖 中 | [docs/06-multimodal/00-README.md](./docs/06-multimodal/00-README.md) |
| 7 | 可視化 | 🔰 初 | [docs/07-visualization/00-README.md](./docs/07-visualization/00-README.md) |
| 8 | プロトコル・標準 | 📖 中〜上 | [docs/08-protocols/00-README.md](./docs/08-protocols/00-README.md) |
| 9 | コード生成支援 | 🔰 初 | [docs/09-code-generation/00-README.md](./docs/09-code-generation/00-README.md) |

## 推奨学習ルート

- 最短で体験する: 4 → 1 → 2 → 5
- 実運用を意識する: 3 → 8 → 5
- 開発効率を上げる: 9（並行学習可）

## 本書で学べること

- OSSベースで生成AIアプリの構成要素を説明できる
- 主要カテゴリごとの代表ツールを比較できる
- 最小実行手順で動作確認し、選定理由を言語化できる
- 実運用を見据えた評価・監視・標準化の観点を理解できる

## 対象読者

- 生成AIアプリ開発の全体像を短期間で掴みたい開発者
- 技術選定やPoCを担当するエンジニア
- OSSベースで検証環境を構築したいチーム

---
