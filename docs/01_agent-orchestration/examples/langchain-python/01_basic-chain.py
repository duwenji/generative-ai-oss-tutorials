"""LangChain Basic Chain Example.

実行前に .env へ OPENAI_API_KEY を設定してください。
"""

import os
import sys

from dotenv import load_dotenv
from langchain.chat_models import init_chat_model
from langchain_core.output_parsers import StrOutputParser
from langchain_core.prompts import ChatPromptTemplate

load_dotenv()

if not os.getenv("OPENAI_API_KEY"):
    print("OPENAI_API_KEY が未設定です。.env を作成して再実行してください。")
    sys.exit(1)

llm = init_chat_model(
    "openai:gpt-4o-mini",
    temperature=0.7,
)

prompt_template = ChatPromptTemplate.from_template(
    "以下のトピックについて、日本語で3行程度説明してください: {topic}"
)

chain = prompt_template | llm | StrOutputParser()

if __name__ == "__main__":
    topic = "生成AI"
    print(f"Topic: {topic}")
    print("-" * 50)

    result = chain.invoke({"topic": topic})

    print(f"Answer:\n{result}")
    print("-" * 50)

    topic2 = "ベクトル検索"
    print(f"\nTopic: {topic2}")
    print("-" * 50)

    result2 = chain.invoke({"topic": topic2})
    print(f"Answer:\n{result2}")
