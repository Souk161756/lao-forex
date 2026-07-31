"use client";

export default function Guide() {
  const guides = [
    {
      name: "🥇 XM",
      desc: "ເໝາະສໍາລັບຜູ້ເລີ່ມຕົ້ນ · Bonus $30 ຟຣີ · Support ດີ · ຝາກ-ຖອນ BCEL ໄດ້",
    },
    {
      name: "🥈 Exness",
      desc: "Leverage 1:2000 · ຖອນໄວ Instant 24/7 · Spread ຕໍ່າ · ເໝາະ Scalping",
    },
    {
      name: "🥉 Vantage",
      desc: "Cashback $4/Lot ສູງສຸດ · ເໝາະ Volume Trader · Regulated ASIC",
    },
    {
      name: "⭐ IUX",
      desc: "Spread 0.9 pip ຕໍ່າ · Leverage 1:3000 · UI ທັນສະໄໝ · ໃຊ້ງານງ່າຍ",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-5 pb-20">
      <div
        className="rounded-[24px] p-8"
        style={{
          background: "rgba(255,255,255,0.02)",
          border: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        <p className="text-yellow-400 text-xs font-bold uppercase tracking-widest mb-1">
          ຄູ່ມື
        </p>

        <h2 className="text-2xl font-black mb-6">
          ໂບກເກີ້ໃດເໝາະກັບໃຜ?
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          {guides.map((guide) => (
            <div
              key={guide.name}
              className="rounded-xl p-5"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <div className="font-black text-yellow-400 mb-2">
                {guide.name}
              </div>

              <p className="text-gray-300 text-sm leading-relaxed">
                {guide.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}