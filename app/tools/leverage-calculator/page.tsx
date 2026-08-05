"use client";

import { useState } from "react";
import ToolLayout from "../components/ToolLayout";
import NumberInput from "../components/NumberInput";
import SelectBox from "../components/SelectBox";
import ResultCard from "../components/ResultCard";

export default function LeverageCalculatorPage() {
  const [balance, setBalance] = useState(1000);
  const [lot, setLot] = useState(1);
  const [price, setPrice] = useState(1.1700);
  const [leverage, setLeverage] = useState("100");

  const contractSize = 100000;

  const positionValue = lot * contractSize * price;

  const requiredMargin =
    positionValue / Number(leverage);

  const marginLevel =
    requiredMargin > 0
      ? (balance / requiredMargin) * 100
      : 0;

  return (
    <ToolLayout
      title="⚡ Leverage Calculator"
      description="ຄຳນວນ Leverage, Margin ແລະ Position Value"
    >
      <div className="grid gap-6 md:grid-cols-2">

        <NumberInput
          label="Account Balance"
          value={balance}
          onChange={setBalance}
          suffix="USD"
        />

        <NumberInput
          label="Lot Size"
          value={lot}
          onChange={setLot}
          suffix="Lot"
        />

        <NumberInput
          label="Current Price"
          value={price}
          onChange={setPrice}
          step={0.0001}
        />

        <SelectBox
          label="Leverage"
          value={leverage}
          onChange={setLeverage}
          options={[
            "50",
            "100",
            "200",
            "500",
            "1000",
            "2000",
          ]}
        />

      </div>

      <ResultCard
        title="Required Margin"
        value={`$${requiredMargin.toFixed(2)}`}
        subtitle={`Leverage 1:${leverage}`}
      />

      <div className="mt-8 grid gap-4 md:grid-cols-3">

        <div className="rounded-2xl border border-white/10 bg-[#1b2130] p-5">

          <div className="text-gray-400">
            Position Value
          </div>

          <div className="mt-2 text-2xl font-bold text-green-400">
            ${positionValue.toFixed(2)}
          </div>

        </div>

        <div className="rounded-2xl border border-white/10 bg-[#1b2130] p-5">

          <div className="text-gray-400">
            Required Margin
          </div>

          <div className="mt-2 text-2xl font-bold text-yellow-400">
            ${requiredMargin.toFixed(2)}
          </div>

        </div>

        <div className="rounded-2xl border border-white/10 bg-[#1b2130] p-5">

          <div className="text-gray-400">
            Margin Level
          </div>

          <div className="mt-2 text-2xl font-bold text-blue-400">
            {marginLevel.toFixed(2)}%
          </div>

        </div>

      </div>

      <div className="mt-8 rounded-2xl border border-blue-500/20 bg-blue-500/5 p-6">

        <h3 className="font-bold text-blue-400">
          📘 Leverage Formula
        </h3>

        <p className="mt-3 text-gray-300 leading-8">
          Required Margin = Position Value ÷ Leverage
        </p>

        <p className="mt-2 text-gray-300 leading-8">
          Margin Level = Account Balance ÷ Margin × 100
        </p>

      </div>

      <div className="mt-6 rounded-2xl border border-yellow-500/20 bg-yellow-500/5 p-6">

        <h3 className="font-bold text-yellow-400">
          💡 Trading Tip
        </h3>

        <p className="mt-3 text-gray-300 leading-8">
          ການໃຊ້ Leverage ສູງຊ່ວຍໃຫ້ໃຊ້ Margin ໜ້ອຍລົງ
          ແຕ່ຄວາມສ່ຽງກໍ່ສູງຂຶ້ນ.
          ຄວນໃຊ້ Risk Management ຄວບຄູ່ກັນສະເໝີ.
        </p>

      </div>

    </ToolLayout>
  );
}