import "dotenv/config";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { StringOutputParser } from "@langchain/core/output_parsers";
import { ChatOpenAI } from "@langchain/openai";

if (!process.env.OPENAI_API_KEY) {
  console.error("OPENAI_API_KEY が未設定です。.env を作成して再実行してください。");
  process.exit(1);
}

async function main() {
  const llm = new ChatOpenAI({
    model: "gpt-4o-mini",
    temperature: 0.7,
  });

  const prompt = ChatPromptTemplate.fromTemplate(
    "以下のトピックについて、日本語で3行程度説明してください: {topic}"
  );

  const chain = prompt.pipe(llm).pipe(new StringOutputParser());

  const topic = "生成AI";
  console.log(`Topic: ${topic}`);
  console.log("-".repeat(50));

  const result = await chain.invoke({ topic });

  console.log(`Answer:\n${result}`);
  console.log("-".repeat(50));

  const topic2 = "ベクトル検索";
  console.log(`\nTopic: ${topic2}`);
  console.log("-".repeat(50));

  const result2 = await chain.invoke({ topic: topic2 });
  console.log(`Answer:\n${result2}`);
}

main().catch((error) => {
  console.error("エラーが発生しました:", error.message);
  process.exit(1);
});
