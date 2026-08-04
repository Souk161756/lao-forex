export default function Sidebar() {
  return (
    <div className="space-y-6">

      {/* Gold */}
      <div className="rounded-3xl border border-yellow-500/20 bg-[#111827] p-6 shadow-lg">

        <div className="mb-5 flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-400">🥇 Gold Price</p>
            <h2 className="mt-1 text-2xl font-bold text-white">
              XAU/USD
            </h2>
          </div>

          <span className="rounded-full bg-green-500/10 px-3 py-1 text-sm font-semibold text-green-400">
            LIVE
          </span>
        </div>

        <div className="text-4xl font-black text-green-400">
          3,338.52
        </div>

        <div className="mt-2 text-lg font-semibold text-green-400">
          ▲ +12.35 (+0.37%)
        </div>

      </div>

      {/* Major Pairs */}

      <div className="rounded-3xl border border-white/10 bg-[#111827] p-6">

        <h2 className="mb-5 text-xl font-bold text-white">
          💱 Major Pairs
        </h2>

        <div className="space-y-3">

          <div className="flex justify-between border-b border-white/5 pb-3">
            <span className="text-gray-300">EUR/USD</span>
            <span className="text-green-400">1.1762 ▲</span>
          </div>

          <div className="flex justify-between border-b border-white/5 pb-3">
            <span className="text-gray-300">GBP/USD</span>
            <span className="text-red-400">1.3521 ▼</span>
          </div>

          <div className="flex justify-between border-b border-white/5 pb-3">
            <span className="text-gray-300">USD/JPY</span>
            <span className="text-green-400">148.64 ▲</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-300">AUD/USD</span>
            <span className="text-green-400">0.6598 ▲</span>
          </div>

        </div>

      </div>

      {/* Market Sessions */}

      <div className="rounded-3xl border border-white/10 bg-[#111827] p-6">

        <h2 className="mb-5 text-xl font-bold text-white">
          🌍 Market Sessions
        </h2>

        <div className="space-y-3">

          <div className="flex justify-between">
            <span className="text-gray-300">Sydney</span>
            <span className="rounded-full bg-red-500/10 px-3 py-1 text-sm text-red-400">
              CLOSED
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-300">Tokyo</span>
            <span className="rounded-full bg-red-500/10 px-3 py-1 text-sm text-red-400">
              CLOSED
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-300">London</span>
            <span className="rounded-full bg-green-500/10 px-3 py-1 text-sm text-green-400">
              OPEN
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-300">New York</span>
            <span className="rounded-full bg-green-500/10 px-3 py-1 text-sm text-green-400">
              OPEN
            </span>
          </div>

        </div>

      </div>

      {/* News */}

      <div className="rounded-3xl border border-white/10 bg-[#111827] p-6">

        <h2 className="mb-5 text-xl font-bold text-white">
          📰 Latest News
        </h2>

        <div className="space-y-3">

          <div className="rounded-xl bg-white/5 p-4 hover:bg-white/10 transition">
            FOMC Meeting This Week
          </div>

          <div className="rounded-xl bg-white/5 p-4 hover:bg-white/10 transition">
            US GDP Release
          </div>

          <div className="rounded-xl bg-white/5 p-4 hover:bg-white/10 transition">
            Gold Market Outlook
          </div>

        </div>

      </div>

    </div>
  );
}