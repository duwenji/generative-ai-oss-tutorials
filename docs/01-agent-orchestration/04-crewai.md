# CrewAI 体系ガイド：設計・選択・実践

> 📖 中級（概念・実践） | 前提: Python基礎 / LLMアプリの基本概念

---

## 1. CrewAIとは何か

- **目的**: 役割分担型のマルチエージェント協調フレームワーク。タスク分割・責務明確化・再現性ある自動化に強み。
- **特徴**: Agent/Task/Crew/Processの明示的設計。順次/階層型プロセス。OSSで拡張性あり。
- **主な適用領域**: 分業・レビュー・段階的品質向上・再現性重視の業務自動化。
- **バージョン**: 0.41.1+（2026-05時点）
- **公式**: https://docs.crewai.com/

### 他フレームワークとの違い
| フレームワーク | 構造 | 柔軟性 | 適用例 |
|---|---|---|---|
| CrewAI | 役割・タスク・プロセスを先に定義 | 高い再現性・運用性 | 本番運用・品質管理 |
| AutoGen | エージェント間の対話を柔軟に設計 | 柔軟な対話・探索 | 研究・PoC・対話型 |

---

## 2. 基本構造と設計パターン

### 構成要素
- **Agent**: 役割・目標・個別プロンプトを持つ実行主体
- **Task**: 期待出力・説明・担当Agentを持つ作業単位
- **Crew**: Agent/Task/Processを束ねるチーム
- **Process**: 実行順序（sequential/hierarchical）

### プロセス設計
- **sequential**: タスクを順番に実行。前段の出力を次段へ渡す。
- **hierarchical**: マネージャーAgentが全体を統括し、サブタスクを動的に割り当て。

#### Mermaid図（構造）
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

## 3. プロセス制御と拡張

### タスク分割・役割分担の設計指針
- ゴールを明確化し、責務ごとにAgent/Taskを分割
- レビュー・改善・検証など多段階化も容易

### 「繰り返し制御」の可否と実現方法
- CrewAI標準（sequential/hierarchical）は「定義したタスクを一度ずつ実行」する設計
- **自動ループ（基準を満たすまで繰り返す）**は標準APIでは未サポート

#### 実現パターン
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

## 4. 実装例

### 最小構成サンプル
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

### Python: requirements.txt

- 役割: CrewAI教材の依存関係を固定
- 入力: なし
- 出力: インストール対象パッケージ一覧

```txt
crewai==0.41.1
python-dotenv==1.0.0
```

---

## セットアップ手順（推奨: uv 利用）
### 文字化け・cp932エラー対策（Windows）
CrewAIの出力には絵文字などのUnicode文字が含まれるため、Windows標準のcp932（Shift_JIS）環境ではエンコードエラーが発生します。下記のいずれかを実施してください。

### 1. 仮想環境の作成（Python 3.12系必須）
```bash
uv venv .venv
# Windowsの場合
.venv\Scripts\activate
# macOS/Linuxの場合
source .venv/bin/activate
```

### 2. 依存パッケージのインストール
```bash
uv pip install -r requirements.txt
```

### 3. 文字化け・cp932エラー対策（Windows）
CrewAIの出力にはUnicode文字が含まれるため、Windows標準のcp932環境ではエンコードエラーが発生します。下記のいずれかを実施してください。

```powershell
chcp 65001
$env:PYTHONIOENCODING="utf-8"
```

### 4. CrewAIサンプルの実行と証拠ファイル生成
```bash
python 01_basic-crew.py
```

### 5. 実行結果（抜粋）
```console
Crew Execution Started
Name: crew
ID: a1a466a3-9e02-4629-97c9-de6aa1df25af

Task Started
Name:
会社の新入社員向けに、3時間で完結するAWSトレーニング計画を作成してください。
各セッションのテーマ・所要時間・学習内容を箇条書きで示してください。

Agent Started: AWS Professional
[中略]
Agent Final Answer: 【3時間で完結する新入社員向けAWSトレーニング計画】

Task Completion: AWS Professional
Task Started: task1 の結果をレビューし、改善提案を3点以内で示してください。
Agent Started: Quality Reviewer
[中略]
Agent Final Answer: 【レビューコメント】

Task Completion: Quality Reviewer
Crew Execution Completed
Tracing Status: disabled
```
## 5. 選択基準と比較

| 観点 | CrewAI | AutoGen |
|---|---|---|
| 設計 | 役割・タスク・プロセスを明示 | 柔軟な対話・動的設計 |
| 再現性 | 高い | 低め（対話に依存） |
| 運用性 | 本番向き | 研究・PoC向き |
| 拡張性 | OSSで拡張容易 | 柔軟だが複雑化しやすい |
| 適用例 | 品質管理・レビュー・分業 | 対話型探索・実験 |

### 適用/非適用ユースケース
- **CrewAIが向く**: 再現性・品質・分業・レビュー重視、本番運用、段階的改善
- **CrewAIが向かない**: 柔軟な対話・動的な探索が主目的の場合

---

## 6. Q&A・トラブルシュート

- Q. モデルを明示的に指定できる？
    - A. `Agent(..., model="gpt-4o-mini")` のように指定可能。未指定時は `OPENAI_MODEL_NAME` を参照。
- Q. Windowsで文字化けする
    - A. `chcp 65001` と `PYTHONIOENCODING="utf-8"` を設定
- Q. hierarchicalで自動ループできる？
    - A. 現状は自動再タスク生成は難しい。Python側でループ制御推奨。

---

## 7. 参考リンク・演習課題

- [CrewAI 公式ドキュメント](https://docs.crewai.com/)
- [CrewAI GitHub](https://github.com/joaomdmoura/crewai)
- [Agent クラスリファレンス](https://docs.crewai.com/core-concepts/Agents)
- [Task クラスリファレンス](https://docs.crewai.com/core-concepts/Tasks)
- [プロセス設定ガイド](https://docs.crewai.com/core-concepts/Processes)

### 演習課題
1. CrewAIを使う想定ユースケースを1つ定義し、入力・出力例を記録
2. 最小構成で動かし、設定を1つ変えて挙動差分を確認
3. CrewAIを使わない場合の代替手段と比較し、選択基準をまとめる

---

[← 前へ](01-agent-orchestration/03-autogen.md) | [次へ →](01-agent-orchestration/05-semantic-kernel.md)






