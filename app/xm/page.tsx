export default function XMPage() {
  return (
    <main className="bg-[#050816] text-white min-h-screen overflow-hidden">

      {/* HERO */}
      <section className="relative max-w-7xl mx-auto px-6 pt-24 pb-24">

        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400 blur-[150px]" />
        </div>

        <div className="relative z-10">

          <div className="inline-flex items-center gap-3 bg-blue-500/10 border border-blue-500/20 text-blue-300 px-5 py-2 rounded-full mb-8">
            <span>🔥</span>
            <span className="font-bold">
              ຣີວິວ XM ສຳລັບຄົນລາວ 2026
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-tight max-w-5xl mb-8">
            XM ດີບໍ?
            <br />
            ໂບກເກີ້ທີ່ຄົນລາວນິຍົມຫຼາຍ
          </h1>

          <p className="text-gray-300 text-xl leading-10 max-w-3xl mb-12">
            ຝາກຖອນງ່າຍ • ມີ Bonus • ໃຊ້ MT4/MT5 •
            ເໝາະສຳລັບມືໃໝ່ ແລະ trader ສາຍ Scalping
          </p>

          <div className="flex flex-wrap gap-5">

            <a
              href="https://affs.click/wLl9B"
              target="_blank"
              className="bg-blue-600 hover:bg-blue-500 transition text-white px-10 py-5 rounded-3xl font-black text-xl shadow-2xl"
            >
              ສະໝັກ XM →
            </a>

            <a
              href="#review"
              className="border border-white/10 hover:border-blue-400 transition px-10 py-5 rounded-3xl font-bold text-xl bg-white/5"
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
            <p className="text-gray-400 mb-3">ໂບນັດ</p>
            <h3 className="text-4xl font-black text-blue-400">
              ມີ
            </h3>
          </div>

          <div className="bg-[#0f172a] rounded-[32px] p-8 border border-white/5">
            <p className="text-gray-400 mb-3">Leverage</p>
            <h3 className="text-4xl font-black text-blue-400">
              1:1000
            </h3>
          </div>

          <div className="bg-[#0f172a] rounded-[32px] p-8 border border-white/5">
            <p className="text-gray-400 mb-3">ຝາກເລີ່ມຕົ້ນ</p>
            <h3 className="text-4xl font-black text-blue-400">
              $5
            </h3>
          </div>

          <div className="bg-[#0f172a] rounded-[32px] p-8 border border-white/5">
            <p className="text-gray-400 mb-3">ຄະແນນ</p>
            <h3 className="text-4xl font-black text-blue-400">
              9.1/10
            </h3>
          </div>

        </div>

      </section>

      {/* PREMIUM CARD */}
      <section className="max-w-7xl mx-auto px-6 pb-24">

        <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-r from-[#991b1b] to-[#dc2626] p-10 shadow-2xl">

          <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl" />

          <div className="relative flex flex-col md:flex-row items-center justify-between gap-10">

            <div className="flex items-center gap-6">

              <div className="bg-white rounded-[28px] p-4">
                <img
                  src="/xm-logo.png"
                  alt="XM"
                  className="w-24 h-24 object-contain"
                />
              </div>

              <div>

                <div className="inline-block bg-white/20 text-white px-4 py-2 rounded-full mb-4">
                  ⭐ ອັນດັບ 1 ສຳລັບ Trader ລາວ
                </div>

                <h2 className="text-5xl font-black mb-4">
                  XM Global
                </h2>

                <p className="text-white/80 text-xl leading-10 max-w-2xl">
                  ຝາກຖອນຜ່ານທະນາຄານລາວ • ມີ Bonus •
                  ຮອງຮັບ MT4/MT5 • ເໝາະສຳລັບມືໃໝ່
                </p>

              </div>

            </div>

            <a
              href="https://affs.click/wLl9B"
              target="_blank"
              className="bg-blue-600 hover:bg-blue-500 transition text-white px-12 py-6 rounded-3xl text-2xl font-black shadow-2xl"
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

          <h2 className="text-5xl font-black mb-10 text-blue-400">
            XM ດີບໍ?
          </h2>

          <div className="space-y-8 text-xl text-gray-300 leading-[50px]">

            <p>
              XM ແມ່ນ Forex Broker ທີ່ຄົນລາວນິຍົມຫຼາຍ
              ເນື່ອງຈາກມີ Bonus, support ດີ
              ແລະ ຝາກຖອນສະດວກ.
            </p>

            <p>
              ເໝາະສຳລັບມືໃໝ່ ເພາະເປີດບັນຊີງ່າຍ,
              ຝາກເງິນຂັ້ນຕໍ່າ ແລະ ໃຊ້ MT4/MT5 ໄດ້.
            </p>

            <p>
              ສາມາດເທຣດ Forex, ຄຳ, Crypto,
              Indices ແລະ ນ້ຳມັນ ໄດ້ໃນ broker ດຽວ.
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
              <p>✅ ມີໂບນັດສຳລັບມືໃໝ່</p>
              <p>✅ ຄົນລາວນິຍົມຫຼາຍ</p>
              <p>✅ ຝາກຖອນງ່າຍ</p>
              <p>✅ ຮອງຮັບ MT4 / MT5</p>
              <p>✅ ເລີ່ມຕົ້ນເງິນນ້ອຍໄດ້</p>
            </div>

          </div>

          <div className="bg-[#1a0f14] rounded-[40px] p-10 border border-red-500/20">

            <h2 className="text-4xl font-black text-red-400 mb-10">
              ຂໍ້ເສຍ
            </h2>

            <div className="space-y-6 text-xl text-gray-300 leading-10">
              <p>❌ Spread ບາງຄູ່ສູງ</p>
              <p>❌ Scalping ບໍ່ໄວເທົ່າ Exness</p>
              <p>❌ ບາງ Bonus ຖອນບໍ່ໄດ້</p>
            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 pb-32">

        <div className="relative overflow-hidden rounded-[50px] bg-gradient-to-r from-blue-600 to-cyan-400 p-16 text-center">

          <div className="absolute inset-0 opacity-20">
            <div className="absolute left-0 top-0 w-96 h-96 bg-white blur-[140px]" />
          </div>

          <div className="relative z-10">

            <h2 className="text-6xl font-black mb-8">
              ເປີດບັນຊີ XM
            </h2>

            <p className="text-2xl leading-10 max-w-3xl mx-auto mb-12">
              ສະໝັກຜ່ານລິ້ງນີ້
              ເພື່ອຮັບ support ແລະ rebate
              ສຳລັບຄົນລາວ
            </p>

            <a
              href="https://affs.click/wLl9B"
              target="_blank"
              className="bg-black hover:scale-105 transition inline-block text-white px-12 py-6 rounded-3xl text-2xl font-black"
            >
              ສະໝັກ XM →
            </a>

          </div>

        </div>

      </section>

    </main>
  );
}