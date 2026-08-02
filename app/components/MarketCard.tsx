"use client";

type Props = {
  icon: string;
  symbol: string;
  name: string;
  price: string;
  change: string;
  color: string;
};

export default function MarketCard({
  icon,
  symbol,
  name,
  price,
  change,
  color,
}: Props) {
  return (
    <div className="rounded-3xl border border-white/10 bg-[#131722] p-4 hover:border-yellow-400 transition">

      <div className="flex items-center gap-3">

        <div className="text-4xl">{icon}</div>

        <div>

          <div className="text-white font-bold text-lg">
            {symbol}
          </div>

          <div className="text-gray-400 text-sm">
            {name}
          </div>

        </div>

      </div>

      <div className="mt-6">

        <div className="text-3xl font-black text-white">
          {price}
        </div>

        <div
          className="mt-1 font-semibold"
          style={{ color }}
        >
          {change}
        </div>

      </div>

      <div className="mt-5 h-16 rounded-xl bg-gradient-to-r from-green-500/10 via-green-500/40 to-green-500/10 flex items-center justify-center">

        <svg width="100%" height="50">
          <polyline
            fill="none"
            stroke={color}
            strokeWidth="3"
            points="
            0,40
            30,38
            60,32
            90,30
            120,28
            150,18
            180,20
            210,12
            240,8
            270,10
            300,5"
          />
        </svg>

      </div>

    </div>
  );
}