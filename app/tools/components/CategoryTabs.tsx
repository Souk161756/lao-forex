"use client";

export default function CategoryTabs() {
  const tabs = [
    "ທັງໝົດ",
    "🧮 Calculator",
    "🥇 ທອງຄຳ",
    "💱 Forex",
    "📈 ຕະຫຼາດ",
    "📰 ຂ່າວ",
  ];

  return (
    <section className="my-8">

      <div className="flex flex-wrap gap-4">

        {tabs.map((tab, index) => (

          <button
            key={tab}
            className={`
              rounded-2xl
              px-6
              py-3
              text-[15px]
              font-semibold
              transition-all
              duration-300
              ${
                index === 0
                  ? "bg-gradient-to-r from-yellow-400 to-yellow-500 text-black shadow-lg shadow-yellow-500/20"
                  : "border border-white/10 bg-[#111827] text-gray-300 hover:border-yellow-400 hover:text-white hover:-translate-y-0.5"
              }
            `}
          >
            {tab}
          </button>

        ))}

      </div>

    </section>
  );
}