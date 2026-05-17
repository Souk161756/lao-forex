export default function VantagePage() {
  return (
    <main className="bg-black text-white min-h-screen">

      <section className="max-w-7xl mx-auto px-6 pt-24 pb-20">

        <div className="inline-flex items-center gap-3 bg-green-500/10 border border-green-500/20 text-green-400 px-5 py-2 rounded-full mb-8">
          <span>⚡</span>
          <span className="font-bold">
            Vantage Review Laos 2026
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8">
          ຣີວິວ Vantage ສໍາລັບຄົນລາວ
        </h1>

        <p className="text-gray-300 text-xl leading-10 max-w-4xl mb-12">
          Vantage ເປັນ broker ທີ່ execution ໄວ,
          spread ຕໍ່າ ແລະ ເໝາະສໍາລັບ scalping.
        </p>

        <a
          href="PASTE_YOUR_VANTAGE_LINK"
          target="_blank"
          className="bg-green-500 hover:bg-green-400 transition text-black px-10 py-5 rounded-2xl font-black text-xl inline-block"
        >
          ເປີດບັນຊີ Vantage
        </a>

      </section>

      <section className="max-w-7xl mx-auto px-6 pb-24">

        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-[#0f172a] rounded-[32px] p-8">
            <p className="text-gray-400 mb-3">Spread</p>
            <h3 className="text-4xl font-black text-green-400">
              0.0 pip
            </h3>
          </div>

          <div className="bg-[#0f172a] rounded-[32px] p-8">
            <p className="text-gray-400 mb-3">Execution</p>
            <h3 className="text-4xl font-black text-green-400">
              Fast
            </h3>
          </div>

          <div className="bg-[#0f172a] rounded-[32px] p-8">
            <p className="text-gray-400 mb-3">Platform</p>
            <h3 className="text-4xl font-black text-green-400">
              MT5
            </h3>
          </div>

          <div className="bg-[#0f172a] rounded-[32px] p-8">
            <p className="text-gray-400 mb-3">Rating</p>
            <h3 className="text-4xl font-black text-green-400">
              9.2/10
            </h3>
          </div>

        </div>

      </section>

      <section className="max-w-7xl mx-auto px-6 pb-32">

        <div className="bg-gradient-to-r from-green-500 to-emerald-400 rounded-[50px] p-16 text-center text-black">

          <h2 className="text-6xl font-black mb-8">
            ເປີດບັນຊີ Vantage
          </h2>

          <a
            href="https://vigco.co/la-com-inv/wmd8Y80S"
            target="_blank"
            className="bg-black text-white px-12 py-6 rounded-3xl text-2xl font-black inline-block"
          >
            ເປີດບັນຊີ Vantage
          </a>

        </div>

      </section>

    </main>
  );
}