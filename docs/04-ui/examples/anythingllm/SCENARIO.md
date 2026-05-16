# AnythingLLM シナリオ撮影計画

このファイルは [../07-anythingllm.md](../07-anythingllm.md) の証跡を再取得するための台本です。

## シナリオ

### 01. コンテナ起動確認

- 操作: `docker compose ps`
- 採用条件: `anythingllm` が `Up` または `healthy`
- 保存: `01-docker-compose-ps.png`

### 02. 初期設定

- 操作: `http://localhost:3003` で onboarding を表示
- 採用条件: セットアップ入力欄が読める
- 保存: `02-setup.png`

### 03. Provider 設定

- 操作: Settings で OpenAI/Ollama 設定画面を表示
- 採用条件: Provider 名と接続先が読める
- 保存: `03-provider-settings.png`

### 04. ワークスペース作成

- 操作: ワークスペース作成後の画面を撮影
- 採用条件: ワークスペース名が読める
- 保存: `04-workspace-created.png`

### 05. 送信前入力

- 操作: `この文書を3行で要約して。` を入力し送信前に撮影
- 採用条件: 入力文が見える
- 保存: `05-chat-input.png`

### 06. 送信後応答

- 操作: 05 から送信し、応答または追跡可能な失敗理由を表示
- 採用条件: 送信後状態であること
- 保存: `06-chat-output.png`

## 5.1 分岐ルール

- 文書取り込み直後の未検出エラーが出た場合は、数秒待って再送する
- 初回失敗と再送成功の有無を run-log に記録する

## 品質ゲート

1. 05 は送信前、06 は送信後
2. 03 は設定内容が読める
3. 06 は 05 の代替画像でない
4. run-log の備考と一致する
