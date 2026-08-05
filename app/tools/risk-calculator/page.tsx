"use client";

import { useState } from "react";
import ToolLayout from "../components/ToolLayout";
import NumberInput from "../components/NumberInput";
import ResultCard from "../components/ResultCard";

export default function RiskCalculatorPage() {
  const [balance, setBalance] = useState(1000);
  const [riskPercent, setRiskPercent] = useState(2);
  const [entry, setEntry] = useState(1.1750);
  const [stopLoss, setStopLoss] = useState(1.1700);

  const riskAmount = balance * (riskPercent / 100);

  const pips = Math.abs(entry - stopLoss) * 10000;

  return (
    <ToolLayout
      title="⚠️ Risk Calculator"
      description="ຄຳນວນຄວາມສ່ຽງຕໍ່ການເທຣດ"
    >
      <div className="grid gap-6 md:grid-cols-2">

        <NumberInput
          label="Account Balance"
          value={balance}
          onChange={setBalance}
          suffix="USD"
        />

        <NumberInput
          label="Risk (%)"
          value={riskPercent}
          onChange={setRiskPercent}
          suffix="%"
        />

        <NumberInput
          label="Entry Price"
          value={entry}
          onChange={setEntry}
          step={0.0001}
        />

        <NumberInput
          label="Stop Loss"
          value={stopLoss}
          onChange={setStopLoss}
          step={0.0001}
        />

      </div>

      <ResultCard
        title="Risk Amount"
        value={`$${riskAmount.toFixed(2)}`}
        subtitle={`${pips.toFixed(1)} Pips`}
        color="#ef4444"
      />

      <div className="mt-8 grid gap-4 md:grid-cols-3">

        <div className="rounded-2xl border border-white/10 bg-[#1b2130] p-5">

          <div className="text-gray-400">
            Balance
          </div>

          <div className="mt-2 text-2xl font-bold text-white">
            ${balance.toFixed(2)}
          </div>

        </div>

        <div className="rounded-2xl border border-white/10 bg-[#1b2130] p-5">

          <div className="text-gray-400">
            Risk %
          </div>

          <div className="mt-2 text-2xl font-bold text-yellow-400">
            {riskPercent}%
          </div>

        </div>

        <div className="rounded-2xl border border-white/10 bg-[#1b2130] p-5">

          <div className="text-gray-400">
            Stop Loss
          </div>

          <div className="mt-2 text-2xl font-bold text-green-400">
            {pips.toFixed(1)} Pips
          </div>

        </div>

      </div>

      <div className="mt-8 rounded-2xl border border-red-500/20 bg-red-500/5 p-6">

        <h3 className="font-bold text-red-400">
          📘 Risk Formula
        </h3>

        <p className="mt-3 text-gray-300 leading-8">
          Risk Amount = Account Balance × (Risk % ÷ 100)
        </p>

      </div>

    </ToolLayout>
  );
}