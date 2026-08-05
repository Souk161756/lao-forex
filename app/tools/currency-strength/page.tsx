"use client";

import ToolLayout from "../components/ToolLayout";

const currencies = [
  { code: "USD", strength: 91 },
  { code: "EUR", strength: 82 },
  { code: "GBP", strength: 76 },
  { code: "JPY", strength: 61 },
  { code: "CHF", strength: 58 },
  { code: "AUD", strength: 49 },
  { code: "CAD", strength: 42 },
  { code: "NZD", strength: 36 },
];

export default function CurrencyStrengthPage() {

  return (

    <ToolLayout
      title="💪 ຄວາມແຂງແຮງຂອງສະກຸນເງິນ"
      description="ປຽບທຽບຄວາມແຂງແຮງຂອງສະກຸນເງິນຫຼັກ"
    >

      <div className="space-y-5">

        {currencies.map((item)=>(

          <div
            key={item.code}
            className="rounded-3xl bg-[#161d2d] border border-white/10 p-5"
          >

            <div className="flex justify-between">

              <div className="text-xl font-bold text-white">

                {item.code}

              </div>

              <div className="text-green-400 font-bold">

                {item.strength}%

              </div>

            </div>

            <div className="mt-4 h-4 rounded-full bg-[#252d42] overflow-hidden">

              <div

                className="h-full rounded-full bg-gradient-to-r from-green-400 to-yellow-400"

                style={{
                  width:`${item.strength}%`
                }}

              />

            </div>

          </div>

        ))}

      </div>

      <div className="mt-10 rounded-3xl border border-blue-500/20 bg-blue-500/5 p-6">

        <h2 className="text-xl font-bold text-blue-400">

          ວິທີອ່ານ

        </h2>

        <ul className="mt-5 space-y-3 text-gray-300 leading-8">

          <li>• 80-100 = ແຂງແຮງຫຼາຍ</li>

          <li>• 60-80 = ແຂງແຮງ</li>

          <li>• 40-60 = ປານກາງ</li>

          <li>• 20-40 = ອ່ອນ</li>

          <li>• 0-20 = ອ່ອນຫຼາຍ</li>

        </ul>

      </div>

      <div className="mt-8 rounded-3xl border border-yellow-500/20 bg-yellow-500/5 p-6">

        <h2 className="text-xl font-bold text-yellow-400">

          ຄຳແນະນຳ

        </h2>

        <p className="mt-5 leading-8 text-gray-300">

          ເລືອກເທຣດຄູ່ເງິນທີ່ສະກຸນໜຶ່ງແຂງ ແລະ ອີກສະກຸນໜຶ່ງອ່ອນ
          ເຊັ່ນ USD ແຂງ ແລະ NZD ອ່ອນ
          ຈະເໝາະສຳລັບການຊອກຫາໂອກາດເທຣດ.

        </p>

      </div>

    </ToolLayout>

  );

}