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
          <div className="bg-[#0f172a] border border-gray-800 rounded-3xl p-6 mb-8 hover:border-yellow-400 transition">

            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold">XM Broker</h2>

              <span className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-black">
                🏆 TOP 1
              </span>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-6">

              <div className="bg-[#111827] rounded-2xl p-4">
                <p className="text-gray-400 text-sm">⭐ Rating</p>
                <h3 className="text-2xl font-bold text-yellow-400">9.1/10</h3>
              </div>

              <div className="bg-[#111827] rounded-2xl p-4">
                <p className="text-gray-400 text-sm">💰 Cashback</p>
                <h3 className="text-2xl font-bold text-yellow-400">$3/Lot</h3>
              </div>

              <div className="bg-[#111827] rounded-2xl p-4">
                <p className="text-gray-400 text-sm">⚡ Spread</p>
                <h3 className="text-2xl font-bold text-yellow-400">1.0 pip</h3>
              </div>

              <div className="bg-[#111827] rounded-2xl p-4">
                <p className="text-gray-400 text-sm">💳 Min Deposit</p>
                <h3 className="text-2xl font-bold text-yellow-400">$5</h3>
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
          <div className="bg-[#0f172a] border border-gray-800 rounded-3xl p-6 mb-8 hover:border-blue-400 transition">

            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold">Exness</h2>

              <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-black">
                🔥 Popular
              </span>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-6">

              <div className="bg-[#111827] rounded-2xl p-4">
                <p className="text-gray-400 text-sm">⭐ Rating</p>
                <h3 className="text-2xl font-bold text-yellow-400">9.5/10</h3>
              </div>

              <div className="bg-[#111827] rounded-2xl p-4">
                <p className="text-gray-400 text-sm">💰 Cashback</p>
                <h3 className="text-2xl font-bold text-yellow-400">$5/Lot</h3>
              </div>

              <div className="bg-[#111827] rounded-2xl p-4">
                <p className="text-gray-400 text-sm">⚡ Spread</p>
                <h3 className="text-2xl font-bold text-yellow-400">0.8 pip</h3>
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
          <div className="bg-[#0f172a] border border-gray-800 rounded-3xl p-6 mb-8">

            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold">Vantage</h2>

              <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-black">
                ⚡ Fast Withdraw
              </span>
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
          <div className="bg-[#0f172a] border border-gray-800 rounded-3xl p-6 mb-8">

            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold">IUX</h2>

              <span className="bg-pink-500 text-white px-4 py-2 rounded-full text-sm font-black">
                💎 Low Spread
              </span>
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
          <div className="bg-[#0f172a] border border-gray-800 rounded-3xl p-6 mb-8">

            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold">Market4you</h2>

              <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-black">
                🎁 Bonus
              </span>
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
          <div className="bg-[#0f172a] border border-gray-800 rounded-3xl p-6 mb-8">

            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold">HFM</h2>

              <span className="bg-cyan-500 text-white px-4 py-2 rounded-full text-sm font-black">
                ✅ Trusted
              </span>
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

    </main>
  );
}