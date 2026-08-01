"use client";

import Image from "next/image";
import LiveGoldPrice from "./LiveGoldPrice";
import LiveBitcoin from "./LiveBitcoin";
import TradingViewGold from "./TradingViewGold";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#070B16]">

      {/* Background */}
      <div className="absolute inset-0">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#1E293B_0%,transparent_45%)]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,#172554_0%,transparent_45%)]" />

        <div
          className="absolute -left-44 top-0 h-[650px] w-[650px] rounded-full blur-[170px]"
          style={{
            background: "rgba(250,204,21,.10)",
          }}
        />

        <div
          className="absolute right-[-150px] top-28 h-[650px] w-[650px] rounded-full blur-[170px]"
          style={{
            background: "rgba(37,99,235,.12)",
          }}
        />

      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-20 pb-20">

        {/* Live Market */}
        <div className="mb-10 overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">

          <div className="flex whitespace-nowrap py-3 animate-[ticker_30s_linear_infinite]">

            {[
              "🥇 XAU/USD 3,352.84 ▲0.62%",
              "₿ BTC/USD 114,250 ▲1.25%",
              "💶 EUR/USD 1.1745 ▲0.08%",
              "🛢️ OIL 71.82 ▼0.42%",
              "🇺🇸 DXY 98.35 ▼0.18%",
              "🥈 SILVER 38.12 ▲0.55%",
              "🥇 XAU/USD 3,352.84 ▲0.62%",
              "₿ BTC/USD 114,250 ▲1.25%",
              "💶 EUR/USD 1.1745 ▲0.08%",
              "🛢️ OIL 71.82 ▼0.42%",
              "🇺🇸 DXY 98.35 ▼0.18%",
              "🥈 SILVER 38.12 ▲0.55%",
            ].map((item, i) => (
              <div
                key={i}
                className="mx-10 text-sm font-semibold text-white"
              >
                {item}
              </div>
            ))}

          </div>

        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* LEFT */}
          <div>

            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-yellow-500/20 bg-yellow-500/10 px-6 py-3">

              <span className="h-3 w-3 animate-pulse rounded-full bg-green-400" />

              <span className="font-bold text-yellow-400">
                ຊຸມຊົນນັກເທຣດຄົນລາວ
              </span>

            </div>

            <h1 className="text-6xl font-black leading-tight text-white lg:text-7xl">

              ເທຣດ

              <br />

              <span className="bg-gradient-to-r from-yellow-300 via-orange-400 to-yellow-500 bg-clip-text text-transparent">
                Forex
              </span>

              <br />

              ຢ່າງມືອາຊີບ

            </h1>

            <p className="mt-8 max-w-xl text-xl leading-10 text-gray-300">

              LaoForex ລວບລວມ Broker ຊັ້ນນຳ,
              Cashback,
              Bonus,
              ຂ່າວ Forex,
              ບົດຮຽນ
              ແລະເຄື່ອງມືການເທຣດ
              ສຳລັບຄົນລາວໃນບ່ອນດຽວ.

            </p>

            <div className="mt-10 flex flex-wrap gap-5">

              <a
                href="#brokers"
                className="rounded-2xl px-10 py-5 font-bold text-black transition hover:scale-105"
                style={{
                  background:
                    "linear-gradient(135deg,#FFD54A,#F59E0B)",
                  boxShadow:
                    "0 20px 50px rgba(250,204,21,.35)",
                }}
              >
                🚀 ເລີ່ມເທຣດ
              </a>

              <a
                href="/blog"
                className="rounded-2xl border border-white/10 bg-white/5 px-10 py-5 font-bold text-white transition hover:bg-white/10"
              >
                📚 ຮຽນ Forex
              </a>

            </div>

            {/* Statistics */}

            <div className="mt-14 grid grid-cols-3 gap-5">

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:-translate-y-2 hover:border-yellow-400">

                <div className="text-5xl font-black text-yellow-400">
                  20K+
                </div>

                <div className="mt-2 text-gray-400">
                  ນັກເທຣດ
                </div>

              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:-translate-y-2 hover:border-yellow-400">

                <div className="text-5xl font-black text-yellow-400">
                  $2M+
                </div>

                <div className="mt-2 text-gray-400">
                  Cashback
                </div>

              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:-translate-y-2 hover:border-yellow-400">

                <div className="text-5xl font-black text-yellow-400">
                  24/7
                </div>

                <div className="mt-2 text-gray-400">
                  ບໍລິການ
                </div>

              </div>

            </div>

          </div>

          {/* RIGHT */}
                    <div>

            {/* Live Cards */}
            <div className="mb-5 grid grid-cols-2 gap-4">

              <LiveGoldPrice />

              <LiveBitcoin />

            </div>

            {/* Dashboard */}
            <div className="hero-card hero-glow overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-2xl transition-all duration-500 hover:scale-[1.01]">

              {/* Header */}
              <div className="flex items-center justify-between border-b border-white/10 px-7 py-5">

                <div>

                  <p className="text-sm text-gray-400">
                    ຕະຫຼາດສົດ
                  </p>

                  <h2 className="text-3xl font-black text-white">
                    XAU/USD
                  </h2>

                </div>

                <div className="rounded-full bg-green-500/15 px-5 py-2">

                  <span className="font-bold text-green-400">
                    ● LIVE
                  </span>

                </div>

              </div>

              {/* TradingView */}
              <div className="p-4">

                <div className="overflow-hidden rounded-2xl border border-white/10 transition-all duration-300 hover:border-yellow-400">

                  <TradingViewGold />

                </div>

              </div>

              {/* Market Info */}
              <div className="grid grid-cols-3 gap-4 px-4 pb-4">

                <div className="rounded-2xl border border-white/10 bg-[#101828] p-5">

                  <div className="text-xs uppercase tracking-wider text-gray-400">
                    ສະຖານະ
                  </div>

                  <div className="mt-3 text-2xl font-black text-green-400">
                    ເປີດ
                  </div>

                </div>

                <div className="rounded-2xl border border-white/10 bg-[#101828] p-5">

                  <div className="text-xs uppercase tracking-wider text-gray-400">
                    Session
                  </div>

                  <div className="mt-3 text-2xl font-black text-white">
                    London
                  </div>

                </div>

                <div className="rounded-2xl border border-white/10 bg-[#101828] p-5">

                  <div className="text-xs uppercase tracking-wider text-gray-400">
                    Trend
                  </div>

                  <div className="mt-3 text-2xl font-black text-yellow-400">
                    Bullish
                  </div>

                </div>

              </div>

              {/* Broker */}
              <div className="border-t border-white/10 px-6 py-5">

                <div className="mb-4 text-gray-400">
                  ໂບຣກເກີແນະນຳ
                </div>

                <div className="grid grid-cols-4 gap-3">

                  {[
                    { name: "XM", image: "/brokers/xm.png" },
                    { name: "Exness", image: "/brokers/exness.png" },
                    { name: "IUX", image: "/brokers/iux.png" },
                    { name: "HFM", image: "/brokers/hfm.png" },
                  ].map((broker) => (

                    <div
                      key={broker.name}
                      className="flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-3 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400"
                    >

                      <Image
                        src={broker.image}
                        alt={broker.name}
                        width={110}
                        height={40}
                        className="h-8 w-auto object-contain"
                      />

                    </div>

                  ))}

                </div>

              </div>

            </div>

          </div>
                  </div>
        {/* END GRID */}

      </div>
      {/* END CONTAINER */}

    </section>
  );
}