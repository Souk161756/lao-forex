import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([
    {
      symbol: "XAU/USD",
      price: "4045.16",
      change: "-1.42%",
    },
    {
      symbol: "BTC/USD",
      price: "118650",
      change: "+2.10%",
    },
    {
      symbol: "EUR/USD",
      price: "1.1745",
      change: "+0.21%",
    },
    {
      symbol: "GBP/USD",
      price: "1.3522",
      change: "-0.08%",
    },
    {
      symbol: "USD/JPY",
      price: "148.26",
      change: "+0.45%",
    },
    {
      symbol: "OIL",
      price: "69.42",
      change: "+0.80%",
    },
  ]);
}