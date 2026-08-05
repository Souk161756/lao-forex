"use client";

import { useState } from "react";
import ToolLayout from "../components/ToolLayout";

export default function TradingJournalPage() {

  const [pair, setPair] = useState("");
  const [type, setType] = useState("BUY");
  const [entry, setEntry] = useState("");
  const [exit, setExit] = useState("");
  const [profit, setProfit] = useState("");
  const [note, setNote] = useState("");

  function saveTrade() {

    alert("ບັນທຶກສຳເລັດ (Version ຕໍ່ໄປຈະບັນທຶກລົງ Database)");

  }

  return (

    <ToolLayout
      title="📒 ບັນທຶກການເທຣດ"
      description="ບັນທຶກປະຫວັດການເຂົ້າເທຣດ ເພື່ອນຳໄປວິເຄາະຜົນການເທຣດ"
    >

      <div className="grid md:grid-cols-2 gap-6">

        <div>

          <label className="text-gray-300">
            ຄູ່ເງິນ
          </label>

          <input
            value={pair}
            onChange={(e)=>setPair(e.target.value)}
            className="mt-2 w-full rounded-xl bg-[#161d2d] border border-white/10 p-3 text-white"
            placeholder="EUR/USD"
          />

        </div>

        <div>

          <label className="text-gray-300">
            ປະເພດ
          </label>

          <select
            value={type}
            onChange={(e)=>setType(e.target.value)}
            className="mt-2 w-full rounded-xl bg-[#161d2d] border border-white/10 p-3 text-white"
          >

            <option>BUY</option>

            <option>SELL</option>

          </select>

        </div>

        <div>

          <label className="text-gray-300">
            ລາຄາເຂົ້າ
          </label>

          <input
            value={entry}
            onChange={(e)=>setEntry(e.target.value)}
            className="mt-2 w-full rounded-xl bg-[#161d2d] border border-white/10 p-3 text-white"
          />

        </div>

        <div>

          <label className="text-gray-300">
            ລາຄາອອກ
          </label>

          <input
            value={exit}
            onChange={(e)=>setExit(e.target.value)}
            className="mt-2 w-full rounded-xl bg-[#161d2d] border border-white/10 p-3 text-white"
          />

        </div>

        <div>

          <label className="text-gray-300">
            ກຳໄລ / ຂາດທຶນ (USD)
          </label>

          <input
            value={profit}
            onChange={(e)=>setProfit(e.target.value)}
            className="mt-2 w-full rounded-xl bg-[#161d2d] border border-white/10 p-3 text-white"
          />

        </div>

      </div>

      <div className="mt-6">

        <label className="text-gray-300">
          ໝາຍເຫດ
        </label>

        <textarea

          rows={6}

          value={note}

          onChange={(e)=>setNote(e.target.value)}

          className="mt-2 w-full rounded-xl bg-[#161d2d] border border-white/10 p-4 text-white"

          placeholder="ຂຽນບົດຮຽນທີ່ໄດ້ຈາກການເທຣດ..."

        />

      </div>

      <button

        onClick={saveTrade}

        className="mt-8 rounded-xl bg-yellow-400 text-black font-bold px-8 py-4 hover:bg-yellow-300"

      >

        💾 ບັນທຶກການເທຣດ

      </button>

      <div className="mt-10 rounded-3xl bg-blue-500/5 border border-blue-500/20 p-6">

        <h2 className="text-xl font-bold text-blue-400">
          ເຫດຜົນທີ່ຄວນມີ Trading Journal
        </h2>

        <ul className="mt-5 space-y-3 text-gray-300 leading-8">

          <li>• ຊ່ວຍວິເຄາະຂໍ້ຜິດພາດ</li>

          <li>• ເບິ່ງ Win Rate ຂອງຕົນເອງ</li>

          <li>• ພັດທະນາແຜນການເທຣດ</li>

          <li>• ຄວບຄຸມອາລົມໃນການເທຣດ</li>

        </ul>

      </div>

    </ToolLayout>

  );

}