export default function ReviewsPage() {
  const brokers = [
    {
      name: "XM",
      logo: "/brokers/xm.png",
      rating: "4.3/5",
      cashback: "$3/Lot",
      spread: "1.6 pip",
      deposit: "$30",
      leverage: "1:1000",
      bcel: "✓ ທະນາຄານລາວ",
      tag: "ແນະນໍາ",
      tagColor: "text-yellow-400 bg-yellow-400/10 border border-yellow-400/20",
      accent: "#facc15",
      border: "rgba(250,204,21,0.25)",
      glow: "rgba(250,204,21,0.06)",
      badge: "🥇 ອັນດັບ 1",
      link: "https://affs.click/wLl9B",
      review: "/xm",
      highlight: true,
    },
    {
      name: "Exness",
      logo: "/brokers/exness.png",
      rating: "4.6/5",
      cashback: "$3/Lot",
      spread: "1.0 pip",
      deposit: "$20",
      leverage: "1:2000",
      bcel: "✓ ທະນາຄານລາວ",
      tag: "ຖອນໄວ 24/7",
      tagColor: "text-blue-400 bg-blue-400/10 border border-blue-400/20",
      accent: "#60a5fa",
      border: "rgba(148,163,184,0.2)",
      glow: "rgba(148,163,184,0.04)",
      badge: "🥈 ອັນດັບ 2",
      link: "https://one.exnessonelink.com/boarding/sign-up/a/ocvhdpugv1?lng=th",
      review: "/exness",
      highlight: false,
    },
    {
      name: "Vantage",
      logo: "/brokers/vantage.png",
      rating: "4.1/5",
      cashback: "$4/Lot",
      spread: "1.2 pip",
      deposit: "$50",
      leverage: "1:500",
      bcel: "✓ ທະນາຄານລາວ",
      tag: "Cashback ສູງ",
      tagColor: "text-orange-400 bg-orange-400/10 border border-orange-400/20",
      accent: "#fb923c",
      border: "rgba(251,146,60,0.2)",
      glow: "rgba(251,146,60,0.04)",
      badge: "🥉 ອັນດັບ 3",
      link: "https://vigco.co/la-com-inv/wmd8Y80S",
      review: "/vantage",
      highlight: false,
    },
    {
      name: "IUX",
      logo: "/brokers/iux.png",
      rating: "4.2/5",
      cashback: "$2/Lot",
      spread: "0.9 pip",
      deposit: "$50",
      leverage: "1:3000",
      bcel: "✓ ທະນາຄານລາວ",
      tag: "Spread ຕໍ່າ",
      tagColor: "text-pink-400 bg-pink-400/10 border border-pink-400/20",
      accent: "#f472b6",
      border: "rgba(244,114,182,0.2)",
      glow: "rgba(244,114,182,0.04)",
      badge: "⭐ Spread ຕໍ່າ",
      link: "https://iux.com/en/register?code=EPs5nw6M",
      review: "/iux",
      highlight: false,
    },
    {
      name: "HFM",
      logo: "/brokers/hfm.png",
      rating: "4.0/5",
      cashback: "$3/Lot",
      spread: "1.1 pip",
      deposit: "$50",
      leverage: "1:1000",
      bcel: "✓ ທະນາຄານລາວ",
      tag: "Regulated",
      tagColor: "text-cyan-400 bg-cyan-400/10 border border-cyan-400/20",
      accent: "#22d3ee",
      border: "rgba(34,211,238,0.2)",
      glow: "rgba(34,211,238,0.04)",
      badge: "✅ ໜ້າເຊື່ອຖື",
      link: "https://register.hfm.com/sv/en/new-live-account/?refid=30421077",
      review: "/hfm",
      highlight: false,
    },
    {
      name: "Market4you",
      logo: "/brokers/market4you.png",
      rating: "3.9/5",
      cashback: "$3/Lot",
      spread: "1.5 pip",
      deposit: "$10",
      leverage: "1:500",
      bcel: "✓ ທະນາຄານລາວ",
      tag: "ຝາກຕໍ່າ $10",
      tagColor: "text-green-400 bg-green-400/10 border border-green-400/20",
      accent: "#4ade80",
      border: "rgba(74,222,128,0.2)",
      glow: "rgba(74,222,128,0.04)",
      badge: "🎁 Bonus",
      link: "https://account.markets4you.online/en/user-registration/?affid=bpblvtj",
      review: "/market4you",
      highlight: false,
    },
  ];

  return (
    <main
      className="min-h-screen text-white px-5 py-16"
      style={{ background: "#07080f", fontFamily: "'Noto Serif Lao', 'Phetsarath OT', serif" }}
    >
      <div className="max-w-4xl mx-auto">

        {/* BACK */}
        <a href="/" className="inline-flex items-center gap-2 text-gray-500 text-sm mb-8 hover:text-yellow-400 transition-colors">
          ← ກັບໜ້າຫຼັກ
        </a>

        {/* HEADER */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold mb-6"
          style={{ background: "rgba(250,204,21,0.08)", border: "1px solid rgba(250,204,21,0.2)", color: "#facc15" }}
        >
          🔥 ລີວິວ BROKER
        </div>

        <h1 className="font-black leading-tight mb-3" style={{ fontSize: "clamp(1.8rem, 6vw, 3rem)" }}>
          ລີວິວໂບກເກີ້ Forex 2026
        </h1>
        <p className="text-gray-400 text-base mb-10" style={{ lineHeight: "2" }}>
          ທົດສອບຈິງ · ຝາກ-ຖອນ BCEL · ກວດ Spread · Support ພາສາລາວ
        </p>

        {/* STATS */}
        <div className="grid grid-cols-3 gap-3 mb-12">
          {[
            { num: "6", label: "ໂບກເກີ້" },
            { num: "100%", label: "ທົດສອບຈິງ" },
            { num: "BCEL", label: "ຝາກ-ຖອນໄດ້" },
          ].map((s) => (
            <div key={s.num} className="rounded-xl p-4 text-center"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
              <div className="text-xl font-black text-yellow-400">{s.num}</div>
              <div className="text-xs text-gray-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        {/* BROKER CARDS */}
        <div className="flex flex-col gap-5">
          {brokers.map((broker, idx) => (
            <div
              key={broker.name}
              className="rounded-[24px] p-6 transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background: broker.highlight
                  ? "linear-gradient(135deg, rgba(250,204,21,0.06) 0%, rgba(7,8,15,1) 60%)"
                  : "rgba(255,255,255,0.02)",
                border: `1px solid ${broker.border}`,
                boxShadow: `0 8px 40px ${broker.glow}`,
              }}
            >
              {/* TOP ROW */}
              <div className="flex items-center justify-between mb-5 flex-wrap gap-3">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl overflow-hidden flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>
                    <img src={broker.logo} alt={broker.name} className="w-10 h-10 object-contain" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span className="font-black text-xl">{broker.name}</span>
                      <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${broker.tagColor}`}>
                        {broker.tag}
                      </span>
                    </div>
                    <div className="text-xs text-gray-500">{broker.rating} · Trustpilot</div>
                  </div>
                </div>
                <div className="text-sm font-black px-4 py-1.5 rounded-full text-black"
                  style={{ background: `linear-gradient(135deg, ${broker.accent}, #f97316)` }}>
                  {broker.badge}
                </div>
              </div>

              {/* STATS GRID */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-5">
                {[
                  { label: "ຝາກຕໍ່າ", value: broker.deposit },
                  { label: "Cashback", value: broker.cashback },
                  { label: "Spread", value: broker.spread },
                  { label: "Leverage", value: broker.leverage },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-xl px-4 py-3"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}>
                    <div className="text-xs text-gray-600 mb-1">{stat.label}</div>
                    <div className="font-black text-sm" style={{ color: broker.accent }}>{stat.value}</div>
                  </div>
                ))}
              </div>

              {/* BCEL */}
              <div className="flex items-center gap-2 mb-5 text-sm text-green-400">
                <span>✓</span>
                <span>ຝາກ-ຖອນ BCEL ທະນາຄານລາວໄດ້</span>
              </div>

              {/* BUTTONS */}
              <div className="flex gap-3">
                <a href={broker.link} target="_blank"
                  className="flex-1 py-3.5 rounded-xl font-black text-sm text-center text-black transition-all hover:scale-[1.02]"
                  style={{ background: "linear-gradient(135deg, #facc15, #f97316)" }}>
                  ສະໝັກເປີດບັນຊີ →
                </a>
                <a href={broker.review}
                  className="px-6 py-3.5 rounded-xl font-bold text-sm text-center transition-all hover:scale-[1.02]"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "#fff" }}>
                  ລີວິວ
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* DISCLAIMER */}
        <div className="mt-10 rounded-xl p-5 text-xs text-gray-500"
          style={{ background: "rgba(239,68,68,0.04)", border: "1px solid rgba(239,68,68,0.12)" }}>
          ⚠️ Forex ມີຄວາມສ່ຽງສູງ · ລົງທຶນສະເພາະເງິນທີ່ຍອມສູນໄດ້ · ລີວິວຈາກທາງໃຊ້ງານຈິງ
        </div>

      </div>
    </main>
  );
}