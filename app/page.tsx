export default function Home() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center">
          <div className="inline-block px-5 py-2 rounded-full border border-yellow-500 text-yellow-400 mb-6">
            ລວມໂບຣກເກີທົ່ວໂລກ
          </div>

          <h1 className="text-6xl font-bold leading-tight mb-6">
            ຄົ້ນຫາ
            <span className="text-yellow-400"> ໂບຣກເກີ Forex </span>
            ທີ່ດີທີ່ສຸດ
          </h1>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
            ປຽບທຽບໂບຣກເກີ, ອ່ານລີວິວຈິງ ແລະ ຮັບ cashback rebate ທຸກການເທຣດ
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <button className="bg-yellow-500 text-black px-8 py-4 rounded-2xl font-bold">
              ປຽບທຽບໂບຣກ
            </button>

            <button className="border border-white/20 px-8 py-4 rounded-2xl">
              ຮັບຄ່າຄືນ
            </button>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-16">
        <div className="bg-[#0d1228] border border-white/10 rounded-3xl p-8">
          <input
            type="text"
            placeholder="ຄົ້ນຫາໂບຣກ, spread, ໃບອະນຸຍາດ..."
            className="w-full bg-[#111827] border border-white/10 rounded-2xl px-5 py-4 outline-none"
          />

          <div className="flex flex-wrap gap-3 mt-6">
            {["Forex", "Crypto", "Stocks", "ECN"].map((item) => (
              <button
                key={item}
                className="px-5 py-2 rounded-xl bg-[#111827] border border-white/10"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-10">
        <h2 className="text-4xl font-bold mb-10">
          ໂບຣກເກີແນະນຳ
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              name: "Exness",
              score: "9.5",
              rebate: "$8/Lot",
            },
            {
              name: "IC Markets",
              score: "9.3",
              rebate: "$5/Lot",
            },
            {
              name: "XM",
              score: "8.9",
              rebate: "$7/Lot",
            },
          ].map((broker) => (
            <div
              key={broker.name}
              className="bg-[#0d1228] border border-white/10 rounded-3xl p-6"
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold">{broker.name}</h3>

                <div className="bg-yellow-500 text-black px-4 py-2 rounded-xl font-bold">
                  {broker.score}
                </div>
              </div>

              <div className="mb-6">
                <p className="text-gray-400 mb-2">ຄ່າຄືນ Cashback</p>

                <p className="text-3xl font-bold text-yellow-400">
                  {broker.rebate}
                </p>
              </div>

              <div className="flex gap-3">
                <button className="flex-1 bg-yellow-500 text-black py-3 rounded-2xl font-bold">
                  ເປີດບັນຊີ
                </button>

                <button className="flex-1 border border-white/10 py-3 rounded-2xl">
                  ອ່ານລີວິວ
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="bg-yellow-500 text-black rounded-[40px] p-12 text-center">
          <h2 className="text-5xl font-bold mb-6">
            ເລີ່ມເທຣດ ແລະ ຮັບ Cashback
          </h2>

          <p className="text-lg mb-8">
            ເປີດບັນຊີຜ່ານລິ້ງ IB ຂອງພວກເຮົາ ແລະ ຮັບ rebate ທຸກເດືອນ
          </p>

          <button className="bg-black text-white px-8 py-4 rounded-2xl font-bold">
            ສະໝັກເລີຍ
          </button>
        </div>
      </section>
    </main>
  );
}