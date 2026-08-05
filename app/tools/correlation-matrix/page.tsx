"use client";

import ToolLayout from "../components/ToolLayout";

const rows = [
  {
    pair: "EUR/USD",
    corr: 92,
  },
  {
    pair: "GBP/USD",
    corr: 85,
  },
  {
    pair: "AUD/USD",
    corr: 71,
  },
  {
    pair: "USD/JPY",
    corr: -76,
  },
  {
    pair: "USD/CHF",
    corr: -82,
  },
  {
    pair: "USD/CAD",
    corr: -54,
  },
  {
    pair: "XAU/USD",
    corr: 66,
  },
  {
    pair: "BTC/USD",
    corr: 35,
  },
];

export default function CorrelationMatrixPage() {

  function color(value:number){

    if(value>=80)
      return "bg-green-600";

    if(value>=60)
      return "bg-green-500";

    if(value>=40)
      return "bg-yellow-500";

    if(value>=0)
      return "bg-orange-500";

    if(value>-60)
      return "bg-red-500";

    return "bg-red-700";

  }

  return (

    <ToolLayout

      title="📊 Correlation Matrix"

      description="ຄວາມສຳພັນຂອງຄູ່ເງິນ"

    >

      <div className="space-y-5">

        {rows.map((item)=>(

          <div

            key={item.pair}

            className="rounded-3xl bg-[#161d2d] border border-white/10 p-5"

          >

            <div className="flex justify-between">

              <div className="text-xl font-bold text-white">

                {item.pair}

              </div>

              <div className="font-bold text-white">

                {item.corr}%

              </div>

            </div>

            <div className="mt-4 h-4 rounded-full bg-[#252d42] overflow-hidden">

              <div

                className={`h-full ${color(item.corr)}`}

                style={{

                  width:`${Math.abs(item.corr)}%`

                }}

              />

            </div>

          </div>

        ))}

      </div>

      <div className="mt-10 rounded-3xl border border-blue-500/20 bg-blue-500/5 p-6">

        <h2 className="text-xl font-bold text-blue-400">

          ຄວາມໝາຍ

        </h2>

        <ul className="mt-5 space-y-3 text-gray-300 leading-8">

          <li>🟢 +100 = ໄປທາງດຽວກັນ</li>

          <li>🟡 +50 = ສຳພັນປານກາງ</li>

          <li>⚪ 0 = ບໍ່ກ່ຽວກັນ</li>

          <li>🔴 -100 = ໄປຄົນລະທາງ</li>

        </ul>

      </div>

      <div className="mt-8 rounded-3xl border border-yellow-500/20 bg-yellow-500/5 p-6">

        <h2 className="text-xl font-bold text-yellow-400">

          ຄຳແນະນຳ

        </h2>

        <p className="mt-5 text-gray-300 leading-8">

          ບໍ່ຄວນເປີດອໍເດີໃນຄູ່ເງິນທີ່ມີ Correlation ສູງຫຼາຍ
          ເພາະຈະເພີ່ມຄວາມສ່ຽງ.
          ການເລືອກຄູ່ເງິນທີ່ບໍ່ສຳພັນກັນ
          ຊ່ວຍໃນການກະຈາຍຄວາມສ່ຽງ (Diversification).

        </p>

      </div>

    </ToolLayout>

  );

}