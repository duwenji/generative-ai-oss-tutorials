"""LangChain memory example (new agent API + checkpointer)."""

import os
import sys

from dotenv import load_dotenv
from langchain.agents import create_agent
from langgraph.checkpoint.memory import InMemorySaver


def sanitize_user_input(text: str) -> str:
    # Drop invalid surrogate characters that can break JSON serialization.
    return text.encode("utf-8", errors="ignore").decode("utf-8", errors="ignore")

load_dotenv()

if not os.getenv("OPENAI_API_KEY"):
    print("OPENAI_API_KEY が未設定です。.env を作成して再実行してください。")
    sys.exit(1)

memory = InMemorySaver()

agent = create_agent(
    model="openai:gpt-4o-mini",
    tools=[],
    system_prompt="あなたは親切なAIアシスタントです。会話履歴を参照して回答してください。",
    checkpointer=memory,
)

if __name__ == "__main__":
    # Improve behavior on Windows terminals and piped input.
    if hasattr(sys.stdin, "reconfigure"):
        sys.stdin.reconfigure(encoding="utf-8", errors="ignore")
    if hasattr(sys.stdout, "reconfigure"):
        sys.stdout.reconfigure(encoding="utf-8", errors="ignore")

    print("Chat bot with memory")
    print("=" * 60)
    print("同じ thread_id で会話すると履歴を保持します。")
    print("'exit' で終了します。")
    print("=" * 60)

    config = {"configurable": {"thread_id": "demo-thread"}}

    while True:
        user_input = sanitize_user_input(input("\nYou: ").strip())

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
