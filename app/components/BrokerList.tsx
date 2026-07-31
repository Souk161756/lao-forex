"use client";

import BrokerCard from "./BrokerCard";

interface Broker {
  name: string;
  logo: string;
  rating: number;
  ratingText: string;
  cashback: string;
  spread: string;
  deposit: string;
  leverage: string;
  badge: string;
  badgeBg: string;
  glowColor: string;
  accentColor: string;
  borderColor: string;
  tag: string;
  tagStyle: React.CSSProperties;
  link: string;
  review: string;
  highlight: boolean;
}

interface Props {
  brokers: Broker[];
  search: string;
}

export default function BrokerList({
  brokers,
  search,
}: Props) {
  const filtered = brokers.filter((broker) =>
    broker.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section
      id="brokers"
      className="max-w-7xl mx-auto px-5 py-24"
    >
      {/* Heading */}

      <div className="text-center mb-14">

        <span
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold mb-6"
          style={{
            background: "rgba(250,204,21,.08)",
            color: "#facc15",
            border: "1px solid rgba(250,204,21,.2)",
          }}
        >
          ⭐ ໂບຣກເກີ Forex ທີ່ແນະນຳ
        </span>

        <h2
          className="font-black text-white mb-6"
          style={{
            fontSize: "clamp(2.2rem,5vw,4rem)",
            lineHeight: "1.2",
          }}
        >
          ຈັດອັນດັບ
          <br />

          <span
            style={{
              background:
                "linear-gradient(135deg,#FACC15,#FB923C)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            ໂບຣກເກີ Forex
          </span>

          <br />

          ສຳລັບຄົນລາວ
        </h2>

        <p
          className="text-gray-400 mx-auto"
          style={{
            maxWidth: 760,
            lineHeight: "2",
          }}
        >
          ພວກເຮົາໄດ້ຄັດເລືອກໂບຣກເກີທີ່ນັກເທຣດຊາວລາວນິຍົມ,
          ຝາກ-ຖອນໄດ້ສະດວກ,
          ຄ່າສະເປຣດຕ່ຳ,
          ແລະມີຄວາມໜ້າເຊື່ອຖືສູງ.
        </p>

      </div>

      {/* Cards */}

      <div className="flex flex-col gap-6">

        {filtered.length > 0 ? (

          filtered.map((broker, index) => (

            <div key={broker.name} className="relative">

              {index === 0 && (
                <div
                  className="absolute -top-3 left-6 px-4 py-1 rounded-full text-xs font-black z-10"
                  style={{
                    background:
                      "linear-gradient(135deg,#facc15,#fb923c)",
                    color: "#000",
                  }}
                >
                  🥇 ແນະນຳທີ່ສຸດ
                </div>
              )}

              {index === 1 && (
                <div
                  className="absolute -top-3 left-6 px-4 py-1 rounded-full text-xs font-black z-10"
                  style={{
                    background: "#d1d5db",
                    color: "#000",
                  }}
                >
                  🥈 ຍອດນິຍົມ
                </div>
              )}

              {index === 2 && (
                <div
                  className="absolute -top-3 left-6 px-4 py-1 rounded-full text-xs font-black z-10"
                  style={{
                    background: "#cd7f32",
                    color: "#fff",
                  }}
                >
                  🥉 ຄຸ້ມຄ່າ
                </div>
              )}

              <BrokerCard broker={broker} />

            </div>

          ))

        ) : (

          <div
            className="rounded-3xl p-10 text-center"
            style={{
              background: "rgba(255,255,255,.03)",
              border: "1px solid rgba(255,255,255,.08)",
            }}
          >
            <div className="text-6xl mb-4">
              🔍
            </div>

            <h3 className="text-white text-2xl font-bold mb-3">
              ບໍ່ພົບໂບຣກເກີ
            </h3>

            <p className="text-gray-400">
              ລອງຄົ້ນຫາຊື່ໂບຣກເກີໃໝ່ ຫຼື ລຶບຂໍ້ຄວາມຄົ້ນຫາ.
            </p>

          </div>

        )}

      </div>

      {/* Footer */}

      <div
        className="mt-16 rounded-3xl p-6 text-center"
        style={{
          background: "rgba(250,204,21,.05)",
          border: "1px solid rgba(250,204,21,.15)",
        }}
      >
        <h3 className="text-yellow-400 font-bold text-lg mb-3">
          📢 ຂໍ້ຄວນຮູ້ກ່ອນລົງທຶນ
        </h3>

        <p
          className="text-gray-400"
          style={{
            lineHeight: "1.9",
          }}
        >
          ການລົງທຶນໃນ Forex ແລະ CFD
          ມີຄວາມສ່ຽງ.
          ຄວນສຶກສາຂໍ້ມູນໃຫ້ລະອຽດ
          ແລະ ບໍລິຫານຄວາມສ່ຽງກ່ອນການລົງທຶນທຸກຄັ້ງ.
        </p>
      </div>

    </section>
  );
}