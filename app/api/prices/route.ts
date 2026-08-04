import { NextResponse } from "next/server";

const API = process.env.TWELVE_DATA_API_KEY;

async function getQuote(symbol: string) {
  const res = await fetch(
    `https://api.twelvedata.com/quote?symbol=${symbol}&apikey=${API}`,
    {
      next: {
        revalidate: 30,
      },
    }
  );

  const data = await res.json();

  console.log(symbol, data);

  return data;
}

export async function GET() {
  const [gold, euro, btc, oil] = await Promise.all([
  getQuote("XAU/USD"),
  getQuote("EUR/USD"),
  getQuote("BTC/USD"),
  getQuote("WTI"),
]);

  return NextResponse.json([
    {
      icon: "🥇",
      symbol: "XAUUSD",
      name: "Gold",
      price: Number(gold.close || 0).toLocaleString(),
      change: `${gold.change} (${gold.percent_change}%)`,
      color: Number(gold.change) >= 0 ? "#22c55e" : "#ef4444",
    },
    {
      icon: "🥈",
      symbol: "EURUSD",
name: "Euro",
      price: Number(euro.close || 0).toLocaleString(),
change: `${euro.change} (${euro.percent_change}%)`,
color: Number(euro.change) >= 0 ? "#22c55e" : "#ef4444",
    },
    {
      icon: "🛢️",
      symbol: "USOIL",
      name: "Oil",
      price: Number(oil.close || 0).toLocaleString(),
      change: `${oil.change} (${oil.percent_change}%)`,
      color: Number(oil.change) >= 0 ? "#22c55e" : "#ef4444",
    },
    {
      icon: "₿",
      symbol: "BTCUSD",
      name: "Bitcoin",
      price: Number(btc.close || 0).toLocaleString(),
      change: `${btc.change} (${btc.percent_change}%)`,
      color: Number(btc.change) >= 0 ? "#22c55e" : "#ef4444",
    },
  ]);
}