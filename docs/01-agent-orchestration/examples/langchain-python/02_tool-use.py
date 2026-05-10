"""LangChain tool calling example (new agent API)."""

import os
import sys

from dotenv import load_dotenv
from langchain.agents import create_agent

load_dotenv()

if not os.getenv("OPENAI_API_KEY"):
    print("OPENAI_API_KEY が未設定です。.env を作成して再実行してください。")
    sys.exit(1)


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


tools = [get_stock_price, calculate_portfolio_return]
agent = create_agent(
    model="openai:gpt-4o-mini",
    tools=tools,
    system_prompt="あなたは金融アシスタントです。必要ならツールを使ってください。",
)

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
