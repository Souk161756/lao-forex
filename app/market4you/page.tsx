export default function Market4YouPage() {
  return (
    <main className="bg-[#050816] text-white min-h-screen overflow-hidden">

      {/* HERO */}
      <section className="relative max-w-7xl mx-auto px-6 pt-24 pb-24">

        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500 blur-[150px]" />
        </div>

        <div className="relative z-10">

          <div className="inline-flex items-center gap-3 bg-purple-500/10 border border-purple-500/20 text-purple-300 px-5 py-2 rounded-full mb-8">
            <span>🚀</span>
            <span className="font-bold">
              ຣີວິວ Market4You ສຳລັບຄົນລາວ 2026
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-tight max-w-5xl mb-8">
            Market4You ດີບໍ?
            <br />
            ໂບກເກີ້ສຳລັບມືໃໝ່
          </h1>

          <p className="text-gray-300 text-xl leading-10 max-w-3xl mb-12">
            ຝາກເລີ່ມຕົ້ນນ້ອຍ • ມີ Bonus •
            ໃຊ້ MT4/MT5 ໄດ້ • ເໝາະສຳລັບຄົນເລີ່ມ Forex
          </p>

          <div className="flex flex-wrap gap-5">

            <a
              href="https://account.markets4you.online/en/user-registration/?affid=bpblvtj"
              target="_blank"
              className="bg-purple-500 hover:bg-purple-400 transition text-white px-10 py-5 rounded-3xl font-black text-xl shadow-2xl"
            >
              ສະໝັກ Market4You →
            </a>

            <a
              href="#review"
              className="border border-white/10 hover:border-purple-400 transition px-10 py-5 rounded-3xl font-bold text-xl bg-white/5"
            >
              ອ່ານຣີວິວ
            </a>

          </div>

        </div>

      </section>

      {/* STATS */}
      <section className="max-w-7xl mx-auto px-6 pb-24">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          <div className="bg-[#0f172a] rounded-[32px] p-8 border border-white/5">
            <p className="text-gray-400 mb-3">ຝາກເລີ່ມຕົ້ນ</p>
            <h3 className="text-4xl font-black text-purple-400">
              ຕ່ຳ
            </h3>
          </div>

          <div className="bg-[#0f172a] rounded-[32px] p-8 border border-white/5">
            <p className="text-gray-400 mb-3">Platform</p>
            <h3 className="text-4xl font-black text-purple-400">
              MT4/MT5
            </h3>
          </div>

          <div className="bg-[#0f172a] rounded-[32px] p-8 border border-white/5">
            <p className="text-gray-400 mb-3">ໂບນັດ</p>
            <h3 className="text-4xl font-black text-purple-400">
              ມີ
            </h3>
          </div>

          <div className="bg-[#0f172a] rounded-[32px] p-8 border border-white/5">
            <p className="text-gray-400 mb-3">ຄະແນນ</p>
            <h3 className="text-4xl font-black text-purple-400">
              8.9/10
            </h3>
          </div>

        </div>

      </section>

      {/* PREMIUM CARD */}
      <section className="max-w-7xl mx-auto px-6 pb-24">

        <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-r from-purple-500 to-pink-500 p-10 shadow-2xl">

          <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl" />

          <div className="relative flex flex-col md:flex-row items-center justify-between gap-10">

            <div className="flex items-center gap-6">

              <div className="bg-white rounded-[28px] p-4">
                <img
                  src="/market4you-logo.png"
                  alt="Market4You"
                  className="w-24 h-24 object-contain"
                />
              </div>

              <div>

                <div className="inline-block bg-white/20 text-white px-4 py-2 rounded-full mb-4">
                  🚀 ເໝາະສຳລັບມືໃໝ່
                </div>

                <h2 className="text-5xl font-black mb-4">
                  Market4You
                </h2>

                <p className="text-white/80 text-xl leading-10 max-w-2xl">
                  ຝາກເງິນນ້ອຍ • ມີ Bonus •
                  ໃຊ້ MT4/MT5 ໄດ້ • ເໝາະສຳລັບຄົນເລີ່ມເທຣດ
                </p>

              </div>

            </div>

            <a
              href="https://account.markets4you.online/en/user-registration/?affid=bpblvtj"
              target="_blank"
              className="bg-black hover:scale-105 transition text-white px-12 py-6 rounded-3xl text-2xl font-black shadow-2xl"
            >
              ສະໝັກເລີຍ →
            </a>

          </div>

        </div>

      </section>

      {/* REVIEW */}
      <section
        id="review"
        className="max-w-7xl mx-auto px-6 pb-24"
      >

        <div className="bg-[#0f172a] rounded-[40px] p-12 border border-white/5">

          <h2 className="text-5xl font-black mb-10 text-purple-400">
            Market4You ດີບໍ?
          </h2>

          <div className="space-y-8 text-xl text-gray-300 leading-[50px]">

            <p>
              Market4You ເປັນ broker ທີ່ເໝາະສຳລັບມືໃໝ່
              ເນື່ອງຈາກຝາກເງິນຂັ້ນຕ່ຳ
              ແລະ ເປີດບັນຊີງ່າຍ.
            </p>

            <p>
              ມີ Bonus,
              ຮອງຮັບ MT4/MT5
              ແລະ ສາມາດເທຣດ Forex,
              ຄຳ ແລະ Indices ໄດ້.
            </p>

            <p>
              ເໝາະສຳລັບຄົນທີ່ຢາກເລີ່ມ Forex
              ດ້ວຍທຶນນ້ອຍ.
            </p>

          </div>

        </div>

      </section>

      {/* PROS CONS */}
      <section className="max-w-7xl mx-auto px-6 pb-24">

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-[#07151f] rounded-[40px] p-10 border border-green-500/20">

            <h2 className="text-4xl font-black text-green-400 mb-10">
              ຂໍ້ດີ
            </h2>

            <div className="space-y-6 text-xl text-gray-300 leading-10">
              <p>✅ ຝາກເລີ່ມຕົ້ນຕ່ຳ</p>
              <p>✅ ມີໂບນັດ</p>
              <p>✅ ເໝາະສຳລັບມືໃໝ່</p>
              <p>✅ ໃຊ້ MT4 / MT5 ໄດ້</p>
              <p>✅ ເປີດບັນຊີງ່າຍ</p>
            </div>

          </div>

          <div className="bg-[#1a0f14] rounded-[40px] p-10 border border-red-500/20">

            <h2 className="text-4xl font-black text-red-400 mb-10">
              ຂໍ້ເສຍ
            </h2>

            <div className="space-y-6 text-xl text-gray-300 leading-10">
              <p>❌ Spread ບາງຄູ່ສູງ</p>
              <p>❌ Execution ບໍ່ໄວເທົ່າ IUX</p>
              <p>❌ ມືໃໝ່ຄວນຝຶກ demo ກ່ອນ</p>
            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 pb-32">

        <div className="relative overflow-hidden rounded-[50px] bg-gradient-to-r from-purple-500 to-pink-400 p-16 text-center">

          <div className="absolute inset-0 opacity-20">
            <div className="absolute left-0 top-0 w-96 h-96 bg-white blur-[140px]" />
          </div>

          <div className="relative z-10">

            <h2 className="text-6xl font-black mb-8">
              ເປີດບັນຊີ Market4You
            </h2>

            <p className="text-2xl leading-10 max-w-3xl mx-auto mb-12 text-white/90">
              ສະໝັກຜ່ານລິ້ງນີ້
              ເພື່ອຮັບ support ແລະ rebate
              ສຳລັບຄົນລາວ
            </p>

            <a
              href="https://account.markets4you.online/en/user-registration/?affid=bpblvtj"
              target="_blank"
              className="bg-black hover:scale-105 transition inline-block text-white px-12 py-6 rounded-3xl text-2xl font-black"
            >
              ສະໝັກ Market4You →
            </a>

          </div>

        </div>

      </section>

    </main>
  );
}