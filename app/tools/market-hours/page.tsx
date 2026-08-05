"use client";

import { useEffect, useState } from "react";
import ToolLayout from "../components/ToolLayout";

export default function MarketHoursPage() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hour = time.getUTCHours();

  const sessions = [
    {
      name: "🇦🇺 Sydney",
      open: 21,
      close: 6,
    },
    {
      name: "🇯🇵 Tokyo",
      open: 23,
      close: 8,
    },
    {
      name: "🇬🇧 London",
      open: 7,
      close: 16,
    },
    {
      name: "🇺🇸 New York",
      open: 12,
      close: 21,
    },
  ];

  function isOpen(open: number, close: number) {
    if (open > close) {
      return hour >= open || hour < close;
    }

    return hour >= open && hour < close;
  }

  return (
    <ToolLayout
      title="🕒 ເວລາເປີດ-ປິດ ຕະຫຼາດ Forex"
      description="ສະແດງສະຖານະຂອງຕະຫຼາດ Forex ແບບ Real-Time"
    >
      <div className="rounded-3xl bg-[#161d2d] border border-white/10 p-8 text-center">

        <div className="text-gray-400">
          ເວລາ UTC ປັດຈຸບັນ
        </div>

        <div className="mt-4 text-5xl font-black text-yellow-400">
          {time.toUTCString().split(" ")[4]}
        </div>

      </div>

      <div className="grid md:grid-cols-2 gap-6 mt-8">

        {sessions.map((item) => {

          const open = isOpen(item.open, item.close);

          return (

            <div
              key={item.name}
              className="rounded-3xl border border-white/10 bg-[#161d2d] p-6"
            >

              <div className="text-2xl font-bold text-white">
                {item.name}
              </div>

              <div className="mt-4 text-gray-400">
                ເວລາ
              </div>

              <div className="text-yellow-400 font-bold text-xl">
                {item.open}:00 - {item.close}:00 UTC
              </div>

              <div
                className={`mt-6 inline-flex rounded-full px-5 py-2 font-bold ${
                  open
                    ? "bg-green-500 text-white"
                    : "bg-red-500 text-white"
                }`}
              >
                {open ? "🟢 ເປີດຕະຫຼາດ" : "🔴 ປິດຕະຫຼາດ"}
              </div>

            </div>

          );

        })}

      </div>

      <div className="mt-10 rounded-3xl bg-blue-500/5 border border-blue-500/20 p-6">

        <h2 className="text-xl font-bold text-blue-400">
          ຄຳແນະນຳ
        </h2>

        <ul className="mt-5 space-y-3 text-gray-300 leading-8">

          <li>• ຊ່ວງ London + New York ມີປະລິມານການເທຣດສູງສຸດ</li>

          <li>• ຄູ່ເງິນ EUR/USD ແລະ GBP/USD ມັກເຄື່ອນໄຫວແຮງໃນຊ່ວງນີ້</li>

          <li>• ກ່ອນຂ່າວໃຫຍ່ ຄວນກວດເບິ່ງ Market Hours ຄວບຄູ່ກັບ Economic Calendar</li>

        </ul>

      </div>

    </ToolLayout>
  );
}