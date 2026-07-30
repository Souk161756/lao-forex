"use client";

import { useState } from "react";

export default function PipCalculator() {
  const [lotSize, setLotSize] = useState(1);
  const [pipMove, setPipMove] = useState(10);

  // ຄິດໄລ່ສຳລັບ Forex ຄູ່ສະກຸນເງິນມາດຕະຖານ
  const pipValue = lotSize * 10;
  const total = pipValue * pipMove;

  return (
    <main className="max-w-xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">
        📊 Pip Calculator
      </h1>

      <div className="space-y-5">

        <div>
          <label className="block mb-2 font-medium">
            Lot Size
          </label>

          <input
            type="number"
            step="0.01"
            value={lotSize}
            onChange={(e) => setLotSize(Number(e.target.value))}
            className="w-full border rounded-lg p-3"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Pip Movement
          </label>

          <input
            type="number"
            value={pipMove}
            onChange={(e) => setPipMove(Number(e.target.value))}
            className="w-full border rounded-lg p-3"
          />
        </div>

        <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-5">
          <h2 className="text-xl font-semibold">
            Result
          </h2>

          <p className="mt-3">
            Pip Value: <strong>${pipValue.toFixed(2)}</strong>
          </p>

          <p className="text-3xl font-bold text-green-500 mt-3">
            Total: ${total.toFixed(2)}
          </p>
        </div>

      </div>
    </main>
  );
}