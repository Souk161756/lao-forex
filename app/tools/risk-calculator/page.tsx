"use client";

import { useState } from "react";

export default function RiskCalculator() {
  const [balance, setBalance] = useState(1000);
  const [riskPercent, setRiskPercent] = useState(2);

  const riskAmount = (balance * riskPercent) / 100;

  return (
    <main className="max-w-xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">
        ⚠️ Risk Calculator
      </h1>

      <div className="space-y-5">

        <div>
          <label className="block mb-2 font-medium">
            Account Balance ($)
          </label>

          <input
            type="number"
            value={balance}
            onChange={(e) => setBalance(Number(e.target.value))}
            className="w-full border rounded-lg p-3"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Risk (%)
          </label>

          <input
            type="number"
            value={riskPercent}
            onChange={(e) => setRiskPercent(Number(e.target.value))}
            className="w-full border rounded-lg p-3"
          />
        </div>

        <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-5 mt-6">
          <h2 className="text-xl font-semibold">
            Risk Amount
          </h2>

          <p className="text-3xl font-bold text-green-500 mt-3">
            ${riskAmount.toFixed(2)}
          </p>
        </div>

      </div>
    </main>
  );
}