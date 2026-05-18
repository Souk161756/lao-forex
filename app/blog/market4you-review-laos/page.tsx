export default function Market4youReviewLaos() {
  return (
    <main className="min-h-screen text-white px-5 py-16"
      style={{ background: "#07080f", fontFamily: "'Noto Serif Lao', 'Phetsarath OT', serif" }}>
      <div className="max-w-3xl mx-auto">
        <a href="/blog" className="inline-flex items-center gap-2 text-gray-500 text-sm mb-8 hover:text-yellow-400 transition-colors">← ກັບລາຍການໂບກເກີ້</a>
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold mb-6"
          style={{ background: "rgba(251,146,60,0.08)", border: "1px solid rgba(251,146,60,0.2)", color: "#fb923c" }}>
          🎁 ລີວິວ MARKET4YOU
        </div>
        <div className="flex items-center gap-4 mb-6">
          <img src="/brokers/market4you.png" alt="Market4you" className="w-16 h-16 rounded-2xl object-contain"
            style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }} />
          <div>
            <h1 className="font-black text-3xl">ລີວິວ Market4you 2026</h1>
            <p className="text-gray-400 text-sm">ສໍາລັບຄົນລາວ</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 mb-8">
          {[{ label: "ຝາກຕໍ່າ", value: "$10" }, { label: "Cashback", value: "$3/Lot" }, { label: "Spread", value: "1.5 pip" }, { label: "ຄະແນນ", value: "3.9/5" }].map(s => (
            <div key={s.label} className="rounded-xl p-4 text-center"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
              <div className="text-xs text-gray-500 mb-1">{s.label}</div>
              <div className="font-black text-orange-400">{s.value}</div>
            </div>
          ))}
        </div>
        <div className="rounded-2xl p-6 mb-4" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)" }}>
          <h2 className="font-black text-xl mb-3 text-orange-400">Market4you ດີບໍ?</h2>
          <p className="text-gray-300 text-sm" style={{ lineHeight: "2" }}>Market4you ຝາກຂັ້ນຕໍ່າພຽງ $10 · ເປີດບັນຊີງ່າຍ · ມີ Bonus ສໍາລັບລູກຄ້າໃໝ່</p>
        </div>
        <div className="rounded-2xl p-6 mb-6" style={{ background: "rgba(251,146,60,0.04)", border: "1px solid rgba(251,146,60,0.2)" }}>
          <h2 className="font-black text-xl mb-4 text-orange-400">ຂໍ້ດີ Market4you</h2>
          <ul className="space-y-2 text-gray-300 text-sm" style={{ lineHeight: "2" }}>
            {["ຝາກຂັ້ນຕໍ່າພຽງ $10", "Cashback $3/Lot", "Spread 1.5 pip EURUSD", "Bonus ສໍາລັບລູກຄ້າໃໝ່", "ເປີດບັນຊີງ່າຍ ໄວ"].map(p => (
              <li key={p} className="flex gap-2"><span className="text-orange-400">✅</span>{p}</li>
            ))}
          </ul>
        </div>
        <a href="https://account.markets4you.online/en/user-registration/?affid=bpblvtj" target="_blank"
          className="block text-center py-4 rounded-2xl font-black text-black text-lg transition-all hover:scale-[1.02] mb-3"
          style={{ background: "linear-gradient(135deg, #facc15, #f97316)" }}>
          🚀 ສະໝັກເປີດບັນຊີ Market4you
        </a>
        <p className="text-center text-gray-600 text-xs">⚠️ Forex ມີຄວາມສ່ຽງສູງ · ລົງທຶນສະເພາະເງິນທີ່ຍອມສູນໄດ້</p>
      </div>
    </main>
  );
}