# Langfuse - LLMアプリの観測・評価・プロンプト管理プラットフォーム

> 📖 中級（概念・実践） | 前提: Python基礎 / LLMアプリの基本概念

## この教材で身につくこと

- プロンプト/応答のトレースを記録できる
- 実行単位の評価スコアを保存・参照できる
- モデル利用コストを把握できる
- 本番運用の品質監視・改善ループを構築できる

## 概要

**Langfuse** は、LLMアプリの「観測・評価・実験・プロンプト管理」を一体化したOSSプラットフォームです。トレース収集・評価・コスト監視・プロンプト管理などを統合し、継続的な品質改善と運用監視を実現します。

OTel準拠・80+統合・エンタープライズ対応のLLM観測基盤として、SDKやAPIでアプリからトレース・評価データを送信し、Web UIで可視化・分析・実験を行います。before/after比較やプロンプト管理も容易です。

**バージョン**: 2.0.0+ / OSS準拠（2026-05時点）  
**公式ドキュメント**: https://langfuse.com/

## 位置づけ

この例では、Langfuse - LLMアプリの観測・評価・プロンプト管理プラットフォーム の基本的な利用手順を示します。サンプルコードの意図と、実行時に何が起こるのかを確認しながら読み進めると理解しやすくなります。

```mermaid
flowchart LR
  A[LLM観測基盤] --> B[Langfuse]
  B --> C[Trace収集]
  B --> D[評価スコア保存]
  B --> E[コスト可視化]
```

Langfuse は、LLMアプリの運用フェーズにおける観測・評価を担うプラットフォームです。開発時の実験管理から本番トレース収集まで一体化し、継続的な品質改善サイクルを支えます。

## 実行フロー

```mermaid
flowchart TD
  S[開始] --> U[docker-compose up -d]
  U --> W[http://localhost:3002]
  W --> P[Project作成]
  P --> K[APIキー発行]
  K --> X[アプリ連携]
```

処理の流れ:

1. 目的と入力を定義し、対象データや利用モデルを準備します。
2. Docker で Langfuse を起動し、Web UI にアクセスします。
3. Project を作成して APIキーを発行します。
4. アプリから SDK/API でトレース・評価データを送信します。
5. Web UI で可視化・分析し、改善ポイントを特定します。

## 最小セットアップ

Docker環境（セルフホストの場合）が必要です。

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

```bash
docker-compose up -d
# ブラウザで http://localhost:3002 にアクセス
```

## 実ソースコード

### 01_setup-guide.md

Langfuseのセットアップ手順・初期設定例。

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

1. Langfuse を使う想定ユースケースを1つ定義し、入力・出力の例を記録してください。
2. 最小構成で動かし、デフォルトから設定を1つ変えて挙動の差分を確認してください。
3. Langfuse を使わない場合の代替手段と比較し、選ぶ基準をまとめてください。

### 解答の目安

1. まず課題の目的を一文で明確化し、入力・出力を対応づけて記述します。
   確認ポイント: 何を変えて何を確認する課題かを第三者が読んで理解できること。
2. 最小構成で一度実行し、設定や条件を1つ変更して差分を比較します。
   確認ポイント: 変更前後の挙動差を具体的に説明できること。
3. 適用条件と代替手段を整理し、選択基準を短くまとめます。
   確認ポイント: なぜその手段を選ぶかを根拠付きで示せること。

## 理解度チェック

1. Langfuse の主な役割を1文で説明してください。
2. Langfuse を導入する際の最大のメリットと注意点は何ですか？
3. Langfuse が向かないユースケースとして、どのようなケースが考えられますか？

### 解説の要点

1. 主な役割は、その技術がどの工程を担い、何を改善するかで説明します。
2. メリットは再現性・拡張性・運用性の観点で整理し、注意点は導入コストや複雑性として示します。
3. 使い分けは要件、実装コスト、運用体制の3観点で判断します。

## 参考リンク

- [Langfuse 公式ドキュメント](https://langfuse.com/)
- [GitHub Repository](https://github.com/langfuse/langfuse)

---

[← 前へ](02-ragas.md) | [次へ →](04-guardrails.md)
