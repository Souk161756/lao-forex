"use client";

import { useState } from "react";
import ToolLayout from "../components/ToolLayout";
import NumberInput from "../components/NumberInput";

export default function CompoundingCalculatorPage() {

  const [capital, setCapital] = useState(1000);
  const [monthlyReturn, setMonthlyReturn] = useState(10);
  const [months, setMonths] = useState(12);

  let balance = capital;

  const rows = [];

  for (let i = 1; i <= months; i++) {

    balance = balance * (1 + monthlyReturn / 100);

    rows.push({
      month: i,
      balance,
    });

  }

  return (

    <ToolLayout
      title="📈 ຄຳນວນດອກເບ້ຍທົບຕົ້ນ (Compounding)"
      description="ຄຳນວນການເຕີບໂຕຂອງພອດເມື່ອນຳກຳໄລມາທົບຕົ້ນທຸກເດືອນ"
    >

      <div className="grid md:grid-cols-3 gap-6">

        <NumberInput
          label="ທຶນເລີ່ມຕົ້ນ (USD)"
          value={capital}
          onChange={setCapital}
        />

        <NumberInput
          label="ກຳໄລຕໍ່ເດືອນ (%)"
          value={monthlyReturn}
          onChange={setMonthlyReturn}
        />

        <NumberInput
          label="ຈຳນວນເດືອນ"
          value={months}
          onChange={setMonths}
        />

      </div>

      <div className="mt-8 rounded-3xl bg-[#161d2d] border border-white/10 p-6">

        <h2 className="text-xl font-bold text-yellow-400">

          ຜົນການຄຳນວນ

        </h2>

        <div className="mt-6 overflow-auto">

          <table className="w-full">

            <thead>

              <tr className="border-b border-white/10">

                <th className="text-left py-3 text-gray-400">
                  ເດືອນ
                </th>

                <th className="text-right py-3 text-gray-400">
                  ຍອດເງິນ
                </th>

              </tr>

            </thead>

            <tbody>

              {rows.map((row) => (

                <tr
                  key={row.month}
                  className="border-b border-white/5"
                >

                  <td className="py-3">
                    {row.month}
                  </td>

                  <td className="py-3 text-right text-green-400 font-bold">

                    $
                    {row.balance.toLocaleString(undefined,{
                      maximumFractionDigits:2
                    })}

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

      <div className="mt-8 rounded-3xl border border-green-500/20 bg-green-500/5 p-6">

        <h2 className="text-xl font-bold text-green-400">

          ຍອດເງິນສຸດທ້າຍ

        </h2>

        <div className="mt-4 text-4xl font-black text-white">

          $

          {balance.toLocaleString(undefined,{
            maximumFractionDigits:2
          })}

        </div>

      </div>

      <div className="mt-8 rounded-3xl border border-blue-500/20 bg-blue-500/5 p-6">

        <h2 className="text-xl font-bold text-blue-400">

          ຂໍ້ຄວນຮູ້

        </h2>

        <ul className="mt-5 space-y-3 text-gray-300 leading-8">

          <li>• ດອກເບ້ຍທົບຕົ້ນແມ່ນການນຳກຳໄລກັບມາລົງທຶນຕໍ່</li>

          <li>• ຍິ່ງເວລາຍາວ ຍິ່ງເຫັນຜົນຂອງ Compounding ຊັດເຈນ</li>

          <li>• ຄວນໃຊ້ຄູ່ກັບ Risk Management ທີ່ດີ</li>

          <li>• ຢ່າຕັ້ງຄ່າ % ກຳໄລສູງເກີນຄວາມເປັນຈິງ</li>

        </ul>

      </div>

    </ToolLayout>

  );

}