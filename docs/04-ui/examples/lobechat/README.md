# LobeChat Examples

このディレクトリには、LobeChat 教材の実行証跡を保存します。

## 保存物

- 01-env-local.png
- 02-docker-compose-ps.png
- 03-home.png
- 04-chat-input.png
- 05-chat-output.png
- 06-agent-menu.png
- 07-skills-mcp.png
- 03-docker-compose-logs.txt
- 04-docker-compose-config.txt
- run-log.txt

## 採取ルール

- Windows + PowerShell 前提で採取する
- 秘密値は画面上でもログ上でも必ずマスクする
- 画像名と run-log.txt の記録を一致させる
- 05 と 06 ではなく、04 と 05 を同一会話の送信前後として扱う
- Agent / Skills / MCP は通常チャット確認とは別証跡として保存する
