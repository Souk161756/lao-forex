export default function ExnessPage() {
  return (
    <main className="bg-black min-h-screen text-white px-6 py-16">

      <div className="max-w-5xl mx-auto">

        <div className="bg-[#0f172a] border border-blue-400 rounded-3xl p-10">

          <div className="flex items-center justify-between mb-10">

            <h1 className="text-5xl font-black">
              Exness Broker Review
            </h1>

            <span className="bg-blue-500 text-white px-5 py-3 rounded-full font-black">
              🔥 Popular
            </span>

          </div>

          <p className="text-gray-400 text-lg leading-8 mb-10">
            Exness ເປັນ broker ທີ່ນັກເທຣດລາວນິຍົມຫຼາຍ
            ຖອນໄວ ຝາກໄວ ແລະ spread ຕ່ຳ
          </p>

          <div className="grid md:grid-cols-2 gap-5 mb-10">

            <div className="bg-[#111827] rounded-2xl p-5">
              <p className="text-gray-400 mb-2">⭐ Rating</p>
              <h3 className="text-4xl font-black text-yellow-400">
                9.5/10
              </h3>
            </div>

            <div className="bg-[#111827] rounded-2xl p-5">
              <p className="text-gray-400 mb-2">💰 Cashback</p>
              <h3 className="text-4xl font-black text-yellow-400">
                $5/Lot
              </h3>
            </div>

            <div className="bg-[#111827] rounded-2xl p-5">
              <p className="text-gray-400 mb-2">⚡ Spread</p>
              <h3 className="text-4xl font-black text-yellow-400">
                0.8 pip
              </h3>
            </div>

            <div className="bg-[#111827] rounded-2xl p-5">
              <p className="text-gray-400 mb-2">💳 Min Deposit</p>
              <h3 className="text-4xl font-black text-yellow-400">
                $10
              </h3>
            </div>

          </div>

          <a
            href="https://one.exnessonelink.com/a/ocvhdpugv1"
            target="_blank"
            className="block w-full bg-yellow-400 hover:bg-yellow-300 transition text-black py-5 rounded-2xl text-center text-2xl font-black"
          >
            ເປີດບັນຊີ Exness
          </a>

        </div>

      </div>

    </main>
  );
}