export default function BlogPage() {
  return (
    <main className="bg-black min-h-screen text-white px-6 py-20">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-6xl font-black text-yellow-400 mb-6 text-center">
          Forex Blog Laos
        </h1>

        <p className="text-gray-400 text-xl text-center mb-16">
          ລວມບົດຄວາມ Forex ແລະ broker reviews ສຳລັບຄົນລາວ
        </p>

        <div className="grid md:grid-cols-2 gap-8">

          {/* BEST BROKER */}
          <div className="bg-[#0f172a] border border-gray-800 rounded-3xl p-8">

            <div className="bg-yellow-400 text-black inline-block px-4 py-2 rounded-full font-black mb-6">
              🔥 Popular
            </div>

            <h2 className="text-5xl font-black mb-6">
              Best Forex Broker Laos
            </h2>

            <p className="text-gray-400 text-xl mb-8">
              ລວມ broker Forex ທີ່ດີສຸດໃນລາວ
            </p>

            <a
              href="/blog/best-forex-broker-laos"
              className="block bg-yellow-400 hover:bg-yellow-300 transition text-black text-center py-5 rounded-2xl font-black text-xl"
            >
              📖 Read Article
            </a>

          </div>

          {/* XM */}
          <div className="bg-[#0f172a] border border-gray-800 rounded-3xl p-8">

            <div className="bg-blue-400 text-black inline-block px-4 py-2 rounded-full font-black mb-6">
              ⚡ XM
            </div>

            <h2 className="text-5xl font-black mb-6">
              XM Review Laos
            </h2>

            <p className="text-gray-400 text-xl mb-8">
              XM ดีไหม? ถอนเร็วไหม?
            </p>

            <a
              href="/blog/xm-review-laos"
              className="block bg-yellow-400 hover:bg-yellow-300 transition text-black text-center py-5 rounded-2xl font-black text-xl"
            >
              📖 Read Review
            </a>

          </div>

          {/* EXNESS */}
          <div className="bg-[#0f172a] border border-gray-800 rounded-3xl p-8">

            <div className="bg-green-400 text-black inline-block px-4 py-2 rounded-full font-black mb-6">
              🚀 EXNESS
            </div>

            <h2 className="text-5xl font-black mb-6">
              Exness Review Laos
            </h2>

            <p className="text-gray-400 text-xl mb-8">
              รีวิว Exness แบบละเอียด
            </p>

            <a
              href="/blog/exness-review-laos"
              className="block bg-yellow-400 hover:bg-yellow-300 transition text-black text-center py-5 rounded-2xl font-black text-xl"
            >
              📖 Read Review
            </a>

          </div>

          {/* VANTAGE */}
          <div className="bg-[#0f172a] border border-gray-800 rounded-3xl p-8">

            <div className="bg-cyan-400 text-black inline-block px-4 py-2 rounded-full font-black mb-6">
              💎 VANTAGE
            </div>

            <h2 className="text-5xl font-black mb-6">
              Vantage Review Laos
            </h2>

            <p className="text-gray-400 text-xl mb-8">
              รีวิว Vantage และ cashback
            </p>

            <a
              href="/blog/vantage-review-laos"
              className="block bg-yellow-400 hover:bg-yellow-300 transition text-black text-center py-5 rounded-2xl font-black text-xl"
            >
              📖 Read Review
            </a>

          </div>

          {/* IUX */}
          <div className="bg-[#0f172a] border border-gray-800 rounded-3xl p-8">

            <div className="bg-pink-400 text-black inline-block px-4 py-2 rounded-full font-black mb-6">
              💰 IUX
            </div>

            <h2 className="text-5xl font-black mb-6">
              IUX Review Laos
            </h2>

            <p className="text-gray-400 text-xl mb-8">
              รีวิว IUX สำหรับมือใหม่
            </p>

            <a
              href="/blog/iux-review-laos"
              className="block bg-yellow-400 hover:bg-yellow-300 transition text-black text-center py-5 rounded-2xl font-black text-xl"
            >
              📖 Read Review
            </a>

          </div>

          {/* HFM */}
          <div className="bg-[#0f172a] border border-gray-800 rounded-3xl p-8">

            <div className="bg-teal-400 text-black inline-block px-4 py-2 rounded-full font-black mb-6">
              ✅ HFM
            </div>

            <h2 className="text-5xl font-black mb-6">
              HFM Review Laos
            </h2>

            <p className="text-gray-400 text-xl mb-8">
              รีวิว HFM และโบนัสล่าสุด
            </p>

            <a
              href="/blog/hfm-review-laos"
              className="block bg-yellow-400 hover:bg-yellow-300 transition text-black text-center py-5 rounded-2xl font-black text-xl"
            >
              📖 Read Review
            </a>

          </div>

        </div>

      </div>

    </main>
  );
}