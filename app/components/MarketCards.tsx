"use client";

import MarketCard from "./MarketCard";

export default function MarketCards() {
  return (
    <div className="grid grid-cols-4 gap-4">

      <MarketCard
        icon="🥇"
        symbol="XAUUSD"
        name="Gold"
        price="3352.45"
        change="+18.54 (+0.55%)"
        color="#22c55e"
      />

      <MarketCard
        icon="🥈"
        symbol="XAGUSD"
        name="Silver"
        price="38.12"
        change="+0.32 (+0.85%)"
        color="#22c55e"
      />

      <MarketCard
        icon="🛢️"
        symbol="USOIL"
        name="Oil"
        price="71.81"
        change="-0.18 (-0.25%)"
        color="#ef4444"
      />

      <MarketCard
        icon="₿"
        symbol="BTCUSD"
        name="Bitcoin"
        price="114,258"
        change="+2,152 (+1.91%)"
        color="#22c55e"
      />

    </div>
  );
}