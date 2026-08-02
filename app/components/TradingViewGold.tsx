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
      allow_symbol_change: true,
      hide_top_toolbar: false,
      hide_legend: false,
      withdateranges: true,
      details: true,
      hotlist: false,
      calendar: true,
      studies: [
        "RSI@tv-basicstudies",
        "MACD@tv-basicstudies",
        "MASimple@tv-basicstudies"
      ],
      support_host: "https://www.tradingview.com"
    });

    container.current.appendChild(script);
  }, []);

  return (
    <section className="py-16 bg-[#0B1120]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="mb-8">
          <span className="text-yellow-400 font-semibold">
            📈 Live Gold Chart
          </span>

          <h2 className="text-4xl font-bold text-white mt-2">
            XAU/USD TradingView
          </h2>

          <p className="text-gray-400 mt-2">
            ລາຄາຄຳສົດ ແລະ ກາຟເທຣດແບບ Real-time
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
          <div
            className="tradingview-widget-container"
            style={{
              height: "700px",
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
        </div>

      </div>
    </section>
  );
}