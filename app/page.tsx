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
      deposit: "$30",
      depositType: "ທະນາຄານລາວ",
      badge: "🥇 ອັນດັບ 1",
      badgeColor: "bg-yellow-400 text-black",
      border: "border-yellow-400/40",
      link: "https://affs.click/wLl9B",
      review: "/xm",
    },

    {
      name: "Exness",
      rating: "4.6/5",
      source: "Trustpilot",
      cashback: "$3/Lot",
      spread: "1.0 pip",
      pair: "EURUSD Avg",
      deposit: "$20",
      depositType: "ທະນາຄານລາວ",
      badge: "🥈 ອັນດັບ 2",
      badgeColor: "bg-gray-300 text-black",
      border: "border-gray-400/40",
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
      depositType: "ທະນາຄານລາວ",
      badge: "🥉 ອັນດັບ 3",
      badgeColor: "bg-orange-500 text-white",
      border: "border-orange-400/40",
      link: "https://vigco.co/la-com-inv/wmd8Y80S",
      review: "/vantage",
    },

    {
      name: "IUX",
      rating: "4.2/5",
      source: "Trustpilot",
      cashback: "$2/Lot",
      spread: "0.9 pip",
      pair: "EURUSD Avg",
      deposit: "$50",
      depositType: "ທະນາຄານລາວ",
      badge: "⭐ Low Spread",
      badgeColor: "bg-pink-500 text-white",
      border: "border-pink-400/40",
      link: "https://iux.com/en/register?code=EPs5nw6M",
      review: "/iux",
    },

    {
      name: "HFM",
      rating: "4.0/5",
      source: "Trustpilot",
      cashback: "$3/Lot",
      spread: "1.1 pip",
      pair: "EURUSD Avg",
      deposit: "$50",
      depositType: "ທະນາຄານລາວ",
      badge: "✅ Trusted",
      badgeColor: "bg-cyan-500 text-white",
      border: "border-cyan-400/40",
      link:
        "https://register.hfm.com/sv/en/new-live-account/?refid=30421077",
      review: "/hfm",
    },

    {
      name: "Market4you",
      rating: "3.9/5",
      source: "Trustpilot",
      cashback: "$3/Lot",
      spread: "1.5 pip",
      pair: "EURUSD Avg",
      deposit: "$10",
      depositType: "ທະນາຄານລາວ",
      badge: "🎁 Bonus",
      badgeColor: "bg-green-500 text-white",
      border: "border-green-400/40",
      link:
        "https://account.markets4you.online/en/user-registration/?affid=bpblvtj",
      review: "/market4you",
    },
  ];

  return (
    <main className="bg-[#050816] text-white min-h-screen overflow-hidden">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 border-b border-yellow-500/10 bg-[#050816]/90 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src="/logo.png"
              alt="LaoForex"
              className="w-14 h-14 object-contain"
            />

            <div>
              <h1 className="text-3xl font-black text-yellow-400 tracking-wide">
                LaoForex
              </h1>

              <p className="text-gray-400 text-sm">
                Forex Brokers Laos
              </p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 font-semibold text-gray-300">
            <a href="/" className="hover:text-yellow-400 transition">
              ໜ້າຫຼັກ
            </a>

            <a
              href="/reviews"
              className="hover:text-yellow-400 transition"
            >
              Reviews
            </a>

            <a href="/blog" className="hover:text-yellow-400 transition">
              Blog
            </a>

            <a
              href="#brokers"
              className="hover:text-yellow-400 transition"
            >
              Brokers
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(250,204,21,0.15),transparent_40%)]" />

        <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/20 text-yellow-300 px-5 py-2 rounded-full text-sm font-bold mb-8">
              🔥 Trusted Forex Brokers For Laos
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8">
              ປຽບທຽບ
              <span className="text-yellow-400"> Forex Brokers </span>
              <br />
              ທີ່ດີສຸດໃນລາວ
            </h1>

            <p className="text-gray-400 text-lg leading-9 max-w-3xl mx-auto">
              ຣີວິວໂບກເກີ້ Forex ສໍາລັບຄົນລາວ,
              cashback rebate, spread, ຄວາມໜ້າເຊື່ອຖື
              ແລະ ປະສົບການໃຊ້ງານຈິງ.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-5 mt-12">
              <a
                href="#brokers"
                className="bg-yellow-400 hover:bg-yellow-300 transition text-black px-8 py-4 rounded-2xl font-black text-lg"
              >
                🚀 ເລືອກ Broker
              </a>

              <a
                href="/blog"
                className="border border-white/10 hover:border-yellow-400/30 hover:bg-white/5 transition px-8 py-4 rounded-2xl font-bold text-lg"
              >
                📖 ຮຽນ Forex
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="max-w-7xl mx-auto px-6 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {[
            {
              title: "6+",
              desc: "Top Brokers",
            },
            {
              title: "$4/Lot",
              desc: "Max Cashback",
            },
            {
              title: "24/7",
              desc: "Lao Support",
            },
            {
              title: "100%",
              desc: "Free Reviews",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-[#0f172a] border border-white/5 rounded-3xl p-7 text-center"
            >
              <h2 className="text-4xl font-black text-yellow-400">
                {item.title}
              </h2>

              <p className="text-gray-400 mt-3">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SEARCH */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="bg-[#0f172a] border border-white/5 rounded-3xl p-4">
          <input
            type="text"
            placeholder="🔍 ຄົ້ນຫາ Broker..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-transparent px-4 py-4 outline-none text-lg text-white placeholder:text-gray-500"
          />
        </div>
      </section>

      {/* BROKERS */}
      <section id="brokers" className="max-w-7xl mx-auto px-6 pb-20">
        <div className="flex items-center justify-between mb-10 flex-wrap gap-4">
          <div>
            <p className="text-yellow-400 uppercase tracking-widest text-sm font-bold mb-3">
              TOP BROKERS
            </p>

            <h2 className="text-4xl md:text-5xl font-black">
              Forex Brokers Reviews
            </h2>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {brokers
            .filter((broker) =>
              broker.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((broker) => (
              <div
                key={broker.name}
                className={`bg-[#0f172a] border ${broker.border} rounded-[32px] p-8 hover:-translate-y-1 transition duration-300`}
              >
                <div className="flex items-start justify-between gap-5 mb-8 flex-wrap">
                  <div>
                    <h2 className="text-4xl font-black mb-3">
                      {broker.name}
                    </h2>

                    <div className="flex items-center gap-3 text-gray-400">
                      <span className="text-yellow-400 text-lg">⭐</span>
                      <span>
                        {broker.rating} ({broker.source})
                      </span>
                    </div>
                  </div>

                  <span
                    className={`${broker.badgeColor} px-5 py-2 rounded-full font-black text-sm`}
                  >
                    {broker.badge}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-[#111827] rounded-2xl p-5 border border-white/5">
                    <p className="text-gray-500 text-sm mb-2">
                      Cashback
                    </p>

                    <h3 className="text-3xl font-black text-yellow-400">
                      {broker.cashback}
                    </h3>
                  </div>

                  <div className="bg-[#111827] rounded-2xl p-5 border border-white/5">
                    <p className="text-gray-500 text-sm mb-2">
                      Spread
                    </p>

                    <h3 className="text-3xl font-black text-yellow-400">
                      {broker.spread}
                    </h3>
                  </div>

                  <div className="bg-[#111827] rounded-2xl p-5 border border-white/5">
                    <p className="text-gray-500 text-sm mb-2">
                      Pair
                    </p>

                    <h3 className="text-2xl font-black text-white">
                      {broker.pair}
                    </h3>
                  </div>

                  <div className="bg-[#111827] rounded-2xl p-5 border border-white/5">
                    <p className="text-gray-500 text-sm mb-2">
                      Deposit
                    </p>

                    <h3 className="text-2xl font-black text-white">
                      {broker.deposit}
                    </h3>

                    <p className="text-gray-500 text-sm mt-2">
                      via {broker.depositType}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <a
                    href={broker.review}
                    className="bg-[#111827] hover:bg-[#1f2937] transition border border-white/10 py-4 rounded-2xl text-center font-bold text-lg"
                  >
                    📖 ອ່ານຣີວິວ
                  </a>

                  <a
                    href={broker.link}
                    target="_blank"
                    className="bg-yellow-400 hover:bg-yellow-300 transition text-black py-4 rounded-2xl text-center font-black text-lg"
                  >
                    🚀 ເປີດບັນຊີ
                  </a>
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* GUIDE */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="bg-[#0f172a] border border-white/5 rounded-[40px] p-10 md:p-14">
          <div className="mb-10">
            <p className="text-yellow-400 uppercase tracking-widest text-sm font-bold mb-3">
              Broker Guide
            </p>

            <h2 className="text-4xl font-black">
              ໂບກເກີ້ໃດເໝາະກັບໃຜ?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#111827] border border-white/5 rounded-3xl p-7">
              <h3 className="text-3xl font-black text-yellow-400 mb-4">
                🥇 XM
              </h3>

              <p className="text-gray-400 leading-8">
                ເໝາະສໍາລັບຜູ້ເລີ່ມຕົ້ນ,
                bonus ດີ ແລະ support ໃຊ້ງ່າຍ.
              </p>
            </div>

            <div className="bg-[#111827] border border-white/5 rounded-3xl p-7">
              <h3 className="text-3xl font-black text-yellow-400 mb-4">
                🥈 Exness
              </h3>

              <p className="text-gray-400 leading-8">
                leverage ສູງ,
                ຝາກຖອນໄວ ແລະ spread ດີ.
              </p>
            </div>

            <div className="bg-[#111827] border border-white/5 rounded-3xl p-7">
              <h3 className="text-3xl font-black text-yellow-400 mb-4">
                🥉 Vantage
              </h3>

              <p className="text-gray-400 leading-8">
                ເໝາະສໍາລັບ scalping,
                rebate cashback ແລະ raw spread.
              </p>
            </div>

            <div className="bg-[#111827] border border-white/5 rounded-3xl p-7">
              <h3 className="text-3xl font-black text-yellow-400 mb-4">
                ⭐ IUX
              </h3>

              <p className="text-gray-400 leading-8">
                spread ຕໍ່າ,
                UI ທັນສະໄໝ ແລະ ໃຊ້ງານງ່າຍ.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="bg-[#0f172a] border border-white/5 rounded-[40px] overflow-hidden">
          <div className="p-8 border-b border-white/5">
            <p className="text-yellow-400 uppercase tracking-widest text-sm font-bold mb-3">
              Comparison
            </p>

            <h2 className="text-4xl font-black">
              ປຽບທຽບ Forex Brokers
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px]">
              <thead>
                <tr className="border-b border-white/5 bg-black/20 text-left">
                  <th className="p-6 text-yellow-400">Broker</th>
                  <th className="p-6 text-yellow-400">Rating</th>
                  <th className="p-6 text-yellow-400">Spread</th>
                  <th className="p-6 text-yellow-400">Cashback</th>
                  <th className="p-6 text-yellow-400">Deposit</th>
                  <th className="p-6 text-yellow-400">Action</th>
                </tr>
              </thead>

              <tbody>
                {brokers.map((broker) => (
                  <tr
                    key={broker.name}
                    className="border-b border-white/5 hover:bg-white/5 transition"
                  >
                    <td className="p-6 font-black text-xl">
                      {broker.name}
                    </td>

                    <td className="p-6 text-yellow-400 font-bold">
                      {broker.rating}
                    </td>

                    <td className="p-6 text-gray-300">
                      {broker.spread}
                    </td>

                    <td className="p-6 text-gray-300">
                      {broker.cashback}
                    </td>

                    <td className="p-6 text-gray-300">
                      {broker.deposit}
                    </td>

                    <td className="p-6">
                      <a
                        href={broker.link}
                        target="_blank"
                        className="bg-yellow-400 hover:bg-yellow-300 transition text-black px-5 py-3 rounded-xl font-black"
                      >
                        Open
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* BLOG SECTION */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="flex items-center justify-between mb-10 flex-wrap gap-4">
          <div>
            <p className="text-yellow-400 uppercase tracking-widest text-sm font-bold mb-3">
              BLOG
            </p>

            <h2 className="text-4xl font-black">
              Forex Articles Laos
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Forex ແມ່ນຫຍັງ?",
              desc: "ຮຽນພື້ນຖານ Forex ສໍາລັບຜູ້ເລີ່ມຕົ້ນ.",
            },
            {
              title: "Best Forex Broker Laos",
              desc: "ປຽບທຽບ broker ສໍາລັບຄົນລາວ.",
            },
            {
              title: "Exness Review Laos",
              desc: "ຣີວິວ Exness ແບບລະອຽດ.",
            },
          ].map((post) => (
            <div
              key={post.title}
              className="bg-[#0f172a] border border-white/5 rounded-[32px] p-8 hover:-translate-y-1 transition"
            >
              <div className="w-full h-44 rounded-2xl bg-gradient-to-br from-yellow-400/20 to-transparent mb-6" />

              <h3 className="text-2xl font-black mb-4">
                {post.title}
              </h3>

              <p className="text-gray-400 leading-8">
                {post.desc}
              </p>

              <button className="mt-8 text-yellow-400 font-bold">
                Read More →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* DISCLAIMER */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="bg-red-500/10 border border-red-500/20 rounded-[32px] p-8">
          <h2 className="text-2xl font-black text-red-300 mb-6">
            ⚠️ Risk Warning
          </h2>

          <div className="space-y-4 text-gray-300 leading-8">
            <p>
              Forex ແລະ CFD ມີຄວາມສ່ຽງສູງ ແລະ
              ອາດເຮັດໃຫ້ສູນເສຍເງິນລົງທຶນໄດ້.
            </p>

            <p>
              Rating ອ້າງອີງຈາກ Trustpilot
              ແລະ ຂໍ້ມູນສາທາລະນະ.
            </p>

            <p>
              Spread ແລະ Cashback ອາດປ່ຽນແປງຕາມ market conditions.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 bg-black/30">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-3 gap-10">
            <div>
              <h2 className="text-4xl font-black text-yellow-400 mb-5">
                LaoForex
              </h2>

              <p className="text-gray-400 leading-8 max-w-sm">
                ລວມ Forex Brokers,
                cashback rebate ແລະ ຣີວິວສໍາລັບຄົນລາວ.
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

                <a
                  href="/reviews"
                  className="hover:text-yellow-400 transition"
                >
                  Reviews
                </a>

                <a
                  href="/blog"
                  className="hover:text-yellow-400 transition"
                >
                  Blog
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

                <a
                  href="/exness"
                  className="hover:text-yellow-400 transition"
                >
                  Exness
                </a>

                <a
                  href="/vantage"
                  className="hover:text-yellow-400 transition"
                >
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

          <div className="border-t border-white/5 mt-14 pt-8 text-center text-gray-500">
            © 2026 LaoForex.org — All Rights Reserved
          </div>
        </div>
      {/* TELEGRAM FLOATING BUTTON */}
      <a
        href="https://t.me/laoforex"
        target="_blank"
        className="fixed bottom-6 right-6 z-50 bg-[#229ED9] hover:scale-110 transition w-16 h-16 rounded-full flex items-center justify-center shadow-2xl text-3xl"
      >
        ✈️
      </a>

      </footer>
      <div className="flex gap-6 justify-center mt-8 text-gray-400">
  <a href="/privacy-policy">Privacy Policy</a>
  <a href="/disclaimer">Disclaimer</a>
  <a href="/contact">Contact</a>
</div>
    </main>
  );
}
