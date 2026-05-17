export default function IUXPage() {
  return (
    <main className="bg-black text-white min-h-screen">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 pt-24 pb-20">

        <div className="inline-block bg-yellow-400 text-black px-6 py-3 rounded-full font-black mb-8">
          IUX REVIEW LAOS
        </div>

        <h1 className="text-6xl md:text-7xl font-black leading-tight mb-8 max-w-5xl">
          ຣີວິວ IUX ສໍາລັບຄົນລາວ
        </h1>

        <p className="text-gray-300 text-xl leading-10 max-w-4xl mb-12">
          IUX ເປັນ Forex Broker ທີ່ spread ຕໍ່າ,
          execution ໄວ ແລະ ເໝາະສໍາລັບ scalping.
        </p>

        <div className="flex flex-wrap gap-5">

          <a
            href="PASTE_YOUR_IUX_LINK"
            target="_blank"
            className="bg-yellow-400 hover:bg-yellow-300 transition text-black px-10 py-5 rounded-2xl font-black text-xl"
          >
            ເປີດບັນຊີ IUX
          </a>

          <a
            href="#review"
            className="border border-white/10 hover:border-yellow-400 transition px-10 py-5 rounded-2xl font-bold text-xl"
          >
            ອ່ານຣີວິວ
          </a>

        </div>

      </section>

      {/* STATS */}
      <section className="max-w-7xl mx-auto px-6 pb-24">

        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-[#0f172a] rounded-[32px] p-8 border border-white/5">
            <p className="text-gray-400 mb-3">Spread</p>
            <h3 className="text-4xl font-black text-yellow-400">
              0.2 pip
            </h3>
          </div>

          <div className="bg-[#0f172a] rounded-[32px] p-8 border border-white/5">
            <p className="text-gray-400 mb-3">Leverage</p>
            <h3 className="text-4xl font-black text-yellow-400">
              1:3000
            </h3>
          </div>

          <div className="bg-[#0f172a] rounded-[32px] p-8 border border-white/5">
            <p className="text-gray-400 mb-3">Deposit</p>
            <h3 className="text-4xl font-black text-yellow-400">
              $10
            </h3>
          </div>

          <div className="bg-[#0f172a] rounded-[32px] p-8 border border-white/5">
            <p className="text-gray-400 mb-3">Rating</p>
            <h3 className="text-4xl font-black text-yellow-400">
              9.3/10
            </h3>
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
            IUX ດີບໍ?
          </h2>

          <div className="space-y-8 text-lg text-gray-300 leading-10">

            <p>
              IUX ເປັນ broker ທີ່ກໍາລັງນິຍົມໃນລາວ
              ເນື່ອງຈາກ spread ຕໍ່າ ແລະ execution ໄວ.
            </p>

            <p>
              ເໝາະສໍາລັບ scalping, gold trading,
              forex trading ແລະ day trade.
            </p>

            <p>
              ນອກຈາກນັ້ນ IUX ຍັງມີ rebate ດີ
              ແລະ support ສໍາລັບຄົນລາວ.
            </p>

          </div>

        </div>

      </section>

      {/* PROS CONS */}
      <section className="max-w-7xl mx-auto px-6 pb-24">

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-[#0f172a] rounded-[40px] p-10 border border-green-500/20">

            <h2 className="text-4xl font-black text-green-400 mb-10">
              ຂໍ້ດີ
            </h2>

            <div className="space-y-6 text-lg text-gray-300">
              <p>✅ Spread ຕໍ່າ</p>
              <p>✅ Execution ໄວ</p>
              <p>✅ Scalping ໄດ້ດີ</p>
              <p>✅ Leverage ສູງ</p>
              <p>✅ MT5 ລື່ນ</p>
              <p>✅ Rebate ດີ</p>
            </div>

          </div>

          <div className="bg-[#0f172a] rounded-[40px] p-10 border border-red-500/20">

            <h2 className="text-4xl font-black text-red-400 mb-10">
              ຂໍ້ເສຍ
            </h2>

            <div className="space-y-6 text-lg text-gray-300">
              <p>❌ ຍັງບໍ່ນິຍົມເທົ່າ XM</p>
              <p>❌ leverage ສູງອາດສ່ຽງ</p>
              <p>❌ ມືໃໝ່ຄວນໃຊ້ lot ນ້ອຍ</p>
            </div>

          </div>

        </div>

      </section>

      {/* ACCOUNT TYPES */}
      <section className="max-w-7xl mx-auto px-6 pb-24">

        <div className="mb-12">

          <p className="text-yellow-400 uppercase tracking-widest text-sm font-bold mb-3">
            Accounts
          </p>

          <h2 className="text-5xl font-black">
            ປະເພດບັນຊີ IUX
          </h2>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-[#0f172a] rounded-[32px] p-10 border border-white/5">

            <h3 className="text-3xl font-black mb-6 text-yellow-400">
              Standard
            </h3>

            <div className="space-y-4 text-gray-300 text-lg">
              <p>Spread ຕໍ່າ</p>
              <p>Deposit ຕໍ່າ</p>
              <p>ເໝາະສໍາລັບມືໃໝ່</p>
            </div>

          </div>

          <div className="bg-[#0f172a] rounded-[32px] p-10 border border-white/5">

            <h3 className="text-3xl font-black mb-6 text-yellow-400">
              Standard+
            </h3>

            <div className="space-y-4 text-gray-300 text-lg">
              <p>Execution ໄວ</p>
              <p>Spread ຕໍ່າກວ່າ</p>
              <p>Day Trade ໄດ້ດີ</p>
            </div>

          </div>

          <div className="bg-[#0f172a] rounded-[32px] p-10 border border-white/5">

            <h3 className="text-3xl font-black mb-6 text-yellow-400">
              Raw
            </h3>

            <div className="space-y-4 text-gray-300 text-lg">
              <p>Spread ຕໍ່າຫຼາຍ</p>
              <p>Scalping ໄດ້ດີ</p>
              <p>ມີ commission</p>
            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 pb-32">

        <div className="bg-gradient-to-r from-yellow-500 to-yellow-300 rounded-[50px] p-16 text-center text-black">

          <h2 className="text-6xl font-black mb-8">
            ເປີດບັນຊີ IUX
          </h2>

          <p className="text-2xl max-w-3xl mx-auto mb-12 leading-10">
            ສະໝັກ IUX ຜ່ານ link ດ້ານລຸ່ມ
            ເພື່ອຮັບ rebate ແລະ support.
          </p>

          <a
            href="https://iux.com/en/register?code=EPs5nw6M"
            target="_blank"
            className="bg-black hover:scale-105 transition text-white px-12 py-6 rounded-3xl text-2xl font-black inline-block"
          >
            ເປີດບັນຊີ IUX
          </a>

        </div>

      </section>

    </main>
  );
}