"use client";

import { useState } from "react";

export default function Home() {
  const [search, setSearch] = useState("");

  const brokers = [
    {
      name: "XM Broker",
      rating: "9.1/10",
      cashback: "$3/Lot",
      spread: "1.0 pip",
      deposit: "$30",
      badge: "🏆 TOP 1",
      badgeColor: "bg-yellow-400 text-black",
      border: "border-yellow-400",
      link: "https://affs.click/wLl9B",
    },

    {
      name: "Exness",
      rating: "9.5/10",
      cashback: "$5/Lot",
      spread: "0.8 pip",
      deposit: "$10",
      badge: "🔥 Popular",
      badgeColor: "bg-blue-500 text-white",
      border: "border-blue-400",
      link: "https://one.exnessonelink.com/boarding/sign-up/a/ocvhdpugv1?lng=th",
    },

    {
      name: "Vantage",
      rating: "9.0/10",
      cashback: "$4/Lot",
      spread: "0.9 pip",
      deposit: "$50",
      badge: "⚡ Fast Withdraw",
      badgeColor: "bg-green-500 text-white",
      border: "border-green-500",
      link: "https://vigco.co/la-com-inv/wmd8Y80S",
    },

    {
      name: "IUX",
      rating: "8.9/10",
      cashback: "$4/Lot",
      spread: "0.7 pip",
      deposit: "$50",
      badge: "💎 Low Spread",
      badgeColor: "bg-pink-500 text-white",
      border: "border-pink-500",
      link: "https://iux.com/en/register?code=EPs5nw6M",
    },

    {
      name: "Market4you",
      rating: "8.7/10",
      cashback: "$3/Lot",
      spread: "1.2 pip",
      deposit: "$30",
      badge: "🎁 Bonus",
      badgeColor: "bg-orange-500 text-white",
      border: "border-orange-500",
      link: "https://account.markets4you.online/en/user-registration/?affid=bpblvtj",
    },

    {
      name: "HFM",
      rating: "9.0/10",
      cashback: "$5/Lot",
      spread: "0.9 pip",
      deposit: "$50",
      badge: "✅ Trusted",
      badgeColor: "bg-cyan-500 text-white",
      border: "border-cyan-500",
      link: "https://register.hfm.com/sv/en/new-live-account/?refid=30421077",
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
              className="text-white hover:text-yellow-400 transition"
            >
              Home
            </a>

            <a
              href="/reviews"
              className="text-white hover:text-yellow-400 transition"
            >
              Reviews
            </a>

            <a
              href="/blog"
              className="text-white hover:text-yellow-400 transition"
            >
              Blog
            </a>

            <a
              href="/blog/forex-cashback-laos"
              className="text-white hover:text-yellow-400 transition"
            >
              Cashback
            </a>

            <a
              href="#brokers"
              className="text-white hover:text-yellow-400 transition"
            >
              Brokers
            </a>

          </div>

          <div className="flex gap-3">

            <a
              href="https://t.me/RebateFXlaos"
              target="_blank"
              className="bg-blue-500 hover:bg-blue-400 px-4 py-2 rounded-xl font-bold transition"
            >
              Telegram
            </a>

            <a
              href="https://wa.me/8562029826898"
              target="_blank"
              className="bg-green-500 hover:bg-green-400 px-4 py-2 rounded-xl font-bold transition"
            >
              WhatsApp
            </a>

          </div>

        </div>

      </nav>

      {/* SEARCH */}
      <div className="px-6 py-6">

        <input
          type="text"
          placeholder="Search broker..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-[#0f172a] border border-gray-700 rounded-2xl px-5 py-4 text-white text-lg outline-none"
        />

      </div>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-10">

        <div className="text-center mb-16">

          <div className="inline-block bg-yellow-400/20 text-yellow-400 px-5 py-2 rounded-full text-sm font-bold mb-6">
            🔥 TOP FOREX BROKERS IN LAOS
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6">
            ໂບກເກີ້ Forex
            <br />
            ທີ່ດີສຸດໃນລາວ
          </h1>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-8">
            ປຽບທຽບ broker Forex ຊັ້ນນໍາ
            ສຳລັບຄົນລາວ
            ພ້ອມ cashback ແລະ bonus ສູງສຸດ
          </p>

        </div>

        {/* STATS */}
        <div className="grid md:grid-cols-4 gap-6 mb-20">

          <div className="bg-[#0f172a] border border-gray-800 rounded-3xl p-8 text-center">

            <h3 className="text-5xl font-black text-yellow-400 mb-3">
              6+
            </h3>

            <p className="text-gray-400 text-lg">
              Top Brokers
            </p>

          </div>

          <div className="bg-[#0f172a] border border-gray-800 rounded-3xl p-8 text-center">

            <h3 className="text-5xl font-black text-yellow-400 mb-3">
              $5/Lot
            </h3>

            <p className="text-gray-400 text-lg">
              Max Cashback
            </p>

          </div>

          <div className="bg-[#0f172a] border border-gray-800 rounded-3xl p-8 text-center">

            <h3 className="text-5xl font-black text-yellow-400 mb-3">
              24/7
            </h3>

            <p className="text-gray-400 text-lg">
              Support
            </p>

          </div>

          <div className="bg-[#0f172a] border border-gray-800 rounded-3xl p-8 text-center">

            <h3 className="text-5xl font-black text-yellow-400 mb-3">
              100%
            </h3>

            <p className="text-gray-400 text-lg">
              Free Reviews
            </p>

          </div>

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
                className={`bg-[#0f172a] border ${broker.border} rounded-3xl p-6 mb-8 hover:scale-[1.01] transition`}
              >

                <div className="flex items-center justify-between mb-6">

                  <h2 className="text-4xl font-black">
                    {broker.name}
                  </h2>

                  <span className={`${broker.badgeColor} px-4 py-2 rounded-full text-sm font-black`}>
                    {broker.badge}
                  </span>

                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-8">

                  <div className="bg-[#111827] rounded-2xl p-5">

                    <p className="text-gray-400 mb-2">
                      ⭐ Rating
                    </p>

                    <p className="text-4xl font-black text-yellow-400">
                      {broker.rating}
                    </p>

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
                      ⚡ Spread
                    </p>

                    <p className="text-4xl font-black text-yellow-400">
                      {broker.spread}
                    </p>

                  </div>

                  <div className="bg-[#111827] rounded-2xl p-5">

                    <p className="text-gray-400 mb-2">
                      💳 Min Deposit
                    </p>

                    <p className="text-4xl font-black text-yellow-400">
                      {broker.deposit}
                    </p>

                  </div>

                </div>

                <div className="grid grid-cols-2 gap-4">

                  <a
                    href={`/${broker.name.toLowerCase().replace(" broker", "")}`}
                    className="bg-[#111827] hover:bg-[#1f2937] border border-gray-700 transition py-4 rounded-2xl font-bold text-center text-lg"
                  >
                    📖 Read Review
                  </a>

                  <a
                    href={broker.link}
                    target="_blank"
                    className="bg-yellow-400 hover:bg-yellow-300 transition text-black py-4 rounded-2xl font-bold text-center text-lg"
                  >
                    🚀 Open Account
                  </a>

                </div>

              </div>

            ))}

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

              <p className="text-gray-400 leading-8">
                ເວັບໄຊລວມ broker Forex ຣີວິວ ແລະ cashback
                ສຳລັບຄົນລາວ
              </p>

            </div>

            <div>

              <h3 className="text-2xl font-black mb-5">
                Quick Links
              </h3>

              <div className="flex flex-col gap-4 text-gray-400">

                <a href="/" className="hover:text-yellow-400 transition">
                  Home
                </a>

                <a href="/blog" className="hover:text-yellow-400 transition">
                  Blog
                </a>

                <a href="/reviews" className="hover:text-yellow-400 transition">
                  Reviews
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