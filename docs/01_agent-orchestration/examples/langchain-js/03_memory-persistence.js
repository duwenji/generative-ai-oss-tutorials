import "dotenv/config";
import { createAgent } from "langchain";
import { MemorySaver } from "@langchain/langgraph";

if (!process.env.OPENAI_API_KEY) {
  console.error("OPENAI_API_KEY が未設定です。.env を作成して再実行してください。");
  process.exit(1);
}

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
