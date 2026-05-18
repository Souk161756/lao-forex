"use client";

import { useState } from "react";

export default function Home() {
  const [search, setSearch] = useState("");

  const brokers = [
    {
      name: "XM",
      logo: "/brokers/xm.png",
      rating: 4.3,
      ratingText: "4.3/5",
      source: "Trustpilot",
      cashback: "$3/Lot",
      spread: "1.6 pip",
      pair: "EURUSD",
      deposit: "$30",
      depositType: "ທະນາຄານລາວ",
      badge: "🥇 ອັນດັບ 1",
      badgeBg: "from-yellow-400 to-amber-500",
      borderColor: "border-yellow-400/30",
      glowColor: "rgba(250,204,21,0.08)",
      accentColor: "text-yellow-400",
      tag: "ແນະນໍາ",
      tagBg: "bg-yellow-400/10 text-yellow-400 border border-yellow-400/20",
      link: "https://affs.click/wLl9B",
      review: "/xm",
      highlight: true,
    },
    {
      name: "Exness",
      logo: "/brokers/exness.png",
      rating: 4.6,
      ratingText: "4.6/5",
      source: "Trustpilot",
      cashback: "$3/Lot",
      spread: "1.0 pip",
      pair: "EURUSD",
      deposit: "$20",
      depositType: "ທະນາຄານລາວ",
      badge: "🥈 ອັນດັບ 2",
      badgeBg: "from-slate-400 to-gray-500",
      borderColor: "border-slate-400/30",
      glowColor: "rgba(148,163,184,0.06)",
      accentColor: "text-slate-300",
      tag: "ຖອນໄວ 24/7",
      tagBg: "bg-blue-500/10 text-blue-400 border border-blue-400/20",
      link: "https://one.exnessonelink.com/boarding/sign-up/a/ocvhdpugv1?lng=th",
      review: "/exness",
      highlight: false,
    },
    {
      name: "Vantage",
      logo: "/brokers/vantage.png",
      rating: 4.1,
      ratingText: "4.1/5",
      source: "Trustpilot",
      cashback: "$4/Lot",
      spread: "1.2 pip",
      pair: "EURUSD",
      deposit: "$50",
      depositType: "ທະນາຄານລາວ",
      badge: "🥉 ອັນດັບ 3",
      badgeBg: "from-orange-500 to-amber-600",
      borderColor: "border-orange-400/30",
      glowColor: "rgba(251,146,60,0.06)",
      accentColor: "text-orange-400",
      tag: "Cashback ສູງ",
      tagBg: "bg-orange-500/10 text-orange-400 border border-orange-400/20",
      link: "https://vigco.co/la-com-inv/wmd8Y80S",
      review: "/vantage",
      highlight: false,
    },
    {
      name: "IUX",
      logo: "/brokers/iux.png",
      rating: 4.2,
      ratingText: "4.2/5",
      source: "Trustpilot",
      cashback: "$2/Lot",
      spread: "0.9 pip",
      pair: "EURUSD",
      deposit: "$50",
      depositType: "ທະນາຄານລາວ",
      badge: "⭐ Spread ຕໍ່າ",
      badgeBg: "from-pink-500 to-rose-500",
      borderColor: "border-pink-400/30",
      glowColor: "rgba(244,114,182,0.06)",
      accentColor: "text-pink-400",
      tag: "Spread ຕໍ່ານ",
      tagBg: "bg-pink-500/10 text-pink-400 border border-pink-400/20",
      link: "https://iux.com/en/register?code=EPs5nw6M",
      review: "/iux",
      highlight: false,
    },
    {
      name: "HFM",
      logo: "/brokers/hfm.png",
      rating: 4.0,
      ratingText: "4.0/5",
      source: "Trustpilot",
      cashback: "$3/Lot",
      spread: "1.1 pip",
      pair: "EURUSD",
      deposit: "$50",
      depositType: "ທະນາຄານລາວ",
      badge: "✅ ໜ້າເຊື່ອຖື",
      badgeBg: "from-cyan-500 to-teal-500",
      borderColor: "border-cyan-400/30",
      glowColor: "rgba(34,211,238,0.06)",
      accentColor: "text-cyan-400",
      tag: "Regulated",
      tagBg: "bg-cyan-500/10 text-cyan-400 border border-cyan-400/20",
      link: "https://register.hfm.com/sv/en/new-live-account/?refid=30421077",
      review: "/hfm",
      highlight: false,
    },
    {
      name: "Market4you",
      logo: "/brokers/market4you.png",
      rating: 3.9,
      ratingText: "3.9/5",
      source: "Trustpilot",
      cashback: "$3/Lot",
      spread: "1.5 pip",
      pair: "EURUSD",
      deposit: "$10",
      depositType: "ທະນາຄານລາວ",
      badge: "🎁 Bonus",
      badgeBg: "from-green-500 to-emerald-500",
      borderColor: "border-green-400/30",
      glowColor: "rgba(74,222,128,0.06)",
      accentColor: "text-green-400",
      tag: "ຝາກຕໍ່າ $10",
      tagBg: "bg-green-500/10 text-green-400 border border-green-400/20",
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
          <span
            key={i}
            className={i <= Math.round(rating) ? "text-yellow-400" : "text-gray-700"}
            style={{ fontSize: "14px" }}
          >
            ★
          </span>
        ))}
      </div>
    );
  }

  return (
    <main
      className="min-h-screen text-white"
      style={{ background: "#07080f", fontFamily: "'Phetsarath OT', 'Noto Sans Lao', sans-serif" }}
    >
      {/* ── NAVBAR ── */}
      <nav
        className="sticky top-0 z-50"
        style={{
          background: "rgba(7,8,15,0.85)",
          backdropFilter: "blur(24px)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div className="max-w-6xl mx-auto px-5 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="LaoForex"
              className="w-10 h-10 rounded-xl object-contain"
              onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
            />
            <div>
              <div className="font-black text-xl text-yellow-400 leading-none">LaoForex</div>
              <div className="text-[10px] text-gray-500 leading-none mt-0.5">ໂບກເກີ້ Forex ສໍາລັບຄົນລາວ</div>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm font-semibold text-gray-400">
            <a href="/" className="hover:text-yellow-400 transition-colors">ໜ້າຫຼັກ</a>
            <a href="/reviews" className="hover:text-yellow-400 transition-colors">ລີວິວ</a>
            <a href="/blog/how-to-start-forex-laos" className="hover:text-yellow-400 transition-colors">ບົດຄວາມ</a>
            <a href="#brokers" className="hover:text-yellow-400 transition-colors">ໂບກເກີ້</a>
            <a
              href="https://t.me/laoforex"
              target="_blank"
              className="flex items-center gap-1.5 bg-[#229ED9] text-white px-4 py-2 rounded-full text-xs font-bold hover:opacity-90 transition"
            >
              <span>📱</span> WhatsApp / Telegram
            </a>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="relative overflow-hidden pt-20 pb-24 px-5">
        <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(250,204,21,0.12) 0%, transparent 70%)" }} />
        <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)" }} />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold mb-8"
            style={{ background: "rgba(250,204,21,0.08)", border: "1px solid rgba(250,204,21,0.2)", color: "#facc15" }}>
            <span>🇱🇦</span>
            <span>ໂບກເກີ້ Forex ສໍາລັບຄົນລາວ</span>
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
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#brokers" className="font-black text-black px-10 py-4 rounded-2xl text-lg transition-all hover:scale-105"
              style={{ background: "linear-gradient(135deg, #facc15, #f97316)", boxShadow: "0 16px 60px rgba(250,204,21,0.25)" }}>
              🚀 ເບິ່ງໂບກເກີ້
            </a>
            <a href="/blog/how-to-start-forex-laos" className="font-bold px-10 py-4 rounded-2xl text-lg text-white transition-all hover:scale-105"
              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", backdropFilter: "blur(12px)" }}>
              📚 ຮຽນ Forex
            </a>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="max-w-6xl mx-auto px-5 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { num: "6+", label: "ໂບກເກີ້ຊັ້ນນໍາ" },
            { num: "$4/Lot", label: "Cashback ສູງສຸດ" },
            { num: "24/7", label: "Support ພາສາລາວ" },
            { num: "100%", label: "ລີວິວຟຣີ" },
          ].map((s) => (
            <div key={s.num} className="rounded-2xl p-6 text-center"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
              <div className="text-3xl font-black text-yellow-400 mb-1">{s.num}</div>
              <div className="text-sm text-gray-500">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SEARCH ── */}
      <section className="max-w-6xl mx-auto px-5 pb-8">
        <div className="rounded-2xl px-5 py-1 flex items-center gap-3"
          style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
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
            <div key={broker.name} className="rounded-[24px] p-6 transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background: broker.highlight ? "linear-gradient(135deg, rgba(250,204,21,0.06) 0%, rgba(7,8,15,1) 60%)" : "rgba(255,255,255,0.03)",
                border: `1px solid ${broker.highlight ? "rgba(250,204,21,0.3)" : "rgba(255,255,255,0.07)"}`,
                boxShadow: `0 8px 40px ${broker.glowColor}`,
              }}>
              <div className="flex items-center justify-between mb-5 flex-wrap gap-3">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl overflow-hidden flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>
                    <img src={broker.logo} alt={broker.name} className="w-10 h-10 object-contain"
                      onError={(e) => { (e.target as HTMLImageElement).outerHTML = `<span class="text-2xl font-black text-gray-400">${broker.name[0]}</span>`; }} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-black text-xl">{broker.name}</span>
                      <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${broker.tagBg}`}>{broker.tag}</span>
                    </div>
                    <Stars rating={broker.rating} />
                    <div className="text-xs text-gray-600 mt-0.5">{broker.ratingText} · {broker.source}</div>
                  </div>
                </div>
                <div className="px-4 py-1.5 rounded-full text-sm font-black text-black"
                  style={{ background: `linear-gradient(135deg, ${broker.badgeBg.replace("from-", "").replace("to-", ",")})` }}>
                  {broker.badge}
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-5">
                {[
                  { label: "ຝາກຕໍ່າ", value: broker.deposit, sub: broker.depositType },
                  { label: "Cashback", value: broker.cashback, sub: "ຕໍ່ Lot" },
                  { label: "Spread", value: broker.spread, sub: broker.pair },
                  { label: "ຝາກ BCEL", value: "✓ ທະນາຄານລາວ", sub: "" },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-xl px-4 py-3"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}>
                    <div className="text-xs text-gray-600 mb-1">{stat.label}</div>
                    <div className={`font-black text-sm ${broker.accentColor}`}>{stat.value}</div>
                    {stat.sub && <div className="text-[10px] text-gray-600 mt-0.5">{stat.sub}</div>}
                  </div>
                ))}
              </div>
              <div className="flex gap-3">
                <a href={broker.link} target="_blank"
                  className="flex-1 py-3.5 rounded-xl font-black text-sm text-center text-black transition-all hover:scale-[1.02]"
                  style={{ background: "linear-gradient(135deg, #facc15, #f97316)" }}>
                  ສະໝັກເປີດບັນຊີ →
                </a>
                <a href={broker.review}
                  className="px-6 py-3.5 rounded-xl font-bold text-sm text-center transition-all hover:scale-[1.02]"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "#fff" }}>
                  ເວັບໄຊ
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
                    <td className="p-4 font-black">{b.name}</td>
                    <td className="p-4 text-yellow-400 font-bold text-sm">{b.ratingText}</td>
                    <td className="p-4 text-gray-400 text-sm">{b.spread}</td>
                    <td className="p-4 text-gray-400 text-sm">{b.cashback}</td>
                    <td className="p-4 text-gray-400 text-sm">{b.deposit}</td>
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
              { name: "🥇 XM", desc: "ເໝາະສໍາລັບຜູ້ເລີ່ມຕົ້ນ · Bonus ດີ · Support ໃຊ້ງ່າຍ · ຝາກ-ຖອນ BCEL ໄດ້" },
              { name: "🥈 Exness", desc: "Leverage ບໍ່ຈໍາກັດ · ຖອນໄວ 24/7 · Spread ຕໍ່າ · ເໝາະສໍາລັບ Scalping" },
              { name: "🥉 Vantage", desc: "Cashback ສູງສຸດ $4/Lot · ເໝາະສໍາລັບ Volume Trader · Regulated" },
              { name: "⭐ IUX", desc: "Spread ຕໍ່ານ 0.9pip · UI ທັນສະໄໝ · ໃຊ້ງານງ່າຍ · ຄ່າ Commission ຕໍ່າ" },
            ].map((g) => (
              <div key={g.name} className="rounded-xl p-5"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}>
                <div className="font-black text-yellow-400 mb-2">{g.name}</div>
                <p className="text-gray-400 text-sm leading-relaxed">{g.desc}</p>
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
            {
              title: "Forex ແມ່ນຫຍັງ?",
              desc: "ຮຽນພື້ນຖານ Forex ສໍາລັບຜູ້ເລີ່ມຕົ້ນ · ຄໍາສັບ · ຂັ້ນຕອນ · Tips ທັງໝົດ",
              href: "/blog/how-to-start-forex-laos",
              color: "from-blue-400/20",
            },
            {
              title: "ໂບກເກີ້ Forex ທີ່ດີໃນລາວ",
              desc: "ປຽບທຽບໂບກເກີ້ທີ່ນ່າໃຊ້ ຝາກ-ຖອນ BCEL ໄດ້",
              href: "/blog",
              color: "from-yellow-400/20",
            },
            {
              title: "ລີວິວ Exness ສໍາລັບຄົນລາວ",
              desc: "ລີວິວ Exness ແບບລະອຽດ ທົດສອບຈິງ ໂດຍທີມລາວ",
              href: "/exness",
              color: "from-green-400/20",
            },
          ].map((p) => (
            <a key={p.title} href={p.href}
              className="block rounded-2xl p-6 transition-all hover:-translate-y-1 hover:scale-[1.01]"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
              <div className={`w-full h-32 rounded-xl mb-4 bg-gradient-to-br ${p.color} to-transparent`} />
              <h3 className="font-black mb-2 leading-snug">{p.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
              <div className="text-yellow-400 text-sm font-bold mt-4">ອ່ານເພີ່ມ →</div>
            </a>
          ))}
        </div>
      </section>

      {/* ── DISCLAIMER ── */}
      <section className="max-w-6xl mx-auto px-5 pb-20">
        <div className="rounded-2xl p-6"
          style={{ background: "rgba(239,68,68,0.06)", border: "1px solid rgba(239,68,68,0.15)" }}>
          <h3 className="text-red-400 font-black mb-3">⚠️ ຄຳເຕືອນຄວາມສ່ຽງ</h3>
          <div className="text-gray-400 text-sm leading-relaxed space-y-2">
            <p>Forex ແລະ CFD ມີຄວາມສ່ຽງສູງ ແລະ ອາດເຮັດໃຫ້ສູນເສຍເງິນລົງທຶນໄດ້.</p>
            <p>ຄະແນນອ້າງອີງຈາກ Trustpilot ແລະ ຂໍ້ມູນສາທາລະນະ.</p>
            <p>Spread ແລະ Cashback ອາດປ່ຽນແປງຕາມ Market Conditions.</p>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ borderTop: "1px solid rgba(255,255,255,0.06)", background: "rgba(0,0,0,0.3)" }}>
        <div className="max-w-6xl mx-auto px-5 py-14">
          <div className="grid md:grid-cols-3 gap-10 mb-10">
            <div>
              <div className="font-black text-2xl text-yellow-400 mb-3">LaoForex</div>
              <p className="text-gray-500 text-sm leading-relaxed">
                ລວມ Forex Brokers · Cashback Rebate · ລີວິວສໍາລັບຄົນລາວ 🇱🇦
              </p>
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

      {/* ── TELEGRAM FLOATING ── */}
      <a href="https://t.me/laoforex" target="_blank"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center text-2xl shadow-2xl transition-all hover:scale-110"
        style={{ background: "#229ED9", boxShadow: "0 8px 32px rgba(34,158,217,0.4)" }}
        title="ຕິດຕໍ່ທາງ Telegram">
        ✈️
      </a>
    </main>
  );
}