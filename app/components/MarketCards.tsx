"use client";

import { useEffect, useState } from "react";
import MarketCard from "./MarketCard";

type Market = {
  icon: string;
  symbol: string;
  name: string;
  price: string;
  change: string;
  color: string;
};

export default function MarketCards() {
  const [markets, setMarkets] = useState<Market[]>([]);

  useEffect(() => {
    async function loadPrices() {
      try {
        const res = await fetch("/api/prices");
        const data = await res.json();
        setMarkets(data);
      } catch (error) {
        console.error("Failed to load prices:", error);
      }
    }

    loadPrices();

    const timer = setInterval(loadPrices, 30000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="grid grid-cols-4 gap-4">
      {markets.map((item) => (
        <MarketCard
          key={item.symbol}
          icon={item.icon}
          symbol={item.symbol}
          name={item.name}
          price={item.price}
          change={item.change}
          color={item.color}
        />
      ))}
    </div>
  );
}