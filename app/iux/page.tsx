export default function IUXPage() {
  return (
    <main className="bg-[#050816] text-white min-h-screen overflow-hidden">

      {/* HERO */}
      <section className="relative max-w-7xl mx-auto px-6 pt-24 pb-24">

        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-400 blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 blur-[150px]" />
        </div>

        <div className="relative z-10">

          <div className="inline-flex items-center gap-3 bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 px-5 py-2 rounded-full mb-8">
            <span>🚀</span>
            <span className="font-bold">
              ຣີວິວ IUX ສຳລັບຄົນລາວ 2026
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-tight max-w-5xl mb-8">
            IUX ດີບໍ?
            <br />
            ໂບກເກີ້ສາຍ Spread ຕ່ຳ
          </h1>

          <p className="text-gray-300 text-xl leading-10 max-w-3xl mb-12">
            Execution ໄວ • Spread ຕ່ຳ • Scalping ລື່ນ •
            ເໝາະສຳລັບ Gold Trading ແລະ Day Trade
          </p>

          <div className="flex flex-wrap gap-5">

            <a
              href="https://iux.com/en/register?code=EPs5nw6M"
              target="_blank"
              className="bg-cyan-400 hover:bg-cyan-300 transition text-black px-10 py-5 rounded-3xl font-black text-xl shadow-2xl"
            >
              ສະໝັກ IUX →
            </a>

            <a
              href="#review"
              className="border border-white/10 hover:border-cyan-400 transition px-10 py-5 rounded-3xl font-bold text-xl bg-white/5"
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
            <h3 className="text-4xl font-black text-cyan-400">
              0.2 pip
            </h3>
          </div>

          <div className="bg-[#0f172a] rounded-[32px] p-8 border border-white/5">
            <p className="text-gray-400 mb-3">Leverage</p>
            <h3 className="text-4xl font-black text-cyan-400">
              1:3000
            </h3>
          </div>

          <div className="bg-[#0f172a] rounded-[32px] p-8 border border-white/5">
            <p className="text-gray-400 mb-3">ຝາກເລີ່ມຕົ້ນ</p>
            <h3 className="text-4xl font-black text-cyan-400">
              $10
            </h3>
          </div>

          <div className="bg-[#0f172a] rounded-[32px] p-8 border border-white/5">
            <p className="text-gray-400 mb-3">ຄະແນນ</p>
            <h3 className="text-4xl font-black text-cyan-400">
              9.3/10
            </h3>
          </div>

        </div>

      </section>

      {/* PREMIUM CARD */}
      <section className="max-w-7xl mx-auto px-6 pb-24">

        <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-r from-cyan-500 to-blue-600 p-10 shadow-2xl">

          <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl" />

          <div className="relative flex flex-col md:flex-row items-center justify-between gap-10">

            <div className="flex items-center gap-6">

              <div className="bg-white rounded-[28px] p-4">
                <img
                  src="/iux-logo.png"
                  alt="IUX"
                  className="w-24 h-24 object-contain"
                />
              </div>

              <div>

                <div className="inline-block bg-white/20 text-white px-4 py-2 rounded-full mb-4">
                  🚀 ສາຍ Scalping ນິຍົມ
                </div>

                <h2 className="text-5xl font-black mb-4">
                  IUX
                </h2>

                <p className="text-white/80 text-xl leading-10 max-w-2xl">
                  Spread ຕ່ຳ • Execution ໄວ •
                  ເໝາະສຳລັບ Gold Trading ແລະ Day Trade
                </p>

              </div>

            </div>

            <a
              href="https://iux.com/en/register?code=EPs5nw6M"
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

          <h2 className="text-5xl font-black mb-10 text-cyan-400">
            IUX ດີບໍ?
          </h2>

          <div className="space-y-8 text-xl text-gray-300 leading-[50px]">

            <p>
              IUX ເປັນ broker ທີ່ກຳລັງນິຍົມໃນລາວ
              ເນື່ອງຈາກ Spread ຕ່ຳ
              ແລະ Execution ໄວ.
            </p>

            <p>
              ເໝາະສຳລັບ Scalping,
              Gold Trading,
              Forex Trading ແລະ Day Trade.
            </p>

            <p>
              ມີ Rebate ດີ,
              Support ສຳລັບຄົນລາວ
              ແລະ MT5 ທີ່ລື່ນ.
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
              <p>✅ Execution ໄວ</p>
              <p>✅ Scalping ລື່ນ</p>
              <p>✅ Leverage ສູງ</p>
              <p>✅ MT5 ລື່ນ</p>
              <p>✅ Rebate ດີ</p>
            </div>

          </div>

          <div className="bg-[#1a0f14] rounded-[40px] p-10 border border-red-500/20">

            <h2 className="text-4xl font-black text-red-400 mb-10">
              ຂໍ້ເສຍ
            </h2>

            <div className="space-y-6 text-xl text-gray-300 leading-10">
              <p>❌ ຍັງບໍ່ນິຍົມເທົ່າ XM</p>
              <p>❌ Leverage ສູງອາດສ່ຽງ</p>
              <p>❌ ມືໃໝ່ຄວນໃຊ້ lot ນ້ອຍ</p>
            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 pb-32">

        <div className="relative overflow-hidden rounded-[50px] bg-gradient-to-r from-cyan-400 to-blue-500 p-16 text-center">

          <div className="absolute inset-0 opacity-20">
            <div className="absolute left-0 top-0 w-96 h-96 bg-white blur-[140px]" />
          </div>

          <div className="relative z-10">

            <h2 className="text-6xl font-black mb-8">
              ເປີດບັນຊີ IUX
            </h2>

            <p className="text-2xl leading-10 max-w-3xl mx-auto mb-12 text-white/90">
              ສະໝັກຜ່ານລິ້ງນີ້
              ເພື່ອຮັບ rebate ແລະ support
              ສຳລັບຄົນລາວ
            </p>

            <a
              href="https://iux.com/en/register?code=EPs5nw6M"
              target="_blank"
              className="bg-black hover:scale-105 transition inline-block text-white px-12 py-6 rounded-3xl text-2xl font-black"
            >
              ສະໝັກ IUX →
            </a>

          </div>

        </div>

      </section>

    </main>
  );
}