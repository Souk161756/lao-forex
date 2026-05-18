export default function BestForexBrokerLaos() {
  const brokers = [
    {
      icon: "🥇",
      name: "XM ໂບກເກີ້",
      desc: "ໂບກເກີ້ຍອດນິຍົມໃນລາວ · Bonus $30 ຟຣີ · Support ດີ · ຝາກ-ຖອນ BCEL ໄດ້",
      tag: "ແນະນໍາ",
      tagColor: "text-yellow-400 bg-yellow-400/10 border border-yellow-400/20",
      border: "rgba(250,204,21,0.3)",
      glow: "rgba(250,204,21,0.06)",
      href: "/xm",
    },
    {
      icon: "🥈",
      name: "Exness",
      desc: "ຖອນໄວ 24/7 · Leverage ສູງ 1:2000 · Spread ຕໍ່າ · ເໝາະສໍາລັບ Scalping",
      tag: "ຖອນໄວ",
      tagColor: "text-blue-400 bg-blue-400/10 border border-blue-400/20",
      border: "rgba(148,163,184,0.3)",
      glow: "rgba(148,163,184,0.06)",
      href: "/exness",
    },
    {
      icon: "🥉",
      name: "Vantage",
      desc: "Cashback ສູງສຸດ $4/Lot · ຖອນໄວ · Regulated ASIC, FCA",
      tag: "Cashback ສູງ",
      tagColor: "text-orange-400 bg-orange-400/10 border border-orange-400/20",
      border: "rgba(251,146,60,0.3)",
      glow: "rgba(251,146,60,0.06)",
      href: "/vantage",
    },
    {
      icon: "💎",
      name: "IUX",
      desc: "Spread ຕໍ່ານ 0.9pip · UI ທັນສະໄໝ · Leverage 1:3000 · Bonus ດີ",
      tag: "Spread ຕໍ່າ",
      tagColor: "text-pink-400 bg-pink-400/10 border border-pink-400/20",
      border: "rgba(244,114,182,0.3)",
      glow: "rgba(244,114,182,0.06)",
      href: "/iux",
    },
    {
      icon: "✅",
      name: "HFM",
      desc: "ໂບກເກີ້ທີ່ໜ້າເຊື່ອຖື · License ຫຼາຍ · Regulated FCA, CySEC",
      tag: "Regulated",
      tagColor: "text-cyan-400 bg-cyan-400/10 border border-cyan-400/20",
      border: "rgba(34,211,238,0.3)",
      glow: "rgba(34,211,238,0.06)",
      href: "/hfm",
    },
    {
      icon: "🎁",
      name: "Market4you",
      desc: "ຝາກຕໍ່າ $10 · ເໝາະສໍາລັບມືໃໝ່ · Bonus ສໍາລັບລູກຄ້າໃໝ່",
      tag: "ຝາກຕໍ່າ $10",
      tagColor: "text-green-400 bg-green-400/10 border border-green-400/20",
      border: "rgba(74,222,128,0.3)",
      glow: "rgba(74,222,128,0.06)",
      href: "/market4you",
    },
  ];

  return (
    <main
      className="min-h-screen text-white px-5 py-16"
      style={{ background: "#07080f", fontFamily: "'Noto Serif Lao', 'Phetsarath OT', serif" }}
    >
      <div className="max-w-3xl mx-auto">

        {/* BACK */}
        <a href="/" className="inline-flex items-center gap-2 text-gray-500 text-sm mb-8 hover:text-yellow-400 transition-colors">
          ← ກັບໜ້າຫຼັກ
        </a>

        {/* BADGE */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold mb-6"
          style={{ background: "rgba(250,204,21,0.08)", border: "1px solid rgba(250,204,21,0.2)", color: "#facc15" }}
        >
          🔥 ໂບກເກີ້ Forex ລາວ
        </div>

        {/* TITLE */}
        <h1 className="font-black leading-tight mb-4" style={{ fontSize: "clamp(1.8rem, 6vw, 3rem)" }}>
          ໂບກເກີ້ Forex ທີ່ດີສຸດໃນລາວ 2026
        </h1>
        <p className="text-gray-400 text-base mb-10" style={{ lineHeight: "2" }}>
          ທົດສອບຈິງ · ຝາກ-ຖອນ BCEL · ກວດ Spread · Support ພາສາລາວ
        </p>

        {/* GUIDE CARD */}
        <div
          className="rounded-2xl p-6 mb-8"
          style={{ background: "rgba(59,130,246,0.06)", border: "1px solid rgba(59,130,246,0.25)" }}
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl">📚</span>
            <h2 className="font-black text-lg">ຮຽນ Forex ຟຣີ — ຄູ່ມື 4 ພາກ 20 ບົດ</h2>
          </div>
          <p className="text-gray-400 text-sm mb-4" style={{ lineHeight: "1.8" }}>
            ຕັ້ງແຕ່ Forex ແມ່ນຫຍັງ · ຄໍາສັບພື້ນຖານ · ຂັ້ນຕອນເລີ່ມຕົ້ນ · Tips ສໍາລັບມືໃໝ່
          </p>
          <a
            href="/blog/how-to-start-forex-laos"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-black text-sm text-black transition-all hover:scale-[1.02]"
            style={{ background: "linear-gradient(135deg, #facc15, #f97316)" }}
          >
            📖 ອ່ານຄູ່ມື Forex
          </a>
        </div>

        {/* SECTION TITLE */}
        <div className="mb-4">
          <p className="text-yellow-400 text-xs font-bold uppercase tracking-widest mb-1">ລີວິວ BROKER</p>
          <h2 className="text-xl font-black">ໂບກເກີ້ແນະນໍາ</h2>
        </div>

        {/* BROKER LIST */}
        <div className="space-y-3">
          {brokers.map((broker) => (
            <a
              key={broker.name}
              href={broker.href}
              className="flex items-center gap-4 p-5 rounded-2xl transition-all hover:-translate-y-0.5 block"
              style={{
                background: `rgba(255,255,255,0.02)`,
                border: `1px solid ${broker.border}`,
                boxShadow: `0 4px 20px ${broker.glow}`,
                textDecoration: "none",
              }}
            >
              {/* Icon */}
              <div className="text-3xl flex-shrink-0">{broker.icon}</div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <span className="font-black text-white">{broker.name}</span>
                  <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${broker.tagColor}`}>
                    {broker.tag}
                  </span>
                </div>
                <p className="text-gray-400 text-xs" style={{ lineHeight: "1.6" }}>{broker.desc}</p>
              </div>

              {/* Arrow */}
              <div className="text-gray-600 text-xl flex-shrink-0">›</div>
            </a>
          ))}
        </div>

        {/* DISCLAIMER */}
        <div
          className="mt-10 rounded-xl p-5 text-xs text-gray-500"
          style={{ background: "rgba(239,68,68,0.04)", border: "1px solid rgba(239,68,68,0.12)" }}
        >
          ⚠️ Forex ມີຄວາມສ່ຽງສູງ · ລົງທຶນສະເພາະເງິນທີ່ຍອມສູນໄດ້ · ລີວິວຈາກທາງໃຊ້ງານຈິງ
        </div>

      </div>
    </main>
  );
}