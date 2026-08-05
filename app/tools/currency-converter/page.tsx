"use client";

import { useState } from "react";
import ToolLayout from "../components/ToolLayout";
import NumberInput from "../components/NumberInput";
import SelectBox from "../components/SelectBox";
import ResultCard from "../components/ResultCard";

const rates: Record<string, number> = {
  USD: 1,
  EUR: 0.86,
  GBP: 0.74,
  JPY: 147.2,
  THB: 32.4,
  LAK: 21650,
  CNY: 7.18,
};

export default function CurrencyConverterPage() {
  const [amount, setAmount] = useState(100);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("LAK");

  const usd = amount / rates[from];

  const result = usd * rates[to];

  return (
    <ToolLayout
      title="💱 Currency Converter"
      description="ແປງສະກຸນເງິນລະຫວ່າງ USD, EUR, GBP, JPY, THB, LAK ແລະ CNY"
    >
      <div className="grid gap-6 md:grid-cols-2">

        <NumberInput
          label="Amount"
          value={amount}
          onChange={setAmount}
        />

        <SelectBox
  label="From"
  value={from}
  onChange={setFrom}
  options={[
    { label: "USD", value: "USD" },
    { label: "EUR", value: "EUR" },
    { label: "GBP", value: "GBP" },
    { label: "JPY", value: "JPY" },
    { label: "THB", value: "THB" },
    { label: "LAK", value: "LAK" },
    { label: "CNY", value: "CNY" },
  ]}
/>
        <SelectBox
  label="To"
  value={to}
  onChange={setTo}
  options={[
    { label: "USD", value: "USD" },
    { label: "EUR", value: "EUR" },
    { label: "GBP", value: "GBP" },
    { label: "JPY", value: "JPY" },
    { label: "THB", value: "THB" },
    { label: "LAK", value: "LAK" },
    { label: "CNY", value: "CNY" },
  ]}
/>
      </div>

      <ResultCard
        title="Converted Amount"
        value={`${result.toLocaleString(undefined,{
          maximumFractionDigits:2
        })} ${to}`}
        subtitle={`${amount} ${from}`}
      />

      <div className="mt-8 grid md:grid-cols-3 gap-4">

        <div className="rounded-2xl border border-white/10 bg-[#1b2130] p-5">
          <div className="text-gray-400">From</div>
          <div className="mt-2 text-2xl font-bold text-white">
            {from}
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-[#1b2130] p-5">
          <div className="text-gray-400">To</div>
          <div className="mt-2 text-2xl font-bold text-yellow-400">
            {to}
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-[#1b2130] p-5">
          <div className="text-gray-400">Exchange Rate</div>
          <div className="mt-2 text-2xl font-bold text-green-400">
            {(rates[to] / rates[from]).toFixed(4)}
          </div>
        </div>

      </div>

      <div className="mt-8 rounded-2xl border border-green-500/20 bg-green-500/5 p-6">

        <h3 className="font-bold text-green-400">
          📘 Formula
        </h3>

        <p className="mt-3 text-gray-300 leading-8">
          Converted Amount = Amount ÷ Base Rate × Target Rate
        </p>

      </div>

      <div className="mt-6 rounded-2xl border border-yellow-500/20 bg-yellow-500/5 p-6">

        <h3 className="font-bold text-yellow-400">
          💡 Trading Tip
        </h3>

        <p className="mt-3 text-gray-300 leading-8">
          ຕອນນີ້ເປັນອັດຕາແລກປ່ຽນຕົວຢ່າງ (Static Rate). ຂັ້ນຕໍ່ໄປພວກເຮົາຈະເຊື່ອມ TwelveData API ເພື່ອໃຫ້ດຶງອັດຕາແບບ Live ຈິງ.
        </p>

      </div>

    </ToolLayout>
  );
}