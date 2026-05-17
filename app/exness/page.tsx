export default function ExnessPage() {
  return (
    <main className="bg-[#050816] text-white min-h-screen overflow-hidden">

      {/* HERO */}
      <section className="relative max-w-7xl mx-auto px-6 pt-24 pb-24">

        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-72 h-72 bg-yellow-400 blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500 blur-[150px]" />
        </div>

        <div className="relative z-10">

          <div className="inline-flex items-center gap-3 bg-yellow-500/10 border border-yellow-500/20 text-yellow-300 px-5 py-2 rounded-full mb-8">
            <span>⚡</span>
            <span className="font-bold">
              ຣີວິວ Exness ສຳລັບຄົນລາວ 2026
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-tight max-w-5xl mb-8">
            Exness ດີບໍ?
            <br />
            ໂບກເກີ້ສາຍຖອນໄວ
            ແລະ Spread ຕ່ຳ
          </h1>

          <p className="text-gray-300 text-xl leading-10 max-w-3xl mb-12">
            ຖອນໄວ • Spread ຕ່ຳ • Leverage ສູງ •
            ເໝາະສຳລັບ Scalping ແລະ Gold Trading
          </p>

          <div className="flex flex-wrap gap-5">

            <a
              href="https://one.exnessonelink.com/boarding/sign-up/a/ocvhdpugv1?lng=th"
              target="_blank"
              className="bg-yellow-400 hover:bg-yellow-300 transition text-black px-10 py-5 rounded-3xl font-black text-xl shadow-2xl"
            >
              ສະໝັກ Exness →
            </a>

            <a
              href="#review"
              className="border border-white/10 hover:border-yellow-400 transition px-10 py-5 rounded-3xl font-bold text-xl bg-white/5"
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
            <p className="text-gray-400 mb-3">Spread</p>
            <h3 className="text-4xl font-black text-yellow-400">
              0.0 pip
            </h3>
          </div>

          <div className="bg-[#0f172a] rounded-[32px] p-8 border border-white/5">
            <p className="text-gray-400 mb-3">Leverage</p>
            <h3 className="text-4xl font-black text-yellow-400">
              ບໍ່ຈຳກັດ
            </h3>
          </div>

          <div className="bg-[#0f172a] rounded-[32px] p-8 border border-white/5">
            <p className="text-gray-400 mb-3">Platform</p>
            <h3 className="text-4xl font-black text-yellow-400">
              MT4/MT5
            </h3>
          </div>

          <div className="bg-[#0f172a] rounded-[32px] p-8 border border-white/5">
            <p className="text-gray-400 mb-3">ຄະແນນ</p>
            <h3 className="text-4xl font-black text-yellow-400">
              9.5/10
            </h3>
          </div>

        </div>

      </section>

      {/* PREMIUM CARD */}
      <section className="max-w-7xl mx-auto px-6 pb-24">

        <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-r from-[#f59e0b] to-[#ea580c] p-10 shadow-2xl">

          <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl" />

          <div className="relative flex flex-col md:flex-row items-center justify-between gap-10">

            <div className="flex items-center gap-6">

              <div className="bg-white rounded-[28px] p-4">
                <img
                  src="/exness-logo.png"
                  alt="Exness"
                  className="w-24 h-24 object-contain"
                />
              </div>

              <div>

                <div className="inline-block bg-white/20 text-white px-4 py-2 rounded-full mb-4">
                  ⚡ ຖອນໄວສຳລັບ Trader ລາວ
                </div>

                <h2 className="text-5xl font-black mb-4 text-black">
                  Exness
                </h2>

                <p className="text-black/80 text-xl leading-10 max-w-2xl">
                  Spread ຕ່ຳ • ຖອນໄວ • ເໝາະສາຍ Scalping •
                  ຮອງຮັບ MT4/MT5
                </p>

              </div>

            </div>

            <a
              href="https://one.exnessonelink.com/boarding/sign-up/a/ocvhdpugv1?lng=th"
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

          <h2 className="text-5xl font-black mb-10 text-yellow-400">
            Exness ດີບໍ?
          </h2>

          <div className="space-y-8 text-xl text-gray-300 leading-[50px]">

            <p>
              Exness ເປັນ broker ທີ່ຂຶ້ນຊື່ເລື່ອງ
              Spread ຕ່ຳ ແລະ ຖອນໄວ.
            </p>

            <p>
              ເໝາະສຳລັບສາຍ Scalping,
              Gold Trading ແລະ Forex Trading.
            </p>

            <p>
              ມີ MT4/MT5, leverage ສູງ
              ແລະ instant withdrawal
              ທີ່ trader ລາວນິຍົມ.
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
              <p>✅ Spread ຕ່ຳ</p>
              <p>✅ ຖອນໄວ</p>
              <p>✅ Leverage ສູງ</p>
              <p>✅ ຮອງຮັບ MT4 / MT5</p>
              <p>✅ ເໝາະສາຍ Scalping</p>
              <p>✅ Swap Free</p>
            </div>

          </div>

          <div className="bg-[#1a0f14] rounded-[40px] p-10 border border-red-500/20">

            <h2 className="text-4xl font-black text-red-400 mb-10">
              ຂໍ້ເສຍ
            </h2>

            <div className="space-y-6 text-xl text-gray-300 leading-10">
              <p>❌ Leverage ສູງອາດສ່ຽງ</p>
              <p>❌ ບາງບັນຊີມີ commission</p>
              <p>❌ ມືໃໝ່ຄວນຈັດການ Risk</p>
            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 pb-32">

        <div className="relative overflow-hidden rounded-[50px] bg-gradient-to-r from-yellow-500 to-orange-400 p-16 text-center">

          <div className="absolute inset-0 opacity-20">
            <div className="absolute left-0 top-0 w-96 h-96 bg-white blur-[140px]" />
          </div>

          <div className="relative z-10">

            <h2 className="text-6xl font-black mb-8 text-black">
              ເປີດບັນຊີ Exness
            </h2>

            <p className="text-2xl leading-10 max-w-3xl mx-auto mb-12 text-black/80">
              ສະໝັກຜ່ານລິ້ງນີ້
              ເພື່ອຮັບ rebate ແລະ support
              ສຳລັບຄົນລາວ
            </p>

            <a
              href="https://one.exnessonelink.com/boarding/sign-up/a/ocvhdpugv1?lng=th"
              target="_blank"
              className="bg-black hover:scale-105 transition inline-block text-white px-12 py-6 rounded-3xl text-2xl font-black"
            >
              ສະໝັກ Exness →
            </a>

          </div>

        </div>

      </section>

    </main>
  );
}