"use client";

import { useState } from "react";

export default function Home() {
  const [search, setSearch] = useState("");

  return (
    <main className="bg-black min-h-screen text-white">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 bg-[#0a0f1f] border-b border-gray-800 sticky top-0 z-50">

        <h1 className="text-2xl font-bold text-yellow-400">
          LaoForex
        </h1>

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
      </nav>

      {/* Search */}
      <div className="px-6 py-6">
        <input
          type="text"
          placeholder="Search broker..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-[#0f172a] border border-gray-700 rounded-2xl px-5 py-4 text-white text-lg outline-none"
        />
      </div>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-10">

        <div className="text-center mb-16">

          <div className="inline-block bg-yellow-400/20 text-yellow-400 px-5 py-2 rounded-full text-sm font-bold mb-6">
            🔥 TOP FOREX BROKERS IN LAOS
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6">
            ນາຍໜ້າ Forex
            <br />
            ທີ່ດີສຸດໃນລາວ
          </h1>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-8">
            ປຽບທຽບ broker Forex ຊັ້ນນໍາ
            ສຳລັບຄົນລາວ
            ພ້ອມ cashback ແລະ bonus ສູງສຸດ
          </p>

        </div>

        {/* XM */}
        {(search === "" ||
          "xm broker".includes(search.toLowerCase())) && (
          <div className="bg-[#0f172a] border border-yellow-400 rounded-3xl p-6 mb-8 hover:scale-[1.01] transition">

            <div className="flex items-center justify-between mb-6">
              <h2 className="text-4xl font-black">XM Broker</h2>

              <span className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-black">
                🏆 TOP 1
              </span>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-8">

              <div className="bg-[#111827] rounded-2xl p-5">
                <p className="text-gray-400 mb-2">⭐ Rating</p>
                <p className="text-4xl font-black text-yellow-400">9.1/10</p>
              </div>

              <div className="bg-[#111827] rounded-2xl p-5">
                <p className="text-gray-400 mb-2">💰 Cashback</p>
                <p className="text-4xl font-black text-yellow-400">$3/Lot</p>
              </div>

              <div className="bg-[#111827] rounded-2xl p-5">
                <p className="text-gray-400 mb-2">⚡ Spread</p>
                <p className="text-4xl font-black text-yellow-400">1.0 pip</p>
              </div>

              <div className="bg-[#111827] rounded-2xl p-5">
                <p className="text-gray-400 mb-2">💳 Min Deposit</p>
                <p className="text-4xl font-black text-yellow-400">$30</p>
              </div>

            </div>

            <a
              href="https://affs.click/wLl9B"
              target="_blank"
              className="block w-full bg-yellow-400 hover:bg-yellow-300 transition text-black py-4 rounded-2xl font-bold text-center text-lg"
            >
              ເປີດບັນຊີ XM
            </a>

          </div>
        )}

        {/* Exness */}
        {(search === "" ||
          "exness".includes(search.toLowerCase())) && (
          <div className="bg-[#0f172a] border border-blue-400 rounded-3xl p-6 mb-8 hover:scale-[1.01] transition">

            <div className="flex items-center justify-between mb-6">
              <h2 className="text-4xl font-black">Exness</h2>

              <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-black">
                🔥 Popular
              </span>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-8">

              <div className="bg-[#111827] rounded-2xl p-5">
                <p className="text-gray-400 mb-2">⭐ Rating</p>
                <p className="text-4xl font-black text-yellow-400">9.5/10</p>
              </div>

              <div className="bg-[#111827] rounded-2xl p-5">
                <p className="text-gray-400 mb-2">💰 Cashback</p>
                <p className="text-4xl font-black text-yellow-400">$3/Lot</p>
              </div>

              <div className="bg-[#111827] rounded-2xl p-5">
                <p className="text-gray-400 mb-2">⚡ Spread</p>
                <p className="text-4xl font-black text-yellow-400">0.8 pip</p>
              </div>

              <div className="bg-[#111827] rounded-2xl p-5">
                <p className="text-gray-400 mb-2">💳 Min Deposit</p>
                <p className="text-4xl font-black text-yellow-400">$10</p>
              </div>

            </div>

            <a
              href="https://one.exnessonelink.com/a/ocvhdpugv1"
              target="_blank"
              className="block w-full bg-yellow-400 hover:bg-yellow-300 transition text-black py-4 rounded-2xl font-bold text-center text-lg"
            >
              ເປີດບັນຊີ Exness
            </a>

          </div>
        )}

        {/* Vantage */}
        {(search === "" ||
          "vantage".includes(search.toLowerCase())) && (
          <div className="bg-[#0f172a] border border-green-500 rounded-3xl p-6 mb-8 hover:scale-[1.01] transition">

            <div className="flex items-center justify-between mb-6">
              <h2 className="text-4xl font-black">Vantage</h2>

              <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-black">
                ⚡ Fast Withdraw
              </span>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-8">

              <div className="bg-[#111827] rounded-2xl p-5">
                <p className="text-gray-400 mb-2">⭐ Rating</p>
                <p className="text-4xl font-black text-yellow-400">9.0/10</p>
              </div>

              <div className="bg-[#111827] rounded-2xl p-5">
                <p className="text-gray-400 mb-2">💰 Cashback</p>
                <p className="text-4xl font-black text-yellow-400">$4/Lot</p>
              </div>

              <div className="bg-[#111827] rounded-2xl p-5">
                <p className="text-gray-400 mb-2">⚡ Spread</p>
                <p className="text-4xl font-black text-yellow-400">0.9 pip</p>
              </div>

              <div className="bg-[#111827] rounded-2xl p-5">
                <p className="text-gray-400 mb-2">💳 Min Deposit</p>
                <p className="text-4xl font-black text-yellow-400">$50</p>
              </div>

            </div>

            <a
              href="https://vigco.co/la-com-inv/wmd8Y80S"
              target="_blank"
              className="block w-full bg-yellow-400 hover:bg-yellow-300 transition text-black py-4 rounded-2xl font-bold text-center text-lg"
            >
              ເປີດບັນຊີ Vantage
            </a>

          </div>
        )}

        {/* IUX */}
        {(search === "" ||
          "iux".includes(search.toLowerCase())) && (
          <div className="bg-[#0f172a] border border-pink-500 rounded-3xl p-6 mb-8 hover:scale-[1.01] transition">

            <div className="flex items-center justify-between mb-6">
              <h2 className="text-4xl font-black">IUX</h2>

              <span className="bg-pink-500 text-white px-4 py-2 rounded-full text-sm font-black">
                💎 Low Spread
              </span>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-8">

              <div className="bg-[#111827] rounded-2xl p-5">
                <p className="text-gray-400 mb-2">⭐ Rating</p>
                <p className="text-4xl font-black text-yellow-400">8.9/10</p>
              </div>

              <div className="bg-[#111827] rounded-2xl p-5">
                <p className="text-gray-400 mb-2">💰 Cashback</p>
                <p className="text-4xl font-black text-yellow-400">$3/Lot</p>
              </div>

              <div className="bg-[#111827] rounded-2xl p-5">
                <p className="text-gray-400 mb-2">⚡ Spread</p>
                <p className="text-4xl font-black text-yellow-400">0.7 pip</p>
              </div>

              <div className="bg-[#111827] rounded-2xl p-5">
                <p className="text-gray-400 mb-2">💳 Min Deposit</p>
                <p className="text-4xl font-black text-yellow-400">$50</p>
              </div>

            </div>

            <a
              href="https://iux.com/en/register?code=EPs5nw6M"
              target="_blank"
              className="block w-full bg-yellow-400 hover:bg-yellow-300 transition text-black py-4 rounded-2xl font-bold text-center text-lg"
            >
              ເປີດບັນຊີ IUX
            </a>

          </div>
        )}

        {/* Market4you */}
        {(search === "" ||
          "market4you".includes(search.toLowerCase())) && (
          <div className="bg-[#0f172a] border border-orange-500 rounded-3xl p-6 mb-8 hover:scale-[1.01] transition">

            <div className="flex items-center justify-between mb-6">
              <h2 className="text-4xl font-black">Market4you</h2>

              <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-black">
                🎁 Bonus
              </span>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-8">

              <div className="bg-[#111827] rounded-2xl p-5">
                <p className="text-gray-400 mb-2">⭐ Rating</p>
                <p className="text-4xl font-black text-yellow-400">8.7/10</p>
              </div>

              <div className="bg-[#111827] rounded-2xl p-5">
                <p className="text-gray-400 mb-2">💰 Cashback</p>
                <p className="text-4xl font-black text-yellow-400">$3/Lot</p>
              </div>

              <div className="bg-[#111827] rounded-2xl p-5">
                <p className="text-gray-400 mb-2">⚡ Spread</p>
                <p className="text-4xl font-black text-yellow-400">1.2 pip</p>
              </div>

              <div className="bg-[#111827] rounded-2xl p-5">
                <p className="text-gray-400 mb-2">💳 Min Deposit</p>
                <p className="text-4xl font-black text-yellow-400">$30</p>
              </div>

            </div>

            <a
              href="https://account.markets4you.online/en/user-registration/?affid=bpblvtj"
              target="_blank"
              className="block w-full bg-yellow-400 hover:bg-yellow-300 transition text-black py-4 rounded-2xl font-bold text-center text-lg"
            >
              ເປີດບັນຊີ Market4you
            </a>

          </div>
        )}

        {/* HFM */}
        {(search === "" ||
          "hfm".includes(search.toLowerCase())) && (
          <div className="bg-[#0f172a] border border-cyan-500 rounded-3xl p-6 mb-8 hover:scale-[1.01] transition">

            <div className="flex items-center justify-between mb-6">
              <h2 className="text-4xl font-black">HFM</h2>

              <span className="bg-cyan-500 text-white px-4 py-2 rounded-full text-sm font-black">
                ✅ Trusted
              </span>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-8">

              <div className="bg-[#111827] rounded-2xl p-5">
                <p className="text-gray-400 mb-2">⭐ Rating</p>
                <p className="text-4xl font-black text-yellow-400">9.0/10</p>
              </div>

              <div className="bg-[#111827] rounded-2xl p-5">
                <p className="text-gray-400 mb-2">💰 Cashback</p>
                <p className="text-4xl font-black text-yellow-400">$5/Lot</p>
              </div>

              <div className="bg-[#111827] rounded-2xl p-5">
                <p className="text-gray-400 mb-2">⚡ Spread</p>
                <p className="text-4xl font-black text-yellow-400">0.9 pip</p>
              </div>

              <div className="bg-[#111827] rounded-2xl p-5">
                <p className="text-gray-400 mb-2">💳 Min Deposit</p>
                <p className="text-4xl font-black text-yellow-400">$30</p>
              </div>

            </div>

            <a
              href="https://register.hfm.com/sv/en/new-live-account/?refid=30421077"
              target="_blank"
              className="block w-full bg-yellow-400 hover:bg-yellow-300 transition text-black py-4 rounded-2xl font-bold text-center text-lg"
            >
              ເປີດບັນຊີ HFM
            </a>

          </div>
        )}

      </section>
{/* Floating Buttons */}
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

{/* Footer */}
<footer className="border-t border-gray-800 mt-20">

  <div className="max-w-6xl mx-auto px-6 py-10">

    <div className="grid md:grid-cols-3 gap-10">

      <div>
        <h2 className="text-3xl font-black text-yellow-400 mb-4">
          LaoForex
        </h2>

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
    </div>

  </div>

</footer>
    </main>
  );
}