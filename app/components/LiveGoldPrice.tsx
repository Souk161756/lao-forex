"use client";

import { useEffect, useRef } from "react";

export default function LiveGoldPrice() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    ref.current.innerHTML = "";

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-symbol-info.js";
    script.async = true;

    script.innerHTML = JSON.stringify({
      symbol: "OANDA:XAUUSD",
      width: "100%",
      locale: "en",
      colorTheme: "dark",
      isTransparent: true,
    });

    ref.current.appendChild(script);
  }, []);

  return (
    <div
      ref={ref}
      className="tradingview-widget-container rounded-3xl border border-yellow-500/20 bg-white/5 backdrop-blur-xl p-5"
    ></div>
  );
}