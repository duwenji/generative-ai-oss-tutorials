# 教材構造統一 実装計画

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 9カテゴリ・43個の個別教材ファイルを `00_STYLE_GUIDE.md` の標準見出し順に統一する。

**Architecture:** カテゴリ単位（Task 1〜9）で処理する。各タスク内ではファイルを1つずつ読み込み → 変換 → チェックリスト検証 → コミットの流れで進める。コードサンプルの内容は変更しない。

**Tech Stack:** Markdown, mermaid（図はそのまま利用/移動のみ）

## Global Constraints

- スタイルガイド: `00_STYLE_GUIDE.md`（標準見出し順の根拠）
- 設計仕様: `docs/superpowers/specs/2026-06-28-structure-unification-design.md`
- コードサンプル（

この例では、教材構造統一 実装計画 の基本的な利用手順を示します。サンプルコードの意図と、実行時に何が起こるのかを確認しながら読み進めると理解しやすくなります。

```python / ```javascript 等）の内容は**変更しない**
- `00-README.md`（カテゴリ入口）は**対象外**
- 各ファイルの前後ナビゲーションリンクは変換後も正しいパスを維持する

---

## 標準見出し順（全タスク共通参照）

```
# {ツール名} - {一行説明}
> 📖 {難易度} | 前提: {前提スキル}

## この教材で身につくこと
## 概要
## 位置づけ
## 実行フロー
## 最小セットアップ
## 実ソースコード
## 演習課題
## 理解度チェック
## 参考リンク
[← 前へ](...) | [次へ →](...)
```

## 変換ルール早見表（全タスク共通参照）

| 既存セクション名 | 変換先 |
|----------------|--------|
| `## コンセプト` | `## 概要` にリネーム |
| `## 仕組み` / `## 仕組み・実行フロー` | 内容を `## 概要` に統合（実行フロー図は `## 実行フロー` へ移動） |
| `## 前提条件` | `## 最小セットアップ` にリネーム |
| `## OSS概要・公式情報` | `## 概要` 冒頭のバージョン・リンク情報に統合 |
| `## 特徴・できること` | `## 概要` の主な機能リストに統合 |
| `## 比較・選定ポイント` | `## 概要` 末尾に統合 |
| `## 公式情報の参照・引用について` | `## 概要` 内バージョン記載に統合（1行化） |
| `## サンプル` / `## 検証` | `## 実ソースコード` 内に統合 |
| `## 補足` / `## よくある質問` | `## 参考リンク` 直前に残す（内容が有益な場合） |
| `## 1. 機能・役割` 等（番号付き） | 番号を除いて標準見出し名にリネーム |

**重複削除ルール:**  
「この教材で身につくこと」と「概要 > 主な機能」に**同じ内容**が箇条書きで並んでいる場合、`## この教材で身につくこと` は「学習後にできること」を3〜5項目で簡潔に残し、`## 概要` の機能リストは機能説明として書き分ける。

**欠けているセクションへの補充ルール:**  
- `## 演習課題`: そのツールに合わせた3問 + 各問の「解答の目安」を追加。形式は `01-langchain.md` の演習課題セクションを参照。
- `## 理解度チェック`: 3問 + 「解説の要点」を追加。形式は `01-langchain.md` の理解度チェックセクションを参照。
- `## 位置づけ`: mermaid flowchart LR 図が欠けている場合は、既存の説明文から関係図を起こす。
- `## 実行フロー`: mermaid flowchart TD 図が欠けている場合は、最小セットアップ手順から流れ図を起こす。

---

## Task 1: 01-agent-orchestration（5ファイル）

**Files:**
- Modify: `docs/01-agent-orchestration/01-langchain.md`
- Modify: `docs/01-agent-orchestration/02-langgraph.md`
- Modify: `docs/01-agent-orchestration/03-autogen.md`
- Modify: `docs/01-agent-orchestration/04-crewai.md`
- Modify: `docs/01-agent-orchestration/05-semantic-kernel.md`

**Known issues (読み込み済みファイルの確認事項):**

`01-langchain.md`:
- `## コンセプト` → `## 概要` にリネーム
- `## 仕組み`（処理の流れ・メリット・デメリット）→ `## 概要` 内に統合
- 「この教材で身につくこと」と「コンセプト > 主な機能」が同一内容 → 後者を削除し、前者は3〜5項目に簡潔化
- `## 前提条件` → `## 最小セットアップ` にリネーム
- `## サンプル`（実行順・検証・成功時の期待結果・典型エラー）→ `## 実ソースコード` 冒頭の「実行手順と検証」に統合
- 見出し順を標準順に並べ替え

`02-langgraph.md`:
- `## コンセプト` → `## 概要` にリネーム
- `## 仕組み`（番号リスト）→ `## 概要` に統合
- `## 前提条件` → `## 最小セットアップ` にリネーム（インストール手順を確認・補充）
- 見出し順を標準順に並べ替え

- [ ] **Step 1: `01-langchain.md` を読み込み、現在の見出し一覧をメモする**

  ファイルを読み込み、`##` 行だけを抽出して現在の見出し順序と標準順序の差分を把握する。

- [ ] **Step 2: `01-langchain.md` を変換ルール早見表に従って書き換える**

  変換後の見出し順序:
  ```
  # LangChain - LLMアプリ開発の標準ライブラリ
  > 📖 中級（概念・実践） | 前提: Python基礎 / LLMアプリの基本概念

  ## この教材で身につくこと
  （重複削除後の3〜5項目）

  ## 概要
  （旧「コンセプト」の説明文 + 旧「仕組み」のメリット/デメリット + バージョン・公式ドキュメントリンク）

  ## 位置づけ
  （既存のmermaid図 + 説明文）

  ## 実行フロー
  （既存のmermaid図 + 説明文）

  ## 最小セットアップ
  （旧「前提条件」の内容 + セキュリティ注意）

  ## 実ソースコード
  （旧「サンプル」セクションの実行順・典型エラーを冒頭に移動 + 既存コード）

  ## 演習課題
  （既存の3問 + 解答の目安）

  ## 理解度チェック
  （既存の3問 + 解説の要点）

  ## 参考リンク
  （補足のQ&A + 参考リンク）

  [← 前へ](00-README.md) | [次へ →](02-langgraph.md)
  ```

- [ ] **Step 3: `01-langchain.md` の変換後チェックリストを確認する**

  - [ ] 見出し順が標準順と一致している
  - [ ] 「この教材で身につくこと」と「概要」に重複説明がない
  - [ ] `## 位置づけ` に mermaid 図がある
  - [ ] `## 実行フロー` に mermaid 図がある
  - [ ] `## 演習課題` に3問 + 解答の目安がある
  - [ ] `## 理解度チェック` に3問 + 解説の要点がある
  - [ ] 前後リンクが正しい（← 00-README.md | → 02-langgraph.md）
  - [ ] コードブロックに言語指定がある（```python, ```bash 等）

- [ ] **Step 4: `02-langgraph.md` 〜 `05-semantic-kernel.md` を同様に変換・確認する**

  各ファイルについて Step 1〜3 を繰り返す。ファイルごとの前後リンク:
  - `02-langgraph.md`: ← `01-langchain.md` | → `03-autogen.md`
  - `03-autogen.md`: ← `02-langgraph.md` | → `04-crewai.md`
  - `04-crewai.md`: ← `03-autogen.md` | → `05-semantic-kernel.md`
  - `05-semantic-kernel.md`: ← `04-crewai.md` | → `../02-rag/01-llamaindex.md`（カテゴリ末尾のため要確認）

- [ ] **Step 5: コミットする**

  ```bash
  git add docs/01-agent-orchestration/01-langchain.md \
          docs/01-agent-orchestration/02-langgraph.md \
          docs/01-agent-orchestration/03-autogen.md \
          docs/01-agent-orchestration/04-crewai.md \
          docs/01-agent-orchestration/05-semantic-kernel.md
  git commit -m "docs: unify structure of 01-agent-orchestration tutorials"
  ```

---

## Task 2: 02-rag（7ファイル）

**Files:**
- Modify: `docs/02-rag/01-llamaindex.md`
- Modify: `docs/02-rag/02-haystack.md`
- Modify: `docs/02-rag/03-txtai.md`
- Modify: `docs/02-rag/04-ragflow.md`
- Modify: `docs/02-rag/05-privategpt.md`
- Modify: `docs/02-rag/06-quivr.md`
- Modify: `docs/02-rag/07-onyx.md`

**Known issues (読み込み済みファイルの確認事項):**

`01-llamaindex.md`:
- `## OSS概要・公式情報` → `## 概要` 冒頭のバージョン・リンク情報として統合
- `## この教材で身につくこと` が2番目になっている → 1番目に移動
- `## 特徴・できること`（主な特徴・できること・できないこと）→ `## 概要` に統合
- `## 仕組み・実行フロー` → `## 概要`（仕組み部分）+ `## 実行フロー`（フロー図）に分割
- `## 比較・選定ポイント` → `## 概要` 末尾に統合
- `## 公式情報の参照・引用について` → `## 概要` 内バージョン記載に統合（1行化）
- `## 最小セットアップ手順` → `## 最小セットアップ` にリネーム
- 見出し順を標準順に並べ替え

- [ ] **Step 1: 全7ファイルを読み込み、各ファイルの見出し一覧をメモする**

- [ ] **Step 2: `01-llamaindex.md` を変換ルール早見表に従って書き換える**

  変換後の見出し順序:
  ```
  # LlamaIndex 入門
  > 📖 中級（概念・実践） | 前提: Python基礎 / LLMアプリの基本概念

  ## この教材で身につくこと
  （既存の3項目）

  ## 概要
  （バージョン・公式ドキュメントリンク + 旧「特徴・できること」+ 旧「比較・選定ポイント」）

  ## 位置づけ
  （既存のmermaid図 + 説明文）

  ## 実行フロー
  （既存のmermaid図 + 説明文）

  ## 最小セットアップ
  （旧「最小セットアップ手順」の内容）

  ## 実ソースコード
  （既存のコード + 実行結果例）

  ## 演習課題
  （既存の3問 + 解答の目安）

  ## 理解度チェック
  （既存の3問 + 解説の要点）

  ## 参考リンク
  （旧「よくある質問・補足」+ 参考リンク）

  [← 前へ](00-README.md) | [次へ →](02-haystack.md)
  ```

- [ ] **Step 3: `01-llamaindex.md` の変換後チェックリストを確認する**

  - [ ] 見出し順が標準順と一致している
  - [ ] `## この教材で身につくこと` が最初のセクション
  - [ ] 重複説明がない
  - [ ] `## 位置づけ` に mermaid 図がある
  - [ ] `## 実行フロー` に mermaid 図がある
  - [ ] `## 演習課題` に3問以上ある
  - [ ] `## 理解度チェック` に3問以上ある
  - [ ] 前後リンクが正しい
  - [ ] コードブロックに言語指定がある

- [ ] **Step 4: `02-haystack.md` 〜 `07-onyx.md` を同様に変換・確認する**

  各ファイルについて Step 1〜3 を繰り返す。ファイルごとの前後リンク:
  - `02-haystack.md`: ← `01-llamaindex.md` | → `03-txtai.md`
  - `03-txtai.md`: ← `02-haystack.md` | → `04-ragflow.md`
  - `04-ragflow.md`: ← `03-txtai.md` | → `05-privategpt.md`
  - `05-privategpt.md`: ← `04-ragflow.md` | → `06-quivr.md`
  - `06-quivr.md`: ← `05-privategpt.md` | → `07-onyx.md`
  - `07-onyx.md`: ← `06-quivr.md` | → `../03-inference/01-vllm.md`（カテゴリ末尾のため要確認）

- [ ] **Step 5: コミットする**

  ```bash
  git add docs/02-rag/01-llamaindex.md \
          docs/02-rag/02-haystack.md \
          docs/02-rag/03-txtai.md \
          docs/02-rag/04-ragflow.md \
          docs/02-rag/05-privategpt.md \
          docs/02-rag/06-quivr.md \
          docs/02-rag/07-onyx.md
  git commit -m "docs: unify structure of 02-rag tutorials"
  ```

---

## Task 3: 03-inference（4ファイル）

**Files:**
- Modify: `docs/03-inference/01-vllm.md`
- Modify: `docs/03-inference/02-ollama.md`
- Modify: `docs/03-inference/03-tgi.md`
- Modify: `docs/03-inference/04-llama-cpp.md`

**Known issues (読み込み済みファイルの確認事項):**

`01-vllm.md`:
- `## コンセプト`（主な特徴リスト含む）→ `## 概要` にリネーム
- `## 仕組み`（処理の流れ・メリット・デメリット）→ `## 概要` に統合
- mermaid 図が `## 前提条件` の直後に混入 → `## 位置づけ` セクションに移動
- `## 前提条件` → `## 最小セットアップ` にリネーム
- 見出し順を標準順に並べ替え

- [ ] **Step 1: 全4ファイルを読み込み、各ファイルの見出し一覧をメモする**

- [ ] **Step 2: 各ファイルを変換ルール早見表に従って書き換える**

  `01-vllm.md` の変換後見出し順序:
  ```
  # vLLM - 高速LLM推論サーバ
  > 📖 中級（概念・実践） | 前提: Python基礎 / LLMアプリの基本概念

  ## この教材で身につくこと
  ## 概要
  ## 位置づけ   ← mermaid図をここに移動
  ## 実行フロー
  ## 最小セットアップ
  ## 実ソースコード
  ## 演習課題
  ## 理解度チェック
  ## 参考リンク
  [← 前へ](00-README.md) | [次へ →](02-ollama.md)
  ```

- [ ] **Step 3: 各ファイルの変換後チェックリストを確認する（全4ファイル）**

  - [ ] 見出し順が標準順と一致している
  - [ ] 重複説明がない
  - [ ] `## 位置づけ` に mermaid 図がある
  - [ ] `## 実行フロー` に mermaid 図がある
  - [ ] `## 演習課題` に3問以上ある
  - [ ] `## 理解度チェック` に3問以上ある
  - [ ] 前後リンクが正しい
  - [ ] コードブロックに言語指定がある

  前後リンク:
  - `01-vllm.md`: ← `00-README.md` | → `02-ollama.md`
  - `02-ollama.md`: ← `01-vllm.md` | → `03-tgi.md`
  - `03-tgi.md`: ← `02-ollama.md` | → `04-llama-cpp.md`
  - `04-llama-cpp.md`: ← `03-tgi.md` | → `../04-ui/01-open-webui.md`（カテゴリ末尾のため要確認）

- [ ] **Step 4: コミットする**

  ```bash
  git add docs/03-inference/01-vllm.md \
          docs/03-inference/02-ollama.md \
          docs/03-inference/03-tgi.md \
          docs/03-inference/04-llama-cpp.md
  git commit -m "docs: unify structure of 03-inference tutorials"
  ```

---

## Task 4: 04-ui（7ファイル）

**Files:**
- Modify: `docs/04-ui/01-open-webui.md`
- Modify: `docs/04-ui/02-dify.md`
- Modify: `docs/04-ui/03-flowise.md`
- Modify: `docs/04-ui/04-librechat.md`
- Modify: `docs/04-ui/05-chatbot-ui.md`
- Modify: `docs/04-ui/06-lobechat.md`
- Modify: `docs/04-ui/07-anythingllm.md`

- [ ] **Step 1: 全7ファイルを読み込み、各ファイルの見出し一覧をメモする**

- [ ] **Step 2: 各ファイルを変換ルール早見表に従って書き換える**

  変換後の各ファイルは標準見出し順に従う:
  ```
  ## この教材で身につくこと
  ## 概要
  ## 位置づけ
  ## 実行フロー
  ## 最小セットアップ
  ## 実ソースコード
  ## 演習課題
  ## 理解度チェック
  ## 参考リンク
  ```
  演習課題・理解度チェックが欠けている場合は「補充ルール」に従いそのツールに合わせた内容を作成する。

- [ ] **Step 3: 各ファイルの変換後チェックリストを確認する（全7ファイル）**

  - [ ] 見出し順が標準順と一致している
  - [ ] 重複説明がない
  - [ ] `## 位置づけ` に mermaid 図がある
  - [ ] `## 実行フロー` に mermaid 図がある
  - [ ] `## 演習課題` に3問以上ある
  - [ ] `## 理解度チェック` に3問以上ある
  - [ ] 前後リンクが正しい
  - [ ] コードブロックに言語指定がある

  前後リンク:
  - `01-open-webui.md`: ← `00-README.md` | → `02-dify.md`
  - `02-dify.md`: ← `01-open-webui.md` | → `03-flowise.md`
  - `03-flowise.md`: ← `02-dify.md` | → `04-librechat.md`
  - `04-librechat.md`: ← `03-flowise.md` | → `05-chatbot-ui.md`
  - `05-chatbot-ui.md`: ← `04-librechat.md` | → `06-lobechat.md`
  - `06-lobechat.md`: ← `05-chatbot-ui.md` | → `07-anythingllm.md`
  - `07-anythingllm.md`: ← `06-lobechat.md` | → `../05-evaluation/01-promptfoo.md`（カテゴリ末尾のため要確認）

- [ ] **Step 4: コミットする**

  ```bash
  git add docs/04-ui/01-open-webui.md \
          docs/04-ui/02-dify.md \
          docs/04-ui/03-flowise.md \
          docs/04-ui/04-librechat.md \
          docs/04-ui/05-chatbot-ui.md \
          docs/04-ui/06-lobechat.md \
          docs/04-ui/07-anythingllm.md
  git commit -m "docs: unify structure of 04-ui tutorials"
  ```

---

## Task 5: 05-evaluation（4ファイル）

**Files:**
- Modify: `docs/05-evaluation/01-promptfoo.md`
- Modify: `docs/05-evaluation/02-ragas.md`
- Modify: `docs/05-evaluation/03-langfuse.md`
- Modify: `docs/05-evaluation/04-guardrails.md`

**Known issues (読み込み済みファイルの確認事項):**

`01-promptfoo.md`:
- 番号付き見出し（`## 1. 機能・役割`, `## 2. この教材で身につくこと`, 等）→ 番号を除いて標準名にリネーム
- `## 1. 機能・役割（概要）` → `## 概要` にリネーム
- `## 2. この教材で身につくこと（ゴール）` → `## この教材で身につくこと`（1番目に移動）
- `## 3. コンセプト` → `## 概要` に統合
- `## 4. 仕組み（全体の流れ）` → `## 概要` に統合
- `## 5. 位置づけ（図解）` → `## 位置づけ`
- `## 6. 事前準備` → `## 最小セットアップ` に統合
- 見出し順を標準順に並べ替え

- [ ] **Step 1: 全4ファイルを読み込み、各ファイルの見出し一覧をメモする**

- [ ] **Step 2: 各ファイルを変換ルール早見表に従って書き換える**

  `01-promptfoo.md` の変換後見出し順序:
  ```
  # promptfoo 入門
  > 📖 中級（概念・実践） | 前提: ...

  ## この教材で身につくこと
  ## 概要          ← 旧「機能・役割」+「コンセプト」+「仕組み」を統合
  ## 位置づけ      ← 旧「5. 位置づけ（図解）」
  ## 実行フロー
  ## 最小セットアップ  ← 旧「6. 事前準備」+ 以降の環境設定
  ## 実ソースコード
  ## 演習課題
  ## 理解度チェック
  ## 参考リンク
  ```

- [ ] **Step 3: 各ファイルの変換後チェックリストを確認する（全4ファイル）**

  - [ ] 番号付き見出しが残っていない
  - [ ] 見出し順が標準順と一致している
  - [ ] 重複説明がない
  - [ ] `## 位置づけ` に mermaid 図がある
  - [ ] `## 実行フロー` に mermaid 図がある
  - [ ] `## 演習課題` に3問以上ある
  - [ ] `## 理解度チェック` に3問以上ある
  - [ ] 前後リンクが正しい
  - [ ] コードブロックに言語指定がある

  前後リンク:
  - `01-promptfoo.md`: ← `00-README.md` | → `02-ragas.md`
  - `02-ragas.md`: ← `01-promptfoo.md` | → `03-langfuse.md`
  - `03-langfuse.md`: ← `02-ragas.md` | → `04-guardrails.md`
  - `04-guardrails.md`: ← `03-langfuse.md` | → `../06-multimodal/01-whisper.md`（カテゴリ末尾のため要確認）

- [ ] **Step 4: コミットする**

  ```bash
  git add docs/05-evaluation/01-promptfoo.md \
          docs/05-evaluation/02-ragas.md \
          docs/05-evaluation/03-langfuse.md \
          docs/05-evaluation/04-guardrails.md
  git commit -m "docs: unify structure of 05-evaluation tutorials"
  ```

---

## Task 6: 06-multimodal（7ファイル）

**Files:**
- Modify: `docs/06-multimodal/01-whisper.md`
- Modify: `docs/06-multimodal/02-piper.md`
- Modify: `docs/06-multimodal/03-comfyui.md`
- Modify: `docs/06-multimodal/04-automatic1111.md`
- Modify: `docs/06-multimodal/05-invokeai.md`
- Modify: `docs/06-multimodal/06-fooocus.md`
- Modify: `docs/06-multimodal/07-coqui-tts.md`

- [ ] **Step 1: 全7ファイルを読み込み、各ファイルの見出し一覧をメモする**

- [ ] **Step 2: 各ファイルを変換ルール早見表に従って書き換える**

  変換後の各ファイルは標準見出し順に従う。演習課題・理解度チェックが欠けている場合は「補充ルール」に従い追加する。

- [ ] **Step 3: 各ファイルの変換後チェックリストを確認する（全7ファイル）**

  - [ ] 見出し順が標準順と一致している
  - [ ] 重複説明がない
  - [ ] `## 位置づけ` に mermaid 図がある
  - [ ] `## 実行フロー` に mermaid 図がある
  - [ ] `## 演習課題` に3問以上ある
  - [ ] `## 理解度チェック` に3問以上ある
  - [ ] 前後リンクが正しい
  - [ ] コードブロックに言語指定がある

  前後リンク:
  - `01-whisper.md`: ← `00-README.md` | → `02-piper.md`
  - `02-piper.md`: ← `01-whisper.md` | → `03-comfyui.md`
  - `03-comfyui.md`: ← `02-piper.md` | → `04-automatic1111.md`
  - `04-automatic1111.md`: ← `03-comfyui.md` | → `05-invokeai.md`
  - `05-invokeai.md`: ← `04-automatic1111.md` | → `06-fooocus.md`
  - `06-fooocus.md`: ← `05-invokeai.md` | → `07-coqui-tts.md`
  - `07-coqui-tts.md`: ← `06-fooocus.md` | → `../07-visualization/01-vega-lite.md`（カテゴリ末尾のため要確認）

- [ ] **Step 4: コミットする**

  ```bash
  git add docs/06-multimodal/01-whisper.md \
          docs/06-multimodal/02-piper.md \
          docs/06-multimodal/03-comfyui.md \
          docs/06-multimodal/04-automatic1111.md \
          docs/06-multimodal/05-invokeai.md \
          docs/06-multimodal/06-fooocus.md \
          docs/06-multimodal/07-coqui-tts.md
  git commit -m "docs: unify structure of 06-multimodal tutorials"
  ```

---

## Task 7: 07-visualization（2ファイル）

**Files:**
- Modify: `docs/07-visualization/01-vega-lite.md`
- Modify: `docs/07-visualization/02-echarts.md`

- [ ] **Step 1: 全2ファイルを読み込み、各ファイルの見出し一覧をメモする**

- [ ] **Step 2: 各ファイルを変換ルール早見表に従って書き換える**

- [ ] **Step 3: 各ファイルの変換後チェックリストを確認する**

  - [ ] 見出し順が標準順と一致している
  - [ ] 重複説明がない
  - [ ] `## 位置づけ` に mermaid 図がある
  - [ ] `## 実行フロー` に mermaid 図がある
  - [ ] `## 演習課題` に3問以上ある
  - [ ] `## 理解度チェック` に3問以上ある
  - [ ] 前後リンクが正しい
  - [ ] コードブロックに言語指定がある

  前後リンク:
  - `01-vega-lite.md`: ← `00-README.md` | → `02-echarts.md`
  - `02-echarts.md`: ← `01-vega-lite.md` | → `../08-protocols/01-mcp.md`（カテゴリ末尾のため要確認）

- [ ] **Step 4: コミットする**

  ```bash
  git add docs/07-visualization/01-vega-lite.md \
          docs/07-visualization/02-echarts.md
  git commit -m "docs: unify structure of 07-visualization tutorials"
  ```

---

## Task 8: 08-protocols（3ファイル）

**Files:**
- Modify: `docs/08-protocols/01-mcp.md`
- Modify: `docs/08-protocols/02-mcp-servers.md`
- Modify: `docs/08-protocols/03-backend-integration.md`

- [ ] **Step 1: 全3ファイルを読み込み、各ファイルの見出し一覧をメモする**

- [ ] **Step 2: 各ファイルを変換ルール早見表に従って書き換える**

  プロトコル系はコードサンプルより仕様説明が多い傾向があるため、`## 実ソースコード` が薄い場合は既存の設定例・JSON スニペットをそのセクションに集約する。

- [ ] **Step 3: 各ファイルの変換後チェックリストを確認する**

  - [ ] 見出し順が標準順と一致している
  - [ ] 重複説明がない
  - [ ] `## 位置づけ` に mermaid 図がある
  - [ ] `## 実行フロー` に mermaid 図がある
  - [ ] `## 演習課題` に3問以上ある
  - [ ] `## 理解度チェック` に3問以上ある
  - [ ] 前後リンクが正しい
  - [ ] コードブロックに言語指定がある

  前後リンク:
  - `01-mcp.md`: ← `00-README.md` | → `02-mcp-servers.md`
  - `02-mcp-servers.md`: ← `01-mcp.md` | → `03-backend-integration.md`
  - `03-backend-integration.md`: ← `02-mcp-servers.md` | → `../09-code-generation/01-aider.md`（カテゴリ末尾のため要確認）

- [ ] **Step 4: コミットする**

  ```bash
  git add docs/08-protocols/01-mcp.md \
          docs/08-protocols/02-mcp-servers.md \
          docs/08-protocols/03-backend-integration.md
  git commit -m "docs: unify structure of 08-protocols tutorials"
  ```

---

## Task 9: 09-code-generation（4ファイル）

**Files:**
- Modify: `docs/09-code-generation/01-aider.md`
- Modify: `docs/09-code-generation/02-continue.md`
- Modify: `docs/09-code-generation/03-tabby.md`
- Modify: `docs/09-code-generation/04-openhands.md`

- [ ] **Step 1: 全4ファイルを読み込み、各ファイルの見出し一覧をメモする**

- [ ] **Step 2: 各ファイルを変換ルール早見表に従って書き換える**

- [ ] **Step 3: 各ファイルの変換後チェックリストを確認する**

  - [ ] 見出し順が標準順と一致している
  - [ ] 重複説明がない
  - [ ] `## 位置づけ` に mermaid 図がある
  - [ ] `## 実行フロー` に mermaid 図がある
  - [ ] `## 演習課題` に3問以上ある
  - [ ] `## 理解度チェック` に3問以上ある
  - [ ] 前後リンクが正しい
  - [ ] コードブロックに言語指定がある

  前後リンク:
  - `01-aider.md`: ← `00-README.md` | → `02-continue.md`
  - `02-continue.md`: ← `01-aider.md` | → `03-tabby.md`
  - `03-tabby.md`: ← `02-continue.md` | → `04-openhands.md`
  - `04-openhands.md`: ← `03-tabby.md` | → （最終ファイルのためリンクなし）

- [ ] **Step 4: コミットする**

  ```bash
  git add docs/09-code-generation/01-aider.md \
          docs/09-code-generation/02-continue.md \
          docs/09-code-generation/03-tabby.md \
          docs/09-code-generation/04-openhands.md
  git commit -m "docs: unify structure of 09-code-generation tutorials"
  ```

---

## 関連ドキュメント

- 設計仕様: [`docs/superpowers/specs/2026-06-28-structure-unification-design.md`](../specs/2026-06-28-structure-unification-design.md)
- スタイルガイド: [`00_STYLE_GUIDE.md`](../../../00_STYLE_GUIDE.md)
- MASTER-INDEX: [`MASTER-INDEX.md`](../../../MASTER-INDEX.md)
