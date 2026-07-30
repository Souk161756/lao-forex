"use client";

import { useState } from "react";

export default function MarginCalculator() {
  const [lot, setLot] = useState(1);
  const [price, setPrice] = useState(1.1000);
  const [leverage, setLeverage] = useState(1000);

  const contractSize = 100000;

  const margin = (lot * contractSize * price) / leverage;

  return (
    <main className="max-w-xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">
        💰 Margin Calculator
      </h1>

      <div className="space-y-5">

        <div>
          <label className="block mb-2 font-medium">
            Lot Size
          </label>
          <input
            type="number"
            step="0.01"
            value={lot}
            onChange={(e) => setLot(Number(e.target.value))}
            className="w-full border rounded-lg p-3"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Market Price
          </label>
          <input
            type="number"
            step="0.0001"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            className="w-full border rounded-lg p-3"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Leverage
          </label>
          <input
            type="number"
            value={leverage}
            onChange={(e) => setLeverage(Number(e.target.value))}
            className="w-full border rounded-lg p-3"
          />
        </div>

        <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-5">
          <h2 className="text-xl font-semibold">
            Required Margin
          </h2>

          <p className="text-3xl font-bold text-green-500 mt-3">
            ${margin.toFixed(2)}
          </p>
        </div>

      </div>
    </main>
  );
}