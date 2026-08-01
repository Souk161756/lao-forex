"use client";

import { useEffect, useRef } from "react";

export default function TradingViewGold() {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!container.current) return;

    container.current.innerHTML = "";

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;

    script.innerHTML = JSON.stringify({
      autosize: true,
      symbol: "OANDA:XAUUSD",
      interval: "15",
      timezone: "Asia/Bangkok",
      theme: "dark",
      style: "1",
      locale: "en",
      allow_symbol_change: false,
      hide_top_toolbar: false,
      hide_legend: false,
      save_image: false,
      calendar: false,
      support_host: "https://www.tradingview.com",
    });

    container.current.appendChild(script);
  }, []);

  return (
  <div
    className="tradingview-widget-container"
    style={{
      height: "420px",
      width: "100%",
    }}
  >
    <div
      ref={container}
      className="tradingview-widget-container__widget"
      style={{
        height: "100%",
        width: "100%",
      }}
    />
  </div> 
  ); 
}