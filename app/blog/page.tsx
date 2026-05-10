export default function BlogPage() {

  const articles = [

    {
      title: "Best Forex Broker Laos 2026",
      desc: "ລວມ broker Forex ທີ່ດີສຸດສຳລັບຄົນລາວ",
      link: "/blog/best-forex-broker-laos",
      badge: "🔥 Popular",
    },

    {
      title: "XM Review Laos",
      desc: "XM ดีไหม? ถอนเร็วไหม? เหมาะกับคนลาวหรือไม่",
      link: "/blog/xm-review-laos",
      badge: "🏆 TOP 1",
    },

    {
      title: "Exness Review Laos",
      desc: "Exness ถอนเร็วไหม และเหมาะกับสาย Scalping หรือไม่",
      link: "/blog/exness-review-laos",
      badge: "⚡ Fast Withdraw",
    },

    {
      title: "Forex Cashback Laos",
      desc: "วิธีรับ Cashback Forex สูงสุดสำหรับนักเทรดลาว",
      link: "/blog/forex-cashback-laos",
      badge: "💰 Cashback",
    },

  ];

  return (
    <main className="bg-black min-h-screen text-white px-6 py-16">

      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16">

          <div className="inline-block bg-yellow-400/20 text-yellow-400 px-5 py-2 rounded-full text-sm font-bold mb-6">
            🔥 FOREX BLOG LAOS
          </div>

          <h1 className="text-6xl font-black mb-6">
            Forex Blog Laos
          </h1>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-8">
            ບົດຄວາມ Forex ສຳລັບຄົນລາວ
            ລວມรีวิว broker ແລະเทคนิคการเทรด
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {articles.map((article) => (

            <div
              key={article.title}
              className="bg-[#0f172a] border border-gray-800 rounded-3xl p-8 hover:border-yellow-400 transition"
            >

              <div className="flex items-center justify-between mb-6">

                <span className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-black">
                  {article.badge}
                </span>

              </div>

              <h2 className="text-4xl font-black mb-6 leading-tight">
                {article.title}
              </h2>

              <p className="text-gray-400 leading-8 mb-8">
                {article.desc}
              </p>

              <a
                href={article.link}
                className="block bg-yellow-400 hover:bg-yellow-300 transition text-black py-4 rounded-2xl text-center font-black text-lg"
              >
                📖 Read Article
              </a>

            </div>

          ))}

        </div>

      </div>

    </main>
  );
}