"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [search, setSearch] = useState("");
 
const [news, setNews] = useState([
  {
    tag: "ທອງຄໍາ",
    title: "XAUUSD $4,550 ຫຼຸດຕໍ່ — USD ແຂງ + ເງິນເຟີ້ສູງ ກົດດັນທອງ",
    time: "19 ພ.ພ. 2026",
    color: "#facc15",
    href: "https://www.investing.com/commodities/gold",
  },
  {
    tag: "ວິເຄາະ",
    title: "Support $4,500 ສໍາຄັນ — ຖ້າທໍ່ລົງ ອາດ Bounce · Resistance $4,580",
    time: "19 ພ.ພ. 2026",
    color: "#fb923c",
    href: "https://www.investing.com/commodities/gold",
  },
  {
    tag: "⚠️ ຂ່າວ",
    title: "20 ພ.ພ. FOMC Minutes ອອກ — ລໍຖ້າກ່ອນ Buy · Volatility ສູງ",
    time: "19 ພ.ພ. 2026",
    color: "#f472b6",
    href: "https://www.investing.com/economic-calendar/",
  },
  {
    tag: "ຄູ່ມື",
    title: "ເທຣດທອງຄໍາ XAUUSD ແນວໃດ? Stop Loss ແລະ Entry Point ສໍາລັບຄົນລາວ",
    time: "19 ພ.ພ. 2026",
    color: "#4ade80",
    href: "/blog/how-to-start-forex-laos",
  },
]);
  const brokers = [
    {
      name: "XM",
      logo: "/brokers/xm.png",
      rating: 4.3,
      ratingText: "4.3/5",
      cashback: "$3/Lot",
      spread: "1.6 pip",
      deposit: "$30",
      leverage: "1:1000",
      badge: "🥇 ອັນດັບ 1",
      badgeBg: "linear-gradient(135deg, #facc15, #f59e0b)",
      glowColor: "rgba(250,204,21,0.08)",
      accentColor: "#facc15",
      borderColor: "rgba(250,204,21,0.3)",
      tag: "ແນະນໍາ",
      tagStyle: { background: "rgba(250,204,21,0.1)", border: "1px solid rgba(250,204,21,0.25)", color: "#facc15" },
      link: "https://affs.click/wLl9B",
      review: "/xm",
      highlight: true,
    },
    {
      name: "Exness",
      logo: "/brokers/exness.png",
      rating: 4.6,
      ratingText: "4.6/5",
      cashback: "$3/Lot",
      spread: "1.0 pip",
      deposit: "$20",
      leverage: "1:2000",
      badge: "🥈 ອັນດັບ 2",
      badgeBg: "linear-gradient(135deg, #94a3b8, #64748b)",
      glowColor: "rgba(148,163,184,0.05)",
      accentColor: "#93c5fd",
      borderColor: "rgba(148,163,184,0.2)",
      tag: "ຖອນໄວ 24/7",
      tagStyle: { background: "rgba(59,130,246,0.1)", border: "1px solid rgba(59,130,246,0.25)", color: "#60a5fa" },
      link: "https://one.exnessonelink.com/boarding/sign-up/a/ocvhdpugv1?lng=th",
      review: "/exness",
      highlight: false,
    },
    {
      name: "Vantage",
      logo: "/brokers/vantage.png",
      rating: 4.1,
      ratingText: "4.1/5",
      cashback: "$4/Lot",
      spread: "1.2 pip",
      deposit: "$50",
      leverage: "1:500",
      badge: "🥉 ອັນດັບ 3",
      badgeBg: "linear-gradient(135deg, #f97316, #ea580c)",
      glowColor: "rgba(251,146,60,0.05)",
      accentColor: "#fb923c",
      borderColor: "rgba(251,146,60,0.2)",
      tag: "Cashback ສູງ",
      tagStyle: { background: "rgba(249,115,22,0.1)", border: "1px solid rgba(249,115,22,0.25)", color: "#fb923c" },
      link: "https://vigco.co/la-com-inv/wmd8Y80S",
      review: "/vantage",
      highlight: false,
    },
    {
      name: "IUX",
      logo: "/brokers/iux.png",
      rating: 4.2,
      ratingText: "4.2/5",
      cashback: "$2/Lot",
      spread: "0.9 pip",
      deposit: "$50",
      leverage: "1:3000",
      badge: "⭐ Spread ຕໍ່າ",
      badgeBg: "linear-gradient(135deg, #ec4899, #be185d)",
      glowColor: "rgba(244,114,182,0.05)",
      accentColor: "#f472b6",
      borderColor: "rgba(244,114,182,0.2)",
      tag: "Spread ຕໍ່ານ",
      tagStyle: { background: "rgba(236,72,153,0.1)", border: "1px solid rgba(236,72,153,0.25)", color: "#f472b6" },
      link: "https://iux.com/en/register?code=EPs5nw6M",
      review: "/iux",
      highlight: false,
    },
    {
      name: "HFM",
      logo: "/brokers/hfm.png",
      rating: 4.0,
      ratingText: "4.0/5",
      cashback: "$3/Lot",
      spread: "1.1 pip",
      deposit: "$50",
      leverage: "1:1000",
      badge: "✅ ໜ້າເຊື່ອຖື",
      badgeBg: "linear-gradient(135deg, #06b6d4, #0e7490)",
      glowColor: "rgba(34,211,238,0.05)",
      accentColor: "#22d3ee",
      borderColor: "rgba(34,211,238,0.2)",
      tag: "Regulated",
      tagStyle: { background: "rgba(6,182,212,0.1)", border: "1px solid rgba(6,182,212,0.25)", color: "#22d3ee" },
      link: "https://register.hfm.com/sv/en/new-live-account/?refid=30421077",
      review: "/hfm",
      highlight: false,
    },
    {
      name: "Market4you",
      logo: "/brokers/market4you.png",
      rating: 3.9,
      ratingText: "3.9/5",
      cashback: "$3/Lot",
      spread: "1.5 pip",
      deposit: "$10",
      leverage: "1:500",
      badge: "🎁 Bonus",
      badgeBg: "linear-gradient(135deg, #22c55e, #15803d)",
      glowColor: "rgba(74,222,128,0.05)",
      accentColor: "#4ade80",
      borderColor: "rgba(74,222,128,0.2)",
      tag: "ຝາກຕໍ່າ $10",
      tagStyle: { background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.25)", color: "#4ade80" },
      link: "https://account.markets4you.online/en/user-registration/?affid=bpblvtj",
      review: "/market4you",
      highlight: false,
    },
  ];

  const filtered = brokers.filter((b) =>
    b.name.toLowerCase().includes(search.toLowerCase())
  );

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
    <main className="min-h-screen text-white"
      style={{ background: "#07080f", fontFamily: "'Noto Serif Lao', 'Phetsarath OT', serif" }}>

      {/* ── NAVBAR ── */}
      <nav className="sticky top-0 z-50"
        style={{ background: "rgba(7,8,15,0.9)", backdropFilter: "blur(24px)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-6xl mx-auto px-5 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="LaoForex" className="w-10 h-10 rounded-xl object-contain"
              onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
            <div>
              <div className="font-black text-xl text-yellow-400 leading-none">LaoForex</div>
              <div className="text-[10px] text-gray-500 leading-none mt-0.5">ໂບກເກີ້ Forex ສໍາລັບຄົນລາວ</div>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-5 text-sm font-semibold text-gray-400">
            <a href="/" className="hover:text-yellow-400 transition-colors">ໜ້າຫຼັກ</a>
            <a href="/reviews" className="hover:text-yellow-400 transition-colors">ລີວິວ</a>
            <a href="/blog/how-to-start-forex-laos" className="hover:text-yellow-400 transition-colors">ບົດຄວາມ</a>
            <a href="#brokers" className="hover:text-yellow-400 transition-colors">ໂບກເກີ້</a>
            <a href="https://wa.me/8562029826898" target="_blank"
              className="flex items-center gap-1.5 text-white px-3 py-2 rounded-full text-xs font-bold hover:opacity-90 transition"
              style={{ background: "#25D366" }}>💬 WhatsApp</a>
            <a href="https://t.me/laoforex" target="_blank"
              className="flex items-center gap-1.5 text-white px-3 py-2 rounded-full text-xs font-bold hover:opacity-90 transition"
              style={{ background: "#229ED9" }}>✈️ Telegram</a>
          </div>
          <div className="md:hidden flex items-center gap-2">
            <a href="https://wa.me/8562029826898" target="_blank"
              className="w-9 h-9 rounded-full flex items-center justify-center text-sm"
              style={{ background: "#25D366" }}>💬</a>
            <a href="https://t.me/laoforex" target="_blank"
              className="w-9 h-9 rounded-full flex items-center justify-center text-sm"
              style={{ background: "#229ED9" }}>✈️</a>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="relative overflow-hidden pt-20 pb-24 px-5">
        <div className="absolute top-[-150px] left-[-150px] w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(250,204,21,0.1) 0%, transparent 70%)" }} />
        <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)" }} />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold mb-8"
            style={{ background: "rgba(250,204,21,0.08)", border: "1px solid rgba(250,204,21,0.2)", color: "#facc15" }}>
            <span>🇱🇦</span><span>ໂບກເກີ້ Forex ສໍາລັບຄົນລາວ</span>
          </div>
          <h1 className="font-black leading-tight mb-6" style={{ fontSize: "clamp(2.5rem, 8vw, 5rem)" }}>
            <span style={{ color: "#fff" }}>ລວມ</span>{" "}
            <span style={{ background: "linear-gradient(135deg, #facc15, #f97316)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              ໂບກເກີ້ Forex
            </span>
            <br />
            <span style={{ color: "#fff" }}>ທີ່ດີສຸດໃນລາວ</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10" style={{ lineHeight: "2" }}>
            ລີວິວໂບກເກີ້ Forex ສໍາລັບຄົນລາວ · ປຽບທຽບ Spread · Bonus · Leverage · ຄວາມໄວຖອນເງິນ · Support ພາສາລາວ
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a href="#brokers" className="font-black text-black px-10 py-4 rounded-2xl text-lg transition-all hover:scale-105"
              style={{ background: "linear-gradient(135deg, #facc15, #f97316)", boxShadow: "0 16px 60px rgba(250,204,21,0.3)" }}>
              🚀 ເບິ່ງໂບກເກີ້
            </a>
            <a href="/blog/how-to-start-forex-laos" className="font-bold px-10 py-4 rounded-2xl text-lg text-white transition-all hover:scale-105"
              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)", backdropFilter: "blur(12px)" }}>
              📚 ຮຽນ Forex
            </a>
          </div>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <a href="https://wa.me/8562029826898" target="_blank"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm text-white transition-all hover:scale-105"
              style={{ background: "#25D366", boxShadow: "0 8px 24px rgba(37,211,102,0.3)" }}>
              💬 ຕິດຕໍ່ WhatsApp
            </a>
            <a href="https://t.me/laoforex" target="_blank"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm text-white transition-all hover:scale-105"
              style={{ background: "#229ED9", boxShadow: "0 8px 24px rgba(34,158,217,0.3)" }}>
              ✈️ ຕິດຕໍ່ Telegram
            </a>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="max-w-6xl mx-auto px-5 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { num: "6+", label: "ໂບກເກີ້ຊັ້ນນໍາ", icon: "🏆" },
            { num: "$4/Lot", label: "Cashback ສູງສຸດ", icon: "💰" },
            { num: "24/7", label: "Support ພາສາລາວ", icon: "🎧" },
            { num: "100%", label: "ລີວິວຟຣີ", icon: "✅" },
          ].map((s) => (
            <div key={s.num} className="rounded-2xl p-5 text-center"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
              <div className="text-2xl mb-2">{s.icon}</div>
              <div className="text-2xl font-black text-yellow-400 mb-1">{s.num}</div>
              <div className="text-xs text-gray-500">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── NEWS ── */}
      <section className="max-w-6xl mx-auto px-5 pb-12">
        <div className="mb-5">
          <p className="text-yellow-400 text-xs font-bold uppercase tracking-widest mb-1">📰 ຂ່າວ & ວິເຄາະ</p>
          <h2 className="text-2xl font-black">ຂ່າວ Forex ລ່າສຸດ</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-3">
          {news.map((n, i) => (
            <a key={i} href={n.href}
              className="flex items-start gap-4 p-4 rounded-2xl transition-all hover:-translate-y-0.5"
              style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)" }}>
              <div className="flex-shrink-0 px-2.5 py-1 rounded-lg text-[10px] font-black mt-0.5"
                style={{ background: `${n.color}15`, color: n.color, border: `1px solid ${n.color}30` }}>
                {n.tag}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white text-sm font-bold leading-snug mb-1">{n.title}</p>
                <p className="text-gray-600 text-xs">{n.time}</p>
              </div>
              <span className="text-gray-600 text-lg flex-shrink-0">›</span>
            </a>
          ))}
        </div>
      </section>

      {/* ── SEARCH ── */}
      <section className="max-w-6xl mx-auto px-5 pb-6">
        <div className="rounded-2xl px-5 py-1 flex items-center gap-3"
          style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.09)" }}>
          <span className="text-gray-500 text-xl">🔍</span>
          <input type="text" placeholder="ຄົ້ນຫາ ໂບກເກີ້..." value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 bg-transparent py-4 outline-none text-white placeholder-gray-600 text-base" />
        </div>
      </section>

      {/* ── BROKER CARDS ── */}
      <section id="brokers" className="max-w-6xl mx-auto px-5 pb-20">
        <div className="mb-8">
          <p className="text-yellow-400 text-xs font-bold uppercase tracking-widest mb-2">ລີວິວ BROKER ທີ່ໄວ້ໃຈໄດ້</p>
          <h2 className="text-3xl md:text-4xl font-black">ໂບກເກີ້ແນະນໍາ 2026</h2>
          <p className="text-gray-500 mt-2 text-sm">ທົດສອບຈິງ · ຝາກ-ຖອນ BCEL · ກວດ Spread · Support ພາສາລາວ</p>
        </div>
        <div className="flex flex-col gap-5">
          {filtered.map((broker) => (
            <div key={broker.name} className="rounded-[28px] p-6 transition-all duration-300 hover:-translate-y-1"
              style={{
                background: broker.highlight
                  ? "linear-gradient(135deg, rgba(250,204,21,0.07) 0%, rgba(7,8,15,1) 60%)"
                  : "rgba(255,255,255,0.025)",
                border: `1px solid ${broker.borderColor}`,
                boxShadow: `0 8px 40px ${broker.glowColor}`,
              }}>
              <div className="flex items-center justify-between mb-5 flex-wrap gap-3">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl overflow-hidden flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)" }}>
                    <img src={broker.logo} alt={broker.name} className="w-10 h-10 object-contain" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-black text-xl text-white">{broker.name}</span>
                      <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full" style={broker.tagStyle}>
                        {broker.tag}
                      </span>
                    </div>
                    <Stars rating={broker.rating} />
                    <div className="text-xs text-gray-500 mt-0.5">{broker.ratingText} · Trustpilot</div>
                  </div>
                </div>
                <div className="px-4 py-1.5 rounded-full text-sm font-black text-black"
                  style={{ background: broker.badgeBg }}>
                  {broker.badge}
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-5">
                {[
                  { label: "ຝາກຕໍ່າ", value: broker.deposit, sub: "ທະນາຄານລາວ" },
                  { label: "Cashback", value: broker.cashback, sub: "ຕໍ່ Lot" },
                  { label: "Spread", value: broker.spread, sub: "EURUSD" },
                  { label: "Leverage", value: broker.leverage, sub: "ສູງສຸດ" },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-xl px-4 py-3"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
                    <div className="text-xs text-gray-500 mb-1">{stat.label}</div>
                    <div className="font-black text-sm" style={{ color: broker.accentColor }}>{stat.value}</div>
                    <div className="text-[10px] text-gray-600 mt-0.5">{stat.sub}</div>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2 mb-5 text-xs text-green-400">
                <span>✓</span><span>ຝາກ-ຖອນ BCEL ທະນາຄານລາວໄດ້</span>
              </div>
              <div className="flex gap-3">
                <a href={broker.link} target="_blank"
                  className="flex-1 py-3.5 rounded-xl font-black text-sm text-center text-black transition-all hover:scale-[1.02]"
                  style={{ background: "linear-gradient(135deg, #facc15, #f97316)" }}>
                  ສະໝັກເປີດບັນຊີ →
                </a>
                <a href={broker.review}
                  className="px-6 py-3.5 rounded-xl font-bold text-sm text-center transition-all hover:scale-[1.02]"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)", color: "#fff" }}>
                  ລີວິວ
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 text-center">
          <p className="text-gray-600 text-xs">⚠️ ລີວິວຈາກທາງໃຊ້ງານຂອງພວກເຮົາເທົ່ານັ້ນ · ການລົງທຶນມີຄວາມສ່ຽງ</p>
        </div>
      </section>

      {/* ── COMPARISON TABLE ── */}
      <section className="max-w-6xl mx-auto px-5 pb-20">
        <div className="rounded-[24px] overflow-hidden"
          style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)" }}>
          <div className="px-8 py-6 border-b" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
            <p className="text-yellow-400 text-xs font-bold uppercase tracking-widest mb-1">ປຽບທຽບ</p>
            <h2 className="text-2xl font-black">ປຽບທຽບໂບກເກີ້</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px]">
              <thead>
                <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", background: "rgba(0,0,0,0.2)" }}>
                  {["ໂບກເກີ້", "ຄະແນນ", "Spread", "Cashback", "ຝາກຕໍ່າ", "ເປີດບັນຊີ"].map((h) => (
                    <th key={h} className="p-4 text-left text-yellow-400 text-sm font-bold">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {brokers.map((b) => (
                  <tr key={b.name} className="transition-colors"
                    style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.03)")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}>
                    <td className="p-4 font-black text-white">{b.name}</td>
                    <td className="p-4 font-bold text-sm" style={{ color: b.accentColor }}>{b.ratingText}</td>
                    <td className="p-4 text-gray-300 text-sm">{b.spread}</td>
                    <td className="p-4 text-gray-300 text-sm">{b.cashback}</td>
                    <td className="p-4 text-gray-300 text-sm">{b.deposit}</td>
                    <td className="p-4">
                      <a href={b.link} target="_blank"
                        className="text-xs font-black text-black px-4 py-2 rounded-lg inline-block hover:opacity-90 transition"
                        style={{ background: "linear-gradient(135deg, #facc15, #f97316)" }}>
                        ເປີດບັນຊີ
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── GUIDE ── */}
      <section className="max-w-6xl mx-auto px-5 pb-20">
        <div className="rounded-[24px] p-8"
          style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)" }}>
          <p className="text-yellow-400 text-xs font-bold uppercase tracking-widest mb-1">ຄູ່ມື</p>
          <h2 className="text-2xl font-black mb-6">ໂບກເກີ້ໃດເໝາະກັບໃຜ?</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { name: "🥇 XM", desc: "ເໝາະສໍາລັບຜູ້ເລີ່ມຕົ້ນ · Bonus $30 ຟຣີ · Support ດີ · ຝາກ-ຖອນ BCEL ໄດ້" },
              { name: "🥈 Exness", desc: "Leverage 1:2000 · ຖອນໄວ Instant 24/7 · Spread ຕໍ່າ · ເໝາະ Scalping" },
              { name: "🥉 Vantage", desc: "Cashback $4/Lot ສູງສຸດ · ເໝາະ Volume Trader · Regulated ASIC" },
              { name: "⭐ IUX", desc: "Spread 0.9pip ຕໍ່ານ · Leverage 1:3000 · UI ທັນສະໄໝ · ໃຊ້ງານງ່າຍ" },
            ].map((g) => (
              <div key={g.name} className="rounded-xl p-5"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <div className="font-black text-yellow-400 mb-2">{g.name}</div>
                <p className="text-gray-300 text-sm leading-relaxed">{g.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BLOG ── */}
      <section className="max-w-6xl mx-auto px-5 pb-20">
        <div className="mb-6">
          <p className="text-yellow-400 text-xs font-bold uppercase tracking-widest mb-1">ບົດຄວາມ</p>
          <h2 className="text-2xl font-black">ຮຽນ Forex ຟຣີ</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { title: "Forex ແມ່ນຫຍັງ?", desc: "ຮຽນພື້ນຖານ Forex · ຄໍາສັບ · ຂັ້ນຕອນ · Tips", href: "/blog/how-to-start-forex-laos", color: "from-blue-400/20" },
            { title: "ໂບກເກີ້ Forex ທີ່ດີໃນລາວ", desc: "ປຽບທຽບໂບກເກີ້ ຝາກ-ຖອນ BCEL ໄດ້ · ທົດສອບຈິງ", href: "/blog", color: "from-yellow-400/20" },
            { title: "ລີວິວ Exness ສໍາລັບຄົນລາວ", desc: "ລີວິວ Exness ແບບລະອຽດ ທົດສອບຈິງ ໂດຍທີມລາວ", href: "/exness", color: "from-green-400/20" },
          ].map((p) => (
            <a key={p.title} href={p.href}
              className="block rounded-2xl p-6 transition-all hover:-translate-y-1"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
              <div className={`w-full h-28 rounded-xl mb-4 bg-gradient-to-br ${p.color} to-transparent`} />
              <h3 className="font-black mb-2 leading-snug text-white">{p.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
              <div className="text-yellow-400 text-sm font-bold mt-4">ອ່ານເພີ່ມ →</div>
            </a>
          ))}
        </div>
      </section>

      {/* ── CONTACT CTA ── */}
      <section className="max-w-6xl mx-auto px-5 pb-20">
        <div className="rounded-[24px] p-8 text-center"
          style={{ background: "linear-gradient(135deg, rgba(250,204,21,0.06), rgba(249,115,22,0.06))", border: "1px solid rgba(250,204,21,0.15)" }}>
          <h2 className="font-black text-2xl mb-3">💬 ມີຄໍາຖາມ? ຕິດຕໍ່ເຮົາໄດ້ເລີຍ</h2>
          <p className="text-gray-400 text-sm mb-6" style={{ lineHeight: "2" }}>
            ທີມງານລາວ · ຕອບ 24/7 · ຟຣີ · ບໍ່ມີຄ່າໃຊ້ຈ່າຍ
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a href="https://wa.me/8562029826898" target="_blank"
              className="flex items-center gap-2 px-7 py-3.5 rounded-xl font-black text-white transition-all hover:scale-105"
              style={{ background: "#25D366", boxShadow: "0 8px 32px rgba(37,211,102,0.3)" }}>
              💬 WhatsApp
            </a>
            <a href="https://t.me/laoforex" target="_blank"
              className="flex items-center gap-2 px-7 py-3.5 rounded-xl font-black text-white transition-all hover:scale-105"
              style={{ background: "#229ED9", boxShadow: "0 8px 32px rgba(34,158,217,0.3)" }}>
              ✈️ Telegram
            </a>
          </div>
        </div>
      </section>

      {/* ── DISCLAIMER ── */}
      <section className="max-w-6xl mx-auto px-5 pb-20">
        <div className="rounded-2xl p-6"
          style={{ background: "rgba(239,68,68,0.05)", border: "1px solid rgba(239,68,68,0.12)" }}>
          <h3 className="text-red-400 font-black mb-3">⚠️ ຄຳເຕືອນຄວາມສ່ຽງ</h3>
          <div className="text-gray-400 text-sm space-y-2" style={{ lineHeight: "1.8" }}>
            <p>Forex ແລະ CFD ມີຄວາມສ່ຽງສູງ ແລະ ອາດເຮັດໃຫ້ສູນເສຍເງິນລົງທຶນໄດ້.</p>
            <p>ຄະແນນອ້າງອີງຈາກ Trustpilot ແລະ ຂໍ້ມູນສາທາລະນະ.</p>
            <p>Spread ແລະ Cashback ອາດປ່ຽນແປງຕາມ Market Conditions.</p>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ borderTop: "1px solid rgba(255,255,255,0.06)", background: "rgba(0,0,0,0.4)" }}>
        <div className="max-w-6xl mx-auto px-5 py-14">
          <div className="grid md:grid-cols-3 gap-10 mb-10">
            <div>
              <div className="font-black text-2xl text-yellow-400 mb-3">LaoForex</div>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                ລວມ Forex Brokers · Cashback Rebate · ລີວິວສໍາລັບຄົນລາວ 🇱🇦
              </p>
              <div className="flex gap-3">
                <a href="https://wa.me/8562029826898" target="_blank"
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-sm hover:scale-110 transition"
                  style={{ background: "#25D366" }}>💬</a>
                <a href="https://t.me/laoforex" target="_blank"
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-sm hover:scale-110 transition"
                  style={{ background: "#229ED9" }}>✈️</a>
              </div>
            </div>
            <div>
              <h3 className="font-black mb-4 text-sm uppercase tracking-widest text-gray-400">ລິ້ງດ່ວນ</h3>
              <div className="flex flex-col gap-3 text-sm text-gray-500">
                <a href="/" className="hover:text-yellow-400 transition-colors">ໜ້າຫຼັກ</a>
                <a href="/reviews" className="hover:text-yellow-400 transition-colors">ລີວິວ</a>
                <a href="/blog/how-to-start-forex-laos" className="hover:text-yellow-400 transition-colors">ບົດຄວາມ</a>
                <a href="/privacy-policy" className="hover:text-yellow-400 transition-colors">ນະໂຍບາຍຄວາມເປັນສ່ວນຕົວ</a>
                <a href="/disclaimer" className="hover:text-yellow-400 transition-colors">ຂໍ້ຈໍາກັດ</a>
                <a href="/contact" className="hover:text-yellow-400 transition-colors">ຕິດຕໍ່</a>
              </div>
            </div>
            <div>
              <h3 className="font-black mb-4 text-sm uppercase tracking-widest text-gray-400">ໂບກເກີ້ຊັ້ນນໍາ</h3>
              <div className="flex flex-col gap-3 text-sm text-gray-500">
                {brokers.map((b) => (
                  <a key={b.name} href={b.review} className="hover:text-yellow-400 transition-colors">{b.name}</a>
                ))}
              </div>
            </div>
          </div>
          <div className="pt-6 text-center text-xs text-gray-600"
            style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
            © 2026 LaoForex — ສ້າງເພື່ອ Trader ຄົນລາວ 🇱🇦
          </div>
        </div>
      </footer>

      {/* ── FLOATING BUTTONS ── */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <a href="https://wa.me/8562029826898" target="_blank"
          className="w-14 h-14 rounded-full flex items-center justify-center text-2xl shadow-2xl transition-all hover:scale-110"
          style={{ background: "#25D366", boxShadow: "0 8px 32px rgba(37,211,102,0.4)" }}
          title="WhatsApp">💬</a>
        <a href="https://t.me/laoforex" target="_blank"
          className="w-14 h-14 rounded-full flex items-center justify-center text-2xl shadow-2xl transition-all hover:scale-110"
          style={{ background: "#229ED9", boxShadow: "0 8px 32px rgba(34,158,217,0.4)" }}
          title="Telegram">✈️</a>
      </div>

    </main>
  );
}