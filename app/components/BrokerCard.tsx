"use client";

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

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <span
          key={i}
          style={{
            fontSize: "13px",
            color: i <= Math.round(rating) ? "#facc15" : "#374151",
          }}
        >
          ★
        </span>
      ))}
    </div>
  );
}

interface Props {
  broker: Broker;
}

export default function BrokerCard({ broker }: Props) {
 return (
  <div
    className="rounded-[28px] p-6 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02]"
    style={{
      background: broker.highlight
        ? "linear-gradient(135deg, rgba(250,204,21,0.07) 0%, rgba(7,8,15,1) 60%)"
        : "rgba(255,255,255,0.025)",
      border: `1px solid ${broker.borderColor}`,
      boxShadow: `0 8px 40px ${broker.glowColor}`,
    }}
  >
      <div className="flex items-center justify-between mb-5 flex-wrap gap-3">
        <div className="flex items-center gap-4">
          <div
            className="w-14 h-14 rounded-2xl overflow-hidden flex items-center justify-center flex-shrink-0"
            style={{
              background: "rgba(255,255,255,0.07)",
              border: "1px solid rgba(255,255,255,0.12)",
            }}
          >
            <img
              src={broker.logo}
              alt={broker.name}
              className="w-10 h-10 object-contain"
            />
          </div>

          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="font-black text-xl text-white">
                {broker.name}
              </span>

              <span
                className="text-[11px] font-bold px-2.5 py-0.5 rounded-full"
                style={broker.tagStyle}
              >
                {broker.tag}
              </span>
            </div>

            <Stars rating={broker.rating} />

            <div className="text-xs text-gray-500 mt-0.5">
              {broker.ratingText} · ຄະແນນຈາກຜູ້ໃຊ້
            </div>
          </div>
        </div>

        <div
          className="px-4 py-1.5 rounded-full text-sm font-black text-black"
          style={{
            background: broker.badgeBg,
          }}
        >
          🏆 {broker.badge}
        </div>
      </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-5">
        {[
         {
  label: "ຝາກເລີ່ມຕົ້ນ",
  value: broker.deposit,
  sub: "ເປີດບັນຊີໄດ້",
},
{
  label: "ເງິນຄືນ",
  value: broker.cashback,
  sub: "ຕໍ່ 1 Lot",
},
{
  label: "ສະເປຣດ",
  value: broker.spread,
  sub: "EUR/USD",
},
{
  label: "ເລເວີເຣດ",
  value: broker.leverage,
  sub: "ສູງສຸດ",
},
        ].map((stat) => (
          <div
            key={stat.label}
            className="rounded-xl px-4 py-3"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            <div className="text-xs text-gray-500 mb-1">
              {stat.label}
            </div>

            <div
              className="font-black text-sm"
              style={{
                color: broker.accentColor,
              }}
            >
              {stat.value}
            </div>

            <div className="text-[10px] text-gray-600 mt-0.5">
              {stat.sub}
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2 text-green-400">
  ✅ <span>ຮອງຮັບການຝາກ-ຖອນຜ່ານ BCEL</span>
</div>

<div className="flex items-center gap-2 text-green-400">
  ✅ <span>ສະໝັກບັນຊີໄດ້ຟຣີ</span>
</div>

<div className="flex items-center gap-2 text-green-400">
  ✅ <span>ຮອງຮັບນັກເທຣດຊາວລາວ</span>
</div>
            <div className="flex gap-3">
        <a
          href={broker.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-3.5 rounded-xl font-black text-sm text-center text-black transition-all hover:scale-[1.02]"
          style={{
            background: "linear-gradient(135deg, #facc15, #f97316)",
          }}
        >
          🚀 ເປີດບັນຊີ
        </a>

        <a
          href={broker.review}
          className="px-6 py-3.5 rounded-xl font-bold text-sm text-center transition-all hover:scale-[1.02]"
          style={{
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.12)",
            color: "#fff",
          }}
        >
        📖 ອ່ານລີວິວ
                             </a>
      </div>
          </div>
  );
}
