"use client";

import { useState } from "react";

export default function LotCalculatorPage() {
  const [balance, setBalance] = useState(1000);
  const [risk, setRisk] = useState(2);
  const [stopLoss, setStopLoss] = useState(100);

  const riskAmount = (balance * risk) / 100;

  const lotSize =
    stopLoss > 0 ? (riskAmount / (stopLoss * 10)).toFixed(2) : "0.00";

  return (
    <main className="mx-auto max-w-xl p-8">
      <h1 className="mb-2 text-3xl font-bold">
        📊 ຄິດໄລ່ຂະໜາດ Lot
      </h1>

      <p className="mb-8 text-gray-500">
        ຄຳນວນຂະໜາດ Lot ທີ່ເໝາະສົມຕາມທຶນ ແລະ ຄວາມສ່ຽງ.
      </p>

      <div className="space-y-5">

        <div>
          <label className="mb-2 block font-medium">
            ຍອດເງິນໃນບັນຊີ (USD)
          </label>

          <input
            type="number"
            value={balance}
            onChange={(e) => setBalance(Number(e.target.value))}
            className="w-full rounded-lg border p-3"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            ຄວາມສ່ຽງ (%)
          </label>

          <input
            type="number"
            value={risk}
            onChange={(e) => setRisk(Number(e.target.value))}
            className="w-full rounded-lg border p-3"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Stop Loss (Pips)
          </label>

          <input
            type="number"
            value={stopLoss}
            onChange={(e) => setStopLoss(Number(e.target.value))}
            className="w-full rounded-lg border p-3"
          />
        </div>

        <div className="rounded-xl bg-gray-100 p-5 dark:bg-gray-800">
          <h2 className="font-semibold">
            ຈຳນວນເງິນທີ່ສ່ຽງ
          </h2>

          <p className="mt-2 text-2xl font-bold text-red-500">
            ${riskAmount.toFixed(2)}
          </p>
        </div>

        <div className="rounded-xl bg-gray-100 p-5 dark:bg-gray-800">
          <h2 className="font-semibold">
            ຂະໜາດ Lot ທີ່ແນະນຳ
          </h2>

          <p className="mt-2 text-3xl font-bold text-green-500">
            {lotSize} Lot
          </p>
        </div>

      </div>
    </main>
  );
}