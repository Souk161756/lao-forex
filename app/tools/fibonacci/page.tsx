"use client";

import { useState } from "react";
import ToolLayout from "../components/ToolLayout";
import NumberInput from "../components/NumberInput";

export default function FibonacciPage() {
  const [high, setHigh] = useState(1.2000);
  const [low, setLow] = useState(1.1000);

  const diff = high - low;

  const fib236 = high - diff * 0.236;
  const fib382 = high - diff * 0.382;
  const fib500 = high - diff * 0.5;
  const fib618 = high - diff * 0.618;
  const fib786 = high - diff * 0.786;

  return (
    <ToolLayout
      title="🌀 Fibonacci Calculator"
      description="ຄຳນວນ Fibonacci Retracement ສຳລັບຫາຈຸດເຂົ້າ ແລະ ຈຸດກັບຕົວຂອງລາຄາ"
    >
      <div className="grid md:grid-cols-2 gap-6">

        <NumberInput
          label="High Price"
          value={high}
          onChange={setHigh}
          step={0.0001}
        />

        <NumberInput
          label="Low Price"
          value={low}
          onChange={setLow}
          step={0.0001}
        />

      </div>

      <div className="mt-10 grid gap-4">

        <div className="rounded-2xl border border-white/10 bg-[#1b2130] p-5 flex justify-between">
          <span className="text-gray-300">0%</span>
          <span className="text-white font-bold">{high.toFixed(5)}</span>
        </div>

        <div className="rounded-2xl border border-green-500/20 bg-[#1b2130] p-5 flex justify-between">
          <span className="text-green-400">23.6%</span>
          <span className="text-green-400 font-bold">{fib236.toFixed(5)}</span>
        </div>

        <div className="rounded-2xl border border-blue-500/20 bg-[#1b2130] p-5 flex justify-between">
          <span className="text-blue-400">38.2%</span>
          <span className="text-blue-400 font-bold">{fib382.toFixed(5)}</span>
        </div>

        <div className="rounded-2xl border border-yellow-500/20 bg-[#1b2130] p-5 flex justify-between">
          <span className="text-yellow-400">50%</span>
          <span className="text-yellow-400 font-bold">{fib500.toFixed(5)}</span>
        </div>

        <div className="rounded-2xl border border-red-500/20 bg-[#1b2130] p-5 flex justify-between">
          <span className="text-red-400">61.8%</span>
          <span className="text-red-400 font-bold">{fib618.toFixed(5)}</span>
        </div>

        <div className="rounded-2xl border border-purple-500/20 bg-[#1b2130] p-5 flex justify-between">
          <span className="text-purple-400">78.6%</span>
          <span className="text-purple-400 font-bold">{fib786.toFixed(5)}</span>
        </div>

        <div className="rounded-2xl border border-white/10 bg-[#1b2130] p-5 flex justify-between">
          <span className="text-gray-300">100%</span>
          <span className="text-white font-bold">{low.toFixed(5)}</span>
        </div>

      </div>

      <div className="mt-8 rounded-2xl border border-blue-500/20 bg-blue-500/5 p-6">

        <h3 className="font-bold text-blue-400">
          📘 Fibonacci Levels
        </h3>

        <ul className="mt-4 space-y-2 text-gray-300">

          <li>23.6% — Retracement ອ່ອນ</li>

          <li>38.2% — ເຂົ້າເທຣດຍອດນິຍົມ</li>

          <li>50% — ຈຸດກາງ Trend</li>

          <li>61.8% — Golden Ratio</li>

          <li>78.6% — Retracement ເລິກ</li>

        </ul>

      </div>

      <div className="mt-6 rounded-2xl border border-yellow-500/20 bg-yellow-500/5 p-6">

        <h3 className="font-bold text-yellow-400">
          💡 Trading Tip
        </h3>

        <p className="mt-3 text-gray-300 leading-8">
          ນັກເທຣດສ່ວນໃຫຍ່ຈະໃຊ້ລະດັບ 38.2%, 50% ແລະ 61.8%
          ເພື່ອຊອກຫາຈຸດ Buy ຫຼື Sell ຕາມແນວໂນ້ມ.
          ຄວນໃຊ້ຄູ່ກັບ Price Action ແລະ Trend ເພື່ອເພີ່ມຄວາມແມ່ນຍຳ.
        </p>

      </div>

    </ToolLayout>
  );
}