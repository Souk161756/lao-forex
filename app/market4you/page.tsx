export default function Market4youPage() {
  return (
    <main className="bg-black min-h-screen text-white px-6 py-16">

      <div className="max-w-5xl mx-auto">

        <div className="bg-[#0f172a] border border-orange-500 rounded-3xl p-10">

          <div className="flex items-center justify-between mb-10">

            <h1 className="text-5xl font-black">
              Market4you Review
            </h1>

            <span className="bg-orange-500 text-white px-5 py-3 rounded-full font-black">
              🎁 Bonus
            </span>

          </div>

          <p className="text-gray-400 text-lg leading-8 mb-10">
            Market4you ເປັນ broker ທີ່ມີ bonus ແລະ cashback ດີ
            ເໝາະສຳລັບນັກເທຣດມືໃໝ່
          </p>

          <div className="grid md:grid-cols-2 gap-5 mb-10">

            <div className="bg-[#111827] rounded-2xl p-5">
              <p className="text-gray-400 mb-2">⭐ Rating</p>
              <h3 className="text-4xl font-black text-yellow-400">
                8.7/10
              </h3>
            </div>

            <div className="bg-[#111827] rounded-2xl p-5">
              <p className="text-gray-400 mb-2">💰 Cashback</p>
              <h3 className="text-4xl font-black text-yellow-400">
                $3/Lot
              </h3>
            </div>

            <div className="bg-[#111827] rounded-2xl p-5">
              <p className="text-gray-400 mb-2">⚡ Spread</p>
              <h3 className="text-4xl font-black text-yellow-400">
                1.2 pip
              </h3>
            </div>

            <div className="bg-[#111827] rounded-2xl p-5">
              <p className="text-gray-400 mb-2">💳 Min Deposit</p>
              <h3 className="text-4xl font-black text-yellow-400">
                $30
              </h3>
            </div>

          </div>

          <a
            href="https://account.markets4you.online/en/user-registration/?affid=bpblvtj"
            target="_blank"
            className="block w-full bg-yellow-400 hover:bg-yellow-300 transition text-black py-5 rounded-2xl text-center text-2xl font-black"
          >
            ເປີດບັນຊີ Market4you
          </a>

        </div>

      </div>

    </main>
  );
}