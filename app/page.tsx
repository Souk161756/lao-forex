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

          <div className="hidden md:flex items-center gap-8 font-bold">

            <a href="/" className="hover:text-yellow-400 transition">
              Home
            </a>

            <a href="/reviews" className="hover:text-yellow-400 transition">
              Reviews
            </a>

            <a href="#brokers" className="hover:text-yellow-400 transition">
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
                    <p className="text-gray-400 mb-2">⭐ Rating</p>
                    <p className="text-4xl font-black text-yellow-400">
                      {broker.rating}
                    </p>
                  </div>

                  <div className="bg-[#111827] rounded-2xl p-5">
                    <p className="text-gray-400 mb-2">💰 Cashback</p>
                    <p className="text-4xl font-black text-yellow-400">
                      {broker.cashback}
                    </p>
                  </div>

                  <div className="bg-[#111827] rounded-2xl p-5">
                    <p className="text-gray-400 mb-2">⚡ Spread</p>
                    <p className="text-4xl font-black text-yellow-400">
                      {broker.spread}
                    </p>
                  </div>

                  <div className="bg-[#111827] rounded-2xl p-5">
                    <p className="text-gray-400 mb-2">💳 Min Deposit</p>
                    <p className="text-4xl font-black text-yellow-400">
                      {broker.deposit}
                    </p>
                  </div>

                </div>

                <div className="grid grid-cols-2 gap-4">

  {/* REVIEW BUTTON */}
  <a
    href={`/${broker.name.toLowerCase().replace(" broker", "")}`}
    className="bg-[#111827] hover:bg-[#1f2937] border border-gray-700 transition py-4 rounded-2xl font-bold text-center text-lg"
  >
    📖 Read Review
  </a>

  {/* OPEN ACCOUNT */}
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

      {/* FLOATING BUTTONS */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">

        <a
          href="https://t.me/RebateFXlaos"
          target="_blank"
          className="bg-blue-500 hover:bg-blue-400 w-14 h-14 rounded-full flex items-center justify-center text-2xl shadow-lg transition"
        >
          ✈️
        </a>

        <a
          href="https://wa.me/8562029826898"
          target="_blank"
          className="bg-green-500 hover:bg-green-400 w-14 h-14 rounded-full flex items-center justify-center text-2xl shadow-lg transition"
        >
          💬
        </a>

      </div>

      {/* FOOTER */}
      <footer className="border-t border-gray-800 mt-20">

        <div className="max-w-6xl mx-auto px-6 py-10">

          <div className="grid md:grid-cols-3 gap-10">

            <div>

              <div className="flex items-center gap-3 mb-4">

                <img
                  src="/logo.png"
                  alt="LaoForex"
                  className="w-14 h-14 object-contain"
                />

                <div>
                  <h2 className="text-3xl font-black text-yellow-400">
                    LaoForex
                  </h2>

                  <p className="text-gray-400 text-sm">
                    Forex Brokers Laos
                  </p>
                </div>

              </div>

              <p className="text-gray-400 leading-7">
                ລວມ broker Forex ທີ່ດີສຸດໃນລາວ
                ພ້ອມ cashback ແລະ bonus
                ສຳລັບນັກເທຣດຄົນລາວ
              </p>

            </div>

            <div>

              <h3 className="text-xl font-bold mb-4">
                Contact
              </h3>

              <div className="space-y-3 text-gray-400">

                <p>Telegram: @RebateFXlaos</p>

                <p>WhatsApp: +856 20 2982 6898</p>

              </div>

            </div>

            <div>

              <h3 className="text-xl font-bold mb-4">
                Top Brokers
              </h3>

              <div className="space-y-3 text-gray-400">

                <p>XM Broker</p>
                <p>Exness</p>
                <p>Vantage</p>
                <p>IUX</p>

              </div>

            </div>

          </div>

          <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500">

            © 2026 LaoForex.org - All Rights Reserved

            <p className="mt-4 text-sm">
              Risk Warning: Trading Forex and CFDs involves risk.
            </p>

          </div>

        </div>

      </footer>
{/* BLOG SECTION */}
<section className="max-w-7xl mx-auto px-6 py-24">

  <div className="text-center mb-16">

    <div className="inline-block bg-yellow-400/20 text-yellow-400 px-5 py-2 rounded-full text-sm font-bold mb-6">
      🔥 FOREX REVIEWS
    </div>

    <h2 className="text-5xl font-black text-white mb-6">
      Broker Reviews Laos
    </h2>

    <p className="text-gray-400 text-lg">
      ລວມ broker reviews ສຳລັບຄົນລາວ
    </p>

  </div>

  <div className="grid md:grid-cols-3 gap-8">

    {/* XM */}
    <div className="bg-[#0f172a] border border-gray-800 rounded-3xl p-8">

      <span className="bg-blue-400 text-black px-4 py-2 rounded-full text-sm font-black">
        ⚡ XM
      </span>

      <h3 className="text-3xl font-black mt-6 mb-4">
        XM Review Laos
      </h3>

      <p className="text-gray-400 leading-8 mb-8">
        XM ดีไหม? ถอนเร็วไหม?
      </p>

      <a
        href="/xm"
        className="block bg-yellow-400 hover:bg-yellow-300 transition text-black py-4 rounded-2xl text-center font-black"
      >
        📖 Read Review
      </a>

    </div>

    {/* EXNESS */}
    <div className="bg-[#0f172a] border border-gray-800 rounded-3xl p-8">

      <span className="bg-green-400 text-black px-4 py-2 rounded-full text-sm font-black">
        🚀 Exness
      </span>

      <h3 className="text-3xl font-black mt-6 mb-4">
        Exness Review Laos
      </h3>

      <p className="text-gray-400 leading-8 mb-8">
        Exness ถอนเร็วไหม?
      </p>

      <a
        href="/exness"
        className="block bg-yellow-400 hover:bg-yellow-300 transition text-black py-4 rounded-2xl text-center font-black"
      >
        📖 Read Review
      </a>

    </div>

    {/* VANTAGE */}
    <div className="bg-[#0f172a] border border-gray-800 rounded-3xl p-8">

      <span className="bg-cyan-400 text-black px-4 py-2 rounded-full text-sm font-black">
        💎 Vantage
      </span>

      <h3 className="text-3xl font-black mt-6 mb-4">
        Vantage Review Laos
      </h3>

      <p className="text-gray-400 leading-8 mb-8">
        Vantage cashback สูงไหม?
      </p>

      <a
        href="/vantage"
        className="block bg-yellow-400 hover:bg-yellow-300 transition text-black py-4 rounded-2xl text-center font-black"
      >
        📖 Read Review
      </a>

    </div>

    {/* IUX */}
    <div className="bg-[#0f172a] border border-gray-800 rounded-3xl p-8">

      <span className="bg-pink-400 text-black px-4 py-2 rounded-full text-sm font-black">
        💰 IUX
      </span>

      <h3 className="text-3xl font-black mt-6 mb-4">
        IUX Review Laos
      </h3>

      <p className="text-gray-400 leading-8 mb-8">
        IUX spread ต่ำจริงไหม?
      </p>

      <a
        href="/iux"
        className="block bg-yellow-400 hover:bg-yellow-300 transition text-black py-4 rounded-2xl text-center font-black"
      >
        📖 Read Review
      </a>

    </div>

    {/* MARKET4YOU */}
    <div className="bg-[#0f172a] border border-gray-800 rounded-3xl p-8">

      <span className="bg-orange-400 text-black px-4 py-2 rounded-full text-sm font-black">
        🎁 Market4you
      </span>

      <h3 className="text-3xl font-black mt-6 mb-4">
        Market4you Review Laos
      </h3>

      <p className="text-gray-400 leading-8 mb-8">
        โบนัส Market4you ดีไหม?
      </p>

      <a
        href="/market4you"
        className="block bg-yellow-400 hover:bg-yellow-300 transition text-black py-4 rounded-2xl text-center font-black"
      >
        📖 Read Review
      </a>

    </div>

    {/* HFM */}
    <div className="bg-[#0f172a] border border-gray-800 rounded-3xl p-8">

      <span className="bg-teal-400 text-black px-4 py-2 rounded-full text-sm font-black">
        ✅ HFM
      </span>

      <h3 className="text-3xl font-black mt-6 mb-4">
        HFM Review Laos
      </h3>

      <p className="text-gray-400 leading-8 mb-8">
        HFM น่าเชื่อถือไหม?
      </p>

      <a
        href="/hfm"
        className="block bg-yellow-400 hover:bg-yellow-300 transition text-black py-4 rounded-2xl text-center font-black"
      >
        📖 Read Review
      </a>

    </div>

  </div>

</section>
{/* FOOTER */}
<footer className="border-t border-gray-800 mt-24">

  <div className="max-w-7xl mx-auto px-6 py-16">

    <div className="grid md:grid-cols-3 gap-12">

      {/* LOGO */}
      <div>

        <h3 className="text-4xl font-black text-yellow-400 mb-4">
          LaoForex
        </h3>

        <p className="text-gray-400 leading-8">
          Forex Brokers Laos
          ລວມ broker Forex
          ແລະ cashback ສຳລັບຄົນລາວ
        </p>

      </div>

      {/* LINKS */}
      <div>

        <h4 className="text-2xl font-black mb-6">
          Quick Links
        </h4>

        <div className="space-y-4">

          <a href="/" className="block text-gray-400 hover:text-yellow-400">
            Home
          </a>

          <a href="/reviews" className="block text-gray-400 hover:text-yellow-400">
            Reviews
          </a>

          <a href="/blog" className="block text-gray-400 hover:text-yellow-400">
            Blog
          </a>

        </div>

      </div>

      {/* BROKERS */}
      <div>

        <h4 className="text-2xl font-black mb-6">
          Top Brokers
        </h4>

        <div className="space-y-4">

          <a href="/xm" className="block text-gray-400 hover:text-yellow-400">
            XM Broker
          </a>

          <a href="/exness" className="block text-gray-400 hover:text-yellow-400">
            Exness
          </a>

          <a href="/vantage" className="block text-gray-400 hover:text-yellow-400">
            Vantage
          </a>

          <a href="/iux" className="block text-gray-400 hover:text-yellow-400">
            IUX
          </a>

        </div>

      </div>

    </div>

    <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">

      © 2026 LaoForex.org — All Rights Reserved

    </div>

  </div>

</footer>
{/* FOOTER */}
<footer className="border-t border-gray-800 mt-20">

  <div className="max-w-7xl mx-auto px-6 py-16">

    <div className="grid md:grid-cols-3 gap-10">

      {/* BRAND */}
      <div>

        <h2 className="text-3xl font-black text-yellow-400 mb-4">
          LaoForex
        </h2>

        <p className="text-gray-400 leading-8">
          เว็บไซต์รวม broker Forex รีวิว และ cashback
          สำหรับคนลาว
        </p>

      </div>

      {/* LINKS */}
      <div>

        <h3 className="text-2xl font-black mb-5">
          Quick Links
        </h3>

        <div className="flex flex-col gap-4 text-gray-400">

          <a href="/">Home</a>

          <a href="/blog">Blog</a>

          <a href="/reviews">Reviews</a>

        </div>

      </div>

      {/* BROKERS */}
      <div>

        <h3 className="text-2xl font-black mb-5">
          Top Brokers
        </h3>

        <div className="flex flex-col gap-4 text-gray-400">

          <a href="/xm">XM</a>

          <a href="/exness">Exness</a>

          <a href="/vantage">Vantage</a>

          <a href="/iux">IUX</a>

          <a href="/hfm">HFM</a>

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