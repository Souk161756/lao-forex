export default function XMReviewLaos() {
  return (
    <main
      className="min-h-screen text-white px-5 py-16"
      style={{ background: "#07080f", fontFamily: "'Noto Serif Lao', 'Phetsarath OT', serif" }}
    >
      <div className="max-w-3xl mx-auto">

        {/* BACK */}
        <a href="/reviews" className="inline-flex items-center gap-2 text-gray-500 text-sm mb-8 hover:text-yellow-400 transition-colors">
          ← ກັບລາຍການໂບກເກີ້
        </a>

        {/* BADGE */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold mb-6"
          style={{ background: "rgba(250,204,21,0.08)", border: "1px solid rgba(250,204,21,0.2)", color: "#facc15" }}>
          🔥 ລີວິວ XM
        </div>

        {/* HERO */}
        <div className="rounded-[24px] p-6 mb-6"
          style={{ background: "linear-gradient(135deg, rgba(250,204,21,0.06) 0%, rgba(7,8,15,1) 60%)", border: "1px solid rgba(250,204,21,0.3)" }}>
          <div className="flex items-center gap-4 mb-4">
            <img src="/brokers/xm.png" alt="XM" className="w-16 h-16 rounded-2xl object-contain"
              style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }} />
            <div>
              <h1 className="font-black text-3xl mb-1">XM Global</h1>
              <div className="flex items-center gap-2">
                <span className="text-yellow-400 text-sm">⭐⭐⭐⭐</span>
                <span className="text-gray-400 text-sm">4.3/5 · Trustpilot</span>
              </div>
            </div>
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold"
            style={{ background: "rgba(250,204,21,0.1)", border: "1px solid rgba(250,204,21,0.2)", color: "#facc15" }}>
            🥇 ອັນດັບ 1 · ທາງເລືອກ Trader ລາວ
          </div>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          {[
            { label: "ຝາກຕໍ່າ", value: "$30", icon: "💳" },
            { label: "Leverage", value: "1:1000", icon: "⚡" },
            { label: "Spread", value: "1.6 pip", icon: "📊" },
            { label: "Cashback", value: "$3/Lot", icon: "💰" },
          ].map((s) => (
            <div key={s.label} className="rounded-xl p-4 text-center"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
              <div className="text-lg mb-1">{s.icon}</div>
              <div className="text-xs text-gray-500 mb-1">{s.label}</div>
              <div className="font-black text-yellow-400">{s.value}</div>
            </div>
          ))}
        </div>

        {/* BCEL */}
        <div className="flex items-center gap-3 px-5 py-4 rounded-xl mb-6"
          style={{ background: "rgba(74,222,128,0.06)", border: "1px solid rgba(74,222,128,0.2)" }}>
          <span className="text-green-400 text-xl">✓</span>
          <div>
            <div className="font-bold text-green-400 text-sm">ຝາກ-ຖອນ BCEL ທະນາຄານລາວໄດ້</div>
            <div className="text-gray-500 text-xs mt-0.5">ສະດວກ · ໄວ · ບໍ່ຕ້ອງໃຊ້ Crypto</div>
          </div>
        </div>

        {/* REVIEW */}
        <div className="rounded-2xl p-6 mb-4"
          style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)" }}>
          <h2 className="font-black text-xl mb-4 text-yellow-400">XM ດີບໍ?</h2>
          <p className="text-gray-300 text-sm mb-4" style={{ lineHeight: "2" }}>
            XM ເປັນໂບກເກີ້ທີ່ດີທີ່ສຸດສໍາລັບຜູ້ເລີ່ມຕົ້ນໃນລາວ ·
            ຝາກ-ຖອນ BCEL ງ່າຍ · Support ດີ · ໄດ້ຮັບ Bonus $30 ຟຣີໂດຍບໍ່ຕ້ອງຝາກ
          </p>
          <p className="text-gray-300 text-sm" style={{ lineHeight: "2" }}>
            ທົດສອບໂດຍທີມງານ LaoForex ຈິງ ·
            ຝາກຜ່ານ BCEL One ໄດ້ 15-30 ນາທີ ·
            ຖອນໄດ້ 1-3 ວັນທໍາການ
          </p>
        </div>

        {/* PROS */}
        <div className="rounded-2xl p-6 mb-4"
          style={{ background: "rgba(250,204,21,0.04)", border: "1px solid rgba(250,204,21,0.15)" }}>
          <h2 className="font-black text-xl mb-4 text-yellow-400">✅ ຂໍ້ດີ XM</h2>
          <ul className="space-y-3">
            {[
              "Bonus $30 ຟຣີ ບໍ່ຕ້ອງຝາກ — ໃຊ້ທົດລອງເທຣດຟຣີ",
              "ຝາກ-ຖອນ BCEL ທະນາຄານລາວໄດ້ · ໄວ · ງ່າຍ",
              "Leverage ສູງສຸດ 1:1000 · ເໝາະ Day Trading",
              "Support ພາສາລາວ + ໄທ · ຕອບໄວ 24/5",
              "Regulated ໂດຍ CySEC, ASIC, DFSA",
              "MT4 + MT5 ໃຊ້ໄດ້ທັງ PC ແລະ Mobile",
            ].map((p) => (
              <li key={p} className="flex gap-3 text-gray-300 text-sm" style={{ lineHeight: "1.8" }}>
                <span className="text-yellow-400 flex-shrink-0">✅</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CONS */}
        <div className="rounded-2xl p-6 mb-4"
          style={{ background: "rgba(239,68,68,0.04)", border: "1px solid rgba(239,68,68,0.15)" }}>
          <h2 className="font-black text-xl mb-4 text-red-400">❌ ຂໍ້ເສຍ XM</h2>
          <ul className="space-y-3">
            {[
              "Spread ສູງກວ່າ Exness ໜ້ອຍໜຶ່ງ",
              "Bonus ມີ Volume Requirement ກ່ອນຖອນໄດ້",
            ].map((p) => (
              <li key={p} className="flex gap-3 text-gray-300 text-sm" style={{ lineHeight: "1.8" }}>
                <span className="text-red-400 flex-shrink-0">❌</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* COMPARISON */}
        <div className="rounded-2xl p-6 mb-6"
          style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)" }}>
          <h2 className="font-black text-xl mb-4">📊 ຂໍ້ມູນລະອຽດ</h2>
          <div className="space-y-3">
            {[
              { label: "ປະເພດ Account", value: "Micro, Standard, Zero, Ultra Low" },
              { label: "Currency Pairs", value: "55+ ຄູ່ເງິນ" },
              { label: "ຝາກຕໍ່າ", value: "$30 (ຫຼື $5 ສໍາລັບບາງ account)" },
              { label: "ຖອນ", value: "1-5 ວັນທໍາການ" },
              { label: "Platform", value: "MT4, MT5, XM App" },
              { label: "Regulation", value: "CySEC, ASIC, DFSA, FSC" },
              { label: "ກໍ່ຕັ້ງ", value: "2009 — 15+ ປີ" },
              { label: "ລູກຄ້າ", value: "5 ລ້ານ+ ທົ່ວໂລກ" },
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-between py-2"
                style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                <span className="text-gray-500 text-sm">{item.label}</span>
                <span className="text-white text-sm font-bold">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* VERDICT */}
        <div className="rounded-2xl p-6 mb-6"
          style={{ background: "rgba(250,204,21,0.06)", border: "1px solid rgba(250,204,21,0.2)" }}>
          <h2 className="font-black text-xl mb-3 text-yellow-400">🏆 ສະຫຼຸບ</h2>
          <p className="text-gray-300 text-sm" style={{ lineHeight: "2" }}>
            XM ເໝາະຫຼາຍສໍາລັບ <strong className="text-white">ຜູ້ເລີ່ມຕົ້ນໃນລາວ</strong> ·
            ຝາກ-ຖອນ BCEL ງ່າຍ · Bonus ຟຣີ ·
            Support ດີ · ໄດ້ຮັບຄວາມໄວ້ວາງໃຈຈາກ Trader ລາວຫຼາຍທີ່ສຸດ
          </p>
        </div>

        {/* CTA */}
        <a href="https://affs.click/wLl9B" target="_blank"
          className="block text-center py-5 rounded-2xl font-black text-black text-xl transition-all hover:scale-[1.02] mb-3"
          style={{ background: "linear-gradient(135deg, #facc15, #f97316)", boxShadow: "0 16px 60px rgba(250,204,21,0.25)" }}>
          🚀 ສະໝັກເປີດບັນຊີ XM ຟຣີ
        </a>

        <p className="text-center text-gray-600 text-xs">
          ⚠️ Forex ມີຄວາມສ່ຽງສູງ · ລົງທຶນສະເພາະເງິນທີ່ຍອມສູນໄດ້
        </p>

      </div>
    </main>
  );
}