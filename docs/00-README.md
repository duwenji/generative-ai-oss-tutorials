---
level: 📚 全体ガイド
prereq: "-"
next: docs/01-agent-orchestration/00-README.md
---

# 生成AI活用OSS 実践ガイド

> 📚 全体ガイド | 前提: -

このディレクトリは、生成AI関連OSSをカテゴリ別に学ぶための教材です。

> 💡 ブラウザで https://duwenji.github.io/spa-quiz-app/ を開くと、関連トピックをクイズ形式で復習できます。

**📢 更新状況**: 🔄 公式ドキュメントとの差分確認を継続中  
**最終更新**: 2026年5月 | LangChain `init_chat_model()`、Haystack 2.x、MCP 1.0 対応

## この教材の使い方（3ステップ）

1. まず各カテゴリの `00-README.md` を読んで全体像を把握する
2. 興味のある個別教材（`01-*.md` など）を1つ動かす
3. 最後に「選定理由」と「運用上の注意点」を3行でメモする

## カテゴリ一覧

| # | カテゴリ | 難易度 | 学習入口 |
|---|---|---|---|
| 1 | エージェント・オーケストレーション | 🔰 初〜中 | [docs/01-agent-orchestration/00-README.md](./docs/01-agent-orchestration/00-README.md) |
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

## 最小クイックスタート

### LangChain

```bash
cd 01-agent-orchestration/01_langchain-python
pip install -r 00_requirements.txt
python 01_basic-chain.py
```

### promptfoo

```bash
cd 05-evaluation/01_promptfoo-samples
npm install
npx promptfoo eval -c 00_promptfooconfig.yaml
```

### MCP

```bash
cd 08-protocols/01_mcp-python
python 01_mcp-client-skeleton.py
```

## レビュー観点（体系化・簡潔・読みやすさ）

- 体系化: 「何を学ぶか」「どこまでできれば完了か」が明記されているか
- 簡潔: 同じ説明の重複がないか、不要な全文転載がないか
- 読みやすさ: 見出しの順序と命名が統一されているか

詳細ルールは [00_STYLE_GUIDE.md](./00_STYLE_GUIDE.md) を参照してください。

## 関連ドキュメント

- 入口ページ: [README.md](./README.md)
- 全体索引: [MASTER-INDEX.md](./MASTER-INDEX.md)
- クイック参照: [QUICK-REFERENCE.md](./QUICK-REFERENCE.md)
- 学習拡張計画: [ROADMAP.md](./ROADMAP.md)

---

[次へ →](docs/01-agent-orchestration/00-README.md)


