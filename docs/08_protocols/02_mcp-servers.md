---
level: 📖 中級（概念・実践）
prereq: Python基礎 / LLMアプリの基本概念
prev: 08_protocols/01_mcp.md
next: 08_protocols/03_backend-integration.md
---

# MCP Servers 入門

> 📖 中級（概念・実践） | 前提: Python基礎 / LLMアプリの基本概念

## この教材で身につくこと

- ファイル操作ツール
- SQL クエリ実行ツール
- HTTP API 連携ツール

## 概要
MCP Servers はファイル、DB、APIなどの機能を MCP 経由で提供する実装群です。

## 詳細
- ファイル操作ツール
- SQL クエリ実行ツール
- HTTP API 連携ツール

## 位置づけ

```mermaid
flowchart LR
	A[MCP運用] --> B[MCP Servers]
	B --> C[filesystem server]
	B --> D[SQL/API連携]
	B --> E[tools/list提供]
```

## 実行フロー

```mermaid
flowchart TD
	S[開始] --> I[npm global install]
	I --> R[npx server-filesystem起動]
	R --> C[MCPクライアント接続]
	C --> L[tools/list確認]
	L --> X[利用開始]
```

## 最小セットアップ

### 前提条件

- Node.js 18+
- npm

### 例: ローカルファイル向けMCPサーバ

```bash
npm install -g @modelcontextprotocol/server-filesystem
```

### 起動例

```bash
npx @modelcontextprotocol/server-filesystem C:/Dev/stock
```

### 接続確認

MCP対応クライアントから tools/list を実行し、ファイル系ツールが列挙されることを確認します。


## 実ソースコード（言語別に記載）

### 主要サンプル
- この教材の実装例は、本文中の実行手順に対応しています。
- 必要に応じて、主要コードの抜粋をこのセクションへ追記してください。

## 演習課題

1. ``MCP Servers 入門`` を使う想定ユースケースを1つ定義し、入力・出力の例を記録してください。
2. 最小構成で動かし、デフォルトから設定を1つ変えて挙動の差分を確認してください。
3. ``MCP Servers 入門`` を使わない場合の代替手段と比較し、選ぶ基準をまとめてください。


### 解答の目安

1. まず課題の目的を一文で明確化し、入力・出力を対応づけて記述します。
   確認ポイント: 何を変えて何を確認する課題かを第三者が読んで理解できること。
2. 最小構成で一度実行し、設定や条件を1つ変更して差分を比較します。
   確認ポイント: 変更前後の挙動差を具体的に説明できること。
3. 適用条件と代替手段を整理し、選択基準を短くまとめます。
   確認ポイント: なぜその手段を選ぶかを根拠付きで示せること。
## 理解度チェック

1. ``MCP Servers 入門`` の主な役割を1文で説明してください。
2. ``MCP Servers 入門`` を導入する際の最大のメリットと注意点は何ですか？
3. ``MCP Servers 入門`` が向かないユースケースとして、どのようなケースが考えられますか？


### 解説の要点

1. 主な役割は、その技術がどの工程を担い、何を改善するかで説明します。
2. メリットは再現性・拡張性・運用性の観点で整理し、注意点は導入コストや複雑性として示します。
3. 使い分けは要件、実装コスト、運用体制の3観点で判断します。
---

[← 前へ](08_protocols/01_mcp.md) | [次へ →](08_protocols/03_backend-integration.md)


