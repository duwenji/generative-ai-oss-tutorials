---
level: 📖 中級（概念・実践）
prereq: Python基礎 / LLMアプリの基本概念
prev: 05_evaluation/02_ragas.md
next: 05_evaluation/04_guardrails.md
---

# Langfuse 入門

> 📖 中級（概念・実践） | 前提: Python基礎 / LLMアプリの基本概念

## この教材で身につくこと

- プロンプト/応答のトレース
- 実行単位の評価記録
- モデル利用コスト把握

## 概要
Langfuse は LLM アプリのトレース、評価、コスト監視を行う観測基盤です。

## 詳細
- プロンプト/応答のトレース
- 実行単位の評価記録
- モデル利用コスト把握

## 位置づけ

```mermaid
flowchart LR
		A[LLM観測基盤] --> B[Langfuse]
		B --> C[Trace収集]
		B --> D[評価スコア保存]
		B --> E[コスト可視化]
```

## 実行フロー

```mermaid
flowchart TD
		S[開始] --> U[docker-compose up -d]
		U --> W[http://localhost:3002]
		W --> P[Project作成]
		P --> K[APIキー発行]
		K --> X[アプリ連携]
```

## 実ソースコード（言語別に記載）
### 00_docker-compose.yml

```yaml
version: "3.8"

services:
	langfuse-web:
		image: langfuse/langfuse:2
		container_name: langfuse-web
		ports:
			- "3002:3000"
		environment:
			- DATABASE_URL=postgresql://postgres:postgres@langfuse-postgres:5432/langfuse
			- NEXTAUTH_SECRET=change-me
			- SALT=change-me-too
		depends_on:
			- langfuse-postgres

	langfuse-postgres:
		image: postgres:15
		container_name: langfuse-postgres
		environment:
			- POSTGRES_USER=postgres
			- POSTGRES_PASSWORD=postgres
			- POSTGRES_DB=langfuse
		volumes:
			- langfuse_db:/var/lib/postgresql/data

volumes:
	langfuse_db:
```

### 01_setup-guide.md

```text
# Langfuse セットアップガイド

## 起動
docker-compose up -d

## アクセス
- URL: http://localhost:3002

## 初期設定
1. 初期ユーザー作成
2. Project 作成
3. APIキー発行
```

## 演習課題

1. ``Langfuse 入門`` を使う想定ユースケースを1つ定義し、入力・出力の例を記録してください。
2. 最小構成で動かし、デフォルトから設定を1つ変えて挙動の差分を確認してください。
3. ``Langfuse 入門`` を使わない場合の代替手段と比較し、選ぶ基準をまとめてください。


### 解答の目安

1. まず課題の目的を一文で明確化し、入力・出力を対応づけて記述します。
   確認ポイント: 何を変えて何を確認する課題かを第三者が読んで理解できること。
2. 最小構成で一度実行し、設定や条件を1つ変更して差分を比較します。
   確認ポイント: 変更前後の挙動差を具体的に説明できること。
3. 適用条件と代替手段を整理し、選択基準を短くまとめます。
   確認ポイント: なぜその手段を選ぶかを根拠付きで示せること。
## 理解度チェック

1. ``Langfuse 入門`` の主な役割を1文で説明してください。
2. ``Langfuse 入門`` を導入する際の最大のメリットと注意点は何ですか？
3. ``Langfuse 入門`` が向かないユースケースとして、どのようなケースが考えられますか？


### 解説の要点

1. 主な役割は、その技術がどの工程を担い、何を改善するかで説明します。
2. メリットは再現性・拡張性・運用性の観点で整理し、注意点は導入コストや複雑性として示します。
3. 使い分けは要件、実装コスト、運用体制の3観点で判断します。
---

[← 前へ](05_evaluation/02_ragas.md) | [次へ →](05_evaluation/04_guardrails.md)


