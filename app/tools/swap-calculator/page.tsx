"use client";

import { useState } from "react";
import ToolLayout from "../components/ToolLayout";
import NumberInput from "../components/NumberInput";
import SelectBox from "../components/SelectBox";
import ResultCard from "../components/ResultCard";

export default function SwapCalculatorPage() {

  const [lot, setLot] = useState(1);
  const [days, setDays] = useState(1);
  const [swap, setSwap] = useState(-6.5);
  const [type, setType] = useState("BUY");

  const total = (lot * days * swap).toFixed(2);

  return (
    <ToolLayout
      title="🌙 ຄຳນວນຄ່າ Swap"
      description="ຄຳນວນຄ່າຖືອໍເດີຂ້າມຄືນ (Overnight Swap)"
    >

      <div className="grid md:grid-cols-2 gap-6">

        <SelectBox
          label="ປະເພດອໍເດີ"
          value={type}
          onChange={setType}
          options={[
            { label: "BUY", value: "BUY" },
            { label: "SELL", value: "SELL" },
          ]}
        />

        <NumberInput
          label="ຂະໜາດ Lot"
          value={lot}
          onChange={setLot}
          step={0.01}
        />

        <NumberInput
          label="ຈຳນວນມື້"
          value={days}
          onChange={setDays}
        />

        <NumberInput
          label="Swap / Lot / ມື້"
          value={swap}
          onChange={setSwap}
          step={0.1}
        />

      </div>

      <div className="mt-8">

        <ResultCard
          title="ຄ່າ Swap ລວມ"
          value={`$ ${total}`}
        />

      </div>

      <div className="mt-10 rounded-3xl bg-[#161d2d] border border-white/10 p-6">

        <h2 className="text-xl font-bold text-yellow-400">
          ວິທີຄຳນວນ
        </h2>

        <div className="mt-5 text-lg text-gray-300 leading-9">

          Swap = Lot × ຈຳນວນມື້ × Swap/Lot

          <br /><br />

          ຕົວຢ່າງ

          <br />

          1 Lot

          <br />

          3 ມື້

          <br />

          Swap = -6.5 USD

          <br /><br />

          ຜົນລັບ = -19.50 USD

        </div>

      </div>

      <div className="mt-8 rounded-3xl bg-blue-500/5 border border-blue-500/20 p-6">

        <h2 className="text-xl font-bold text-blue-400">
          ຂໍ້ຄວນຮູ້
        </h2>

        <ul className="mt-5 space-y-3 text-gray-300 leading-8">

          <li>• Swap ແມ່ນຄ່າດອກເບ້ຍຂອງການຖືອໍເດີຂ້າມຄືນ</li>

          <li>• ບາງຄູ່ເງິນອາດໄດ້ Swap ເປັນບວກ (+)</li>

          <li>• ວັນພຸດ (Wednesday) ສ່ວນໃຫຍ່ຈະຄິດ Triple Swap (3 ເທົ່າ)</li>

          <li>• ແຕ່ລະ Broker ມີອັດຕາ Swap ບໍ່ຄືກັນ</li>

        </ul>

      </div>

    </ToolLayout>
  );
}