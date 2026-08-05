"use client";

import { useState } from "react";
import ToolLayout from "../components/ToolLayout";
import NumberInput from "../components/NumberInput";
import SelectBox from "../components/SelectBox";
import ResultCard from "../components/ResultCard";

export default function PositionSizeCalculator() {
  const [balance, setBalance] = useState(1000);
  const [risk, setRisk] = useState(2);
  const [stopLoss, setStopLoss] = useState(50);
  const [pair, setPair] = useState("EUR/USD");

  const riskMoney = balance * (risk / 100);

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

  const lot =
    stopLoss > 0 ? riskMoney / (stopLoss * pipValue) : 0;

  return (
    <ToolLayout
      title="📊 Position Size Calculator"
      description="ຄຳນວນ Lot Size ທີ່ເໝາະສົມຕາມຂະໜາດບັນຊີ ແລະ Risk Management"
    >
      <div className="grid gap-6 md:grid-cols-2">

        <NumberInput
          label="Account Balance"
          value={balance}
          onChange={setBalance}
          suffix="USD"
        />

        <NumberInput
          label="Risk Per Trade"
          value={risk}
          onChange={setRisk}
          suffix="%"
        />

        <NumberInput
          label="Stop Loss"
          value={stopLoss}
          onChange={setStopLoss}
          suffix="Pips"
        />

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

      </div>

      <ResultCard
        title="Recommended Lot Size"
        value={`${lot.toFixed(2)} Lot`}
        subtitle={`Risk Amount : $${riskMoney.toFixed(2)}`}
      />

      <div className="mt-8 grid gap-4 md:grid-cols-3">

        <div className="rounded-2xl border border-white/10 bg-[#1b2130] p-5">

          <div className="text-gray-400">
            Account Balance
          </div>

          <div className="mt-2 text-2xl font-bold text-white">
            ${balance.toFixed(2)}
          </div>

        </div>

        <div className="rounded-2xl border border-white/10 bg-[#1b2130] p-5">

          <div className="text-gray-400">
            Risk Amount
          </div>

          <div className="mt-2 text-2xl font-bold text-red-400">
            ${riskMoney.toFixed(2)}
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

      </div>

      <div className="mt-8 rounded-2xl border border-blue-500/20 bg-blue-500/5 p-6">

        <h3 className="font-bold text-blue-400">
          📘 Position Size Formula
        </h3>

        <p className="mt-3 text-gray-300 leading-8">
          Lot Size =
          Risk Amount ÷
          (Stop Loss × Pip Value)
        </p>

      </div>

    </ToolLayout>
  );
}