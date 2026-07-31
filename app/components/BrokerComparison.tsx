"use client";

interface Broker {
  name: string;
  rating: number;
  cashback: string;
  spread: string;
  deposit: string;
  leverage: string;
}

interface Props {
  brokers: Broker[];
}

export default function BrokerComparison({ brokers }: Props) {
  return (
    <section className="mt-24">
      <div className="mb-10 text-center">
        <h2 className="text-4xl font-black text-white">
          📊 ຕາຕະລາງປຽບທຽບ Broker
        </h2>

        <p className="mt-3 text-gray-400">
          ປຽບທຽບຂໍ້ມູນສຳຄັນຂອງໂບຣກເກີແຕ່ລະລາຍ ເພື່ອຊ່ວຍໃຫ້ຕັດສິນໃຈໄດ້ງ່າຍຂຶ້ນ.
        </p>
      </div>

      <div className="overflow-x-auto rounded-3xl border border-yellow-500/10 bg-[#0B1220]">
        <table className="min-w-full">
          <thead className="bg-yellow-500/10">
            <tr>
              <th className="px-6 py-4 text-left text-yellow-400">Broker</th>
              <th className="px-6 py-4 text-center text-yellow-400">⭐ ຄະແນນ</th>
              <th className="px-6 py-4 text-center text-yellow-400">💰 ຝາກຂັ້ນຕ່ຳ</th>
              <th className="px-6 py-4 text-center text-yellow-400">💸 Cashback</th>
              <th className="px-6 py-4 text-center text-yellow-400">📉 Spread</th>
              <th className="px-6 py-4 text-center text-yellow-400">⚡ Leverage</th>
            </tr>
          </thead>

          <tbody>
            {brokers.map((broker, index) => (
              <tr
                key={broker.name}
                className="border-t border-white/10 hover:bg-white/5 transition"
              >
                <td className="px-6 py-5 font-bold text-white">
                  {index === 0 && "🥇 "}
                  {index === 1 && "🥈 "}
                  {index === 2 && "🥉 "}
                  {broker.name}
                </td>

                <td className="px-6 py-5 text-center text-green-400">
                  {broker.rating}/10
                </td>

                <td className="px-6 py-5 text-center text-gray-300">
                  {broker.deposit}
                </td>

                <td className="px-6 py-5 text-center text-green-400">
                  {broker.cashback}
                </td>

                <td className="px-6 py-5 text-center text-white">
                  {broker.spread}
                </td>

                <td className="px-6 py-5 text-center text-orange-400">
                  {broker.leverage}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}