"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#070B16] pt-8">

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#1E293B_0%,transparent_45%)]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,#172554_0%,transparent_45%)]" />

        <div
          className="absolute -top-52 left-[-120px] w-[700px] h-[700px] rounded-full blur-[140px]"
          style={{
            background:
              "rgba(250,204,21,.12)",
          }}
        />

        <div
          className="absolute top-20 right-[-150px] w-[650px] h-[650px] rounded-full blur-[160px]"
          style={{
            background:
              "rgba(59,130,246,.15)",
          }}
        />

      </div>

      {/* Grid */}

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8">

        <div className="grid lg:grid-cols-2 gap-20 items-center min-h-[85vh] pt-16">
                  {/* LEFT */}

          <div className="relative">

            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-yellow-500/20 bg-yellow-500/10 backdrop-blur-xl mb-8">

              <span className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></span>

              <span className="text-yellow-400 font-bold">
                ຊຸມຊົນນັກເທຣດຄົນລາວ
              </span>

            </div>

            <h1 className="text-6xl lg:text-7xl font-black leading-tight text-white">

              ເທຣດ

              <br />

              <span className="bg-gradient-to-r from-yellow-300 via-orange-400 to-yellow-500 bg-clip-text text-transparent">

                Forex

              </span>

              <br />

              ຢ່າງມືອາຊີບ

            </h1>

            <p className="mt-8 text-xl leading-9 text-gray-300 max-w-xl">

              LaoForex ລວບລວມ Broker ຊັ້ນນຳ,
              Cashback,
              Bonus,
              ບົດຮຽນ Forex,
              ແລະ
              ຂ່າວສານການລົງທຶນ
              ສຳລັບຄົນລາວໃນບ່ອນດຽວ.

            </p>

            <div className="flex flex-wrap gap-5 mt-10">

              <a
                href="#brokers"
                className="px-10 py-5 rounded-2xl font-bold text-black transition duration-300 hover:scale-105"
                style={{
                  background:
                    "linear-gradient(135deg,#FFD54A,#F59E0B)",
                  boxShadow:
                    "0 25px 60px rgba(250,204,21,.35)",
                }}
              >

                🚀 ເລີ່ມເທຣດ

              </a>

              <a
                href="/blog"
                className="px-10 py-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl text-white font-bold hover:bg-white/10 transition"
              >

                📚 ຮຽນ Forex

              </a>

            </div>

            <div className="grid grid-cols-3 gap-6 mt-14">

              <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">

                <div className="text-yellow-400 text-4xl font-black">
                  20K+
                </div>

                <div className="text-gray-400 mt-2">
                  ເທຣດເດີ້
                </div>

              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">

                <div className="text-yellow-400 text-4xl font-black">
                  $2M+
                </div>

                <div className="text-gray-400 mt-2">
                  ຄືນເງິນ
                </div>

              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">

                <div className="text-yellow-400 text-4xl font-black">
                  24/7
                </div>

                <div className="text-gray-400 mt-2">
                  ບໍລິການ
                </div>

              </div>

            </div>

          </div>

          {/* RIGHT START */}
                    {/* RIGHT */}

          <div className="relative">

            {/* Glow */}
            <div className="absolute -inset-8 rounded-[40px] bg-gradient-to-r from-yellow-500/20 via-orange-500/10 to-blue-500/20 blur-3xl"></div>

            {/* Main Card */}
     <div className="relative rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-2xl overflow-hidden">

              {/* Header */}
              <div className="flex items-center justify-between px-8 py-6 border-b border-white/10">

                <div>
                  <p className="text-gray-400 text-sm">
                   ລາຄາຄຳສົດ
                  </p>

                  <h2 className="text-white text-3xl font-black">
                    XAU/USD
                  </h2>
                </div>

                <div className="rounded-full bg-green-500/15 px-5 py-2 text-green-400 font-bold">
                  ▲ +1.18%
                </div>

              </div>

              {/* Chart */}

              <div className="p-8">

                <div className="rounded-3xl overflow-hidden bg-[#0B1220] border border-white/10">

                  <img
                    src="https://images.unsplash.com/photo-1642790106117-e829e14a795f?auto=format&fit=crop&w=1200&q=80"
                    alt="Chart"
                    className="w-full h-[300px] object-cover opacity-90"
                  />

                </div>

                {/* Price */}

                <div className="grid grid-cols-2 gap-5 mt-6">

                  <div className="rounded-2xl bg-white/5 border border-white/10 p-5">

                    <div className="text-gray-400 text-sm">
                     ລາຄາປັດຈຸບັນ
                    </div>

                    <div className="text-4xl font-black text-white mt-2">
                      3,352.84
                    </div>

                    <div className="text-green-400 mt-2">
                      +23.18 USD
                    </div>

                  </div>

                  <div className="rounded-2xl bg-white/5 border border-white/10 p-5">

                    <div className="text-gray-400 text-sm">
                      ສະຖານະຕະຫຼາດ
                    </div>

                    <div className="text-4xl font-black text-white mt-2">
                      ເປີດຕະຫຼາດ
                    </div>

                    <div className="text-green-400 mt-2">
                     ຊື້ຂາຍແບບສົດ
                    </div>

                  </div>

                </div>

                {/* Broker Logos */}

                <div className="mt-8">

                  <div className="text-gray-400 mb-4">
                    ໂບຣກເກີແນະນຳ
                  </div>

                  <div className="grid grid-cols-2 gap-4">
{[
  { name: "XM", image: "/brokers/xm.png" },
  { name: "Exness", image: "/brokers/exness.png" },
  { name: "HFM", image: "/brokers/hfm.png" },
  { name: "IUX", image: "/brokers/iux.png" },
].map((broker) => (
  <div
    key={broker.name}
    className="rounded-2xl border border-white/10 bg-white/5 py-5 flex items-center justify-center hover:border-yellow-400 transition-all duration-300"
  >
    <Image
      src={broker.image}
      alt={broker.name}
      width={130}
      height={40}
      className="h-10 w-auto object-contain"
    />
  </div>
))}


                  </div>

                </div>

              </div>

            </div>

            {/* Floating Card */}

            <div className="absolute -top-6 -right-6 rounded-2xl border border-yellow-400/20 bg-[#111827]/90 backdrop-blur-xl px-6 py-5 shadow-2xl">

              <div className="text-xs text-gray-400">
              ເງິນຄືນມື້ນີ້
              </div>

              <div className="text-3xl font-black text-yellow-400 mt-2">
                $126
              </div>

              <div className="text-green-400 text-sm mt-1">
                +18%
              </div>

            </div>

          </div>
                  </div>

        {/* Bottom Trust Bar */}

        <div className="mt-24">

          <div className="rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-2xl p-8">

            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">

              <div>

                <div className="text-5xl font-black text-yellow-400">
                  20K+
                </div>

                <p className="text-gray-400 mt-2">
                  ນັກເທຣດຄົນລາວ
                </p>

              </div>

              <div>

                <div className="text-5xl font-black text-yellow-400">
                  15+
                </div>

                <p className="text-gray-400 mt-2">
                  ໂບຣກເກີທີ່ແນະນຳ
                </p>

              </div>

              <div>

                <div className="text-5xl font-black text-yellow-400">
                  $2M+
                </div>

                <p className="text-gray-400 mt-2">
                  ຍອດເງິນຄືນ
                </p>

              </div>

              <div>

                <div className="text-5xl font-black text-yellow-400">
                  24/7
                </div>

                <p className="text-gray-400 mt-2">
                  ທີມງານຄົນລາວ
                </p>

              </div>
          </div>
    </div>
</div>
</div>
{/* Bottom Trust Bar */}
     
  </section>

  );
}