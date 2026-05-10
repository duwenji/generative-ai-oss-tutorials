---
level: 🔰 初級（カテゴリ導入）
prereq: -
prev: 03-inference/04-llama-cpp.md
next: 04-ui/01-open-webui.md
---

# UI・チャットアプリ基盤

> 🔰 初級（カテゴリ導入） | 前提: -

ユーザー向けのLLMチャットUIやノーコード/ローコード開発プラットフォーム。

## 位置づけ

```mermaid
flowchart LR
  A[ユーザー接点] --> B[UI基盤]
  B --> C[チャットUI]
  B --> D[ノーコード構築]
  B --> E[RAG統合]
```

## 学習フロー

```mermaid
flowchart TD
  S[開始] --> W[Open WebUI]
  W --> D[Dify/Flowise]
  D --> L[LibreChat/Chatbot UI]
  L --> O[LobeChat/AnythingLLM]
  O --> X[運用比較メモ]
```

## 含まれるOSS

- **Open WebUI**: ローカル/セルフホストのLLM Web UI
- **Dify**: ワークフロー・アプリ公開機能を持つプラットフォーム
- **Flowise**: ノードベースのLLMフロー構築ツール
- **LibreChat**: 複数LLMプロバイダ対応チャットUI
- **Chatbot UI**: シンプルなChatGPT風UI
- **LobeChat**: モダンなチャットクライアント
- **AnythingLLM**: 文書QA統合のオールインワンUI

## 学習順序

1. Open WebUI (チャットUI・セットアップ簡単)
2. Dify (ノーコードでAIアプリ構築・公開)
3. Flowise (ビジュアルフロー構築)
4. LibreChat (複数モデル運用)
5. Chatbot UI (軽量フロント)
6. LobeChat (モダンUX)
7. AnythingLLM (RAG統合)

## 教材リンク

- [01-open-webui.md](./01-open-webui.md)
- [02-dify.md](./02-dify.md)
- [03-flowise.md](./03-flowise.md)
- [04-librechat.md](./04-librechat.md)
- [05-chatbot-ui.md](./05-chatbot-ui.md)
- [06-lobechat.md](./06-lobechat.md)
- [07-anythingllm.md](./07-anythingllm.md)

## 完了条件

- カテゴリ内の主要OSSを3つ以上説明できる
- 最小サンプルを1件以上動作確認できる
- 選定観点（速度/運用性/拡張性）で比較メモを作成できる

---

[← 前へ](03-inference/04-llama-cpp.md) | [次へ →](04-ui/01-open-webui.md)




