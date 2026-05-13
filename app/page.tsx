"use client";

import { useState } from "react";

export default function Home() {
  const [search, setSearch] = useState("");

  const brokers = [
    {
      name: "XM",
      rating: "4.3/5",
      source: "Trustpilot",
      cashback: "$3/Lot",
      spread: "1.6 pip",
      pair: "EURUSD Avg",
      deposit: "$5",
      depositType: "Crypto",
      badge: "🥇 ອັນດັບ 1",
      badgeColor: "bg-yellow-400 text-black",
      border: "border-yellow-400",
      link: "https://affs.click/wLl9B",
      review: "/xm",
    },

    {
      name: "Exness",
      rating: "4.6/5",
      source: "Trustpilot",
      cashback: "$5/Lot",
      spread: "1.0 pip",
      pair: "EURUSD Avg",
      deposit: "$10",
      depositType: "Crypto",
      badge: "🥈 ອັນດັບ 2",
      badgeColor: "bg-gray-300 text-black",
      border: "border-gray-400",
      link:
        "https://one.exnessonelink.com/boarding/sign-up/a/ocvhdpugv1?lng=th",
      review: "/exness",
    },

    {
      name: "Vantage",
      rating: "4.1/5",
      source: "Trustpilot",
      cashback: "$4/Lot",
      spread: "1.2 pip",
      pair: "EURUSD Avg",
      deposit: "$50",
      depositType: "Crypto",
      badge: "🥉 ອັນດັບ 3",
      badgeColor: "bg-orange-500 text-white",
      border: "border-orange-400",
      link: "https://vigco.co/la-com-inv/wmd8Y80S",
      review: "/vantage",
    },

    {
      name: "IUX",
      rating: "4.2/5",
      source: "Trustpilot",
      cashback: "$4/Lot",
      spread: "0.9 pip",
      pair: "EURUSD Avg",
      deposit: "$10",
      depositType: "Crypto",
      badge: "⭐ Low Spread",
      badgeColor: "bg-pink-500 text-white",
      border: "border-pink-400",
      link: "https://iux.com/en/register?code=EPs5nw6M",
      review: "/iux",
    },

    {
      name: "HFM",
      rating: "4.0/5",
      source: "Trustpilot",
      cashback: "$5/Lot",
      spread: "1.1 pip",
      pair: "EURUSD Avg",
      deposit: "$5",
      depositType: "Crypto",
      badge: "✅ Trusted",
      badgeColor: "bg-cyan-500 text-white",
      border: "border-cyan-400",
      link:
        "https://register.hfm.com/sv/en/new-live-account/?refid=30421077",
      review: "/hfm",
    },
  ];

  return (
    <main className="bg-black min-h-screen text-white">

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-[#050816]/95 backdrop-blur border-b border-yellow-500/20">

        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          <div className="flex items-center gap-3">

            <img
              src="/logo.png"
              alt="LaoForex"
              className="w-14 h-14 object-contain"
            />

            <div>

              <h1 className="text-3xl font-black text-yellow-400">
                LaoForex
              </h1>

              <p className="text-gray-400 text-sm">
                Forex Brokers Laos
              </p>

            </div>

          </div>

          <div className="hidden md:flex items-center gap-8 text-lg font-bold">

            <a
              href="/"
              className="hover:text-yellow-400 transition"
            >
              ໜ້າຫຼັກ
            </a>

            <a
              href="/reviews"
              className="hover:text-yellow-400 transition"
            >
              ຣີວິວ
            </a>

            <a
              href="/blog"
              className="hover:text-yellow-400 transition"
            >
              ບົດຄວາມ
            </a>

            <a
              href="#brokers"
              className="hover:text-yellow-400 transition"
            >
              ໂບກເກີ້
            </a>

          </div>

        </div>

      </nav>

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="text-center mb-16">

          <div className="inline-block bg-yellow-400/20 text-yellow-400 px-5 py-2 rounded-full text-sm font-bold mb-6">
            🔥 TOP FOREX BROKERS IN LAOS
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6">
            ໂບກເກີ້ Forex
            <br />
            ທີ່ດີສຸດໃນລາວ
          </h1>

          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-8">
            ປຽບທຽບໂບກເກີ້ Forex ສຳລັບຄົນລາວ
            ພ້ອມ cashback, spread
            ແລະ ຂໍ້ມູນການໃຊ້ງານຈິງ
          </p>

        </div>

        {/* SEARCH */}
        <div className="mb-10">

          <input
            type="text"
            placeholder="ຄົ້ນຫາໂບກເກີ້..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-[#0f172a] border border-gray-700 rounded-2xl px-5 py-4 text-white text-lg outline-none"
          />

        </div>

        {/* BROKERS */}
        <div id="brokers">

          {brokers
            .filter((broker) =>
              broker.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((broker) => (

              <div
                key={broker.name}
                className={`bg-[#0f172a] border ${broker.border} rounded-3xl p-6 mb-8`}
              >

                <div className="flex items-center justify-between mb-6 flex-wrap gap-4">

                  <h2 className="text-4xl font-black">
                    {broker.name}
                  </h2>

                  <span
                    className={`${broker.badgeColor} px-4 py-2 rounded-full text-sm font-black`}
                  >
                    {broker.badge}
                  </span>

                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-8">

                  <div className="bg-[#111827] rounded-2xl p-5">

                    <p className="text-gray-400 mb-2">
                      ⭐ Rating
                    </p>

                    <p className="text-4xl font-black text-yellow-400 mb-2">
                      {broker.rating}
                    </p>

                    <a
                      href="https://www.trustpilot.com/"
                      target="_blank"
                      className="text-sm text-blue-400 hover:text-blue-300 transition"
                    >
                      ອ້າງອີງຈາກ {broker.source}
                    </a>

                  </div>

                  <div className="bg-[#111827] rounded-2xl p-5">

                    <p className="text-gray-400 mb-2">
                      💰 Cashback
                    </p>

                    <p className="text-4xl font-black text-yellow-400">
                      {broker.cashback}
                    </p>

                  </div>

                  <div className="bg-[#111827] rounded-2xl p-5">

                    <p className="text-gray-400 mb-2">
                      ⚡ {broker.pair}
                    </p>

                    <p className="text-4xl font-black text-yellow-400 mb-2">
                      {broker.spread}
                    </p>

                    <p className="text-sm text-gray-500">
                      Avg Spread
                    </p>

                  </div>

                  <div className="bg-[#111827] rounded-2xl p-5">

                    <p className="text-gray-400 mb-2">
                      💳 Minimum Deposit
                    </p>

                    <p className="text-4xl font-black text-yellow-400 mb-2">
                      {broker.deposit}
                    </p>

                    <p className="text-sm text-gray-500">
                      via {broker.depositType}
                    </p>

                  </div>

                </div>

                <div className="grid grid-cols-2 gap-4">

                  <a
                    href={broker.review}
                    className="bg-[#111827] hover:bg-[#1f2937] border border-gray-700 transition py-4 rounded-2xl font-bold text-center text-lg"
                  >
                    📖 ອ່ານຣີວິວ
                  </a>

                  <a
                    href={broker.link}
                    target="_blank"
                    className="bg-yellow-400 hover:bg-yellow-300 transition text-black py-4 rounded-2xl font-bold text-center text-lg"
                  >
                    🚀 ເປີດບັນຊີ
                  </a>

                </div>

              </div>

            ))}

        </div>

        {/* BROKER GUIDE */}
        <div className="bg-[#0f172a] border border-gray-800 rounded-3xl p-8 mt-14">

          <h2 className="text-3xl font-black mb-8 text-white">
            🔍 ໂບກເກີ້ໃດເໝາະກັບໃຜ?
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="bg-[#111827] rounded-2xl p-6">

              <h3 className="text-2xl font-black text-yellow-400 mb-3">
                🥇 XM
              </h3>

              <p className="text-gray-400 leading-8">
                ເໝາະສຳລັບຜູ້ເລີ່ມຕົ້ນ,
                bonus ດີ ແລະ support ໃຊ້ງ່າຍ
              </p>

            </div>

            <div className="bg-[#111827] rounded-2xl p-6">

              <h3 className="text-2xl font-black text-yellow-400 mb-3">
                🥈 Exness
              </h3>

              <p className="text-gray-400 leading-8">
                ເໝາະສຳລັບຄົນຖອນເງິນບ່ອຍ,
                leverage ສູງ ແລະ ຖອນໄວ
              </p>

            </div>

            <div className="bg-[#111827] rounded-2xl p-6">

              <h3 className="text-2xl font-black text-yellow-400 mb-3">
                🥉 Vantage
              </h3>

              <p className="text-gray-400 leading-8">
                ເໝາະສຳລັບສາຍ scalp
                ແລະ rebate cashback
              </p>

            </div>

            <div className="bg-[#111827] rounded-2xl p-6">

              <h3 className="text-2xl font-black text-yellow-400 mb-3">
                ⭐ IUX
              </h3>

              <p className="text-gray-400 leading-8">
                ເໝາະສຳລັບຄົນຊອບ spread ຕ່ຳ
                ແລະ UI ທັນສະໄໝ
              </p>

            </div>

          </div>

        </div>

        {/* DISCLAIMER */}
        <div className="bg-[#0f172a] border border-gray-800 rounded-3xl p-6 mt-10 text-gray-400 leading-8 text-sm">

          <h3 className="text-xl font-black text-white mb-4">
            📌 ຂໍ້ຄວນຮູ້
          </h3>

          <p>
            * Rating ອ້າງອີງຈາກ Trustpilot
            ແລະ ຂໍ້ມູນສາທາລະນະ
          </p>

          <p>
            * Spread ອາດປ່ຽນແປງຕາມ market conditions,
            account type ແລະ ຊ່ວງເວລາເທຣດ
          </p>

          <p>
            * Spread ທີ່ສະແດງເປັນ EURUSD Average Spread
          </p>

          <p>
            * Cashback ແລະ Minimum Deposit
            ອາດປ່ຽນແປງຕາມ payment method
          </p>

          <p>
            * Minimum Deposit ທີ່ສະແດງ
            ອ້າງອີງຈາກການຝາກຜ່ານ Crypto
          </p>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-800 mt-20">

        <div className="max-w-7xl mx-auto px-6 py-16">

          <div className="grid md:grid-cols-3 gap-10">

            <div>

              <h2 className="text-3xl font-black text-yellow-400 mb-4">
                LaoForex
              </h2>

              <p className="text-gray-400 leading-8 text-lg max-w-sm">
                ເວັບໄຊລວມໂບກເກີ້ Forex,
                ຣີວິວ ແລະ cashback
                ສຳລັບຄົນລາວ
              </p>

            </div>

            <div>

              <h3 className="text-2xl font-black mb-5">
                Quick Links
              </h3>

              <div className="flex flex-col gap-4 text-gray-400">

                <a href="/" className="hover:text-yellow-400 transition">
                  ໜ້າຫຼັກ
                </a>

                <a href="/blog" className="hover:text-yellow-400 transition">
                  ບົດຄວາມ
                </a>

                <a href="/reviews" className="hover:text-yellow-400 transition">
                  ຣີວິວ
                </a>

              </div>

            </div>

            <div>

              <h3 className="text-2xl font-black mb-5">
                Top Brokers
              </h3>

              <div className="flex flex-col gap-4 text-gray-400">

                <a href="/xm" className="hover:text-yellow-400 transition">
                  XM
                </a>

                <a href="/exness" className="hover:text-yellow-400 transition">
                  Exness
                </a>

                <a href="/vantage" className="hover:text-yellow-400 transition">
                  Vantage
                </a>

                <a href="/iux" className="hover:text-yellow-400 transition">
                  IUX
                </a>

                <a href="/hfm" className="hover:text-yellow-400 transition">
                  HFM
                </a>

              </div>

            </div>

          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">

            © 2026 LaoForex.org — All Rights Reserved

          </div>

        </div>

      </footer>

    </main>
  );
}