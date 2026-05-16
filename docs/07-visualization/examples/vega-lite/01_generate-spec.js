import fs from "node:fs";

const data = [
  { month: "Jan", value: 100 },
  { month: "Feb", value: 120 },
  { month: "Mar", value: 115 },
  { month: "Apr", value: 140 },
  { month: "May", value: 132 },
  { month: "Jun", value: 150 }
];

const CHART_WIDTH = 820;
const CHART_HEIGHT = 220;

const baseEncoding = {
  x: { field: "month", type: "ordinal", title: "Month" },
  y: { field: "value", type: "quantitative", title: "Value" },
  tooltip: [
    { field: "month", type: "ordinal" },
    { field: "value", type: "quantitative" }
  ]
};

const spec = {
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  description: "Monthly trend with 3 chart types",
  data: { values: data },
  vconcat: [
    {
      title: "Line",
      width: CHART_WIDTH,
      height: CHART_HEIGHT,
      mark: "line",
      encoding: baseEncoding
    },
    {
      title: "Bar",
      width: CHART_WIDTH,
      height: CHART_HEIGHT,
      mark: "bar",
      encoding: baseEncoding
    },
    {
      title: "Area",
      width: CHART_WIDTH,
      height: CHART_HEIGHT,
      mark: { type: "area", opacity: 0.7 },
      encoding: baseEncoding
    }
  ],
  spacing: 20,
  resolve: {
    scale: {
      x: "shared",
      y: "shared"
    }
  }
};

fs.writeFileSync("02_chart-spec.json", JSON.stringify(spec, null, 2), "utf-8");
console.log("Generated 02_chart-spec.json");
