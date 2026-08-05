"use client";

import { useState } from "react";
import ToolLayout from "../components/ToolLayout";
import NumberInput from "../components/NumberInput";
import ResultCard from "../components/ResultCard";

export default function CommissionCalculatorPage() {

  const [lot, setLot] = useState(1);
  const [commission, setCommission] = useState(7);

  const total = (lot * commission).toFixed(2);

  return (
    <ToolLayout
      title="💰 ຄຳນວນຄ່າ Commission"
      description="ຄຳນວນຄ່າ Commission ຂອງ Broker ຕາມຂະໜາດ Lot"
    >

      <div className="grid md:grid-cols-2 gap-6">

        <NumberInput
          label="ຂະໜາດ Lot"
          value={lot}
          onChange={setLot}
          step={0.01}
        />

        <NumberInput
          label="Commission ຕໍ່ 1 Lot (USD)"
          value={commission}
          onChange={setCommission}
          step={0.5}
        />

      </div>

      <div className="mt-8">

        <ResultCard
          title="ຄ່າ Commission ລວມ"
          value={`$ ${total}`}
        />

      </div>

      <div className="mt-10 rounded-3xl bg-[#161d2d] border border-white/10 p-6">

        <h2 className="text-xl font-bold text-yellow-400">
          ວິທີຄຳນວນ
        </h2>

        <div className="mt-5 text-lg text-gray-300 leading-9">

          Commission = Lot × Commission / Lot

          <br /><br />

          ຕົວຢ່າງ

          <br />

          Lot = 2

          <br />

          Commission = $7

          <br />

          ຜົນລັບ = $14

        </div>

      </div>

      <div className="mt-8 rounded-3xl bg-green-500/5 border border-green-500/20 p-6">

        <h2 className="text-xl font-bold text-green-400">
          ຄຳແນະນຳ
        </h2>

        <ul className="mt-5 space-y-3 text-gray-300 leading-8">

          <li>• Broker ແຕ່ລະລາຍຈະເກັບ Commission ບໍ່ເທົ່າກັນ</li>

          <li>• ECN Account ມັກຈະມີ Commission ແຕ່ Spread ຕໍ່າ</li>

          <li>• Standard Account ສ່ວນໃຫຍ່ບໍ່ມີ Commission ແຕ່ Spread ສູງກວ່າ</li>

          <li>• ຄວນຄິດໄລ່ Commission ກ່ອນເຂົ້າເທຣດເພື່ອຮູ້ຕົ້ນທຶນທີ່ແທ້ຈິງ</li>

        </ul>

      </div>

    </ToolLayout>
  );

}