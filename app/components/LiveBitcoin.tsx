"use client";

import { useEffect, useState } from "react";

export default function LiveBitcoin() {
  const [price, setPrice] = useState("--");
  const [change, setChange] = useState("--");

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(
          "https://api.binance.com/api/v3/ticker/24hr?symbol=BTCUSDT"
        );

        const data = await res.json();

        setPrice(Number(data.lastPrice).toLocaleString());

        setChange(
          `${Number(data.priceChangePercent).toFixed(2)}%`
        );
      } catch {}
    }

    load();

    const timer = setInterval(load, 15000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="rounded-3xl border border-orange-500/20 bg-white/5 backdrop-blur-xl p-6">
      <div className="text-gray-400 text-sm">
        🟠 Bitcoin (BTC/USD)
      </div>

      <div className="text-5xl font-black text-orange-400 mt-2">
        ${price}
      </div>

      <div
        className={`mt-2 ${
          change.includes("-")
            ? "text-red-400"
            : "text-green-400"
        }`}
      >
        {change}
      </div>
    </div>
  );
}