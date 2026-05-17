export default function HFMPage() {
  return (
    <main className="bg-black text-white min-h-screen">

      <section className="max-w-7xl mx-auto px-6 pt-24 pb-20">

        <div className="inline-flex items-center gap-3 bg-red-500/10 border border-red-500/20 text-red-400 px-5 py-2 rounded-full mb-8">
          <span>🔥</span>
          <span className="font-bold">
            HFM Review Laos 2026
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8 max-w-5xl">
          HFM ດີບໍ?
          ຣີວິວ HFM ສໍາລັບຄົນລາວ
        </h1>

        <p className="text-gray-300 text-xl leading-10 max-w-4xl mb-12">
          HFM ເປັນ broker ທີ່ມີ bonus ແລະ leverage ສູງ.
          ເໝາະສໍາລັບ forex, gold ແລະ indices trading.
        </p>

        <a
          href="PASTE_YOUR_HFM_LINK"
          target="_blank"
          className="bg-red-500 hover:bg-red-400 transition text-white px-10 py-5 rounded-2xl font-black text-xl inline-block"
        >
          ເປີດບັນຊີ HFM
        </a>

      </section>

      <section className="max-w-7xl mx-auto px-6 pb-24">

        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-[#0f172a] rounded-[32px] p-8">
            <p className="text-gray-400 mb-3">Bonus</p>
            <h3 className="text-4xl font-black text-red-400">
              Yes
            </h3>
          </div>

          <div className="bg-[#0f172a] rounded-[32px] p-8">
            <p className="text-gray-400 mb-3">Leverage</p>
            <h3 className="text-4xl font-black text-red-400">
              1:2000
            </h3>
          </div>

          <div className="bg-[#0f172a] rounded-[32px] p-8">
            <p className="text-gray-400 mb-3">Deposit</p>
            <h3 className="text-4xl font-black text-red-400">
              $5
            </h3>
          </div>

          <div className="bg-[#0f172a] rounded-[32px] p-8">
            <p className="text-gray-400 mb-3">Rating</p>
            <h3 className="text-4xl font-black text-red-400">
              9/10
            </h3>
          </div>

        </div>

      </section>

      <section className="max-w-7xl mx-auto px-6 pb-32">

        <div className="bg-gradient-to-r from-red-500 to-orange-400 rounded-[50px] p-16 text-center text-white">

          <h2 className="text-6xl font-black mb-8">
            ເປີດບັນຊີ HFM
          </h2>

          <a
            href="https://register.hfm.com/sv/en/new-live-account/?refid=30421077"
            target="_blank"
            className="bg-black text-white px-12 py-6 rounded-3xl text-2xl font-black inline-block"
          >
            ເປີດບັນຊີ HFM
          </a>

        </div>

      </section>

    </main>
  );
}