export default function ExnessPage() {
  return (
    <main className="bg-black text-white min-h-screen px-6 py-20">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-5xl font-black text-yellow-400 mb-8">
          Exness ດີບໍ? ຣີວິວ Exness ສໍາລັບຄົນລາວ
        </h1>

        <p className="text-xl text-gray-300 leading-9 mb-16">
          Exness ເປັນ broker Forex ທີ່ນິຍົມຫຼາຍໃນລາວ.
          ມີ spread ຕໍ່າ, leverage ສູງ ແລະ ຝາກຖອນໄວ.
        </p>

        <div className="grid md:grid-cols-4 gap-6 mb-20">

          <div className="bg-[#0f172a] p-8 rounded-3xl">
            <p className="text-gray-400">Spread</p>
            <h3 className="text-3xl font-black text-yellow-400">
              0.0 pip
            </h3>
          </div>

          <div className="bg-[#0f172a] p-8 rounded-3xl">
            <p className="text-gray-400">Leverage</p>
            <h3 className="text-3xl font-black text-yellow-400">
              Unlimited
            </h3>
          </div>

          <div className="bg-[#0f172a] p-8 rounded-3xl">
            <p className="text-gray-400">Deposit</p>
            <h3 className="text-3xl font-black text-yellow-400">
              $20
            </h3>
          </div>

          <div className="bg-[#0f172a] p-8 rounded-3xl">
            <p className="text-gray-400">Rating</p>
            <h3 className="text-3xl font-black text-yellow-400">
              9.5/10
            </h3>
          </div>

        </div>

        <div className="bg-[#0f172a] rounded-[40px] p-10 mb-16">

          <h2 className="text-4xl font-black mb-8 text-yellow-400">
            ຈຸດເດັ່ນຂອງ Exness
          </h2>

          <div className="space-y-5 text-lg text-gray-300">
            <p>✅ ຝາກຖອນໄວ</p>
            <p>✅ Spread ຕໍ່າ</p>
            <p>✅ ຮອງຮັບ MT4 ແລະ MT5</p>
            <p>✅ leverage ສູງ</p>
            <p>✅ ເໝາະສໍາລັບ scalping</p>
          </div>

        </div>

        <div className="bg-gradient-to-r from-yellow-500 to-yellow-300 rounded-[40px] p-12 text-black text-center">

          <h2 className="text-5xl font-black mb-6">
            ເປີດບັນຊີ Exness
          </h2>

          <p className="text-xl mb-10">
            ສະໝັກ Exness ຜ່ານ link ດ້ານລຸ່ມ.
          </p>

          <a
            href="https://one.exnesstrack.org/a/yourlink"
            target="_blank"
            className="bg-black text-white px-10 py-5 rounded-2xl text-xl font-black inline-block"
          >
            ເປີດບັນຊີ Exness
          </a>

        </div>

      </div>
    </main>
  );
}