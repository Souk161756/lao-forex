export default function XMPage() {
  return (
    <main className="bg-black text-white min-h-screen">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 pt-24 pb-20">

        <div className="inline-flex items-center gap-3 bg-blue-500/10 border border-blue-500/20 text-blue-400 px-5 py-2 rounded-full mb-8">
          <span>🔥</span>
          <span className="font-bold">
            XM Review Laos 2026
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8 max-w-5xl">
          XM ດີບໍ?
          ຣີວິວ XM ສໍາລັບຄົນລາວ
        </h1>

        <p className="text-gray-300 text-xl leading-10 max-w-4xl mb-12">
          XM ເປັນ Forex Broker ທີ່ຄົນລາວນິຍົມຫຼາຍ.
          ມີ bonus, support ດີ, ຝາກຖອນງ່າຍ
          ແລະ ເໝາະສໍາລັບມືໃໝ່.
        </p>

        <div className="flex flex-wrap gap-5">

          <a
            href="PASTE_YOUR_XM_LINK"
            target="_blank"
            className="bg-blue-500 hover:bg-blue-400 transition text-white px-10 py-5 rounded-2xl font-black text-xl"
          >
            ເປີດບັນຊີ XM
          </a>

          <a
            href="#review"
            className="border border-white/10 hover:border-blue-400 transition px-10 py-5 rounded-2xl font-bold text-xl"
          >
            ອ່ານຣີວິວ
          </a>

        </div>

      </section>

      {/* STATS */}
      <section className="max-w-7xl mx-auto px-6 pb-24">

        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-[#0f172a] rounded-[32px] p-8 border border-white/5">
            <p className="text-gray-400 mb-3">Bonus</p>
            <h3 className="text-4xl font-black text-blue-400">
              Yes
            </h3>
          </div>

          <div className="bg-[#0f172a] rounded-[32px] p-8 border border-white/5">
            <p className="text-gray-400 mb-3">Leverage</p>
            <h3 className="text-4xl font-black text-blue-400">
              1:1000
            </h3>
          </div>

          <div className="bg-[#0f172a] rounded-[32px] p-8 border border-white/5">
            <p className="text-gray-400 mb-3">Deposit</p>
            <h3 className="text-4xl font-black text-blue-400">
              $5
            </h3>
          </div>

          <div className="bg-[#0f172a] rounded-[32px] p-8 border border-white/5">
            <p className="text-gray-400 mb-3">Rating</p>
            <h3 className="text-4xl font-black text-blue-400">
              9.1/10
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

          <h2 className="text-5xl font-black mb-10 text-blue-400">
            XM ດີບໍ?
          </h2>

          <div className="space-y-8 text-lg text-gray-300 leading-10">

            <p>
              XM ເປັນ broker ທີ່ຄົນລາວນິຍົມຫຼາຍ
              ເນື່ອງຈາກ bonus ດີ ແລະ support ດີ.
            </p>

            <p>
              ເໝາະສໍາລັບມືໃໝ່ ເພາະ deposit ຂັ້ນຕໍ່າ
              ແລະ ໃຊ້ MT4/MT5 ໄດ້ງ່າຍ.
            </p>

            <p>
              ນອກຈາກນັ້ນ XM ຍັງມີ forex,
              gold, crypto ແລະ indices ໃຫ້ເທຣດ.
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
              <p>✅ ມີ bonus</p>
              <p>✅ Support ດີ</p>
              <p>✅ ເໝາະສໍາລັບມືໃໝ່</p>
              <p>✅ ຝາກເງິນຂັ້ນຕໍ່າ</p>
              <p>✅ ນິຍົມໃນລາວ</p>
              <p>✅ MT4 / MT5</p>
            </div>

          </div>

          <div className="bg-[#0f172a] rounded-[40px] p-10 border border-red-500/20">

            <h2 className="text-4xl font-black text-red-400 mb-10">
              ຂໍ້ເສຍ
            </h2>

            <div className="space-y-6 text-lg text-gray-300">
              <p>❌ Spread ສູງກວ່າ IUX</p>
              <p>❌ Scalping ອາດບໍ່ໄວເທົ່າ Exness</p>
              <p>❌ ບາງ bonus ຖອນບໍ່ໄດ້</p>
            </div>

          </div>

        </div>

      </section>

      {/* ACCOUNT TYPES */}
      <section className="max-w-7xl mx-auto px-6 pb-24">

        <div className="mb-12">

          <p className="text-blue-400 uppercase tracking-widest text-sm font-bold mb-3">
            Accounts
          </p>

          <h2 className="text-5xl font-black">
            ປະເພດບັນຊີ XM
          </h2>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-[#0f172a] rounded-[32px] p-10 border border-white/5">

            <h3 className="text-3xl font-black mb-6 text-blue-400">
              Micro
            </h3>

            <div className="space-y-4 text-gray-300 text-lg">
              <p>Lot ນ້ອຍ</p>
              <p>ເໝາະສໍາລັບມືໃໝ່</p>
              <p>Deposit ຕໍ່າ</p>
            </div>

          </div>

          <div className="bg-[#0f172a] rounded-[32px] p-10 border border-white/5">

            <h3 className="text-3xl font-black mb-6 text-blue-400">
              Standard
            </h3>

            <div className="space-y-4 text-gray-300 text-lg">
              <p>ນິຍົມທີ່ສຸດ</p>
              <p>ເໝາະສໍາລັບ Forex</p>
              <p>ໃຊ້ MT4/MT5</p>
            </div>

          </div>

          <div className="bg-[#0f172a] rounded-[32px] p-10 border border-white/5">

            <h3 className="text-3xl font-black mb-6 text-blue-400">
              Ultra Low
            </h3>

            <div className="space-y-4 text-gray-300 text-lg">
              <p>Spread ຕໍ່າ</p>
              <p>Execution ໄວ</p>
              <p>Scalping ໄດ້</p>
            </div>

          </div>

        </div>

      </section>

      {/* BONUS */}
      <section className="max-w-7xl mx-auto px-6 pb-24">

        <div className="bg-[#0f172a] rounded-[40px] p-12 border border-blue-500/20">

          <h2 className="text-5xl font-black mb-10 text-blue-400">
            Bonus ແລະ Promotion
          </h2>

          <div className="space-y-8 text-lg text-gray-300 leading-10">

            <p>
              XM ຂຶ້ນຊື່ເລື່ອງ bonus ແລະ promotion
              ສໍາລັບ trader ມືໃໝ່.
            </p>

            <p>
              ບາງຊ່ວງອາດມີ:
            </p>

            <div className="space-y-4">
              <p>🎁 Welcome Bonus</p>
              <p>🎁 Deposit Bonus</p>
              <p>🎁 Loyalty Program</p>
            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 pb-32">

        <div className="bg-gradient-to-r from-blue-500 to-cyan-400 rounded-[50px] p-16 text-center text-white">

          <h2 className="text-6xl font-black mb-8">
            ເປີດບັນຊີ XM
          </h2>

          <p className="text-2xl max-w-3xl mx-auto mb-12 leading-10">
            ສະໝັກ XM ຜ່ານ link ດ້ານລຸ່ມ
            ເພື່ອຮັບ support ແລະ rebate.
          </p>

          <a
            href="https://affs.click/wLl9B"
            target="_blank"
            className="bg-black hover:scale-105 transition text-white px-12 py-6 rounded-3xl text-2xl font-black inline-block"
          >
            ເປີດບັນຊີ XM
          </a>

        </div>

      </section>

    </main>
  );
}