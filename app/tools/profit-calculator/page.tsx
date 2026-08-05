"use client";

import { useState } from "react";
import ToolLayout from "../components/ToolLayout";
import NumberInput from "../components/NumberInput";
import SelectBox from "../components/SelectBox";
import ResultCard from "../components/ResultCard";

export default function ProfitCalculatorPage() {
  const [pair, setPair] = useState("EUR/USD");
  const [lot, setLot] = useState(1);
  const [entry, setEntry] = useState(1.1700);
  const [exit, setExit] = useState(1.1750);

  const pipValue = (() => {
    switch (pair) {
      case "EUR/USD":
      case "GBP/USD":
      case "AUD/USD":
      case "NZD/USD":
        return 10;

      case "USD/JPY":
        return 9.1;

      case "USD/CAD":
        return 7.5;

      case "USD/CHF":
        return 10.3;

      case "XAU/USD":
        return 1;

      case "BTC/USD":
        return 0.1;

      default:
        return 10;
    }
  })();

  const pipMove =
    pair === "USD/JPY"
      ? (exit - entry) * 100
      : (exit - entry) * 10000;

  const profit = pipMove * pipValue * lot;

  return (
    <ToolLayout
      title="💵 Profit Calculator"
      description="ຄຳນວນກຳໄລ ຫຼື ຂາດທຶນ ຈາກການເທຣດ"
    >
      <div className="grid gap-6 md:grid-cols-2">

        <SelectBox
          label="Currency Pair"
          value={pair}
          onChange={setPair}
          options={[
            "EUR/USD",
            "GBP/USD",
            "AUD/USD",
            "NZD/USD",
            "USD/JPY",
            "USD/CAD",
            "USD/CHF",
            "XAU/USD",
            "BTC/USD",
          ]}
        />

        <NumberInput
          label="Lot Size"
          value={lot}
          onChange={setLot}
          suffix="Lot"
        />

        <NumberInput
          label="Entry Price"
          value={entry}
          onChange={setEntry}
          step={0.0001}
        />

        <NumberInput
          label="Exit Price"
          value={exit}
          onChange={setExit}
          step={0.0001}
        />

      </div>

      <ResultCard
        title="Estimated Profit"
        value={`$${profit.toFixed(2)}`}
        subtitle={`${pipMove.toFixed(1)} Pips`}
        color={profit >= 0 ? "#22c55e" : "#ef4444"}
      />

      <div className="mt-8 grid gap-4 md:grid-cols-3">

        <div className="rounded-2xl border border-white/10 bg-[#1b2130] p-5">

          <div className="text-gray-400">
            Pip Move
          </div>

          <div className="mt-2 text-2xl font-bold text-yellow-400">
            {pipMove.toFixed(1)}
          </div>

        </div>

        <div className="rounded-2xl border border-white/10 bg-[#1b2130] p-5">

          <div className="text-gray-400">
            Pip Value
          </div>

          <div className="mt-2 text-2xl font-bold text-green-400">
            ${pipValue}
          </div>

        </div>

        <div className="rounded-2xl border border-white/10 bg-[#1b2130] p-5">

          <div className="text-gray-400">
            Lot Size
          </div>

          <div className="mt-2 text-2xl font-bold text-white">
            {lot}
          </div>

        </div>

      </div>

      <div className="mt-8 rounded-2xl border border-green-500/20 bg-green-500/5 p-6">

        <h3 className="font-bold text-green-400">
          📘 Profit Formula
        </h3>

        <p className="mt-3 text-gray-300 leading-8">
          Profit = Pip Movement × Pip Value × Lot Size
        </p>

      </div>

    </ToolLayout>
  );
}