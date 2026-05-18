export default function HowToStartForexLaos() {
  return (
    <main className="bg-black text-white min-h-screen px-6 py-20">
      <div className="max-w-5xl mx-auto">

        {/* BADGE */}
        <div className="bg-blue-400/20 text-blue-400 inline-block px-5 py-2 rounded-full text-sm font-black mb-8">
          📚 ຄູ່ມື FOREX ສໍາລັບຄົນລາວ
        </div>

        {/* TITLE */}
        <h1 className="text-6xl font-black mb-6 leading-tight">
          ວິທີເລີ່ມຕົ້ນ Forex ໃນລາວ
        </h1>

        <p className="text-gray-300 text-xl leading-10 mb-14">
          ຄູ່ມືຄົບຈົບໃນໜ້າດຽວ · ຕັ້ງແຕ່ Forex ແມ່ນຫຍັງ ຈົນເຖິງ ເລີ່ມເທຣດຈິງ ·
          ສໍາລັບຄົນລາວໂດຍສະເພາະ
        </p>

        {/* SECTION 1 */}
        <div className="bg-[#0f172a] border border-blue-400/30 rounded-3xl p-10 mb-8">
          <h2 className="text-4xl font-black mb-6 text-blue-400">
            📖 ບົດທີ 1 — Forex ແມ່ນຫຍັງ?
          </h2>
          <div className="text-gray-300 leading-10 text-lg space-y-4">
            <p>
              Forex ຫຼື Foreign Exchange ແມ່ນຕະຫຼາດແລກປ່ຽນເງິນຕາທີ່ໃຫຍ່ທີ່ສຸດໃນໂລກ
              ມີການຊື້ຂາຍກວ່າ <span className="text-yellow-400 font-black">$7 ຕື້ຕໍ່ວັນ</span>
            </p>
            <p>
              ຕົວຢ່າງ: ເຈົ້າຄິດວ່າ USD ຈະແຂງກວ່າ EUR ກໍ່ຂາຍ EUR/USD ·
              ຖ້າຖືກ ເຈົ້າໄດ້ກໍາໄລ
            </p>
            <p>
              ຕະຫຼາດ Forex ເປີດ <span className="text-yellow-400 font-black">24 ຊົ່ວໂມງ · 5 ວັນຕໍ່ອາທິດ</span> ·
              ເທຣດໄດ້ຈາກທຸກທີ່ທີ່ມີ Internet
            </p>
          </div>
        </div>

        {/* SECTION 2 */}
        <div className="bg-[#0f172a] border border-yellow-400/30 rounded-3xl p-10 mb-8">
          <h2 className="text-4xl font-black mb-6 text-yellow-400">
            💱 ບົດທີ 2 — ຄໍາສັບພື້ນຖານ
          </h2>
          <div className="space-y-5 text-gray-300 text-lg leading-10">
            {[
              { term: "Pip", desc: "ໜ່ວຍການເຄື່ອນໄຫວຂອງລາຄາ · ເຊັ່ນ EURUSD ຂຶ້ນ 0.0001 = 1 Pip" },
              { term: "Lot", desc: "ໜ່ວຍການຊື້ຂາຍ · 1 Lot = 100,000 ໜ່ວຍ · ມືໃໝ່ໃຊ້ 0.01 Lot (Micro)" },
              { term: "Spread", desc: "ສ່ວນຕ່າງລາຄາຊື້-ຂາຍ · Spread ຕໍ່າ = ປະຢັດຄ່າໃຊ້ຈ່າຍ" },
              { term: "Leverage", desc: "ການຍືມເງິນເທຣດ · 1:1000 ໝາຍຄວາມວ່າ $1 ຄວບຄຸມ $1,000" },
              { term: "Stop Loss", desc: "ລະດັບຢຸດຂາດທຶນ · ສໍາຄັນຫຼາຍ ຕ້ອງຕັ້ງທຸກຄັ້ງ" },
              { term: "Take Profit", desc: "ລະດັບທໍາກໍາໄລ · ຕັ້ງໄວ້ໃຫ້ລະບົບປິດ Order ໃຫ້ອັດຕະໂນມັດ" },
              { term: "Margin", desc: "ເງິນຄໍ້າປະກັນ · ຕ້ອງມີໃນ Account ພໍກັບ Leverage ທີ່ໃຊ້" },
            ].map((item) => (
              <div key={item.term} className="flex gap-4 flex-wrap">
                <span className="text-yellow-400 font-black min-w-[120px]">{item.term}</span>
                <span className="flex-1">{item.desc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 3 */}
        <div className="bg-[#0f172a] border border-green-400/30 rounded-3xl p-10 mb-8">
          <h2 className="text-4xl font-black mb-6 text-green-400">
            🏦 ບົດທີ 3 — ເລືອກໂບກເກີ້ແນວໃດ?
          </h2>
          <div className="text-gray-300 text-lg leading-10 space-y-3">
            <p>ໂບກເກີ້ຄືຕົວກາງລະຫວ່າງເຈົ້າກັບຕະຫຼາດ Forex · ຕ້ອງເລືອກຢ່າງລະມັດລະວັງ</p>
            {[
              { icon: "✅", text: "Regulated — ໄດ້ຮັບໃບອະນຸຍາດຈາກ FCA, ASIC, CySEC" },
              { icon: "✅", text: "ຝາກ-ຖອນ BCEL ໄດ້ — ສໍາຄັນຫຼາຍສໍາລັບຄົນລາວ" },
              { icon: "✅", text: "Spread ຕໍ່າ — ຊ່ວຍຫຼຸດຕົ້ນທຶນການເທຣດ" },
              { icon: "✅", text: "Support ພາສາລາວ ຫຼື ໄທ — ສື່ສານງ່າຍ" },
              { icon: "✅", text: "ຖອນໄວ — ບໍ່ຕ້ອງລໍຖ້ານານ" },
              { icon: "❌", text: "ຫຼີກລ້ຽງໂບກເກີ້ທີ່ບໍ່ມີ License · Scam ຫຼາຍ" },
            ].map((item) => (
              <div key={item.text} className="flex gap-3">
                <span>{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 4 */}
        <div className="bg-[#0f172a] border border-purple-400/30 rounded-3xl p-10 mb-8">
          <h2 className="text-4xl font-black mb-8 text-purple-400">
            🚀 ບົດທີ 4 — ຂັ້ນຕອນເລີ່ມຕົ້ນ
          </h2>
          <div className="space-y-8">
            {[
              { step: "01", title: "ເລືອກໂບກເກີ້", desc: "ເລືອກໂບກເກີ້ທີ່ Regulated ແລະ ຮັບ BCEL · ແນະນໍາ XM ຫຼື Exness ສໍາລັບມືໃໝ່" },
              { step: "02", title: "ເປີດບັນຊີ Demo", desc: "ຝຶກເທຣດດ້ວຍເງິນທົດລອງກ່ອນ · ບໍ່ມີຄວາມສ່ຽງ · ຝຶກຈົນໝັ້ນໃຈ ຢ່າງໜ້ອຍ 1 ເດືອນ" },
              { step: "03", title: "ຮຽນພື້ນຖານ", desc: "ຮຽນ Chart, Candlestick, Support & Resistance · ບໍ່ຕ້ອງຮຽນທຸກຢ່າງ ຮຽນທີ່ຈໍາເປັນກ່ອນ" },
              { step: "04", title: "ຝາກເງິນຈິງ", desc: "ຝາກຜ່ານ BCEL ຫຼື ທະນາຄານລາວ · ເລີ່ມດ້ວຍ $30-$50 ກ່ອນ · ຢ່າໃສ່ຫຼາຍໃນທີ" },
              { step: "05", title: "ເທຣດ Lot ນ້ອຍ", desc: "ເລີ່ມດ້ວຍ 0.01 Lot · ຕັ້ງ Stop Loss ທຸກຄັ້ງ · ບໍ່ Oversize ບໍ່ວ່າຈະໝັ້ນໃຈສໍ່າໃດ" },
              { step: "06", title: "ທົບທວນ ແລະ ປັບປຸງ", desc: "ບັນທຶກທຸກ Trade · ຮຽນຈາກຄວາມຜິດພາດ · ປັບ Strategy ຕໍ່ເນື່ອງທຸກເດືອນ" },
            ].map((item) => (
              <div key={item.step} className="flex gap-6 items-start">
                <div className="text-5xl font-black text-yellow-400 min-w-[70px]">{item.step}</div>
                <div>
                  <div className="font-black text-xl mb-2">{item.title}</div>
                  <div className="text-gray-400 leading-8">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 5 */}
        <div className="bg-[#0f172a] border border-red-400/30 rounded-3xl p-10 mb-8">
          <h2 className="text-4xl font-black mb-6 text-red-400">
            ⚠️ ບົດທີ 5 — ຄວາມສ່ຽງທີ່ຕ້ອງຮູ້
          </h2>
          <div className="text-gray-300 text-lg leading-10 space-y-3">
            <p>❌ ຢ່າໃຊ້ Leverage ສູງໂດຍບໍ່ຮູ້ຈັກ — ອາດສູນເສຍທຸກຢ່າງໃນ 1 Trade</p>
            <p>❌ ຢ່າ Oversize — ໃຊ້ Lot ໃຫຍ່ເກີນ Capital</p>
            <p>❌ ຢ່າເທຣດດ້ວຍຄວາມໂລບ — ຕ້ອງ ມີ Plan ຊັດເຈນ</p>
            <p>❌ ຢ່າໃສ່ເງິນທີ່ຕ້ອງການໃຊ້ — ໃສ່ສະເພາະເງິນທີ່ຍອມສູນໄດ້</p>
            <p>✅ ສະເໝີຕັ້ງ Stop Loss · ຄຸ້ມຄອງ Risk ກ່ອນຄິດກໍາໄລ</p>
          </div>
        </div>

        {/* SECTION 6 */}
        <div className="bg-[#0f172a] border border-cyan-400/30 rounded-3xl p-10 mb-12">
          <h2 className="text-4xl font-black mb-6 text-cyan-400">
            💡 ບົດທີ 6 — Tips ສໍາລັບມືໃໝ່
          </h2>
          <div className="text-gray-300 text-lg leading-10 space-y-3">
            <p>🎯 ເລີ່ມດ້ວຍ 1-2 Currency Pair ເທົ່ານັ້ນ · EURUSD ຫຼື XAUUSD</p>
            <p>🎯 ເທຣດຕາມ Trend · "Trend is your friend"</p>
            <p>🎯 ຮຽນ Price Action ກ່ອນ Indicator</p>
            <p>🎯 ຈົດບັນທຶກທຸກ Trade — ກໍາໄລ ແລະ ຂາດທຶນ</p>
            <p>🎯 ໃຊ້ Demo ຢ່າງໜ້ອຍ 1-3 ເດືອນກ່ອນໃຊ້ເງິນຈິງ</p>
            <p>🎯 ຢ່າ Copy Trade ໂດຍບໍ່ຮຽນຮູ້ — ຕ້ອງຮູ້ວ່າ ທໍາໄມ ຈຶ່ງຊື້/ຂາຍ</p>
          </div>
        </div>

        {/* CTA */}
        <a
          href="/#brokers"
          className="block bg-yellow-400 hover:bg-yellow-300 transition text-black text-center py-5 rounded-2xl font-black text-xl mb-4"
        >
          🚀 ເລືອກໂບກເກີ້ທີ່ດີທີ່ສຸດ
        </a>

        <p className="text-center text-gray-600 text-sm mt-4">
          ⚠️ Forex ມີຄວາມສ່ຽງສູງ · ລົງທຶນສະເພາະເງິນທີ່ຍອມສູນໄດ້
        </p>

      </div>
    </main>
  );
}