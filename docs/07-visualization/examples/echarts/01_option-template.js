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
    data: months
  },
  yAxis: {
    type: "value",
    name: "Amount"
  },
  dataZoom: [
    { type: "inside", start: 0, end: 100 },
    { start: 0, end: 100 }
  ],
  series: [
    {
      name: "Revenue",
      type: "line",
      smooth: true,
      data: revenue
    },
    {
      name: "Cost",
      type: "line",
      smooth: true,
      data: cost
    }
  ]
};

fs.writeFileSync("02_echarts-option.json", JSON.stringify(option, null, 2), "utf-8");
console.log("Generated 02_echarts-option.json");
