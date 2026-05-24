# 生成AI活用OSS 実践ガイド

## オープンソースで学ぶ生成AIスタックの全体像

この教材は、エージェント、RAG、推論基盤、UI、評価、マルチモーダル、可視化、プロトコル、コード生成を横断して学べる実践ガイドです。

> 💡 ブラウザで https://duwenji.github.io/spa-quiz-app/ を開くと、関連トピックをクイズ形式で復習できます。

---

## 本書で学べること

- OSSベースで生成AIアプリの構成要素を説明できる
- 主要カテゴリごとの代表ツールを比較できる
- 最小実行手順で動作確認し、選定理由を言語化できる
- 実運用を見据えた評価・監視・標準化の観点を理解できる

## 対象読者

- 生成AIアプリ開発の全体像を短期間で掴みたい開発者
- 技術選定やPoCを担当するエンジニア
- OSSベースで検証環境を構築したいチーム

---
level: 🔰 初級（カテゴリ導入）
prereq: "-"
prev: 00-README.md
next: 01-agent-orchestration/01-langchain.md
---

# 1.1 エージェント・オーケストレーション

> 🔰 初級（カテゴリ導入） | 前提: -

複数のエージェントが協調してタスクを実行するフレームワークと、LLMアプリ開発の基盤ライブラリ。

## 1.1.1 位置づけ

```mermaid
flowchart LR
  A[LLMアプリ開発] --> B[Agent Orchestration]
  B --> C[LangChain]
  B --> D[LangGraph]
  B --> E[AutoGen/CrewAI]
```

## 1.1.2 学習フロー

```mermaid
flowchart TD
  S[開始] --> L[LangChain基礎]
  L --> G[LangGraphで状態遷移]
  G --> M[マルチエージェント実装]
  M --> K[Semantic Kernelで統合設計]
  K --> C[比較評価メモ作成]
  C --> X[カテゴリ完了]
```

## 1.1.3 含まれるOSS

- **LangChain**: LLMアプリ開発の標準ライブラリ
- **LangGraph**: 状態遷移をもつワークフロー実装
- **AutoGen**: 複数エージェント協調フレームワーク
- **CrewAI**: Roleベースのマルチエージェント
- **Semantic Kernel**: 企業向けAIワークフローSDK

## 1.1.4 学習順序

1. LangChain (基本)
2. LangGraph (ステップ処理)
3. AutoGen / CrewAI (複数エージェント)
4. Semantic Kernel (アプリ統合)

## 1.1.5 教材リンク

- [01-langchain.md](./01-langchain.md)
- [02-langgraph.md](./02-langgraph.md)
- [03-autogen.md](./03-autogen.md)
- [04-crewai.md](./04-crewai.md)
- [05-semantic-kernel.md](./05-semantic-kernel.md)

## 1.1.6 完了条件

- カテゴリ内の主要OSSを3つ以上説明できる
- 最小サンプルを1件以上動作確認できる
- 選定観点（速度/運用性/拡張性）で比較メモを作成できる

---

[← 前へ](00-README.md) | [次へ →](01-agent-orchestration/01-langchain.md)





---
level: 📖 中級（概念・実践）
prereq: Python基礎 / LLMアプリの基本概念
prev: 01-agent-orchestration/00-README.md
next: 01-agent-orchestration/02-langgraph.md
---

# 1.2 LangChain - LLMアプリ開発の標準ライブラリ

> 📖 中級（概念・実践） | 前提: Python基礎 / LLMアプリの基本概念

## 1.2.1 この教材で身につくこと

- 複数のLLMやツール操作を組み合わせた処理パイプライン
- LLMに関数実行やAPI呼び出しを命令
- 会話履歴やコンテキストを自動管理
- OpenAI、Anthropic、Ollama等に対応
- ドキュメント検索、ベクトル化を統合

**バージョン**: OSS Docs準拠（2026-05時点）  
**公式ドキュメント**: https://docs.langchain.com/oss/python/langchain/overview

## 1.2.2 コンセプト

**LangChain** は、LLMアプリ開発を簡単にするPython/JS ライブラリです。

### 1.2.2.1 主な機能

- **チェーン構築**: 複数のLLMやツール操作を組み合わせた処理パイプライン
- **ツール呼び出し**: LLMに関数実行やAPI呼び出しを命令
- **メモリ管理**: 会話履歴やコンテキストを自動管理
- **複数LLMサポート**: OpenAI、Anthropic、Ollama等に対応
- **RAG対応**: ドキュメント検索、ベクトル化を統合

---

## 1.2.3 仕組み

### 1.2.3.1 処理の流れ

1. プロンプトをテンプレート化して入力を構造化する
2. モデル呼び出しを標準化して複数プロバイダを切り替える
3. ツール呼び出しで外部データや関数実行を連携する
4. 会話履歴を保持して複数ターンの文脈を維持する
5. 出力パーサで最終形式を整えて後続処理へ渡す

### 1.2.3.2 メリット

✅ 学習曲線が緩い（初心者向け）  
✅ ドキュメント充実  
✅ 複数LLM同時対応  
✅ コミュニティが大きい  

### 1.2.3.3 デメリット

❌ 本番運用時にはオーバーヘッドがある  
❌ 設定項目が多い  
❌ バージョン更新が頻繁  

---

## 1.2.4 前提条件

### 1.2.4.1 必須スキル

- Python 基本（3.10以上推奨）
- 仮想環境の操作
- API キーの管理

### 1.2.4.2 環境

- Python 3.10+
- pip
- 仮想環境（venv推奨）

### 1.2.4.3 インストール

```bash
pip install -U "langchain[openai]" python-dotenv
```

### 1.2.4.4 API キーの設定

`.env`
```bash
OPENAI_API_KEY=sk-your-key-here
```

### 1.2.4.5 セキュリティ注意（必読）

- APIキーは `.env` で管理し、ソースコードや教材本文に直接書かない
- `.env` は Git にコミットしない（`.gitignore` に含める）
- APIキーを誤って共有した場合は、OpenAI 側で即時ローテーションする
- 共有や画面投影の前に、ターミナル履歴へキーが残っていないか確認する

### 1.2.4.6 推奨実行（再現性あり）

この教材には、実行検証用のスクリプトが同梱されています。

```powershell
# Python サンプル一括実行
./examples/run-python-samples.ps1 -ApiKey "<YOUR_KEY>"

# JavaScript サンプル一括実行
./examples/run-js-samples.ps1 -ApiKey "<YOUR_KEY>" -CleanupNodeModules
```

## 1.2.5 位置づけ

```mermaid
flowchart LR
    A[LLMアプリ開発] --> B[LangChain]
    B --> C[Prompt/Chain]
    B --> D[Tool Calling]
    B --> E[Memory]
    C --> F[単発の推論パイプライン]
    D --> G[外部関数/API連携]
    E --> H[会話継続]
```

LangChain は、LLMアプリの共通部品（Prompt、Model、Parser、Tool、Memory）を統一的に扱うための標準レイヤーです。まずは基本チェーン、次にツール呼び出し、最後に会話メモリへ進むと理解しやすくなります。

## 1.2.6 実行フロー

```mermaid
flowchart TD
    S[開始] --> P1[基本チェーン実行]
    P1 --> P2[Tool Callingエージェント実行]
    P2 --> P3[Memory付き会話実行]
    P3 --> E[終了]

    TQ[質問入力] --> AG[Agent]
    AG --> TD{ツール必要?}
    TD -->|Yes| TC[ツール実行]
    TD -->|No| AO[直接回答]
    TC --> AO
```

この教材では、同じユースケースを Python と JavaScript で比較しながら、LangChain の中核機能を順に確認します。

## 1.2.7 サンプル

### 1.2.7.1 実行順

```bash
python 01_basic-chain.py
python 02_tool-use.py
python 03_memory-persistence.py
```

### 1.2.7.2 検証

- 同じ質問でツールなし回答とツール利用回答を比較する
- 複数ターン会話で前回の文脈が反映されるか確認する

### 1.2.7.3 成功時の期待結果（要約）

- 01_basic-chain: 2つのトピック（生成AI / ベクトル検索）に対して日本語説明が返る
- 02_tool-use: `AAPL` の株価と、`1000 -> 1200` の収益率 `20%` が返る
- 03_memory-persistence: 1回目で伝えた名前を2回目で正しく復唱できる

### 1.2.7.4 典型エラーと対処

- `OPENAI_API_KEY is not set`
  対処: `.env` または環境変数へ `OPENAI_API_KEY` を設定して再実行
- `UnicodeEncodeError`（主に Windows の対話入力/パイプ入力）
  対処: 同梱の `run-python-samples.ps1` を使うか、`PYTHONUTF8=1` を設定して実行
- `LangChainPendingDeprecationWarning`（`allowed_objects`）
  対処: 現時点では動作に致命的影響なし。将来版で警告がエラー化された場合は `langgraph` の更新ノートに従い `allowed_objects` の明示設定を追加

## 1.2.8 実ソースコード（言語別に記載）

### 1.2.8.1 Python: 01_basic-chain.py

- 役割: Prompt -> LLM -> Parser の最小チェーン
- 入力: topic
- 出力: 生成テキスト
- 実行: `python 01_basic-chain.py`

```python
"""LangChain Basic Chain Example.

実行前に .env へ OPENAI_API_KEY を設定してください。
"""

from dotenv import load_dotenv
from langchain.chat_models import init_chat_model
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.output_parsers import StrOutputParser

# 環境変数読み込み
load_dotenv()

# 1. LLMモデルの初期化
# init_chat_model: プロバイダを抽象化した初期化
llm = init_chat_model(
  "openai:gpt-4o-mini",
  temperature=0.7,
)

# 2. プロンプトテンプレートの作成
# {topic} 部分が動的に置き換わる
prompt_template = ChatPromptTemplate.from_template(
    "以下のトピックについて、日本語で3行程度説明してください: {topic}"
)

# 3. チェーン構築
# Prompt -> LLM -> Output Parser の流れ
chain = prompt_template | llm | StrOutputParser()

# 4. チェーン実行
if __name__ == "__main__":
    topic = "生成AI"
    print(f"Topic: {topic}")
    print("-" * 50)

    result = chain.invoke({"topic": topic})

    print(f"Answer:\n{result}")
    print("-" * 50)

    # 別のトピックでも試す
    topic2 = "ベクトル検索"
    print(f"\nTopic: {topic2}")
    print("-" * 50)

    result2 = chain.invoke({"topic": topic2})
    print(f"Answer:\n{result2}")
```

### 1.2.8.2 Python: 02_tool-use.py

- 役割: ツールを使うエージェント実装
- 入力: question
- 出力: ツール実行を含む最終回答
- 実行: `python 02_tool-use.py`

```python
"""LangChain tool calling example (new agent API)."""

from dotenv import load_dotenv
from langchain.agents import create_agent

load_dotenv()

# ========== ツール定義 ==========
def get_stock_price(symbol: str) -> str:
    """株価を取得する（デモ用）。"""
    prices = {"AAPL": 180.5, "MSFT": 320.0, "7203": 1500.0}
    price = prices.get(symbol, "Not found")
    return f"株価情報: {symbol} = {price}"

def calculate_portfolio_return(initial: float, final: float) -> str:
    """収益率を計算する。"""
    if initial <= 0:
        return "初期投資額が不正です"

    return_rate = ((final - initial) / initial) * 100
    return f"収益率: {return_rate:.2f}%"

# ========== エージェント構築 ==========

tools = [get_stock_price, calculate_portfolio_return]
agent = create_agent(
    model="openai:gpt-4o-mini",
    tools=tools,
    system_prompt="あなたは金融アシスタントです。必要ならツールを使ってください。",
)

# ========== 実行 ==========

if __name__ == "__main__":
    questions = [
        "AAPLの現在の株価を教えてください",
        "1000ドル投資して1200ドルになった場合、収益率は何%ですか？",
    ]

    for question in questions:
        print(f"\nQuestion: {question}")
        print("-" * 60)

        result = agent.invoke(
            {
                "messages": [
                    {"role": "user", "content": question}
                ]
            }
        )

        print(f"\nAnswer: {result['messages'][-1].content}")
        print("=" * 60)
```

### 1.2.8.3 Python: 03_memory-persistence.py

- 役割: 会話履歴付きチェーンの実装
- 入力: question（複数ターン）
- 出力: 履歴を反映した回答
- 実行: `python 03_memory-persistence.py`

```python
"""LangChain memory example (new agent API + checkpointer)."""

from dotenv import load_dotenv
from langchain.agents import create_agent
from langgraph.checkpoint.memory import InMemorySaver

load_dotenv()

memory = InMemorySaver()

agent = create_agent(
    model="openai:gpt-4o-mini",
    tools=[],
    system_prompt="あなたは親切なAIアシスタントです。会話履歴を参照して回答してください。",
    checkpointer=memory,
)

# ========== 実行 ==========

if __name__ == "__main__":
    print("Chat bot with memory")
    print("=" * 60)
    print("同じ thread_id で会話すると履歴を保持します。")
    print("'exit' で終了します。")
    print("=" * 60)

    config = {"configurable": {"thread_id": "demo-thread"}}

    while True:
        user_input = input("\nYou: ").strip()

        if user_input.lower() == "exit":
            print("Bye")
            break

        if not user_input:
            continue

        result = agent.invoke(
            {
                "messages": [
                    {"role": "user", "content": user_input}
                ]
            },
            config=config,
        )

        print(f"Assistant: {result['messages'][-1].content}")
```

### 1.2.8.4 JavaScript: 01_basic-chain.js

- 役割: Node.js版の最小チェーン
- 入力: topic
- 出力: 生成テキスト
- 実行: `node 01_basic-chain.js`

```javascript
/**
 * LangChain JS Basic Chain Example
 *
 * Node.js での LangChain 基本使用法を示します。
 *
 * 実行方法:
 * npm install
 * npm start
 */

import "dotenv/config";
import { ChatOpenAI } from "@langchain/openai";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { StringOutputParser } from "@langchain/core/output_parsers";

async function main() {
  // 1. LLM の初期化
  const llm = new ChatOpenAI({
    model: "gpt-4o-mini",
    temperature: 0.7,
  });

  // 2. プロンプトテンプレート作成
  const prompt = ChatPromptTemplate.fromTemplate(
    "以下のトピックについて、日本語で3行程度説明してください: {topic}"
  );

  // 3. チェーン構築
  const chain = prompt.pipe(llm).pipe(new StringOutputParser());

  // 4. チェーン実行
  const topic = "生成AI";
  console.log(`Topic: ${topic}`);
  console.log("-".repeat(50));

  const result = await chain.invoke({ topic });

  console.log(`Answer:\n${result}`);
  console.log("-".repeat(50));

  // 別のトピック
  const topic2 = "ベクトル検索";
  console.log(`\nTopic: ${topic2}`);
  console.log("-".repeat(50));

  const result2 = await chain.invoke({ topic: topic2 });
  console.log(`Answer:\n${result2}`);
}

// エラーハンドリング付き実行
main().catch((error) => {
  console.error("❌ エラーが発生しました:", error.message);
  process.exit(1);
});
```

### 1.2.8.5 JavaScript: 02_tool-use.js

- 役割: JS版ツール呼び出しエージェント
- 入力: input
- 出力: ツール結果を反映した回答
- 実行: `node 02_tool-use.js`

```javascript
/**
 * LangChain JS Tool Use Example (new agent API)
 *
 * LLMにツール（関数）実行を命令する方法を示します。
 *
 * 実行方法:
 * npm install
 * node 02_tool-use.js
 */

import "dotenv/config";
import { createAgent, tool } from "langchain";
import * as z from "zod";

// ========== ツール定義 ==========

const getStockPriceTool = tool(
  ({ symbol }) => {
    // デモ用：ダミーデータ
    const prices = { AAPL: 180.5, MSFT: 320.0, "7203": 1500.0 };
    const price = prices[symbol] || "Not found";
    return `株価情報: ${symbol} = $${price}`;
  },
  {
    name: "get_stock_price",
    description: "銘柄コードから株価を取得します。",
    schema: z.object({
      symbol: z.string().describe("銘柄コード (例: AAPL, 7203)"),
    }),
  }
);

const calculateReturnTool = tool(
  ({ initial, final }) => {
    if (initial <= 0) return "初期投資額が不正です";
    const returnRate = ((final - initial) / initial) * 100;
    return `収益率: ${returnRate.toFixed(2)}%`;
  },
  {
    name: "calculate_return",
    description: "投資の収益率を計算します。",
    schema: z.object({
      initial: z.number().describe("初期投資額"),
      final: z.number().describe("最終価値"),
    }),
  }
);

// ========== エージェント構築 ==========

async function main() {
  const tools = [getStockPriceTool, calculateReturnTool];

  const agent = createAgent({
    model: "gpt-4o-mini",
    tools,
    systemPrompt:
      "You are a helpful financial assistant. " +
      "Use tools when needed.",
  });

  // ========== 実行 ==========

  const questions = [
    "AAPLの現在の株価は？",
    "1000ドル投資して1200ドルになった収益率は？",
  ];

  for (const question of questions) {
    console.log(`\nQuestion: ${question}`);
    console.log("-".repeat(60));

    const result = await agent.invoke({
      messages: [{ role: "user", content: question }],
    });

    const last = result.messages[result.messages.length - 1];
    console.log(`Answer: ${last.content}`);
    console.log("=".repeat(60));
  }
}

main().catch((error) => {
  console.error("❌ エラー:", error.message);
  process.exit(1);
});
```

### 1.2.8.6 JavaScript: 03_memory-persistence.js

- 役割: JS版の会話履歴管理
- 入力: input（複数ターン）
- 出力: 履歴を反映した回答
- 実行: `node 03_memory-persistence.js`

```javascript
/**
 * LangChain JS Memory Example (new agent API)
 *
 * 会話履歴を持つシンプルなチャットループ。
 * 実行前に .env へ OPENAI_API_KEY を設定してください。
 */

import "dotenv/config";
import { createAgent } from "langchain";
import { MemorySaver } from "@langchain/langgraph";

async function main() {
  const checkpointer = new MemorySaver();

  const agent = createAgent({
    model: "gpt-4o-mini",
    tools: [],
    systemPrompt: "あなたは丁寧な日本語アシスタントです。会話履歴を参照して答えてください。",
    checkpointer,
  });

  const questions = [
    "私の名前は佐藤です。覚えてください。",
    "私の名前は何ですか？",
    "この会話でやったことを2行でまとめてください。",
  ];

  const config = {
    configurable: {
      thread_id: "js-memory-demo",
    },
  };

  for (const q of questions) {
    const result = await agent.invoke(
      {
        messages: [{ role: "user", content: q }],
      },
      config
    );

    const last = result.messages[result.messages.length - 1];

    console.log(`\nQ: ${q}`);
    console.log(`A: ${last.content}`);
  }

  const state = await agent.getState(config);
  console.log(`\n履歴メッセージ数: ${state.values.messages.length}`);
}

main().catch((e) => {
  console.error("Error:", e.message);
  process.exit(1);
});
```

### 1.2.8.7 JavaScript: 依存関係メモ

- 役割: JS サンプル実行時の最小依存
- 実行: `npm install langchain @langchain/openai @langchain/langgraph zod dotenv`

```json
{
  "type": "module",
  "dependencies": {
    "@langchain/langgraph": "latest",
    "@langchain/openai": "latest",
    "dotenv": "latest",
    "langchain": "latest",
    "zod": "latest"
  }
}
```

---

## 1.2.9 補足

**Q. Langchainだけで本番環境運用できますか？**  
A. 基本的なアプリには十分ですが、本番向けには LangGraph や別のオーケストレーションツールとの組み合わせを推奨。

**Q. Llamaindex との違いは？**  
A. LangChain は汎用ライブラリ、LlamaIndex は RAG 特化。組み合わせて使うことが多いです。

**Q. ローカルLLMでも動きますか？**  
A. はい。Ollama + LangChain で完全ローカル環境構築可能。

---

## 1.2.10 参考リンク

- [LangChain 公式ドキュメント（Python）](https://docs.langchain.com/oss/python/langchain/overview)
- [LangChain 公式ドキュメント（JavaScript）](https://docs.langchain.com/oss/javascript/langchain/overview)
- [GitHub Repository](https://github.com/langchain-ai/langchain)


## 1.2.11 演習課題

1. ``LangChain`` を使う想定ユースケースを1つ定義し、入力・出力の例を記録してください。
2. 最小構成で動かし、デフォルトから設定を1つ変えて挙動の差分を確認してください。
3. ``LangChain`` を使わない場合の代替手段と比較し、選ぶ基準をまとめてください。


### 1.2.11.1 解答の目安

1. まず課題の目的を一文で明確化し、入力・出力を対応づけて記述します。
   確認ポイント: 何を変えて何を確認する課題かを第三者が読んで理解できること。
2. 最小構成で一度実行し、設定や条件を1つ変更して差分を比較します。
   確認ポイント: 変更前後の挙動差を具体的に説明できること。
3. 適用条件と代替手段を整理し、選択基準を短くまとめます。
   確認ポイント: なぜその手段を選ぶかを根拠付きで示せること。

## 1.2.12 理解度チェック

1. ``LangChain`` の主な役割を1文で説明してください。
2. ``LangChain`` を導入する際の最大のメリットと注意点は何ですか？
3. ``LangChain`` が向かないユースケースとして、どのようなケースが考えられますか？


### 1.2.12.1 解説の要点

1. 主な役割は、その技術がどの工程を担い、何を改善するかで説明します。
2. メリットは再現性・拡張性・運用性の観点で整理し、注意点は導入コストや複雑性として示します。
3. 使い分けは要件、実装コスト、運用体制の3観点で判断します。
---

[← 前へ](01-agent-orchestration/00-README.md) | [次へ →](01-agent-orchestration/02-langgraph.md)





---
level: 📖 中級（概念・実践）
prereq: Python基礎 / LLMアプリの基本概念
prev: 01-agent-orchestration/01-langchain.md
next: 01-agent-orchestration/03-autogen.md
---

# 1.3 LangGraph 入門

> 📖 中級（概念・実践） | 前提: Python基礎 / LLMアプリの基本概念

## 1.3.1 この教材で身につくこと

- ノードごとに処理を分割
- 条件分岐と再試行
- 状態オブジェクトを持ちながら処理

**バージョン**: 0.1.0+ / OSS準拠（2026-05時点）  
**公式ドキュメント**: https://langchain-ai.github.io/langgraph/

## 1.3.2 コンセプト
LangGraph は、状態を持つエージェントワークフローをグラフとして定義するライブラリです。複数ステップの分岐やループを明示できるので、実運用の対話フローに向きます。

## 1.3.3 仕組み

1. 状態オブジェクトを定義して、ノード間で共有します。
2. 各ノードは状態を受け取り、更新した状態を返します。
3. エッジで処理順を固定し、条件分岐で次ノードを選択します。
4. 再試行やループをグラフとして明示し、制御を再現可能にします。
5. 実行結果の状態を見れば、どの分岐を通ったか追跡できます。

## 1.3.4 前提条件
- Python 3.10+
- Node.js 18+（JS版を試す場合）

## 1.3.5 位置づけ

```mermaid
flowchart LR
	A[LLMアプリ基盤] --> B[LangChain]
	A --> C[LangGraph]
	B --> D[単発チェーン]
	C --> E[状態管理ワークフロー]
	E --> F[分岐]
	E --> G[再試行]
	E --> H[ループ]
```

LangGraph は、LangChain の上位で「状態を持つ処理の流れ」を設計したいときに使います。単発のプロンプト実行ではなく、条件分岐や再試行を含む実運用フローに向いています。

## 1.3.6 実行フロー

```mermaid
flowchart TD
	S[開始: user_input受け取り] --> C[classifyノード]
	C --> R[respondノード]
	R --> E[終了]

	V[validateノード] --> J{done?}
	J -->|Yes| F[finishノード]
	J -->|No| K{retries >= 2?}
	K -->|Yes| F
	K -->|No| T[retryノード]
	T --> V
```

この教材では、まず単純な classify -> respond を作り、その後 validate/retry/finish の条件分岐付きワークフローへ拡張します。

## 1.3.7 サンプル

### 1.3.7.1 実行例

```bash
python 01_basic-workflow.py
python 01_basic-workflow-llm.py
python 02_state-management.py
```

### 1.3.7.2 検証

- 入力を変えて intent が期待どおりに分岐するか確認する
- retries の上限で finish へ遷移するか確認する

## 1.3.8 実ソースコード（言語別に記載）

### 1.3.8.1 Python: 01_basic-workflow.py

- 役割: 最小の状態遷移グラフ（classify -> respond）を構築
- 入力: user_input
- 出力: intent, answer
- 実行: `python 01_basic-workflow.py`

```python
"""
LangGraph Basic Workflow

状態を1つ持つシンプルなグラフ。
input -> classify -> respond の流れを体験します。
"""

from typing import TypedDict
from langgraph.graph import StateGraph, END


class GraphState(TypedDict):
	user_input: str
	intent: str
	answer: str


def classify_intent(state: GraphState) -> GraphState:
	text = state["user_input"]
	if "株" in text or "投資" in text:
		intent = "finance"
	elif "天気" in text:
		intent = "weather"
	else:
		intent = "general"

	state["intent"] = intent
	return state


def generate_answer(state: GraphState) -> GraphState:
	intent = state["intent"]
	if intent == "finance":
		msg = "金融カテゴリとして処理します。最初は長期分散投資から学ぶのがおすすめです。"
	elif intent == "weather":
		msg = "天気カテゴリとして処理します。地域名を指定すると詳しく答えられます。"
	else:
		msg = "一般質問として処理します。具体的な前提を入れると精度が上がります。"

	state["answer"] = msg
	return state


def build_graph():
	graph = StateGraph(GraphState)
	graph.add_node("classify", classify_intent)
	graph.add_node("respond", generate_answer)

	graph.set_entry_point("classify")
	graph.add_edge("classify", "respond")
	graph.add_edge("respond", END)

	return graph.compile()


if __name__ == "__main__":
	app = build_graph()

	samples = [
		"投資初心者は何から始めるべき？",
		"明日の天気は？",
		"生成AIの学習順を教えて",
	]

	for s in samples:
		result = app.invoke({"user_input": s, "intent": "", "answer": ""})
		print("\nQ:", s)
		print("Intent:", result["intent"])
		print("A:", result["answer"])
```

### 1.3.8.2 Python: 01_basic-workflow-llm.py

- 役割: classify と respond の両ノードで LLM を呼び出す最小構成
- 前提: OpenAI API キーを環境変数 `OPENAI_API_KEY` に設定済み
- 入力: user_input
- 出力: intent, answer
- 実行: `python 01_basic-workflow-llm.py`

```python
"""
LangGraph Basic Workflow with LLM

ノード内でLLMを呼び、intent判定と応答生成を行う最小例。
OpenAI API を使用します。
"""

from typing import Literal, TypedDict
from langgraph.graph import END, StateGraph
from langchain_openai import ChatOpenAI


class GraphState(TypedDict):
	user_input: str
	intent: str
	answer: str


# モデルは用途に応じて変更可能（例: gpt-4.1-mini, gpt-4o-mini）
llm = ChatOpenAI(model="gpt-4o-mini", temperature=0)


def classify_intent(state: GraphState) -> GraphState:
	prompt = (
		"次のユーザー入力を finance / weather / general のいずれか1語だけで分類してください。\n"
		f"入力: {state['user_input']}"
	)
	out = llm.invoke(prompt).content.strip().lower()

	allowed = {"finance", "weather", "general"}
	intent: Literal["finance", "weather", "general"]
	intent = out if out in allowed else "general"

	state["intent"] = intent
	return state


def generate_answer(state: GraphState) -> GraphState:
	prompt = (
		"あなたは簡潔な日本語アシスタントです。\n"
		f"intent: {state['intent']}\n"
		f"user_input: {state['user_input']}\n"
		"2文以内で回答してください。"
	)

	state["answer"] = llm.invoke(prompt).content.strip()
	return state


def build_graph():
	graph = StateGraph(GraphState)
	graph.add_node("classify", classify_intent)
	graph.add_node("respond", generate_answer)

	graph.set_entry_point("classify")
	graph.add_edge("classify", "respond")
	graph.add_edge("respond", END)

	return graph.compile()


if __name__ == "__main__":
	app = build_graph()

	samples = [
		"投資初心者は何から始めるべき？",
		"明日の天気は？",
		"生成AIの学習順を教えて",
	]

	for s in samples:
		result = app.invoke({"user_input": s, "intent": "", "answer": ""})
		print("\nQ:", s)
		print("Intent:", result["intent"])
		print("A:", result["answer"])
```

### 1.3.8.3 Python: 02_state-management.py

- 役割: 状態（retries, logs, done）を持ち、条件分岐と再試行を実装
- 入力: user_input, retries, logs, done
- 出力: 更新後の状態
- 実行: `python 02_state-management.py`

```python
"""
LangGraph State Management

状態に履歴を持ち、条件分岐を行う例。
"""

from typing import TypedDict, List
from langgraph.graph import StateGraph, END


class WorkflowState(TypedDict):
	user_input: str
	retries: int
	logs: List[str]
	done: bool


def validate_input(state: WorkflowState) -> WorkflowState:
	text = state["user_input"].strip()
	if len(text) < 5:
		state["logs"].append("入力が短すぎるため再入力が必要")
		state["done"] = False
	else:
		state["logs"].append("入力検証OK")
		state["done"] = True
	return state


def retry_or_finish(state: WorkflowState) -> str:
	if state["done"]:
		return "finish"
	if state["retries"] >= 2:
		return "finish"
	return "retry"


def retry_step(state: WorkflowState) -> WorkflowState:
	state["retries"] += 1
	state["user_input"] = state["user_input"] + " (補足)"
	state["logs"].append(f"再試行 {state['retries']} 回目")
	return state


def finish_step(state: WorkflowState) -> WorkflowState:
	state["logs"].append("処理完了")
	return state


def build_graph():
	g = StateGraph(WorkflowState)
	g.add_node("validate", validate_input)
	g.add_node("retry", retry_step)
	g.add_node("finish", finish_step)

	g.set_entry_point("validate")
	g.add_conditional_edges("validate", retry_or_finish, {
		"retry": "retry",
		"finish": "finish",
	})
	g.add_edge("retry", "validate")
	g.add_edge("finish", END)

	return g.compile()


if __name__ == "__main__":
	app = build_graph()
	result = app.invoke({
		"user_input": "AI",
		"retries": 0,
		"logs": [],
		"done": False,
	})

	print("最終入力:", result["user_input"])
	print("再試行回数:", result["retries"])
	print("ログ:")
	for l in result["logs"]:
		print("-", l)
```

### 1.3.8.4 JavaScript: 01_basic-workflow.js

- 役割: JavaScript版の最小状態遷移グラフ
- 入力: user_input
- 出力: intent, answer
- 実行: `node 01_basic-workflow.js`

```javascript
import { StateGraph, END } from "@langchain/langgraph";

function classify(state) {
  const text = state.user_input || "";
  let intent = "general";

  if (text.includes("株") || text.includes("投資")) {
	intent = "finance";
  } else if (text.includes("天気")) {
	intent = "weather";
  }

  return { ...state, intent };
}

function respond(state) {
  const map = {
	finance: "金融カテゴリです。リスク許容度を先に決めましょう。",
	weather: "天気カテゴリです。地域を指定すると精度が上がります。",
	general: "一般カテゴリです。文脈を追加するとより具体化できます。",
  };

  return { ...state, answer: map[state.intent] ?? map.general };
}

const graph = new StateGraph({
  channels: {
	user_input: null,
	intent: null,
	answer: null,
  },
});

graph.addNode("classify", classify);
graph.addNode("respond", respond);
graph.setEntryPoint("classify");
graph.addEdge("classify", "respond");
graph.addEdge("respond", END);

const app = graph.compile();

const samples = [
  "投資を学びたい",
  "天気を教えて",
  "生成AIの勉強法は？",
];

for (const s of samples) {
  const out = await app.invoke({ user_input: s, intent: "", answer: "" });
  console.log("\nQ:", s);
  console.log("Intent:", out.intent);
  console.log("A:", out.answer);
}
```

## 1.3.9 実行手順（Python）
```bash
cd 02_langgraph-python
pip install -r 00_requirements.txt
set OPENAI_API_KEY=your_api_key   # macOS/Linux は export OPENAI_API_KEY=your_api_key
pip install langchain-openai
python 01_basic-workflow.py
python 01_basic-workflow-llm.py
python 02_state-management.py
```

## 1.3.10 実行手順（JavaScript）
```bash
cd 02_langgraph-js
npm install
node 01_basic-workflow.js
```

## 1.3.11 実行手順（Python）
```bash
cd 02_langgraph-python
pip install -r 00_requirements.txt
python 01_basic-workflow.py
python 02_state-management.py
```

## 1.3.12 実行手順（JavaScript）
```bash
cd 02_langgraph-js
npm install
node 01_basic-workflow.js
```


## 1.3.13 補足

**Q. LangGraph と LangChain の使い分けは？**  
A. LangChain は単発のチェーン（Prompt → LLM → Parser）向け。LangGraph は条件分岐・再試行・ループなど、複数ステップの制御フローが必要な場面向け。

**Q. グラフ設計の際の注意点は？**  
A. ノードが行う処理を小さく保ち、状態の構造をシンプルに設計すること。複雑な分岐は人間にとって保守しにくくなります。

**Q. エラーハンドリングはどう実装する？**  
A. ノード内で例外をキャッチして状態に書き込むか、条件分岐で「エラー分岐」を用意するのが一般的です。

---

## 1.3.14 参考リンク

- [LangGraph 公式ドキュメント](https://langchain-ai.github.io/langgraph/)
- [LangChain JS ドキュメント](https://docs.langchain.com/oss/javascript/langchain/overview)
- [GitHub: LangGraph](https://github.com/langchain-ai/langgraph)
- [State Management ガイド](https://langchain-ai.github.io/langgraph/concepts/agentic_concepts/#state-management)

---

## 1.3.15 演習課題

1. ``LangGraph 入門`` を使う想定ユースケースを1つ定義し、入力・出力の例を記録してください。
2. 最小構成で動かし、デフォルトから設定を1つ変えて挙動の差分を確認してください。
3. ``LangGraph 入門`` を使わない場合の代替手段と比較し、選ぶ基準をまとめてください。


### 1.3.15.1 解答の目安

1. まず課題の目的を一文で明確化し、入力・出力を対応づけて記述します。
   確認ポイント: 何を変えて何を確認する課題かを第三者が読んで理解できること。
2. 最小構成で一度実行し、設定や条件を1つ変更して差分を比較します。
   確認ポイント: 変更前後の挙動差を具体的に説明できること。
3. 適用条件と代替手段を整理し、選択基準を短くまとめます。
   確認ポイント: なぜその手段を選ぶかを根拠付きで示せること。

## 1.3.16 理解度チェック

1. ``LangGraph 入門`` の主な役割を1文で説明してください。
2. ``LangGraph 入門`` を導入する際の最大のメリットと注意点は何ですか？
3. ``LangGraph 入門`` が向かないユースケースとして、どのようなケースが考えられますか？


### 1.3.16.1 解説の要点

1. 主な役割は、その技術がどの工程を担い、何を改善するかで説明します。
2. メリットは再現性・拡張性・運用性の観点で整理し、注意点は導入コストや複雑性として示します。
3. 使い分けは要件、実装コスト、運用体制の3観点で判断します。
---

[← 前へ](01-agent-orchestration/01-langchain.md) | [次へ →](01-agent-orchestration/03-autogen.md)





---
level: 📖 中級（概念・実践）
prereq: Python基礎 / LLMアプリの基本概念
prev: 01-agent-orchestration/02-langgraph.md
next: 01-agent-orchestration/04-crewai.md
---

# 1.4 AutoGen 入門

> 📖 中級（概念・実践） | 前提: Python基礎 / LLMアプリの基本概念

## 1.4.1 この教材で身につくこと

- AutoGen 入門 の主な役割と適用場面を説明できる
- AutoGen 入門 を最小構成で動かす手順を実行できる
- 導入時のメリットと注意点を整理できる

## 1.4.2 コンセプト
AutoGen は複数エージェントが協調してタスクを進めるフレームワークです。役割を分けた対話を作れるため、レビュー付き生成や議論型の自動化に向きます。

**バージョン**: pyautogen 0.2.34+ / OSS準拠（2026-05時点）  
**公式ドキュメント**: https://microsoft.github.io/autogen/


## 1.4.3 仕組み・実行フロー（サンプルに準拠）

AutoGenの典型的な実行フローは以下の通りです：

1. **APIキー確認**：OpenAI互換APIキーが設定されているか確認
2. **LLM設定**：llm_configを生成し、モデルやパラメータを指定
3. **エージェント生成**：Planner（計画担当）・Reviewer（レビュー担当）など役割ごとにエージェントを作成
4. **対話開始**：初期メッセージを与え、エージェント間で対話を進行
5. **判定**：Reviewerが「合格」と判定したら終了

この流れは、サンプルコードや下記のmermaid図とも対応しています。

## 1.4.4 前提条件
- Python 3.12+
- OpenAI 互換 API キー

## 1.4.5 位置づけ

```mermaid
flowchart LR
	A[マルチエージェント設計] --> B[AutoGen]
	B --> C[AssistantAgent]
	B --> D[UserProxyAgent]
	C --> E[役割分担]
	E --> F[Planner]
	E --> G[Reviewer]
```

AutoGen は、エージェント間の対話を直接設計したい場面で有効です。実装担当とレビュー担当を分けることで、1回の生成よりも品質を上げやすくなります。

## 1.4.6 実行フロー（サンプルと対応）


```mermaid
flowchart TD
  S[開始] --> K[APIキー確認]
  K --> L[llm_config生成]
  L --> P[Planner作成]
  P --> R[Reviewer作成]
  R --> G[GroupChat/Manager生成]
  G --> M[初期メッセージ投入]
  M --> D[自動対話（Planner→Reviewer）]
  D -- 合格判定未達 --> D
  D -- 合格判定で終了 --> J[終了]
```

この教材のサンプルは「GroupChat/GroupChatManager」を使い、Planner/Reviewerの2エージェントが自動で対話し、Reviewerが「合格」と判定した時点で終了します。


## 1.4.7 実ソースコード（言語別に記載）
### 1.4.7.1 Python: requirements.txt

- 役割: 実行に必要な依存関係を固定
- 入力: なし
- 出力: uvでインストール可能なパッケージ一覧
- 実行:
	- uv推奨: `uv pip install -r requirements.txt`
		（uv未導入の場合は `pip install uv` で導入）
	- pipも利用可: `pip install -r requirements.txt`

```txt
pyautogen==0.2.34
python-dotenv==1.0.0
```


### 1.4.7.2 Python: 01_two-agents-chat.py（GroupChat/GroupChatManager版）

- 役割: Planner/Reviewer の2エージェント対話を自動で進行
- 入力: タスク文（例: AWSトレーニング計画）
- 出力: 計画案とレビュー結果（全ログ）
- 実行: `python 01_two-agents-chat.py`


```python
"""
AutoGen Two Agents Chat (GroupChat版)

【実行フロー】
1. APIキー確認
2. LLM設定（llm_config生成）
3. Planner/Reviewerエージェント生成
4. GroupChat/Manager生成
5. 対話開始（初期メッセージ投入）
6. Reviewerが「合格」と判定したら自動終了
"""

import os
from dotenv import load_dotenv
import autogen

load_dotenv()

def main() -> None:
    api_key = os.getenv("OPENAI_API_KEY")
    if not api_key:
        raise RuntimeError("OPENAI_API_KEY が未設定です。.env を確認してください。")

    llm_config = {
        "config_list": [
            {
                "model": "gpt-4o-mini",
                "api_key": api_key,
            }
        ],
        "temperature": 0.2,
    }

    planner = autogen.AssistantAgent(
        name="Planner",
        llm_config=llm_config,
        system_message=(
            "あなたは実装計画担当です。"
            "初心者にも分かる箇条書きで、短い計画を作成してください。"
        ),
    )

    reviewer = autogen.AssistantAgent(
        name="Reviewer",
        llm_config=llm_config,
        system_message=(
            "あなたはレビュー担当です。"
            "計画が基準を満たしていれば必ず『合格』と明記し、"
            "そうでなければ欠落点を2つまで指摘し、改善案を提案してください。"
        ),
    )


    from autogen import GroupChat, GroupChatManager

    groupchat = GroupChat(
        agents=[planner, reviewer],
        messages=[],
        max_round=10,
    )
    manager = GroupChatManager(groupchat=groupchat, human_input_mode="NEVER")
    initial_message = [{
        "content": "会社の新入社員向けに、3時間で完結するAWSトレーニング計画（セッションごとのテーマ・時間・内容）を作成してください。各セッションのテーマ・所要時間・学習内容を箇条書きで示してください。",
        "role": "user"
    }]

    # --- 合格判定で自動終了するラッパー ---
    def run_until_pass(manager, groupchat, initial_message, planner, reviewer):
        messages = initial_message
        for i in range(groupchat.max_round):
            # run_chatは1ターンずつ進める設計ではないため、会話履歴を都度確認
            manager.run_chat(messages=messages, config=groupchat, sender=planner)
            # Reviewerの最新発言を取得
            reviewer_msgs = [m for m in groupchat.messages if m.get("name") == reviewer.name]
            if reviewer_msgs and "合格" in reviewer_msgs[-1].get("content", ""):
                print("\n基準を満たしました。終了します。")
                break
            # Plannerの最新発言を次ターンのmessagesに渡す
            planner_msgs = [m for m in groupchat.messages if m.get("name") == planner.name]
            if planner_msgs:
                messages = [planner_msgs[-1]]
            else:
                break

    run_until_pass(manager, groupchat, initial_message, planner, reviewer)

if __name__ == "__main__":
    main()
```

## 1.4.8 実行
```bash
cd 03_autogen-python
uv pip install -r requirements.txt  # uv推奨
.venv\Scripts\activate  # 仮想環境を使う場合（Windows例）
python 01_two-agents-chat.py
```

### 1.4.8.1 サンプル実行結果例（抜粋）

```plaintext
[33m[autogen.oai.client: 05-22 23:52:07] {164} WARNING - The API key specified is not a valid OpenAI format; it won't work with the OpenAI-hosted model.[0m
[33m[autogen.oai.client: 05-22 23:52:08] {164} WARNING - The API key specified is not a valid OpenAI format; it won't work with the OpenAI-hosted model.[0m

Next speaker: Reviewer

Reviewer (to chat_manager):

合格

以下は新入社員向けの3時間で完結するAWSトレーニング計画です。

### トレーニング計画

#### セッション1: AWSの基本概念 (30分)
- **テーマ**: AWSとは何か
- **所要時間**: 30分
- **学習内容**:
  - クラウドコンピューティングの概要
  - AWSのサービスとその利点
  - AWSのグローバルインフラストラクチャ

#### セッション2: AWS管理コンソールの使い方 (30分)
- **テーマ**: AWS管理コンソールのナビゲーション
- **所要時間**: 30分
- **学習内容**:
  - AWS管理コンソールへのログイン方法
  - 基本的なサービスの探し方
  - リソースの作成と管理

#### セッション3: EC2の基本 (1時間)
- **テーマ**: Amazon EC2の概要と利用方法
- **所要時間**: 1時間
- **学習内容**:
  - EC2インスタンスの種類と用途
  - インスタンスの起動と設定
  - セキュリティグループの設定

#### セッション4: S3の基本 (30分)
- **テーマ**: Amazon S3の利用
- **所要時間**: 30分
- **学習内容**:
  - S3の基本概念とユースケース
  - バケットの作成とオブジェクトのアップロード
  - アクセス管理とセキュリティ

#### セッション5: AWSの料金体系とコスト管理 (30分)
- **テーマ**: AWSの料金モデル
- **所要時間**: 30分
- **学習内容**:
  - AWSの料金体系の概要
  - コスト管理ツールの紹介
  - 無料利用枠の活用方法

### 合計所要時間: 3時間

この計画は新入社員がAWSの基本を理解し、実際に操作するための基礎を築くことを目的としています。

--------------------------------------------------------------------------------

Next speaker: Planner

Planner (to chat_manager):

### AWSトレーニング計画 (3時間)

#### セッション1: AWSの基本概念 (30分)
- **目的**: AWSの全体像を理解する
- **内容**:
  - クラウドコンピューティングとは
  - AWSの主要サービスと利点
  - AWSのインフラストラクチャの概要

#### セッション2: AWS管理コンソールの使い方 (30分)
- **目的**: AWS管理コンソールの操作を学ぶ
- **内容**:
  - 管理コンソールへのログイン方法
  - サービスの検索方法
  - リソースの作成と管理方法

#### セッション3: EC2の基本 (1時間)
- **目的**: EC2の基本を理解し、操作する
- **内容**:
  - EC2インスタンスの種類と用途
  - インスタンスの起動手順
  - セキュリティグループの設定方法

#### セッション4: S3の基本 (30分)
- **目的**: S3の使い方を学ぶ
- **内容**:
  - S3の基本概念とユースケース
  - バケットの作成とオブジェクトのアップロード方法
  - アクセス管理とセキュリティの設定

#### セッション5: AWSの料金体系とコスト管理 (30分)
- **目的**: AWSの料金モデルを理解する
- **内容**:
  - AWSの料金体系の概要
  - コスト管理ツールの紹介
  - 無料利用枠の活用方法

### 合計所要時間: 3時間

この計画は新入社員がAWSの基本を理解し、実際に操作するための基礎を築くことを目的としています。

--------------------------------------------------------------------------------

Next speaker: Reviewer

Reviewer (to chat_manager):

合格

改訂版のAWSトレーニング計画は、非常に充実した内容になっています。事前準備、ハンズオン、Q&A、ケーススタディ、フォローアップの要素が組み込まれており、参加者が実践的に学び、理解を深めるための良い環境が整っています。

### さらなる提案
特に欠落点は見受けられませんが、以下の点を考慮するとさらに良いトレーニング計画になるかもしれません。

1. **グループディスカッションの導入**:
   - 各セッションのケーススタディ後に、参加者を小グループに分けてディスカッションを行う時間を設けることで、異なる視点やアイデアを共有し、理解を深めることができます。

2. **実践的なプロジェクトの提案**:
   - トレーニング終了後に、参加者が自分の学びを活かせるような小規模なプロジェクトを提案し、実際にAWSを使ってみる機会を提供すると良いでしょう。

これらの提案を取り入れることで、トレーニングの効果をさらに高め、参加者の学習体験をより豊かにすることができるでしょう。全体として、非常に良いトレーニング計画です！

--------------------------------------------------------------------------------

基準を満たしました。終了します。
```

> ※実際の出力はAPIやプロンプト内容により異なりますが、「合格」判定が複数回現れる場合があるのはAutoGenのGroupChatManagerの仕様によるものです。

## 1.4.9 補足

**Q. run_until_passで「合格」が1回目で出ても、なぜ複数ターン分の会話が記録されるの？**  
A. AutoGenのGroupChatManagerのrun_chatは、messages引数を起点に複数ターン分のやりとりを一度に自動進行します。そのため、Reviewerが1回目で「合格」と出力しても、run_chat実行時にPlanner→Reviewerの会話が複数回分まとめて進み、結果として複数ターン分の会話が履歴に記録されます。現状のAPI仕様では、1ターンごとに厳密に制御することは難しいため、この挙動は仕様上の制約です。

**Q. 合格判定はどのように行われる？**  
A. Reviewerのsystem_messageで「合格」と明記するよう指示し、出力に「合格」が含まれるか人間が確認します。AutoGen本体は自動判定しません。

**Q. AutoGen と LangGraph の使い分けは？**  
A. AutoGen は「エージェント間の自然な対話」を重視する設計。LangGraph は「状態とグラフで厳密に制御」したい場面向け。AutoGen の方が実装が簡単ですが、ログ解析やデバッグは手間がかかります。

**Q. max_consecutive_auto_reply の値を大きくしても大丈夫？**  
A. API 呼び出し回数が増え、コストが嵩みます。3～5 程度に抑え、ループのリスクを低くするのが推奨。

**Q. code_execution_config を有効にできる？**  
A. はい。`{"last_n_messages": 2, "work_dir": "./code"}` のように設定すれば、エージェントが生成コードを実行できます。セキュリティリスクに注意。

---

## 1.4.10 参考リンク

- [AutoGen 公式ドキュメント](https://microsoft.github.io/autogen/)
- [AutoGen GitHub](https://github.com/microsoft/autogen)
- [Agent Configuration Guide](https://microsoft.github.io/autogen/docs/Use-Cases/agent_chat)
- [LLM Configuration](https://microsoft.github.io/autogen/docs/Getting-Started/Installation)

---

## 1.4.11 演習課題

1. ``AutoGen 入門`` を使う想定ユースケースを1つ定義し、入力・出力の例を記録してください。
2. 最小構成で動かし、デフォルトから設定を1つ変えて挙動の差分を確認してください。
3. ``AutoGen 入門`` を使わない場合の代替手段と比較し、選ぶ基準をまとめてください。


### 1.4.11.1 解答の目安

1. まず課題の目的を一文で明確化し、入力・出力を対応づけて記述します。
   確認ポイント: 何を変えて何を確認する課題かを第三者が読んで理解できること。
2. 最小構成で一度実行し、設定や条件を1つ変更して差分を比較します。
   確認ポイント: 変更前後の挙動差を具体的に説明できること。
3. 適用条件と代替手段を整理し、選択基準を短くまとめます。
   確認ポイント: なぜその手段を選ぶかを根拠付きで示せること。

## 1.4.12 理解度チェック

1. ``AutoGen 入門`` の主な役割を1文で説明してください。
2. ``AutoGen 入門`` を導入する際の最大のメリットと注意点は何ですか？
3. ``AutoGen 入門`` が向かないユースケースとして、どのようなケースが考えられますか？


### 1.4.12.1 解説の要点

1. 主な役割は、その技術がどの工程を担い、何を改善するかで説明します。
2. メリットは再現性・拡張性・運用性の観点で整理し、注意点は導入コストや複雑性として示します。
3. 使い分けは要件、実装コスト、運用体制の3観点で判断します。
---

[← 前へ](01-agent-orchestration/02-langgraph.md) | [次へ →](01-agent-orchestration/04-crewai.md)





---
level: 📖 中級（概念・実践）
prereq: Python基礎 / LLMアプリの基本概念
prev: 01-agent-orchestration/03-autogen.md
next: 01-agent-orchestration/05-semantic-kernel.md
---


# 1.5 CrewAI 体系ガイド：設計・選択・実践

> 📖 中級（概念・実践） | 前提: Python基礎 / LLMアプリの基本概念

---

## 1.5.1 1. CrewAIとは何か

- **目的**: 役割分担型のマルチエージェント協調フレームワーク。タスク分割・責務明確化・再現性ある自動化に強み。
- **特徴**: Agent/Task/Crew/Processの明示的設計。順次/階層型プロセス。OSSで拡張性あり。
- **主な適用領域**: 分業・レビュー・段階的品質向上・再現性重視の業務自動化。
- **バージョン**: 0.41.1+（2026-05時点）
- **公式**: https://docs.crewai.com/

### 1.5.1.1 他フレームワークとの違い
| フレームワーク | 構造 | 柔軟性 | 適用例 |
|---|---|---|---|
| CrewAI | 役割・タスク・プロセスを先に定義 | 高い再現性・運用性 | 本番運用・品質管理 |
| AutoGen | エージェント間の対話を柔軟に設計 | 柔軟な対話・探索 | 研究・PoC・対話型 |

---

## 1.5.2 2. 基本構造と設計パターン

### 1.5.2.1 構成要素
- **Agent**: 役割・目標・個別プロンプトを持つ実行主体
- **Task**: 期待出力・説明・担当Agentを持つ作業単位
- **Crew**: Agent/Task/Processを束ねるチーム
- **Process**: 実行順序（sequential/hierarchical）

### 1.5.2.2 プロセス設計
- **sequential**: タスクを順番に実行。前段の出力を次段へ渡す。
- **hierarchical**: マネージャーAgentが全体を統括し、サブタスクを動的に割り当て。

#### 1.5.2.2.1 Mermaid図（構造）
```mermaid
flowchart LR
    A[マルチエージェント運用] --> B[CrewAI]
    B --> C[Agent]
    B --> D[Task]
    B --> E[Crew]
    E --> F[Sequential Process]
    E --> G[Hierarchical Process]
```

---

## 1.5.3 3. プロセス制御と拡張

### 1.5.3.1 タスク分割・役割分担の設計指針
- ゴールを明確化し、責務ごとにAgent/Taskを分割
- レビュー・改善・検証など多段階化も容易

### 1.5.3.2 「繰り返し制御」の可否と実現方法
- CrewAI標準（sequential/hierarchical）は「定義したタスクを一度ずつ実行」する設計
- **自動ループ（基準を満たすまで繰り返す）**は標準APIでは未サポート

#### 1.5.3.2.1 実現パターン
1. **Python側でCrew実行をラップ**
    ```python
    while True:
        result = crew.kickoff()
        if 検証関数(result):
            break
    ```
2. **プロンプト工夫**
    - Agent/Taskの説明に「基準を満たすまで再実行・改善」と明記し、出力に合格判定・再依頼を促す
3. **hierarchical＋マネージャー型**
    - マネージャーAgentが合否判定し、必要に応じて再タスク生成（ただし現状は自動再生成は難しい）

---

## 1.5.4 4. 実装例

### 1.5.4.1 最小構成サンプル
（2エージェント・2タスク・sequentialプロセス）
```python
import os
from dotenv import load_dotenv
from crewai import Agent, Task, Crew, Process

load_dotenv()

def ensure_key() -> None:
    if not os.getenv("OPENAI_API_KEY"):
        raise RuntimeError("OPENAI_API_KEY が設定されていません")

def main() -> None:
    ensure_key()

    analyst = Agent(
        role="AWS Professional",
        goal="会社の新人向けに3時間で完結するAWSトレーニング計画を作成する",
        backstory="初心者向け説明が得意なAWSプロフェッショナル",
        verbose=True,
    )

    reviewer = Agent(
        role="Quality Reviewer",
        goal="トレーニング計画の抜け漏れや分かりにくい点を検出し、改善提案を行う",
        backstory="品質保証担当としてAWS教育の観点を持つ",
        verbose=True,
    )

    task1 = Task(
        description=(
            "会社の新入社員向けに、3時間で完結するAWSトレーニング計画を作成してください。"
            "各セッションのテーマ・所要時間・学習内容を箇条書きで示してください。"
        ),
        expected_output="3時間分のAWSトレーニング計画（セッションごとのテーマ・時間・内容）",
        agent=analyst,
    )

    task2 = Task(
        description="task1 の結果をレビューし、改善提案を3点以内で示してください。",
        expected_output="レビューコメントと改善版",
        agent=reviewer,
    )

    crew = Crew(
        agents=[analyst, reviewer],
        tasks=[task1, task2],
        process=Process.sequential,
        verbose=True,
    )

    result = crew.kickoff()

if __name__ == "__main__":
    main()
```

### 1.5.4.2 Python: requirements.txt

- 役割: CrewAI教材の依存関係を固定
- 入力: なし
- 出力: インストール対象パッケージ一覧

```txt
crewai==0.41.1
python-dotenv==1.0.0
```

---

## 1.5.5 セットアップ手順（推奨: uv 利用）
### 1.5.5.1 文字化け・cp932エラー対策（Windows）
CrewAIの出力には絵文字などのUnicode文字が含まれるため、Windows標準のcp932（Shift_JIS）環境ではエンコードエラーが発生します。下記のいずれかを実施してください。

### 1.5.5.2 1. 仮想環境の作成（Python 3.12系必須）
```bash
uv venv .venv
# Windowsの場合
.venv\Scripts\activate
# macOS/Linuxの場合
source .venv/bin/activate
```

### 1.5.5.3 2. 依存パッケージのインストール
```bash
uv pip install -r requirements.txt
```

### 1.5.5.4 3. 文字化け・cp932エラー対策（Windows）
CrewAIの出力にはUnicode文字が含まれるため、Windows標準のcp932環境ではエンコードエラーが発生します。下記のいずれかを実施してください。

```powershell
chcp 65001
$env:PYTHONIOENCODING="utf-8"
```

### 1.5.5.5 4. CrewAIサンプルの実行と証拠ファイル生成
```bash
python 01_basic-crew.py
```

### 1.5.5.6 5. 実行結果
```console
┌──────────────────────────────────────────────────────────── 🚀 Crew Execution Started ─────────────────────────────────────────────────────────────┐
│                                                                                                                                                    │
│  Crew Execution Started                                                                                                                            │
│  Name: crew                                                                                                                                        │
│  ID: a1a466a3-9e02-4629-97c9-de6aa1df25af                                                                                                          │
│                                                                                                                                                    │
│                                                                                                                                                    │
└────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘

┌───────────────────────────────────────────────────────────────── 📋 Task Started ──────────────────────────────────────────────────────────────────┐
│                                                                                                                                                    │
│  Task Started                                                                                                                                      │
│  Name:                                                                                                                                             │
│  会社の新入社員向けに、3時間で完結するAWSトレーニング計画を作成してください。各セッションのテーマ・所要時間・学習内容を箇条書きで示してください。  │
│  ID: b9cc19a1-b9cd-4eb3-bbac-0651e8cb8869                                                                                                          │
│                                                                                                                                                    │
│                                                                                                                                                    │
└────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘

┌───────────────────────────────────────────────────────────────── 🤖 Agent Started ─────────────────────────────────────────────────────────────────┐
│                                                                                                                                                    │
│  Agent: AWS Professional                                                                                                                           │
│                                                                                                                                                    │
│  Task:                                                                                                                                             │
│  会社の新入社員向けに、3時間で完結するAWSトレーニング計画を作成してください。各セッションのテーマ・所要時間・学習内容を箇条書きで示してください。  │
│                                                                                                                                                    │
└────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘

[35m[Finalize] todos_count=0, todos_with_results=0[0m
┌────────────────────────────────────────────────────────────── ✅ Agent Final Answer ───────────────────────────────────────────────────────────────┐
│                                                                                                                                                    │
│  Agent: AWS Professional                                                                                                                           │
│                                                                                                                                                    │
│  Final Answer:                                                                                                                                     │
│  【3時間で完結する新入社員向けAWSトレーニング計画】                                                                                                │
│                                                                                                                                                    │
│  ■趣旨                                                                                                                                             │
│  AWSの基礎を理解し、今後の業務で活用できる土台を作るための初心者向け研修。                                                                         │
│  実際に手を動かすハンズオンは時間の都合上省き、概念理解と主要サービスの全体像把握を中心に進める。                                                  │
│                                                                                                                                                    │
│  ---                                                                                                                                               │
│                                                                                                                                                    │
│  ### セッション① AWSとクラウド基礎理解                                                                                                             │
│  - 時間：40分                                                                                                                                      │
│  - 学習内容：                                                                                                                                      │
│    - クラウドコンピューティングとは何か（従来のオンプレミスとの違い、メリット）                                                                    │
│    - AWSの概要（歴史、グローバルインフラ、リージョン・アベイラビリティゾーンの概念）                                                               │
│    - AWSの料金体系と無料利用枠の説明                                                                                                               │
│    - AWS管理コンソールの紹介（画面構成、主要操作方法のイメージ）                                                                                   │
│                                                                                                                                                    │
│  ---                                                                                                                                               │
│                                                                                                                                                    │
│  ### セッション② 主要サービスとその用途理解                                                                                                        │
│  - 時間：70分                                                                                                                                      │
│  - 学習内容：                                                                                                                                      │
│    - コンピューティング系                                                                                                                          │
│      - Amazon EC2（仮想サーバーの概念、用途）                                                                                                      │
│      - AWS Lambda（サーバーレス実行の概念）                                                                                                        │
│    - ストレージ系                                                                                                                                  │
│      - Amazon S3（オブジェクトストレージの仕組みと特徴）                                                                                           │
│    - ネットワーク系                                                                                                                                │
│      - VPC（仮想ネットワークの概念）                                                                                                               │
│    - データベース系                                                                                                                                │
│      - Amazon RDS（マネージドデータベースの概要）                                                                                                  │
│    - セキュリティ系                                                                                                                                │
│      - IAM（認証と権限管理の基本）                                                                                                                 │
│    - 上記サービスを業務でどう使うかの簡単なケーススタディ・紹介                                                                                    │
│                                                                                                                                                    │
│  ---                                                                                                                                               │
│                                                                                                                                                    │
│  ### セッション③ AWSアカウント作成から簡単な操作紹介                                                                                               │
│  - 時間：50分                                                                                                                                      │
│  - 学習内容：                                                                                                                                      │
│    - AWSアカウント作成の流れ（注意点含む）                                                                                                         │
│    - AWS管理コンソールのログインとダッシュボード概要                                                                                               │
│    - IAMユーザーの作成と権限設定の基礎                                                                                                             │
│    - EC2インスタンス起動のデモ（実際に起動・停止・削除の流れを画面で見せる）                                                                       │
│    - S3バケット作成とファイルアップロードのデモ                                                                                                    │
│    - 質疑応答                                                                                                                                      │
│                                                                                                                                                    │
│  ---                                                                                                                                               │
│                                                                                                                                                    │
│  ### セッション④ 今後の学習指針とリソース紹介                                                                                                      │
│  - 時間：20分                                                                                                                                      │
│  - 学習内容：                                                                                                                                      │
│    - AWS 公式ドキュメントと無料トレーニング（AWS Skill Builder等）                                                                                 │
│    - よく使うAWS CLIの軽い紹介（触るタイミングについて）                                                                                           │
│    - AWS Well-Architected Frameworkの概要                                                                                                          │
│    - 社内でのAWS利用ルールやサポート体制の案内                                                                                                     │
│    - 今後推奨される学習ロードマップ案内（資格取得含む）                                                                                            │
│                                                                                                                                                    │
│  ---                                                                                                                                               │
│                                                                                                                                                    │
│  ### 合計時間：40 + 70 + 50 + 20 = 180分（3時間）                                                                                                  │
│                                                                                                                                                    │
│  ---                                                                                                                                               │
│                                                                                                                                                    │
│  【備考】                                                                                                                                          │
│  - 各セッションには随時質疑応答を入れて理解を促進する。                                                                                            │
│  - 実際の手を動かすハンズオンは後日別途実施推奨。                                                                                                  │
│  - 新入社員のITリテラシーに応じて、基礎用語の補足説明も随時行う。                                                                                  │
│                                                                                                                                                    │
└────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────── 📋 Task Completion ────────────────────────────────────────────────────────────────┐
│                                                                                                                                                    │
│  Task Completed                                                                                                                                    │
│  Name:                                                                                                                                             │
│  会社の新入社員向けに、3時間で完結するAWSトレーニング計画を作成してください。各セッションのテーマ・所要時間・学習内容を箇条書きで示してください。  │
│  Agent: AWS Professional                                                                                                                           │
│                                                                                                                                                    │
│                                                                                                                                                    │
└────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘

┌───────────────────────────────────────────────────────────────── 📋 Task Started ──────────────────────────────────────────────────────────────────┐
│                                                                                                                                                    │
│  Task Started                                                                                                                                      │
│  Name: task1 の結果をレビューし、改善提案を3点以内で示してください。                                                                               │
│  ID: 503ed5a0-4ea5-48fb-9bf3-7a39d04262c5                                                                                                          │
│                                                                                                                                                    │
│                                                                                                                                                    │
└────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘

┌───────────────────────────────────────────────────────────────── 🤖 Agent Started ─────────────────────────────────────────────────────────────────┐
│                                                                                                                                                    │
│  Agent: Quality Reviewer                                                                                                                           │
│                                                                                                                                                    │
│  Task: task1 の結果をレビューし、改善提案を3点以内で示してください。                                                                               │
│                                                                                                                                                    │
└────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘

[35m[Finalize] todos_count=0, todos_with_results=0[0m
┌────────────────────────────────────────────────────────────── ✅ Agent Final Answer ───────────────────────────────────────────────────────────────┐
│                                                                                                                                                    │
│  Agent: Quality Reviewer                                                                                                                           │
│                                                                                                                                                    │
│  Final Answer:                                                                                                                                     │
│  【レビューコメント】                                                                                                                              │
│                                                                                                                                                    │
│  1. ハンズオン省略による理解促進の工夫不足                                                                                                         │
│  　本研修は時間の都合上ハンズオンを省略しているため、理解が抽象的になりやすく知識定着が懸念されます。コンソール画面の説明やデモはあるものの、参加  │
│  者が主体的に操作感を掴めない点を補う演習的な要素やインタラクティブ性が不足しています。簡易的なクイズや選択問題、インタラクションを取り入れて理解  │
│  度確認を行う仕掛けを設けることが望ましいです。                                                                                                    │
│                                                                                                                                                    │
│  2. AWS料金体系と無料利用枠の説明の具体性不足                                                                                                      │
│  　料金体系は参加者にとって理解が難しいテーマであり、セッション①で触れるものの「説明」とあるだけで具体的にどのような料金モデルがあるのか、どのリ   │
│  ソースが無料利用枠に該当するのかが不明確です。特に新入社員が誤解しやすい部分なので、料金計算の例示や無料利用枠の代表的サービスを図解や表で示した  │
│  方が分かりやすくなります。                                                                                                                        │
│                                                                                                                                                    │
│  3. セキュリティ系サービス（IAM）の説明・演習の充実不足                                                                                            │
│  　IAMはAWSのセキュリティの基礎中の基礎であり、最も重要なサービスの一つですが、セッション②では「認証と権限管理の基本」との記載に留まり、具体的な   │
│  権限設定の概念やベストプラクティスまで踏み込んでいません。セッション③でのIAMユーザー作成もデモに留まるため、最低限権限の原則（Least               │
│  Privilege）やグループ/ロール適用の考え方の説明や簡単な判断演習を加え、理解促進を図ることを推奨します。                                            │
│                                                                                                                                                    │
│  ---                                                                                                                                               │
│                                                                                                                                                    │
│  【改善版トレーニング計画抜粋（該当部分のみ修正）】                                                                                                │
│                                                                                                                                                    │
│  ---                                                                                                                                               │
│                                                                                                                                                    │
│  ### セッション① AWSとクラウド基礎理解                                                                                                             │
│  - 時間：40分                                                                                                                                      │
│  - 学習内容：                                                                                                                                      │
│    - クラウドコンピューティングとは何か（従来のオンプレミスとの違い、メリット）                                                                    │
│    - AWSの概要（歴史、グローバルインフラ、リージョン・アベイラビリティゾーンの概念）                                                               │
│    -                                                                                                                                               │
│  AWSの料金体系（料金モデルの種類：オンデマンド・リザーブド・スポット等の概要、料金計算例）と無料利用枠の詳細（主要サービスの対象範囲、無料利用枠   │
│  の使い方）                                                                                                                                        │
│      →【補足資料や図表を用いて視覚的に説明】                                                                                                       │
│    - AWS管理コンソールの紹介（画面構成、主要操作方法のイメージ）                                                                                   │
│    - 理解度確認クイズ（簡単な3問程度）を実施し、理解の確認と質疑応答へ活用                                                                         │
│                                                                                                                                                    │
│  ---                                                                                                                                               │
│                                                                                                                                                    │
│  ### セッション② 主要サービスとその用途理解                                                                                                        │
│  - 時間：70分                                                                                                                                      │
│  - 学習内容：                                                                                                                                      │
│    - コンピューティング系                                                                                                                          │
│      - Amazon EC2（仮想サーバーの概念、用途）                                                                                                      │
│      - AWS Lambda（サーバーレス実行の概念）                                                                                                        │
│    - ストレージ系                                                                                                                                  │
│      - Amazon S3（オブジェクトストレージの仕組みと特徴）                                                                                           │
│    - ネットワーク系                                                                                                                                │
│      - VPC（仮想ネットワークの概念）                                                                                                               │
│    - データベース系                                                                                                                                │
│      - Amazon RDS（マネージドデータベースの概要）                                                                                                  │
│    - セキュリティ系                                                                                                                                │
│      - IAM（認証と権限管理の基本と権限設定の概要、ベストプラクティスの紹介）                                                                       │
│        →【最小権限の原則、グループやロールの活用例を図解で説明】                                                                                   │
│    - 上記サービスを業務でどう使うかの簡単なケーススタディ・紹介                                                                                    │
│    - 理解促進のためのミニ演習（例：IAMユーザーに適切な権限を付与する選択問題）                                                                     │
│                                                                                                                                                    │
│  ---                                                                                                                                               │
│                                                                                                                                                    │
│  ### セッション③ AWSアカウント作成から簡単な操作紹介                                                                                               │
│  - 時間：50分                                                                                                                                      │
│  - 学習内容：                                                                                                                                      │
│    - AWSアカウント作成の流れ（注意点含む）                                                                                                         │
│    - AWS管理コンソールのログインとダッシュボード概要                                                                                               │
│    - IAMユーザーの作成と権限設定の基礎  → 【画面デモ＋演習問題やチェックリストを用意し、理解度向上支援】                                           │
│    - EC2インスタンス起動のデモ（実際に起動・停止・削除の流れを画面で見せる）                                                                       │
│    - S3バケット作成とファイルアップロードのデモ                                                                                                    │
│    - 質疑応答                                                                                                                                      │
│                                                                                                                                                    │
│  ---                                                                                                                                               │
│                                                                                                                                                    │
│  【備考】                                                                                                                                          │
│  - 各セッションでの質疑応答に加え、簡単な理解度チェックやインタラクションを盛り込み、参加者の習熟度を把握しながら進行する。                        │
│  - ハンズオンは後日実施推奨ではあるものの、その橋渡しとして演習問題や動画資料配布等の工夫を検討する。                                              │
│  - 新入社員のITリテラシーのばらつきを考慮し、基礎用語補足はスライドや資料でも補助。                                                                │
│                                                                                                                                                    │
│  ---                                                                                                                                               │
│                                                                                                                                                    │
│  以上、ご検討のほどよろしくお願いいたします。                                                                                                      │
│                                                                                                                                                    │
└────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
┌──────────────────────────────────────────────────────────────── 📋 Task Completion ────────────────────────────────────────────────────────────────┐
│                                                                                                                                                    │
│  Task Completed                                                                                                                                    │
│  Name: task1 の結果をレビューし、改善提案を3点以内で示してください。                                                                               │
│  Agent: Quality Reviewer                                                                                                                           │
│                                                                                                                                                    │
│                                                                                                                                                    │
└────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘


┌───────────────────────────────────────────────────────────────── Crew Completion ──────────────────────────────────────────────────────────────────┐
│                                                                                                                                                    │
│  Crew Execution Completed                                                                                                                          │
│  Name: crew                                                                                                                                        │
│  ID: a1a466a3-9e02-4629-97c9-de6aa1df25af                                                                                                          │
│  Final Output: 【レビューコメント】                                                                                                                │
│                                                                                                                                                    │
│  1. ハンズオン省略による理解促進の工夫不足                                                                                                         │
│  　本研修は時間の都合上ハンズオンを省略しているため、理解が抽象的になりやすく知識定着が懸念されます。コンソール画面の説明やデモはあるものの、参加  │
│  者が主体的に操作感を掴めない点を補う演習的な要素やインタラクティブ性が不足しています。簡易的なクイズや選択問題、インタラクションを取り入れて理解  │
│  度確認を行う仕掛けを設けることが望ましいです。                                                                                                    │
│                                                                                                                                                    │
│  2. AWS料金体系と無料利用枠の説明の具体性不足                                                                                                      │
│  　料金体系は参加者にとって理解が難しいテーマであり、セッション①で触れるものの「説明」とあるだけで具体的にどのような料金モデルがあるのか、どのリ   │
│  ソースが無料利用枠に該当するのかが不明確です。特に新入社員が誤解しやすい部分なので、料金計算の例示や無料利用枠の代表的サービスを図解や表で示した  │
│  方が分かりやすくなります。                                                                                                                        │
│                                                                                                                                                    │
│  3. セキュリティ系サービス（IAM）の説明・演習の充実不足                                                                                            │
│  　IAMはAWSのセキュリティの基礎中の基礎であり、最も重要なサービスの一つですが、セッション②では「認証と権限管理の基本」との記載に留まり、具体的な   │
│  権限設定の概念やベストプラクティスまで踏み込んでいません。セッション③でのIAMユーザー作成もデモに留まるため、最低限権限の原則（Least               │
│  Privilege）やグループ/ロール適用の考え方の説明や簡単な判断演習を加え、理解促進を図ることを推奨します。                                            │
│                                                                                                                                                    │
│  ---                                                                                                                                               │
│                                                                                                                                                    │
│  【改善版トレーニング計画抜粋（該当部分のみ修正）】                                                                                                │
│                                                                                                                                                    │
│  ---                                                                                                                                               │
│                                                                                                                                                    │
│  ### セッション① AWSとクラウド基礎理解                                                                                                             │
│  - 時間：40分                                                                                                                                      │
│  - 学習内容：                                                                                                                                      │
│    - クラウドコンピューティングとは何か（従来のオンプレミスとの違い、メリット）                                                                    │
│    - AWSの概要（歴史、グローバルインフラ、リージョン・アベイラビリティゾーンの概念）                                                               │
│    -                                                                                                                                               │
│  AWSの料金体系（料金モデルの種類：オンデマンド・リザーブド・スポット等の概要、料金計算例）と無料利用枠の詳細（主要サービスの対象範囲、無料利用枠   │
│  の使い方）                                                                                                                                        │
│      →【補足資料や図表を用いて視覚的に説明】                                                                                                       │
│    - AWS管理コンソールの紹介（画面構成、主要操作方法のイメージ）                                                                                   │
│    - 理解度確認クイズ（簡単な3問程度）を実施し、理解の確認と質疑応答へ活用                                                                         │
│                                                                                                                                                    │
│  ---                                                                                                                                               │
│                                                                                                                                                    │
│  ### セッション② 主要サービスとその用途理解                                                                                                        │
│  - 時間：70分                                                                                                                                      │
│  - 学習内容：                                                                                                                                      │
│    - コンピューティング系                                                                                                                          │
│      - Amazon EC2（仮想サーバーの概念、用途）                                                                                                      │
│      - AWS Lambda（サーバーレス実行の概念）                                                                                                        │
│    - ストレージ系                                                                                                                                  │
│      - Amazon S3（オブジェクトストレージの仕組みと特徴）                                                                                           │
│    - ネットワーク系                                                                                                                                │
│      - VPC（仮想ネットワークの概念）                                                                                                               │
│    - データベース系                                                                                                                                │
│      - Amazon RDS（マネージドデータベースの概要）                                                                                                  │
│    - セキュリティ系                                                                                                                                │
│      - IAM（認証と権限管理の基本と権限設定の概要、ベストプラクティスの紹介）                                                                       │
│        →【最小権限の原則、グループやロールの活用例を図解で説明】                                                                                   │
│    - 上記サービスを業務でどう使うかの簡単なケーススタディ・紹介                                                                                    │
│    - 理解促進のためのミニ演習（例：IAMユーザーに適切な権限を付与する選択問題）                                                                     │
│                                                                                                                                                    │
│  ---                                                                                                                                               │
│                                                                                                                                                    │
│  ### セッション③ AWSアカウント作成から簡単な操作紹介                                                                                               │
│  - 時間：50分                                                                                                                                      │
│  - 学習内容：                                                                                                                                      │
│    - AWSアカウント作成の流れ（注意点含む）                                                                                                         │
│    - AWS管理コンソールのログインとダッシュボード概要                                                                                               │
│    - IAMユーザーの作成と権限設定の基礎  → 【画面デモ＋演習問題やチェックリストを用意し、理解度向上支援】                                           │
│    - EC2インスタンス起動のデモ（実際に起動・停止・削除の流れを画面で見せる）                                                                       │
│    - S3バケット作成とファイルアップロードのデモ                                                                                                    │
│    - 質疑応答                                                                                                                                      │
│                                                                                                                                                    │
│  ---                                                                                                                                               │
│                                                                                                                                                    │
│  【備考】                                                                                                                                          │
│  - 各セッションでの質疑応答に加え、簡単な理解度チェックやインタラクションを盛り込み、参加者の習熟度を把握しながら進行する。                        │
│  - ハンズオンは後日実施推奨ではあるものの、その橋渡しとして演習問題や動画資料配布等の工夫を検討する。                                              │
│  - 新入社員のITリテラシーのばらつきを考慮し、基礎用語補足はスライドや資料でも補助。                                                                │
│                                                                                                                                                    │
│  ---                                                                                                                                               │
│                                                                                                                                                    │
│  以上、ご検討のほどよろしくお願いいたします。                                                                                                      │
│                                                                                                                                                    │
│                                                                                                                                                    │
└────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────── Tracing Status ──────────────────────────────────────────────────────────────────┐
│                                                                                                                                                    │
│  Info: Tracing is disabled.                                                                                                                        │
│                                                                                                                                                    │
│  To enable tracing, do any one of these:                                                                                                           │
│  • Set tracing=True in your Crew/Flow code                                                                                                         │
│  • Set CREWAI_TRACING_ENABLED=true in your project's .env file                                                                                     │
│  • Run: crewai traces enable                                                                                                                       │
│                                                                                                                                                    │
└────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘

```

## 1.5.6 5. 選択基準と比較

| 観点 | CrewAI | AutoGen |
|---|---|---|
| 設計 | 役割・タスク・プロセスを明示 | 柔軟な対話・動的設計 |
| 再現性 | 高い | 低め（対話に依存） |
| 運用性 | 本番向き | 研究・PoC向き |
| 拡張性 | OSSで拡張容易 | 柔軟だが複雑化しやすい |
| 適用例 | 品質管理・レビュー・分業 | 対話型探索・実験 |

### 1.5.6.1 適用/非適用ユースケース
- **CrewAIが向く**: 再現性・品質・分業・レビュー重視、本番運用、段階的改善
- **CrewAIが向かない**: 柔軟な対話・動的な探索が主目的の場合

---

## 1.5.7 6. Q&A・トラブルシュート

- Q. モデルを明示的に指定できる？
    - A. `Agent(..., model="gpt-4o-mini")` のように指定可能。未指定時は `OPENAI_MODEL_NAME` を参照。
- Q. Windowsで文字化けする
    - A. `chcp 65001` と `PYTHONIOENCODING="utf-8"` を設定
- Q. hierarchicalで自動ループできる？
    - A. 現状は自動再タスク生成は難しい。Python側でループ制御推奨。

---

## 1.5.8 7. 参考リンク・演習課題

- [CrewAI 公式ドキュメント](https://docs.crewai.com/)
- [CrewAI GitHub](https://github.com/joaomdmoura/crewai)
- [Agent クラスリファレンス](https://docs.crewai.com/core-concepts/Agents)
- [Task クラスリファレンス](https://docs.crewai.com/core-concepts/Tasks)
- [プロセス設定ガイド](https://docs.crewai.com/core-concepts/Processes)

### 1.5.8.1 演習課題
1. CrewAIを使う想定ユースケースを1つ定義し、入力・出力例を記録
2. 最小構成で動かし、設定を1つ変えて挙動差分を確認
3. CrewAIを使わない場合の代替手段と比較し、選択基準をまとめる

---

[← 前へ](01-agent-orchestration/03-autogen.md) | [次へ →](01-agent-orchestration/05-semantic-kernel.md)





---
level: 📖 中級（概念・実践）
prereq: C# または Python 基礎 / LLMアプリの基本概念
prev: 01-agent-orchestration/04-crewai.md
next: 02-rag/00-README.md
---

# 1.6 Semantic Kernel 入門

> 📖 中級（概念・実践） | 前提: C# または Python 基礎 / LLMアプリの基本概念

## 1.6.1 この教材で身につくこと

- Semantic Kernel の役割と設計思想
- Function Calling を使ったツール連携の基本
- プロンプト資産を関数として再利用する方法
- C# と Python の実装選択の観点

## 1.6.2 概要

Semantic Kernel は、LLM 機能を既存アプリへ組み込むためのOSS SDKです。  
モデル接続、プロンプト管理、関数呼び出し、メモリ連携を統一的に扱えます。

**バージョン**: OSS Docs準拠（2026-05時点）  
**公式ドキュメント**: https://learn.microsoft.com/semantic-kernel/overview/

## 1.6.3 位置づけ

```mermaid
flowchart LR
  A[アプリケーション層] --> B[Semantic Kernel]
  B --> C[Model Connector]
  B --> D[Prompt Function]
  B --> E[Tool Function]
  B --> F[Planner / Workflow]
  C --> G[OpenAI/Azure/Local]
```

Semantic Kernel は、LLMを直接呼ぶ実装をアプリ層から分離し、保守性を上げるための中間レイヤーとして機能します。

## 1.6.4 実行フロー


```mermaid
flowchart TD
    S[開始] --> K[Kernel初期化]
    K --> T[Tool Function登録]
    T --> I[ユーザー入力]
    I --> F[自動Function Calling]
    F --> O[応答生成]
    O --> E[終了]
```

※この教材のサンプルは「暗黙的（自動）Function Calling」方式です。Prompt Function登録は省略し、ユーザー入力に応じて必要なTool Functionが自動選択・実行されます。

この教材では、最小構成で Prompt Function と Tool Function を組み合わせる流れを確認します。

## 1.6.5 実行方法

### 1.6.5.1 Python 環境（仮想環境 + uv/Python 3.12推奨）

1. 仮想環境を作成・有効化（Windows例）

```bash
python -m venv .venv
.venv\Scripts\activate
```

2. パッケージをインストール（uv推奨、なければpipでも可）

```bash
uv pip install -U semantic-kernel python-dotenv
# もしくは
pip install -U semantic-kernel python-dotenv
```

### 1.6.5.2 C# 環境（任意）

```bash
dotnet add package Microsoft.SemanticKernel
dotnet add package Microsoft.SemanticKernel.Connectors.OpenAI
```

### 1.6.5.3 環境変数

`.env`
```bash
OPENAI_API_KEY=sk-your-key-here
OPENAI_MODEL=gpt-4o-mini
```

### 1.6.5.4 検証コマンド（Python）

```bash
python -c "import semantic_kernel as sk; print(sk.__version__)"
```

### 1.6.5.5 実行ステップ（最短）

1. `.env` を作成し、`OPENAI_API_KEY` を設定する
2. `python 01_semantic-kernel-function-calling.py` を実行する
3. `tool_result` と `assistant` の2種類の出力を確認する

## 1.6.6 実ソースコード（言語別に記載）

### 1.6.6.1 Python: requirements.txt

- 役割: 教材の依存パッケージを固定
- 入力: なし
- 出力: pipインストール対象
- 実行: `pip install -r requirements.txt`

```txt
semantic-kernel>=1.0.0
python-dotenv>=1.0.0
```

### 1.6.6.2 Python: 01_semantic-kernel-auto-tool-choice.py

- 役割: モデルに関数選択を委譲し、自然文の要求から必要ツールを自動選択
- 入力: ユーザー要求文（例: 「18と24を足して説明して」）
- 出力: 関数実行を反映した回答
- 実行: `python 02_semantic-kernel-auto-tool-choice.py`

```python
"""Semantic Kernel auto function choice sample (Python).

モデルが必要な関数を自動で選び、実行結果を回答に反映します。
"""

import asyncio
import os

from dotenv import load_dotenv
from semantic_kernel import Kernel
from semantic_kernel.connectors.ai.function_choice_behavior import FunctionChoiceBehavior
from semantic_kernel.connectors.ai.open_ai import OpenAIChatCompletion
from semantic_kernel.connectors.ai.open_ai.prompt_execution_settings.\
    open_ai_prompt_execution_settings import OpenAIPromptExecutionSettings
from semantic_kernel.contents.chat_history import ChatHistory
from semantic_kernel.functions import kernel_function


load_dotenv()


class MathPlugin:
    @kernel_function(name="add", description="2つの数値の合計を返す")
    def add(self, a: float, b: float) -> float:
        return a + b

    @kernel_function(name="multiply", description="2つの数値の積を返す")
    def multiply(self, a: float, b: float) -> float:
        return a * b


def require_env(name: str) -> str:
    value = os.getenv(name)
    if not value:
        raise RuntimeError(f"{name} が設定されていません")
    return value


def build_kernel() -> Kernel:
    kernel = Kernel()
    kernel.add_service(
        OpenAIChatCompletion(
            service_id="chat",
            api_key=require_env("OPENAI_API_KEY"),
            ai_model_id=os.getenv("OPENAI_MODEL", "gpt-4o-mini"),
        )
    )
    kernel.add_plugin(MathPlugin(), plugin_name="math")
    return kernel


async def main() -> None:
    kernel = build_kernel()
    chat = kernel.get_service("chat")

    settings = OpenAIPromptExecutionSettings(
        service_id="chat",
        temperature=0.2,
        function_choice_behavior=FunctionChoiceBehavior.Auto(),
    )

    history = ChatHistory()
    history.add_system_message(
        "あなたは日本語アシスタントです。"
        "計算が必要なら math プラグインを使って正確に答えてください。"
    )
    history.add_user_message("18と24を足して、その結果が何を意味するか1文で説明して")

    result = await chat.get_chat_message_content(
        chat_history=history,
        settings=settings,
        kernel=kernel,
    )

    print("=== Auto Tool Choice Demo ===")
    print(result)


if __name__ == "__main__":
    asyncio.run(main())
```

#### 1.6.6.2.1 実行例
``` console
(.venv) PS C:\Dev\tutorials\generative-ai-oss-tutorials\sandbox\semantic-kernel> python .\01_semantic-kernel-auto-tool-choice.py
=== Auto Tool Choice Demo ===
18と24を足すと42になります。これは、18と24の合計を示しており、例えば、18人と24人のグループを合わせたときの総人数を表しています。
```

### 1.6.6.3 自動Function Callingの使い分け

1. 手動実行（01）は、呼ぶ関数をアプリ側で厳密に制御したいときに使う
2. 自動選択（02）は、自然文入力ごとに必要な関数が変わるときに使う
3. 本番運用では、重要処理は手動、補助処理は自動という分離が安全

### 1.6.6.4 実行確認ポイント（02）

1. 計算結果が自然文だけでなく数値として正しいか
2. 不要なツール呼び出しが発生していないか
3. 指示文を変えたときに add と multiply が適切に切り替わるか

## 1.6.7 使い方の要点

1. Kernel に「モデル接続」と「プラグイン関数」を登録する
2. 計算や検索などの確定処理は Tool Function で実行する
3. 最終文面の整形は Prompt で行い、用途ごとにテンプレート化する
4. 失敗時は環境変数未設定、モデル名誤り、APIキー権限を先に確認する

## 1.6.8 演習課題

1. ツール関数を1つ追加し、既存関数と使い分けるプロンプトを作成してください。
2. 同じユースケースを C# または Python のどちらかで実装し、選定理由を3点に整理してください。
3. 失敗時の挙動を確認し、再試行方針を短く定義してください。


### 1.6.8.1 解答の目安

1. まず課題の目的を一文で明確化し、入力・出力を対応づけて記述します。
    確認ポイント: どの関数をなぜ追加したかを第三者が追えること。
2. 最小構成で一度実行し、言語を固定したうえで実装理由を3点に整理します。
    確認ポイント: 保守性、運用性、既存資産との整合を根拠付きで説明できること。
3. 失敗ケースを1つ決め、検知方法と再試行条件を短く定義します。
    確認ポイント: いつ再試行し、いつ停止するかを明示できること。

## 1.6.9 理解度チェック

1. Semantic Kernel を導入する主目的は何ですか。
2. Prompt Function と Tool Function の違いは何ですか。
3. Semantic Kernel が向くケースと向かないケースを1つずつ挙げてください。


### 1.6.9.1 解説の要点

1. 主目的は、モデル呼び出し・関数実行・プロンプト管理を分離して実装を運用しやすくすることです。
2. Prompt Function は自然文生成、Tool Function は確定処理（計算・検索・API呼び出し）に使い分けます。
3. 向くケースは外部連携や複数機能統合がある業務アプリ、向かないケースは単発プロンプト中心の小規模検証です。

---

## 1.6.10 参考リンク

- [Semantic Kernel Overview](https://learn.microsoft.com/semantic-kernel/overview/)
- [Semantic Kernel GitHub](https://github.com/microsoft/semantic-kernel)
- [Python SDK Getting Started](https://learn.microsoft.com/semantic-kernel/get-started/quick-start-guide?pivots=programming-language-python)
- [C# SDK Getting Started](https://learn.microsoft.com/semantic-kernel/get-started/quick-start-guide?pivots=programming-language-csharp)

---

[← 前へ](01-agent-orchestration/04-crewai.md) | [次へ →](02-rag/00-README.md)



---
level: 🔰 初級（カテゴリ導入）
prereq: "-"
prev: 01-agent-orchestration/05-semantic-kernel.md
next: 02-rag/01-llamaindex.md
---

# 2.1 RAG・ナレッジ検索

> 🔰 初級（カテゴリ導入） | 前提: -

ベクトル検索とLLMを組み合わせて、社内文書やナレッジからの質問応答を実現。

## 2.1.1 位置づけ

```mermaid
flowchart LR
  A[業務ナレッジ] --> B[RAG]
  B --> C[検索基盤]
  B --> D[生成回答]
  B --> E[運用監視]
```

## 2.1.2 学習フロー

```mermaid
flowchart TD
  S[開始] --> L[LlamaIndex]
  L --> H[Haystack]
  H --> T[txtai]
  T --> O[RAGFlow/privateGPT/Quivr/Danswer]
  O --> X[比較メモ作成]
```

## 2.1.3 含まれるOSS

- **LlamaIndex**: データ接続と索引化に強いRAG基盤
- **Haystack**: 検索・生成パイプライン構築フレームワーク
- **txtai**: 軽量な埋め込み検索フレームワーク
- **RAGFlow**: RAG特化の実運用向けプラットフォーム
- **privateGPT**: ローカル文書向けプライベートQA
- **Quivr**: チーム向けナレッジアシスタント
- **Onyx**: 社内横断検索と生成回答

## 2.1.4 学習順序

1. LlamaIndex (基本的な文書索引・検索)
2. Haystack (パイプライン構築)
3. txtai (軽量検索)
4. RAGFlow (運用・監視)
5. privateGPT (ローカル閉域運用)
6. Quivr (チームナレッジ)
7. Onyx (エンタープライズ検索)

## 2.1.5 教材リンク

- [01-llamaindex.md](./01-llamaindex.md)
- [02-haystack.md](./02-haystack.md)
- [02_haystack-python](./02_haystack-python/)
- [03-txtai.md](./03-txtai.md)
- [04-ragflow.md](./04-ragflow.md)
- [05-privategpt.md](./05-privategpt.md)
- [06-quivr.md](./06-quivr.md)
- [07-onyx.md](./07-onyx.md)

## 2.1.6 バージョン情報

2026年5月時点の主要 RAG フレームワークの最新情報です。

### 2.1.6.1 LlamaIndex

- **最新バージョン**: 0.14.21
- **リリース日**: 2026年4月21日
- **PyPI**: https://pypi.org/project/llama-index/
- **ドキュメント**: https://developers.llamaindex.ai/python/framework/
- **GitHub**: https://github.com/run-llama/llama_index
- **備考**: starter パッケージと llama-index-core（カスタマイズ用）の2種類があります

### 2.1.6.2 Haystack

#### 2.1.6.2.1 Haystack 2.x（推奨 - 現在のメインライン）

- **最新バージョン**: 2.28.0
- **リリース日**: 2026年4月21日
- **パッケージ名**: `haystack-ai`
- **PyPI**: https://pypi.org/project/haystack-ai/
- **ドキュメント**: https://docs.haystack.deepset.ai/docs/intro
- **GitHub**: https://github.com/deepset-ai/haystack
- **特徴**: モダンな設計、70+の統合、プロダクション対応

#### 2.1.6.2.2 Haystack 1.x（レガシー - EOL）

- **最新バージョン**: 1.26.4.post0
- **リリース日**: 2025年4月4日
- **パッケージ名**: `farm-haystack`
- **ステータス**: 2025年3月11日に End of Life (EOL)
- **PyPI**: https://pypi.org/project/farm-haystack/
- **移行ガイド**: https://docs.haystack.deepset.ai/docs/migration
- **備考**: Haystack 2.x へのアップグレードを強く推奨

### 2.1.6.3 txtai

- **最新バージョン**: 9.8.0
- **リリース日**: 2026年4月30日
- **PyPI**: https://pypi.org/project/txtai/
- **ドキュメント**: https://neuml.github.io/txtai/
- **GitHub**: https://github.com/neuml/txtai
- **特徴**: セマンティック検索、LLM オーケストレーション、言語モデルワークフロー

### 2.1.6.4 RAGFlow

- **最新バージョン**: 0.0.1
- **リリース日**: 2023年11月20日
- **PyPI**: https://pypi.org/project/ragflow/
- **GitHub**: https://github.com/infiniflow/ragflow
- **ドキュメント**: https://docs.ragflow.io/
- **備考**: PyPI バージョンは古い。GitHub リポジトリの最新リリースをご確認ください

### 2.1.6.5 PrivateGPT

#### 2.1.6.5.1 新しいプロジェクト（推奨）

- **最新バージョン**: 0.6.2
- **リリース日**: 2024年8月8日
- **GitHub**: https://github.com/zylon-ai/private-gpt
- **ドキュメント**: https://docs.privategpt.dev/
- **Docker**: https://hub.docker.com/r/zylonai/private-gpt
- **特徴**: Ollama 統合、Google Gemini サポート、Milvus/Clickhouse 対応

#### 2.1.6.5.2 レガシーパッケージ（非推奨）

- **バージョン**: 0.0.26
- **リリース日**: 2023年6月11日
- **PyPI**: https://pypi.org/project/privategpt/
- **備考**: 古いプロジェクト。zylon-ai/private-gpt が新しい公式リポジトリです

### 2.1.6.6 Quivr

- **最新バージョン情報**: 入手不可（GitHub アクセス制限中）
- **GitHub**: https://github.com/quivr-ai/quivr
- **ドキュメント**: https://docs.quivr.app/
- **PyPI**: https://pypi.org/project/quivr/
- **備考**: 最新バージョン情報については GitHub リリースページをご確認ください

### 2.1.6.7 Onyx（旧名: Danswer）

- **最新バージョン**: 3.3.2
- **リリース日**: 2026年5月9日
- **プロジェクト名**: Onyx（旧名: Danswer）
- **GitHub**: https://github.com/onyx-dot-app/onyx
- **ドキュメント**: https://docs.onyx.app/
- **Docker**: https://hub.docker.com/r/onyxdotapp/onyx
- **特徴**: エンタープライズレディなドキュメント AI、マルチモーダル対応

### 2.1.6.8 推奨事項

#### 2.1.6.8.1 新規プロジェクトの場合

- **Haystack**: 2.28.0（haystack-ai）- 最も成熟したフレームワーク
- **LlamaIndex**: 0.14.21 - データフレームワークとして強力
- **txtai**: 9.8.0 - all-in-one AI フレームワーク

#### 2.1.6.8.2 既存プロジェクトの場合

- **Haystack 1.x を使用**: 2.x への移行を計画してください
- **farm-haystack**: EOL のため、haystack-ai への移行をお勧めします

#### 2.1.6.8.3 特定のユースケース

- **ドキュメント AI**: Onyx 3.3.2
- **プライベート/オンプレ**: PrivateGPT 0.6.2
- **セマンティック検索**: txtai 9.8.0

### 2.1.6.9 アップデート方法

```bash
# LlamaIndex
pip install --upgrade llama-index

# Haystack 2.x
pip install --upgrade haystack-ai

# txtai
pip install --upgrade txtai

# PrivateGPT (zylon-ai)
pip install --upgrade privategpt  # またはソースから

# Onyx
pip install --upgrade onyx  # または Docker イメージを使用
```


## 2.1.7 完了条件

- カテゴリ内の主要OSSを3つ以上説明できる
- 最小サンプルを1件以上動作確認できる
- 選定観点（速度/運用性/拡張性）で比較メモを作成できる

---

[← 前へ](01-agent-orchestration/05-semantic-kernel.md) | [次へ →](02-rag/01-llamaindex.md)




---
level: 📖 中級（概念・実践）
prereq: Python基礎 / LLMアプリの基本概念
prev: 02-rag/00-README.md
next: 02-rag/02-haystack.md
---

# 2.2 LlamaIndex 入門

> 📖 中級（概念・実践） | 前提: Python基礎 / LLMアプリの基本概念

---

## 2.2.1 OSS概要・公式情報（2026-05-23時点）
- **バージョン**: 0.14.21+
- **公式ドキュメント**: https://docs.llamaindex.ai/
- **GitHub**: https://github.com/run-llama/llama_index
- **FAQ/制約/リリースノート**: https://docs.llamaindex.ai/en/stable/getting_started/faq/
- **公式情報参照日**: 2026-05-23

---

## 2.2.2 この教材で身につくこと
- LlamaIndexの主な役割・適用場面を説明できる
- 最小構成で動かす手順を実行できる
- 導入時のメリット・注意点を整理できる

---

## 2.2.3 特徴・できること
### 2.2.3.1 主な特徴
- RAG（Retrieval-Augmented Generation）特化のPython OSSライブラリ
- 多様なデータソース（ファイル、DB、API等）に対応
- LLM（OpenAI, Anthropic, Ollama等）と連携可能

### 2.2.3.2 できること（Features）
- ドキュメントの自動分割・ベクトル化・索引化
- 類似度検索による関連ドキュメントの高速取得
- 複数データソースの統合・キャッシング・再利用
- LLMを用いたクエリ応答生成

### 2.2.3.3 できないこと・制約事項（Limitations）
- 高度なUI機能は非搭載（UIは外部実装が必要）
- ベクトルDBやLLMのAPI制約に依存
- 大規模データ時はバッチ/非同期設計が推奨（[公式FAQ](https://docs.llamaindex.ai/en/stable/getting_started/faq/)より）

### 2.2.3.4 注意事項・推奨構成
- Python 3.10+、pip環境が必要
- LLM利用時はAPIキー必須
- 開発時はChroma、本番はPinecone/Weaviate等の利用推奨
- 公式Getting Started/FAQを参照し、バージョン互換性に注意

---

## 2.2.4 前提条件・インストール
### 2.2.4.1 必須スキル
- Python 基本
- ベクトル検索の概念理解


### 2.2.4.2 環境
- Python 3.12（3.12系を推奨）
- uv（高速パッケージマネージャ）
- OpenAI API キー（LLMが必要な場合）

### 2.2.4.3 セットアップ例
```bash
# uv未導入の場合
pyhton -m pip install uv

# 仮想環境作成
uv venv .venv
# Windows: .venv\Scripts\activate
# macOS/Linux: source .venv/bin/activate

# パッケージインストール
uv pip install llama-index langchain-openai python-dotenv
```

---

## 2.2.5 仕組み・実行フロー
### 2.2.5.1 仕組み（全体像）
1. 目的と入力を定義し、対象データや利用モデルを準備
2. コア処理（検索・推論・生成・検証のいずれか）を実行
3. 実行結果を保存または表示し、次工程に渡せる形式へ整形
4. パラメータを調整して挙動差分を比較し、品質を確認
5. 運用を想定して再実行手順と確認ポイントを定着
## 2.2.6 前提条件

### 2.2.6.1 必須スキル

- Python 基本
- ベクトル検索の概念理解

### 2.2.6.2 環境

- Python 3.10+
- pip
- OpenAI API キー（LLMが必要な場合）

### 2.2.6.3 インストール

```bash
pip install llama-index langchain-openai python-dotenv
```

## 2.2.7 位置づけ

```mermaid
flowchart LR
  A[RAGアプリ] --> B[LlamaIndex]
  B --> C[Document Loading]
  B --> D[Indexing]
  B --> E[Retrieval]
  E --> F[Query Engine]
  F --> G[LLM回答生成]
```

LlamaIndex は、ドキュメント取り込みから索引化、検索、回答生成までを RAG の流れとしてまとめるための中心ライブラリです。

## 2.2.8 実行フロー

```mermaid
flowchart TD
  S[開始] --> L[文書準備]
  L --> I[インデックス作成]
  I --> P[永続化]
  P --> Q[インデックス再ロード]
  Q --> R[クエリ実行]
  R --> A[上位k件取得]
  A --> E[回答生成]
  E --> X[終了]
```

この教材は、`作成 -> 保存 -> 再利用 -> 高度取得`の順に進みます。実運用時はこの分割がそのままバッチ/API設計に対応します。


## 2.2.9 比較・選定ポイント
- RAG特化でシンプルな構成が可能
- LangChain等の汎用フレームワークと併用も多い
- 再現性・拡張性・運用性に優れるが、UIや大規模運用は追加設計が必要

---

## 2.2.10 サンプルコード
（代表的なサンプルコードは下記「補足」セクションに掲載）

---

## 2.2.11 公式情報の参照・引用について
本教材の内容は公式サイト等の一次情報（[公式ドキュメント](https://docs.llamaindex.ai/)、[FAQ](https://docs.llamaindex.ai/en/stable/getting_started/faq/)等）を参照し、2026年5月時点で整理しています。

---

## 2.2.12 補足

### 2.2.12.1 Python: 01_basic-indexing.py

- 役割: ドキュメントからベクトルインデックスを構築し永続化
- 入力: Document配列
- 出力: `./index_storage` に保存されたインデックス
- 実行: `python 01_basic-indexing.py`

```python
"""LlamaIndex basic indexing example."""

from dotenv import load_dotenv
from llama_index.core import Document, VectorStoreIndex
from llama_index.embeddings.openai import OpenAIEmbedding
from llama_index.llms.openai import OpenAI

load_dotenv()

# ========== ドキュメント準備 ==========

documents = [
  Document(
    text="生成AIとは、人工知能が新しいコンテンツを生成する技術です。テキスト生成、画像生成、コード生成など多岐にわたります。"
  ),
  Document(
    text="ベクトル検索は、テキストを数値ベクトルに変換して、その距離に基づいて類似度を計算する検索方法です。"
  ),
  Document(
    text="RAG（Retrieval-Augmented Generation）は、外部のナレッジベースから情報を取得してから生成するアプローチです。"
  ),
  Document(
    text="LangChain は LLM アプリ開発用のライブラリで、複数のツールとLLMを組み合わせてワークフローを構築できます。"
  ),
]

print(f"Prepared documents: {len(documents)}")
print("-" * 60)

# ========== 埋め込みモデルとLLMの設定 ==========

embed_model = OpenAIEmbedding(model="text-embedding-3-small")

llm = OpenAI(model="gpt-4o-mini", temperature=0.7)

# ========== インデックス作成 ==========

print("Building index...")
index = VectorStoreIndex.from_documents(
  documents,
  embed_model=embed_model,
  llm=llm,
  show_progress=True,
)

print("Index build completed")
print(f"Documents in index: {len(documents)}")
print("-" * 60)

# ========== 簡単なクエリテスト ==========

print("\nRun sample query\n")

test_query = "生成AIとは何ですか？"
print(f"Query: {test_query}")

query_engine = index.as_query_engine()
response = query_engine.query(test_query)

print(f"Answer:\n{response}")
print("-" * 60)

# インデックスをメモリに保存（後でロード可能）
print("\nPersisting index...")
index.storage_context.persist("./index_storage")
print("Saved to ./index_storage/")
```

#### 2.2.12.1.1 実行結果例（01_basic-indexing.py）

```text
Prepared documents: 4
------------------------------------------------------------
Building index...
Applying transformations: 100%|█████████████████████████████████████████████████████| 1/1 [00:00<00:00, 721.29it/s]
Generating embeddings: 100%|█████████████████████████████████████████████████████████| 4/4 [00:00<00:00,  4.47it/s]
Index build completed
Documents in index: 4
------------------------------------------------------------

Run sample query

Query: 生成AIとは何ですか？
Answer:
生成AIは、新しいコンテンツを生成するための人工知能技術です。
------------------------------------------------------------

Persisting index...
Saved to ./index_storage/
```

### 2.2.12.2 Python: 02_query.py

- 役割: 永続化済みインデックスを読み込み、複数クエリを実行
- 入力: 質問テキスト配列
- 出力: 各質問への回答
- 実行: `python 02_query.py`

```python
"""LlamaIndex query example."""

from dotenv import load_dotenv
from llama_index.core import StorageContext, load_index_from_storage

load_dotenv()

# ========== インデックスのロード ==========

print("Loading index from disk...")

storage_context = StorageContext.from_defaults(
  persist_dir="./index_storage"
)

index = load_index_from_storage(storage_context)

print("Index loaded")
print("-" * 60)

# ========== 複数クエリ実行 ==========

queries = [
  "RAGとは何ですか？",
  "LangChainが解決する問題は？",
  "ベクトル検索の利点を教えてください",
]

query_engine = index.as_query_engine()

for i, query_text in enumerate(queries, 1):
  print(f"\n[Q{i}] {query_text}")
  print("-" * 60)

  response = query_engine.query(query_text)

  print(f"Answer:\n{response}")
  print("=" * 60)
```

#### 2.2.12.2.1 実行結果例（02_query.py）

```text
Loading index from disk...
Index loaded
------------------------------------------------------------

[Q1] RAGとは何ですか？
------------------------------------------------------------
Answer:
RAGは、外部のナレッジベースから情報を取得してから生成するアプローチです。
============================================================

[Q2] LangChainが解決する問題は？
------------------------------------------------------------
Answer:
LangChainは、外部のナレッジベースから情報を取得してから生成するアプローチであるRAG（Retrieval-Augmented Generation）において、ベクトル検索によって情報を取得する際に生じる問題を解決することができます。
============================================================

[Q3] ベクトル検索の利点を教えてください
------------------------------------------------------------
Answer:
ベクトル検索の利点は、テキストを数値ベクトルに変換することで、類似度を計算しやすくなる点です。これにより、検索精度が向上し、情報を効率的に取得できるようになります。
============================================================
```

### 2.2.12.3 Python: 03_advanced-retrieval.py

- 役割: 上位k件取得とノードスコア確認
- 入力: クエリ文字列
- 出力: 回答と取得ノード詳細
- 実行: `python 03_advanced-retrieval.py`

```python
"""LlamaIndex advanced retrieval example."""

from dotenv import load_dotenv
from llama_index.core import StorageContext, load_index_from_storage, QueryBundle
from llama_index.embeddings.openai import OpenAIEmbedding
from llama_index.llms.openai import OpenAI

load_dotenv()

# ========== インデックスのロード ==========

print("Loading index...\n")

embed_model = OpenAIEmbedding(model="text-embedding-3-small")
llm = OpenAI(model="gpt-4o-mini", temperature=0.7)

storage_context = StorageContext.from_defaults(
  persist_dir="./index_storage"
)

index = load_index_from_storage(storage_context)

# ========== 戦略1: 類似度検索スコアを見る ==========

print("[Strategy1] Similarity search")
print("=" * 60)

query_engine = index.as_query_engine(similarity_top_k=2)
query_text = "LangChainとは？"
print(f"Query: {query_text}\n")

response = query_engine.query(query_text)
print(f"Answer:\n{response}\n")

# ========== 戦略2: 詳細な取得情報 ==========

print("[Strategy2] Retrieved nodes")
print("=" * 60)

retriever = index.as_retriever(similarity_top_k=2)
query_bundle = QueryBundle(query_text)
nodes = retriever.retrieve(query_bundle)

for i, node in enumerate(nodes, 1):
  print(f"ノード {i}:")
  print(f"  スコア: {node.score:.4f}")
  print(f"  テキスト: {node.get_content()[:100]}...")
  print()

print("=" * 60)
print("Advanced retrieval demo completed")
```

#### 2.2.12.3.1 実行結果例（03_advanced-retrieval.py）

```text
Loading index...

[Strategy1] Similarity search
============================================================
Query: LangChainとは？

Answer:
LangChainは、言語処理技術を活用して、複数の言語間で情報を連携させるための手法です。

[Strategy2] Retrieved nodes
============================================================
ノード 1:
  スコア: 0.0280
  テキスト: RAG（Retrieval-Augmented Generation）は、外部のナレッジベースから情報を取得してから生成するアプローチです。...

ノード 2:
  スコア: 0.0076
  テキスト: ベクトル検索は、テキストを数値ベクトルに変換して、その距離に基づいて類似度を計算する検索方法です。...

============================================================
Advanced retrieval demo completed
```

---

## 2.2.13 補足

**Q. LlamaIndex と LangChain の使い分けは？**  
A. LlamaIndex は RAG 特化、LangChain は汎用。多くの場合、両者を組み合わせます。

**Q. ベクトルDB は何を使えばいいですか？**  
A. 開発時は Chroma（メモリ内）、本番は Pinecone / Weaviate 推奨。

**Q. 大量の文書を高速に索引化できますか？**  
A. バッチ処理と非同期実行で対応可能ですが、事前にテストを推奨。

---

## 2.2.14 参考リンク

- [LlamaIndex 公式ドキュメント](https://docs.llamaindex.ai/)
- [GitHub Repository](https://github.com/run-llama/llama_index)


## 2.2.15 サンプル

### 2.2.15.1 実行例

```bash
# この教材の最小構成を順に実行
# 具体的なコマンドは「最小セットアップ」または「実行フロー」を参照
```

### 2.2.15.2 検証

- コマンドがエラーなく完了する
- 想定した出力（画面表示・ファイル生成・回答）を確認できる
- 変更した設定に応じて結果差分を説明できる

## 2.2.16 実ソースコード（言語別に記載）
### 2.2.16.1 主要サンプル
- この教材の実装例は、本文中の実行手順に対応しています。
- 必要に応じて、主要コードの抜粋をこのセクションへ追記してください。

## 2.2.17 演習課題

1. ``LlamaIndex`` を使う想定ユースケースを1つ定義し、入力・出力の例を記録してください。
2. 最小構成で動かし、デフォルトから設定を1つ変えて挙動の差分を確認してください。
3. ``LlamaIndex`` を使わない場合の代替手段と比較し、選ぶ基準をまとめてください。


### 2.2.17.1 解答の目安

1. まず課題の目的を一文で明確化し、入力・出力を対応づけて記述します。
   確認ポイント: 何を変えて何を確認する課題かを第三者が読んで理解できること。
2. 最小構成で一度実行し、設定や条件を1つ変更して差分を比較します。
   確認ポイント: 変更前後の挙動差を具体的に説明できること。
3. 適用条件と代替手段を整理し、選択基準を短くまとめます。
   確認ポイント: なぜその手段を選ぶかを根拠付きで示せること。

## 2.2.18 理解度チェック

1. ``LlamaIndex`` の主な役割を1文で説明してください。
2. ``LlamaIndex`` を導入する際の最大のメリットと注意点は何ですか？
3. ``LlamaIndex`` が向かないユースケースとして、どのようなケースが考えられますか？


### 2.2.18.1 解説の要点

1. 主な役割は、その技術がどの工程を担い、何を改善するかで説明します。
2. メリットは再現性・拡張性・運用性の観点で整理し、注意点は導入コストや複雑性として示します。
3. 使い分けは要件、実装コスト、運用体制の3観点で判断します。
---

[← 前へ](02-rag/00-README.md) | [次へ →](02-rag/02-haystack.md)







---
level: 📖 中級（概念・実践）
prereq: Python基礎 / LLMアプリの基本概念
prev: 02-rag/01-llamaindex.md
next: 02-rag/03-txtai.md
tags: [haystack, rag, tutorial]
date: 2026-05-23
last_updated: 2026-05-24
---

# 2.3 Haystack 入門

> 📖 中級（概念・実践） | 前提: Python基礎 / LLMアプリの基本概念

---

## 2.3.1 OSS概要・公式情報（2026-05-23時点）
- **バージョン**: 2.28.0 推奨 / Haystack 1.x EOL
- **公式ドキュメント**: https://docs.haystack.deepset.ai/
- **GitHub**: https://github.com/deepset-ai/haystack
- **Migration Guide**: https://docs.haystack.deepset.ai/docs/migration-guide
- **Components Reference**: https://docs.haystack.deepset.ai/docs/components
- **公式情報参照日**: 2026-05-23

---

## 2.3.2 この教材で身につくこと
- Haystackの主な役割・適用場面を説明できる
- 最小構成で動かす手順を実行できる
- 導入時のメリット・注意点を整理できる

---

## 2.3.3 特徴・できること
### 2.3.3.1 主な特徴
- 検索と生成を組み合わせたRAGパイプライン構築フレームワーク
- DocumentStore、Retriever、Generator等の部品を組み合わせて柔軟なQAアプリを構築可能
- 2.x系はPipelineベース設計・@componentデコレータ導入で拡張性が高い

### 2.3.3.2 できること（Features）
- 文書投入・前処理・埋め込み検索・パイプライン設計
- 検索結果を使った回答生成
- 複数ストア・Retriever・Generatorの組み合わせ

```bash
# Create virtual environment (recommended)
python -m venv .venv
# Windows:
.venv\Scripts\activate
# macOS/Linux:
source .venv/bin/activate

# Install packages
pip install haystack-ai sentence-transformers python-dotenv
```
---

## 2.3.4 最小セットアップ

Haystack 2.xの最小構成を動かすためのセットアップ手順です。

1. **uv（高速パッケージマネージャ）が未導入の場合**
	```bash
	python -m pip install uv
	```
2. **仮想環境の作成**
	```bash
	uv venv .venv
	# Windows: .venv\Scripts\activate
	# macOS/Linux: source .venv/bin/activate
	```
3. **必要パッケージのインストール**
	```bash
	uv pip install haystack-ai sentence-transformers python-dotenv
	```
	- 依存ライブラリをrequirements.txtで管理する場合は
	  ```bash
	  uv pip install -r requirements.txt
	  ```
4. **サンプル実行**
	```bash
	python 01_basic-pipeline.py
	```

---

## 2.3.5 仕組み・実行フロー
### 2.3.5.1 仕組み（全体像）
1. 目的と入力を定義し、対象データや利用モデルを準備
2. コア処理（検索・推論・生成・検証のいずれか）を実行
3. 実行結果を保存または表示し、次工程に渡せる形式へ整形
4. パラメータを調整して挙動差分を比較し、品質を確認
5. 運用を想定して再実行手順と確認ポイントを定着

## 2.3.6 位置づけ

```mermaid
flowchart LR
	A[RAG構築] --> B[Haystack]
	B --> C[DocumentStore]
	B --> D[Retriever]
	B --> E[Pipeline]
	E --> F[検索実行]
	F --> G[回答生成へ接続]
```

Haystack は、検索パイプラインを部品（Store/Retriever/Pipeline）として組み立てる設計に強いフレームワークです。

## 2.3.7 実行フロー

```mermaid
flowchart TD
  S[開始] --> D[ドキュメント投入]
  D --> E[埋め込み更新]
  E --> P[検索パイプライン作成]
  P --> Q[クエリ実行]
  Q --> T[上位文書表示]
  T --> X[終了]
```

この教材はまず最小検索パイプラインを作り、次にクエリバリエーションで挙動を比較します。

### 2.3.7.1 検証

- コマンドがエラーなく完了する
- 想定した出力（画面表示・ファイル生成・回答）を確認できる
- 変更した設定に応じて結果差分を説明できる

### 2.3.7.2 Python: requirements.txt（Haystack 2.x対応例）

- 役割: 依存ライブラリを固定
- 入力: なし
- 出力: uvインストール対象
- 実行: `uv pip install -r requirements.txt`

```txt
haystack-ai==2.28.0
sentence-transformers==2.5.1
python-dotenv==1.0.0
```

### 2.3.7.3 Python: 01_basic-pipeline.py（Haystack 2.x対応）

- 役割: インメモリ文書ストア＋埋め込み生成＋検索
- 入力: クエリ文字列
- 出力: 上位文書
- 実行: `python 01_basic-pipeline.py`

```python
from haystack import Document
from sentence_transformers import SentenceTransformer
from haystack.components.retrievers.in_memory import InMemoryEmbeddingRetriever
from haystack.document_stores.in_memory import InMemoryDocumentStore

docs = [
    Document(content="RAGは検索結果を使って回答生成の精度を上げる手法です。"),
    Document(content="HaystackはRetrieverとReader/Generatorを分けて構築できます。"),
    Document(content="株式分析では、決算資料やニュースを検索対象にできます。"),
]
# Use sentence-transformers directly to avoid haystack/sentence-transformers API mismatches
st_model = SentenceTransformer("sentence-transformers/all-MiniLM-L6-v2")
# for d in docs:
#     d.embedding = st_model.encode(d.content)
from dataclasses import replace
docs = [replace(d, embedding=st_model.encode(d.content).tolist()) for d in docs]

docs_with_embeddings = docs

doc_store = InMemoryDocumentStore()
doc_store.write_documents(docs_with_embeddings)
retriever = InMemoryEmbeddingRetriever(doc_store)

query = "RAGの利点は?"
query_embedding = st_model.encode(query).tolist()
if not query_embedding:
    raise ValueError("query embedding is empty")
result = retriever.run(query_embedding=query_embedding, top_k=2)

print("Query:", query)
print("Top documents:")
for i, d in enumerate(result["documents"], start=1):
    print(f"{i}. {d.content}")
```

#### 2.3.7.3.1 実行結果例（03_advanced-retrieval.py）

```text
(.venv) PS C:\Dev\tutorials\generative-ai-oss-tutorials\sandbox\02-haystack> python .\01_basic-pipeline.py
Query: RAGの利点は?
Top documents:
1. RAGは検索結果を使って回答生成の精度を上げる手法です。
2. 株式分析では、決算資料やニュースを検索対象にできます。
(.venv) PS C:\Dev\tutorials\generative-ai-oss-tutorials\sandbox\02-haystack> 
```

> ⚠️ Haystack 2.xではAPI仕様が大きく変わっているため、旧1.x系サンプルは動作しません。依存パッケージのバージョン競合やモデルダウンロード環境によってはエラーが発生する場合があります。


## 2.3.8 実行
```bash
cd 02_haystack-python
pip install -r requirements.txt
python 01_basic-pipeline.py
python 02_query-demo.py
```


## 2.3.9 比較・選定ポイント
- LlamaIndex等のRAG特化OSSと比べ、パイプライン設計の柔軟性が高い
- 1.x→2.xでAPIが大幅変更されているため、既存資産流用時は要注意
- 再現性・拡張性・運用性に優れるが、UIや大規模運用は追加設計が必要

---

## 2.3.10 公式情報の参照・引用について
本教材の内容は公式サイト等の一次情報（[公式ドキュメント](https://docs.haystack.deepset.ai/)、[Migration Guide](https://docs.haystack.deepset.ai/docs/migration-guide)等）を参照し、2026年5月時点で整理しています。

---

## 2.3.11 補足

**Q. Haystack 1.x から 2.x への移行は必須ですか？**  
A. はい。Haystack 1.x は 2025-03 に EOL。新規プロジェクトは 2.x を推奨。1.x から 2.x への移行ガイドは公式ドキュメント参照。

**Q. Haystack 2.x の API は大きく変わったのか？**  
A. 大きく変更。`Pipeline` ベース、`@component` デコレータ導入、より柔軟な設計に。詳細は公式ドキュメントを参照。

**Q. 既存の 1.x コードをそのまま実行できる？**  
A. いいえ。API が互換性ないため、コード書き直しが必要。移行ガイド参照。

---

## 2.3.12 参考リンク

- [Haystack 公式ドキュメント（2.x）](https://docs.haystack.deepset.ai/)
- [Haystack GitHub](https://github.com/deepset-ai/haystack)
- [Migration Guide（1.x → 2.x）](https://docs.haystack.deepset.ai/docs/migration-guide)
- [Components Reference](https://docs.haystack.deepset.ai/docs/components)

---

## 2.3.13 演習課題

1. ``Haystack 入門`` を使う想定ユースケースを1つ定義し、入力・出力の例を記録してください。
2. 最小構成で動かし、デフォルトから設定を1つ変えて挙動の差分を確認してください。
3. ``Haystack 入門`` を使わない場合の代替手段と比較し、選ぶ基準をまとめてください。


### 2.3.13.1 解答の目安

1. まず課題の目的を一文で明確化し、入力・出力を対応づけて記述します。
   確認ポイント: 何を変えて何を確認する課題かを第三者が読んで理解できること。
2. 最小構成で一度実行し、設定や条件を1つ変更して差分を比較します。
   確認ポイント: 変更前後の挙動差を具体的に説明できること。
3. 適用条件と代替手段を整理し、選択基準を短くまとめます。
   確認ポイント: なぜその手段を選ぶかを根拠付きで示せること。

## 2.3.14 理解度チェック

1. ``Haystack 入門`` の主な役割を1文で説明してください。
2. ``Haystack 入門`` を導入する際の最大のメリットと注意点は何ですか？
3. ``Haystack 入門`` が向かないユースケースとして、どのようなケースが考えられますか？


### 2.3.14.1 解説の要点

1. 主な役割は、その技術がどの工程を担い、何を改善するかで説明します。
2. メリットは再現性・拡張性・運用性の観点で整理し、注意点は導入コストや複雑性として示します。
3. 使い分けは要件、実装コスト、運用体制の3観点で判断します。
---

[← 前へ](02-rag/01-llamaindex.md) | [次へ →](02-rag/03-txtai.md)







---
level: 📖 中級（概念・実践）
prereq: Python基礎 / LLMアプリの基本概念
prev: 02-rag/02-haystack.md
next: 02-rag/04-ragflow.md
---

txtai は用途に応じて埋め込みモデルや生成モデルを切り替えられます。

# 2.4 txtai 入門

> 📖 中級（概念・実践） | 前提: Python基礎 / LLMアプリの基本概念

---

## 2.4.1 OSS概要・公式情報（2026-05-23時点）
- **バージョン**: 9.8.0+
- **公式ドキュメント**: https://neuml.github.io/txtai/
- **GitHub**: https://github.com/neuml/txtai
- **FAQ/制約/リリースノート**: https://github.com/neuml/txtai/discussions
- **公式情報参照日**: 2026-05-23

---

## 2.4.2 この教材で身につくこと
- txtaiの主な役割・適用場面を説明できる
- 最小構成で動かす手順を実行できる
- 導入時のメリット・注意点を整理できる

---

## 2.4.3 特徴・できること
### 2.4.3.1 主な特徴
- 埋め込み検索と生成ワークフローをまとめて扱える軽量フレームワーク
- ローカル・クラウド両対応、最小構成で意味検索を始めやすい
- Pythonのみで完結、APIもシンプル

### 2.4.3.2 できること（Features）
- 文書の埋め込み・意味検索・インデックス作成
- 生成モデルとの連携によるQAや要約
- ローカル/クラウドモデルの切り替え
- 軽量なAPIサーバーとしての運用

### 2.4.3.3 できないこと・制約事項（Limitations）
- 高度なUI機能は非搭載（外部実装が必要）
- 大規模分散処理や商用DB連携は限定的
- 公式FAQ・GitHub Discussionsで最新制約を要確認


### 2.4.3.4 注意事項・推奨構成
- Python 3.12（3.12系を推奨）
- モデル選定・APIキー管理に注意
- 公式FAQ・リリースノートでバージョン互換性を確認

---

## 2.4.4 利用モデル
txtaiは用途に応じて埋め込みモデルや生成モデルを切り替えられます。

- ローカルモデル（例: sentence-transformers / Ollama）: オフライン実行やデータ統制に向き、小規模検証を始めやすい
- クラウドモデル（例: OpenAI API）: 高性能モデルを利用しやすい一方、送信データとコスト管理が必要

本教材では、まずローカル構成で検索品質を確認し、必要に応じてクラウド構成を比較して採用判断する流れを推奨します。

---

## 2.4.5 仕組み・実行フロー
### 2.4.5.1 仕組み（全体像）
1. 目的と入力を定義し、対象データや利用モデルを準備
2. コア処理（検索・推論・生成・検証のいずれか）を実行
3. 実行結果を保存または表示し、次工程に渡せる形式へ整形
4. パラメータを調整して挙動差分を比較し、品質を確認
5. 運用を想定して再実行手順と確認ポイントを定着

## 2.4.6 比較・選定ポイント
- Pythonのみで完結し、最小限のコードで意味検索や生成ワークフローを実現できる軽量性
- ローカル/クラウド両対応でデータ統制やコスト重視・精度重視の選択が可能
- APIがシンプルで学習コストが低く、PoCや小規模用途に最適
- 大規模分散や商用DB連携、UI機能は限定的（必要に応じて他OSSと比較）
- LlamaIndexやHaystack等と比較し、要件や運用規模に応じて選定

---

## 2.4.7 公式情報の参照・引用について
本教材の内容は公式サイト等の一次情報（[公式ドキュメント](https://neuml.github.io/txtai/)、[GitHub Discussions](https://github.com/neuml/txtai/discussions)等）を参照し、2026年5月時点で整理しています。

---


## 2.4.8 まず試す
```bash
# uv未導入の場合
pyhton -m pip install uv

# 仮想環境作成
uv venv .venv
# Windows: .venv\Scripts\activate
# macOS/Linux: source .venv/bin/activate

# パッケージインストール
uv pip install txtai sentence-transformers

# 2) 最小検索を実行
python 01_basic-search.py

# 3) 同じ質問で上位結果を確認
#    質問: RAGの基本

# 4) モデル構成を切り替えて再実行
#    - A: ローカル埋め込み（all-MiniLM-L6-v2）
#    - B: クラウド埋め込み（OpenAI Embeddings など）
```
flowchart TD
	S[開始] --> D[文書配列準備]
	D --> E[Embeddings初期化]
	E --> I[インデックス作成]
	I --> Q[クエリ検索]
	Q --> O[上位結果表示]
	O --> X[終了]
```

この教材では setup ディレクトリにある最小ファイル一式をそのまま掲載し、リンク参照なしで再現できる形にします。

## サンプル

このサンプルでは、同じ文書集合・同じ質問を使って、
「ローカル埋め込み構成」と「クラウド埋め込み構成」の差分を確認します。

### 実行例

```bash
# 2.4 1) 最小環境を準備
pip install txtai sentence-transformers

# 2.4 2) 最小検索を実行
python 01_basic-search.py

# 2.4 3) 同じ質問で上位結果を確認
# 2.4 質問: RAGの基本

# 2.4 4) モデル構成を切り替えて再実行
# 2.4 - A: ローカル埋め込み（all-MiniLM-L6-v2）
# 2.4 - B: クラウド埋め込み（OpenAI Embeddings など）
```

### 期待される確認ポイント

- 上位結果の妥当性: 意図に合う文書が上位に来るか
- スコア傾向: 上位$k$件のスコア差が極端でないか
- 再現性: 同条件で同傾向の順位が得られるか
- 運用要件: レイテンシ・コスト・データ統制に適合するか

### 検証

- コマンドがエラーなく完了する
- 想定した出力（画面表示・ファイル生成・回答）を確認できる
- 変更した設定に応じて結果差分を説明できる

### 差分記録テンプレート

- 構成: ローカル埋め込み / クラウド埋め込み
- 質問: RAGの基本
- 上位結果: （上位3件を転記）
- 妥当性評価: 高 / 中 / 低
- 応答時間: xx 秒
- 判断メモ: 採用する構成と理由
## 実ソースコード（言語別に記載）

### Python: requirements.txt

- 役割: txtaiデモの依存関係定義
- 入力: なし
- 出力: uvインストール対象
- 実行: `uv pip install -r requirements.txt`

```txt
txtai==9.8.0
```

### Python: 01_basic-search.py

- 役割: 最小のセマンティック検索
- 入力: 文書配列と検索クエリ
- 出力: 上位検索結果
- 実行: `python 01_basic-search.py`

```python
"""txtai minimal semantic search demo."""

from txtai import Embeddings


def main() -> None:
	docs = [
		"RAGは検索結果を生成に使う手法",
		"LangChainはLLMアプリ開発フレームワーク",
		"株式分析ではニュース検索が重要",
	]

	embeddings = Embeddings({"path": "sentence-transformers/all-MiniLM-L6-v2"})
	embeddings.index([(i, text, None) for i, text in enumerate(docs)])

	for uid, score in embeddings.search("RAGの基本", 2):
		print(uid, round(score, 4), docs[uid])


if __name__ == "__main__":
	main()
```

## まず試す
```bash
pip install txtai sentence-transformers
python -c "from txtai import Embeddings; print('txtai ready')"
```

## 補足

**Q. txtai と LlamaIndex の使い分けは？**  
A. txtai は軽量・シンプル。LlamaIndex は機能豊富・拡張性重視。小規模プロジェクトは txtai、大規模・複雑な要件は LlamaIndex 推奨。

**Q. txtai でベクトル DB として使える？**  
A. はい。インメモリストアで十分な場合と、永続化が必要な場合で分けて考えます。永続化時は SQLite backend を使用可能。

**Q. オンプレミス環境で実行可能？**  
A. はい。依存関係が軽い（sentence-transformers など）ため、オンプレ環境での実行に向いています。

---

## 参考リンク

- [txtai 公式ドキュメント](https://neuml.github.io/txtai/)
- [txtai GitHub](https://github.com/neuml/txtai)
- [API Reference](https://neuml.github.io/txtai/api/)
- [Embeddings Guide](https://neuml.github.io/txtai/embeddings/)

---

## 演習課題

1. ``txtai 入門`` を使う想定ユースケースを1つ定義し、入力・出力の例を記録してください。
2. 最小構成で動かし、デフォルトから設定を1つ変えて挙動の差分を確認してください。
3. ``txtai 入門`` を使わない場合の代替手段と比較し、選ぶ基準をまとめてください。


### 解答の目安

1. まず課題の目的を一文で明確化し、入力・出力を対応づけて記述します。
   確認ポイント: 何を変えて何を確認する課題かを第三者が読んで理解できること。
2. 最小構成で一度実行し、設定や条件を1つ変更して差分を比較します。
   確認ポイント: 変更前後の挙動差を具体的に説明できること。
3. 適用条件と代替手段を整理し、選択基準を短くまとめます。
   確認ポイント: なぜその手段を選ぶかを根拠付きで示せること。

## 理解度チェック

1. ``txtai 入門`` の主な役割を1文で説明してください。
2. ``txtai 入門`` を導入する際の最大のメリットと注意点は何ですか？
3. ``txtai 入門`` が向かないユースケースとして、どのようなケースが考えられますか？


### 解説の要点

1. 主な役割は、その技術がどの工程を担い、何を改善するかで説明します。
2. メリットは再現性・拡張性・運用性の観点で整理し、注意点は導入コストや複雑性として示します。
3. 使い分けは要件、実装コスト、運用体制の3観点で判断します。
---

# txtai 入門（簡潔版）

> 中級（概念・実践） — 前提: Python基礎 / LLMアプリの基本概念

---

## 概要（短く）
- txtai は埋め込み検索と生成ワークフローを軽量に扱うPythonライブラリ／サービス。
- ローカルモデルとクラウドモデルを切替え可能で、PoCや小規模RAGに向く。

## この教材で得られること
- txtaiの役割と適用場面を把握する
- 最小構成で意味検索を実行できる
- ローカル⇄クラウドの比較ポイントが分かる

## 主な特徴（要点）
- シンプルなAPIで埋め込み・検索・インデックスができる
- Pythonのみで完結し、ローカル運用が容易
- 生成モデルと組み合わせたQA/要約ワークフローを構築可能

## 制約（すぐ確認すべき点）
- UI機能は限定的（外部実装が必要）
- 大規模分散処理や商用DB統合は限定的
- 構成変更でモデル互換性・依存性に差が出るため公式ドキュメントを参照すること

---

## クイックスタート（最小手順）

1. 仮想環境（例: Python 3.12）を作成・有効化
2. 依存パッケージをインストール

```bash
pip install txtai sentence-transformers
```

3. 最小サンプルを実行（後述の `01_basic-search.py`）

---

## 最小サンプル（Python）

```python
from txtai import Embeddings

docs = [
	"RAGは検索結果を生成に使う手法",
	"LangChainはLLMアプリ開発フレームワーク",
	"株式分析ではニュース検索が重要",
]

emb = Embeddings({"path": "sentence-transformers/all-MiniLM-L6-v2"})
emb.index([(i, t, None) for i, t in enumerate(docs)])

for uid, score in emb.search("RAGの基本", 3):
	print(uid, round(score, 4), docs[uid])
```

### 出力例（実行環境依存・参考値）
```console
[notice] To update, run: python.exe -m pip install --upgrade pip
PS C:\Dev\tutorials\generative-ai-oss-tutorials\sandbox\03_txtai> python .\01_basic-search.py
0 0.493 RAGは検索結果を生成に使う手法
2 0.4483 株式分析ではニュース検索が重要
1 0.4395 LangChainはLLMアプリ開発フレームワーク
```

---

## 検証ポイント（短く）
- 上位結果の妥当性（目的に合うか）
- スコアと順位の安定性
- レイテンシ・コスト・データ統制の要件適合性

## 推奨ワークフロー（短く）
1. ローカルで品質・再現性を確認
2. 必要ならクラウド埋め込みで精度・スループットを比較
3. 運用要件に合わせて永続化（SQLite等）やAPI化を検討

---

## 参考
- 公式: https://neuml.github.io/txtai/ (確認: 2026-05-23)
- GitHub: https://github.com/neuml/txtai

---

## 演習（短）
1. 想定ユースケースを1つ定義し、入出力を1行で書く
2. ローカル構成で動かし、モデルを1つ切替えて差分を記録する

[← 前へ](02-rag/02-haystack.md) | [次へ →](02-rag/04-ragflow.md)








---
level: 📖 中級（概念・実践）
prereq: Python基礎 / LLMアプリの基本概念
prev: 02-rag/03-txtai.md
next: 02-rag/05-privategpt.md
---



# 2.5 RAGFlow 入門

> 📖 中級（概念・実践） | 前提: Python基礎 / LLMアプリの基本概念

---

## 2.5.1 OSS概要・公式情報（2026-05-23時点）
- **バージョン**: 最新版（2026-05-23時点、GitHub参照）
- **公式サイト**: https://ragflow.io/
- **GitHub**: https://github.com/infiniflow/ragflow
- **公式情報参照日**: 2026-05-23

---

## 2.5.2 この教材で身につくこと
- RAGFlowの主な役割と適用場面を説明できる
- RAGFlowを最小構成で動かす手順を実行できる
- 導入時のメリットと注意点を整理できる

---

## 2.5.3 特徴・できること
### 2.5.3.1 主な特徴
- RAGパイプライン（文書取り込み・検索・生成・検証）を統合運用できるOSS
- ローカルLLM/クラウドLLM両対応（Ollama, OpenAI API等）
- Docker Composeによる簡易セットアップ
- UIからワークフロー設計・複数プロバイダ切替が可能
- 運用・再現性・品質検証に配慮した設計

### 2.5.3.2 できないこと・注意事項
- 大規模運用時はリソース要件（メモリ4GB以上等）に注意
- LLMプロバイダのAPI制限やコスト、データ送信統制が必要
- 高度なカスタマイズや独自拡張は要ソース読解

### 2.5.3.3 比較・選定ポイント
- **運用性**: UI/ワークフロー設計・再現性重視なら有力
- **導入容易性**: Docker Composeで即試せる
- **他OSSとの違い**: LangChain等に比べ「運用・検証・UI統合」に強み
- **選定基準例**: 
	- 社内運用/オンプレ要件 → ローカルLLM構成
	- API/クラウド連携重視 → クラウドLLM構成
	- ノーコード/ローコード運用 → UI重視のRAGFlow

---

## 2.5.4 利用モデル
RAGFlowは利用モデルを固定せず、用途に応じて複数プロバイダを設定できます。

- ローカルLLM（例: Ollama）: データ外部送信を抑えやすく、機密文書の社内運用に向く
- クラウドLLM（例: OpenAI API）: モデル性能や運用機能を活用しやすい一方、送信データ統制が必要

本教材では、まずローカルLLM構成でRAGFlowを確認し、要件に応じてクラウドLLMを比較検証する流れを推奨します。

---

## 2.5.5 仕組み・実行フロー
### 2.5.5.1 仕組み（全体像）
1. 目的と入力を定義し、対象データや利用モデルを準備
2. コア処理（検索・推論・生成・検証のいずれか）を実行
3. 実行結果を保存または表示し、次工程に渡せる形式へ整形
4. パラメータを調整して挙動差分を比較し、品質を確認
5. 運用を想定して再実行手順と確認ポイントを定着

---

### 2.5.5.2 位置づけ・ワークフロー図
RAGFlow は、RAGパイプラインをアプリとして運用するための統合基盤です。
```mermaid
flowchart LR
	A[運用向けRAG] --> B[RAGFlow]
	B --> C[Document Ingestion]
	B --> D[Workflow UI]
	B --> E[Retrieval + Generation]
```

### 2.5.5.3 実行フロー（セットアップ～利用）
```mermaid
flowchart TD
	S[開始] --> G[リポジトリ取得]
	G --> C[compose起動]
	C --> A[ブラウザアクセス]
	A --> X[初期設定]
```

---

## 2.5.6 最小セットアップ手順
1. 公式リポジトリを取得
2. Docker Compose で起動
3. ブラウザで http://localhost:9380 にアクセス

```bash
git clone https://github.com/infiniflow/ragflow.git
cd ragflow
docker compose up -d
```

---

## 2.5.7 サンプル・検証ポイント
同一ナレッジベース・同一質問で「ローカルLLM構成」と「クラウドLLM構成」の差分を確認します。

### 2.5.7.1 実行例
```bash
# 1) RAGFlow を起動
git clone https://github.com/infiniflow/ragflow.git
cd ragflow
docker compose up -d
# 2) ブラウザで http://localhost:9380 にアクセス
# 3) 同じ文書を取り込み（例: docs/policy.md）
#    例: 「在宅勤務は週3日まで可能。申請は前日18時まで」
# 4) 同じ質問を実行
#    質問: 在宅勤務の上限日数と申請締切は？
# 5) モデル構成を切り替えて再実行
#    - A: ローカルLLM（Ollama など）
#    - B: OpenAI API などのクラウドLLM
```

#### 2.5.7.1.1 期待される確認ポイント
- 回答の正確性: 「週3日」「前日18時まで」を正しく抽出できるか
- 再現性: 同条件で同傾向の回答が得られるか
- レイテンシ: 回答速度にどれくらい差があるか
- 運用適合性: セキュリティ・監査・コスト要件に合うか

#### 2.5.7.1.2 差分記録テンプレート
- 構成: ローカルLLM / クラウドLLM
- 質問: 在宅勤務の上限日数と申請締切は？
- 回答: （そのまま転記）
- 正確性評価: 正 / 部分一致 / 誤り
- 応答時間: xx 秒
- 判断メモ: 本番運用で採用する構成と理由

---

## 2.5.8 よくある質問・補足
**Q. RAGFlow は自社で運用可能？**  
A. はい。Docker Compose で完全にオンプレミス構成可能。ただし、リソース要件が大きい（メモリ 4GB 以上推奨）。

**Q. 複数LLMの切り替えは可能？**  
A. はい。UI から複数 LLM プロバイダ（OpenAI、Ollama など）を設定可能。

**Q. 大規模文書の索引化はどのくらい時間がかかる？**  
A. 実装形式により異なる。事前にテストで所要時間を確認推奨。

---

## 2.5.9 参考リンク
- [RAGFlow 公式サイト](https://ragflow.io/)
- [RAGFlow GitHub](https://github.com/infiniflow/ragflow)
- [Docker Compose セットアップ](https://github.com/infiniflow/ragflow/blob/main/docker-compose.yml)
- [設定ガイド](https://github.com/infiniflow/ragflow#configuration)

---

## 2.5.10 演習課題
1. RAGFlow を使う想定ユースケースを1つ定義し、入力・出力の例を記録してください。
2. 最小構成で動かし、デフォルトから設定を1つ変えて挙動の差分を確認してください。
3. RAGFlow を使わない場合の代替手段と比較し、選ぶ基準をまとめてください。

### 2.5.10.1 解答の目安
1. まず課題の目的を一文で明確化し、入力・出力を対応づけて記述します。
2. 最小構成で一度実行し、設定や条件を1つ変更して差分を比較します。
3. 適用条件と代替手段を整理し、選択基準を短くまとめます。

---

## 2.5.11 理解度チェック
1. RAGFlow の主な役割を1文で説明してください。
2. RAGFlow を導入する際の最大のメリットと注意点は何ですか？
3. RAGFlow が向かないユースケースとして、どのようなケースが考えられますか？

### 2.5.11.1 解説の要点
1. 主な役割は、その技術がどの工程を担い、何を改善するかで説明します。
2. メリットは再現性・拡張性・運用性の観点で整理し、注意点は導入コストや複雑性として示します。
3. 使い分けは要件、実装コスト、運用体制の3観点で判断します。

---

[← 前へ](02-rag/03-txtai.md) | [次へ →](02-rag/05-privategpt.md)







---
level: 📖 中級（概念・実践）
prereq: Python基礎 / LLMアプリの基本概念
prev: 02-rag/04-ragflow.md
next: 02-rag/06-quivr.md
---


# 2.6 privateGPT 入門

> 📖 中級（概念・実践） | 前提: Python基礎 / LLMアプリの基本概念

---

## 2.6.1 OSS概要・公式情報（2026-05-23時点）
- **バージョン**: 0.6.2+ / OSS準拠（2026-05-23時点）
- **公式ドキュメント**: https://docs.privategpt.dev/
- **GitHub**: https://github.com/zylon-ai/private-gpt
- **公式情報参照日**: 2026-05-23

---

## 2.6.2 この教材で身につくこと
- privateGPT の主な役割と適用場面を説明できる
- privateGPT を最小構成で動かす手順を実行できる
- 導入時のメリットと注意点を整理できる

---

## 2.6.3 特徴・できること
### 2.6.3.1 主な特徴
- ローカル文書に対するプライベートQAを実現するOSS
- ローカルLLM/クラウドLLM両対応（Ollama, llama.cpp, OpenAI API等）
- 完全オンプレミス運用が可能
- PDF/Word/Text/Markdown等の多様な文書形式に対応

### 2.6.3.2 できないこと・注意事項
- クラウドLLM利用時はデータ外部送信リスクあり
- 言語サポートや大規模運用時のリソース要件に注意
- 高度なカスタマイズや独自拡張は要ソース読解

### 2.6.3.3 比較・選定ポイント
- **プライバシー重視**: データ外部送信なしで運用したい場合に最適
- **導入容易性**: Python 3.12 + uv で即試せる
- **他OSSとの違い**: RAGFlow等に比べ「完全ローカル・プライバシー特化」に強み
- **選定基準例**:
    - 社内運用/オンプレ要件 → ローカルLLM構成
    - 高性能モデル重視 → クラウドLLM構成
    - プライバシー最優先 → privateGPT

---

## 2.6.4 利用モデル
privateGPT は利用モデルを固定せず、構成に応じて切り替えできます。

- ローカルLLM（例: Ollama, llama.cpp）: データを外部送信せずに運用しやすく、privateGPT の主目的に合致
- クラウドLLM（例: OpenAI API）: 高性能モデルを利用しやすい一方、外部送信に関する統制が必要

本教材では、プライバシー重視の観点からローカルLLM構成を基本とします。要件上必要な場合のみ、クラウドLLMを選択してください。

---

## 2.6.5 仕組み・実行フロー
### 2.6.5.1 仕組み（全体像）
1. 目的と入力を定義し、対象データや利用モデルを準備
2. コア処理（検索・推論・生成・検証のいずれか）を実行
3. 実行結果を保存または表示し、次工程に渡せる形式へ整形
4. パラメータを調整して挙動差分を比較し、品質を確認
5. 運用を想定して再実行手順と確認ポイントを定着

### 2.6.5.2 位置づけ・ワークフロー図
privateGPT は、データを外部に出さずに文書QAを実現したいケースに向いています。
```mermaid
flowchart LR
	A[ローカルRAG] --> B[privateGPT]
	B --> C[文書取り込み]
	B --> D[ローカル推論]
	B --> E[プライベートQA]
```

### 2.6.5.3 実行フロー（セットアップ～利用）
```mermaid
flowchart TD
	S[開始] --> G[リポジトリ取得]
	G --> I[依存インストール]
	I --> R[アプリ実行]
	R --> D[文書取り込み]
	D --> Q[質問実行]
	Q --> X[終了]
```

---

## 2.6.6 最小セットアップ手順
1. 公式リポジトリを取得
2. 依存パッケージをインストール
3. アプリを起動

```bash
git clone https://github.com/zylon-ai/private-gpt.git
cd private-gpt
# uv未導入の場合
pyhton -m pip install uv

# 仮想環境作成
uv venv .venv
# Windows: .venv\Scripts\activate
# macOS/Linux: source .venv/bin/activate


# パッケージインストール
uv pip install -r requirements.txt

### Python: requirements.txt（最小構成例）

- 役割: privateGPTの依存関係定義
- 入力: なし
- 出力: uvインストール対象
- 実行: `uv pip install -r requirements.txt`

```txt
langchain>=0.1.0
chromadb>=0.4.24
python-dotenv>=1.0.0
tqdm>=4.65.0
openai>=1.0.0
llama-cpp-python>=0.2.60
ollama>=0.1.7
PyPDF2>=3.0.0
docx2txt>=0.8
markdown>=3.4.0
fastapi>=0.110.0
uvicorn>=0.29.0
```

# アプリ起動
python -m private_gpt
```

ローカル文書を ingest してから質問します。

---

## 2.6.7 サンプル・検証ポイント
同じ文書・同じ質問で「ローカルLLM構成」と「クラウドLLM構成」の違いを確認します。

### 2.6.7.1 実行例
```bash
# 1) privateGPT を起動
git clone https://github.com/zylon-ai/private-gpt.git
cd private-gpt
# uv未導入の場合
pyhton -m pip install uv

# 仮想環境作成
uv venv .venv
# Windows: .venv\Scripts\activate
# macOS/Linux: source .venv/bin/activate

# パッケージインストール
uv pip install -r requirements.txt

# アプリ起動
python -m private_gpt
# 2) 起動後、UI または API から docs/policy.md を取り込み
#    例: 「在宅勤務は週3日まで可能。申請は前日18時まで」
# 3) 同じ質問を実行
#    質問: 在宅勤務の上限日数と申請締切は？
# 4) 構成を切り替えて再実行
#    - A: ローカルLLM（推奨）
#    - B: OpenAI API などのクラウドLLM
```

#### 2.6.7.1.1 期待される確認ポイント
- 回答の正確性: 「週3日」「前日18時まで」が抽出できるか
- 参照一貫性: 取り込んだ文書の内容に沿った回答か
- レイテンシ: 応答速度にどれくらい差があるか
- 運用要件: データ外部送信の有無、監査・統制要件に適合するか

#### 2.6.7.1.2 差分記録テンプレート
- 構成: ローカルLLM / クラウドLLM
- 質問: 在宅勤務の上限日数と申請締切は？
- 回答: （そのまま転記）
- 正確性評価: 正 / 部分一致 / 誤り
- 応答時間: xx 秒
- 判断メモ: どの要件ではどちらを採用するか

---

## 2.6.8 よくある質問・補足
**Q. privateGPT でクラウドLLM利用は可能？**  
A. 設定で OpenAI API 等も使用可能。ただしデータ流出のリスクがあるため、本来の目的には合致しません。

**Q. Ollama や Llama2 ローカルとの連携は？**  
A. はい。Ollama など local LLM と連携で、完全プライベート構成可能。

**Q. 対応ドキュメント形式は？**  
A. PDF、Word、Text、Markdown 等。ただし言語サポートに制限あり。

---

## 2.6.9 参考リンク
- [PrivateGPT 公式ドキュメント](https://docs.privategpt.dev/)
- [PrivateGPT GitHub](https://github.com/zylon-ai/private-gpt)
- [Installation Guide](https://docs.privategpt.dev/installation)
- [Configuration](https://docs.privategpt.dev/config)

---

## 2.6.10 演習課題
1. privateGPT を使う想定ユースケースを1つ定義し、入力・出力の例を記録してください。
2. 最小構成で動かし、デフォルトから設定を1つ変えて挙動の差分を確認してください。
3. privateGPT を使わない場合の代替手段と比較し、選ぶ基準をまとめてください。

### 2.6.10.1 解答の目安
1. まず課題の目的を一文で明確化し、入力・出力を対応づけて記述します。
2. 最小構成で一度実行し、設定や条件を1つ変更して差分を比較します。
3. 適用条件と代替手段を整理し、選択基準を短くまとめます。

---

## 2.6.11 理解度チェック
1. privateGPT の主な役割を1文で説明してください。
2. privateGPT を導入する際の最大のメリットと注意点は何ですか？
3. privateGPT が向かないユースケースとして、どのようなケースが考えられますか？

### 2.6.11.1 解説の要点
1. 主な役割は、その技術がどの工程を担い、何を改善するかで説明します。
2. メリットは再現性・拡張性・運用性の観点で整理し、注意点は導入コストや複雑性として示します。
3. 使い分けは要件、実装コスト、運用体制の3観点で判断します。

---

[← 前へ](02-rag/04-ragflow.md) | [次へ →](02-rag/06-quivr.md)







---
level: 📖 中級（概念・実践）
prereq: Python基礎 / LLMアプリの基本概念
prev: 02-rag/05-privategpt.md
next: 02-rag/07-onyx.md
---


# 2.7 Quivr 入門

> 📖 中級（概念・実践） | 前提: Python基礎 / LLMアプリの基本概念

---

## 2.7.1 OSS概要・公式情報（2026-05-23時点）
- **バージョン**: 最新版（GitHub 確認推奨、2026-05-23時点）
- **公式ドキュメント**: https://quivr.com/
- **GitHub**: https://github.com/QuivrHQ/quivr
- **公式情報参照日**: 2026-05-23

---

## 2.7.2 この教材で身につくこと
- Quivr の主な役割と適用場面を説明できる
- Quivr を最小構成で動かす手順を実行できる
- 導入時のメリットと注意点を整理できる

---

## 2.7.3 特徴・できること
### 2.7.3.1 主な特徴
- 個人・チーム向けナレッジアシスタントを構築するOSS
- ローカルLLM/クラウドLLM両対応（Ollama, OpenAI API等）
- 複数データソース・コネクタ連携が可能
- Docker Composeによる簡易セットアップ

### 2.7.3.2 できないこと・注意事項
- エンタープライズレベルの権限管理は限定的
- 初回セットアップや複数コネクタ連携に手間がかかる場合あり
- クラウドLLM利用時はデータ送信・コスト管理に注意

### 2.7.3.3 比較・選定ポイント
- **チーム運用重視**: 複数データソース・共有アシスタント用途に有力
- **導入容易性**: Docker Composeで即試せる
- **他OSSとの違い**: privateGPT等に比べ「チーム・共有・コネクタ連携」に強み
- **選定基準例**:
	- チーム/複数人運用 → Quivr
	- プライバシー最優先 → privateGPT
	- 権限管理重視 → Danswer等

---

## 2.7.4 利用モデル
Quivr は利用モデルを固定せず、接続先に応じて切り替えできます。

- ローカルLLM（例: Ollama）: データを社内閉域で扱いやすく、プライバシー要件に適合しやすい
- クラウドLLM（例: OpenAI API）: 高性能モデルを利用しやすい一方、送信ポリシーとコスト管理が必要

本教材では、まずローカルLLMで基本動作を確認し、必要に応じてクラウドLLMへ切り替えて品質差分を比較します。

---

## 2.7.5 仕組み・実行フロー
### 2.7.5.1 仕組み（全体像）
1. 目的と入力を定義し、対象データや利用モデルを準備
2. コア処理（検索・推論・生成・検証のいずれか）を実行
3. 実行結果を保存または表示し、次工程に渡せる形式へ整形
4. パラメータを調整して挙動差分を比較し、品質を確認
5. 運用を想定して再実行手順と確認ポイントを定着

### 2.7.5.2 位置づけ・ワークフロー図
Quivr は、複数データソースをつないだチーム用ナレッジアシスタントを比較的短時間で立ち上げる用途に向いています。
```mermaid
flowchart LR
	A[チーム向けナレッジ検索] --> B[Quivr]
	B --> C[データソース接続]
	B --> D[検索 + 回答]
	B --> E[共有アシスタント]
```

### 2.7.5.3 実行フロー（セットアップ～利用）
```mermaid
flowchart TD
	S[開始] --> G[リポジトリ取得]
	G --> C[compose起動]
	C --> B[ブラウザ確認]
	B --> D[データソース追加]
	D --> Q[質問実行]
	Q --> X[終了]
```

---

## 2.7.6 最小セットアップ手順
1. 公式リポジトリを取得
2. Docker Compose で起動
3. ブラウザで起動確認後、データソースを追加

```bash
git clone https://github.com/QuivrHQ/quivr.git
cd quivr
docker compose up -d
```

---

## 2.7.7 サンプル・検証ポイント
同一データソース・同一質問で「ローカルLLM構成」と「クラウドLLM構成」の差分を確認します。

### 2.7.7.1 実行例
```bash
# 1) Quivr を起動
git clone https://github.com/QuivrHQ/quivr.git
cd quivr
docker compose up -d
# 2) ブラウザで起動確認後、同じデータソースを接続
#    例: docs/policy.md
#    例: 「在宅勤務は週3日まで可能。申請は前日18時まで」
# 3) 同じ質問を実行
#    質問: 在宅勤務の上限日数と申請締切は？
# 4) モデル構成を切り替えて再実行
#    - A: ローカルLLM（Ollama など）
#    - B: OpenAI API などのクラウドLLM
```

#### 2.7.7.1.1 期待される確認ポイント
- 回答の正確性: 根拠文書と一致する回答が得られるか
- 参照安定性: 同一質問で回答の揺れが過大でないか
- レイテンシ: チーム利用時に許容できる応答時間か
- 運用要件: 権限・監査・コスト要件に適合するか

#### 2.7.7.1.2 差分記録テンプレート
- 構成: ローカルLLM / クラウドLLM
- 質問: 在宅勤務の上限日数と申請締切は？
- 回答: （そのまま転記）
- 正確性評価: 正 / 部分一致 / 誤り
- 応答時間: xx 秒
- 判断メモ: チーム運用で採用する構成と理由

---

## 2.7.8 よくある質問・補足
**Q. Quivr は個人利用と企業利用で差別化？**  
A. Quivr Cloud は課金（無料枠あり）。GitHub は OSS 版（自社運用）。要件に応じて選択。

**Q. 複数データソース（Drive、GitHub など）を同時に連携？**  
A. はい。複数コネクタ同時接続可能。ただし初回セットアップに手間。

**Q. チーム共有時の権限管理は？**  
A. 基本的な管理機能はあるが、エンタープライズレベルではない。Danswer の方が権限管理は充実。

---

## 2.7.9 参考リンク
- [Quivr 公式サイト](https://quivr.com/)
- [Quivr GitHub](https://github.com/QuivrHQ/quivr)
- [ドキュメント](https://docs.quivr.com/)
- [コネクタ一覧](https://docs.quivr.com/docs/integrations)

---

## 2.7.10 演習課題
1. Quivr を使う想定ユースケースを1つ定義し、入力・出力の例を記録してください。
2. 最小構成で動かし、デフォルトから設定を1つ変えて挙動の差分を確認してください。
3. Quivr を使わない場合の代替手段と比較し、選ぶ基準をまとめてください。

### 2.7.10.1 解答の目安
1. まず課題の目的を一文で明確化し、入力・出力を対応づけて記述します。
2. 最小構成で一度実行し、設定や条件を1つ変更して差分を比較します。
3. 適用条件と代替手段を整理し、選択基準を短くまとめます。

---

## 2.7.11 理解度チェック
1. Quivr の主な役割を1文で説明してください。
2. Quivr を導入する際の最大のメリットと注意点は何ですか？
3. Quivr が向かないユースケースとして、どのようなケースが考えられますか？

### 2.7.11.1 解説の要点
1. 主な役割は、その技術がどの工程を担い、何を改善するかで説明します。
2. メリットは再現性・拡張性・運用性の観点で整理し、注意点は導入コストや複雑性として示します。
3. 使い分けは要件、実装コスト、運用体制の3観点で判断します。

---

[← 前へ](02-rag/05-privategpt.md) | [次へ →](02-rag/07-onyx.md)







---
level: 📖 中級（概念・実践）
prereq: Python基礎 / LLMアプリの基本概念
prev: 02-rag/06-quivr.md
next: 03-inference/00-README.md
---


# 2.8 Onyx 入門

> 📖 中級（概念・実践） | 前提: Python基礎 / LLMアプリの基本概念

---

## 2.8.1 OSS概要・公式情報（2026-05-23時点）
- **バージョン**: 3.3.2+ / OSS準拠（2026-05-23時点）
- **公式ドキュメント**: https://docs.onyx.app/
- **GitHub**: https://github.com/onyx-dot-app/onyx
- **公式情報参照日**: 2026-05-23

---

## 2.8.2 この教材で身につくこと
- Onyx の主な役割と適用場面を説明できる
- Onyx を最小構成で動かす手順を実行できる
- 導入時のメリットと注意点を整理できる

---

## 2.8.3 特徴・できること
### 2.8.3.1 主な特徴
- 社内横断検索と生成回答を提供するエンタープライズ向けOSS
- ローカルLLM/クラウドLLM両対応（Ollama, OpenAI API等）
- Confluence/Slack/Drive等の複数コネクタ連携
- Docker Composeによる簡易セットアップ

### 2.8.3.2 できないこと・注意事項
- オンプレ時はDB・メモリ等のリソース要件に注意
- クラウドLLM利用時はデータ送信・監査・コスト管理に注意
- 高度な権限管理やカスタマイズは要検証

### 2.8.3.3 比較・選定ポイント
- **エンタープライズ重視**: 複数システム横断・権限管理用途に有力
- **導入容易性**: Docker Composeで即試せる
- **他OSSとの違い**: Quivr等に比べ「企業横断・権限管理・コネクタ連携」に強み
- **選定基準例**:
	- 大規模企業・複数システム運用 → Onyx
	- シンプル導入・中小向け → Quivr
	- プライバシー最優先 → privateGPT

---

## 2.8.4 利用モデル
Onyx はモデルを固定せず、接続する推論基盤に応じて切り替えできます。

- ローカルLLM（例: Ollama 連携）: 社内閉域で運用しやすく、機密情報の統制に向く
- クラウドLLM（例: OpenAI API）: モデル性能を活用しやすい一方、送信ポリシーと監査要件の整備が必要

本教材では、まずローカル構成で社内検索の基本動作を確認し、次にクラウド構成で品質・速度・コスト差分を比較する流れを推奨します。

---

## 2.8.5 仕組み・実行フロー
### 2.8.5.1 仕組み（全体像）
1. 目的と入力を定義し、対象データや利用モデルを準備
2. コア処理（検索・推論・生成・検証のいずれか）を実行
3. 実行結果を保存または表示し、次工程に渡せる形式へ整形
4. パラメータを調整して挙動差分を比較し、品質を確認
5. 運用を想定して再実行手順と確認ポイントを定着

### 2.8.5.2 位置づけ・ワークフロー図
Onyx は、Confluence/Slack/Drive など複数システムを横断した企業内検索に適した構成です。
```mermaid
flowchart LR
	A[社内ナレッジ検索] --> B[Onyx]
	B --> C[コネクタ連携]
	B --> D[横断検索]
	B --> E[生成回答]
```

### 2.8.5.3 実行フロー（セットアップ～利用）
```mermaid
flowchart TD
	S[開始] --> G[リポジトリ取得]
	G --> C[compose起動]
	C --> A[管理画面アクセス]
	A --> K[コネクタ設定]
	K --> Q[検索と回答確認]
	Q --> X[終了]
```

---

## 2.8.6 最小セットアップ手順
1. 公式リポジトリを取得
2. Docker Compose で起動
3. 管理画面からコネクタ（Confluence, Slack, Google Drive等）を設定

```bash
git clone https://github.com/onyx-dot-app/onyx.git
cd onyx
docker compose up -d
```

---

## 2.8.7 サンプル・検証ポイント
同一コネクタ・同一質問で「ローカルLLM構成」と「クラウドLLM構成」の差分を確認します。

### 2.8.7.1 実行例
```bash
# 1) Onyx を起動
git clone https://github.com/onyx-dot-app/onyx.git
cd onyx
docker compose up -d
# 2) 管理画面で同じコネクタを設定
#    例: Confluence または Google Drive
# 3) 同じ質問を実行
#    質問: 在宅勤務の上限日数と申請締切は？
# 4) モデル構成を切り替えて再実行
#    - A: ローカルLLM（Ollama など）
#    - B: OpenAI API などのクラウドLLM
```

#### 2.8.7.1.1 期待される確認ポイント
- 回答の正確性: 根拠情報に一致した回答が得られるか
- ソース追跡性: 参照元が明示され、確認可能か
- レイテンシ: 実運用で許容できる応答時間か
- 運用適合性: 権限管理・監査・コストの要件を満たすか

#### 2.8.7.1.2 差分記録テンプレート
- 構成: ローカルLLM / クラウドLLM
- 質問: 在宅勤務の上限日数と申請締切は？
- 回答: （そのまま転記）
- 正確性評価: 正 / 部分一致 / 誤り
- 応答時間: xx 秒
- 判断メモ: 企業運用で採用する構成と理由

---

## 2.8.8 よくある質問・補足
**Q. Onyx と Quivr の使い分けは？**  
A. Onyx はエンタープライズ向け（Slack/Confluence 等との深い統合）。Quivr はシンプルで導入が速い。大規模企業は Onyx、中小・スタートアップは Quivr 向き。

**Q. Danswer から Onyx へのリネームは何が変わった？**  
A. ブランド名と公式サイトが Onyx に移行しました。実運用のための中核機能は継続されています。

**Q. コスト比較: SaaS vs オンプレミスは？**  
A. Onyx Cloud（SaaS）vs self-hosted 自由選択。オンプレ時はリソース（DB、メモリ）コスト要検討。

---

## 2.8.9 参考リンク
- [Onyx 公式サイト](https://docs.onyx.app/)
- [Onyx GitHub](https://github.com/onyx-dot-app/onyx)
- [デプロイメントガイド](https://docs.onyx.app/deployment/overview.md)
- [コネクタドキュメント](https://docs.onyx.app/admins/connectors/overview.md)

---

## 2.8.10 演習課題
1. Onyx を使う想定ユースケースを1つ定義し、入力・出力の例を記録してください。
2. 最小構成で動かし、デフォルトから設定を1つ変えて挙動の差分を確認してください。
3. Onyx を使わない場合の代替手段と比較し、選ぶ基準をまとめてください。

### 2.8.10.1 解答の目安
1. まず課題の目的を一文で明確化し、入力・出力を対応づけて記述します。
2. 最小構成で一度実行し、設定や条件を1つ変更して差分を比較します。
3. 適用条件と代替手段を整理し、選択基準を短くまとめます。

---

## 2.8.11 理解度チェック
1. Onyx の主な役割を1文で説明してください。
2. Onyx を導入する際の最大のメリットと注意点は何ですか？
3. Onyx が向かないユースケースとして、どのようなケースが考えられますか？

### 2.8.11.1 解説の要点
1. 主な役割は、その技術がどの工程を担い、何を改善するかで説明します。
2. メリットは再現性・拡張性・運用性の観点で整理し、注意点は導入コストや複雑性として示します。
3. 使い分けは要件、実装コスト、運用体制の3観点で判断します。

---

[← 前へ](02-rag/06-quivr.md) | [次へ →](03-inference/00-README.md)





---
level: 🔰 初級（カテゴリ導入）
prereq: "-"
prev: 02-rag/07-onyx.md
next: 03-inference/01-vllm.md
---

# 3.1 推論実行基盤（LLMサービング）

> 🔰 初級（カテゴリ導入） | 前提: -

高速で効率的なLLM推論を実現するサーバ・フレームワーク。本番API構築向け。

## 3.1.1 位置づけ

```mermaid
flowchart LR
  A[LLM提供基盤] --> B[推論実行]
  B --> C[vLLM]
  B --> D[Ollama]
  B --> E[TGI/llama.cpp]
```

## 3.1.2 学習フロー

```mermaid
flowchart TD
  S[開始] --> O[Ollamaでローカル検証]
  O --> V[vLLMでAPI化]
  V --> T[TGIで配信比較]
  T --> L[llama.cpp軽量推論]
  L --> X[運用指針を整理]
```

## 3.1.3 含まれるOSS

- **vLLM**: 高速・高効率なLLM推論サーバ
- **Ollama**: ローカルLLM実行の簡素化
- **TGI (Text Generation Inference)**: Hugging Face製推論サーバ
- **llama.cpp**: CPU/GPU軽量推論

## 3.1.4 学習順序

1. Ollama (開発・テスト向けローカル推論)
2. vLLM (本番推論API構築)
3. TGI (大規模モデル配信)

## 3.1.5 教材リンク

- [01-vllm.md](./01-vllm.md)
- [02-ollama.md](./02-ollama.md)
- [03-tgi.md](./03-tgi.md)
- [04-llama-cpp.md](./04-llama-cpp.md)
- [05-streaming.md](./05-streaming.md)

## 3.1.6 完了条件

- カテゴリ内の主要OSSを3つ以上説明できる
- 最小サンプルを1件以上動作確認できる
- 選定観点（速度/運用性/拡張性）で比較メモを作成できる

---

[← 前へ](02-rag/07-onyx.md) | [次へ →](03-inference/01-vllm.md)





---
level: 📖 中級（概念・実践）
prereq: Python基礎 / LLMアプリの基本概念
prev: 03-inference/00-README.md
next: 03-inference/02-ollama.md
---

# 3.2 vLLM - 高速LLM推論サーバ

> 📖 中級（概念・実践） | 前提: Python基礎 / LLMアプリの基本概念

## 3.2.1 この教材で身につくこと

- Paged Attention などの最適化により大幅な高速化
- 複数リクエストを効率的に処理
- KVキャッシュの最適化で必要メモリを削減
- Llama、Mistral、Qwen等を直接サポート
- 既存のOpenAI APIコードがそのまま動作

**バージョン**: 0.6.0+ / OSS準拠（2026-05時点）  
**公式ドキュメント**: https://docs.vllm.ai/

## 3.2.2 コンセプト

**vLLM** は、LLMの推論を高速・高効率に実行するオープンソースサーバです。

### 3.2.2.1 主な特徴

- **高速推論**: Paged Attention などの最適化により大幅な高速化
- **バッチ処理**: 複数リクエストを効率的に処理
- **メモリ効率**: KVキャッシュの最適化で必要メモリを削減
- **複数モデル対応**: Llama、Mistral、Qwen等を直接サポート
- **OpenAI互換API**: 既存のOpenAI APIコードがそのまま動作

---

## 3.2.3 仕組み

### 3.2.3.1 処理の流れ

1. モデルをロードし、KVキャッシュ管理を最適化します。
2. リクエストをバッチ化してGPU利用効率を高めます。
3. Paged Attention でメモリ断片化を抑えます。
4. OpenAI互換APIで既存クライアントを受け付けます。
5. スループットと遅延を監視しながら運用パラメータを調整します。

### 3.2.3.2 メリット

✅ 推論速度が非常に高速（OpenAI互換より10-40倍）  
✅ メモリ使用量が少ない  
✅ スケーラブル（複数GPUに対応）  
✅ オープンソース完全コントロール  

### 3.2.3.3 デメリット

❌ GPU が必須（CPU版は遅い）  
❌ セットアップが少し複雑  
❌ CUDA 対応 GPU 必要  

---

## 3.2.4 前提条件

```mermaid
flowchart LR
    A[LLM推論基盤] --> B[vLLM]
    B --> C[Paged Attention]
    B --> D[OpenAI互換API]
    B --> E[高スループット配信]
```

## 3.2.5 位置づけ

```mermaid
flowchart TD
    S[開始] --> P[docker-compose pull]
    P --> U[docker-compose up -d]
    U --> H[ヘルスチェック]
    H --> T[CLIテスト]
    T --> X[終了]
```

## 3.2.6 実ソースコード（言語別に記載）

### 3.2.6.1 Setup: 00_docker-compose.yml

- 役割: vLLMサーバをGPU付きで起動
- 入力: Docker + NVIDIA Runtime
- 出力: `localhost:8000` でOpenAI互換API
- 実行: `docker-compose up -d`

```yaml
version: '3.8'

services:
  vllm:
    image: vllm/vllm-openai:latest
    container_name: vllm-server

    ports:
      - '8000:8000'

    environment:
      - CUDA_VISIBLE_DEVICES=0

    volumes:
      - model_cache:/root/.cache/huggingface

    deploy:
      resources:
        reservations:
          devices:
            - driver: nvidia
              count: 1
              capabilities: [gpu]

    command: >
      python -m vllm.entrypoints.openai.api_server
      --model meta-llama/Llama-2-7b-hf
      --host 0.0.0.0
      --port 8000
      --gpu-memory-utilization 0.9

volumes:
  model_cache:
    driver: local
```

### 3.2.6.2 Setup: 01_setup-guide.md

- 役割: セットアップ手順とトラブルシュート
- 入力: Docker/GPU環境
- 出力: 起動確認済み vLLM
- 実行: `bash 02_cli-examples.sh`

```text
# vLLM セットアップガイド

## 前提条件
- Docker インストール済み
- NVIDIA GPU（推奨）
- 20GB以上のディスク空き容量

## セットアップ手順

1. Docker Image のダウンロード
docker-compose pull

2. vLLM サーバの起動
docker-compose up -d

3. ヘルスチェック
curl http://localhost:8000/v1/models

4. テスト実行
bash 02_cli-examples.sh
```

### 3.2.6.3 Setup: 02_cli-examples.sh

- 役割: APIテスト用スクリプト
- 入力: なし
- 出力: （現状は空ファイル）

```bash

```

## 3.2.7 補足

**Q. どのモデルが推奨ですか？**  
A. Llama-2-7b / Mistral-7b が定番。7B がメモリ効率と性能のバランス最適。

**Q. GPU なしで動きますか？**  
A. 動きますが、極めて遅いです。本番用途はGPU推奨。

**Q. メモリ要件は？**  
A. 7Bモデル: 8GB GPU メモリ推奨。16GB あれば安定。

---

## 3.2.8 参考リンク

- [vLLM 公式ドキュメント](https://docs.vllm.ai/)
- [vLLM GitHub](https://github.com/vllm-project/vllm)
- [Supported Models](https://docs.vllm.ai/en/latest/models/supported_models.html)
- [Performance Guide](https://docs.vllm.ai/en/latest/performance.html)
- [Docker Hub](https://hub.docker.com/r/vllm/vllm-openai)

---

## 3.2.9 サンプル

### 3.2.9.1 実行例

```bash
docker-compose up -d
curl http://localhost:8000/v1/models
```

### 3.2.9.2 検証

- モデル一覧APIが200で返るか確認する
- 生成レスポンスのレイテンシとGPU使用率を確認する


## 3.2.10 演習課題

1. ``vLLM`` を使う想定ユースケースを1つ定義し、入力・出力の例を記録してください。
2. 最小構成で動かし、デフォルトから設定を1つ変えて挙動の差分を確認してください。
3. ``vLLM`` を使わない場合の代替手段と比較し、選ぶ基準をまとめてください。


### 3.2.10.1 解答の目安

1. まず課題の目的を一文で明確化し、入力・出力を対応づけて記述します。
   確認ポイント: 何を変えて何を確認する課題かを第三者が読んで理解できること。
2. 最小構成で一度実行し、設定や条件を1つ変更して差分を比較します。
   確認ポイント: 変更前後の挙動差を具体的に説明できること。
3. 適用条件と代替手段を整理し、選択基準を短くまとめます。
   確認ポイント: なぜその手段を選ぶかを根拠付きで示せること。

## 3.2.11 理解度チェック

1. ``vLLM`` の主な役割を1文で説明してください。
2. ``vLLM`` を導入する際の最大のメリットと注意点は何ですか？
3. ``vLLM`` が向かないユースケースとして、どのようなケースが考えられますか？


### 3.2.11.1 解説の要点

1. 主な役割は、その技術がどの工程を担い、何を改善するかで説明します。
2. メリットは再現性・拡張性・運用性の観点で整理し、注意点は導入コストや複雑性として示します。
3. 使い分けは要件、実装コスト、運用体制の3観点で判断します。
---

[← 前へ](03-inference/00-README.md) | [次へ →](03-inference/02-ollama.md)





---
level: 📖 中級（概念・実践）
prereq: Python基礎 / LLMアプリの基本概念
prev: 03-inference/01-vllm.md
next: 03-inference/03-tgi.md
---

# 3.3 Ollama 入門

> 📖 中級（概念・実践） | 前提: Python基礎 / LLMアプリの基本概念

## 3.3.1 この教材で身につくこと

- ローカルLLM実行環境の最小構成
- モデル取得から推論確認までの基本手順
- API経由での生成テスト

## 3.3.2 コンセプト
Ollama はローカルでLLMを簡単に実行するためのランタイムです。Dockerで立ち上げて、モデルを取得し、HTTP APIから推論を実行できます。

**バージョン**: 最新版 / OSS準拠（2026-05時点）  
**公式ドキュメント**: https://ollama.ai/

## 3.3.3 仕組み

1. Ollamaサーバを起動してローカルAPIエンドポイントを公開します。
2. 必要モデルを pull してローカルストレージへ配置します。
3. `/api/generate` や `/api/chat` にプロンプトを送信します。
4. 推論結果をアプリ側で受け取り、UIや業務処理へ連携します。
5. モデル差し替えやパラメータ調整で品質を最適化します。

## 3.3.4 位置づけ

```mermaid
flowchart LR
    A[ローカル推論] --> B[Ollama]
    B --> C[モデル管理]
    B --> D[HTTP API]
    B --> E[軽量検証]
```

## 3.3.5 実行フロー

```mermaid
flowchart TD
    S[開始] --> U[docker-compose up -d]
    U --> T[curl /api/tags]
    T --> P[ollama pull]
    P --> G[curl /api/generate]
    G --> X[終了]
```

## 3.3.6 最小セットアップ

### 3.3.6.1 コンテナ定義

```yaml
version: "3.8"

services:
  ollama:
    image: ollama/ollama:latest
    container_name: ollama
    ports:
      - "11434:11434"
    volumes:
      - ollama_data:/root/.ollama
    restart: unless-stopped

volumes:
  ollama_data:
    driver: local
```

### 3.3.6.2 起動

```bash
docker-compose up -d
```

### 3.3.6.3 動作確認

```bash
curl http://localhost:11434/api/tags
```

### 3.3.6.4 モデル取得

```bash
docker exec -it ollama ollama pull qwen2.5:3b
```

### 3.3.6.5 推論テスト

```bash
curl http://localhost:11434/api/generate \
  -d '{"model":"qwen2.5:3b","prompt":"生成AIを2行で説明して"}'
```

## 3.3.7 PowerShell リクエスト例

```powershell
Write-Host "=== Ollama API Examples ==="

$body1 = @{
  model = "qwen2.5:3b"
  prompt = "RAGを初心者向けに説明して"
  stream = $false
} | ConvertTo-Json -Depth 3

$request1 = @{
  Uri = "http://localhost:11434/api/generate"
  Method = "Post"
  ContentType = "application/json"
  Body = $body1
}

Invoke-RestMethod @request1

$body2 = @{
  model = "qwen2.5:3b"
  messages = @(
    @{ role = "system"; content = "あなたは日本語で簡潔に答えるAIです" },
    @{ role = "user"; content = "LangChainとLlamaIndexの違いは?" }
  )
  stream = $false
} | ConvertTo-Json -Depth 5

$request2 = @{
  Uri = "http://localhost:11434/api/chat"
  Method = "Post"
  ContentType = "application/json"
  Body = $body2
}

Invoke-RestMethod @request2
```

## 3.3.8 サンプル

### 3.3.8.1 実行例

```bash
docker-compose up -d
docker exec -it ollama ollama pull qwen2.5:3b
curl http://localhost:11434/api/generate \
  -d '{"model":"qwen2.5:3b","prompt":"生成AIを2行で説明して"}'
```

### 3.3.8.2 検証

- `/api/tags` でモデル一覧が表示されるか確認する
- 生成応答に空文字が混ざらないか確認する


## 3.3.9 実ソースコード（言語別に記載）

### 3.3.9.1 主要サンプル
- この教材の実装例は、本文中の実行手順に対応しています。
- 必要に応じて、主要コードの抜粋をこのセクションへ追記してください。

## 3.3.10 演習課題

1. ``Ollama`` を使う想定ユースケースを1つ定義し、入力・出力の例を記録してください。
2. 最小構成で動かし、デフォルトから設定を1つ変えて挙動の差分を確認してください。
3. ``Ollama`` を使わない場合の代替手段と比較し、選ぶ基準をまとめてください。


### 3.3.10.1 解答の目安

1. まず課題の目的を一文で明確化し、入力・出力を対応づけて記述します。
   確認ポイント: 何を変えて何を確認する課題かを第三者が読んで理解できること。
2. 最小構成で一度実行し、設定や条件を1つ変更して差分を比較します。
   確認ポイント: 変更前後の挙動差を具体的に説明できること。
3. 適用条件と代替手段を整理し、選択基準を短くまとめます。
   確認ポイント: なぜその手段を選ぶかを根拠付きで示せること。

## 3.3.11 理解度チェック

1. ``Ollama`` の主な役割を1文で説明してください。
2. ``Ollama`` を導入する際の最大のメリットと注意点は何ですか？
3. ``Ollama`` が向かないユースケースとして、どのようなケースが考えられますか？


### 3.3.11.1 解説の要点

1. 主な役割は、その技術がどの工程を担い、何を改善するかで説明します。
2. メリットは再現性・拡張性・運用性の観点で整理し、注意点は導入コストや複雑性として示します。
3. 使い分けは要件、実装コスト、運用体制の3観点で判断します。
---

[← 前へ](03-inference/01-vllm.md) | [次へ →](03-inference/03-tgi.md)




---
level: 📖 中級（概念・実践）
prereq: Python基礎 / LLMアプリの基本概念
prev: 03-inference/02-ollama.md
next: 03-inference/04-llama-cpp.md
---

# 3.4 TGI 入門

> 📖 中級（概念・実践） | 前提: Python基礎 / LLMアプリの基本概念

## 3.4.1 この教材で身につくこと

- OpenAI互換の推論API提供
- 高スループット推論
- 複数GPUでの配信

## 3.4.2 コンセプト
TGI（Text Generation Inference）は Hugging Face 製の推論サーバです。

**バージョン**: 最新版 / OSS準拠（2026-05時点）  
**公式ドキュメント**: https://huggingface.co/docs/text-generation-inference

大規模モデルを本番運用しやすい構成を提供します。

## 3.4.3 仕組み

1. モデルをコンテナ起動時にロードして推論APIを公開します。
2. リクエストを効率よく処理してスループットを高めます。
3. 生成APIを通じて外部アプリから推論を受け付けます。
4. ヘルスチェックで稼働状態を監視します。
5. モデルやリソース設定を更新しながら本番運用します。

## 3.4.4 位置づけ

```mermaid
flowchart LR
		A[本番向け推論配信] --> B[TGI]
		B --> C[Hugging Faceモデル配信]
		B --> D[高スループットAPI]
		B --> E[コンテナ運用]
```

## 3.4.5 実行フロー

```mermaid
flowchart TD
		S[開始] --> U[docker-compose up -d]
	U --> H[health エンドポイント確認]
	H --> R[generate リクエスト]
		R --> X[終了]
```

## 3.4.6 実ソースコード（言語別に記載）
### 3.4.6.1 Setup: 00_docker-compose.yml

- 役割: TGIコンテナ起動
- 入力: Docker実行環境
- 出力: `localhost:8080` 推論API
- 実行: `docker-compose up -d`

```yaml
version: "3.8"

services:
	tgi:
		image: ghcr.io/huggingface/text-generation-inference:latest
		container_name: tgi
		ports:
			- "8080:80"
		environment:
			- MODEL_ID=Qwen/Qwen2.5-3B-Instruct
		volumes:
			- tgi_cache:/data
		restart: unless-stopped

volumes:
	tgi_cache:
```

### 3.4.6.2 Setup: 01_setup-guide.md

- 役割: 最小起動とAPI確認
- 入力: Docker実行環境
- 出力: API応答の確認

```text
# TGI セットアップガイド

## 起動
docker-compose up -d

## 動作確認
curl http://localhost:8080/health

## 推論テスト
curl http://localhost:8080/generate \
	-X POST \
	-H "Content-Type: application/json" \
	-d '{"inputs":"RAGの基本を3行で説明して"}'
```

### 3.4.6.3 Setup: 02_request-examples.ps1

- 役割: PowerShellからの推論リクエスト例
- 入力: プロンプト文字列
- 出力: JSON応答
- 実行: `pwsh ./02_request-examples.ps1`

```powershell
$body = @{ inputs = "分散投資の基本を2行で説明して" } | ConvertTo-Json
$request = @{
	Uri = "http://localhost:8080/generate"
	Method = "Post"
	ContentType = "application/json"
	Body = $body
}

Invoke-RestMethod @request
```

## 3.4.7 サンプル

### 3.4.7.1 実行例

```bash
docker-compose up -d
curl http://localhost:8080/health
curl http://localhost:8080/generate \
	-X POST \
	-H "Content-Type: application/json" \
	-d '{"inputs":"RAGの基本を3行で説明して"}'
```

### 3.4.7.2 検証

- health が OK を返すか確認する
- generate の応答に推論テキストが含まれるか確認する

## 3.4.8 演習課題

1. ``TGI 入門`` を使う想定ユースケースを1つ定義し、入力・出力の例を記録してください。
2. 最小構成で動かし、デフォルトから設定を1つ変えて挙動の差分を確認してください。
3. ``TGI 入門`` を使わない場合の代替手段と比較し、選ぶ基準をまとめてください。


### 3.4.8.1 解答の目安

1. まず課題の目的を一文で明確化し、入力・出力を対応づけて記述します。
   確認ポイント: 何を変えて何を確認する課題かを第三者が読んで理解できること。
2. 最小構成で一度実行し、設定や条件を1つ変更して差分を比較します。
   確認ポイント: 変更前後の挙動差を具体的に説明できること。
3. 適用条件と代替手段を整理し、選択基準を短くまとめます。
   確認ポイント: なぜその手段を選ぶかを根拠付きで示せること。

## 3.4.9 理解度チェック

1. ``TGI 入門`` の主な役割を1文で説明してください。
2. ``TGI 入門`` を導入する際の最大のメリットと注意点は何ですか？
3. ``TGI 入門`` が向かないユースケースとして、どのようなケースが考えられますか？


### 3.4.9.1 解説の要点

1. 主な役割は、その技術がどの工程を担い、何を改善するかで説明します。
2. メリットは再現性・拡張性・運用性の観点で整理し、注意点は導入コストや複雑性として示します。
3. 使い分けは要件、実装コスト、運用体制の3観点で判断します。
---

[← 前へ](03-inference/02-ollama.md) | [次へ →](03-inference/04-llama-cpp.md)





---
level: 📖 中級（概念・実践）
prereq: Python基礎 / LLMアプリの基本概念
prev: 03-inference/03-tgi.md
next: 04-ui/00-README.md
---

# 3.5 llama.cpp 入門

> 📖 中級（概念・実践） | 前提: Python基礎 / LLMアプリの基本概念

## 3.5.1 この教材で身につくこと

- ローカルでのLLM推論
- GGUFモデルの利用
- 低リソース環境での実行

## 3.5.2 コンセプト
llama.cpp は軽量なローカル推論エンジンです。

**バージョン**: 最新版 / OSS準拠（2026-05時点）  
**公式ドキュメント**: https://github.com/ggerganov/llama.cpp

CPUでも動作するため、検証環境の立ち上げが容易です。

## 3.5.3 仕組み

1. GGUF形式モデルを読み込み、ローカル推論エンジンを起動します。
2. プロンプトをトークン化して逐次生成を実行します。
3. CPU/GPUオフロード設定で速度とメモリを調整します。
4. 標準出力へ生成結果を返し、アプリへ連携します。
5. 小型モデルから順に検証し、要件に合わせて拡張します。

## 3.5.4 位置づけ

```mermaid
flowchart LR
	A[ローカル推論] --> B[llama.cpp]
	B --> C[GGUFモデル]
	B --> D[CPU実行]
	B --> E[軽量検証環境]
```

## 3.5.5 実行フロー

```mermaid
flowchart TD
	S[開始] --> M[モデル準備]
	M --> R[main.exe 実行]
	R --> O[生成結果確認]
	O --> X[終了]
```

## 3.5.6 実ソースコード（言語別に記載）
### 3.5.6.1 Setup: 00_setup-guide.md

- 役割: Windowsでの最小実行手順
- 入力: GGUFモデルパスとプロンプト
- 出力: 標準出力への生成結果
- 実行: `./main.exe -m <model> -p <prompt>`

```text
# llama.cpp セットアップガイド

## 前提条件
- C++ ビルド環境
- もしくは配布バイナリ

## 実行例（Windows）
./main.exe -m ./models/qwen2.5-3b-instruct.gguf -p "RAGとは?"

## 補足
- まずは 3B〜7B の小型モデルで検証
- 推論速度はCPU/GPU構成で大きく変わります
```

## 3.5.7 サンプル

### 3.5.7.1 実行例

```bash
./main.exe -m ./models/qwen2.5-3b-instruct.gguf -p "RAGとは?"
```

### 3.5.7.2 検証

- モデル読み込みエラーが出ないか確認する
- 同じプロンプトで再実行し、応答の一貫性を確認する

## 3.5.8 演習課題

1. ``llama.cpp 入門`` を使う想定ユースケースを1つ定義し、入力・出力の例を記録してください。
2. 最小構成で動かし、デフォルトから設定を1つ変えて挙動の差分を確認してください。
3. ``llama.cpp 入門`` を使わない場合の代替手段と比較し、選ぶ基準をまとめてください。


### 3.5.8.1 解答の目安

1. まず課題の目的を一文で明確化し、入力・出力を対応づけて記述します。
   確認ポイント: 何を変えて何を確認する課題かを第三者が読んで理解できること。
2. 最小構成で一度実行し、設定や条件を1つ変更して差分を比較します。
   確認ポイント: 変更前後の挙動差を具体的に説明できること。
3. 適用条件と代替手段を整理し、選択基準を短くまとめます。
   確認ポイント: なぜその手段を選ぶかを根拠付きで示せること。

## 3.5.9 理解度チェック

1. ``llama.cpp 入門`` の主な役割を1文で説明してください。
2. ``llama.cpp 入門`` を導入する際の最大のメリットと注意点は何ですか？
3. ``llama.cpp 入門`` が向かないユースケースとして、どのようなケースが考えられますか？


### 3.5.9.1 解説の要点

1. 主な役割は、その技術がどの工程を担い、何を改善するかで説明します。
2. メリットは再現性・拡張性・運用性の観点で整理し、注意点は導入コストや複雑性として示します。
3. 使い分けは要件、実装コスト、運用体制の3観点で判断します。
---

[← 前へ](03-inference/03-tgi.md) | [次へ →](04-ui/00-README.md)





---
level: 中級（実装）
prereq: 01-vllm.md
prev: 01-vllm.md
next: 02-ollama.md
---

# 3.6 ストリーミング推論（SSE / chunked / フレーミング）

---
このドキュメントは、対話型アプリケーションでトークンを逐次返却する「ストリーミング推論」について、設計上の判断や実装上の注意点、サンプル実装（NGINX + FastAPI）をまとめたものです。
---

## 3.6.1 目次

- [概要](#概要)
- [設計の決定フロー](#設計の決定フロー)
- [プロトコル比較](#プロトコル比較)
- [vLLM の挙動とAPI設計パターン](#vllm-の挙動とapi設計パターン)
- [アーキテクチャ図（概観）](#アーキテクチャ図概観)
- [実装上の注意点](#実装上の注意点)
- [サンプル実装と実行手順](#サンプル実装と実行手順)
- [導入チェックリスト](#導入チェックリスト)


## 3.6.2 概要

- 目的: 対話型アプリでトークンを逐次返却し、応答を低遅延でユーザに見せることでUXを向上させる。vLLMなどの生成バックエンドのストリーミング出力を、API層で透過的に扱うための設計指針とサンプルを示します。


## 3.6.3 設計の決定フロー

- 低遅延での逐次返却が主目的 → SSE / chunked（HTTP/1.1）を優先
- 双方向の制御やクライアントからのリアルタイム入力が必要 → WebSocket
- 高スループットかつ多重化が必要 → HTTP/2 / gRPC（ただしプロキシ経由で逐次到着が阻害される可能性あり）


## 3.6.4 プロトコル比較

| プロトコル | 長所 | 短所 | 備考 |
|---|---:|---|---|
| SSE (EventSource) | ブラウザ互換性良、再接続機能あり | 単方向（サーバ→クライアント） | HTTP/1.1 環境で簡単に実装可能 |
| chunked (Transfer-Encoding: chunked) | 任意バイト列を分割送信可能、ndjson と相性良し | 明示的な再接続/再開ロジックが必要 | プロキシのバッファ設定に敏感 |
| HTTP/2 フレーミング | 多重化・流量制御に優れる | プロキシ/ロードバランサによっては逐次伝達が阻害される | gRPC ストリーミング用途に適する |
| WebSocket | 低レイテンシ・双方向 | 導入・負荷管理がやや複雑 | 双方向制御が必要な場合に選択 |


## 3.6.5 vLLM の挙動と API 設計パターン

- vLLM は生成トークンを逐次出力するため、SSE もしくは ndjson/chunked 形式で受け取るのが実務的。
- 各チャンクに `delta`（生成トークン）や `finish_reason` 等のメタを付与するとクライアント実装が容易になります。

主な API 層設計パターン:

- パススルー（透過プロキシ）: バックエンドのストリームを解釈せずクライアントへそのまま流す。中間バッファは原則禁止。
- TGI フロント + vLLM ワーカー: クライアントは一貫した API を使い、内部で vLLM や他のモデルに委譲する構成。
- スマートルータ / サービスメッシュ: K8s + Ingress / Service Mesh で GPU 負荷やレイテンシに基づくルーティングを行う。


## 3.6.6 アーキテクチャ図（概観）

```mermaid
flowchart LR
	A[Client]
	B[NGINX / Proxy]
	C[Router / FastAPI]
	D{Backend Router}
	E[vLLM]
	F[TGI]
	G[Redis]
	H[Metrics]

	A -->|HTTP/SSE or chunked| B
	B --> C
	C -->|stream req| D
	D --> E
	D --> F
	E -->|stream chunks| C
	F -->|response batch| C
	C -->|stream chunks| B
	B --> A
	C --> G
	C --> H
```

上図は基本フローの概観です。エラー処理、再接続、HTTP/2 フレーミングに関する詳細は別図で補足してください。


## 3.6.7 図中ノードとリポジトリ内サンプルの対応

- `NGINX / Proxy`: サンプル NGINX 設定は sandbox/streaming-examples/nginx/nginx_streaming.conf。`proxy_buffering off` 等の設定で透過ストリーミングを実現します。
- `Router / FastAPI`: 透過プロキシのサンプルは sandbox/streaming-examples/fastapi_proxy/proxy.py。バックエンドへのストリーム転送とクライアント切断検知を行います。
- `vLLM`: ストリーミングバックエンド。サンプルでは `BACKEND_URL = http://vllm-host:8000/generate` を想定しています。
- `TGI`: バッチや複数モデル配信向けのバックエンド（オプション）。
- `Redis`: セッション/会話履歴の永続化に利用可能。再接続時に履歴を返す用途で使います。
- `Metrics`: Prometheus / Grafana 等でトークン/秒や切断率を計測してください。


## 3.6.8 実装上の注意点

- プロキシ側のバッファリングを無効化する（NGINX 例）:

```nginx
proxy_buffering off;
proxy_request_buffering off;
proxy_http_version 1.1;
proxy_set_header Connection "";
```

- ヘッダの転送: `Content-Type`、`Transfer-Encoding`、`Cache-Control: no-cache` 等を適切に伝搬する。
- クライアント切断検出時はバックエンド接続を速やかにキャンセルする（リソース保護）。
- セッション管理は Redis 等で一元化し、再接続時に会話履歴を復元できる設計を検討する。
- 監視対象: トークン/秒、チャンクレイテンシ、切断率、バックエンドエラー率。


## 3.6.9 サンプル実装と実行手順

ローカル検証の最小構成として、NGINX（リバースプロキシ）＋FastAPI（透過プロキシ）＋モック vLLM を用意すると分かりやすいです。以下は教材に含めた最小サンプルと手順です。

### 3.6.9.1 1) FastAPI 透過プロキシ サンプル (sandbox/streaming-examples/fastapi_proxy/proxy.py)

```python
from fastapi import FastAPI, Request, Response
from fastapi.responses import StreamingResponse
import httpx
import asyncio

app = FastAPI()

# BACKEND_URL can be set via environment variable (used by Docker compose)
import os
BACKEND_URL = os.getenv("BACKEND_URL", "http://mock-vllm:8001/generate")


@app.post("/proxy")
async def proxy(request: Request):
    headers = {k: v for k, v in request.headers.items() if k.lower() != "host"}

    async def request_body_iterator():
        async for chunk in request.stream():
            yield chunk

    client = httpx.AsyncClient(timeout=None)
    # Stream request to backend and stream response back
    backend_cm = client.stream(
        "POST",
        BACKEND_URL,
        headers=headers,
        content=request_body_iterator(),
    )

    # Manually enter the async context so it stays open while we stream to the client
    backend_resp = await backend_cm.__aenter__()

    async def streamer():
        try:
            async for chunk in backend_resp.aiter_bytes():
                if not chunk:
                    continue
                # If client disconnected, stop and close backend
                if await request.is_disconnected():
                    break
                yield chunk
                await asyncio.sleep(0)
        finally:
            try:
                await backend_resp.aclose()
            except Exception:
                pass
            try:
                await backend_cm.__aexit__(None, None, None)
            except Exception:
                pass
            try:
                await client.aclose()
            except Exception:
                pass

    media_type = backend_resp.headers.get("content-type", "text/event-stream")
    return StreamingResponse(streamer(), media_type=media_type)
```

依存関係 (sandbox/streaming-examples/fastapi_proxy/requirements.txt):

```
fastapi>=0.95
uvicorn[standard]
httpx
anyio
```

ローカルでの実行例（Windows）:

```powershell
python -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -r sandbox/streaming-examples/fastapi_proxy/requirements.txt
uvicorn sandbox.streaming-examples.fastapi_proxy.proxy:app --host 0.0.0.0 --port 8080
```

### 3.6.9.2 2) NGINX 設定スニペット (sandbox/streaming-examples/nginx/nginx_streaming.conf)

```nginx
worker_processes auto;
events { worker_connections 1024; }

http {
	server {
		listen 80;
		location /proxy/ {
			proxy_pass http://127.0.0.1:8080/; # FastAPI proxy
			proxy_buffering off;
			proxy_request_buffering off;
			proxy_http_version 1.1;
			proxy_set_header Connection "";
			proxy_set_header Host $host;
			proxy_read_timeout 3600s;
			send_timeout 3600s;
		}
	}
}
```

Docker によるローカル検証（推奨）:

```bash
cd sandbox/streaming-examples
docker compose build
docker compose up
```

簡易確認 (ndjson を逐次受け取る確認):

```bash
curl -N -X POST "http://localhost:8080/proxy" -H "Content-Type: application/json" -d '{"prompt":"hello world from test"}'
```

期待される挙動: ndjson や SSE によるチャンクが逐次出力されること。


## 3.6.10 導入チェックリスト

- プロキシのバッファ無効化確認
- バックエンドの `Content-Type` (e.g. `text/event-stream`, `application/x-ndjson`) を確認
- タイムアウトと keep-alive の設定を適切に行う
- クライアントの再接続戦略とサーバ側のオフセット/履歴管理を設計


---

## 3.6.11 参考

- サンプル: sandbox/streaming-examples/fastapi_proxy/proxy.py
- NGINX スニペット: sandbox/streaming-examples/nginx/nginx_streaming.conf

（必要なら、HTTP/2 フレーミングや再接続の詳細図を追加します。要望があれば追記してください。）

---
level: 🔰 初級（カテゴリ導入）
prereq: "-"
prev: 03-inference/04-llama-cpp.md
next: 04-ui/01-open-webui.md
---

# 4.1 UI・チャットアプリ基盤

> 🔰 初級（カテゴリ導入） | 前提: -

ユーザー向けのLLMチャットUIやノーコード/ローコード開発プラットフォーム。

## 4.1.1 位置づけ

```mermaid
flowchart LR
  A[ユーザー接点] --> B[UI基盤]
  B --> C[チャットUI]
  B --> D[ノーコード構築]
  B --> E[RAG統合]
```

## 4.1.2 学習フロー

```mermaid
flowchart TD
  S[開始] --> W[Open WebUI]
  W --> D[Dify/Flowise]
  D --> L[LibreChat/Chatbot UI]
  L --> O[LobeChat/AnythingLLM]
  O --> X[運用比較メモ]
```

## 4.1.3 含まれるOSS

- **Open WebUI**: ローカル/セルフホストのLLM Web UI
- **Dify**: ワークフロー・アプリ公開機能を持つプラットフォーム
- **Flowise**: ノードベースのLLMフロー構築ツール
- **LibreChat**: 複数LLMプロバイダ対応チャットUI
- **Chatbot UI**: シンプルなChatGPT風UI
- **LobeChat**: モダンなチャットクライアント
- **AnythingLLM**: 文書QA統合のオールインワンUI

## 4.1.4 まず何で選ぶか

このカテゴリは、見た目が似ていても役割が異なる OSS をまとめています。最初に確認したいのは、次の 4 点です。

1. **主用途**: 日常チャット UI が欲しいのか、AI アプリやワークフローを作りたいのか
2. **外部連携**: Tool Call / MCP / API / RAG まで必要か、それとも単純な会話で十分か
3. **運用の重さ**: 単体起動で済むか、DB や認証、複数サービス構成まで許容できるか
4. **利用形態**: 個人検証なのか、チーム運用や複数ユーザー利用まで見据えるか

## 4.1.5 選定の目安

| OSS | 公式ポジショニング | 主用途 | 外部連携の重心 | 向いているケース |
| --- | --- | --- | --- | --- |
| Open WebUI | self-hosted AI interface | ローカル/セルフホストの統合チャット UI | モデル接続、ツール、RAG | まず自前環境で AI UI を持ちたい |
| Dify | agentic workflow platform | AI アプリ構築と公開 | Workflow、データソース、API | 業務向け AI アプリを組みたい |
| Flowise | AI agent / LLM workflow platform | ノードベースの設計と試行錯誤 | Assistant、Chatflow、Agentflow | フロー設計を可視化して検証したい |
| LibreChat | open-source AI platform | 複数 Provider と外部連携を持つ統合会話基盤 | Agents、Tools、MCP、Artifacts | Tool Call や外部環境連携を重視したい |
| Chatbot UI | open-source AI chat app | ChatGPT 風 UI の構築 | モデル接続中心 | シンプルな会話 UI を自分で育てたい |
| LobeChat | agent operator / collaborative agent platform | Agent 利用とモダンな操作体験 | Skills、MCP、Memory | Agent 活用を前面に使いたい |
| AnythingLLM | all-in-one private AI app | 文書中心の AI 利用基盤 | 文書取り込み、Agent、API | private-first で文書活用したい |

## 4.1.6 選び方のショートガイド

- **まずチャット UI を持ちたい**: Open WebUI
- **業務ワークフローやアプリ公開が主目的**: Dify
- **ノードで構成を試しながら設計したい**: Flowise
- **複数 Provider と Tool Call / MCP を同じ UI で扱いたい**: LibreChat
- **シンプルな ChatGPT 風 UI を自分で調整したい**: Chatbot UI
- **Agent 中心の体験や Skills/MCP を重視したい**: LobeChat
- **文書 QA や private-first の運用を重視したい**: AnythingLLM

## 4.1.7 学習順序

1. Open WebUI (チャットUI・セットアップ簡単)
2. Dify (ノーコードでAIアプリ構築・公開)
3. Flowise (ビジュアルフロー構築)
4. LibreChat (複数モデル運用)
5. Chatbot UI (軽量フロント)
6. LobeChat (モダンUX)
7. AnythingLLM (RAG統合)

実行前提: Windows + PowerShell

ハードコピー保管先ルール: `docs/04-ui/examples/{tool}/`

サンプル粒度ルール（02-dify.md 準拠）:

- 手順番号は `0-7` を基本形にする（準備→設定→起動確認→初期アクセス→機能設定→実行確認→完了判定→停止/再開）
- Docker のコマンド表記は `docker compose` を標準とし、`docker-compose` は使わない
- 各手順に「操作」「期待状態」「実行イメージ」を対応づける
- 各教材で `5.1` を設け、製品固有価値を示す追加確認を入れる
- `7. 停止・再開` では `stop/start/down` の使い分けを明示する

## 4.1.8 教材リンク

- [01-open-webui.md](./01-open-webui.md)
- [02-dify.md](./02-dify.md)
- [03-flowise.md](./03-flowise.md)
- [04-librechat.md](./04-librechat.md)
- [05-chatbot-ui.md](./05-chatbot-ui.md)
- [06-lobechat.md](./06-lobechat.md)
- [07-anythingllm.md](./07-anythingllm.md)

## 4.1.9 実行証跡サンプル

- [Open WebUI スクリーンショット一式](./examples/open-webui/)
- [Open WebUI 実行ログ](./examples/open-webui/run-log.txt)
- [Dify スクリーンショット一式](./examples/dify/)
- [Dify 実行ログ](./examples/dify/run-log.txt)
- [Flowise スクリーンショット一式](./examples/flowise/)
- [Flowise 実行ログ](./examples/flowise/run-log.txt)
- [LibreChat スクリーンショット一式](./examples/librechat/)
- [LibreChat 実行ログ](./examples/librechat/run-log.txt)
- [Chatbot UI スクリーンショット一式](./examples/chatbot-ui/)
- [Chatbot UI 実行ログ](./examples/chatbot-ui/run-log.txt)
- [LobeChat スクリーンショット一式](./examples/lobechat/)
- [LobeChat 実行ログ](./examples/lobechat/run-log.txt)
- [AnythingLLM スクリーンショット一式](./examples/anythingllm/)
- [AnythingLLM 実行ログ](./examples/anythingllm/run-log.txt)

## 4.1.10 完了条件

- カテゴリ内の主要OSSを3つ以上説明できる
- 最小サンプルを1件以上動作確認できる
- 1教材あたり最低6枚のハードコピーを取得・整理できる
- 選定観点（主用途/外部連携/運用の重さ/チーム利用）で比較メモを作成できる

---

[← 前へ](03-inference/04-llama-cpp.md) | [次へ →](04-ui/01-open-webui.md)





---
level: 📖 中級（概念・実践）
prereq: Python基礎 / LLMアプリの基本概念
prev: 04-ui/00-README.md
next: 04-ui/02-dify.md
---

# 4.2 Open WebUI - ローカル/セルフホスト型チャットUI

> 📖 中級（概念・実践） | 前提: Python基礎 / LLMアプリの基本概念

## 4.2.1 この教材で身につくこと

- ChatGPT風の使いやすいインターフェース
- Ollama、vLLM 等と連携
- Docker 一つで起動可能
- インターネット接続不要でも動作
- プラグイン、RAG機能も搭載

**バージョン**: 0.3.0+ / OSS準拠（2026-05時点）  
**公式ドキュメント**: https://openwebui.com/
**公式リポジトリ**: https://github.com/open-webui/open-webui

## 4.2.2 公式ポジショニング
**Open WebUI** は、任意モデルを自前で接続し、ツール、RAG、ローカル/クラウド併用まで扱える self-hosted AI interface です。

## 4.2.3 この OSS を選ぶべきケース

- まずセルフホスト前提の AI UI を自前環境に持ちたい
- Ollama などのローカルモデルと、OpenAI などのクラウドモデルを同じ UI で扱いたい
- チャット UI から始めつつ、RAG やツール連携まで段階的に広げたい
- 個人利用だけでなく、将来的に組織利用や運用ポリシーも見据えたい

## 4.2.4 この OSS を選ばない方がよいケース

- 業務ワークフローや AI アプリ公開を主目的とする
- Tool Call / MCP を主価値として最初から強く検証したい
- 文書中心の private-first 利用を最優先にしたい

### 4.2.4.1 主な特徴

- **UI が美しい**: ChatGPT風の使いやすいインターフェース
- **複数LLMサポート**: Ollama、vLLM 等と連携
- **セットアップが簡単**: Docker 一つで起動可能
- **オフライン対応**: インターネット接続不要でも動作
- **拡張機能**: プラグイン、RAG機能も搭載

## 4.2.5 外部接続と拡張の考え方

- Open WebUI は単なるローカル UI ではなく、任意モデル接続を起点にツールや RAG まで広げられる構成です
- ローカル完結しやすい一方で、必要に応じてクラウド Provider も取り込めます
- 最小確認はチャット応答ですが、選定判断では「モデル接続の自由度」と「拡張余地」が重要です

---

## 4.2.6 仕組み

1. 目的と入力を定義し、対象データや利用モデルを準備します。
2. コア処理（検索・推論・生成・検証のいずれか）を実行します。
3. 実行結果を保存または表示し、次工程に渡せる形式へ整えます。
4. パラメータを調整して挙動差分を比較し、品質を確認します。
5. 運用を想定して再実行手順と確認ポイントを定着させます。
## 4.2.7 前提条件

### 4.2.7.1 前提条件

- Docker インストール済み
- CPU 2コア以上
- メモリ 4GB 以上

### 4.2.7.2 クイックスタート

```bash
docker compose up -d
```
ブラウザで http://localhost:8080 にアクセス。

## 4.2.8 位置づけ

```mermaid
flowchart LR
	A[セルフホストLLM UI] --> B[Open WebUI]
	B --> C[Ollama連携]
	B --> D[vLLM連携]
	B --> E[チャット運用]
```

## 4.2.9 実行フロー

```mermaid
flowchart TD
	S[開始] --> U[docker compose up -d]
	U --> A[http://localhost:8080 アクセス]
	A --> R[管理者登録]
	R --> M[モデル接続設定]
	M --> X[チャット開始]
```

## 4.2.10 サンプル

### 4.2.10.1 実行例

このセクションでは、Windows PowerShell 前提で Open WebUI と Ollama の最小構成を順に起動します。

#### 4.2.10.1.1 0. 作業ディレクトリ準備（PowerShell）

```powershell
New-Item -ItemType Directory -Path .\sandbox\open-webui -Force | Out-Null
Set-Location .\sandbox\open-webui
```

#### 4.2.10.1.2 1. docker-compose.yml を作成

```yaml
services:
	ollama:
		image: ollama/ollama:latest
		container_name: ollama
		ports:
			- "11434:11434"
		volumes:
			- ollama_data:/root/.ollama
		restart: unless-stopped

	open-webui:
		image: ghcr.io/open-webui/open-webui:main
		container_name: open-webui
		ports:
			- "8080:8080"
		environment:
			- OLLAMA_BASE_URL=http://ollama:11434
		volumes:
			- open_webui_data:/app/backend/data
		depends_on:
			- ollama
		restart: unless-stopped

volumes:
	ollama_data:
	open_webui_data:
```

#### 4.2.10.1.3 2. コンテナ起動と状態確認

```powershell
docker compose up -d
docker compose ps
docker compose logs open-webui --tail 50
```

期待状態:

- `open-webui` と `ollama` が `Up` になっている
- `open-webui` のログに致命的エラーが出ていない

実行イメージ:

![docker compose ps](examples/open-webui/01-docker-compose-ps.png)

#### 4.2.10.1.4 3. 使うモデルを Ollama に取得

```powershell
docker exec ollama ollama pull llama3.2:3b
docker exec ollama ollama list
```

期待状態:

- `ollama list` に `llama3.2:3b` が表示される

#### 4.2.10.1.5 4. Open WebUI 初期アクセス

```powershell
Start-Process "http://localhost:8080"
```

ブラウザ操作:

1. 初回アクセスで管理者アカウントを作成
2. モデル選択で `llama3.2:3b` を選ぶ
3. サイドバーと入力欄が表示され、チャット可能な状態になっていることを確認

実行イメージ（サインアップ）:

![signup](examples/open-webui/02-open-webui-signup.png)

実行イメージ（モデル選択完了）:

![model selected](examples/open-webui/03-model-selected.png)

#### 4.2.10.1.6 5. チャット確認

ブラウザ操作:

1. `こんにちは。3行で自己紹介して。` を送信
2. 入力状態を `04-first-chat-input.png`、応答状態を `05-first-chat-output.png` として撮影

実行イメージ（初回入力）:

![first chat input](examples/open-webui/04-first-chat-input.png)

実行イメージ（初回回答）:

![first chat output](examples/open-webui/05-first-chat-output.png)

#### 4.2.10.1.7 5.1 会話履歴と拡張余地の確認

ブラウザ操作:

1. サイドバーに会話履歴が保存されることを確認
2. 必要に応じて Settings でツール/RAG 関連メニューが参照可能であることを確認

実行イメージ（履歴サイドバー）:

![history sidebar](examples/open-webui/06-history-sidebar.png)

#### 4.2.10.1.8 6. 基本機能の完了判定（最低ライン）

- UI からチャット送信できる
- ローカルモデルから応答が返る
- 会話履歴がサイドバーに保存される

#### 4.2.10.1.9 7. 停止・再開（検証用）

```powershell
docker compose stop
docker compose start
docker compose down
```

使い分け:

- `docker compose stop`: コンテナだけ停止します。次回は `docker compose start` で高速に再開できます。
- `docker compose down`: コンテナ停止に加えて、Compose 管理のネットワークも削除します。次回は `docker compose up -d` で再作成して起動します。
- データも初期化したい場合: `docker compose down -v`（ボリューム削除）

### 4.2.10.2 検証

- コマンドがエラーなく完了する
- 想定した出力（画面表示・ファイル生成・回答）を確認できる
- 変更した設定に応じて結果差分を説明できる








---
level: 📖 中級（概念・実践）
prereq: Python基礎 / LLMアプリの基本概念
prev: 04-ui/01-open-webui.md
next: 04-ui/03-flowise.md
---

# 4.3 Dify - ノーコード LLM アプリ開発プラットフォーム

> 📖 中級（概念・実践） | 前提: Python基礎 / LLMアプリの基本概念

## 4.3.1 この教材で身につくこと

- ドラッグ&ドロップでワークフロー作成
- OpenAI、Anthropic、Ollama 等
- ドキュメントアップロードで即QA構築
- 作成したアプリを REST API として公開
- バージョン管理と A/B テスト

**バージョン**: 0.7.0+ / OSS準拠（2026-05時点）  
**公式ドキュメント**: https://docs.dify.ai/
**公式サイト**: https://dify.ai/

## 4.3.2 公式ポジショニング
**Dify** は、agentic workflow を視覚的に構築し、既存ツールやデータソースをつなぎ、AI アプリとして配備するためのプラットフォームです。

## 4.3.3 この OSS を選ぶべきケース

- ノーコード/ローコードで AI アプリを素早く形にしたい
- Workflow、RAG、プロンプト管理、公開 API を一体で扱いたい
- 個人検証よりも、業務向けのアプリ化や運用移行を見据えている
- UI 表示だけでなく、アプリとしての公開や管理を重視する

## 4.3.4 この OSS を選ばない方がよいケース

- 単純なチャット UI をまず 1 つ立てたい
- ノード単位の自由な試行錯誤や細かい接続確認を優先したい
- Tool Call / MCP を主軸に、会話 UI の延長で検証したい

### 4.3.4.1 主な特徴

- **ビジュアルフロー構築**: ドラッグ&ドロップでワークフロー作成
- **複数LLM対応**: OpenAI、Anthropic、Ollama 等
- **RAG統合**: ドキュメントアップロードで即QA構築
- **API公開**: 作成したアプリを REST API として公開
- **プロンプト管理**: バージョン管理と A/B テスト

## 4.3.5 Flowise との見分け方

- Dify は「フローを作る」だけでなく、「アプリとして公開して運用する」ところまでが主眼です
- Flowise がノード設計の試行錯誤に強いのに対し、Dify はアプリ化、管理、配備の導線が強みです
- 選定時は、PoC の自由度よりも、業務利用へ持っていく一貫性を重視するかで判断します

---

## 4.3.6 仕組み

1. 目的と入力を定義し、対象データや利用モデルを準備します。
2. コア処理（検索・推論・生成・検証のいずれか）を実行します。
3. 実行結果を保存または表示し、次工程に渡せる形式へ整えます。
4. パラメータを調整して挙動差分を比較し、品質を確認します。
5. 運用を想定して再実行手順と確認ポイントを定着させます。

## 4.3.7 前提条件

### 4.3.7.1 前提条件

- Docker インストール済み
- PostgreSQL（Docker Compose に含む）
- メモリ 8GB 以上推奨

### 4.3.7.2 クイックスタート

```bash
docker compose up -d
```
初期セットアップが自動実行されます。

## 4.3.8 位置づけ

```mermaid
flowchart LR
		A[ノーコードAI開発] --> B[Dify]
		B --> C[Workflow Builder]
		B --> D[RAG App]
		B --> E[API公開]
```

## 4.3.9 実行フロー

```mermaid
flowchart TD
    S[開始] --> U[docker compose up -d]
		U --> W[Web Console確認]
		W --> P[LLM Provider設定]
		P --> A[App作成]
		A --> X[API/UIで公開]
```

## 4.3.10 サンプル

### 4.3.10.1 実行例

このセクションでは、Windows PowerShell 前提で Dify の最小構成を順に起動します。

#### 4.3.10.1.1 0. 作業ディレクトリ準備（PowerShell）

```powershell
New-Item -ItemType Directory -Path .\sandbox\dify -Force | Out-Null
Set-Location .\sandbox\dify
```

#### 4.3.10.1.2 1. docker-compose.yml を作成

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

#### 4.3.10.1.3 2. コンテナ起動と状態確認

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

#### 4.3.10.1.4 3. 管理者アカウント作成

```powershell
Start-Process "http://localhost:3000"
```

ブラウザ操作:

1. 初回アクセスで管理者アカウントを作成
2. メールアドレスとパスワードを設定して登録

実行イメージ（セットアップ画面）:

![dify setup](examples/dify/02-dify-setup.png)

#### 4.3.10.1.5 4. LLM Provider 設定

ブラウザ操作:

1. 右上のアカウントメニュー → **Settings** → **Model Provider** を開く
2. OpenAI または Ollama の API エンドポイントを設定
   - OpenAI: API キーを入力
   - Ollama: `http://host.docker.internal:11434` を URL に設定

実行イメージ（LLM Provider 設定）:

![llm provider](examples/dify/03-llm-provider.png)

#### 4.3.10.1.6 5. アプリ作成・チャット確認

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

#### 4.3.10.1.7 5.1 Workflow Builder（ドラッグ&ドロップ）

ブラウザ操作:

1. **Studio** → **Create from Blank** → **Workflow** を選択
2. ノードパネルから **LLM** と **End** を追加し、`Start -> LLM -> End` を構成
3. キャンバス上でノードをドラッグ&ドロップして配置を調整

実行イメージ（Workflow 作成）:

![workflow builder](examples/dify/07-workflow-builder.png)

#### 4.3.10.1.8 6. 基本機能の完了判定（最低ライン）

- 管理画面 (http://localhost:3000) にログインできる
- LLM Provider が正常に登録されている
- チャットボットアプリから応答が返る

#### 4.3.10.1.9 7. 停止・再開（検証用）

```powershell
docker compose stop
docker compose start
docker compose down
```

使い分け:

- `docker compose stop`: コンテナだけ停止します。次回は `docker compose start` で高速に再開できます。
- `docker compose down`: コンテナ停止に加えて、Compose 管理のネットワークも削除します。次回は `docker compose up -d` で再作成して起動します。
- データも初期化したい場合: `docker compose down -v`（ボリューム削除）

### 4.3.10.2 検証

- コマンドがエラーなく完了する
- 想定した出力（画面表示・ファイル生成・回答）を確認できる
- 変更した設定に応じて結果差分を説明できる









---
level: 📖 中級（概念・実践）
prereq: Python基礎 / LLMアプリの基本概念
prev: 04-ui/02-dify.md
next: 04-ui/04-librechat.md
---

# 4.4 Flowise 入門

> 📖 中級（概念・実践） | 前提: Python基礎 / LLMアプリの基本概念

## 4.4.1 この教材で身につくこと

- ノード接続でのワークフロー設計
- Chatflow の公開とテスト
- OpenAI/Ollama 等との接続
- Windows + PowerShell での再現手順
- 実行証跡（ハードコピー）運用

## 4.4.2 公式ポジショニング
Flowise は、AI Agents と LLM workflows を構築するためのオープンソース開発基盤です。Assistant、Chatflow、Agentflow という複数の作り方を持ち、ノードベースで構成を試しながら設計できます。

**バージョン**: 1.5.0+ / OSS準拠（2026-05時点）  
**公式ドキュメント**: https://docs.flowiseai.com/

## 4.4.3 この OSS を選ぶべきケース

- ノード単位で接続関係を見ながら、構成を試行錯誤したい
- Chatflow や Agentflow を使い分けて、段階的に複雑な構成へ広げたい
- PoC や検証段階で、入力・接続・出力の関係を画面で確認したい
- Dify よりも、まずフロー設計と実行の感触を重視したい

## 4.4.4 この OSS を選ばない方がよいケース

- AI アプリの公開や管理運用までを一体で進めたい
- 単純なチャット UI だけを素早く立ち上げたい
- 文書中心の private-first UI を主目的とする

## 4.4.5 Dify との見分け方

- Flowise は構成の理解と試行錯誤に強く、どのノードをどうつなぐかを可視化しやすいのが利点です
- Dify はアプリ公開や運用導線まで含めて整理されている一方、Flowise は設計と検証の自由度が高いです
- 選定時は、まず作って試すことを優先するか、公開して運用することを優先するかで判断します

## 4.4.6 仕組み

1. 目的と入力を定義し、対象データや利用モデルを準備します。
2. コア処理（検索・推論・生成・検証のいずれか）を実行します。
3. 実行結果を保存または表示し、次工程に渡せる形式へ整えます。
4. パラメータを調整して挙動差分を比較し、品質を確認します。
5. 運用を想定して再実行手順と確認ポイントを定着させます。

## 4.4.7 前提条件

### 4.4.7.1 前提条件

- Windows 11 + PowerShell 7 推奨
- Docker Desktop（Compose v2 有効）
- CPU 2コア以上
- メモリ 4GB 以上

### 4.4.7.2 事前チェック（PowerShell）

```powershell
docker --version
docker compose version
```

### 4.4.7.3 クイックスタート

```powershell
docker compose up -d
```

ブラウザで http://localhost:3001 にアクセス。

## 4.4.8 位置づけ

```mermaid
flowchart LR
		A[ノード型LLM開発] --> B[Flowise]
		B --> C[Chatflow設計]
		B --> D[Ollama/OpenAI接続]
		B --> E[UIテスト]
```

## 4.4.9 実行フロー

```mermaid
flowchart TD
		S[開始] --> U[docker compose up -d]
		U --> A[http://localhost:3001 アクセス]
		A --> N[Chatflow作成]
		N --> T[Executeでテスト]
		T --> X[終了]
```

## 4.4.10 サンプル

### 4.4.10.1 実行例

このセクションでは、Windows PowerShell 前提で Flowise の最小構成を順に起動します。

#### 4.4.10.1.1 0. 作業ディレクトリ準備（PowerShell）

```powershell
New-Item -ItemType Directory -Path .\sandbox\flowise -Force | Out-Null
Set-Location .\sandbox\flowise
```

#### 4.4.10.1.2 1. docker-compose.yml を作成

```yaml
services:
	flowise:
		image: flowiseai/flowise:latest
		container_name: flowise
		ports:
			- "3001:3000"
		environment:
			- PORT=3000
			- FLOWISE_USERNAME=admin
			- FLOWISE_PASSWORD=admin123
		volumes:
			- flowise_data:/root/.flowise
		restart: unless-stopped

volumes:
	flowise_data:
```

#### 4.4.10.1.3 2. コンテナ起動と状態確認

```powershell
docker compose up -d
docker compose ps
docker compose logs flowise --tail 50
```

期待状態:

- `flowise` が `Up` になっている
- `flowise` のログに致命的エラーが出ていない

実行イメージ:

![docker compose ps](examples/flowise/01-docker-compose-ps.png)

#### 4.4.10.1.4 3. 初期アクセス

```powershell
Start-Process "http://localhost:3001"
```

ブラウザ操作:

1. ログイン画面で `admin / admin123` を入力
2. ダッシュボード表示を確認

実行イメージ（ログイン画面）:

![flowise login](examples/flowise/02-flowise-login.png)

#### 4.4.10.1.5 4. Chatflow 作成

ブラウザ操作:

1. **New Chatflow** をクリック
2. **Prompt Template**、**OpenAI (Chat Model)**、**LLM Chain** の3ノードを追加
3. `Prompt Template -> LLM Chain (Prompt)`、`OpenAI -> LLM Chain (Language Model)` を接続
4. 3ノードが同時に見える位置へ配置して保存

実行イメージ（Chatflow 作成）:

![chatflow created](examples/flowise/03-chatflow-created.png)

#### 4.4.10.1.6 5. Provider 設定とテスト実行

ブラウザ操作:

1. OpenAI ノードで Provider を選択
	 - OpenAI: API キーを設定
	 - Ollama: Base URL に `http://host.docker.internal:11434` を設定
2. Prompt Template の Human Message に `こんにちは。3行で自己紹介して。` を入力
3. LLM Chain ノードに Prompt / Language Model の接続が成立していることを確認
4. 実行前に入力値が見えている状態を確認してから撮影する
5. 右下のチャット実行パネルで送信し、応答または明確なエラーが見えてから結果画面を撮影する

実行イメージ（プロバイダ設定）:

![provider settings](examples/flowise/04-provider-settings.png)

実行イメージ（テスト入力）:

![test input](examples/flowise/05-test-input.png)

実行イメージ（テスト出力）:

![test output](examples/flowise/06-test-output.png)

#### 4.4.10.1.7 5.1 Builder モード選択の確認

ブラウザ操作:

1. 作成対象が Chatflow であることを確認し、Assistant / Agentflow と使い分ける意図をメモする
2. 今回の構成が `Prompt Template + Chat Model + LLM Chain` の最小検証であることを run-log に記録する

確認ポイント:

- 検証目的（最小疎通か、複雑フロー検証か）に応じてモード選択を説明できる

品質メモ:

- `05-test-input.png` は入力値が見える実行前画面のみ採用します。
- `06-test-output.png` は応答または追跡可能な実行エラーが見える実行後画面のみ採用します。

#### 4.4.10.1.8 6. 基本機能の完了判定（最低ライン）

- 管理画面にログインできる
- Chatflow を保存できる
- LLM 応答が 1 件以上返る

#### 4.4.10.1.9 7. 停止・再開（検証用）

```powershell
docker compose stop
docker compose start
docker compose down
```

使い分け:

- `docker compose stop`: コンテナだけ停止します。次回は `docker compose start` で高速に再開できます。
- `docker compose down`: コンテナ停止に加えて、Compose 管理のネットワークも削除します。次回は `docker compose up -d` で再作成して起動します。
- データも初期化したい場合: `docker compose down -v`（ボリューム削除）

### 4.4.10.2 検証

- コマンドがエラーなく完了する
- 想定した出力（画面表示・ファイル生成・回答）を確認できる
- 変更した設定に応じて結果差分を説明できる

## 4.4.11 よくある質問

**Q. `host.docker.internal` で Ollama に接続できません。**  
A. Docker Desktop のバージョンが古いと名前解決に失敗する場合があります。`docker run --rm alpine nslookup host.docker.internal` で確認し、失敗する場合は Docker Desktop を更新してください。

**Q. 初回起動で画面が白くなります。**  
A. `docker compose logs flowise --tail 100` を確認し、ポート重複や初回セットアップの完了待ちを確認してください。

**Q. どの Provider から始めるべきですか。**  
A. まずは OpenAI か Ollama のどちらか 1 つに絞って接続し、動作確認後に複数 Provider へ拡張するのが安全です。

## 4.4.12 演習課題

1. FAQ ボット向け Chatflow を1つ作成し、入力・出力の例を3件記録してください。
2. OpenAI と Ollama のどちらか一方で同じ Prompt を実行し、応答速度と回答品質の差分を比較してください。
3. Dify と比較して、Flowise を選ぶ判断基準を3点でまとめてください。


### 4.4.12.1 解答の目安

1. まず課題の目的を一文で明確化し、入力・出力を対応づけて記述します。
   確認ポイント: 何を変えて何を確認する課題かを第三者が読んで理解できること。
2. 最小構成で一度実行し、設定や条件を1つ変更して差分を比較します。
   確認ポイント: 変更前後の挙動差を具体的に説明できること。
3. 適用条件と代替手段を整理し、選択基準を短くまとめます。
   確認ポイント: なぜその手段を選ぶかを根拠付きで示せること。

## 4.4.13 理解度チェック

1. Flowise の主な役割を 1 文で説明してください。
2. ノードベース設計のメリットと運用上の注意点は何ですか？
3. Flowise が向かないユースケースを 1 つ挙げて理由を述べてください。


### 4.4.13.1 解説の要点

1. 主な役割は、その技術がどの工程を担い、何を改善するかで説明します。
2. メリットは再現性・拡張性・運用性の観点で整理し、注意点は導入コストや複雑性として示します。
3. 使い分けは要件、実装コスト、運用体制の3観点で判断します。
---

[← 前へ](04-ui/02-dify.md) | [次へ →](04-ui/04-librechat.md)







---
level: 📖 中級（概念・実践）
prereq: Python基礎 / LLMアプリの基本概念
prev: 04-ui/03-flowise.md
next: 04-ui/05-chatbot-ui.md
---

# 4.5 LibreChat 入門

> 📖 中級（概念・実践） | 前提: Python基礎 / LLMアプリの基本概念

## 4.5.1 この教材で身につくこと

- 複数 LLM プロバイダ対応 UI の基本構成
- Tool Call / MCP を含む外部連携型チャット基盤の見方
- Windows + PowerShell での最小起動手順
- `.env` を使った設定の基本
- 実行証跡（ハードコピー）運用

## 4.5.2 公式ポジショニング
LibreChat は、複数モデルを 1 つの UI で扱うだけでなく、Agents、Tools、MCP、Code Interpreter、Artifacts まで統合できるオープンソース AI プラットフォームです。

**バージョン**: 最新版 / OSS準拠（2026-05時点）  
**公式ドキュメント**: https://www.librechat.ai/

## 4.5.3 この OSS を選ぶべきケース

- 複数 Provider を横断しつつ、同じ UI 上で運用したい
- 単純なチャット UI ではなく、将来的に Tool Call / MCP / Agent 連携まで育てたい
- 会話、認証、履歴、検索、外部連携を 1 つの基盤で管理したい
- 外部環境とやり取りする機能を、セルフホスト前提で検証したい

## 4.5.4 この OSS を選ばない方がよいケース

- 単にローカル LLM と会話するだけで十分で、外部連携や運用機能が不要
- ノードベースのワークフロー設計を主目的とする
- 最小構成の軽いチャット UI を短時間で立ち上げたい

## 4.5.5 LibreChat の特徴

- OpenAI、Azure OpenAI、Anthropic、Google、Ollama など複数 Provider を 1 つの UI から切り替えて扱える
- Agents、MCP、Tools、Artifacts などの拡張機能を同じ画面基盤で扱える
- 会話履歴、検索、プリセット、複数ユーザー認証など運用向け機能がそろっている
- セルフホスト前提のため、接続先と保存先を自分で管理しやすい

## 4.5.6 LibreChat を使うメリット

- Provider ごとの差分を UI で吸収しやすく、比較検証がしやすい
- Agent / Tool Call / MCP まで同じ基盤で拡張しやすく、学習用から運用用へ伸ばしやすい
- 単一 Provider 専用 UI よりも、モデル切替や運用ポリシー変更への耐性が高い
- 実行証跡を残すときに、入力・出力・利用モデルを同じ画面文脈で確認しやすい

## 4.5.7 外部接続と拡張の考え方

- Provider 接続は `.env` の API キー設定が入口で、通常チャットは接続確認の最低ラインです
- LibreChat の価値は、そこから Agents / Tools / MCP / Code Interpreter へ段階的に拡張できる点にあります
- 外部連携を採用する場合は、利用モデルの応答だけでなく、どのツールが呼ばれ、どの結果が返ったかを追跡できることが重要です
- 本教材では通常チャットを疎通確認、Tool Call / MCP を価値確認として扱います

## 4.5.8 最小実行で確認すべき本質

1. 単一 Provider のチャット応答が成功すること
2. 利用するモデルや Provider 文脈が UI 上で確認できること
3. Tool Call / MCP を有効にした構成では、外部連携の実行痕跡か結果が UI 上で追えること
4. 通常チャットと外部連携の違いを、実行証跡として説明できること

## 4.5.9 仕組み

1. 目的と入力を定義し、対象データや利用モデルを準備します。
2. コア処理（検索・推論・生成・検証のいずれか）を実行します。
3. 実行結果を保存または表示し、次工程に渡せる形式へ整えます。
4. パラメータを調整して挙動差分を比較し、品質を確認します。
5. 運用を想定して再実行手順と確認ポイントを定着させます。

## 4.5.10 前提条件

### 4.5.10.1 前提条件

- Windows 11 + PowerShell 7 推奨
- Git
- Docker Desktop（Compose v2 有効）
- メモリ 8GB 以上推奨

### 4.5.10.2 事前チェック（PowerShell）

```powershell
git --version
docker --version
docker compose version
```

### 4.5.10.3 クイックスタート

```powershell
git clone https://github.com/danny-avila/LibreChat.git
Set-Location .\LibreChat
Copy-Item .env.example .env
docker compose up -d
```

ブラウザで http://localhost:3080 にアクセス。

## 4.5.11 位置づけ
```mermaid
flowchart LR
	A[セルフホストChat UI] --> B[LibreChat]
	B --> C[複数LLM接続]
	B --> D[会話UI運用]
```

## 4.5.12 実行フロー

```mermaid
flowchart TD
	S[開始] --> G[git clone]
	G --> C[cd LibreChat]
	C --> U[docker compose up -d]
	U --> A[http://localhost:3080 確認]
	A --> X[終了]
```

## 4.5.13 サンプル

### 4.5.13.1 実行例

このセクションでは、Windows PowerShell 前提で LibreChat の最小構成を順に起動します。

#### 4.5.13.1.1 0. 作業ディレクトリ準備（PowerShell）

```powershell
New-Item -ItemType Directory -Path .\sandbox -Force | Out-Null
Set-Location .\sandbox
```

#### 4.5.13.1.2 1. docker-compose.yml と設定ファイルを準備

`docker-compose.yml`:

```yaml
services:
	api:
		container_name: LibreChat
		ports:
			- "${PORT}:${PORT}"
		depends_on:
			- mongodb
			- rag_api
		image: registry.librechat.ai/danny-avila/librechat-dev:latest
		restart: always
		extra_hosts:
			- "host.docker.internal:host-gateway"
		environment:
			- HOST=0.0.0.0
			- MONGO_URI=mongodb://mongodb:27017/LibreChat
			- MEILI_HOST=http://meilisearch:7700
			- RAG_PORT=${RAG_PORT:-8000}
			- RAG_API_URL=http://rag_api:${RAG_PORT:-8000}
		volumes:
			- type: bind
				source: ./.env
				target: /app/.env
			- ./images:/app/client/public/images
			- ./uploads:/app/uploads
			- ./logs:/app/logs

	mongodb:
		container_name: chat-mongodb
		image: mongo:8.0.20
		restart: always
		volumes:
			- ./data-node:/data/db
		command: mongod --noauth

	meilisearch:
		container_name: chat-meilisearch
		image: getmeili/meilisearch:v1.35.1
		restart: always
		environment:
			- MEILI_HOST=http://meilisearch:7700
			- MEILI_NO_ANALYTICS=true
			- MEILI_MASTER_KEY=${MEILI_MASTER_KEY}
		volumes:
			- ./meili_data_v1.35.1:/meili_data

	vectordb:
		container_name: vectordb
		image: pgvector/pgvector:0.8.0-pg15-trixie
		environment:
			POSTGRES_DB: mydatabase
			POSTGRES_USER: myuser
			POSTGRES_PASSWORD: mypassword
		restart: always
		volumes:
			- pgdata2:/var/lib/postgresql/data

	rag_api:
		container_name: rag_api
		image: registry.librechat.ai/danny-avila/librechat-rag-api-dev-lite:latest
		environment:
			- DB_HOST=vectordb
			- RAG_PORT=${RAG_PORT:-8000}
		restart: always
		depends_on:
			- vectordb
		env_file:
			- .env

volumes:
	pgdata2:
```

```powershell
git clone https://github.com/danny-avila/LibreChat.git
Set-Location .\LibreChat
Copy-Item .env.example .env
```

実行イメージ（.env 作成）:

![env prepared](examples/librechat/01-env-prepared.png)

#### 4.5.13.1.3 2. 必須環境変数を最小設定

`.env` の最低限の確認項目:

- `HOST=0.0.0.0`
- `PORT=3080`
- 利用する Provider の API キー（例: `OPENAI_API_KEY=`）
- `ALLOW_EMAIL_LOGIN=true`
- `ALLOW_REGISTRATION=true`

補足:

- Windows では `docker compose up -d` 時に `UID` / `GID` の警告が出ることがありますが、起動継続できる場合は直ちに致命傷ではありません
- 初回のイメージ pull は大きいため、数分単位で待つことがあります

実行イメージ（env edited）:

![env edited](examples/librechat/02-env-edited.png)

#### 4.5.13.1.4 3. コンテナ起動と状態確認

```powershell
docker compose up -d
docker compose ps
docker compose logs --tail 80
```

期待状態:

- `librechat` 関連コンテナが `Up` になっている
- 致命的エラーがログに出ていない

実行イメージ（docker compose ps）:

![docker compose ps](examples/librechat/03-docker-compose-ps.png)

#### 4.5.13.1.5 4. 初期アクセス

```powershell
Start-Process "http://localhost:3080"
```

ブラウザ操作:

1. サインアップまたはログイン
2. モデル選択欄に Provider が表示されることを確認
3. 画面がローディング完了後であることを確認してから撮影する

実行イメージ（signup/login）:

![signup login](examples/librechat/04-signup-login.png)

#### 4.5.13.1.6 5. チャット確認

ブラウザ操作:

1. モデルを選択
2. `こんにちは。3行で自己紹介して。` を送信
3. 送信前の入力状態を `05-chat-input.png` として撮影
4. 応答が返ることを確認し、通常チャットの疎通確認を行う
5. 送信後の結果を `06-chat-output.png` として撮影する

品質メモ:

- `05-chat-input.png` は送信前であること
- `06-chat-output.png` は送信後であること
- 単なる設定画面やローディング中画面で代用しないこと

実行イメージ（chat input）:

![chat input](examples/librechat/05-chat-input.png)

実行イメージ（chat output）:

![chat output](examples/librechat/06-chat-output.png)

#### 4.5.13.1.7 5.1 Tool Call / MCP 価値確認

事前準備（推奨）:

```powershell
Set-Location .\sandbox\LibreChat
Set-Content .\uploads\mcp-test-1.txt "Test content 1"
Set-Content .\uploads\mcp-test-2.txt "Test content 2"
```

補足:

- `filesystem` の対象ディレクトリが空の場合、Tool Call は実行されても結果表示が `(No response)` になることがあります
- 教材では再現性のため、上記のようにサンプルファイルを置いた状態で 5.1 を実施してください

ブラウザ操作:

1. Agent / Tools / MCP を有効にした構成で、外部連携を伴う問い合わせを実行
2. ツール名、実行ログ、結果、失敗理由のいずれかが UI 上で追跡できることを確認
3. Tool Call / MCP 未実施の場合は、その理由と未実施範囲を `run-log.txt` に記録

実行イメージ（toolcall / mcp settings）:

![toolcall mcp settings](examples/librechat/07-toolcall-mcp.png)

実行イメージ（mcp connected）:

![mcp connected](examples/librechat/08-mcp-connected.png)

実行イメージ（toolcall output）:

![toolcall output](examples/librechat/09-toolcall-output.png)

確認ポイント:

- 通常チャット疎通と、外部連携を伴う価値確認を分けて説明できる
- 08 の採用画像が MCP 接続状態の説明に使える
- 09 の採用画像が Tool Call 実行結果または失敗理由の説明に使える
- 09 で `(No response)` が出る場合は、まず `uploads` 配下にテストファイルを置いて再実行し、結果差分を記録できる

#### 4.5.13.1.8 6. 基本機能の完了判定（最低ライン）

- 管理画面へアクセスできる
- プロバイダ経由で応答が返る
- 会話履歴が保持される
- Tool Call / MCP を使う構成では、外部連携の実行結果または失敗理由が追跡できる

#### 4.5.13.1.9 7. 停止・再開（検証用）

```powershell
docker compose stop
docker compose start
docker compose down
```

使い分け:

- `docker compose stop`: コンテナだけ停止します。次回は `docker compose start` で高速に再開できます。
- `docker compose down`: コンテナ停止に加えて、Compose 管理のネットワークも削除します。次回は `docker compose up -d` で再作成して起動します。
- データも初期化したい場合: `docker compose down -v`（ボリューム削除）

### 4.5.13.2 検証

- コマンドがエラーなく完了する
- 想定した出力（画面表示・ファイル生成・回答）を確認できる
- 変更した設定に応じて結果差分を説明できる

## 4.5.14 よくある質問

**Q. 起動後に 502/503 が出ます。**  
A. 初回は依存コンテナの起動に時間がかかります。`docker compose logs --tail 120` を確認し、数分待って再読込してください。

**Q. モデル一覧が空です。**  
A. `.env` の API キー設定が未完了の可能性があります。Provider のキーを設定して `docker compose up -d` を再実行してください。

**Q. 05 と 06 の違いが分かりにくいです。**  
A. 05 は送信前入力、06 は送信後結果です。Tool Call / MCP を使う構成では、06 に少なくとも実行結果、ツール名、失敗理由のいずれかが見える必要があります。

**Q. Tool Call / MCP まで必ず確認すべきですか。**  
A. LibreChat の選定価値を確認する観点では優先度が高いです。通常チャットだけでも最小起動は確認できますが、本教材では外部連携まで確認できる証跡を優先採用します。

**Q. filesystem の Tool Call で `(No response)` が出ます。**  
A. MCP 接続自体は成功していても、対象ディレクトリが空だと応答本文が空になる場合があります。`uploads` 配下にサンプルファイルを作成して再実行し、`[FILE] ...` の出力が返ることを確認してください。

**Q. ポート 3080 が使えません。**  
A. `.env` の `PORT` を別番号に変更し、再起動してください。

## 4.5.15 演習課題

1. OpenAI と Ollama の 2 つを接続候補として整理し、運用時の選定条件をまとめてください。
2. `.env` の 1 項目を変更し、挙動差分を `run-log.txt` に記録してください。
3. Open WebUI との違いを UI 観点・運用観点・外部連携観点で比較してください。


### 4.5.15.1 解答の目安

1. まず課題の目的を一文で明確化し、入力・出力を対応づけて記述します。
   確認ポイント: 何を変えて何を確認する課題かを第三者が読んで理解できること。
2. 最小構成で一度実行し、設定や条件を1つ変更して差分を比較します。
   確認ポイント: 変更前後の挙動差を具体的に説明できること。
3. 適用条件と代替手段を整理し、選択基準を短くまとめます。
   確認ポイント: なぜその手段を選ぶかを根拠付きで示せること。

## 4.5.16 理解度チェック

1. LibreChat の主な役割を 1 文で説明してください。
2. 複数 Provider 対応のメリットと注意点は何ですか？
3. LibreChat で通常チャット確認と Tool Call / MCP 確認を分けて考える理由は何ですか？
4. LibreChat が向かないユースケースを 1 つ挙げて理由を述べてください。


### 4.5.16.1 解説の要点

1. 主な役割は、その技術がどの工程を担い、何を改善するかで説明します。
2. メリットは再現性・拡張性・運用性の観点で整理し、注意点は導入コストや複雑性として示します。
3. 使い分けは要件、実装コスト、運用体制の3観点で判断します。
---

[← 前へ](04-ui/03-flowise.md) | [次へ →](04-ui/05-chatbot-ui.md)







---
level: 📖 中級（概念・実践）
prereq: Python基礎 / LLMアプリの基本概念
prev: 04-ui/04-librechat.md
next: 04-ui/06-lobechat.md
---

# 4.6 Chatbot UI 入門

> 📖 中級（概念・実践） | 前提: Python基礎 / LLMアプリの基本概念

## 4.6.1 この教材で身につくこと

- 軽量チャット UI のローカル開発手順
- Windows + PowerShell での Node 実行
- `.env.local` による API 接続設定
- 実行証跡（ハードコピー）運用

## 4.6.2 公式ポジショニング
Chatbot UI は、任意モデル向けの open-source AI chat app として、自分で構成を管理しながら ChatGPT 風 UI を組み立てるための OSS です。

**バージョン**: 最新版 / OSS準拠（2026-05時点）  
**公式ドキュメント**: https://github.com/mckaywrigley/chatbot-ui

## 4.6.3 この OSS を選ぶべきケース

- ChatGPT 風の会話 UI をベースに、自分でフロントや環境設定を調整したい
- アプリ構築基盤よりも、会話 UI そのものの実装や見た目を把握したい
- Node.js / Next.js 前提の開発に抵抗がなく、構成をコードで管理したい

## 4.6.4 この OSS を選ばない方がよいケース

- Docker 単体で簡単にセルフホスト UI を立てたい
- Agent、Tool Call、MCP を製品の主価値として最初から使いたい
- 文書取り込みや RAG を中核機能としてすぐ使いたい

## 4.6.5 位置づけ上の注意

- 見た目はシンプルですが、公式 Quickstart では Supabase を含む構成理解が重要です
- そのため、UI の印象よりも運用前提が軽いとは限りません
- 最小起動はできても、継続利用には環境変数、バックエンド、保存先の理解が必要です

## 4.6.6 外部接続と拡張の考え方

- Chatbot UI はモデル接続を前提とした会話 UI で、まず確認すべきは API 接続と画面動作です
- Dify や Flowise のようなアプリ構築基盤とは役割が異なり、ワークフロー設計より UI 実装に重心があります
- Open WebUI や LibreChat と比較すると、選定観点は「軽さ」ではなく「自分でコードと構成を持つ前提を受け入れられるか」です

## 4.6.7 前提条件

### 4.6.7.1 前提条件

- Windows 11 + PowerShell 7 推奨
- Git
- Node.js 20 LTS 推奨
- npm 10 以上

### 4.6.7.2 事前チェック（PowerShell）

```powershell
git --version
node --version
npm --version
```

### 4.6.7.3 クイックスタート

```powershell
git clone https://github.com/mckaywrigley/chatbot-ui.git
Set-Location .\chatbot-ui
npm install
npm run dev
```

ブラウザで http://localhost:3000 にアクセス。

## 4.6.8 仕組み

1. 目的と入力を定義し、対象データや利用モデルを準備します。
2. コア処理（検索・推論・生成・検証のいずれか）を実行します。
3. 実行結果を保存または表示し、次工程に渡せる形式へ整えます。
4. パラメータを調整して挙動差分を比較し、品質を確認します。
5. 運用を想定して再実行手順と確認ポイントを定着させます。
## 4.6.9 位置づけ
```mermaid
flowchart LR
	A[軽量チャットUI] --> B[Chatbot UI]
	B --> C[フロント実装]
	B --> D[ローカル開発]
```

## 4.6.10 実行フロー

```mermaid
flowchart TD
	S[開始] --> G[git clone]
	G --> C[cd chatbot-ui]
	C --> I[npm install]
	I --> D[npm run dev]
	D --> A[http://localhost:3000 確認]
	A --> X[終了]
```

## 4.6.11 サンプル

### 4.6.11.1 実行例

このセクションでは、Windows PowerShell 前提で Chatbot UI の最小構成を順に起動します。

#### 4.6.11.1.1 0. 作業ディレクトリ準備（PowerShell）

```powershell
New-Item -ItemType Directory -Path .\sandbox -Force | Out-Null
Set-Location .\sandbox
```

#### 4.6.11.1.2 1. ソース取得と依存解決

```powershell
git clone https://github.com/mckaywrigley/chatbot-ui.git
Set-Location .\chatbot-ui
npm install
```

実行イメージ（npm install）:

![npm install](examples/chatbot-ui/01-npm-install.png)

#### 4.6.11.1.3 2. 環境変数を設定

```powershell
Copy-Item .env.example .env.local
```

`.env.local` の最低限の設定例:

- `OPENAI_API_KEY=...`

実行イメージ（env local）:

![env local](examples/chatbot-ui/02-env-local.png)

#### 4.6.11.1.4 3. 開発サーバ起動

```powershell
npm run dev
```

期待状態:

- `ready - started server on` のような起動ログが表示される

実行イメージ（dev server started）:

![dev server started](examples/chatbot-ui/03-dev-server-started.png)

#### 4.6.11.1.5 4. 初期アクセス

ブラウザで http://localhost:3000 を開き、初期画面表示を確認します。

実行イメージ（home）:

![home](examples/chatbot-ui/04-home.png)

#### 4.6.11.1.6 5. チャット確認

ブラウザ操作:

1. モデルを選択
2. `こんにちは。3行で自己紹介して。` を送信
3. 送信前入力と送信後応答を確認

実行イメージ（chat input）:

![chat input](examples/chatbot-ui/05-chat-input.png)

実行イメージ（chat output）:

![chat output](examples/chatbot-ui/06-chat-output.png)

#### 4.6.11.1.7 5.1 構成前提の確認（運用時の注意）

確認作業:

1. `.env.local` に設定したキーが UI 上の接続状態に反映されることを確認
2. 公式 Quickstart で前提になるバックエンド構成（例: Supabase）を把握し、今回の最小構成との差分をメモする

確認ポイント:

- 「画面は軽量」でも運用前提は別であることを説明できる
- 追加構成が必要な場合の次アクションを明示できる

#### 4.6.11.1.8 6. 基本機能の完了判定（最低ライン）

- UI が表示される
- API キー設定で応答が返る
- エラー表示時に原因を特定できる

#### 4.6.11.1.9 7. 停止・再開（検証用）

`npm run dev` 実行ターミナルで `Ctrl + C` を入力して停止します。

使い分け:

- 一時停止は `Ctrl + C` 後に `npm run dev` で再起動
- 依存更新後や環境変数変更後は、必ず再起動して反映を確認

### 4.6.11.2 検証

- コマンドがエラーなく完了する
- 想定した出力（画面表示・ファイル生成・回答）を確認できる
- 変更した設定に応じて結果差分を説明できる

## 4.6.12 よくある質問

**Q. `npm install` で失敗します。**  
A. Node.js のバージョン不一致が多いです。`node --version` で 20 系を確認し、必要なら nvm-windows で切り替えてください。

**Q. API キーエラーが出ます。**  
A. `.env.local` のキー名と値を確認し、開発サーバを再起動してください。

**Q. 3000 番ポートが競合します。**  
A. Next.js の起動時に別ポートを指定するか、競合プロセスを停止してください。

## 4.6.13 演習課題

1. カスタマーサポート向け UI を想定し、プロンプト設計と出力例を 3 件作成してください。
2. モデル設定または system prompt を 1 つ変更し、差分を記録してください。
3. LobeChat と比較し、軽量性と拡張性の観点で選定基準をまとめてください。


### 4.6.13.1 解答の目安

1. まず課題の目的を一文で明確化し、入力・出力を対応づけて記述します。
   確認ポイント: 何を変えて何を確認する課題かを第三者が読んで理解できること。
2. 最小構成で一度実行し、設定や条件を1つ変更して差分を比較します。
   確認ポイント: 変更前後の挙動差を具体的に説明できること。
3. 適用条件と代替手段を整理し、選択基準を短くまとめます。
   確認ポイント: なぜその手段を選ぶかを根拠付きで示せること。

## 4.6.14 理解度チェック

1. Chatbot UI の主な役割を 1 文で説明してください。
2. 軽量 UI のメリットと注意点は何ですか？
3. Chatbot UI が向かないユースケースを 1 つ挙げて理由を述べてください。


### 4.6.14.1 解説の要点

1. 主な役割は、その技術がどの工程を担い、何を改善するかで説明します。
2. メリットは再現性・拡張性・運用性の観点で整理し、注意点は導入コストや複雑性として示します。
3. 使い分けは要件、実装コスト、運用体制の3観点で判断します。
---

[← 前へ](04-ui/04-librechat.md) | [次へ →](04-ui/06-lobechat.md)







---
level: 📖 中級（概念・実践）
prereq: Python基礎 / LLMアプリの基本概念
prev: 04-ui/05-chatbot-ui.md
next: 04-ui/07-anythingllm.md
---

# 4.7 LobeChat 入門

> 📖 中級（概念・実践） | 前提: Python基礎 / LLMアプリの基本概念

## 4.7.1 この教材で身につくこと

- Windows + PowerShell での最小セットアップ
- `.env` による Provider 設定
- チャット応答と Agent/Skills/MCP の確認

## 4.7.2 LobeChat の位置づけ

LobeChat は、Agent・Skills・MCP・Memory を扱える OSS チャット基盤です。  
モダンな UI で、拡張しながら継続利用する体験に向いています。

**公式ドキュメント**: https://lobechat.com/

## 4.7.3 選定の目安

向いているケース:

- Agent を中心に使いたい
- Skills / MCP で機能を拡張したい
- UI/UX を重視して継続運用したい

向かないケース:

- 軽量な最小チャットだけを最短で試したい
- ノードベースのワークフロー設計を主目的にしている

## 4.7.4 前提条件

- Windows 11
- PowerShell 7
- Git
- Docker Desktop（Compose v2）

事前チェック:

```powershell
git --version
docker --version
docker compose version
```

## 4.7.5 クイックスタート

```powershell
git clone https://github.com/lobehub/lobe-chat.git
Set-Location .\lobe-chat\docker-compose\deploy
Copy-Item .env.example .env
docker compose up -d
docker compose ps
```

ブラウザで http://localhost:3210 にアクセスします。

`.env` の最低限設定例:

- `OPENAI_API_KEY=...`
- `BETTER_AUTH_SECRET=<32文字以上のランダム値>`
- `AUTH_SECRET=<ランダム値>`
- `KEY_VAULTS_SECRET=<ランダム値>`

注意:

- 秘密値は教材本文に直接書かず、ローカル端末側で設定する
- 古いガイドの `NEXTAUTH_SKIP_ENV_VALIDATION` 追加は行わない

## 4.7.6 実行フロー

```mermaid
flowchart TD
    S[開始] --> G[git clone]
    G --> C[cd lobe-chat/docker-compose/deploy]
    C --> E[.env 作成]
    E --> U[docker compose up -d]
    U --> A[http://localhost:3210 確認]
    A --> X[終了]
```

## 4.7.7 画面イメージ（この順で確認）

1. 初期画面（または `/signin` 到達）

![home](examples/lobechat/03-home.png)

2. チャット入力前（未送信）

![chat input](examples/lobechat/04-chat-input.png)

3. 同一スレッドの送信後応答

![chat output](examples/lobechat/05-chat-output.png)

4. Agent / 拡張メニューの可視状態

![agent menu](examples/lobechat/06-agent-menu.png)

5. Skills または MCP の可視状態

![skills mcp](examples/lobechat/07-skills-mcp.png)

## 4.7.8 完了判定（最低ライン）

- 初期画面（または `/signin`）に到達できる
- 1往復以上のチャット応答が返る
- Agent または Skills/MCP の表示を確認できる

## 4.7.9 停止・再開（検証用）

```powershell
docker compose stop
docker compose start
docker compose down
```

使い分け:

- `docker compose stop`: コンテナだけ停止し、`docker compose start` で高速再開
- `docker compose down`: コンテナ停止 + ネットワーク削除
- データ初期化も必要な場合: `docker compose down -v`

## 4.7.10 演習課題

1. 1つの業務ユースケースを定義し、必要なプロンプトと期待出力を整理してください。
2. モデルまたは system prompt を 1 つ変更し、回答差分を記録してください。
3. Chatbot UI と比較し、LobeChat を選ぶ基準を 3 点でまとめてください。

## 4.7.11 理解度チェック

1. LobeChat の主な役割を 1 文で説明してください。
2. モダン UI を採用するメリットと注意点は何ですか？
3. LobeChat が向かないユースケースを 1 つ挙げて理由を述べてください。

---

[← 前へ](04-ui/05-chatbot-ui.md) | [次へ →](04-ui/07-anythingllm.md)

---
level: 📖 中級（概念・実践）
prereq: Python基礎 / LLMアプリの基本概念
prev: 04-ui/06-lobechat.md
next: 05-evaluation/00-README.md
---

# 4.8 AnythingLLM 入門

> 📖 中級（概念・実践） | 前提: Python基礎 / LLMアプリの基本概念

## 4.8.1 この教材で身につくこと

- オールインワン型 UI の最小構成
- Windows + PowerShell での Docker 実行
- LLM Provider とワークスペース初期設定
- 実行証跡（ハードコピー）運用

## 4.8.2 公式ポジショニング
AnythingLLM は、any LLM、any document、any agent を 1 つにまとめ、private-first で使える all-in-one AI application です。

**バージョン**: 最新版 / OSS準拠（2026-05時点）  
**公式ドキュメント**: https://anythingllm.com/

## 4.8.3 この OSS を選ぶべきケース

- 文書を取り込み、要約、検索、QA をすぐ始めたい
- ローカル優先、private-first の運用を重視したい
- 単なるチャット UI ではなく、ワークスペース単位で文書と会話を管理したい
- 個人利用からチーム利用まで、文書活用を中心に広げたい

## 4.8.4 この OSS を選ばない方がよいケース

- ノード接続でワークフローを細かく設計したい
- AI アプリ公開や workflow 配備を主目的とする
- Agent や Tool Call よりも、まずチャット UI の軽さを優先したい

## 4.8.5 Dify / Flowise との見分け方

- AnythingLLM はフロー設計よりも、文書を起点にした利用体験を早く作ることに向いています
- Dify や Flowise が構築基盤であるのに対し、AnythingLLM は文書中心の利用基盤として捉えると分かりやすいです
- 選定時は、アプリを作りたいのか、文書と会話の利用環境を整えたいのかで判断します

## 4.8.6 前提条件

### 4.8.6.1 前提条件

- Windows 11 + PowerShell 7 推奨
- Docker Desktop（Compose v2 有効）
- メモリ 8GB 以上推奨

### 4.8.6.2 事前チェック（PowerShell）

```powershell
docker --version
docker compose version
```

### 4.8.6.3 クイックスタート

```powershell
docker compose up -d
```

ブラウザで http://localhost:3003 にアクセス。

## 4.8.7 仕組み

1. 目的と入力を定義し、対象データや利用モデルを準備します。
2. コア処理（検索・推論・生成・検証のいずれか）を実行します。
3. 実行結果を保存または表示し、次工程に渡せる形式へ整えます。
4. パラメータを調整して挙動差分を比較し、品質を確認します。
5. 運用を想定して再実行手順と確認ポイントを定着させます。
## 4.8.8 位置づけ
```mermaid
flowchart LR
		A[オールインワンLLM UI] --> B[AnythingLLM]
		B --> C[文書取り込み]
		B --> D[チャット回答]
		B --> E[ローカル運用]
```

## 4.8.9 実行フロー

```mermaid
flowchart TD
		S[開始] --> U[docker compose up -d]
		U --> A[http://localhost:3003 アクセス]
		A --> I[初期設定]
		I --> Q[文書QA開始]
		Q --> X[終了]
```

## 4.8.10 サンプル

### 4.8.10.1 実行例

このセクションでは、Windows PowerShell 前提で AnythingLLM の最小構成を順に起動します。

#### 4.8.10.1.1 0. 作業ディレクトリ準備（PowerShell）

```powershell
New-Item -ItemType Directory -Path .\sandbox\anythingllm -Force | Out-Null
Set-Location .\sandbox\anythingllm
```

#### 4.8.10.1.2 1. docker-compose.yml を作成

```yaml
services:
	anythingllm:
		image: mintplexlabs/anythingllm:latest
		container_name: anythingllm
		ports:
			- "3003:3001"
		environment:
			- STORAGE_DIR=/app/server/storage
			- OPEN_AI_KEY=${OPENAI_API_KEY}
		volumes:
			- anythingllm_data:/app/server/storage
		restart: unless-stopped

volumes:
	anythingllm_data:
```

#### 4.8.10.1.3 2. コンテナ起動と状態確認

```powershell
docker compose up -d
docker compose ps
docker compose logs anythingllm --tail 80
```

期待状態:

- `anythingllm` が `Up` になっている
- ログに致命的エラーが出ていない

実行イメージ:

![docker compose ps](examples/anythingllm/01-docker-compose-ps.png)

#### 4.8.10.1.4 3. 初期アクセス

```powershell
Start-Process "http://localhost:3003"
```

ブラウザ操作:

1. 初回セットアップ画面を開く
2. ワークスペース名を設定

実行イメージ（setup）:

![setup](examples/anythingllm/02-setup.png)

#### 4.8.10.1.5 4. LLM Provider 設定

ブラウザ操作:

1. Settings から Provider を選択
2. OpenAI または Ollama を設定
	 - Ollama の場合は `http://host.docker.internal:11434` を利用

実行イメージ（provider settings）:

![provider settings](examples/anythingllm/03-provider-settings.png)

#### 4.8.10.1.6 5. ドキュメント登録とチャット確認

ブラウザ操作:

1. テスト用テキストファイルを 1 つアップロード
2. `この文書を3行で要約して。` を送信
3. 応答を確認（取り込み直後に未検出エラーが出る場合は数秒待って再送）

実行イメージ（workspace created）:

![workspace created](examples/anythingllm/04-workspace-created.png)

実行イメージ（chat input）:

![chat input](examples/anythingllm/05-chat-input.png)

実行イメージ（chat output）:

![chat output](examples/anythingllm/06-chat-output.png)

#### 4.8.10.1.7 5.1 インデックス完了と再送確認

ブラウザ操作:

1. 取り込み直後に未検出エラーが出た場合は数秒待って再送する
2. 再送後に同じ質問で回答が返ることを確認する
3. 初回失敗と再送成功の有無を `run-log.txt` に記録する

確認ポイント:

- 文書取り込み直後の揺らぎを手順として説明できる
- 最終的に文書由来の回答が返ったことを証跡化できる

#### 4.8.10.1.8 6. 基本機能の完了判定（最低ライン）

- ワークスペース作成が完了する
- Provider 設定で応答が返る
- 1ファイル以上を取り込んで回答できる

#### 4.8.10.1.9 7. 停止・再開（検証用）

```powershell
docker compose stop
docker compose start
docker compose down
```

使い分け:

- `docker compose stop`: コンテナだけ停止します。次回は `docker compose start` で高速に再開できます。
- `docker compose down`: コンテナ停止に加えて、Compose 管理のネットワークも削除します。次回は `docker compose up -d` で再作成して起動します。
- データも初期化したい場合: `docker compose down -v`（ボリューム削除）

### 4.8.10.2 検証

- コマンドがエラーなく完了する
- 想定した出力（画面表示・ファイル生成・回答）を確認できる
- 変更した設定に応じて結果差分を説明できる

## 4.8.11 よくある質問

**Q. 初期画面が表示されません。**  
A. `docker compose ps` で `Up` を確認し、`docker compose logs anythingllm --tail 120` で起動ログを確認してください。

**Q. Ollama 接続に失敗します。**  
A. URL を `http://host.docker.internal:11434` に設定し、Ollama 側でモデルが pull 済みか確認してください。

**Q. 文書をアップロードしても回答に反映されません。**  
A. 取り込み完了まで時間がかかる場合があります。インデックス完了後に再質問してください。

## 4.8.12 演習課題

1. 1つのドキュメントQAユースケースを定義し、期待する回答形式を記述してください。
2. Provider または埋め込み設定を 1 つ変更し、応答差分を記録してください。
3. Dify の RAG と比較し、AnythingLLM を選ぶ基準を 3 点でまとめてください。


### 4.8.12.1 解答の目安

1. まず課題の目的を一文で明確化し、入力・出力を対応づけて記述します。
   確認ポイント: 何を変えて何を確認する課題かを第三者が読んで理解できること。
2. 最小構成で一度実行し、設定や条件を1つ変更して差分を比較します。
   確認ポイント: 変更前後の挙動差を具体的に説明できること。
3. 適用条件と代替手段を整理し、選択基準を短くまとめます。
   確認ポイント: なぜその手段を選ぶかを根拠付きで示せること。

## 4.8.13 理解度チェック

1. AnythingLLM の主な役割を 1 文で説明してください。
2. オールインワン UI のメリットと注意点は何ですか？
3. AnythingLLM が向かないユースケースを 1 つ挙げて理由を述べてください。


### 4.8.13.1 解説の要点

1. 主な役割は、その技術がどの工程を担い、何を改善するかで説明します。
2. メリットは再現性・拡張性・運用性の観点で整理し、注意点は導入コストや複雑性として示します。
3. 使い分けは要件、実装コスト、運用体制の3観点で判断します。
---

[← 前へ](04-ui/06-lobechat.md) | [次へ →](05-evaluation/00-README.md)







---
level: 🔰 初級（カテゴリ導入）
prereq: "-"
prev: 04-ui/07-anythingllm.md
next: 05-evaluation/01-promptfoo.md
---

# 5.1 評価・ガードレール・監視

> 🔰 初級（カテゴリ導入） | 前提: -

LLMアプリの出力品質を測定し、安全性・信頼性を確保。

## 5.1.1 位置づけ

```mermaid
flowchart LR
  A[LLMアプリ品質管理] --> B[評価/監視]
  B --> C[promptfoo]
  B --> D[Ragas]
  B --> E[Langfuse/Guardrails]
```

## 5.1.2 学習フロー

```mermaid
flowchart TD
  S[開始] --> P[promptfooで比較]
  P --> R[RagasでRAG評価]
  R --> L[Langfuseで観測]
  L --> G[Guardrailsで制約]
  G --> X[評価運用を定義]
```

## 5.1.3 含まれるOSS

- **promptfoo**: プロンプト/モデル比較評価
- **Ragas**: RAG品質の自動評価
- **Langfuse**: LLMアプリの観測性・トレーシング
- **Guardrails**: 出力検証と制約付与

## 5.1.4 学習順序

1. promptfoo (プロンプト比較)
2. Ragas (RAG品質測定)
3. Langfuse (本番モニタリング)

## 5.1.5 教材リンク

- [01-promptfoo.md](./01-promptfoo.md)
- [01_promptfoo-samples](./01_promptfoo-samples/)
- [02-ragas.md](./02-ragas.md)
- [02-ragas-python](./02-ragas-python/)
- [03-langfuse.md](./03-langfuse.md)
- [04-guardrails.md](./04-guardrails.md)
- [04_guardrails-python](./04_guardrails-python/)

## 5.1.6 完了条件

- カテゴリ内の主要OSSを3つ以上説明できる
- 最小サンプルを1件以上動作確認できる
- 選定観点（速度/運用性/拡張性）で比較メモを作成できる

---

[← 前へ](04-ui/07-anythingllm.md) | [次へ →](05-evaluation/01-promptfoo.md)





---
level: 📖 中級（概念・実践）
prereq: Python基礎 / LLMアプリの基本概念
prev: 05-evaluation/00-README.md
next: 05-evaluation/02-ragas.md
---

# 5.2 promptfoo 入門

> 📖 中級（概念・実践） | 前提: Python基礎 / LLMアプリの基本概念

---

## 5.2.1 1. 機能・役割（概要）
promptfooは、LLM（大規模言語モデル）へのプロンプト（入力文）に対する出力結果を、効率的かつ定量的に評価・比較するためのツールです。  
主な役割は、複数のプロンプトやモデルの出力品質を自動でテスト・検証し、継続的な改善や回帰テストを容易にすることです。

## 5.2.2 2. この教材で身につくこと（ゴール）

- 複数プロンプトの一括評価
- assertによる品質判定
- 回帰テストとしての運用

## 5.2.3 3. コンセプト
promptfoo は、プロンプトとモデル出力を定量比較する CLI です。
変更前後の品質差分を検知できるため、継続改善に向いています。
**バージョン**: 0.75.0+ / OSS準拠（2026-05時点）  
**公式ドキュメント**: https://www.promptfoo.dev/

## 5.2.4 4. 仕組み（全体の流れ）
promptfooは、設定ファイルで評価したいプロンプトやテストケース、判定基準（assert条件）を定義し、CLIコマンドで一括実行します。  
各プロンプトに対してモデル出力を取得し、事前に決めた基準で自動判定・比較レポートを生成します。  
これにより、プロンプトやモデルの変更による品質の変化を素早く把握できます。

### 5.2.4.1 詳細手順
1. 目的と入力を定義し、対象データや利用モデルを準備します。
2. コア処理（検索・推論・生成・検証のいずれか）を実行します。
3. 実行結果を保存または表示し、次工程に渡せる形式へ整えます。
4. パラメータを調整して挙動差分を比較し、品質を確認します。
5. 運用を想定して再実行手順と確認ポイントを定着させます。

## 5.2.5 5. 位置づけ（図解）
```mermaid
flowchart LR
  A[LLM品質評価] --> B[promptfoo]
  B --> C[Prompt回帰テスト]
  B --> D[Assert検証]
  B --> E[比較レポート]
```

## 5.2.6 6. 事前準備

このサンプルは `providers: openai:gpt-3.5-turbo` を利用するため、実行前に `OPENAI_API_KEY` の設定が必要です。

```powershell
# PowerShell（現在のセッションのみ有効）
$env:OPENAI_API_KEY = "<YOUR_OPENAI_API_KEY>"
```

`--env-file .env` を使う場合は、実行ディレクトリに `.env` を作成してから実行します。

```env
OPENAI_API_KEY=<YOUR_OPENAI_API_KEY>
```

必要に応じて、互換エンドポイントを使う場合は `OPENAI_API_BASE_URL` も設定してください。

## 5.2.7 7. 最小セットアップ

```bash
cd examples/promptfoo
npm install
npm run eval
```

## 5.2.8 8. 実行フロー

```mermaid
flowchart TD
  S[開始] --> I[npm install]
  I --> E[npm run eval]
  E --> A[assert判定]
  A --> R[結果確認]
  R --> X[終了]
```

## 5.2.9 9. 検証

- コマンドがエラーなく完了する
- 想定した出力（画面表示・ファイル生成・回答）を確認できる
- 変更した設定に応じて結果差分を説明できる

## 5.2.10 10. 主要ファイルの説明

### 5.2.10.1 JSON: examples/promptfoo/package.json

- 役割: promptfoo実行用の npm スクリプト定義
- 入力: なし
- 出力: `npm run eval` で評価実行

```json
{
  "name": "promptfoo-samples",
  "private": true,
  "version": "1.0.0",
  "engines": {
    "node": ">=20 <25"
  },
  "scripts": {
    "eval": "promptfoo eval -c 00_promptfooconfig.yaml"
  },
  "devDependencies": {
    "promptfoo": "^0.121.11"
  }
}
```

### 5.2.10.2 YAML: examples/promptfoo/00_promptfooconfig.yaml

- 役割: 評価対象プロンプト・テストケース・assert条件をまとめる設定ファイル
- 入力: `tests.vars.question`
- 出力: 評価結果（CLI実行時）

```yaml
description: Beginner prompt regression test
providers:
  - id: openai:gpt-3.5-turbo
prompts:
  - "あなたは投資学習アシスタントです。{{question}} を初心者向けに3行で説明してください。"
  - "{{question}} を中学生にもわかる言葉で2行で説明してください。"
tests:
  - vars:
      question: "RAG"
    assert:
      - type: contains
        value: "検索"
  - vars:
      question: "分散投資"
    assert:
      - type: llm-rubric
        value: "初心者向けで、専門用語に短い補足がある"
```

#### 5.2.10.2.1 assert type の意味と代表的な値一覧

promptfoo の `assert` には複数の type があり、出力の自動判定に使います。

#### 5.2.10.2.2 代表的な type

- `contains`: 出力に特定の文字列が含まれているか判定します。
  - 例: `contains: "検索"` → 出力に「検索」という語が含まれていれば合格
- `llm-rubric`: LLM自身にルーブリック（採点基準）で自己評価させます。
  - 例: `llm-rubric: "初心者向けで、専門用語に短い補足がある"`
    → LLMが基準を満たしているか自己判定し、理由とスコアを返します。

#### 5.2.10.2.3 その他の主な type（2024年5月時点）

- `equals`: 完全一致判定
- `not-contains`: 指定語が含まれていないか
- `javascript`: JS式でカスタム判定
- `python`: Python式でカスタム判定
- `regex`: 正規表現マッチ
- `llm-classify`: LLMによる分類判定
- `llm-judge`: LLMによる比較判定

詳細は公式ドキュメント: https://www.promptfoo.dev/docs/reference/asserts を参照してください。



### 5.2.10.3 実行結果（評価観点）

- 実行結果: 4テストを実行し、0 passed / 4 failed / 0 errors
- 失敗傾向1: `contains: "検索"` が未一致（RAG を投資用語として解釈する回答が出るケースあり）
- 失敗傾向2: `llm-rubric` が未達（初心者向け補足や行数制約の満たし方が不十分）

この結果から、改善の主対象は環境設定ではなく、プロンプト設計と `assert` 条件の調整です。

---

#### 5.2.10.3.1 実行結果の詳細（JSON抜粋）

実際の評価出力例：

```json
{
  "results": [
    {
      "error": "Expected output to contain '検索'",
      "response": {
        "output": "RAG（Risk, Appetite, and Goals）は、リスク、投資意欲、目標を表す投資用語です。投資家がリスクをどれだけ受け入れるか、どれだけのリスクを取るか、そしてどのような目標を持って投資を行うかを考慮する際に使用されます。投資家が自身のRAGを理解し、それに基づいて投資戦略を立てることが重要です。"
      },
      "testCase": {
        "vars": { "question": "RAG" },
        "assert": [ { "type": "contains", "value": "検索" } ]
      }
    },
    {
      "error": "初心者向けに簡潔に説明されており、『分散投資』には『複数の異なる資産に投資すること』という補足があります。ただし、『ポートフォリオ』などの専門用語には短い補足がなく、初心者にはやや分かりにくい可能性があります。",
      "response": {
        "output": "分散投資とは、複数の異なる資産に投資することです。これにより、リスクを分散しポートフォリオ全体の安定性を高めることができます。初心者にとってはリスク管理の一つの方法として有効です。"
      },
      "testCase": {
        "vars": { "question": "分散投資" },
        "assert": [ { "type": "llm-rubric", "value": "初心者向けで、専門用語に短い補足がある" } ]
      }
    }
  ]
}
```
---


## 5.2.11 演習課題

1. 比較したいプロンプトを2つ作り、どの観点で優劣を判定するか決めてください。
2. assertを1つ追加し、評価結果がどう変わるか確認してください。
3. この評価をPR前チェックに組み込む場合の手順を書き出してください。


### 5.2.11.1 解答の目安

1. まず課題の目的を一文で明確化し、入力・出力を対応づけて記述します。
   確認ポイント: 何を変えて何を確認する課題かを第三者が読んで理解できること。
2. 最小構成で一度実行し、設定や条件を1つ変更して差分を比較します。
   確認ポイント: 変更前後の挙動差を具体的に説明できること。
3. 適用条件と代替手段を整理し、選択基準を短くまとめます。
   確認ポイント: なぜその手段を選ぶかを根拠付きで示せること。

## 5.2.12 理解度チェック

1. promptfoo の主な役割を1文で説明してください。
2. assert を使う利点は何ですか？
3. 手動レビューのみと比べたときの限界は何ですか？


### 5.2.12.1 解説の要点

1. 主な役割は、その技術がどの工程を担い、何を改善するかで説明します。
2. メリットは再現性・拡張性・運用性の観点で整理し、注意点は導入コストや複雑性として示します。
3. 使い分けは要件、実装コスト、運用体制の3観点で判断します。
---

[← 前へ](05-evaluation/00-README.md) | [次へ →](05-evaluation/02-ragas.md)






---
level: 📖 中級（概念・実践）
prereq: Python基礎 / LLMアプリの基本概念
prev: 05-evaluation/01-promptfoo.md
next: 05-evaluation/03-langfuse.md
---

# 5.3 Ragas 入門

> 📖 中級（概念・実践） | 前提: Python基礎 / LLMアプリの基本概念

---

## 5.3.1 1. 機能・役割（概要）
Ragasは、RAG（検索拡張生成）やAIエージェントの出力品質を、実験ベースで定量評価・比較できるOSSライブラリです。  
主な役割は、faithfulnessやanswer relevancyなど多様な指標で品質を可視化し、継続的な改善ループを実現することです。

## 5.3.2 2. この教材で身につくこと（ゴール）

- 評価データセットの作成
- RAG指標（faithfulness, relevancy等）の測定
- before/afterのスコア比較
- 実験ループの構築

## 5.3.3 3. コンセプト
Ragasは「実験ファースト」な評価設計を推奨し、手動評価の限界を克服。  
カスタム指標や豊富な既存指標、LangChain/LlamaIndex等との連携も容易です。  
**バージョン**: 0.1.0+ / OSS準拠（2026-05時点）  
**公式ドキュメント**: https://docs.ragas.io/

## 5.3.4 4. 仕組み（全体の流れ）
- データセット・指標・実験単位で評価設計
- コア関数（evaluate）で一括スコア算出
- before/after比較やカスタム指標追加も容易

### 5.3.4.1 詳細手順
1. 目的と入力を定義し、対象データや利用モデルを準備
2. コア処理（検索・推論・生成・検証）を実行
3. 実行結果を保存・表示し、次工程に渡せる形式へ整形
4. パラメータ調整で挙動差分を比較し、品質を確認
5. 運用を想定して再実行手順と確認ポイントを定着

## 5.3.5 5. 位置づけ（図解）
```mermaid
flowchart LR
  A[RAG評価] --> B[Ragas]
  B --> C[faithfulness]
  B --> D[answer relevancy]
  B --> E[改善前後比較]
```

## 5.3.6 6. 事前準備

- Python環境
- 必要パッケージ（ragas, datasets, pandas, langchain-openai, python-dotenv）

### 5.3.6.1 requirements.txt
```txt
ragas==0.1.10
datasets==2.19.1
pandas==2.2.2
langchain-openai==0.1.0
python-dotenv==1.0.0
```

## 5.3.7 7. 最小セットアップ

```bash
# 仮想環境作成・パッケージインストール
python -m venv .venv
source .venv/bin/activate  # Windowsは .venv\Scripts\activate
pip install -r requirements.txt
```

## 5.3.8 8. 実行フロー

```mermaid
flowchart TD
  S[開始] --> D[評価データ作成]
  D --> E[evaluate実行]
  E --> M[指標出力]
  M --> C[before/after比較]
  C --> X[終了]
```

## 5.3.9 9. 検証

- コマンドがエラーなく完了する
- 想定した出力（スコア・比較表）を確認できる
- 設定変更による差分を説明できる

## 5.3.10 10. 主要ファイルの説明

### 5.3.10.1 01_basic-ragas-eval.py
基本的なRAG評価例。faithfulness, answer relevancyの2指標でスコアを算出。
```python
"""Ragas basic evaluation example."""
from dotenv import load_dotenv
from datasets import Dataset
from ragas import evaluate
from ragas.metrics import faithfulness, answer_relevancy

load_dotenv()

## 実行
    data = {
        "question": [
            "RAGとは何ですか?",
            "分散投資の基本を教えて",
        ],
        "answer": [
            "RAGは検索で見つけた情報を使って回答を作る手法です。",
            "分散投資は資産を複数に分けてリスクを下げる考え方です。",
        ],
        "contexts": [
            ["RAGはRetrieval-Augmented Generationの略で、検索結果を生成時に参照する。"],
            ["分散投資は複数資産へ配分して価格変動リスクを抑える。"],
        ],
        "ground_truth": [
            "RAGは検索結果を参照して回答精度を上げる手法。",
            "分散投資は資産配分でリスクを軽減する。",
        ],
    }
    return Dataset.from_dict(data)

```bash
    dataset = build_dataset()
    result = evaluate(
        dataset,
        metrics=[faithfulness, answer_relevancy],
    )
    print("Ragas scores")
    print(result)

if __name__ == "__main__":
    main()
```

### 02_compare-runs.py
before/afterのスコア比較例。pandasで差分を算出。
```python
"""Compare two dummy RAG runs by simple table output."""
import pandas as pd

cd 02-ragas-python
    before = pd.DataFrame(
        {
            "metric": ["faithfulness", "answer_relevancy"],
            "score": [0.71, 0.68],
        }
    )
    after = pd.DataFrame(
        {
            "metric": ["faithfulness", "answer_relevancy"],
            "score": [0.80, 0.77],
        }
    )
    merged = before.merge(after, on="metric", suffixes=("_before", "_after"))
    merged["delta"] = merged["score_after"] - merged["score_before"]
    print("Comparison")
    print(merged.to_string(index=False))

if __name__ == "__main__":
    main()
```
pip install -r 00_requirements.txt
python 01_basic-ragas-eval.py
```

## 5.3.11 演習課題

1. ``Ragas 入門`` を使う想定ユースケースを1つ定義し、入力・出力の例を記録してください。
2. 最小構成で動かし、デフォルトから設定を1つ変えて挙動の差分を確認してください。
3. ``Ragas 入門`` を使わない場合の代替手段と比較し、選ぶ基準をまとめてください。


### 5.3.11.1 解答の目安

1. まず課題の目的を一文で明確化し、入力・出力を対応づけて記述します。
   確認ポイント: 何を変えて何を確認する課題かを第三者が読んで理解できること。
2. 最小構成で一度実行し、設定や条件を1つ変更して差分を比較します。
   確認ポイント: 変更前後の挙動差を具体的に説明できること。
3. 適用条件と代替手段を整理し、選択基準を短くまとめます。
   確認ポイント: なぜその手段を選ぶかを根拠付きで示せること。

## 5.3.12 理解度チェック

1. ``Ragas 入門`` の主な役割を1文で説明してください。
2. ``Ragas 入門`` を導入する際の最大のメリットと注意点は何ですか？
3. ``Ragas 入門`` が向かないユースケースとして、どのようなケースが考えられますか？


### 5.3.12.1 解説の要点

1. 主な役割は、その技術がどの工程を担い、何を改善するかで説明します。
2. メリットは再現性・拡張性・運用性の観点で整理し、注意点は導入コストや複雑性として示します。
3. 使い分けは要件、実装コスト、運用体制の3観点で判断します。
---

[← 前へ](05-evaluation/01-promptfoo.md) | [次へ →](05-evaluation/03-langfuse.md)







---
level: 📖 中級（概念・実践）
prereq: Python基礎 / LLMアプリの基本概念
prev: 05-evaluation/02-ragas.md
next: 05-evaluation/04-guardrails.md
---


# 5.4 Langfuse 入門

> 📖 中級（概念・実践） | 前提: Python基礎 / LLMアプリの基本概念

---

## 5.4.1 1. 機能・役割（概要）
Langfuseは、LLMアプリの「観測・評価・実験・プロンプト管理」を一体化したOSSプラットフォームです。  
主な役割は、トレース収集・評価・コスト監視・プロンプト管理などを統合し、継続的な品質改善と運用監視を実現することです。

## 5.4.2 2. この教材で身につくこと（ゴール）

- プロンプト/応答のトレース
- 実行単位の評価記録
- モデル利用コスト把握
- 本番運用の品質監視・改善ループ構築

## 5.4.3 3. コンセプト
Langfuseは「OTel準拠・80+統合・エンタープライズ対応」のLLM観測基盤。  
トレース・評価・プロンプト管理・コスト監視・実験・アノテーションを一体化。  
**バージョン**: 2.0.0+ / OSS準拠（2026-05時点）  
**公式ドキュメント**: https://langfuse.com/

## 5.4.4 4. 仕組み（全体の流れ）
- SDKやAPIでアプリからトレース・評価データを送信
- Web UIで可視化・分析・実験
- before/after比較やプロンプト管理も容易

### 5.4.4.1 詳細手順
1. 目的と入力を定義し、対象データや利用モデルを準備
2. コア処理（検索・推論・生成・検証）を実行
3. 実行結果を保存・表示し、次工程に渡せる形式へ整形
4. パラメータ調整で挙動差分を比較し、品質を確認
5. 運用を想定して再実行手順と確認ポイントを定着

## 5.4.5 5. 位置づけ（図解）
```mermaid
flowchart LR
  A[LLM観測基盤] --> B[Langfuse]
  B --> C[Trace収集]
  B --> D[評価スコア保存]
  B --> E[コスト可視化]
```

## 5.4.6 6. 事前準備

- Docker環境（セルフホストの場合）
- langfuse公式イメージ利用

### 5.4.6.1 docker-compose.yml
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

## 5.4.7 7. 最小セットアップ

```bash
docker-compose up -d
# ブラウザで http://localhost:3002 にアクセス
```

## 5.4.8 8. 実行フロー

```mermaid
flowchart TD
  S[開始] --> U[docker-compose up -d]
  U --> W[http://localhost:3002]
  W --> P[Project作成]
  P --> K[APIキー発行]
  K --> X[アプリ連携]
```

## 5.4.9 9. 検証

- コマンドがエラーなく完了する
- 想定した出力（画面表示・ファイル生成・回答）を確認できる
- 変更した設定に応じて結果差分を説明できる

## 5.4.10 10. 主要ファイルの説明

### 5.4.10.1 01_setup-guide.md
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

## 5.4.11 演習課題

1. ``Langfuse 入門`` を使う想定ユースケースを1つ定義し、入力・出力の例を記録してください。
2. 最小構成で動かし、デフォルトから設定を1つ変えて挙動の差分を確認してください。
3. ``Langfuse 入門`` を使わない場合の代替手段と比較し、選ぶ基準をまとめてください。


### 5.4.11.1 解答の目安

1. まず課題の目的を一文で明確化し、入力・出力を対応づけて記述します。
   確認ポイント: 何を変えて何を確認する課題かを第三者が読んで理解できること。
2. 最小構成で一度実行し、設定や条件を1つ変更して差分を比較します。
   確認ポイント: 変更前後の挙動差を具体的に説明できること。
3. 適用条件と代替手段を整理し、選択基準を短くまとめます。
   確認ポイント: なぜその手段を選ぶかを根拠付きで示せること。

## 5.4.12 理解度チェック

1. ``Langfuse 入門`` の主な役割を1文で説明してください。
2. ``Langfuse 入門`` を導入する際の最大のメリットと注意点は何ですか？
3. ``Langfuse 入門`` が向かないユースケースとして、どのようなケースが考えられますか？


### 5.4.12.1 解説の要点

1. 主な役割は、その技術がどの工程を担い、何を改善するかで説明します。
2. メリットは再現性・拡張性・運用性の観点で整理し、注意点は導入コストや複雑性として示します。
3. 使い分けは要件、実装コスト、運用体制の3観点で判断します。
---

[← 前へ](05-evaluation/02-ragas.md) | [次へ →](05-evaluation/04-guardrails.md)







---
level: 📖 中級（概念・実践）
prereq: Python基礎 / LLMアプリの基本概念
prev: 05-evaluation/03-langfuse.md
next: 06-multimodal/00-README.md
---

# 5.5 Guardrails 入門

> 📖 中級（概念・実践） | 前提: Python基礎 / LLMアプリの基本概念

---

## 5.5.1 1. 機能・役割（概要）
Guardrailsは、AI信頼性プラットフォームとして、LLM出力の安全性・信頼性・形式品質を高めるOSS/クラウド対応のツール群です。  
主な役割は、スキーマ検証・ルール検証・リスク検知・合成データ生成・ランタイムガードなどを通じて、AI出力の品質と運用リスクを制御することです。

## 5.5.2 2. この教材で身につくこと（ゴール）

- JSONスキーマ検証
- 不正出力の再生成
- 禁止語・形式違反の検知
- シナリオ自動生成・リスク評価

## 5.5.3 3. コンセプト
Guardrailsは「AI信頼性プラットフォーム」として、合成データ生成・エッジケース検出・出力ガード（ポリシー違反・幻覚・漏洩検知）を提供。  
**バージョン**: 0.5.0+ / OSS準拠（2026-05時点）  
**公式ドキュメント**: https://docs.guardrailsai.com/

## 5.5.4 4. 仕組み（全体の流れ）
- スキーマ・ルール・ポリシーを定義し、AI出力を自動検証
- 合成データやシナリオ生成でリスク検知・評価
- ランタイムガードで本番出力を制御

### 5.5.4.1 詳細手順
1. 目的と入力を定義し、対象データや利用モデルを準備
2. コア処理（検証・再生成・リスク評価）を実行
3. 実行結果を保存・表示し、次工程に渡せる形式へ整形
4. パラメータ調整で挙動差分を比較し、品質を確認
5. 運用を想定して再実行手順と確認ポイントを定着

## 5.5.5 5. 位置づけ（図解）
```mermaid
flowchart LR
  A[出力品質制御] --> B[Guardrails]
  B --> C[Schema検証]
  B --> D[形式チェック]
  B --> E[不正出力検知]
```

## 5.5.6 6. 事前準備

- Python環境
- 必要パッケージ（guardrails-ai, python-dotenv, pydantic）

### 5.5.6.1 requirements.txt
```txt
guardrails-ai==0.5.1
python-dotenv==1.0.0
pydantic==2.7.1
```

## 5.5.7 7. 最小セットアップ

```bash
python -m venv .venv
source .venv/bin/activate  # Windowsは .venv\Scripts\activate
pip install -r requirements.txt
```

## 5.5.8 8. 実行フロー

```mermaid
flowchart TD
  S[開始] --> J[JSONバリデーション]
  J --> O[出力フォーマット確認]
  O --> R[違反結果確認]
  R --> X[終了]
```

## 5.5.9 9. 検証

- コマンドがエラーなく完了する
- 想定した出力（画面表示・ファイル生成・回答）を確認できる
- 変更した設定に応じて結果差分を説明できる

## 5.5.10 10. 主要ファイルの説明

### 5.5.10.1 01_basic-validation.py
Guardrailsによる基本的なJSONスキーマ検証例。
```python
"""Guardrails basic JSON validation demo."""
from pydantic import BaseModel, Field

class StockAdvice(BaseModel):
	symbol: str = Field(min_length=1)
	recommendation: str = Field(pattern="^(buy|hold|sell)$")
	reason: str = Field(min_length=5)

## 演習課題
	parsed = StockAdvice.model_validate(payload)
	print("Validated:", parsed.model_dump())


	good = {
		"symbol": "7203",
		"recommendation": "hold",
		"reason": "業績は堅調だが短期では材料不足",
	}
	bad = {
		"symbol": "",
		"recommendation": "strong-buy",
		"reason": "短い",
	}
	validate_payload(good)
	try:
		validate_payload(bad)
	except Exception as exc:
		print("Validation error:", exc)

if __name__ == "__main__":
	main()
```

### 5.5.10.2 02_output-format-check.py
出力フォーマット（JSON構造）チェック例。
```python
"""Simple output format check for LLM text."""
import json

1. ``Guardrails 入門`` を使う想定ユースケースを1つ定義し、入力・出力の例を記録してください。
	try:
		obj = json.loads(text)
		required = {"symbol", "recommendation", "reason"}
		return required.issubset(set(obj.keys()))
	except Exception:
		return False

2. 最小構成で動かし、デフォルトから設定を1つ変えて挙動の差分を確認してください。
	ok = '{"symbol":"AAPL","recommendation":"buy","reason":"成長率が高い"}'
	ng = "AAPL is good"
	print("ok result:", check_json_output(ok))
	print("ng result:", check_json_output(ng))

if __name__ == "__main__":
	main()
```
3. ``Guardrails 入門`` を使わない場合の代替手段と比較し、選ぶ基準をまとめてください。


### 5.5.10.3 解答の目安

1. まず課題の目的を一文で明確化し、入力・出力を対応づけて記述します。
   確認ポイント: 何を変えて何を確認する課題かを第三者が読んで理解できること。
2. 最小構成で一度実行し、設定や条件を1つ変更して差分を比較します。
   確認ポイント: 変更前後の挙動差を具体的に説明できること。
3. 適用条件と代替手段を整理し、選択基準を短くまとめます。
   確認ポイント: なぜその手段を選ぶかを根拠付きで示せること。

## 5.5.11 理解度チェック

1. ``Guardrails 入門`` の主な役割を1文で説明してください。
2. ``Guardrails 入門`` を導入する際の最大のメリットと注意点は何ですか？
3. ``Guardrails 入門`` が向かないユースケースとして、どのようなケースが考えられますか？


### 5.5.11.1 解説の要点

1. 主な役割は、その技術がどの工程を担い、何を改善するかで説明します。
2. メリットは再現性・拡張性・運用性の観点で整理し、注意点は導入コストや複雑性として示します。
3. 使い分けは要件、実装コスト、運用体制の3観点で判断します。
---

[← 前へ](05-evaluation/03-langfuse.md) | [次へ →](06-multimodal/00-README.md)







---
level: 🔰 初級（カテゴリ導入）
prereq: "-"
prev: 05-evaluation/04-guardrails.md
next: 06-multimodal/01-whisper.md
---

# 6.1 マルチモーダル（音声・画像）

> 🔰 初級（カテゴリ導入） | 前提: -

音声認識や音声合成など、テキスト以外の入出力を扱う教材です。

## 6.1.1 位置づけ

```mermaid
flowchart LR
  A[マルチモーダル応用] --> B[音声/画像OSS]
  B --> C[Whisper/Piper/Coqui]
  B --> D[ComfyUI/A1111]
  B --> E[InvokeAI/Fooocus]
```

## 6.1.2 学習フロー

```mermaid
flowchart TD
  S[開始] --> W[Whisperで音声認識]
  W --> P[PiperでTTS]
  P --> C[ComfyUI/A1111で画像生成]
  C --> I[InvokeAI/Fooocusで運用UI]
  I --> T[Coquiで拡張]
```

## 6.1.3 含まれるOSS

- **Whisper**: 音声認識（Speech-to-Text）
- **Piper**: 音声合成（Text-to-Speech）
- **ComfyUI**: ノードベース画像生成
- **AUTOMATIC1111**: Stable Diffusion Web UI
- **InvokeAI**: 実務向け画像生成UI
- **Fooocus**: 使いやすさ重視の画像生成UI
- **Coqui TTS**: 音声合成フレームワーク

## 6.1.4 学習順序

1. Whisper（音声認識）
2. Piper（軽量TTS）
3. ComfyUI（ワークフロー型画像生成）
4. AUTOMATIC1111（画像生成API）
5. InvokeAI / Fooocus（用途別UI）
6. Coqui TTS（TTS拡張）

## 6.1.5 教材リンク

- [01-whisper.md](./01-whisper.md)
- [01_whisper-python](./01_whisper-python/)
- [02-piper.md](./02-piper.md)
- [03-comfyui.md](./03-comfyui.md)
- [03_comfyui-python](./03_comfyui-python/)
- [04-automatic1111.md](./04-automatic1111.md)
- [04_automatic1111-python](./04_automatic1111-python/)
- [05-invokeai.md](./05-invokeai.md)
- [06-fooocus.md](./06-fooocus.md)
- [07-coqui-tts.md](./07-coqui-tts.md)

## 6.1.6 完了条件

- カテゴリ内の主要OSSを3つ以上説明できる
- 最小サンプルを1件以上動作確認できる
- 選定観点（速度/運用性/拡張性）で比較メモを作成できる

---

[← 前へ](05-evaluation/04-guardrails.md) | [次へ →](06-multimodal/01-whisper.md)





---
level: 📖 中級（概念・実践）
prereq: Python基礎 / LLMアプリの基本概念
prev: 06-multimodal/00-README.md
next: 06-multimodal/02-piper.md
---

# 6.2 Whisper 入門

> 📖 中級（概念・実践） | 前提: Python基礎 / LLMアプリの基本概念

## 6.2.1 この教材で身につくこと

- 音声ファイルの文字起こし
- 言語推定
- セグメントごとの時刻情報取得

## 6.2.2 コンセプト
Whisper は音声をテキストへ変換する OSS モデルです。会議録、動画字幕、音声ログ解析に使えます。

**バージョン**: 2026-05時点 / OSS準拠  
**公式ドキュメント**: https://github.com/openai/whisper

## 6.2.3 仕組み

1. 目的と入力を定義し、対象データや利用モデルを準備します。
2. コア処理（検索・推論・生成・検証のいずれか）を実行します。
3. 実行結果を保存または表示し、次工程に渡せる形式へ整えます。
4. パラメータを調整して挙動差分を比較し、品質を確認します。
5. 運用を想定して再実行手順と確認ポイントを定着させます。
## 6.2.4 位置づけ

```mermaid
flowchart LR
	A[音声処理] --> B[Whisper]
	B --> C[文字起こし]
	B --> D[言語判定]
	B --> E[セグメント抽出]
```

## 6.2.5 実行フロー

```mermaid
flowchart TD
	S[開始] --> I[pip install -r requirements]
	I --> T[transcribe実行]
	T --> G[言語/全文表示]
	G --> M[segment出力実行]
	M --> X[終了]
```

## 6.2.6 サンプル

### 6.2.6.1 実行例

```bash
# この教材の最小構成を順に実行
# 具体的なコマンドは「最小セットアップ」または「実行フロー」を参照
```

### 6.2.6.2 検証

- コマンドがエラーなく完了する
- 想定した出力（画面表示・ファイル生成・回答）を確認できる
- 変更した設定に応じて結果差分を説明できる

## 6.2.7 実ソースコード（言語別に記載）
### 6.2.7.1 00_requirements.txt

```txt
openai-whisper==20231117
torch==2.2.2
```

### 6.2.7.2 01_transcribe-file.py

```python
"""Whisper file transcription demo.
Usage: python 01_transcribe-file.py sample.wav
"""

import argparse
import whisper


def main() -> None:
	parser = argparse.ArgumentParser()
	parser.add_argument("audio_path", help="Path to audio file")
	parser.add_argument("--model", default="base", help="Whisper model size")
	args = parser.parse_args()

	model = whisper.load_model(args.model)
	result = model.transcribe(args.audio_path, fp16=False)

	print("Language:", result.get("language"))
	print("\nText:")
	print(result.get("text", ""))


if __name__ == "__main__":
	main()
```

### 6.2.7.3 02_segments.py

```python
"""Whisper segment-level output demo.
Usage: python 02_segments.py sample.wav
"""

import argparse
import whisper


def main() -> None:
	parser = argparse.ArgumentParser()
	parser.add_argument("audio_path")
	args = parser.parse_args()

	model = whisper.load_model("base")
	result = model.transcribe(args.audio_path, fp16=False)

	for seg in result.get("segments", []):
		start = seg.get("start", 0.0)
		end = seg.get("end", 0.0)
		text = seg.get("text", "").strip()
		print(f"[{start:6.2f}-{end:6.2f}] {text}")


if __name__ == "__main__":
	main()
```

## 6.2.8 実行
```bash
cd 01_whisper-python
pip install -r 00_requirements.txt
python 01_transcribe-file.py sample.wav
```

## 6.2.9 演習課題

1. ``Whisper 入門`` を使う想定ユースケースを1つ定義し、入力・出力の例を記録してください。
2. 最小構成で動かし、デフォルトから設定を1つ変えて挙動の差分を確認してください。
3. ``Whisper 入門`` を使わない場合の代替手段と比較し、選ぶ基準をまとめてください。


### 6.2.9.1 解答の目安

1. まず課題の目的を一文で明確化し、入力・出力を対応づけて記述します。
   確認ポイント: 何を変えて何を確認する課題かを第三者が読んで理解できること。
2. 最小構成で一度実行し、設定や条件を1つ変更して差分を比較します。
   確認ポイント: 変更前後の挙動差を具体的に説明できること。
3. 適用条件と代替手段を整理し、選択基準を短くまとめます。
   確認ポイント: なぜその手段を選ぶかを根拠付きで示せること。

## 6.2.10 理解度チェック

1. ``Whisper 入門`` の主な役割を1文で説明してください。
2. ``Whisper 入門`` を導入する際の最大のメリットと注意点は何ですか？
3. ``Whisper 入門`` が向かないユースケースとして、どのようなケースが考えられますか？


### 6.2.10.1 解説の要点

1. 主な役割は、その技術がどの工程を担い、何を改善するかで説明します。
2. メリットは再現性・拡張性・運用性の観点で整理し、注意点は導入コストや複雑性として示します。
3. 使い分けは要件、実装コスト、運用体制の3観点で判断します。
---

[← 前へ](06-multimodal/00-README.md) | [次へ →](06-multimodal/02-piper.md)







---
level: 📖 中級（概念・実践）
prereq: Python基礎 / LLMアプリの基本概念
prev: 06-multimodal/01-whisper.md
next: 06-multimodal/03-comfyui.md
---

# 6.3 Piper 入門

> 📖 中級（概念・実践） | 前提: Python基礎 / LLMアプリの基本概念

## 6.3.1 この教材で身につくこと

- 日本語/英語などの読み上げ
- 低遅延なローカル音声生成
- オフライン運用

## 6.3.2 コンセプト
Piper は軽量なTTS（Text-to-Speech）エンジンです。ローカルで高速に音声合成できます。
**バージョン**: 2026-05時点 / OSS準拠  
**公式ドキュメント**: https://github.com/rhasspy/piper
## 6.3.3 仕組み

1. 目的と入力を定義し、対象データや利用モデルを準備します。
2. コア処理（検索・推論・生成・検証のいずれか）を実行します。
3. 実行結果を保存または表示し、次工程に渡せる形式へ整えます。
4. パラメータを調整して挙動差分を比較し、品質を確認します。
5. 運用を想定して再実行手順と確認ポイントを定着させます。
## 6.3.4 位置づけ

```mermaid
flowchart LR
	A[音声合成] --> B[Piper]
	B --> C[軽量TTS]
	B --> D[オフライン実行]
	B --> E[CLI生成]
```

## 6.3.5 実行フロー

```mermaid
flowchart TD
	S[開始] --> I[pip install piper-tts]
	I --> T[piper CLI実行]
	T --> W[out.wav生成]
	W --> X[再生確認]
```

## 6.3.6 サンプル

### 6.3.6.1 実行例

```bash
# この教材の最小構成を順に実行
# 具体的なコマンドは「最小セットアップ」または「実行フロー」を参照
```

### 6.3.6.2 検証

- コマンドがエラーなく完了する
- 想定した出力（画面表示・ファイル生成・回答）を確認できる
- 変更した設定に応じて結果差分を説明できる

## 6.3.7 実ソースコード（言語別に記載）
### 6.3.7.1 00_setup-guide.md

```text
# Piper セットアップガイド

## 前提条件
- Python 3.10+
- 音声出力環境

## インストール（例）
pip install piper-tts

## 音声合成（CLI例）
piper --model ja_JP-kokoro-medium.onnx --output_file out.wav --text "こんにちは。Piperのテストです。"

## 再生
OS標準プレイヤーで out.wav を再生します。
```

## 6.3.8 演習課題

1. ``Piper 入門`` を使う想定ユースケースを1つ定義し、入力・出力の例を記録してください。
2. 最小構成で動かし、デフォルトから設定を1つ変えて挙動の差分を確認してください。
3. ``Piper 入門`` を使わない場合の代替手段と比較し、選ぶ基準をまとめてください。


### 6.3.8.1 解答の目安

1. まず課題の目的を一文で明確化し、入力・出力を対応づけて記述します。
   確認ポイント: 何を変えて何を確認する課題かを第三者が読んで理解できること。
2. 最小構成で一度実行し、設定や条件を1つ変更して差分を比較します。
   確認ポイント: 変更前後の挙動差を具体的に説明できること。
3. 適用条件と代替手段を整理し、選択基準を短くまとめます。
   確認ポイント: なぜその手段を選ぶかを根拠付きで示せること。

## 6.3.9 理解度チェック

1. ``Piper 入門`` の主な役割を1文で説明してください。
2. ``Piper 入門`` を導入する際の最大のメリットと注意点は何ですか？
3. ``Piper 入門`` が向かないユースケースとして、どのようなケースが考えられますか？


### 6.3.9.1 解説の要点

1. 主な役割は、その技術がどの工程を担い、何を改善するかで説明します。
2. メリットは再現性・拡張性・運用性の観点で整理し、注意点は導入コストや複雑性として示します。
3. 使い分けは要件、実装コスト、運用体制の3観点で判断します。
---

[← 前へ](06-multimodal/01-whisper.md) | [次へ →](06-multimodal/03-comfyui.md)







---
level: 📖 中級（概念・実践）
prereq: Python基礎 / LLMアプリの基本概念
prev: 06-multimodal/02-piper.md
next: 06-multimodal/04-automatic1111.md
---

# 6.4 ComfyUI 入門

> 📖 中級（概念・実践） | 前提: Python基礎 / LLMアプリの基本概念

## 6.4.1 この教材で身につくこと

- ノード接続による画像生成フロー作成
- ControlNet や LoRA 連携
- API経由での自動実行

## 6.4.2 コンセプト
ComfyUI はノードベースで Stable Diffusion ワークフローを構築できるツールです。生成工程を可視化しながら細かく制御できます。

**バージョン**: 最新版 / OSS準拠（2026-05時点）  
**公式ドキュメント**: https://github.com/comfyanonymous/ComfyUI

## 6.4.3 仕組み

1. 目的と入力を定義し、対象データや利用モデルを準備します。
2. コア処理（検索・推論・生成・検証のいずれか）を実行します。
3. 実行結果を保存または表示し、次工程に渡せる形式へ整えます。
4. パラメータを調整して挙動差分を比較し、品質を確認します。
5. 運用を想定して再実行手順と確認ポイントを定着させます。
## 6.4.4 位置づけ

```mermaid
flowchart LR
	A[画像生成ワークフロー] --> B[ComfyUI]
	B --> C[ノード設計]
	B --> D[APIキュー投入]
	B --> E[出力保存]
```

## 6.4.5 実行フロー

```mermaid
flowchart TD
	S[開始] --> G[ComfyUI起動]
	G --> W[workflow生成]
	W --> Q[prompt APIへPOST]
	Q --> J[ジョブID確認]
	J --> X[画像生成完了]
```

## 6.4.6 サンプル

### 6.4.6.1 実行例

```bash
# この教材の最小構成を順に実行
# 具体的なコマンドは「最小セットアップ」または「実行フロー」を参照
```

### 6.4.6.2 検証

- コマンドがエラーなく完了する
- 想定した出力（画面表示・ファイル生成・回答）を確認できる
- 変更した設定に応じて結果差分を説明できる

## 6.4.7 実ソースコード（言語別に記載）
### 6.4.7.1 セットアップ手順（最小）

```text
# ComfyUI セットアップガイド

## 概要
git clone https://github.com/comfyanonymous/ComfyUI.git
cd ComfyUI

## 詳細
pip install -r requirements.txt

## 前提条件
python main.py

## アクセス
- http://127.0.0.1:8188
```

### 6.4.7.2 03_comfyui-python/00_requirements.txt

```txt
requests==2.32.3
```

### 6.4.7.3 03_comfyui-python/01_queue-prompt.py

```python
"""ComfyUI API prompt queue sample.

Run ComfyUI first, then execute:
python 01_queue-prompt.py
"""

import json
import uuid
import requests

COMFYUI_URL = "http://127.0.0.1:8188"


def build_minimal_workflow(prompt: str) -> dict:
	return {
		"3": {
			"class_type": "KSampler",
			"inputs": {
				"seed": 1,
				"steps": 20,
				"cfg": 8,
				"sampler_name": "euler",
				"scheduler": "normal",
				"denoise": 1,
				"model": ["4", 0],
				"positive": ["6", 0],
				"negative": ["7", 0],
				"latent_image": ["5", 0],
			},
		},
		"4": {
			"class_type": "CheckpointLoaderSimple",
			"inputs": {"ckpt_name": "v1-5-pruned-emaonly.ckpt"},
		},
		"5": {
			"class_type": "EmptyLatentImage",
			"inputs": {"width": 512, "height": 512, "batch_size": 1},
		},
		"6": {"class_type": "CLIPTextEncode", "inputs": {"text": prompt, "clip": ["4", 1]}},
		"7": {
			"class_type": "CLIPTextEncode",
			"inputs": {"text": "low quality", "clip": ["4", 1]},
		},
		"8": {"class_type": "VAEDecode", "inputs": {"samples": ["3", 0], "vae": ["4", 2]}},
		"9": {
			"class_type": "SaveImage",
			"inputs": {"filename_prefix": "tutorial", "images": ["8", 0]},
		},
	}


def main() -> None:
	workflow = build_minimal_workflow("a futuristic city at sunset")
	payload = {"prompt": workflow, "client_id": str(uuid.uuid4())}

	res = requests.post(f"{COMFYUI_URL}/prompt", json=payload, timeout=30)
	res.raise_for_status()

	print("Queued prompt:")
	print(json.dumps(res.json(), indent=2))


if __name__ == "__main__":
	main()
```

## 6.4.8 演習課題

1. ``ComfyUI 入門`` を使う想定ユースケースを1つ定義し、入力・出力の例を記録してください。
2. 最小構成で動かし、デフォルトから設定を1つ変えて挙動の差分を確認してください。
3. ``ComfyUI 入門`` を使わない場合の代替手段と比較し、選ぶ基準をまとめてください。


### 6.4.8.1 解答の目安

1. まず課題の目的を一文で明確化し、入力・出力を対応づけて記述します。
   確認ポイント: 何を変えて何を確認する課題かを第三者が読んで理解できること。
2. 最小構成で一度実行し、設定や条件を1つ変更して差分を比較します。
   確認ポイント: 変更前後の挙動差を具体的に説明できること。
3. 適用条件と代替手段を整理し、選択基準を短くまとめます。
   確認ポイント: なぜその手段を選ぶかを根拠付きで示せること。

## 6.4.9 理解度チェック

1. ``ComfyUI 入門`` の主な役割を1文で説明してください。
2. ``ComfyUI 入門`` を導入する際の最大のメリットと注意点は何ですか？
3. ``ComfyUI 入門`` が向かないユースケースとして、どのようなケースが考えられますか？


### 6.4.9.1 解説の要点

1. 主な役割は、その技術がどの工程を担い、何を改善するかで説明します。
2. メリットは再現性・拡張性・運用性の観点で整理し、注意点は導入コストや複雑性として示します。
3. 使い分けは要件、実装コスト、運用体制の3観点で判断します。
---

[← 前へ](06-multimodal/02-piper.md) | [次へ →](06-multimodal/04-automatic1111.md)








---
level: 📖 中級（概念・実践）
prereq: Python基礎 / LLMアプリの基本概念
prev: 06-multimodal/03-comfyui.md
next: 06-multimodal/05-invokeai.md
---

# 6.5 AUTOMATIC1111 入門

> 📖 中級（概念・実践） | 前提: Python基礎 / LLMアプリの基本概念

## 6.5.1 この教材で身につくこと

- txt2img / img2img
- 拡張機能導入
- REST API 呼び出し

## 6.5.2 コンセプト
AUTOMATIC1111 は Stable Diffusion Web UI の定番実装です。UIでの試行錯誤と API 自動化の両方に向いています。
**バージョン**: 最新版 / OSS準拠（2026-05時点）  
**公式ドキュメント**: https://github.com/AUTOMATIC1111/stable-diffusion-webui
## 6.5.3 仕組み

1. 目的と入力を定義し、対象データや利用モデルを準備します。
2. コア処理（検索・推論・生成・検証のいずれか）を実行します。
3. 実行結果を保存または表示し、次工程に渡せる形式へ整えます。
4. パラメータを調整して挙動差分を比較し、品質を確認します。
5. 運用を想定して再実行手順と確認ポイントを定着させます。
## 6.5.4 位置づけ

```mermaid
flowchart LR
	A[Stable Diffusion運用] --> B[AUTOMATIC1111]
	B --> C[WebUI試行]
	B --> D[txt2img API]
	B --> E[拡張導入]
```

## 6.5.5 実行フロー

```mermaid
flowchart TD
	S[開始] --> G[リポジトリ取得]
	G --> U[WebUI起動]
	U --> A[apiオプション有効化]
	A --> T[txt2img呼び出し]
	T --> X[output.png保存]
```

## 6.5.6 サンプル

### 6.5.6.1 実行例

```bash
# この教材の最小構成を順に実行
# 具体的なコマンドは「最小セットアップ」または「実行フロー」を参照
```

### 6.5.6.2 検証

- コマンドがエラーなく完了する
- 想定した出力（画面表示・ファイル生成・回答）を確認できる
- 変更した設定に応じて結果差分を説明できる

## 6.5.7 実ソースコード（言語別に記載）
### 6.5.7.1 セットアップ手順（最小）

```text
# AUTOMATIC1111 セットアップガイド

## 概要
git clone https://github.com/AUTOMATIC1111/stable-diffusion-webui.git
cd stable-diffusion-webui

## 詳細
./webui.sh

Windows は webui-user.bat を使用します。

## 前提条件
起動オプションに --api を追加します。
```

### 6.5.7.2 04_automatic1111-python/00_requirements.txt

```txt
requests==2.32.3
```

### 6.5.7.3 04_automatic1111-python/01_txt2img.py

```python
"""AUTOMATIC1111 txt2img API sample.

Start webui with --api and run:
python 01_txt2img.py
"""

import base64
from pathlib import Path
import requests

WEBUI_URL = "http://127.0.0.1:7860"


def main() -> None:
	payload = {
		"prompt": "a watercolor painting of Mt. Fuji",
		"negative_prompt": "low quality, blurry",
		"steps": 20,
		"width": 512,
		"height": 512,
	}

	res = requests.post(f"{WEBUI_URL}/sdapi/v1/txt2img", json=payload, timeout=120)
	res.raise_for_status()

	data = res.json()
	images = data.get("images", [])
	if not images:
		raise RuntimeError("No images returned")

	img_bytes = base64.b64decode(images[0])
	out = Path("output.png")
	out.write_bytes(img_bytes)
	print(f"Saved: {out.resolve()}")


if __name__ == "__main__":
	main()
```

## 6.5.8 演習課題

1. ``AUTOMATIC1111 入門`` を使う想定ユースケースを1つ定義し、入力・出力の例を記録してください。
2. 最小構成で動かし、デフォルトから設定を1つ変えて挙動の差分を確認してください。
3. ``AUTOMATIC1111 入門`` を使わない場合の代替手段と比較し、選ぶ基準をまとめてください。


### 6.5.8.1 解答の目安

1. まず課題の目的を一文で明確化し、入力・出力を対応づけて記述します。
   確認ポイント: 何を変えて何を確認する課題かを第三者が読んで理解できること。
2. 最小構成で一度実行し、設定や条件を1つ変更して差分を比較します。
   確認ポイント: 変更前後の挙動差を具体的に説明できること。
3. 適用条件と代替手段を整理し、選択基準を短くまとめます。
   確認ポイント: なぜその手段を選ぶかを根拠付きで示せること。

## 6.5.9 理解度チェック

1. ``AUTOMATIC1111 入門`` の主な役割を1文で説明してください。
2. ``AUTOMATIC1111 入門`` を導入する際の最大のメリットと注意点は何ですか？
3. ``AUTOMATIC1111 入門`` が向かないユースケースとして、どのようなケースが考えられますか？


### 6.5.9.1 解説の要点

1. 主な役割は、その技術がどの工程を担い、何を改善するかで説明します。
2. メリットは再現性・拡張性・運用性の観点で整理し、注意点は導入コストや複雑性として示します。
3. 使い分けは要件、実装コスト、運用体制の3観点で判断します。
---

[← 前へ](06-multimodal/03-comfyui.md) | [次へ →](06-multimodal/05-invokeai.md)








---
level: 📖 中級（概念・実践）
prereq: Python基礎 / LLMアプリの基本概念
prev: 06-multimodal/04-automatic1111.md
next: 06-multimodal/06-fooocus.md
---

# 6.6 InvokeAI 入門

> 📖 中級（概念・実践） | 前提: Python基礎 / LLMアプリの基本概念

## 6.6.1 この教材で身につくこと

- InvokeAI 入門 の主な役割と適用場面を説明できる
- InvokeAI 入門 を最小構成で動かす手順を実行できる
- 導入時のメリットと注意点を整理できる

## 6.6.2 コンセプト
InvokeAI は実務向け機能を備えた画像生成ツールです。モデル管理や履歴管理がしやすく、運用寄りの構成に向きます。
**バージョン**: 最新版 / OSS準拠（2026-05時点）  
**公式ドキュメント**: https://www.invokeai.org/
## 6.6.3 仕組み

1. 目的と入力を定義し、対象データや利用モデルを準備します。
2. コア処理（検索・推論・生成・検証のいずれか）を実行します。
3. 実行結果を保存または表示し、次工程に渡せる形式へ整えます。
4. パラメータを調整して挙動差分を比較し、品質を確認します。
5. 運用を想定して再実行手順と確認ポイントを定着させます。
## 6.6.4 位置づけ

```mermaid
flowchart LR
	A[画像生成運用] --> B[InvokeAI]
	B --> C[モデル管理]
	B --> D[履歴管理]
	B --> E[Web UI提供]
```

## 6.6.5 実行フロー

```mermaid
flowchart TD
	S[開始] --> I[pip install invokeai]
	I --> C[invokeai-configure実行]
	C --> W[invokeai-web起動]
	W --> A[ブラウザアクセス]
	A --> X[生成実行]
```

## 6.6.6 サンプル

### 6.6.6.1 実行例

```bash
# この教材の最小構成を順に実行
# 具体的なコマンドは「最小セットアップ」または「実行フロー」を参照
```

### 6.6.6.2 検証

- コマンドがエラーなく完了する
- 想定した出力（画面表示・ファイル生成・回答）を確認できる
- 変更した設定に応じて結果差分を説明できる

## 6.6.7 実ソースコード（言語別に記載）
### 6.6.7.1 セットアップ手順（最小）

```text
# InvokeAI セットアップガイド

## インストール
pip install invokeai
invokeai-configure

## 起動
invokeai-web

## アクセス
- http://127.0.0.1:9090
```

## 6.6.8 演習課題

1. ``InvokeAI 入門`` を使う想定ユースケースを1つ定義し、入力・出力の例を記録してください。
2. 最小構成で動かし、デフォルトから設定を1つ変えて挙動の差分を確認してください。
3. ``InvokeAI 入門`` を使わない場合の代替手段と比較し、選ぶ基準をまとめてください。


### 6.6.8.1 解答の目安

1. まず課題の目的を一文で明確化し、入力・出力を対応づけて記述します。
   確認ポイント: 何を変えて何を確認する課題かを第三者が読んで理解できること。
2. 最小構成で一度実行し、設定や条件を1つ変更して差分を比較します。
   確認ポイント: 変更前後の挙動差を具体的に説明できること。
3. 適用条件と代替手段を整理し、選択基準を短くまとめます。
   確認ポイント: なぜその手段を選ぶかを根拠付きで示せること。

## 6.6.9 理解度チェック

1. ``InvokeAI 入門`` の主な役割を1文で説明してください。
2. ``InvokeAI 入門`` を導入する際の最大のメリットと注意点は何ですか？
3. ``InvokeAI 入門`` が向かないユースケースとして、どのようなケースが考えられますか？


### 6.6.9.1 解説の要点

1. 主な役割は、その技術がどの工程を担い、何を改善するかで説明します。
2. メリットは再現性・拡張性・運用性の観点で整理し、注意点は導入コストや複雑性として示します。
3. 使い分けは要件、実装コスト、運用体制の3観点で判断します。
---

[← 前へ](06-multimodal/04-automatic1111.md) | [次へ →](06-multimodal/06-fooocus.md)







---
level: 📖 中級（概念・実践）
prereq: Python基礎 / LLMアプリの基本概念
prev: 06-multimodal/05-invokeai.md
next: 06-multimodal/07-coqui-tts.md
---

# 6.7 Fooocus 入門

> 📖 中級（概念・実践） | 前提: Python基礎 / LLMアプリの基本概念

## 6.7.1 この教材で身につくこと

- Fooocus 入門 の主な役割と適用場面を説明できる
- Fooocus 入門 を最小構成で動かす手順を実行できる
- 導入時のメリットと注意点を整理できる

## 6.7.2 コンセプト
Fooocus は使いやすさ重視の画像生成UIです。細かい設定に踏み込みすぎず、短時間で品質の高い画像を生成しやすいです。

**バージョン**: 最新版 / OSS準拠（2026-05時点）  
**公式ドキュメント**: https://github.com/lllyasviel/Fooocus

## 6.7.3 仕組み

1. 目的と入力を定義し、対象データや利用モデルを準備します。
2. コア処理（検索・推論・生成・検証のいずれか）を実行します。
3. 実行結果を保存または表示し、次工程に渡せる形式へ整えます。
4. パラメータを調整して挙動差分を比較し、品質を確認します。
5. 運用を想定して再実行手順と確認ポイントを定着させます。

## 6.7.4 位置づけ

```mermaid
flowchart LR
	A[画像生成入門] --> B[Fooocus]
	B --> C[使いやすいUI]
	B --> D[高速試行]
	B --> E[短時間導入]
```

## 6.7.5 実行フロー

```mermaid
flowchart TD
	S[開始] --> G[リポジトリ取得]
	G --> R[entry_with_update起動]
	R --> D[モデル自動取得]
	D --> A[Web UIアクセス]
	A --> X[画像生成]
```

## 6.7.6 サンプル

### 6.7.6.1 実行例

```bash
# この教材の最小構成を順に実行
# 具体的なコマンドは「最小セットアップ」または「実行フロー」を参照
```

### 6.7.6.2 検証

- コマンドがエラーなく完了する
- 想定した出力（画面表示・ファイル生成・回答）を確認できる
- 変更した設定に応じて結果差分を説明できる

## 6.7.7 実ソースコード（言語別に記載）
### 6.7.7.1 セットアップ手順（最小）

```text
# Fooocus セットアップガイド

## 概要
git clone https://github.com/lllyasviel/Fooocus.git
cd Fooocus

## 詳細
python entry_with_update.py

初回起動時にモデルが自動ダウンロードされます。
```

## 6.7.8 演習課題

1. ``Fooocus 入門`` を使う想定ユースケースを1つ定義し、入力・出力の例を記録してください。
2. 最小構成で動かし、デフォルトから設定を1つ変えて挙動の差分を確認してください。
3. ``Fooocus 入門`` を使わない場合の代替手段と比較し、選ぶ基準をまとめてください。


### 6.7.8.1 解答の目安

1. まず課題の目的を一文で明確化し、入力・出力を対応づけて記述します。
   確認ポイント: 何を変えて何を確認する課題かを第三者が読んで理解できること。
2. 最小構成で一度実行し、設定や条件を1つ変更して差分を比較します。
   確認ポイント: 変更前後の挙動差を具体的に説明できること。
3. 適用条件と代替手段を整理し、選択基準を短くまとめます。
   確認ポイント: なぜその手段を選ぶかを根拠付きで示せること。

## 6.7.9 理解度チェック

1. ``Fooocus 入門`` の主な役割を1文で説明してください。
2. ``Fooocus 入門`` を導入する際の最大のメリットと注意点は何ですか？
3. ``Fooocus 入門`` が向かないユースケースとして、どのようなケースが考えられますか？


### 6.7.9.1 解説の要点

1. 主な役割は、その技術がどの工程を担い、何を改善するかで説明します。
2. メリットは再現性・拡張性・運用性の観点で整理し、注意点は導入コストや複雑性として示します。
3. 使い分けは要件、実装コスト、運用体制の3観点で判断します。
---

[← 前へ](06-multimodal/05-invokeai.md) | [次へ →](06-multimodal/07-coqui-tts.md)








---
level: 📖 中級（概念・実践）
prereq: Python基礎 / LLMアプリの基本概念
prev: 06-multimodal/06-fooocus.md
next: 07-visualization/00-README.md
---

# 6.8 Coqui TTS 入門

> 📖 中級（概念・実践） | 前提: Python基礎 / LLMアプリの基本概念

## 6.8.1 この教材で身につくこと

- Coqui TTS 入門 の主な役割と適用場面を説明できる
- Coqui TTS 入門 を最小構成で動かす手順を実行できる
- 導入時のメリットと注意点を整理できる

## 6.8.2 コンセプト
Coqui TTS は音声合成モデルを扱うOSSです。TTS API や学習済みモデルの切り替えがしやすく、音声アプリ開発に向いています。

**バージョン**: 最新版 / OSS準拠（2026-05時点）  
**公式ドキュメント**: https://github.com/coqui-ai/TTS

## 6.8.3 仕組み

1. 目的と入力を定義し、対象データや利用モデルを準備します。
2. コア処理（検索・推論・生成・検証のいずれか）を実行します。
3. 実行結果を保存または表示し、次工程に渡せる形式へ整えます。
4. パラメータを調整して挙動差分を比較し、品質を確認します。
5. 運用を想定して再実行手順と確認ポイントを定着させます。
## 6.8.4 位置づけ

```mermaid
flowchart LR
	A[音声アプリ開発] --> B[Coqui TTS]
	B --> C[学習済みモデル利用]
	B --> D[CLI生成]
	B --> E[ローカル実行]
```

## 6.8.5 実行フロー

```mermaid
flowchart TD
	S[開始] --> I[pip install TTS]
	I --> T[ttsコマンド実行]
	T --> M[モデル指定]
	M --> W[out.wav生成]
	W --> X[再生確認]
```

## 6.8.6 サンプル

### 6.8.6.1 実行例

```bash
# この教材の最小構成を順に実行
# 具体的なコマンドは「最小セットアップ」または「実行フロー」を参照
```

### 6.8.6.2 検証

- コマンドがエラーなく完了する
- 想定した出力（画面表示・ファイル生成・回答）を確認できる
- 変更した設定に応じて結果差分を説明できる

## 6.8.7 実ソースコード（言語別に記載）
### 6.8.7.1 セットアップ手順（最小）

```text
# Coqui TTS セットアップガイド

## インストール
pip install TTS

## 音声生成例
tts --text "こんにちは。Coqui TTS のテストです。" \
	--model_name tts_models/ja/kokoro/tacotron2-DDC \
	--out_path out.wav
```

## 6.8.8 演習課題

1. ``Coqui TTS 入門`` を使う想定ユースケースを1つ定義し、入力・出力の例を記録してください。
2. 最小構成で動かし、デフォルトから設定を1つ変えて挙動の差分を確認してください。
3. ``Coqui TTS 入門`` を使わない場合の代替手段と比較し、選ぶ基準をまとめてください。


### 6.8.8.1 解答の目安

1. まず課題の目的を一文で明確化し、入力・出力を対応づけて記述します。
   確認ポイント: 何を変えて何を確認する課題かを第三者が読んで理解できること。
2. 最小構成で一度実行し、設定や条件を1つ変更して差分を比較します。
   確認ポイント: 変更前後の挙動差を具体的に説明できること。
3. 適用条件と代替手段を整理し、選択基準を短くまとめます。
   確認ポイント: なぜその手段を選ぶかを根拠付きで示せること。

## 6.8.9 理解度チェック

1. ``Coqui TTS 入門`` の主な役割を1文で説明してください。
2. ``Coqui TTS 入門`` を導入する際の最大のメリットと注意点は何ですか？
3. ``Coqui TTS 入門`` が向かないユースケースとして、どのようなケースが考えられますか？


### 6.8.9.1 解説の要点

1. 主な役割は、その技術がどの工程を担い、何を改善するかで説明します。
2. メリットは再現性・拡張性・運用性の観点で整理し、注意点は導入コストや複雑性として示します。
3. 使い分けは要件、実装コスト、運用体制の3観点で判断します。
---

[← 前へ](06-multimodal/06-fooocus.md) | [次へ →](07-visualization/00-README.md)







---
level: 🔰 初級（カテゴリ導入）
prereq: "-"
prev: 06-multimodal/07-coqui-tts.md
next: 07-visualization/01-vega-lite.md
---

# 7.1 データ可視化

> 🔰 初級（カテゴリ導入） | 前提: -

LLMの出力や分析結果を視覚化するための教材です。

## 7.1.1 位置づけ

```mermaid
flowchart LR
  A[分析結果活用] --> B[可視化]
  B --> C[Vega-Lite]
  B --> D[ECharts]
  C --> E[宣言的仕様]
  D --> F[高機能チャート]
```

## 7.1.2 学習フロー

```mermaid
flowchart TD
  S[開始] --> V[Vega-Liteで仕様生成]
  V --> J[JSON specを確認]
  J --> E[ECharts optionを作成]
  E --> R[画面で描画確認]
  R --> X[可視化選定メモ]
```

## 7.1.3 含まれるOSS

- **Vega-Lite**: 宣言的可視化仕様
- **ECharts**: 高機能チャートライブラリ

## 7.1.4 学習順序

1. Vega-Lite（宣言的な可視化仕様を理解）
2. ECharts（実運用向けチャート構築）

## 7.1.5 教材リンク

- [01-vega-lite.md](./01-vega-lite.md)
- [02-echarts.md](./02-echarts.md)

## 7.1.6 完了条件

- カテゴリ内の主要OSSを3つ以上説明できる
- 最小サンプルを1件以上動作確認できる
- 選定観点（速度/運用性/拡張性）で比較メモを作成できる

---

[← 前へ](06-multimodal/07-coqui-tts.md) | [次へ →](07-visualization/01-vega-lite.md)





---
level: 📖 中級（概念・実践）
prereq: Python基礎 / LLMアプリの基本概念
prev: 07-visualization/00-README.md
next: 07-visualization/02-echarts.md
---

# 7.2 Vega-Lite 入門

> 📖 中級（概念・実践） | 前提: Python基礎 / LLMアプリの基本概念

## 7.2.1 この教材で身につくこと

- JSON仕様でグラフを定義する方法
- 基本チャート（折れ線・棒・エリア）の作成
- 生成した仕様をフロントへ渡す流れ

## 7.2.2 コンセプト
Vega-Lite は、可視化を宣言的JSONで記述するライブラリです。
LLMが仕様生成しやすく、可視化パイプラインの自動化と相性が良いのが特徴です。

LLMと相性が良い主な理由は、出力フォーマットが自然言語ではなく構造化JSONである点です。  
たとえば「売上推移を月次で折れ線表示し、ツールチップに値を出す」といった要件を、`mark` / `encoding` / `tooltip` のような定型キーにマッピングして生成できます。

また、Vega-Lite 仕様は次の運用フローに載せやすいのも利点です。

1. プロンプトで可視化要件を文章で与える
2. LLMがVega-Lite JSONを生成する
3. スキーマや必須キー（`$schema`, `data`, `mark`, `encoding`）を機械的に検証する
4. 差分レビューで「何を変えたか」を追跡する

このため、試作段階では生成速度を上げやすく、運用段階ではレビュー性と再現性を確保しやすい、というバランスが取りやすくなります。

**バージョン**: 5.x / OSS準拠（2026-05時点）  
**公式ドキュメント**: https://vega.github.io/vega-lite/

## 7.2.3 仕組み

1. 目的と入力を定義し、対象データや利用モデルを準備します。
2. コア処理（検索・推論・生成・検証のいずれか）を実行します。
3. 実行結果を保存または表示し、次工程に渡せる形式へ整えます。
4. パラメータを調整して挙動差分を比較し、品質を確認します。
5. 運用を想定して再実行手順と確認ポイントを定着させます。
## 7.2.4 位置づけ
```mermaid
flowchart LR
  A[可視化仕様設計] --> B[Vega-Lite]
  B --> C[宣言的JSON]
  B --> D[LLM生成との相性]
  B --> E[ブラウザ描画]
```

## 7.2.5 実行フロー

```mermaid
flowchart TD
  S[開始] --> I[npm install]
  I --> R[node 01_generate-spec.js]
  R --> G[02_chart-spec.json生成]
  G --> V[可視化フロントへ渡す]
  V --> X[描画確認]
```

## 7.2.6 最小実行

```bash
cd examples/vega-lite
npm install
node 01_generate-spec.js
```

## 7.2.7 サンプル整合性メモ

- `01_generate-spec.js` は 3 種類（`line` / `bar` / `area`）のチャート仕様を1つのJSONとして生成
- `02_chart-spec.json` には `vconcat` 配下に 3 つのチャートが含まれる


## 7.2.8 サンプル

### 7.2.8.1 実行例

```bash
# この教材の最小構成を順に実行
# 具体的なコマンドは「最小セットアップ」または「実行フロー」を参照
cd examples/vega-lite
node 01_generate-spec.js
python -m http.server 8017
```

ブラウザで `http://localhost:8017/03_render.html` を開くと、3種類のチャートが表示されます。

### 7.2.8.2 検証

- コマンドがエラーなく完了する
- 想定した出力（画面表示・ファイル生成・回答）を確認できる
- 変更した設定に応じて結果差分を説明できる

### 7.2.8.3 描画結果（3種類）

![vega-lite 3 charts](examples/vega-lite/01-three-charts.png)

## 7.2.9 実ソースコード（言語別に記載）
### 7.2.9.1 JavaScript: examples/vega-lite/01_generate-spec.js

- 役割: Vega-Lite 仕様JSONを生成してファイル出力
- 入力: 月次データ配列（スクリプト内定義）
- 出力: `examples/vega-lite/02_chart-spec.json`
- 実行: `cd examples/vega-lite && node 01_generate-spec.js`

```javascript
import fs from "node:fs";

const data = [
  { month: "Jan", value: 100 },
  { month: "Feb", value: 120 },
  { month: "Mar", value: 115 },
  { month: "Apr", value: 140 },
  { month: "May", value: 132 },
  { month: "Jun", value: 150 },
];

const CHART_WIDTH = 820;
const CHART_HEIGHT = 220;

const spec = {
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  description: "Monthly trend with 3 chart types",
  data: { values: data },
  vconcat: [
    {
      title: "Line",
      width: CHART_WIDTH,
      height: CHART_HEIGHT,
      mark: "line",
      encoding: {
        x: { field: "month", type: "ordinal", title: "Month" },
        y: { field: "value", type: "quantitative", title: "Value" },
        tooltip: [
          { field: "month", type: "ordinal" },
          { field: "value", type: "quantitative" },
        ],
      },
    },
    {
      title: "Bar",
      width: CHART_WIDTH,
      height: CHART_HEIGHT,
      mark: "bar",
      encoding: {
        x: { field: "month", type: "ordinal", title: "Month" },
        y: { field: "value", type: "quantitative", title: "Value" },
        tooltip: [
          { field: "month", type: "ordinal" },
          { field: "value", type: "quantitative" },
        ],
      },
    },
    {
      title: "Area",
      width: CHART_WIDTH,
      height: CHART_HEIGHT,
      mark: { type: "area", opacity: 0.7 },
      encoding: {
        x: { field: "month", type: "ordinal", title: "Month" },
        y: { field: "value", type: "quantitative", title: "Value" },
        tooltip: [
          { field: "month", type: "ordinal" },
          { field: "value", type: "quantitative" },
        ],
      },
    },
  ],
  spacing: 20,
};

fs.writeFileSync("02_chart-spec.json", JSON.stringify(spec, null, 2), "utf-8");
console.log("Generated 02_chart-spec.json");
```

### 7.2.9.2 JSON: examples/vega-lite/02_chart-spec.json

- 役割: 可視化フロントに渡す最終仕様
- 入力: なし（`examples/vega-lite/01_generate-spec.js` で生成される）
- 出力: Vega-Lite描画用JSON

```json
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "Monthly trend with 3 chart types",
  "data": {
    "values": [
      { "month": "Jan", "value": 100 },
      { "month": "Feb", "value": 120 },
      { "month": "Mar", "value": 115 },
      { "month": "Apr", "value": 140 },
      { "month": "May", "value": 132 },
      { "month": "Jun", "value": 150 }
    ]
  },
  "vconcat": [
    {
      "title": "Line",
      "width": 820,
      "height": 220,
      "mark": "line",
      "encoding": {
        "x": { "field": "month", "type": "ordinal", "title": "Month" },
        "y": { "field": "value", "type": "quantitative", "title": "Value" }
      }
    },
    {
      "title": "Bar",
      "width": 820,
      "height": 220,
      "mark": "bar",
      "encoding": {
        "x": { "field": "month", "type": "ordinal", "title": "Month" },
        "y": { "field": "value", "type": "quantitative", "title": "Value" }
      }
    },
    {
      "title": "Area",
      "width": 820,
      "height": 220,
      "mark": { "type": "area", "opacity": 0.7 },
      "encoding": {
        "x": { "field": "month", "type": "ordinal", "title": "Month" },
        "y": { "field": "value", "type": "quantitative", "title": "Value" }
      }
    }
  ],
  "spacing": 20
}
```

### 7.2.9.3 生成JSONの読み解きポイント

1. 入口は `$schema` と `description`
  確認ポイント: どの仕様バージョンで、何を描くJSONかを最初に把握する。
2. データ本体は `data.values`
  確認ポイント: ここを書き換えると、同じ可視化ルールでデータ差し替えができる。
3. 表現の切り替えは `vconcat` 配下
  確認ポイント: 各要素が1チャートを表し、`mark` を変えることで同一データの見え方を比較できる。
4. 軸定義は `encoding.x` と `encoding.y`
  確認ポイント: `field` は列名、`type` はデータ型であり、ここが崩れると描画解釈が変わる。
5. レイアウト調整は `width` / `height` / `spacing`
  確認ポイント: 意味は変えずに可読性だけを調整したい場合は、この3点を先に触る。

このJSONは「データ」と「表現ルール」を分離しているため、LLMが生成してもレビューしやすく、どこを変えると何が変わるかを追跡しやすい構造になっています。

## 7.2.10 演習課題

1. 月次データを5点以上に増やし、折れ線の変化を確認してください。
2. `line` / `bar` / `area` の3種類を比較し、同じデータで表現差を確認してください。
3. タイトルと軸ラベルを業務データ向けに変更してください。

### 7.2.10.1 解答の目安

1. 月次データを5点以上に増やし、上昇と下降の両方が見える形にします。
  確認ポイント: x軸カテゴリが増え、折れ線の形が変化していること。
2. `line` / `bar` / `area` を切り替えて比較します。
  確認ポイント: `line` は推移把握、`bar` はカテゴリ比較、`area` は量感の把握に強いと説明できること。
3. タイトルと軸ラベルを業務文脈に合わせて変更します。
  確認ポイント: 指標名と単位が第三者に明確に伝わること。

## 7.2.11 理解度チェック

1. Vega-Lite の主な役割を1文で説明してください。
2. 宣言的仕様を採用する利点は何ですか？
3. ECharts と使い分けるなら、どの観点で判断しますか？
4. 生成された `02_chart-spec.json` で「折れ線を棒グラフに変える」には、どのキーを変更しますか？
5. `data.values` と `encoding` はそれぞれ何を担当していますか？

### 7.2.11.1 解説の要点

1. Vega-Lite の役割は、宣言的なJSON仕様で可視化を定義し、再利用しやすくすることです。
2. 宣言的仕様の利点は、生成しやすいこと、差分レビューしやすいこと、構成を標準化しやすいことです。
3. 使い分けは、仕様生成や標準化を重視するならVega-Lite、細かなインタラクションや高度なUI制御を重視するならEChartsが目安です。
4. `vconcat` 配下の該当チャートの `mark` キーを `"bar"` に変更します。他の設定（encoding・data）は変えずにチャート形式だけを切り替えられるのが宣言的仕様の利点です。
5. `data.values` は描画するデータ本体を、`encoding` は各フィールドをどの軸・どの見た目に対応させるかを担当します。この2つを分離することで、データが変わってもルールを使い回せます。

---

[← 前へ](07-visualization/00-README.md) | [次へ →](07-visualization/02-echarts.md)






---
level: 📖 中級（概念・実践）
prereq: Python基礎 / LLMアプリの基本概念
prev: 07-visualization/01-vega-lite.md
next: 08-protocols/00-README.md
---

# 7.3 ECharts 入門

> 📖 中級（概念・実践） | 前提: Python基礎 / LLMアプリの基本概念

## 7.3.1 この教材で身につくこと

- 複数系列の時系列チャート
- インタラクティブなズーム・ツールチップ
- 大量データ描画

## 7.3.2 コンセプト
ECharts は高機能で拡張性の高い可視化ライブラリです。ダッシュボードや時系列表示に向きます。

とくに、複数系列・ズーム・凡例連動・ツールチップなど、実務でよく使う要件を1つの option でまとめて表現できる点が強みです。  
LLMと組み合わせる場合も、要件を「系列」「軸」「インタラクション」に分解して option に落とし込めるため、試作から改善までを繰り返しやすくなります。

**バージョン**: 5.x / OSS準拠（2026-05時点）  
**公式ドキュメント**: https://echarts.apache.org/

## 7.3.3 仕組み

1. 目的と入力を定義し、対象データや利用モデルを準備します。
2. コア処理（検索・推論・生成・検証のいずれか）を実行します。
3. 実行結果を保存または表示し、次工程に渡せる形式へ整えます。
4. パラメータを調整して挙動差分を比較し、品質を確認します。
5. 運用を想定して再実行手順と確認ポイントを定着させます。
## 7.3.4 位置づけ

```mermaid
flowchart LR
		A[ダッシュボード開発] --> B[ECharts]
		B --> C[高機能オプション]
		B --> D[時系列可視化]
		B --> E[インタラクション]
```

## 7.3.5 実行フロー

```mermaid
flowchart TD
		S[開始] --> I[npm install]
		I --> R[node 01_option-template.js]
		R --> G[02_echarts-option.json生成]
		G --> V[Web画面へ適用]
		V --> X[描画確認]
```

## 7.3.6 最小実行

```bash
cd examples/echarts
npm install
node 01_option-template.js
```

## 7.3.7 サンプル整合性メモ

- `01_option-template.js` は 2 系列（`Revenue` / `Cost`）の line チャート option を生成
- `02_echarts-option.json` には `tooltip` と `dataZoom` が含まれ、時系列の読み取りと拡大確認ができる

## 7.3.8 サンプル

### 7.3.8.1 実行例

```bash
# この教材の最小構成を順に実行
# 具体的なコマンドは「最小セットアップ」または「実行フロー」を参照
cd examples/echarts
node 01_option-template.js
python -m http.server 8019
```

ブラウザで `http://localhost:8019/03_render.html` を開くと、複数系列チャートが表示されます。

### 7.3.8.2 検証

- コマンドがエラーなく完了する
- 想定した出力（画面表示・ファイル生成・回答）を確認できる
- 変更した設定に応じて結果差分を説明できる

### 7.3.8.3 描画結果（複数系列）

![echarts line series](examples/echarts/01-echarts-line-series.png)

## 7.3.9 実ソースコード（言語別に記載）
### 7.3.9.1 JSON: examples/echarts/package.json

- 役割: 実行スクリプト定義
- 入力: なし
- 出力: `generate` スクリプトで option JSON を生成

```json
{
	"name": "echarts-tutorial",
	"version": "1.0.0",
	"private": true,
	"type": "module",
	"scripts": {
		"generate": "node 01_option-template.js"
	}
}
```

### 7.3.9.2 JavaScript: examples/echarts/01_option-template.js

- 役割: ECharts option JSONを生成してファイル出力
- 入力: 月次配列、売上配列、コスト配列（スクリプト内定義）
- 出力: `examples/echarts/02_echarts-option.json`
- 実行: `cd examples/echarts && node 01_option-template.js`

```javascript
import fs from "node:fs";

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
const revenue = [120, 132, 101, 134, 160, 155];
const cost = [80, 92, 88, 96, 110, 118];

const option = {
	title: { text: "Monthly Revenue vs Cost" },
	tooltip: { trigger: "axis" },
	legend: { data: ["Revenue", "Cost"] },
	xAxis: {
		type: "category",
		data: months,
	},
	yAxis: {
		type: "value",
		name: "Amount",
	},
	dataZoom: [
		{ type: "inside", start: 0, end: 100 },
		{ start: 0, end: 100 },
	],
	series: [
		{
			name: "Revenue",
			type: "line",
			smooth: true,
			data: revenue,
		},
		{
			name: "Cost",
			type: "line",
			smooth: true,
			data: cost,
		},
	],
};

fs.writeFileSync("02_echarts-option.json", JSON.stringify(option, null, 2), "utf-8");
console.log("Generated 02_echarts-option.json");
```

### 7.3.9.3 JSON: examples/echarts/02_echarts-option.json

- 役割: Web画面に渡す最終 option
- 入力: なし（`examples/echarts/01_option-template.js` で生成される）
- 出力: ECharts 描画用JSON

```json
{
	"title": { "text": "Monthly Revenue vs Cost" },
	"tooltip": { "trigger": "axis" },
	"legend": { "data": ["Revenue", "Cost"] },
	"xAxis": {
		"type": "category",
		"data": ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]
	},
	"yAxis": {
		"type": "value",
		"name": "Amount"
	},
	"dataZoom": [
		{ "type": "inside", "start": 0, "end": 100 },
		{ "start": 0, "end": 100 }
	],
	"series": [
		{
			"name": "Revenue",
			"type": "line",
			"smooth": true,
			"data": [120, 132, 101, 134, 160, 155]
		},
		{
			"name": "Cost",
			"type": "line",
			"smooth": true,
			"data": [80, 92, 88, 96, 110, 118]
		}
	]
}
```

### 7.3.9.4 生成JSONの読み解きポイント

1. 全体設定は `title` / `tooltip` / `legend`
	確認ポイント: 画面で最初に見える情報と、ユーザー操作時の補助情報を定義している。
2. 軸定義は `xAxis` と `yAxis`
	確認ポイント: 時系列カテゴリ（`xAxis.data`）と数値スケール（`yAxis`）の責務が分かれている。
3. インタラクションは `dataZoom`
	確認ポイント: `inside` を含めるとマウス操作で拡大縮小でき、大量データでも確認しやすい。
4. 主役は `series`
	確認ポイント: 配列の1要素が1系列を表し、`name` と `data` を揃えることで比較チャートになる。
5. 見た目調整は `type` / `smooth`
	確認ポイント: 折れ線か棒か、補間するかを系列単位で切り替えられる。

EChartsのJSONは「画面機能（ズーム・凡例・ツールチップ）」をまとめて持てるため、実運用で必要な操作性を1つの option で管理しやすい構造です。

### 7.3.9.5 Vega-LiteとEChartsのJSON比較（理解を深める観点）

1. Vega-Lite: `encoding` 中心
	データ列と見た目の対応を宣言的に書く。
2. ECharts: `series` と機能設定中心
	チャート機能やインタラクションを option として具体的に組み立てる。
3. 学習時の見分け方
	「列の対応関係を先に考える」ならVega-Lite、「UI操作まで含めて設計する」ならEChartsが読みやすい。

## 7.3.10 演習課題

1. ``ECharts 入門`` を使う想定ユースケースを1つ定義し、入力・出力の例を記録してください。
2. 最小構成で動かし、デフォルトから設定を1つ変えて挙動の差分を確認してください。
3. ``ECharts 入門`` を使わない場合の代替手段と比較し、選ぶ基準をまとめてください。

### 7.3.10.1 解答の目安

1. ユースケースを具体化し、入力データ項目と出力チャートを対応づけて記述します。
	確認ポイント: 何を可視化し、何を判断したいかが明確であること。
2. 最小構成から設定を1つ変更して差分を確認します。
	例: `smooth` を `true` と `false` で比較する。
	確認ポイント: 設定値の変更が見た目や読み取り方にどう影響するか説明できること。
3. 代替手段と比較し、選択基準を整理します。
	確認ポイント: 自由度、学習コスト、用途適合の3観点で比較できること。

## 7.3.11 理解度チェック

1. ECharts の主な役割を1文で説明してください。
2. ECharts を導入する際の最大のメリットと注意点は何ですか？
3. ECharts が向かないユースケースとして、どのようなケースが考えられますか？
4. 生成された `02_echarts-option.json` で「ズーム機能を無効にする」には、どのキーを削除または変更しますか？
5. `series` 配列に要素を追加すると何が変わりますか？

### 7.3.11.1 解説の要点

1. ECharts の主な役割は、実運用向けの高機能な可視化を構築することです。
2. 最大のメリットは表現力と機能性の高さで、注意点は設定項目が多く設計が複雑化しやすいことです。
3. 単純な静的可視化だけで十分な場合や、仕様を最小に保ちたい場合は別手段が適することがあります。
4. `dataZoom` キーを削除するか空配列 `[]` にすることで無効化できます。`dataZoom` はズーム機能の宣言であり、ここを削除しても他の設定には影響しません。
5. `series` の配列要素が1つ増えると、チャートに1系列が追加されます。`name` と `data` を対応させるだけで複数系列の比較チャートに拡張でき、`legend` に `name` を追加すれば凡例にも自動反映されます。

---

[← 前へ](07-visualization/01-vega-lite.md) | [次へ →](08-protocols/00-README.md)

---
level: 🔰 初級（カテゴリ導入）
prereq: "-"
prev: 07-visualization/02-echarts.md
next: 08-protocols/01-mcp.md
---

# 8.1 プロトコル・標準・統合

> 🔰 初級（カテゴリ導入） | 前提: -

AIアプリと外部ツールを安全に統合するための標準を学ぶ教材です。

## 8.1.1 位置づけ

```mermaid
flowchart LR
  A[AIアプリ統合] --> B[Protocols]
  B --> C[MCP]
  B --> D[MCP Servers]
  D --> E[Backend Integration]
```

## 8.1.2 学習フロー

```mermaid
flowchart TD
  S[開始] --> M[MCP基礎]
  M --> S2[MCP Servers導入]
  S2 --> B[バックエンド連携]
  B --> T[tools-call設計]
  T --> X[運用フロー定義]
```

## 8.1.3 含まれるOSS

- **MCP**: Model Context Protocol
- **MCP Servers**: MCP対応サーバ実装群

## 8.1.4 学習順序

1. MCP（プロトコル基礎）
2. MCP Servers（サーバ実装パターン）
3. Backend Integration（業務システム連携）

## 8.1.5 教材リンク

- [01-mcp.md](./01-mcp.md)
- [01_mcp-python](./01_mcp-python/)
- [02-mcp-servers.md](./02-mcp-servers.md)
- [03-backend-integration.md](./03-backend-integration.md)
- [03_backend-integration-python](./03_backend-integration-python/)

## 8.1.6 完了条件

- カテゴリ内の主要OSSを3つ以上説明できる
- 最小サンプルを1件以上動作確認できる
- 選定観点（速度/運用性/拡張性）で比較メモを作成できる

---

[← 前へ](07-visualization/02-echarts.md) | [次へ →](08-protocols/01-mcp.md)





---
level: 📖 中級（概念・実践）
prereq: Python基礎 / LLMアプリの基本概念
prev: 08-protocols/00-README.md
next: 08-protocols/02-mcp-servers.md
---

# 8.2 MCP 入門

> 📖 中級（概念・実践） | 前提: Python基礎 / LLMアプリの基本概念

## 8.2.1 この教材で身につくこと

- ツール呼び出しの標準化
- コンテキスト供給の統一
- クライアント/サーバ分離

## 8.2.2 コンセプト
MCP（Model Context Protocol）は、LLM と外部ツールを標準化された方法で接続するためのプロトコルです。

**仕様**: MCP 1.0 / OSS仕様（2026-05時点）  
**公式ドキュメント**: https://modelcontextprotocol.io/

## 8.2.3 仕組み

1. クライアントが `initialize` で能力情報を交換します。
2. `tools/list` で利用可能ツールの一覧を取得します。
3. ツール実行時は `tools/call` を JSON-RPC で送信します。
4. サーバは実行結果を標準形式で返却します。
5. クライアントは結果をLLM文脈へ統合して応答生成に利用します。

## 8.2.4 位置づけ

```mermaid
flowchart LR
	A[LLMアプリ] --> B[MCP]
	B --> C[標準化されたツール呼び出し]
	B --> D[コンテキスト受け渡し]
	B --> E[サーバ分離運用]
```

## 8.2.5 実行フロー

```mermaid
flowchart TD
	S[開始] --> I[pip install -r requirements]
	I --> C[mcp client skeleton実行]
	C --> L[initialize/tools-list生成]
	L --> T[tools-call skeleton実行]
	T --> X[JSON-RPC雛形確認]
```

## 8.2.6 実ソースコード（言語別に記載）
### 8.2.6.1 01_mcp-python/00_requirements.txt

```txt
python-dotenv==1.0.0
httpx==0.27.0
```

### 8.2.6.2 01_mcp-python/01_mcp-client-skeleton.py

```python
"""MCP client skeleton.

このサンプルは学習用の最小構成です。
実運用では使用するMCPサーバ仕様に合わせてJSON-RPCメッセージを拡張してください。
"""

import json
import uuid


def build_initialize_request() -> dict:
	return {
		"jsonrpc": "2.0",
		"id": str(uuid.uuid4()),
		"method": "initialize",
		"params": {
			"clientInfo": {"name": "tutorial-client", "version": "1.0.0"},
			"capabilities": {},
		},
	}


def build_tools_list_request() -> dict:
	return {
		"jsonrpc": "2.0",
		"id": str(uuid.uuid4()),
		"method": "tools/list",
		"params": {},
	}


def main() -> None:
	init_req = build_initialize_request()
	tools_req = build_tools_list_request()

	print("Initialize request:")
	print(json.dumps(init_req, ensure_ascii=False, indent=2))

	print("\nTools/list request:")
	print(json.dumps(tools_req, ensure_ascii=False, indent=2))


if __name__ == "__main__":
	main()
```

### 8.2.6.3 01_mcp-python/02_mcp-tool-call-skeleton.py

```python
"""MCP tool call request skeleton."""

import json
import uuid


def build_tool_call_request(name: str, arguments: dict) -> dict:
	return {
		"jsonrpc": "2.0",
		"id": str(uuid.uuid4()),
		"method": "tools/call",
		"params": {
			"name": name,
			"arguments": arguments,
		},
	}


def main() -> None:
	req = build_tool_call_request(
		"query_stock_price",
		{"symbol": "7203", "date": "2026-05-09"},
	)
	print(json.dumps(req, ensure_ascii=False, indent=2))


if __name__ == "__main__":
	main()
```

## 8.2.7 サンプル

### 8.2.7.1 実行例

```bash
python 01_mcp-client-skeleton.py
python 02_mcp-tool-call-skeleton.py
```

### 8.2.7.2 検証

- `initialize` と `tools/list` の JSON-RPC フィールドが揃っているか確認する
- `tools/call` の name と arguments が対象ツール仕様と一致するか確認する

## 8.2.8 演習課題

1. ``MCP 入門`` を使う想定ユースケースを1つ定義し、入力・出力の例を記録してください。
2. 最小構成で動かし、デフォルトから設定を1つ変えて挙動の差分を確認してください。
3. ``MCP 入門`` を使わない場合の代替手段と比較し、選ぶ基準をまとめてください。


### 8.2.8.1 解答の目安

1. まず課題の目的を一文で明確化し、入力・出力を対応づけて記述します。
   確認ポイント: 何を変えて何を確認する課題かを第三者が読んで理解できること。
2. 最小構成で一度実行し、設定や条件を1つ変更して差分を比較します。
   確認ポイント: 変更前後の挙動差を具体的に説明できること。
3. 適用条件と代替手段を整理し、選択基準を短くまとめます。
   確認ポイント: なぜその手段を選ぶかを根拠付きで示せること。

## 8.2.9 理解度チェック

1. ``MCP 入門`` の主な役割を1文で説明してください。
2. ``MCP 入門`` を導入する際の最大のメリットと注意点は何ですか？
3. ``MCP 入門`` が向かないユースケースとして、どのようなケースが考えられますか？


### 8.2.9.1 解説の要点

1. 主な役割は、その技術がどの工程を担い、何を改善するかで説明します。
2. メリットは再現性・拡張性・運用性の観点で整理し、注意点は導入コストや複雑性として示します。
3. 使い分けは要件、実装コスト、運用体制の3観点で判断します。
---

[← 前へ](08-protocols/00-README.md) | [次へ →](08-protocols/02-mcp-servers.md)





---
level: 📖 中級（概念・実践）
prereq: Python基礎 / LLMアプリの基本概念
prev: 08-protocols/01-mcp.md
next: 08-protocols/03-backend-integration.md
---

# 8.3 MCP Servers 入門

> 📖 中級（概念・実践） | 前提: Python基礎 / LLMアプリの基本概念

## 8.3.1 この教材で身につくこと

- ファイル操作ツール
- SQL クエリ実行ツール
- HTTP API 連携ツール

## 8.3.2 コンセプト
MCP Servers はファイル、DB、APIなどの機能を MCP 経由で提供する実装群です。

**仕様**: MCP 1.0 対応 / OSS実装群（2026-05時点）  
**公式ドキュメント**: https://modelcontextprotocol.io/

## 8.3.3 仕組み

1. MCPサーバをプロセスとして起動し、ツール群を公開します。
2. クライアントは `tools/list` で利用可能な機能を取得します。
3. 必要な機能を `tools/call` で呼び出して実行します。
4. サーバは実行結果を標準形式で返します。
5. クライアントは結果を会話文脈へ取り込み、次の推論へ渡します。

## 8.3.4 位置づけ

```mermaid
flowchart LR
	A[MCP運用] --> B[MCP Servers]
	B --> C[filesystem server]
	B --> D[SQL/API連携]
	B --> E[tools/list提供]
```

## 8.3.5 実行フロー

```mermaid
flowchart TD
	S[開始] --> I[npm global install]
	I --> R[npx server-filesystem起動]
	R --> C[MCPクライアント接続]
	C --> L[tools/list確認]
	L --> X[利用開始]
```

## 8.3.6 最小セットアップ

### 8.3.6.1 前提条件

- Node.js 18+
- npm

### 8.3.6.2 例: ローカルファイル向けMCPサーバ

```bash
npm install -g @modelcontextprotocol/server-filesystem
```

### 8.3.6.3 起動例

```bash
npx @modelcontextprotocol/server-filesystem C:/Dev/stock
```

### 8.3.6.4 接続確認

MCP対応クライアントから tools/list を実行し、ファイル系ツールが列挙されることを確認します。

## 8.3.7 サンプル

### 8.3.7.1 実行例

```bash
npx @modelcontextprotocol/server-filesystem C:/Dev/stock
```

起動後の確認手順:

- MCP対応クライアントで `tools/list` を実行する
- `read_file` や `write_file` などのツール表示を確認する

### 8.3.7.2 検証

- 許可したパス配下のみアクセスできるか確認する
- 不正パス指定時にエラーが返ることを確認する


## 8.3.8 実ソースコード（言語別に記載）

### 8.3.8.1 主要サンプル
- この教材の実装例は、本文中の実行手順に対応しています。
- 必要に応じて、主要コードの抜粋をこのセクションへ追記してください。

## 8.3.9 演習課題

1. ``MCP Servers 入門`` を使う想定ユースケースを1つ定義し、入力・出力の例を記録してください。
2. 最小構成で動かし、デフォルトから設定を1つ変えて挙動の差分を確認してください。
3. ``MCP Servers 入門`` を使わない場合の代替手段と比較し、選ぶ基準をまとめてください。


### 8.3.9.1 解答の目安

1. まず課題の目的を一文で明確化し、入力・出力を対応づけて記述します。
   確認ポイント: 何を変えて何を確認する課題かを第三者が読んで理解できること。
2. 最小構成で一度実行し、設定や条件を1つ変更して差分を比較します。
   確認ポイント: 変更前後の挙動差を具体的に説明できること。
3. 適用条件と代替手段を整理し、選択基準を短くまとめます。
   確認ポイント: なぜその手段を選ぶかを根拠付きで示せること。

## 8.3.10 理解度チェック

1. ``MCP Servers 入門`` の主な役割を1文で説明してください。
2. ``MCP Servers 入門`` を導入する際の最大のメリットと注意点は何ですか？
3. ``MCP Servers 入門`` が向かないユースケースとして、どのようなケースが考えられますか？


### 8.3.10.1 解説の要点

1. 主な役割は、その技術がどの工程を担い、何を改善するかで説明します。
2. メリットは再現性・拡張性・運用性の観点で整理し、注意点は導入コストや複雑性として示します。
3. 使い分けは要件、実装コスト、運用体制の3観点で判断します。
---

[← 前へ](08-protocols/01-mcp.md) | [次へ →](08-protocols/03-backend-integration.md)





---
level: 📖 中級（概念・実践）
prereq: Python基礎 / LLMアプリの基本概念
prev: 08-protocols/02-mcp-servers.md
next: 09-code-generation/00-README.md
---

# 8.4 MCP 実践編: stock-analyzer バックエンド連携

> 📖 中級（概念・実践） | 前提: Python基礎 / LLMアプリの基本概念

## 8.4.1 この教材で身につくこと

- 設定ファイルから server 名とコマンドを抽出
- tools/call リクエストをJSON-RPC形式で作成
- yfinance / fetch を想定した呼び出し設計

## 8.4.2 コンセプト
この教材は、既存の stock-analyzer の MCP 設定を読み取り、MCP サーバ構成とツール呼び出し要求を組み立てる実践例です。

**仕様**: MCP 1.0 / 実装例（2026-05時点）  
**公式ドキュメント**: https://modelcontextprotocol.io/

## 8.4.3 対象ファイル
- stock-analyzer/backend/mcp_agent.config.yaml
- stock-analyzer/backend/aiagent/mcp_agent.py

## 8.4.4 仕組み

1. 設定ファイルを読み込み、利用するMCPサーバ定義を抽出します。
2. サーバごとの command と args をマップ化します。
3. `initialize` と `tools/list` の要求を作成して接続前提を確認します。
4. 業務ツール向けに `tools/call` 要求を組み立てます。
5. 生成したJSON-RPCをバックエンド実装へ組み込める形で出力します。

## 8.4.5 位置づけ

```mermaid
flowchart LR
	A[stock-analyzer backend] --> B[MCP設定読込]
	B --> C[サーバ構成抽出]
	C --> D[tools-call作成]
	D --> E[agent連携設計]
```

## 8.4.6 実行フロー

```mermaid
flowchart TD
	S[開始] --> I[pip install -r requirements]
	I --> L[load-config実行]
	L --> P[mcp server map表示]
	P --> R[agent-request-example実行]
	R --> X[JSON-RPC要求確認]
```

## 8.4.7 実ソースコード（言語別に記載）
### 8.4.7.1 03_backend-integration-python/00_requirements.txt

```txt
PyYAML==6.0.1
python-dotenv==1.0.0
```

### 8.4.7.2 03_backend-integration-python/01_load-config.py

```python
"""Load stock-analyzer MCP config and print server map."""

from pathlib import Path
import yaml


def main() -> None:
	config_path = Path("../../../stock-analyzer/backend/mcp_agent.config.yaml")
	if not config_path.exists():
		raise FileNotFoundError(f"Not found: {config_path}")

	data = yaml.safe_load(config_path.read_text(encoding="utf-8"))
	servers = data.get("mcp", {}).get("servers", {})

	print("Detected MCP servers:")
	for name, cfg in servers.items():
		command = cfg.get("command", "")
		args = cfg.get("args", [])
		print(f"- {name}: {command} {' '.join(args)}")


if __name__ == "__main__":
	main()
```

### 8.4.7.3 03_backend-integration-python/02_agent-request-example.py

```python
"""Build JSON-RPC requests aligned with stock-analyzer MCP setup."""

import json
import uuid


def req(method: str, params: dict) -> dict:
	return {
		"jsonrpc": "2.0",
		"id": str(uuid.uuid4()),
		"method": method,
		"params": params,
	}


def main() -> None:
	initialize = req(
		"initialize",
		{
			"clientInfo": {"name": "stock-tutorial-client", "version": "1.0.0"},
			"capabilities": {},
		},
	)

	list_tools = req("tools/list", {})

	yfinance_call = req(
		"tools/call",
		{
			"name": "yfinance.get_ticker_info",
			"arguments": {"symbol": "7203.T"},
		},
	)

	fetch_call = req(
		"tools/call",
		{
			"name": "fetch.fetch",
			"arguments": {"url": "https://example.com"},
		},
	)

	print("initialize:")
	print(json.dumps(initialize, ensure_ascii=False, indent=2))
	print("\ntools/list:")
	print(json.dumps(list_tools, ensure_ascii=False, indent=2))
	print("\nyfinance tools/call:")
	print(json.dumps(yfinance_call, ensure_ascii=False, indent=2))
	print("\nfetch tools/call:")
	print(json.dumps(fetch_call, ensure_ascii=False, indent=2))


if __name__ == "__main__":
	main()
```

## 8.4.8 サンプル

### 8.4.8.1 実行例

```bash
python 01_load-config.py
python 02_agent-request-example.py
```

### 8.4.8.2 検証

- サーバ名、command、args が config と一致するか確認する
- `tools/call` の name と arguments が対象ツール仕様に沿うか確認する

## 8.4.9 演習課題

1. ``MCP 実践編: stock`` を使う想定ユースケースを1つ定義し、入力・出力の例を記録してください。
2. 最小構成で動かし、デフォルトから設定を1つ変えて挙動の差分を確認してください。
3. ``MCP 実践編: stock`` を使わない場合の代替手段と比較し、選ぶ基準をまとめてください。


### 8.4.9.1 解答の目安

1. まず課題の目的を一文で明確化し、入力・出力を対応づけて記述します。
   確認ポイント: 何を変えて何を確認する課題かを第三者が読んで理解できること。
2. 最小構成で一度実行し、設定や条件を1つ変更して差分を比較します。
   確認ポイント: 変更前後の挙動差を具体的に説明できること。
3. 適用条件と代替手段を整理し、選択基準を短くまとめます。
   確認ポイント: なぜその手段を選ぶかを根拠付きで示せること。

## 8.4.10 理解度チェック

1. ``MCP 実践編: stock`` の主な役割を1文で説明してください。
2. ``MCP 実践編: stock`` を導入する際の最大のメリットと注意点は何ですか？
3. ``MCP 実践編: stock`` が向かないユースケースとして、どのようなケースが考えられますか？


### 8.4.10.1 解説の要点

1. 主な役割は、その技術がどの工程を担い、何を改善するかで説明します。
2. メリットは再現性・拡張性・運用性の観点で整理し、注意点は導入コストや複雑性として示します。
3. 使い分けは要件、実装コスト、運用体制の3観点で判断します。
---

[← 前へ](08-protocols/02-mcp-servers.md) | [次へ →](09-code-generation/00-README.md)





---
level: 🔰 初級（カテゴリ導入）
prereq: "-"
prev: 08-protocols/03-backend-integration.md
next: 09-code-generation/01-aider.md
---

# 9.1 コード生成・開発支援

> 🔰 初級（カテゴリ導入） | 前提: -

コード生成、編集支援、IDE統合のOSSを学ぶ教材です。

## 9.1.1 位置づけ

```mermaid
flowchart LR
  A[開発生産性向上] --> B[Code Generation Tools]
  B --> C[Aider]
  B --> D[Continue]
  B --> E[Tabby/OpenHands]
```

## 9.1.2 学習フロー

```mermaid
flowchart TD
  S[開始] --> A1[AiderでCLI体験]
  A1 --> C1[ContinueでIDE連携]
  C1 --> T1[Tabbyでセルフホスト]
  T1 --> O1[OpenHandsで自律実装]
  O1 --> X[導入方針を確定]
```

## 9.1.3 含まれるOSS
- Aider
- Continue
- Tabby
- OpenHands

## 9.1.4 教材リンク

- [01-aider.md](./01-aider.md)
- [02-continue.md](./02-continue.md)
- [03-tabby.md](./03-tabby.md)
- [04-openhands.md](./04-openhands.md)

## 9.1.5 学習順序
1. Aider（CLIで最速体験）
2. Continue（IDE連携）
3. Tabby（セルフホスト補完）
4. OpenHands（自律実装エージェント）

## 9.1.6 完了条件

- カテゴリ内の主要OSSを3つ以上説明できる
- 最小サンプルを1件以上動作確認できる
- 選定観点（速度/運用性/拡張性）で比較メモを作成できる

---

[← 前へ](08-protocols/03-backend-integration.md) | [次へ →](09-code-generation/01-aider.md)





---
level: 📖 中級（概念・実践）
prereq: Python基礎 / LLMアプリの基本概念
prev: 09-code-generation/00-README.md
next: 09-code-generation/02-continue.md
---

# 9.2 Aider 入門

> 📖 中級（概念・実践） | 前提: Python基礎 / LLMアプリの基本概念

## 9.2.1 この教材で身につくこと

- 複数ファイル編集
- テスト実行と修正ループ
- Git差分を意識した変更

## 9.2.2 コンセプト
Aider は、既存リポジトリを対象に CLI で対話しながら差分編集を進めるツールです。起動時に編集対象を絞り、短い指示を繰り返すことで安全に変更を積み上げます。

**バージョン**: 最新版 / OSS準拠（2026-05時点）  
**公式ドキュメント**: https://aider.chat/

## 9.2.3 仕組み

1. 起動時に対象ファイルを読み込み、編集範囲を固定します。
2. 対話で入力した指示を解釈し、変更候補を差分として生成します。
3. 必要なファイルを横断して編集し、整合性を取ります。
4. テスト結果やエラー内容を取り込み、追加修正を提案します。
5. 最終的に `git diff` で確認しやすい形で変更を残します。

## 9.2.4 位置づけ

```mermaid
flowchart LR
	A[CLIコーディング支援] --> B[Aider]
	B --> C[既存ファイル直接編集]
	B --> D[テスト修正ループ]
	B --> E[Git差分レビュー]
```

## 9.2.5 実行フロー

```mermaid
flowchart TD
	S[開始] --> I[pip install aider-chat]
	I --> R[aiderコマンド実行]
	R --> E[編集提案を適用]
	E --> T[テスト実行]
	T --> X[差分確認]
```

## 9.2.6 最小セットアップ

### 9.2.6.1 インストール

```bash
pip install aider-chat
```

### 9.2.6.2 実行例

```bash
aider --model gpt-4o-mini src/main.py tests/test_main.py
```

起動後の指示例:

- src/main.py に入力値チェックを追加して
- 不正入力時のテストを tests/test_main.py に追加して
- 変更理由を3行で要約して

### 9.2.6.3 検証

```bash
pytest -q
git diff
```

## 9.2.7 使い方のコツ

- 変更対象ファイルを明示して開始
- 小さく依頼してテストを都度実行

## 9.2.8 サンプル

1. `aider --model gpt-4o-mini src/main.py tests/test_main.py` で起動する。
2. 入力バリデーション追加の指示を出す。
3. 生成差分を確認して適用する。
4. `pytest -q` を実行し、失敗時は追加指示で再修正する。
5. `git diff` で最終差分を確認する。


## 9.2.9 実ソースコード（言語別に記載）

### 9.2.9.1 主要サンプル
- この教材の実装例は、本文中の実行手順に対応しています。
- 必要に応じて、主要コードの抜粋をこのセクションへ追記してください。

## 9.2.10 演習課題

1. ``Aider 入門`` を使う想定ユースケースを1つ定義し、入力・出力の例を記録してください。
2. 最小構成で動かし、デフォルトから設定を1つ変えて挙動の差分を確認してください。
3. ``Aider 入門`` を使わない場合の代替手段と比較し、選ぶ基準をまとめてください。


### 9.2.10.1 解答の目安

1. まず課題の目的を一文で明確化し、入力・出力を対応づけて記述します。
   確認ポイント: 何を変えて何を確認する課題かを第三者が読んで理解できること。
2. 最小構成で一度実行し、設定や条件を1つ変更して差分を比較します。
   確認ポイント: 変更前後の挙動差を具体的に説明できること。
3. 適用条件と代替手段を整理し、選択基準を短くまとめます。
   確認ポイント: なぜその手段を選ぶかを根拠付きで示せること。

## 9.2.11 理解度チェック

1. ``Aider 入門`` の主な役割を1文で説明してください。
2. ``Aider 入門`` を導入する際の最大のメリットと注意点は何ですか？
3. ``Aider 入門`` が向かないユースケースとして、どのようなケースが考えられますか？


### 9.2.11.1 解説の要点

1. 主な役割は、その技術がどの工程を担い、何を改善するかで説明します。
2. メリットは再現性・拡張性・運用性の観点で整理し、注意点は導入コストや複雑性として示します。
3. 使い分けは要件、実装コスト、運用体制の3観点で判断します。
---

[← 前へ](09-code-generation/00-README.md) | [次へ →](09-code-generation/02-continue.md)





---
level: 📖 中級（概念・実践）
prereq: Python基礎 / LLMアプリの基本概念
prev: 09-code-generation/01-aider.md
next: 09-code-generation/03-tabby.md
---

# 9.3 Continue 入門

> 📖 中級（概念・実践） | 前提: Python基礎 / LLMアプリの基本概念

## 9.3.1 この教材で身につくこと

- コード補完
- リポジトリチャット
- 差分提案と適用

## 9.3.2 コンセプト
Continue は VS Code/JetBrains 上で補完と対話編集を一体化する OSS アシスタントです。エディタ内でコード文脈を参照しながら、小さな変更を反復する運用に向きます。

**バージョン**: 最新版 / OSS準拠（2026-05時点）  
**公式ドキュメント**: https://www.continue.dev/

## 9.3.3 仕組み

1. IDE拡張として起動し、開いているワークスペース文脈を参照します。
2. チャット指示を解析し、関連ファイル候補を探索します。
3. 変更提案を差分として提示し、ユーザーが適用可否を判断します。
4. 補完と対話を往復し、局所修正を短いサイクルで進めます。
5. 最後にテストや実行で意図どおりかを確認します。

## 9.3.4 位置づけ

```mermaid
flowchart LR
		A[IDE内開発体験] --> B[Continue]
		B --> C[補完]
		B --> D[コードベース対話]
		B --> E[差分提案]
```

## 9.3.5 実行フロー

```mermaid
flowchart TD
		S[開始] --> E[拡張機能を導入]
		E --> C[config.jsonを設定]
		C --> T[チャットでhello送信]
		T --> R[モデル応答確認]
		R --> X[利用開始]
```

## 9.3.6 最小セットアップ

### 9.3.6.1 1. 拡張機能をインストール

- VS Code Marketplace で Continue を導入

### 9.3.6.2 2. 設定ファイル

- config.json に以下の内容を反映

```json
{
	"models": [
		{
			"title": "Local OpenAI Compatible",
			"provider": "openai",
			"model": "gpt-4o-mini",
			"apiBase": "http://localhost:11434/v1",
			"apiKey": "dummy"
		}
	],
	"tabAutocompleteModel": {
		"title": "Local OpenAI Compatible",
		"provider": "openai",
		"model": "gpt-4o-mini",
		"apiBase": "http://localhost:11434/v1",
		"apiKey": "dummy"
	}
}
```

### 9.3.6.3 3. 接続確認

- チャットで hello を送ってモデル応答を確認

## 9.3.7 サンプル

### 9.3.7.1 操作例

1. Continue パネルを開く。
2. 次の指示を送る: `src/api/client.ts のエラーハンドリングを共通化して`。
3. 提示された差分を確認して適用する。
4. 続けて次の指示を送る: `関連テストも最小修正して`。

### 9.3.7.2 検証

- 差分に不要変更が混ざっていないか確認する。
- プロジェクトのテストコマンドを実行して回帰を確認する。
- 失敗時はエラーログを貼って追加修正を依頼する。


## 9.3.8 実ソースコード（言語別に記載）

### 9.3.8.1 主要サンプル
- この教材の実装例は、本文中の実行手順に対応しています。
- 必要に応じて、主要コードの抜粋をこのセクションへ追記してください。

## 9.3.9 演習課題

1. ``Continue 入門`` を使う想定ユースケースを1つ定義し、入力・出力の例を記録してください。
2. 最小構成で動かし、デフォルトから設定を1つ変えて挙動の差分を確認してください。
3. ``Continue 入門`` を使わない場合の代替手段と比較し、選ぶ基準をまとめてください。


### 9.3.9.1 解答の目安

1. まず課題の目的を一文で明確化し、入力・出力を対応づけて記述します。
   確認ポイント: 何を変えて何を確認する課題かを第三者が読んで理解できること。
2. 最小構成で一度実行し、設定や条件を1つ変更して差分を比較します。
   確認ポイント: 変更前後の挙動差を具体的に説明できること。
3. 適用条件と代替手段を整理し、選択基準を短くまとめます。
   確認ポイント: なぜその手段を選ぶかを根拠付きで示せること。

## 9.3.10 理解度チェック

1. ``Continue 入門`` の主な役割を1文で説明してください。
2. ``Continue 入門`` を導入する際の最大のメリットと注意点は何ですか？
3. ``Continue 入門`` が向かないユースケースとして、どのようなケースが考えられますか？


### 9.3.10.1 解説の要点

1. 主な役割は、その技術がどの工程を担い、何を改善するかで説明します。
2. メリットは再現性・拡張性・運用性の観点で整理し、注意点は導入コストや複雑性として示します。
3. 使い分けは要件、実装コスト、運用体制の3観点で判断します。
---

[← 前へ](09-code-generation/01-aider.md) | [次へ →](09-code-generation/03-tabby.md)





---
level: 📖 中級（概念・実践）
prereq: Python基礎 / LLMアプリの基本概念
prev: 09-code-generation/02-continue.md
next: 09-code-generation/04-openhands.md
---

# 9.4 Tabby 入門

> 📖 中級（概念・実践） | 前提: Python基礎 / LLMアプリの基本概念

## 9.4.1 この教材で身につくこと

- ローカル/社内補完
- IDEとの接続
- モデル管理

## 9.4.2 コンセプト
Tabby は、ローカルまたは社内環境で運用できるセルフホスト型のコード補完基盤です。外部SaaSに依存せず、補完品質と運用ポリシーを自組織で管理したい場面に適しています。

**バージョン**: 最新版 / OSS準拠（2026-05時点）  
**公式ドキュメント**: https://tabby.tabbyml.com/

## 9.4.3 仕組み

1. サーバ側でモデルを起動し、補完APIを提供します。
2. IDE拡張がTabbyサーバへ補完リクエストを送信します。
3. サーバが文脈を使って候補を生成し、IDEへ返します。
4. 利用ログと負荷を見ながらモデルとリソースを調整します。
5. 運用時はアクセス制御やバージョン更新を継続的に管理します。

## 9.4.4 位置づけ

```mermaid
flowchart LR
		A[セルフホスト補完基盤] --> B[Tabby]
		B --> C[ローカル提供]
		B --> D[IDE接続]
		B --> E[モデル運用]
```

## 9.4.5 実行フロー

```mermaid
flowchart TD
		S[開始] --> C[docker-compose準備]
		C --> U[docker-compose up -d]
		U --> A[localhost:8082確認]
		A --> I[IDE拡張を接続]
		I --> X[補完確認]
```

## 9.4.6 最小セットアップ

### 9.4.6.1 構成例

```yaml
version: "3.8"

services:
	tabby:
		image: tabbyml/tabby:latest
		container_name: tabby
		ports:
			- "8082:8080"
		command: ["serve", "--model", "TabbyML/StarCoder-1B"]
		restart: unless-stopped
```

### 9.4.6.2 起動

```bash
docker-compose up -d
```

### 9.4.6.3 接続

- URL: http://localhost:8082
- IDE側で Tabby 拡張を使って接続

## 9.4.7 サンプル

### 9.4.7.1 実行例

```bash
docker-compose up -d
```

IDE側の指示例:

- Python ファイルで関数シグネチャを入力し、補完候補を確認する
- 補完が弱い場合はモデル設定を見直して再起動する

### 9.4.7.2 検証

```bash
docker ps
docker logs tabby --tail 50
```


## 9.4.8 実ソースコード（言語別に記載）

### 9.4.8.1 主要サンプル
- この教材の実装例は、本文中の実行手順に対応しています。
- 必要に応じて、主要コードの抜粋をこのセクションへ追記してください。

## 9.4.9 演習課題

1. ``Tabby 入門`` を使う想定ユースケースを1つ定義し、入力・出力の例を記録してください。
2. 最小構成で動かし、デフォルトから設定を1つ変えて挙動の差分を確認してください。
3. ``Tabby 入門`` を使わない場合の代替手段と比較し、選ぶ基準をまとめてください。


### 9.4.9.1 解答の目安

1. まず課題の目的を一文で明確化し、入力・出力を対応づけて記述します。
   確認ポイント: 何を変えて何を確認する課題かを第三者が読んで理解できること。
2. 最小構成で一度実行し、設定や条件を1つ変更して差分を比較します。
   確認ポイント: 変更前後の挙動差を具体的に説明できること。
3. 適用条件と代替手段を整理し、選択基準を短くまとめます。
   確認ポイント: なぜその手段を選ぶかを根拠付きで示せること。

## 9.4.10 理解度チェック

1. ``Tabby 入門`` の主な役割を1文で説明してください。
2. ``Tabby 入門`` を導入する際の最大のメリットと注意点は何ですか？
3. ``Tabby 入門`` が向かないユースケースとして、どのようなケースが考えられますか？


### 9.4.10.1 解説の要点

1. 主な役割は、その技術がどの工程を担い、何を改善するかで説明します。
2. メリットは再現性・拡張性・運用性の観点で整理し、注意点は導入コストや複雑性として示します。
3. 使い分けは要件、実装コスト、運用体制の3観点で判断します。
---

[← 前へ](09-code-generation/02-continue.md) | [次へ →](09-code-generation/04-openhands.md)





---
level: 📖 中級（概念・実践）
prereq: Python基礎 / LLMアプリの基本概念
prev: 09-code-generation/03-tabby.md
---

# 9.5 OpenHands 入門

> 📖 中級（概念・実践） | 前提: Python基礎 / LLMアプリの基本概念

## 9.5.1 この教材で身につくこと

- タスク解析
- コード編集提案
- 実行ログ付きで検証

## 9.5.2 コンセプト
OpenHands は、Issue 形式の要件を入力として実装作業を自律実行する開発エージェントです。調査、編集、実行、ログ確認までを連結し、試作速度を上げることを狙います。

**バージョン**: 最新版 / OSS準拠（2026-05時点）  
**公式ドキュメント**: https://github.com/All-Hands-AI/OpenHands

## 9.5.3 仕組み

1. 入力Issueを解析し、実行計画を作成します。
2. 必要なファイルを探索して変更案を生成します。
3. コード編集後にコマンド実行で結果を検証します。
4. 失敗時はログを参照して再試行します。
5. 最終的に差分と実行ログをまとめて提示します。

## 9.5.4 位置づけ

```mermaid
flowchart LR
		A[自律開発エージェント] --> B[OpenHands]
		B --> C[Issue解析]
		B --> D[コード変更提案]
		B --> E[実行ログ検証]
```

## 9.5.5 実行フロー

```mermaid
flowchart TD
		S[開始] --> D[Docker環境確認]
		D --> R[docker runで起動]
		R --> I[小さなIssueを投入]
		I --> C[差分とログ確認]
		C --> X[採否判断]
```

## 9.5.6 最小セットアップ

### 9.5.6.1 前提条件

- Docker
- OpenAI 互換APIキー

### 9.5.6.2 起動イメージ

```bash
docker run -it --rm \
  -e OPENAI_API_KEY=your-key \
  allhandsai/openhands:latest
```

### 9.5.6.3 学習の進め方

1. 小さなIssueを入力
2. 生成差分を確認
3. テストを実行して採否を判断

## 9.5.7 サンプル

### 9.5.7.1 起動

```bash
docker run -it --rm \
	-e OPENAI_API_KEY=your-key \
	allhandsai/openhands:latest
```

### 9.5.7.2 Issue指示例

- docs/README の誤字を修正して
- src/utils/date.py の重複処理を関数化して
- 変更後にテスト結果を添えて

### 9.5.7.3 検証

```bash
git diff
pytest -q
```


## 9.5.8 実ソースコード（言語別に記載）

### 9.5.8.1 主要サンプル
- この教材の実装例は、本文中の実行手順に対応しています。
- 必要に応じて、主要コードの抜粋をこのセクションへ追記してください。

## 9.5.9 演習課題

1. ``OpenHands 入門`` を使う想定ユースケースを1つ定義し、入力・出力の例を記録してください。
2. 最小構成で動かし、デフォルトから設定を1つ変えて挙動の差分を確認してください。
3. ``OpenHands 入門`` を使わない場合の代替手段と比較し、選ぶ基準をまとめてください。


### 9.5.9.1 解答の目安

1. まず課題の目的を一文で明確化し、入力・出力を対応づけて記述します。
   確認ポイント: 何を変えて何を確認する課題かを第三者が読んで理解できること。
2. 最小構成で一度実行し、設定や条件を1つ変更して差分を比較します。
   確認ポイント: 変更前後の挙動差を具体的に説明できること。
3. 適用条件と代替手段を整理し、選択基準を短くまとめます。
   確認ポイント: なぜその手段を選ぶかを根拠付きで示せること。

## 9.5.10 理解度チェック

1. ``OpenHands 入門`` の主な役割を1文で説明してください。
2. ``OpenHands 入門`` を導入する際の最大のメリットと注意点は何ですか？
3. ``OpenHands 入門`` が向かないユースケースとして、どのようなケースが考えられますか？


### 9.5.10.1 解説の要点

1. 主な役割は、その技術がどの工程を担い、何を改善するかで説明します。
2. メリットは再現性・拡張性・運用性の観点で整理し、注意点は導入コストや複雑性として示します。
3. 使い分けは要件、実装コスト、運用体制の3観点で判断します。
---

[← 前へ](09-code-generation/03-tabby.md)
