export default function ExnessPage() {
  return (
    <main className="bg-black text-white min-h-screen">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 pt-24 pb-20">

        <div className="inline-flex items-center gap-3 bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 px-5 py-2 rounded-full mb-8">
          <span>⚡</span>
          <span className="font-bold">
            Exness Review Laos 2026
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8 max-w-5xl">
          Exness ດີບໍ?
          ຣີວິວ Exness ສໍາລັບຄົນລາວ
        </h1>

        <p className="text-gray-300 text-xl leading-10 max-w-4xl mb-12">
          Exness ເປັນ Forex Broker ທີ່ຄົນລາວນິຍົມຫຼາຍ.
          ຂຶ້ນຊື່ເລື່ອງ spread ຕໍ່າ,
          ຝາກຖອນໄວ ແລະ leverage ສູງ. 
        </p>

        <div className="flex flex-wrap gap-5">

          <a
            href="PASTE_YOUR_EXNESS_LINK"
            target="_blank"
            className="bg-yellow-400 hover:bg-yellow-300 transition text-black px-10 py-5 rounded-2xl font-black text-xl"
          >
            ເປີດບັນຊີ Exness
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
              0.0 pip
            </h3>
          </div>

          <div className="bg-[#0f172a] rounded-[32px] p-8 border border-white/5">
            <p className="text-gray-400 mb-3">Leverage</p>
            <h3 className="text-4xl font-black text-yellow-400">
              Unlimited
            </h3>
          </div>

          <div className="bg-[#0f172a] rounded-[32px] p-8 border border-white/5">
            <p className="text-gray-400 mb-3">Platform</p>
            <h3 className="text-4xl font-black text-yellow-400">
              MT4/MT5
            </h3>
          </div>

          <div className="bg-[#0f172a] rounded-[32px] p-8 border border-white/5">
            <p className="text-gray-400 mb-3">Rating</p>
            <h3 className="text-4xl font-black text-yellow-400">
              9.5/10
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
            Exness ດີບໍ?
          </h2>

          <div className="space-y-8 text-lg text-gray-300 leading-10">

            <p>
              Exness ເປັນ broker ທີ່ຂຶ້ນຊື່ເລື່ອງ
              ຝາກຖອນໄວ ແລະ spread ຕໍ່າ.
            </p>

            <p>
              ເໝາະສໍາລັບ scalping,
              gold trading ແລະ forex trading.
            </p>

            <p>
              Exness ຮອງຮັບ MT4 ແລະ MT5
              ພ້ອມ leverage ສູງ
              ແລະ instant withdrawal. 
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
              <p>✅ ຝາກຖອນໄວ</p>
              <p>✅ Leverage ສູງ</p>
              <p>✅ MT4 / MT5</p>
              <p>✅ Scalping ໄດ້ດີ</p>
              <p>✅ Swap Free</p>
            </div>

          </div>

          <div className="bg-[#0f172a] rounded-[40px] p-10 border border-red-500/20">

            <h2 className="text-4xl font-black text-red-400 mb-10">
              ຂໍ້ເສຍ
            </h2>

            <div className="space-y-6 text-lg text-gray-300">
              <p>❌ leverage ສູງອາດສ່ຽງ</p>
              <p>❌ ບາງ account ມີ commission</p>
              <p>❌ ມືໃໝ່ຄວນຈັດການ risk ໃຫ້ດີ</p>
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
            ປະເພດບັນຊີ Exness
          </h2>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-[#0f172a] rounded-[32px] p-10 border border-white/5">

            <h3 className="text-3xl font-black mb-6 text-yellow-400">
              Standard
            </h3>

            <div className="space-y-4 text-gray-300 text-lg">
              <p>Deposit ຕໍ່າ</p>
              <p>Spread ດີ</p>
              <p>ເໝາະສໍາລັບມືໃໝ່</p>
            </div>

          </div>

          <div className="bg-[#0f172a] rounded-[32px] p-10 border border-white/5">

            <h3 className="text-3xl font-black mb-6 text-yellow-400">
              Raw Spread
            </h3>

            <div className="space-y-4 text-gray-300 text-lg">
              <p>Spread ຕໍ່າຫຼາຍ</p>
              <p>Scalping ໄດ້ດີ</p>
              <p>ມີ commission</p>
            </div>

          </div>

          <div className="bg-[#0f172a] rounded-[32px] p-10 border border-white/5">

            <h3 className="text-3xl font-black mb-6 text-yellow-400">
              Pro
            </h3>

            <div className="space-y-4 text-gray-300 text-lg">
              <p>Execution ໄວ</p>
              <p>ເໝາະສໍາລັບ Pro Trader</p>
              <p>Spread ຕໍ່າ</p>
            </div>

          </div>

        </div>

      </section>

      {/* WITHDRAW */}
      <section className="max-w-7xl mx-auto px-6 pb-24">

        <div className="bg-[#0f172a] rounded-[40px] p-12 border border-yellow-500/20">

          <h2 className="text-5xl font-black mb-10 text-yellow-400">
            ຝາກຖອນ Exness
          </h2>

          <div className="space-y-8 text-lg text-gray-300 leading-10">

            <p>
              Exness ຂຶ້ນຊື່ເລື່ອງ instant withdrawal
              ແລະ ຝາກຖອນໄວ. 
            </p>

            <div className="space-y-4">
              <p>💳 Bank Transfer</p>
              <p>📱 E-Wallet</p>
              <p>🏦 Online Banking</p>
              <p>⚡ Instant Withdrawal</p>
            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 pb-32">

        <div className="bg-gradient-to-r from-yellow-500 to-orange-400 rounded-[50px] p-16 text-center text-black">

          <h2 className="text-6xl font-black mb-8">
            ເປີດບັນຊີ Exness
          </h2>

          <p className="text-2xl max-w-3xl mx-auto mb-12 leading-10">
            ສະໝັກ Exness ຜ່ານ link ດ້ານລຸ່ມ
            ເພື່ອຮັບ rebate ແລະ support.
          </p>

          <a
            href="https://one.exnessonelink.com/boarding/sign-up/a/ocvhdpugv1?lng=th"
            target="_blank"
            className="bg-black hover:scale-105 transition text-white px-12 py-6 rounded-3xl text-2xl font-black inline-block"
          >
            ເປີດບັນຊີ Exness
          </a>

        </div>

      </section>

    </main>
  );
}