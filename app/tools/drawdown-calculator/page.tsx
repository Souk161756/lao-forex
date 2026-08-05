"use client";

import { useState } from "react";
import ToolLayout from "../components/ToolLayout";
import NumberInput from "../components/NumberInput";
import ResultCard from "../components/ResultCard";

export default function DrawdownCalculatorPage() {
  const [startBalance, setStartBalance] = useState(10000);
  const [currentBalance, setCurrentBalance] = useState(8500);

  const loss = startBalance - currentBalance;

  const drawdown =
    startBalance > 0
      ? (loss / startBalance) * 100
      : 0;

  const needGain =
    currentBalance > 0
      ? ((startBalance - currentBalance) /
          currentBalance) *
        100
      : 0;

  return (
    <ToolLayout
      title="📉 Drawdown Calculator"
      description="ຄຳນວນ Drawdown ແລະ % ກຳໄລທີ່ຕ້ອງໄດ້ເພື່ອກັບຄືນທຶນ"
    >
      <div className="grid gap-6 md:grid-cols-2">

        <NumberInput
          label="Starting Balance"
          value={startBalance}
          onChange={setStartBalance}
          suffix="USD"
        />

        <NumberInput
          label="Current Balance"
          value={currentBalance}
          onChange={setCurrentBalance}
          suffix="USD"
        />

      </div>

      <ResultCard
        title="Drawdown"
        value={`${drawdown.toFixed(2)} %`}
        subtitle={`Loss : $${loss.toFixed(2)}`}
        color="#ef4444"
      />

      <div className="mt-8 grid gap-4 md:grid-cols-3">

        <div className="rounded-2xl border border-white/10 bg-[#1b2130] p-5">

          <div className="text-gray-400">
            Starting Balance
          </div>

          <div className="mt-2 text-2xl font-bold text-white">
            ${startBalance.toFixed(2)}
          </div>

        </div>

        <div className="rounded-2xl border border-white/10 bg-[#1b2130] p-5">

          <div className="text-gray-400">
            Current Balance
          </div>

          <div className="mt-2 text-2xl font-bold text-yellow-400">
            ${currentBalance.toFixed(2)}
          </div>

        </div>

        <div className="rounded-2xl border border-white/10 bg-[#1b2130] p-5">

          <div className="text-gray-400">
            Need To Recover
          </div>

          <div className="mt-2 text-2xl font-bold text-green-400">
            {needGain.toFixed(2)}%
          </div>

        </div>

      </div>

      <div className="mt-8 rounded-2xl border border-red-500/20 bg-red-500/5 p-6">

        <h3 className="font-bold text-red-400">
          📘 Drawdown Formula
        </h3>

        <p className="mt-3 text-gray-300 leading-8">
          Drawdown =
          (Starting Balance − Current Balance)
          ÷ Starting Balance × 100
        </p>

      </div>

      <div className="mt-6 rounded-2xl border border-yellow-500/20 bg-yellow-500/5 p-6">

        <h3 className="font-bold text-yellow-400">
          💡 Trading Tip
        </h3>

        <p className="mt-3 text-gray-300 leading-8">
          ຖ້າ Drawdown ເກີນ 20% ຄວນຫຼຸດ Lot Size ແລະປັບແຜນບໍລິຫານຄວາມສ່ຽງ.
          Drawdown ຍິ່ງຫຼາຍ ຍິ່ງຕ້ອງໃຊ້ % ກຳໄລສູງເພື່ອຟື້ນກັບມາ.
        </p>

      </div>

    </ToolLayout>
  );
}