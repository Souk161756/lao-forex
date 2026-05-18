export default function IUXReviewLaos() {
  return (
    <main className="min-h-screen text-white px-5 py-16"
      style={{ background: "#07080f", fontFamily: "'Noto Serif Lao', 'Phetsarath OT', serif" }}>
      <div className="max-w-3xl mx-auto">

        <a href="/reviews" className="inline-flex items-center gap-2 text-gray-500 text-sm mb-8 hover:text-yellow-400 transition-colors">
          ← ກັບລາຍການໂບກເກີ້
        </a>

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold mb-6"
          style={{ background: "rgba(244,114,182,0.08)", border: "1px solid rgba(244,114,182,0.2)", color: "#f472b6" }}>
          💰 ລີວິວ IUX
        </div>

        <div className="rounded-[24px] p-6 mb-6"
          style={{ background: "linear-gradient(135deg, rgba(244,114,182,0.06) 0%, rgba(7,8,15,1) 60%)", border: "1px solid rgba(244,114,182,0.3)" }}>
          <div className="flex items-center gap-4 mb-4">
            <img src="/brokers/iux.png" alt="IUX" className="w-16 h-16 rounded-2xl object-contain"
              style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }} />
            <div>
              <h1 className="font-black text-3xl mb-1">IUX Markets</h1>
              <div className="flex items-center gap-2">
                <span className="text-yellow-400 text-sm">⭐⭐⭐⭐</span>
                <span className="text-gray-400 text-sm">4.2/5 · Trustpilot</span>
              </div>
            </div>
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold"
            style={{ background: "rgba(244,114,182,0.1)", border: "1px solid rgba(244,114,182,0.2)", color: "#f472b6" }}>
            ⭐ Spread ຕໍ່ານ · Leverage 1:3000
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          {[
            { label: "ຝາກຕໍ່າ", value: "$50", icon: "💳" },
            { label: "Leverage", value: "1:3000", icon: "⚡" },
            { label: "Spread", value: "0.9 pip", icon: "📊" },
            { label: "Cashback", value: "$2/Lot", icon: "💰" },
          ].map((s) => (
            <div key={s.label} className="rounded-xl p-4 text-center"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
              <div className="text-lg mb-1">{s.icon}</div>
              <div className="text-xs text-gray-500 mb-1">{s.label}</div>
              <div className="font-black text-pink-400">{s.value}</div>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-3 px-5 py-4 rounded-xl mb-6"
          style={{ background: "rgba(74,222,128,0.06)", border: "1px solid rgba(74,222,128,0.2)" }}>
          <span className="text-green-400 text-xl">✓</span>
          <div>
            <div className="font-bold text-green-400 text-sm">ຝາກ-ຖອນ BCEL ທະນາຄານລາວໄດ້</div>
            <div className="text-gray-500 text-xs mt-0.5">Spread ຕໍ່ານ 0.9 pip · Leverage ສູງ 1:3000</div>
          </div>
        </div>

        <div className="rounded-2xl p-6 mb-4"
          style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)" }}>
          <h2 className="font-black text-xl mb-4 text-pink-400">IUX ດີບໍ?</h2>
          <p className="text-gray-300 text-sm mb-4" style={{ lineHeight: "2" }}>
            IUX ເໝາະສໍາລັບ Trader ທີ່ຕ້ອງການ Spread ຕໍ່າ ແລະ Leverage ສູງ ·
            UI ທັນສະໄໝ ໃຊ້ງານງ່າຍ · ເໝາະ Scalper
          </p>
          <p className="text-gray-300 text-sm" style={{ lineHeight: "2" }}>
            ໂບກເກີ້ ASEAN ທີ່ຮູ້ຈັກຄົນລາວ · Support ທ່ານສາ + ລາວ · ຝາກ BCEL ງ່າຍ
          </p>
        </div>

        <div className="rounded-2xl p-6 mb-4"
          style={{ background: "rgba(244,114,182,0.04)", border: "1px solid rgba(244,114,182,0.15)" }}>
          <h2 className="font-black text-xl mb-4 text-pink-400">✅ ຂໍ້ດີ IUX</h2>
          <ul className="space-y-3">
            {[
              "Spread ຕໍ່ານ 0.9 pip EURUSD",
              "Leverage ສູງສຸດ 1:3000 — ສູງທີ່ສຸດໃນລາຍການ",
              "ຝາກ-ຖອນ BCEL ທະນາຄານລາວໄດ້",
              "UI ທັນສະໄໝ ໃຊ້ງານງ່າຍ",
              "ເປີດບັນຊີໄວ ບໍ່ຕ້ອງໃຊ້ເອກະສານຫຼາຍ",
              "Support ພາສາໄທ + ລາວ",
            ].map((p) => (
              <li key={p} className="flex gap-3 text-gray-300 text-sm" style={{ lineHeight: "1.8" }}>
                <span className="text-pink-400 flex-shrink-0">✅</span><span>{p}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl p-6 mb-4"
          style={{ background: "rgba(239,68,68,0.04)", border: "1px solid rgba(239,68,68,0.15)" }}>
          <h2 className="font-black text-xl mb-4 text-red-400">❌ ຂໍ້ເສຍ IUX</h2>
          <ul className="space-y-3">
            {["Cashback $2/Lot ຕໍ່າກວ່າ Vantage", "ຍັງບໍ່ມີ Regulation ໃຫຍ່ຄື ASIC ຫຼື FCA"].map((p) => (
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
              { label: "ປະເພດ Account", value: "Standard, Pro, Raw" },
              { label: "Currency Pairs", value: "70+ ຄູ່ເງິນ" },
              { label: "ຝາກຕໍ່າ", value: "$50" },
              { label: "ຖອນ", value: "1-3 ວັນທໍາການ" },
              { label: "Platform", value: "MT4, MT5, IUX App" },
              { label: "ກໍ່ຕັ້ງ", value: "2014 — 10+ ປີ" },
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
          style={{ background: "rgba(244,114,182,0.06)", border: "1px solid rgba(244,114,182,0.2)" }}>
          <h2 className="font-black text-xl mb-3 text-pink-400">🏆 ສະຫຼຸບ</h2>
          <p className="text-gray-300 text-sm" style={{ lineHeight: "2" }}>
            IUX ເໝາະສໍາລັບ <strong className="text-white">Scalper ທີ່ຕ້ອງການ Spread ຕໍ່າ ແລະ Leverage ສູງ</strong> ·
            UI ງ່າຍ · ຝາກ BCEL ໄດ້
          </p>
        </div>

        <a href="https://iux.com/en/register?code=EPs5nw6M" target="_blank"
          className="block text-center py-5 rounded-2xl font-black text-black text-xl transition-all hover:scale-[1.02] mb-3"
          style={{ background: "linear-gradient(135deg, #facc15, #f97316)", boxShadow: "0 16px 60px rgba(250,204,21,0.25)" }}>
          🚀 ສະໝັກເປີດບັນຊີ IUX ຟຣີ
        </a>
        <p className="text-center text-gray-600 text-xs">⚠️ Forex ມີຄວາມສ່ຽງສູງ · ລົງທຶນສະເພາະເງິນທີ່ຍອມສູນໄດ້</p>
      </div>
    </main>
  );
}