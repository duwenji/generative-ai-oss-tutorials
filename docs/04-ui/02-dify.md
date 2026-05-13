---
level: 📖 中級（概念・実践）
prereq: Python基礎 / LLMアプリの基本概念
prev: 04-ui/01-open-webui.md
next: 04-ui/03-flowise.md
---

# Dify - ノーコード LLM アプリ開発プラットフォーム

> 📖 中級（概念・実践） | 前提: Python基礎 / LLMアプリの基本概念

## この教材で身につくこと

- ドラッグ&ドロップでワークフロー作成
- OpenAI、Anthropic、Ollama 等
- ドキュメントアップロードで即QA構築
- 作成したアプリを REST API として公開
- バージョン管理と A/B テスト

**バージョン**: 0.7.0+ / OSS準拠（2026-05時点）  
**公式ドキュメント**: https://docs.dify.ai/
**公式ドキュメント**: https://docs.dify.ai/

## コンセプト
**Dify** は、LLMアプリケーションをノーコード/ローコードで開発・デプロイするプラットフォームです。

### 主な特徴

- **ビジュアルフロー構築**: ドラッグ&ドロップでワークフロー作成
- **複数LLM対応**: OpenAI、Anthropic、Ollama 等
- **RAG統合**: ドキュメントアップロードで即QA構築
- **API公開**: 作成したアプリを REST API として公開
- **プロンプト管理**: バージョン管理と A/B テスト

---

## 仕組み

1. 目的と入力を定義し、対象データや利用モデルを準備します。
2. コア処理（検索・推論・生成・検証のいずれか）を実行します。
3. 実行結果を保存または表示し、次工程に渡せる形式へ整えます。
4. パラメータを調整して挙動差分を比較し、品質を確認します。
5. 運用を想定して再実行手順と確認ポイントを定着させます。

## 前提条件

### 前提条件

- Docker インストール済み
- PostgreSQL（docker-compose に含む）
- メモリ 8GB 以上推奨

### クイックスタート

```bash
docker-compose up -d
```
初期セットアップが自動実行されます。

## 位置づけ

```mermaid
flowchart LR
		A[ノーコードAI開発] --> B[Dify]
		B --> C[Workflow Builder]
		B --> D[RAG App]
		B --> E[API公開]
```

## 実行フロー

```mermaid
flowchart TD
		S[開始] --> U[docker-compose up -d]
		U --> W[Web Console確認]
		W --> P[LLM Provider設定]
		P --> A[App作成]
		A --> X[API/UIで公開]
```

## サンプル

### 実行例

このセクションでは、Windows PowerShell 前提で Dify の最小構成を順に起動します。

#### 0. 作業ディレクトリ準備（PowerShell）

```powershell
New-Item -ItemType Directory -Path .\sandbox\dify -Force | Out-Null
Set-Location .\sandbox\dify
```

#### 1. docker-compose.yml を作成

```yaml
version: "3.8"

services:
  dify:
    image: langgenius/dify-api:latest
    container_name: dify-api
    ports:
      - "8081:5001"
    environment:
      - MODE=api
      - SECRET_KEY=change-me
      - CONSOLE_WEB_URL=http://localhost:3000
      - DB_HOST=postgres
      - DB_PORT=5432
      - DB_USERNAME=postgres
      - DB_PASSWORD=postgres
      - DB_DATABASE=dify
      - REDIS_HOST=redis
      - REDIS_PORT=6379
    depends_on:
      - postgres
      - redis

  dify-web:
    image: langgenius/dify-web:latest
    container_name: dify-web
    ports:
      - "3000:3000"
    environment:
      - CONSOLE_API_URL=http://localhost:8081

  postgres:
    image: postgres:15
    container_name: dify-postgres
    environment:
      - POSTGRES_USER=postgres
      - POSTGRES_PASSWORD=postgres
      - POSTGRES_DB=dify
    volumes:
      - dify_postgres:/var/lib/postgresql/data

  redis:
    image: redis:7-alpine
    container_name: dify-redis
    volumes:
      - dify_redis:/data

volumes:
  dify_postgres:
  dify_redis:
```

#### 2. コンテナ起動と状態確認

```powershell
docker compose up -d
docker compose ps
docker compose logs dify-api --tail 50
```

期待状態:

- `dify-api`、`dify-web`、`dify-postgres`、`dify-redis` が `Up` になっている
- `dify-api` のログに致命的エラーが出ていない

実行イメージ:

![docker compose ps](examples/dify/01-docker-compose-ps.png)

#### 3. 管理者アカウント作成

```powershell
Start-Process "http://localhost:3000"
```

ブラウザ操作:

1. 初回アクセスで管理者アカウントを作成
2. メールアドレスとパスワードを設定して登録

実行イメージ（セットアップ画面）:

![dify setup](examples/dify/02-dify-setup.png)

#### 4. LLM Provider 設定

ブラウザ操作:

1. 右上のアカウントメニュー → **Settings** → **Model Provider** を開く
2. OpenAI または Ollama の API エンドポイントを設定
   - OpenAI: API キーを入力
   - Ollama: `http://host.docker.internal:11434` を URL に設定

実行イメージ（LLM Provider 設定）:

![llm provider](examples/dify/03-llm-provider.png)

#### 5. アプリ作成・チャット確認

ブラウザ操作:

1. **Studio** → **Create App** → **Chatbot** を選択
2. LLM ノードで登録済みのモデルを選択
3. **Publish** してプレビューを開く
4. 「こんにちは。3行で自己紹介して。」を送信

実行イメージ（アプリ作成）:

![app created](examples/dify/04-app-created.png)

実行イメージ（チャット入力）:

![chat input](examples/dify/05-chat-input.png)

実行イメージ（チャット回答）:

![chat output](examples/dify/06-chat-output.png)

#### 5.1 Workflow Builder（ドラッグ&ドロップ）

ブラウザ操作:

1. **Studio** → **Create from Blank** → **Workflow** を選択
2. ノードパネルから **LLM** と **End** を追加し、`Start -> LLM -> End` を構成
3. キャンバス上でノードをドラッグ&ドロップして配置を調整

実行イメージ（Workflow 作成）:

![workflow builder](examples/dify/07-workflow-builder.png)

#### 6. 基本機能の完了判定（最低ライン）

- 管理画面 (http://localhost:3000) にログインできる
- LLM Provider が正常に登録されている
- チャットボットアプリから応答が返る

#### 7. 停止・再開（検証用）

```powershell
docker compose stop
docker compose start
docker compose down
```

使い分け:

- `docker compose stop`: コンテナだけ停止します。次回は `docker compose start` で高速に再開できます。
- `docker compose down`: コンテナ停止に加えて、Compose 管理のネットワークも削除します。次回は `docker compose up -d` で再作成して起動します。
- データも初期化したい場合: `docker compose down -v`（ボリューム削除）

### 検証

- コマンドがエラーなく完了する
- 想定した出力（画面表示・ファイル生成・回答）を確認できる
- 変更した設定に応じて結果差分を説明できる

## 実ソースコード（言語別に記載）
### Source: 02-dify.md（tutorials側）

- 役割: Dify の最小セットアップ記述
- 入力: Docker 実行環境
- 出力: Dify 管理画面・API 起動状態

```text
## 前提条件

### 前提条件
- Docker / Docker Compose
- メモリ 8GB 以上推奨

### クイックスタート
docker compose up -d

管理画面: http://localhost:3000
API: http://localhost:8081
```

---

## よくある質問

**Q. どの LLM を選ぶべき？**  
A. 開発時は OpenAI GPT-3.5、本番は Ollama + Llama2 が推奨。

**Q. ドキュメントアップロードに制限はありますか？**  
A. ディスク容量による。大容量の場合は外部 DB 活用推奨。

---

## 補足

- [Dify ドキュメント](https://docs.dify.ai/)
- [GitHub](https://github.com/langgenius/dify)

## 演習課題

1. ``Dify`` を使う想定ユースケースを1つ定義し、入力・出力の例を記録してください。
2. 最小構成で動かし、デフォルトから設定を1つ変えて挙動の差分を確認してください。
3. ``Dify`` を使わない場合の代替手段と比較し、選ぶ基準をまとめてください。


### 解答の目安

1. まず課題の目的を一文で明確化し、入力・出力を対応づけて記述します。
   確認ポイント: 何を変えて何を確認する課題かを第三者が読んで理解できること。
2. 最小構成で一度実行し、設定や条件を1つ変更して差分を比較します。
   確認ポイント: 変更前後の挙動差を具体的に説明できること。
3. 適用条件と代替手段を整理し、選択基準を短くまとめます。
   確認ポイント: なぜその手段を選ぶかを根拠付きで示せること。

## 理解度チェック

1. ``Dify`` の主な役割を1文で説明してください。
2. ``Dify`` を導入する際の最大のメリットと注意点は何ですか？
3. ``Dify`` が向かないユースケースとして、どのようなケースが考えられますか？


### 解説の要点

1. 主な役割は、その技術がどの工程を担い、何を改善するかで説明します。
2. メリットは再現性・拡張性・運用性の観点で整理し、注意点は導入コストや複雑性として示します。
3. 使い分けは要件、実装コスト、運用体制の3観点で判断します。
---

[← 前へ](04-ui/01-open-webui.md) | [次へ →](04-ui/03-flowise.md)







