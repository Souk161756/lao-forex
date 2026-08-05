"use client";

import { useState } from "react";
import ToolLayout from "../components/ToolLayout";
import NumberInput from "../components/NumberInput";
import ResultCard from "../components/ResultCard";

export default function SpreadCalculatorPage() {

  const [bid, setBid] = useState(1.17450);
  const [ask, setAsk] = useState(1.17480);

  const spread = ((ask - bid) * 10000).toFixed(1);

  return (
    <ToolLayout
      title="📏 ຄຳນວນ Spread"
      description="ຄຳນວນຄ່າ Spread ຂອງຄູ່ເງິນ Forex"
    >

      <div className="grid md:grid-cols-2 gap-6">

        <NumberInput
          label="ລາຄາ Bid"
          value={bid}
          onChange={setBid}
          step={0.00001}
        />

        <NumberInput
          label="ລາຄາ Ask"
          value={ask}
          onChange={setAsk}
          step={0.00001}
        />

      </div>

      <div className="mt-8">

        <ResultCard
          title="Spread"
          value={`${spread} Pip`}
        />

      </div>

      <div className="mt-10 rounded-3xl bg-[#161d2d] border border-white/10 p-6">

        <h2 className="text-xl font-bold text-yellow-400">
          ວິທີຄຳນວນ
        </h2>

        <div className="mt-5 text-lg text-gray-300 leading-9">

          Spread = Ask − Bid

          <br />

          ຕົວຢ່າງ

          <br />

          Ask = 1.17480

          <br />

          Bid = 1.17450

          <br />

          Spread = 3 Pip

        </div>

      </div>

      <div className="mt-8 rounded-3xl bg-green-500/5 border border-green-500/20 p-6">

        <h2 className="text-xl font-bold text-green-400">
          ຄຳແນະນຳ
        </h2>

        <ul className="mt-5 space-y-3 text-gray-300 leading-8">

          <li>• Spread ນ້ອຍ ຊ່ວຍຫຼຸດຕົ້ນທຶນການເທຣດ</li>

          <li>• ຊ່ວງຂ່າວໃຫຍ່ Spread ອາດຂະຫຍາຍຕົວ</li>

          <li>• Gold ແລະ Crypto ມັກມີ Spread ສູງກວ່າ Forex</li>

          <li>• ເລືອກ Broker ທີ່ມີ Spread ຕໍ່າຈະຊ່ວຍປະຢັດຄ່າໃຊ້ຈ່າຍ</li>

        </ul>

      </div>

    </ToolLayout>
  );

}