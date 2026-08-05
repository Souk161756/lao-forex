"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#0b1220] via-[#121b2e] to-[#1b2845] p-10">

      {/* Glow */}
      <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-yellow-500/10 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative z-10 grid gap-10 lg:grid-cols-2">

        {/* Left */}

        <div>

          <span className="inline-flex rounded-full bg-yellow-500/20 px-4 py-2 text-sm font-bold text-yellow-400">
            🇱🇦 LaoForex.org
          </span>

          <h1 className="mt-6 text-5xl font-black leading-tight text-white">

            ເຄື່ອງມື Forex

            <span className="block text-yellow-400">

              ສຳລັບຄົນລາວ

            </span>

          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-300">

            ລວມ Calculator, Gold, Forex, Crypto,
            Economic Calendar, Risk Management,
            Position Size ແລະ Trading Journal
            ໄວ້ໃນບ່ອນດຽວ.

          </p>

          <div className="mt-8 flex flex-wrap gap-4">

            <Link
              href="#tools"
              className="rounded-xl bg-yellow-400 px-7 py-4 font-bold text-black transition hover:bg-yellow-300"
            >
              🚀 ເລີ່ມໃຊ້ Tools
            </Link>

            <Link
              href="/reviews"
              className="rounded-xl border border-white/20 px-7 py-4 font-bold text-white transition hover:border-yellow-400 hover:text-yellow-400"
            >
              ⭐ Broker Reviews
            </Link>

          </div>

          <div className="mt-10 grid grid-cols-3 gap-4">

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">

              <div className="text-3xl font-black text-yellow-400">
                20+
              </div>

              <div className="mt-2 text-gray-400">
                Trading Tools
              </div>

            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">

              <div className="text-3xl font-black text-green-400">
                Live
              </div>

              <div className="mt-2 text-gray-400">
                Market Data
              </div>

            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">

              <div className="text-3xl font-black text-blue-400">
                FREE
              </div>

              <div className="mt-2 text-gray-400">
                Forever
              </div>

            </div>

          </div>

        </div>

        {/* Right */}

        <div className="flex items-center">

          <div className="w-full rounded-3xl border border-white/10 bg-[#111827]/80 p-6 backdrop-blur">

            <h3 className="text-xl font-bold text-white">

              📊 Market Snapshot

            </h3>

            <div className="mt-6 space-y-4">

              <div className="flex items-center justify-between rounded-xl bg-[#1a2336] p-4">

                <div>

                  <div className="font-bold text-white">
                    XAU/USD
                  </div>

                  <div className="text-sm text-gray-400">
                    Gold
                  </div>

                </div>

                <div className="text-right">

                  <div className="font-bold text-white">
                    Live
                  </div>

                  <div className="text-green-400">
                    API
                  </div>

                </div>

              </div>

              <div className="flex items-center justify-between rounded-xl bg-[#1a2336] p-4">

                <div>

                  <div className="font-bold text-white">
                    BTC/USD
                  </div>

                  <div className="text-sm text-gray-400">
                    Bitcoin
                  </div>

                </div>

                <div className="text-right">

                  <div className="font-bold text-white">
                    Live
                  </div>

                  <div className="text-green-400">
                    API
                  </div>

                </div>

              </div>

              <div className="flex items-center justify-between rounded-xl bg-[#1a2336] p-4">

                <div>

                  <div className="font-bold text-white">
                    EUR/USD
                  </div>

                  <div className="text-sm text-gray-400">
                    Forex
                  </div>

                </div>

                <div className="text-right">

                  <div className="font-bold text-white">
                    Live
                  </div>

                  <div className="text-green-400">
                    API
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}