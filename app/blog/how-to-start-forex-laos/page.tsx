export default function HowToStartForexLaos() {
  const chapters = [
    {
      title: "ພາກທີ 1: ພື້ນຖານ Forex",
      color: "text-blue-400",
      bg: "rgba(59,130,246,0.08)",
      border: "rgba(59,130,246,0.25)",
      lessons: [
        { num: 1, title: "Forex ແມ່ນຫຍັງ? ຕະຫຼາດເງິນຕາໂລກ", time: "4 ນທ" },
        { num: 2, title: "Pip, Lot, Spread ແມ່ນຫຍັງ? ຄໍາສັບທີ່ Trader ຕ້ອງຮູ້", time: "4 ນທ" },
        { num: 3, title: "Leverage ແມ່ນຫຍັງ? ໃຊ້ແນວໃດໃຫ້ປອດໄພ", time: "4 ນທ" },
        { num: 4, title: "Timeframe ໃດດີ? M5, H1, D1 ຕ່າງກັນແນວໃດ", time: "4 ນທ" },
        { num: 5, title: "ໂບກເກີ້ Forex ແມ່ນຫຍັງ? ເລືອກແນວໃດ", time: "5 ນທ" },
      ],
    },
    {
      title: "ພາກທີ 2: ການວິເຄາະຕະຫຼາດ",
      color: "text-yellow-400",
      bg: "rgba(250,204,21,0.08)",
      border: "rgba(250,204,21,0.25)",
      lessons: [
        { num: 6, title: "Candlestick ແມ່ນຫຍັງ? ອ່ານກຣາຟເບື້ອງຕົ້ນ", time: "5 ນທ" },
        { num: 7, title: "Support & Resistance ຄືຫຍັງ? ໃຊ້ແນວໃດ", time: "5 ນທ" },
        { num: 8, title: "Trend ແມ່ນຫຍັງ? ເທຣດຕາມ Trend ໄດ້ກໍາໄລກວ່າ", time: "5 ນທ" },
        { num: 9, title: "Market Structure: Higher High, Lower Low ອ່ານ Trend ຢ່າງມີອາຊີບ", time: "5 ນທ" },
        { num: 10, title: "Indicator ທີ່ຄວນຮູ້: RSI, MACD, MA", time: "5 ນທ" },
      ],
    },
    {
      title: "ພາກທີ 3: ການຄຸ້ມຄອງເງິນ",
      color: "text-green-400",
      bg: "rgba(74,222,128,0.08)",
      border: "rgba(74,222,128,0.25)",
      lessons: [
        { num: 11, title: "Risk Management ແມ່ນຫຍັງ? ສໍາຄັນສໍ່າໃດ", time: "5 ນທ" },
        { num: 12, title: "Stop Loss & Take Profit ຕັ້ງຢ່າງຖືກຕ້ອງ", time: "5 ນທ" },
        { num: 13, title: "Money Management Plan: ວາງແຜນທຶນ Forex ຢ່າງມີອາຊີບ", time: "5 ນທ" },
        { num: 14, title: "Drawdown ແມ່ນຫຍັງ? ຈະຟື້ນຕົວຈາກ Drawdown ໄດ້ແນວໃດ", time: "5 ນທ" },
        { num: 15, title: "Position Sizing: ໃຊ້ Lot ຂະໜາດໃດໃຫ້ເໝາະ", time: "4 ນທ" },
      ],
    },
    {
      title: "ພາກທີ 4: ເລີ່ມເທຣດຈິງ",
      color: "text-orange-400",
      bg: "rgba(251,146,60,0.08)",
      border: "rgba(251,146,60,0.25)",
      lessons: [
        { num: 16, title: "ເລືອກໂບກເກີ້ ແລະ ເປີດບັນຊີ Demo ຄັ້ງທຳອິດ", time: "4 ນທ" },
        { num: 17, title: "ຝາກເງິນ BCEL ເຂົ້າ Forex ໄດ້ແນວໃດ?", time: "4 ນທ" },
        { num: 18, title: "ວິທີເທຣດ EURUSD ຄັ້ງທຳອິດ ທີ່ຄວນຮູ້", time: "5 ນທ" },
        { num: 19, title: "Backtesting ແມ່ນຫຍັງ? ທົດສອບ Strategy ກ່ອນໃຊ້ຈິງ", time: "5 ນທ" },
        { num: 20, title: "Trading Journal: ຈົດບັນທຶກ Trade ເພື່ອປັບປຸງຕົວເອງ", time: "4 ນທ" },
      ],
    },
  ];

  return (
    <main
      className="min-h-screen text-white px-5 py-16"
      style={{
        background: "#07080f",
        fontFamily: "'Noto Serif Lao', 'Phetsarath OT', serif",
      }}
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
          📚 ຄູ່ມື FOREX ສໍາລັບຄົນລາວ
        </div>

        {/* TITLE */}
        <h1 className="font-black leading-tight mb-4" style={{ fontSize: "clamp(2rem, 6vw, 3rem)" }}>
          ວິທີເລີ່ມຕົ້ນ Forex ໃນລາວ
        </h1>
        <p className="text-gray-400 text-base mb-10" style={{ lineHeight: "2" }}>
          ຄູ່ມືຄົບ 4 ພາກ 20 ບົດ · ຕັ້ງແຕ່ Forex ແມ່ນຫຍັງ ຈົນເຖິງ ເລີ່ມເທຣດຈິງ · ສໍາລັບຄົນລາວໂດຍສະເພາະ
        </p>

        {/* STATS */}
        <div className="grid grid-cols-3 gap-3 mb-10">
          {[
            { num: "4", label: "ພາກ" },
            { num: "20", label: "ບົດ" },
            { num: "100%", label: "ຟຣີ" },
          ].map((s) => (
            <div key={s.num} className="rounded-xl p-4 text-center"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
              <div className="text-2xl font-black text-yellow-400">{s.num}</div>
              <div className="text-xs text-gray-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        {/* CHAPTERS */}
        <div className="space-y-8">
          {chapters.map((chapter) => (
            <div key={chapter.title}>
              {/* Chapter Header */}
              <div
                className="flex items-center justify-between px-5 py-4 rounded-2xl mb-3"
                style={{ background: chapter.bg, border: `1px solid ${chapter.border}` }}
              >
                <span className={`font-black text-base ${chapter.color}`}>{chapter.title}</span>
                <span className="text-gray-500 text-sm">{chapter.lessons.length} ບົດ</span>
              </div>

              {/* Lessons */}
              <div className="space-y-2">
                {chapter.lessons.map((lesson) => (
                  <div
                    key={lesson.num}
                    className="flex items-center gap-4 px-5 py-4 rounded-xl transition-all hover:bg-white/5 cursor-pointer"
                    style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
                  >
                    {/* Number */}
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center font-black text-sm flex-shrink-0 text-gray-400"
                      style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)" }}
                    >
                      {lesson.num}
                    </div>

                    {/* Title */}
                    <div className="flex-1 text-sm font-bold leading-snug text-gray-200">
                      {lesson.title}
                    </div>

                    {/* Time + Arrow */}
                    <div className="flex items-center gap-1.5 text-gray-500 text-xs flex-shrink-0">
                      <span>🕐</span>
                      <span>{lesson.time}</span>
                      <span className="text-gray-600 ml-1 text-base">›</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 space-y-3">
          <a
            href="/#brokers"
            className="block text-center py-4 rounded-2xl font-black text-black text-lg transition-all hover:scale-[1.02]"
            style={{ background: "linear-gradient(135deg, #facc15, #f97316)", boxShadow: "0 12px 40px rgba(250,204,21,0.2)" }}
          >
            🚀 ເລືອກໂບກເກີ້ທີ່ດີທີ່ສຸດ
          </a>
          <p className="text-center text-gray-600 text-xs">
            ⚠️ Forex ມີຄວາມສ່ຽງສູງ · ລົງທຶນສະເພາະເງິນທີ່ຍອມສູນໄດ້
          </p>
        </div>

      </div>
    </main>
  );
}