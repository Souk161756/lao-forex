export default function IUXPage() {
  return (
    <main className="bg-black min-h-screen text-white px-6 py-16">

      <div className="max-w-5xl mx-auto">

        <div className="bg-[#0f172a] border border-pink-500 rounded-3xl p-10">

          <div className="flex items-center justify-between mb-10">

            <h1 className="text-5xl font-black">
              IUX Review
            </h1>

            <span className="bg-pink-500 text-white px-5 py-3 rounded-full font-black">
              💎 Low Spread
            </span>

          </div>

          <div className="grid md:grid-cols-2 gap-5 mb-10">

            <div className="bg-[#111827] rounded-2xl p-5">
              <p className="text-gray-400 mb-2">⭐ Rating</p>
              <h3 className="text-4xl font-black text-yellow-400">
                8.9/10
              </h3>
            </div>

            <div className="bg-[#111827] rounded-2xl p-5">
              <p className="text-gray-400 mb-2">💰 Cashback</p>
              <h3 className="text-4xl font-black text-yellow-400">
                $4/Lot
              </h3>
            </div>

            <div className="bg-[#111827] rounded-2xl p-5">
              <p className="text-gray-400 mb-2">⚡ Spread</p>
              <h3 className="text-4xl font-black text-yellow-400">
                0.7 pip
              </h3>
            </div>

            <div className="bg-[#111827] rounded-2xl p-5">
              <p className="text-gray-400 mb-2">💳 Min Deposit</p>
              <h3 className="text-4xl font-black text-yellow-400">
                $50
              </h3>
            </div>

          </div>

          <a
            href="https://iux.com/en/register?code=EPs5nw6M"
            target="_blank"
            className="block w-full bg-yellow-400 py-5 rounded-2xl text-black text-center text-2xl font-black"
          >
            ເປີດບັນຊີ IUX
          </a>

        </div>

      </div>

    </main>
  );
}