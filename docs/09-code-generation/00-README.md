# コード生成・開発支援

> 🔰 初級（カテゴリ導入） | 前提: -

コード生成、編集支援、IDE統合のOSSを学ぶ教材です。

## 位置づけ

```mermaid
flowchart LR
  A[開発生産性向上] --> B[Code Generation Tools]
  B --> C[Aider]
  B --> D[Continue]
  B --> E[Tabby/OpenHands]
```

## 学習フロー

```mermaid
flowchart TD
  S[開始] --> A1[AiderでCLI体験]
  A1 --> C1[ContinueでIDE連携]
  C1 --> T1[Tabbyでセルフホスト]
  T1 --> O1[OpenHandsで自律実装]
  O1 --> X[導入方針を確定]
```

## 含まれるOSS
- Aider
- Continue
- Tabby
- OpenHands

## 教材リンク

- [01-aider.md](./01-aider.md)
- [02-continue.md](./02-continue.md)
- [03-tabby.md](./03-tabby.md)
- [04-openhands.md](./04-openhands.md)

## 学習順序
1. Aider（CLIで最速体験）
2. Continue（IDE連携）
3. Tabby（セルフホスト補完）
4. OpenHands（自律実装エージェント）

## 完了条件

- カテゴリ内の主要OSSを3つ以上説明できる
- 最小サンプルを1件以上動作確認できる
- 選定観点（速度/運用性/拡張性）で比較メモを作成できる

---

[← 前へ](08-protocols/03-backend-integration.md) | [次へ →](09-code-generation/01-aider.md)




