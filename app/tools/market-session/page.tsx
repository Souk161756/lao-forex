"use client";

import ToolLayout from "../components/ToolLayout";

const sessions = [
  {
    name: "ຊິດນີ (Sydney)",
    time: "05:00 - 14:00",
    status: "🟢 ເປີດຕະຫຼາດ",
    color: "text-green-400",
  },
  {
    name: "ໂຕກຽວ (Tokyo)",
    time: "07:00 - 16:00",
    status: "🟢 ເປີດຕະຫຼາດ",
    color: "text-green-400",
  },
  {
    name: "ລອນດອນ (London)",
    time: "14:00 - 23:00",
    status: "🔴 ປິດຕະຫຼາດ",
    color: "text-red-400",
  },
  {
    name: "ນິວຢອກ (New York)",
    time: "19:00 - 04:00",
    status: "🔴 ປິດຕະຫຼາດ",
    color: "text-red-400",
  },
];

export default function MarketSessionPage() {
  return (
    <ToolLayout
      title="🕒 ເວລາເປີດ-ປິດ ຕະຫຼາດ Forex"
      description="ກວດເບິ່ງເວລາເປີດ ແລະ ປິດຂອງຕະຫຼາດ Forex ທົ່ວໂລກ"
    >
      <div className="grid gap-6 md:grid-cols-2">

        {sessions.map((item) => (

          <div
            key={item.name}
            className="rounded-3xl border border-white/10 bg-[#151c2c] p-6"
          >

            <h2 className="text-2xl font-bold text-white">
              {item.name}
            </h2>

            <p className="mt-4 text-gray-400">
              ເວລາເທຣດ
            </p>

            <p className="text-yellow-400 text-xl font-bold">
              {item.time}
            </p>

            <div className={`mt-6 text-lg font-bold ${item.color}`}>
              {item.status}
            </div>

          </div>

        ))}

      </div>

      <div className="mt-8 rounded-3xl border border-blue-500/20 bg-blue-500/5 p-6">

        <h2 className="text-xl font-bold text-blue-400">
          ຂໍ້ແນະນຳ
        </h2>

        <ul className="mt-4 space-y-3 text-gray-300 leading-8">

          <li>• ຊ່ວງ London + New York ມີປະລິມານການເທຣດສູງສຸດ</li>

          <li>• ຊ່ວງ Tokyo ເໝາະກັບຄູ່ເງິນ JPY</li>

          <li>• ຊ່ວງ Sydney ຕະຫຼາດຈະເຄື່ອນໄຫວບໍ່ຫຼາຍ</li>

          <li>• ການເທຣດໃນຊ່ວງຕະຫຼາດຊ້ອນກັນ (Overlap) ມັກມີ Volatility ສູງ</li>

        </ul>

      </div>

    </ToolLayout>
  );
}