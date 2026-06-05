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

**バージョン**: 最新版（公式 docs を参照）  
**公式ドキュメント**: https://docs.dify.ai/
**公式サイト**: https://dify.ai/

## 公式ポジショニング
**Dify** は、agentic workflow を視覚的に構築し、既存ツールやデータソースをつなぎ、AI アプリとして配備するためのプラットフォームです。

## この OSS を選ぶべきケース

- ノーコード/ローコードで AI アプリを素早く形にしたい
- Workflow、RAG、プロンプト管理、公開 API を一体で扱いたい
- 個人検証よりも、業務向けのアプリ化や運用移行を見据えている
- UI 表示だけでなく、アプリとしての公開や管理を重視する

## この OSS を選ばない方がよいケース

- 単純なチャット UI をまず 1 つ立てたい
- ノード単位の自由な試行錯誤や細かい接続確認を優先したい
- Tool Call / MCP を主軸に、会話 UI の延長で検証したい

### 主な特徴

- **ビジュアルフロー構築**: ドラッグ&ドロップでワークフロー作成
- **複数LLM対応**: OpenAI、Anthropic、Ollama 等
- **RAG統合**: ドキュメントアップロードで即QA構築
- **API公開**: 作成したアプリを REST API として公開
- **プロンプト管理**: バージョン管理と A/B テスト

## Flowise との見分け方

- Dify は「フローを作る」だけでなく、「アプリとして公開して運用する」ところまでが主眼です
- Flowise がノード設計の試行錯誤に強いのに対し、Dify はアプリ化、管理、配備の導線が強みです
- 選定時は、PoC の自由度よりも、業務利用へ持っていく一貫性を重視するかで判断します

---

## 仕組み

1. Studio で Chatbot/Workflow アプリを作成します。
2. Model Provider を登録し、実行モデルを選択します。
3. ノードやプロンプトを編集して実行経路を定義します。
4. Preview で挙動を確認し、必要なら API として公開します。
5. バージョン管理と運用設定で継続改善します。

## 前提条件

- Docker Desktop（Compose v2）
- Git
- メモリ 8GB 以上推奨

### クイックスタート

```bash
git clone https://github.com/langgenius/dify.git
cd dify/docker
cp .env.example .env
docker compose up -d
```
※ `docker-compose.yml` は手動作成せず、公式リポジトリに同梱された Compose 設定を利用します。
初回は `http://localhost/install` で管理者設定を行い、その後 `http://localhost` にアクセスします。

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
    S[開始] --> U[docker compose up -d]
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
New-Item -ItemType Directory -Path .\sandbox -Force | Out-Null
Set-Location .\sandbox
```

#### 1. 公式リポジトリを取得（同梱 Compose を利用）

```powershell
git clone https://github.com/langgenius/dify.git
Set-Location .\dify\docker
Copy-Item .env.example .env
```

#### 2. コンテナ起動と状態確認

```powershell
docker compose up -d
docker compose ps
docker compose logs --tail 80
```

期待状態:

- 複数の Dify 関連サービスが `Up` になっている
- ログに致命的エラーが出ていない

実行イメージ:

![docker compose ps](examples/dify/01-docker-compose-ps.png)

#### 3. 管理者アカウント作成

```powershell
Start-Process "http://localhost/install"
```

ブラウザ操作:

1. 初回アクセスで管理者アカウントを作成
2. メールアドレスとパスワードを設定して登録
3. セットアップ後に `http://localhost` へ遷移してログイン

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

- 管理画面 (http://localhost) にログインできる
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








