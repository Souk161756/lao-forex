"use client";

import ToolLayout from "../components/ToolLayout";

const news = [
  {
    time: "08:30",
    country: "🇺🇸 USD",
    title: "ດັດຊະນີ CPI",
    impact: "ສູງ",
    color: "bg-red-500",
  },
  {
    time: "10:00",
    country: "🇪🇺 EUR",
    title: "ECB ຖະແຫຼງຂ່າວ",
    impact: "ສູງ",
    color: "bg-red-500",
  },
  {
    time: "13:30",
    country: "🇬🇧 GBP",
    title: "GDP",
    impact: "ກາງ",
    color: "bg-yellow-500",
  },
  {
    time: "15:00",
    country: "🇯🇵 JPY",
    title: "BOJ Statement",
    impact: "ຕໍ່າ",
    color: "bg-green-500",
  },
];

export default function EconomicCalendarPage() {
  return (
    <ToolLayout
      title="📰 ປະຕິທິນຂ່າວເສດຖະກິດ"
      description="ຕິດຕາມຂ່າວເສດຖະກິດທີ່ມີຜົນຕໍ່ຕະຫຼາດ Forex"
    >
      <div className="space-y-5">

        {news.map((item, index) => (

          <div
            key={index}
            className="rounded-3xl border border-white/10 bg-[#161d2d] p-6"
          >

            <div className="flex items-center justify-between">

              <div>

                <div className="text-yellow-400 font-bold text-lg">
                  {item.time}
                </div>

                <div className="mt-2 text-white text-xl font-bold">
                  {item.country}
                </div>

                <div className="mt-2 text-gray-300">
                  {item.title}
                </div>

              </div>

              <div
                className={`px-5 py-2 rounded-full text-white font-bold ${item.color}`}
              >
                {item.impact}
              </div>

            </div>

          </div>

        ))}

      </div>

      <div className="mt-10 rounded-3xl border border-blue-500/20 bg-blue-500/5 p-6">

        <h2 className="text-xl font-bold text-blue-400">
          ຄວາມໝາຍຂອງລະດັບຂ່າວ
        </h2>

        <ul className="mt-5 space-y-3 text-gray-300 leading-8">

          <li>🔴 ສູງ – ລາຄາອາດເຄື່ອນໄຫວແຮງ</li>

          <li>🟡 ກາງ – ມີຜົນກະທົບປານກາງ</li>

          <li>🟢 ຕໍ່າ – ຜົນກະທົບນ້ອຍ</li>

        </ul>

      </div>

      <div className="mt-8 rounded-3xl border border-yellow-500/20 bg-yellow-500/5 p-6">

        <h2 className="text-xl font-bold text-yellow-400">
          ຄຳແນະນຳ
        </h2>

        <p className="mt-4 leading-8 text-gray-300">
          ກ່ອນເຂົ້າເທຣດ ຄວນກວດເບິ່ງປະຕິທິນຂ່າວກ່ອນທຸກຄັ້ງ.
          ຖ້າມີຂ່າວລະດັບສູງ ລາຄາອາດຜັນຜວນຫຼາຍ
          ແລະ Spread ອາດກວ້າງຂຶ້ນ.
        </p>

      </div>

    </ToolLayout>
  );
}