import { ReactNode } from "react";

type Props = {
  title: string;
  description?: string;
  children: ReactNode;
};

export default function ToolLayout({
  title,
  description,
  children,
}: Props) {
  return (
    <div className="min-h-screen bg-[#0b1120]">

      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="mb-10">

          <h1 className="text-4xl font-bold text-white">
            {title}
          </h1>

          {description && (
            <p className="text-gray-400 mt-3 max-w-3xl">
              {description}
            </p>
          )}

        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          <div className="lg:col-span-2">

            <div className="rounded-3xl border border-white/10 bg-[#131722] p-8">

              {children}

            </div>

          </div>

          <div>

            <div className="rounded-3xl border border-white/10 bg-[#131722] p-6">

              <h2 className="text-xl font-bold text-white mb-5">
                💡 Trading Tips
              </h2>

              <ul className="space-y-3 text-gray-300">

                <li>• ຢ່າສ່ຽງເກີນ 2% ຕໍ່ການເທຣດ</li>

                <li>• ໃຊ້ Stop Loss ທຸກຄັ້ງ</li>

                <li>• ຢ່າເພີ່ມ Lot ເມື່ອຂາດທຶນ</li>

                <li>• ລໍຖ້າ Setup ທີ່ດີ</li>

                <li>• ຈົດ Trading Journal</li>

              </ul>

            </div>

            <div className="rounded-3xl border border-white/10 bg-[#131722] p-6 mt-6">

              <h2 className="text-xl font-bold text-white mb-5">
                📊 Market
              </h2>

              <div className="space-y-3">

                <div className="flex justify-between">

                  <span className="text-gray-400">
                    Gold
                  </span>

                  <span className="text-green-400">
                    LIVE
                  </span>

                </div>

                <div className="flex justify-between">

                  <span className="text-gray-400">
                    Bitcoin
                  </span>

                  <span className="text-green-400">
                    LIVE
                  </span>

                </div>

                <div className="flex justify-between">

                  <span className="text-gray-400">
                    Forex
                  </span>

                  <span className="text-green-400">
                    OPEN
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}