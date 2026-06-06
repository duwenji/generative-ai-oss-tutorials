# txtai 入門

> 📖 中級（概念・実践） | 前提: Python基礎 / LLMアプリの基本概念

---

## OSS概要・公式情報（2026-05-23時点）
- **バージョン**: 9.8.0+
- **公式ドキュメント**: https://neuml.github.io/txtai/
- **GitHub**: https://github.com/neuml/txtai
- **FAQ/制約/リリースノート**: https://github.com/neuml/txtai/discussions
- **公式情報参照日**: 2026-05-23

---

## この教材で身につくこと
- txtaiの主な役割・適用場面を説明できる
- 最小構成で動かす手順を実行できる
- 導入時のメリット・注意点を整理できる

---

## 特徴・できること
### 主な特徴
- 埋め込み検索と生成ワークフローをまとめて扱える軽量フレームワーク
- ローカル・クラウド両対応で、最小構成から意味検索を始めやすい
- Python中心で完結し、APIもシンプル

### できること（Features）
- 文書の埋め込み・意味検索・インデックス作成
- 生成モデルとの連携によるQAや要約
- ローカル/クラウドモデルの切り替え
- 軽量なAPIサーバーとしての運用

### できないこと・制約事項（Limitations）
- 高度なUI機能は非搭載（外部実装が必要）
- 大規模分散処理や商用DB連携は限定的
- 最新制約は公式FAQ・GitHub Discussionsの確認が前提

### 注意事項・推奨構成
- Python 3.12（3.12系を推奨）
- モデル選定・APIキー管理に注意
- 公式FAQ・リリースノートでバージョン互換性を確認

---

## 利用モデル
txtaiは用途に応じて埋め込みモデルや生成モデルを切り替えられます。

- ローカルモデル（例: sentence-transformers / Ollama）: オフライン実行やデータ統制に向く
- クラウドモデル（例: OpenAI API）: 高性能モデルを利用しやすい一方、送信データとコスト管理が必要

本教材では、まずローカル構成で検索品質を確認し、必要に応じてクラウド構成を比較して採用判断する流れを推奨します。

---

## 仕組み・実行フロー
### 仕組み（全体像）
1. 目的と入力を定義し、対象データや利用モデルを準備
2. 検索・生成などのコア処理を実行
3. 結果を保存または表示し、次工程に渡せる形式へ整形
4. パラメータを調整して挙動差分を比較
5. 再実行手順と確認ポイントを定着

```mermaid
flowchart TD
    S[開始] --> D[文書配列準備]
    D --> E[Embeddings初期化]
    E --> I[インデックス作成]
    I --> Q[クエリ検索]
    Q --> O[上位結果表示]
    O --> X[終了]
```

## 比較・選定ポイント
- Pythonのみで完結し、最小限のコードで意味検索や生成ワークフローを実現できる軽量性
- ローカル/クラウド両対応で、データ統制重視と精度重視の選択が可能
- APIがシンプルで学習コストが低く、PoCや小規模用途に適する
- 大規模分散や商用DB連携、UI機能は限定的（要件次第で他OSSと比較）
- LlamaIndexやHaystack等と比較し、運用規模に応じて選定

---

## まず試す
```bash
# uv未導入の場合
python -m pip install uv

# 仮想環境作成
uv venv .venv
# Windows: .venv\Scripts\activate
# macOS/Linux: source .venv/bin/activate

# パッケージインストール
uv pip install txtai sentence-transformers

# 最小検索を実行
python 01_basic-search.py
```

---

## サンプル
同じ文書集合・同じ質問を使って、「ローカル埋め込み構成」と「クラウド埋め込み構成」の差分を確認します。

### 実行例
```bash
# 1) 最小環境を準備
pip install txtai sentence-transformers

# 2) 最小検索を実行
python 01_basic-search.py

# 3) 同じ質問で上位結果を確認
#    質問: RAGの基本

# 4) モデル構成を切り替えて再実行
#    - A: ローカル埋め込み（all-MiniLM-L6-v2）
#    - B: クラウド埋め込み（OpenAI Embeddings など）
```

### 期待される確認ポイント
- 上位結果の妥当性: 意図に合う文書が上位に来るか
- スコア傾向: 上位$k$件のスコア差が極端でないか
- 再現性: 同条件で同傾向の順位が得られるか
- 運用要件: レイテンシ・コスト・データ統制に適合するか

### 差分記録テンプレート
- 構成: ローカル埋め込み / クラウド埋め込み
- 質問: RAGの基本
- 上位結果: （上位3件を転記）
- 妥当性評価: 高 / 中 / 低
- 応答時間: xx 秒
- 判断メモ: 採用する構成と理由

---

## 実ソースコード（言語別）

### Python: requirements.txt
- 役割: txtaiデモの依存関係定義
- 入力: なし
- 出力: インストール対象リスト
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

---

## よくある質問・補足
**Q. txtai と LlamaIndex の使い分けは？**  
A. txtai は軽量・シンプル。LlamaIndex は機能豊富・拡張性重視。小規模プロジェクトは txtai、大規模・複雑な要件は LlamaIndex 推奨です。

**Q. txtai でベクトルDBとして使える？**  
A. 可能です。インメモリで十分なケースと、永続化が必要なケースを分けて設計します。永続化時はSQLite backendの利用が可能です。

**Q. オンプレミス環境で実行可能？**  
A. 可能です。依存関係が比較的軽いため、オンプレ環境での検証・運用に向いています。

---

## 参考リンク
- [txtai 公式ドキュメント](https://neuml.github.io/txtai/)
- [txtai GitHub](https://github.com/neuml/txtai)
- [API Reference](https://neuml.github.io/txtai/api/)
- [Embeddings Guide](https://neuml.github.io/txtai/embeddings/)

---

## 演習課題
1. txtaiを使う想定ユースケースを1つ定義し、入力・出力の例を記録してください。
2. 最小構成で動かし、設定を1つ変えて挙動の差分を確認してください。
3. txtaiを使わない場合の代替手段と比較し、選ぶ基準をまとめてください。

## 理解度チェック
1. txtaiの主な役割を1文で説明してください。
2. txtai導入時の最大のメリットと注意点は何ですか？
3. txtaiが向かないユースケースとして、どのようなケースが考えられますか？

---

[← 前へ](02-haystack.md) | [次へ →](04-ragflow.md)
