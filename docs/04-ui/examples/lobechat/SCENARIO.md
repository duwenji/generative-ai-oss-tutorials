# LobeChat シナリオ撮影計画

このファイルは [../06-lobechat.md](../06-lobechat.md) の証跡を取得するための台本です。

## 前提

- `pnpm install` と `pnpm dev` が実行可能
- `.env.local` に利用 Provider のキー設定済み

## シナリオ

### 01. 依存解決

- 操作: `pnpm install` 実行結果を撮影
- 保存: `01-pnpm-install.png`

### 02. 環境変数設定

- 操作: `.env.local` のキー名が読める位置を撮影（秘密値は隠す）
- 保存: `02-env-local.png`

### 03. 開発サーバ起動

- 操作: `pnpm dev` 起動ログを撮影
- 保存: `03-dev-server-started.png`

### 04. ホーム表示

- 操作: ブラウザで初期画面を表示
- 保存: `04-home.png`

### 05. 送信前入力

- 操作: `こんにちは。3行で自己紹介して。` を入力し送信前撮影
- 保存: `05-chat-input.png`

### 06. 送信後応答

- 操作: 05 から送信し、応答表示後に撮影
- 保存: `06-chat-output.png`

### 5.1 価値確認（Agent/Skills/MCP）

- 構成が有効なら Agent / Skills / MCP の利用痕跡が読める画面を優先
- 未実施の場合は run-log に理由を記録

## 品質ゲート

1. 05 と 06 は別状態
2. 02 は秘密値を表示しない
3. 03 はサーバ起動が確認できる
4. 5.1 の実施有無が run-log と一致する
