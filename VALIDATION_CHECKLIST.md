# VALIDATION CHECKLIST

## Repository health
- [ ] `README.md` のリンクが機能する
- [ ] `docs/00-COVER.md` から9カテゴリの `00-README.md` に遷移できる
- [ ] `MASTER-INDEX.md` が最新

## Commands
- [ ] `npm install`
  - 依存関係をインストールする
- [ ] `npm run ebook:step1` ～ `ebook:step3`
  - ebook 出力を段階的に生成して build エラーを確認する

## Content quality
- [ ] 各カテゴリ（エージェント / RAG / 推論 / UI / 評価 / マルチモーダル / 可視化 / プロトコル / コード生成）に最小実行手順が含まれている
- [ ] OSSどうしの比較観点・選定理由が説明されている
- [ ] バージョン依存の記述に確認時点の注記がある
- [ ] 実運用を見据えた評価・監視・ガードレールの観点が含まれている

## Publication
- [ ] `.github/workflows/pages.yml` がある
- [ ] `.github/workflows/validate.yml` がある
- [ ] `CONTRIBUTING.md`, `ROADMAP.md`, `MASTER-INDEX.md`, `QUICK-REFERENCE.md` がある
