"use client";

import { useState } from "react";
import ToolLayout from "../components/ToolLayout";
import NumberInput from "../components/NumberInput";
import SelectBox from "../components/SelectBox";
import ResultCard from "../components/ResultCard";

export default function PipCalculatorPage() {
  const [pair, setPair] = useState("EUR/USD");
  const [lot, setLot] = useState(1);

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

  const result = pipValue * lot;

  return (
    <ToolLayout
      title="📈 Pip Calculator"
      description="ຄຳນວນມູນຄ່າ 1 Pip ຕາມ Lot Size ແລະ Currency Pair"
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
          step={0.01}
        />

      </div>

      <ResultCard
        title="Pip Value"
        value={`$${result.toFixed(2)}`}
        subtitle={`${pair} | ${lot} Lot`}
      />

      <div className="mt-8 rounded-2xl border border-yellow-500/20 bg-yellow-500/5 p-5">

        <h3 className="font-bold text-yellow-400">
          💡 ຄຳອະທິບາຍ
        </h3>

        <p className="mt-3 text-gray-300 leading-8">
          Pip Value ແມ່ນມູນຄ່າຂອງການເຄື່ອນໄຫວ 1 Pip
          ຂອງຄູ່ເງິນ ຫຼື ສິນຄ້າ
          ຕາມຂະໜາດ Lot ທີ່ທ່ານໃຊ້.
        </p>

      </div>

    </ToolLayout>
  );
}