"use client";

import { useState } from "react";
import ToolLayout from "../components/ToolLayout";
import NumberInput from "../components/NumberInput";

export default function PivotPointPage() {
  const [high, setHigh] = useState(1.1850);
  const [low, setLow] = useState(1.1750);
  const [close, setClose] = useState(1.1800);

  const pivot = (high + low + close) / 3;

  const r1 = (2 * pivot) - low;
  const s1 = (2 * pivot) - high;

  const r2 = pivot + (high - low);
  const s2 = pivot - (high - low);

  const r3 = high + 2 * (pivot - low);
  const s3 = low - 2 * (high - pivot);

  return (
    <ToolLayout
      title="📈 Pivot Point Calculator"
      description="ຄຳນວນ Pivot Point ແລະ Support / Resistance"
    >
      <div className="grid gap-6 md:grid-cols-3">

        <NumberInput
          label="High"
          value={high}
          onChange={setHigh}
          step={0.0001}
        />

        <NumberInput
          label="Low"
          value={low}
          onChange={setLow}
          step={0.0001}
        />

        <NumberInput
          label="Close"
          value={close}
          onChange={setClose}
          step={0.0001}
        />

      </div>

      <div className="mt-10 grid md:grid-cols-3 gap-5">

        <div className="rounded-2xl bg-[#1b2130] p-6 border border-yellow-500/20">
          <div className="text-gray-400">Pivot</div>
          <div className="text-3xl font-bold text-yellow-400 mt-2">
            {pivot.toFixed(5)}
          </div>
        </div>

        <div className="rounded-2xl bg-[#1b2130] p-6 border border-green-500/20">
          <div className="text-gray-400">Resistance</div>

          <div className="mt-3 text-green-400">
            R1 : {r1.toFixed(5)}
          </div>

          <div className="text-green-400">
            R2 : {r2.toFixed(5)}
          </div>

          <div className="text-green-400">
            R3 : {r3.toFixed(5)}
          </div>

        </div>

        <div className="rounded-2xl bg-[#1b2130] p-6 border border-red-500/20">
          <div className="text-gray-400">Support</div>

          <div className="mt-3 text-red-400">
            S1 : {s1.toFixed(5)}
          </div>

          <div className="text-red-400">
            S2 : {s2.toFixed(5)}
          </div>

          <div className="text-red-400">
            S3 : {s3.toFixed(5)}
          </div>

        </div>

      </div>

      <div className="mt-8 rounded-2xl border border-blue-500/20 bg-blue-500/5 p-6">

        <h3 className="font-bold text-blue-400">
          📘 Pivot Formula
        </h3>

        <p className="mt-3 text-gray-300">
          Pivot = (High + Low + Close) ÷ 3
        </p>

        <p className="mt-2 text-gray-300">
          R1 = (2 × Pivot) − Low
        </p>

        <p className="mt-2 text-gray-300">
          S1 = (2 × Pivot) − High
        </p>

      </div>

      <div className="mt-6 rounded-2xl border border-yellow-500/20 bg-yellow-500/5 p-6">

        <h3 className="font-bold text-yellow-400">
          💡 Trading Tip
        </h3>

        <p className="mt-3 text-gray-300 leading-8">
          ຖ້າລາຄາຢູ່ເໜືອ Pivot ມັກຈະເປັນແນວໂນ້ມ Bullish.
          ຖ້າລາຄາຢູ່ຕ່ຳກວ່າ Pivot ມັກຈະເປັນແນວໂນ້ມ Bearish.
        </p>

      </div>

    </ToolLayout>
  );
}