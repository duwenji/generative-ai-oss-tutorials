import "dotenv/config";
import { createAgent, tool } from "langchain";
import * as z from "zod";

if (!process.env.OPENAI_API_KEY) {
  console.error("OPENAI_API_KEY が未設定です。.env を作成して再実行してください。");
  process.exit(1);
}

const getStockPriceTool = tool(
  ({ symbol }) => {
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

async function main() {
  const tools = [getStockPriceTool, calculateReturnTool];

  const agent = createAgent({
    model: "gpt-4o-mini",
    tools,
    systemPrompt: "You are a helpful financial assistant. Use tools when needed.",
  });

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
  console.error("エラー:", error.message);
  process.exit(1);
});
