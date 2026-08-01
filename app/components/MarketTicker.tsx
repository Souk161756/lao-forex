"use client";

import { useEffect, useState } from "react";

export default function MarketTicker() {
  const [items, setItems] = useState([
    { symbol: "XAU/USD", price: "4045.16", change: "-1.42%" },
    { symbol: "BTC/USD", price: "118650", change: "+2.10%" },
    { symbol: "EUR/USD", price: "1.1745", change: "+0.21%" },
    { symbol: "GBP/USD", price: "1.3522", change: "-0.08%" },
    { symbol: "USD/JPY", price: "148.26", change: "+0.45%" },
    { symbol: "OIL", price: "69.42", change: "+0.80%" },
  ]);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/api/market");
        const data = await res.json();
        setItems(data);
      } catch {}
    }

    load();

    const timer = setInterval(load, 30000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="overflow-hidden bg-[#0d1325] border-y border-white/10">
      <div className="animate-marquee whitespace-nowrap py-3">
        {items.map((i) => (
          <span key={i.symbol} className="mx-8 text-white font-semibold">
            {i.symbol}
            <span className="text-yellow-400 ml-2">
              {i.price}
            </span>

            <span
              className={`ml-2 ${
                i.change.includes("-")
                  ? "text-red-400"
                  : "text-green-400"
              }`}
            >
              {i.change}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}