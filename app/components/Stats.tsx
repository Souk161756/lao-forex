export default function Stats() {
  const stats = [
    {
      num: "6+",
      label: "ໂບກເກີ້ຊັ້ນນໍາ",
      icon: "🏆",
    },
    {
      num: "$4/Lot",
      label: "Cashback ສູງສຸດ",
      icon: "💰",
    },
    {
      num: "24/7",
      label: "Support ພາສາລາວ",
      icon: "🎧",
    },
    {
      num: "100%",
      label: "ລີວິວຟຣີ",
      icon: "✅",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-5 pb-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((item) => (
          <div
            key={item.num}
            className="rounded-2xl p-5 text-center"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            <div className="text-2xl mb-2">
              {item.icon}
            </div>

            <div className="text-2xl font-black text-yellow-400 mb-1">
              {item.num}
            </div>

            <div className="text-xs text-gray-500">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}