export default function VantageReviewLaos() {
  return (
    <main className="min-h-screen text-white px-5 py-16"
      style={{ background: "#07080f", fontFamily: "'Noto Serif Lao', 'Phetsarath OT', serif" }}>
      <div className="max-w-3xl mx-auto">

        <a href="/reviews" className="inline-flex items-center gap-2 text-gray-500 text-sm mb-8 hover:text-yellow-400 transition-colors">
          ← ກັບລາຍການໂບກເກີ້
        </a>

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold mb-6"
          style={{ background: "rgba(251,146,60,0.08)", border: "1px solid rgba(251,146,60,0.2)", color: "#fb923c" }}>
          💎 ລີວິວ VANTAGE
        </div>

        <div className="rounded-[24px] p-6 mb-6"
          style={{ background: "linear-gradient(135deg, rgba(251,146,60,0.06) 0%, rgba(7,8,15,1) 60%)", border: "1px solid rgba(251,146,60,0.3)" }}>
          <div className="flex items-center gap-4 mb-4">
            <img src="/brokers/vantage.png" alt="Vantage" className="w-16 h-16 rounded-2xl object-contain"
              style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }} />
            <div>
              <h1 className="font-black text-3xl mb-1">Vantage Markets</h1>
              <div className="flex items-center gap-2">
                <span className="text-yellow-400 text-sm">⭐⭐⭐⭐</span>
                <span className="text-gray-400 text-sm">4.1/5 · Trustpilot</span>
              </div>
            </div>
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold"
            style={{ background: "rgba(251,146,60,0.1)", border: "1px solid rgba(251,146,60,0.2)", color: "#fb923c" }}>
            🥉 ອັນດັບ 3 · Cashback $4/Lot ສູງສຸດ
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          {[
            { label: "ຝາກຕໍ່າ", value: "$50", icon: "💳" },
            { label: "Leverage", value: "1:500", icon: "⚡" },
            { label: "Spread", value: "1.2 pip", icon: "📊" },
            { label: "Cashback", value: "$4/Lot", icon: "💰" },
          ].map((s) => (
            <div key={s.label} className="rounded-xl p-4 text-center"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
              <div className="text-lg mb-1">{s.icon}</div>
              <div className="text-xs text-gray-500 mb-1">{s.label}</div>
              <div className="font-black text-orange-400">{s.value}</div>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-3 px-5 py-4 rounded-xl mb-6"
          style={{ background: "rgba(74,222,128,0.06)", border: "1px solid rgba(74,222,128,0.2)" }}>
          <span className="text-green-400 text-xl">✓</span>
          <div>
            <div className="font-bold text-green-400 text-sm">ຝາກ-ຖອນ BCEL ທະນາຄານລາວໄດ້</div>
            <div className="text-gray-500 text-xs mt-0.5">Cashback ສູງສຸດ $4/Lot · ຄືນທຸກ Lot ທີ່ເທຣດ</div>
          </div>
        </div>

        <div className="rounded-2xl p-6 mb-4"
          style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)" }}>
          <h2 className="font-black text-xl mb-4 text-orange-400">Vantage ດີບໍ?</h2>
          <p className="text-gray-300 text-sm mb-4" style={{ lineHeight: "2" }}>
            Vantage ເໝາະສໍາລັບ Trader ທີ່ຕ້ອງການ Cashback ສູງ · ເທຣດ Gold ແລະ Scalping ·
            Cashback $4/Lot ສູງທີ່ສຸດໃນລາຍການ
          </p>
          <p className="text-gray-300 text-sm" style={{ lineHeight: "2" }}>
            Regulated ໂດຍ ASIC Australia · FCA UK · CIMA · ໜ້າເຊື່ອຖື · ຝາກ BCEL ໄດ້
          </p>
        </div>

        <div className="rounded-2xl p-6 mb-4"
          style={{ background: "rgba(251,146,60,0.04)", border: "1px solid rgba(251,146,60,0.15)" }}>
          <h2 className="font-black text-xl mb-4 text-orange-400">✅ ຂໍ້ດີ Vantage</h2>
          <ul className="space-y-3">
            {[
              "Cashback $4/Lot — ສູງສຸດໃນລາຍການ",
              "Spread ຕໍ່າ 1.2 pip EURUSD · ເໝາະ Scalping",
              "Leverage ສູງສຸດ 1:500",
              "ຝາກ-ຖອນ BCEL ໄດ້ · ໄວ · ງ່າຍ",
              "Regulated ໂດຍ ASIC, FCA, CIMA",
              "MT4, MT5, Vantage App",
            ].map((p) => (
              <li key={p} className="flex gap-3 text-gray-300 text-sm" style={{ lineHeight: "1.8" }}>
                <span className="text-orange-400 flex-shrink-0">✅</span><span>{p}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl p-6 mb-4"
          style={{ background: "rgba(239,68,68,0.04)", border: "1px solid rgba(239,68,68,0.15)" }}>
          <h2 className="font-black text-xl mb-4 text-red-400">❌ ຂໍ້ເສຍ Vantage</h2>
          <ul className="space-y-3">
            {["ຝາກຕໍ່າ $50 ສູງກວ່າ XM ແລະ Exness", "ບໍ່ຮັບ Crypto ຝາກ-ຖອນ"].map((p) => (
              <li key={p} className="flex gap-3 text-gray-300 text-sm" style={{ lineHeight: "1.8" }}>
                <span className="text-red-400 flex-shrink-0">❌</span><span>{p}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl p-6 mb-6"
          style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)" }}>
          <h2 className="font-black text-xl mb-4">📊 ຂໍ້ມູນລະອຽດ</h2>
          <div className="space-y-3">
            {[
              { label: "ປະເພດ Account", value: "Standard, Raw, Pro" },
              { label: "Currency Pairs", value: "40+ ຄູ່ເງິນ" },
              { label: "ຝາກຕໍ່າ", value: "$50" },
              { label: "ຖອນ", value: "1-3 ວັນທໍາການ" },
              { label: "Platform", value: "MT4, MT5, Vantage App" },
              { label: "Regulation", value: "ASIC, FCA, CIMA, VFSC" },
              { label: "ກໍ່ຕັ້ງ", value: "2009 — 15+ ປີ" },
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-between py-2"
                style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                <span className="text-gray-500 text-sm">{item.label}</span>
                <span className="text-white text-sm font-bold">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl p-6 mb-6"
          style={{ background: "rgba(251,146,60,0.06)", border: "1px solid rgba(251,146,60,0.2)" }}>
          <h2 className="font-black text-xl mb-3 text-orange-400">🏆 ສະຫຼຸບ</h2>
          <p className="text-gray-300 text-sm" style={{ lineHeight: "2" }}>
            Vantage ເໝາະຫຼາຍສໍາລັບ <strong className="text-white">Trader ທີ່ເທຣດ Volume ສູງ</strong> ·
            ຍິ່ງເທຣດຫຼາຍ ຍິ່ງໄດ້ Cashback ຫຼາຍ · $4/Lot ສູງທີ່ສຸດ
          </p>
        </div>

        <a href="https://vigco.co/la-com-inv/wmd8Y80S" target="_blank"
          className="block text-center py-5 rounded-2xl font-black text-black text-xl transition-all hover:scale-[1.02] mb-3"
          style={{ background: "linear-gradient(135deg, #facc15, #f97316)", boxShadow: "0 16px 60px rgba(250,204,21,0.25)" }}>
          🚀 ສະໝັກເປີດບັນຊີ Vantage ຟຣີ
        </a>
        <p className="text-center text-gray-600 text-xs">⚠️ Forex ມີຄວາມສ່ຽງສູງ · ລົງທຶນສະເພາະເງິນທີ່ຍອມສູນໄດ້</p>
      </div>
    </main>
  );
}