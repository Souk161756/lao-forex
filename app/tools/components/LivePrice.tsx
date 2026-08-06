"use client";

import { useEffect, useState } from "react";

type Market = {
  symbol: string;
  price: string;
  change: string;
};

export default function LivePrice() {
  const [markets, setMarkets] = useState<Market[]>([]);

  useEffect(() => {
    async function loadData() {
      try {
        const res = await fetch("/api/market");

        const data = await res.json();

        setMarkets(data);
      } catch (err) {
        console.error(err);
      }
    }

    loadData();

    const timer = setInterval(loadData, 10000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="grid gap-6 md:grid-cols-4">

      {markets.map((item) => {

        const up = item.change.startsWith("+");

        return (
          <div
            key={item.symbol}
            className="rounded-3xl border border-white/10 bg-[#111827] p-6"
          >
            <div className="text-sm text-gray-400">
              {item.symbol}
            </div>

            <div className="mt-3 text-4xl font-black text-white">
              {item.price}
            </div>

            <div
              className={`mt-3 text-lg font-bold ${
                up ? "text-green-400" : "text-red-400"
              }`}
            >
              {item.change}
            </div>
          </div>
        );
      })}
    </div>
  );
}