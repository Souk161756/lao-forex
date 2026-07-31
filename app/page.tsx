"use client";

import { useState } from "react";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import BrokerList from "./components/BrokerList";
import NewsSection from "./components/NewsSection";
import ComparisonTable from "./components/ComparisonTable";
import Guide from "./components/Guide";
import Blog from "./components/Blog";
import ContactCTA from "./components/ContactCTA";
import Footer from "./components/Footer";
import TradingViewGold from "./components/TradingViewGold";

export default function Home() {
  const [search, setSearch] = useState("");
const [news, setNews] = useState([
  {
    tag: "💥 CPI 19:30!",
    title: "CPI ມິ.ຖ. ຄືນນີ້ 19:30! ຄາດ 3.9% Headline · Core 2.9% Sticky · JPM+GS Earnings + Warsh ພຸດ!",
    time: "14 ກ.ກ. 2026",
    color: "#f472b6",
    href: "https://www.investing.com/economic-calendar/cpi-733",
  },
  {
    tag: "🚨 Iran Hormuz",
    title: "Iran ປິດ Hormuz! US-Iran ໂຈມຕີ Weekend · Oil $79 · Ceasefire ລົ້ມ · Rate Hike Sept 65-70%!",
    time: "14 ກ.ກ. 2026",
    color: "#f87171",
    href: "https://www.investing.com/commodities/crude-oil",
  },
  {
    tag: "ທອງຄໍາ",
    title: "XAUUSD ~$4,010 Safe-Haven Paradox! Iran ໂຈມ=Oil ຂຶ້ນ=Inflation=Rate Hike=ທອງ ລົງ! ຮັບ $3,960",
    time: "14 ກ.ກ. 2026",
    color: "#facc15",
    href: "https://www.investing.com/commodities/gold",
  },
  {
    tag: "🎤 Warsh ສັກຂີ",
    title: "Warsh ສັກຂີກຳ Congress ພຸດ 15 ກ.ກ.! ຄັ້ງທຳອິດ! + PPI ມິ.ຖ. + Beige Book = ຈຸດຕັດສິນ!",
    time: "15 ກ.ກ. 2026",
    color: "#4ade80",
    href: "https://www.investing.com/economic-calendar/",
  },
]);
  const brokers = [
    { name: "XM", logo: "/brokers/xm.png", rating: 4.3, ratingText: "4.3/5", cashback: "$3/Lot", spread: "1.6 pip", deposit: "$30", leverage: "1:1000", badge: "🥇 ອັນດັບ 1", badgeBg: "linear-gradient(135deg, #facc15, #f59e0b)", glowColor: "rgba(250,204,21,0.08)", accentColor: "#facc15", borderColor: "rgba(250,204,21,0.3)", tag: "ແນະນໍາ", tagStyle: { background: "rgba(250,204,21,0.1)", border: "1px solid rgba(250,204,21,0.25)", color: "#facc15" }, link: "https://affs.click/wLl9B", review: "/xm", highlight: true },
    { name: "Exness", logo: "/brokers/exness.png", rating: 4.6, ratingText: "4.6/5", cashback: "$3/Lot", spread: "1.0 pip", deposit: "$20", leverage: "1:2000", badge: "🥈 ອັນດັບ 2", badgeBg: "linear-gradient(135deg, #94a3b8, #64748b)", glowColor: "rgba(148,163,184,0.05)", accentColor: "#93c5fd", borderColor: "rgba(148,163,184,0.2)", tag: "ຖອນໄວ 24/7", tagStyle: { background: "rgba(59,130,246,0.1)", border: "1px solid rgba(59,130,246,0.25)", color: "#60a5fa" }, link: "https://one.exnessonelink.com/boarding/sign-up/a/ocvhdpugv1?lng=th", review: "/exness", highlight: false },
    { name: "Vantage", logo: "/brokers/vantage.png", rating: 4.1, ratingText: "4.1/5", cashback: "$4/Lot", spread: "1.2 pip", deposit: "$50", leverage: "1:500", badge: "🥉 ອັນດັບ 3", badgeBg: "linear-gradient(135deg, #f97316, #ea580c)", glowColor: "rgba(251,146,60,0.05)", accentColor: "#fb923c", borderColor: "rgba(251,146,60,0.2)", tag: "Cashback ສູງ", tagStyle: { background: "rgba(249,115,22,0.1)", border: "1px solid rgba(249,115,22,0.25)", color: "#fb923c" }, link: "https://vigco.co/la-com-inv/wmd8Y80S", review: "/vantage", highlight: false },
    { name: "IUX", logo: "/brokers/iux.png", rating: 4.2, ratingText: "4.2/5", cashback: "$2/Lot", spread: "0.9 pip", deposit: "$50", leverage: "1:3000", badge: "⭐ Spread ຕໍ່າ", badgeBg: "linear-gradient(135deg, #ec4899, #be185d)", glowColor: "rgba(244,114,182,0.05)", accentColor: "#f472b6", borderColor: "rgba(244,114,182,0.2)", tag: "Spread ຕໍ່ານ", tagStyle: { background: "rgba(236,72,153,0.1)", border: "1px solid rgba(236,72,153,0.25)", color: "#f472b6" }, link: "https://iux.com/en/register?code=EPs5nw6M", review: "/iux", highlight: false },
    { name: "HFM", logo: "/brokers/hfm.png", rating: 4.0, ratingText: "4.0/5", cashback: "$3/Lot", spread: "1.1 pip", deposit: "$50", leverage: "1:1000", badge: "✅ ໜ້າເຊື່ອຖື", badgeBg: "linear-gradient(135deg, #06b6d4, #0e7490)", glowColor: "rgba(34,211,238,0.05)", accentColor: "#22d3ee", borderColor: "rgba(34,211,238,0.2)", tag: "Regulated", tagStyle: { background: "rgba(6,182,212,0.1)", border: "1px solid rgba(6,182,212,0.25)", color: "#22d3ee" }, link: "https://register.hfm.com/sv/en/new-live-account/?refid=30421077", review: "/hfm", highlight: false },
    { name: "Market4you", logo: "/brokers/market4you.png", rating: 3.9, ratingText: "3.9/5", cashback: "$3/Lot", spread: "1.5 pip", deposit: "$10", leverage: "1:500", badge: "🎁 Bonus", badgeBg: "linear-gradient(135deg, #22c55e, #15803d)", glowColor: "rgba(74,222,128,0.05)", accentColor: "#4ade80", borderColor: "rgba(74,222,128,0.2)", tag: "ຝາກຕໍ່າ $10", tagStyle: { background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.25)", color: "#4ade80" }, link: "https://account.markets4you.online/en/user-registration/?affid=bpblvtj", review: "/market4you", highlight: false },
  ];


  function Stars({ rating }: { rating: number }) {
    return (
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map((i) => (
          <span key={i} style={{ fontSize: "13px", color: i <= Math.round(rating) ? "#facc15" : "#374151" }}>★</span>
        ))}
      </div>
    );
  }

return (
  <main
    style={{
      background:
        "radial-gradient(circle at top,#1b2345 0%,#090b13 40%,#05060b 100%)",
      minHeight: "100vh",
      color: "#fff",
    }}
  >
   <Hero />

<section className="max-w-7xl mx-auto px-5 py-12">
  <div className="mb-8">
    <h2 className="text-3xl font-black text-white">
      📈 ກຣາຟລາຄາຄຳ (XAU/USD)
    </h2>
    <p className="text-gray-400 mt-2">
      ກຣາຟລາຄາຄຳແບບ Live ອັບເດດຈາກ TradingView
    </p>
  </div>

  <TradingViewGold />
</section>

<Stats />
    <NewsSection news={news} />

    {/* SEARCH */}
    <section className="max-w-6xl mx-auto px-5 pb-6">
      <div
        className="rounded-2xl px-5 py-1 flex items-center gap-3"
        style={{
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.09)",
        }}
      >
        <span className="text-gray-500 text-xl">
          🔍
        </span>

        <input
          type="text"
          placeholder="ຄົ້ນຫາ ໂບກເກີ້..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="flex-1 bg-transparent py-4 outline-none text-white placeholder-gray-600 text-base"
        />
      </div>
    </section>

    <BrokerList
      brokers={brokers}
      search={search}
    />

    <ComparisonTable brokers={brokers} />

    <Guide />

    <Blog />

    <ContactCTA />

    {/* DISCLAIMER */}
    <section className="max-w-6xl mx-auto px-5 pb-20">
      <div
        className="rounded-2xl p-6"
        style={{
          background: "rgba(239,68,68,0.05)",
          border: "1px solid rgba(239,68,68,0.2)",
        }}
      >
        <h3 className="font-black text-red-400 mb-4">
          ⚠️ ຄຳເຕືອນຄວາມສ່ຽງ
        </h3>

        <div className="text-gray-400 text-sm leading-8">
          <p>
            Forex ແລະ CFDs
            ມີຄວາມສ່ຽງສູງ
            ຜູ້ລົງທຶນອາດສູນເສຍເງິນທຶນໄດ້.
          </p>

          <p>
            ຄະແນນອ້າງອີງຈາກ Trustpilot
            ແລະ
            ຂໍ້ມູນສາທາລະນະ.
          </p>

          <p>
            Spread ແລະ Cashback
            ອາດປ່ຽນແປງຕາມ
            Market Conditions.
          </p>
        </div>
      </div>
    </section>

    <Footer />
  </main>
);
}