# Langfuse 入門

> 📖 中級（概念・実践） | 前提: Python基礎 / LLMアプリの基本概念

---

## 1. 機能・役割（概要）
Langfuseは、LLMアプリの「観測・評価・実験・プロンプト管理」を一体化したOSSプラットフォームです。  
主な役割は、トレース収集・評価・コスト監視・プロンプト管理などを統合し、継続的な品質改善と運用監視を実現することです。

## 2. この教材で身につくこと（ゴール）

- プロンプト/応答のトレース
- 実行単位の評価記録
- モデル利用コスト把握
- 本番運用の品質監視・改善ループ構築

## 3. コンセプト
Langfuseは「OTel準拠・80+統合・エンタープライズ対応」のLLM観測基盤。  
トレース・評価・プロンプト管理・コスト監視・実験・アノテーションを一体化。  
**バージョン**: 2.0.0+ / OSS準拠（2026-05時点）  
**公式ドキュメント**: https://langfuse.com/

## 4. 仕組み（全体の流れ）
- SDKやAPIでアプリからトレース・評価データを送信
- Web UIで可視化・分析・実験
- before/after比較やプロンプト管理も容易

### 詳細手順
1. 目的と入力を定義し、対象データや利用モデルを準備
2. コア処理（検索・推論・生成・検証）を実行
3. 実行結果を保存・表示し、次工程に渡せる形式へ整形
4. パラメータ調整で挙動差分を比較し、品質を確認
5. 運用を想定して再実行手順と確認ポイントを定着

## 5. 位置づけ（図解）
```mermaid
flowchart LR
  A[LLM観測基盤] --> B[Langfuse]
  B --> C[Trace収集]
  B --> D[評価スコア保存]
  B --> E[コスト可視化]
```

## 6. 事前準備

- Docker環境（セルフホストの場合）
- langfuse公式イメージ利用

### docker-compose.yml
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

## 7. 最小セットアップ

```bash
docker-compose up -d
# ブラウザで http://localhost:3002 にアクセス
```

## 8. 実行フロー

```mermaid
flowchart TD
  S[開始] --> U[docker-compose up -d]
  U --> W[http://localhost:3002]
  W --> P[Project作成]
  P --> K[APIキー発行]
  K --> X[アプリ連携]
```

## 9. 検証

- コマンドがエラーなく完了する
- 想定した出力（画面表示・ファイル生成・回答）を確認できる
- 変更した設定に応じて結果差分を説明できる

## 10. 主要ファイルの説明

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

[← 前へ](05-evaluation/02-ragas.md) | [次へ →](05-evaluation/04-guardrails.md)






