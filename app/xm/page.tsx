// app/xm/page.tsx

export default function XMPage() {
  return (
    <main className="bg-black text-white min-h-screen px-6 py-20">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-5xl font-black text-yellow-400 mb-8">
          XM ດີບໍ? ຣີວິວ XM ສໍາລັບຄົນລາວ
        </h1>

        <p className="text-xl text-gray-300 leading-9 mb-16">
          XM ເປັນ broker Forex ທີ່ນິຍົມຫຼາຍໃນລາວ.
          ມີ bonus, spread ຕໍ່າ ແລະ support ດີ.
        </p>

        <div className="grid md:grid-cols-4 gap-6 mb-20">

          <div className="bg-[#0f172a] p-8 rounded-3xl">
            <p className="text-gray-400">Spread</p>
            <h3 className="text-3xl font-black text-yellow-400">
              1.6 pip
            </h3>
          </div>

          <div className="bg-[#0f172a] p-8 rounded-3xl">
            <p className="text-gray-400">Leverage</p>
            <h3 className="text-3xl font-black text-yellow-400">
              1:1000
            </h3>
          </div>

          <div className="bg-[#0f172a] p-8 rounded-3xl">
            <p className="text-gray-400">Deposit</p>
            <h3 className="text-3xl font-black text-yellow-400">
              $5
            </h3>
          </div>

          <div className="bg-[#0f172a] p-8 rounded-3xl">
            <p className="text-gray-400">Rating</p>
            <h3 className="text-3xl font-black text-yellow-400">
              9/10
            </h3>
          </div>

        </div>

        <div className="bg-[#0f172a] rounded-[40px] p-10 mb-16">

          <h2 className="text-4xl font-black mb-8 text-yellow-400">
            ຈຸດເດັ່ນຂອງ XM
          </h2>

          <div className="space-y-5 text-lg text-gray-300">
            <p>✅ ມີ bonus</p>
            <p>✅ support ດີ</p>
            <p>✅ ຝາກເງິນຂັ້ນຕໍ່າ</p>
            <p>✅ ເໝາະສໍາລັບມືໃໝ່</p>
          </div>

        </div>

        <div className="bg-gradient-to-r from-yellow-500 to-yellow-300 rounded-[40px] p-12 text-black text-center">

          <h2 className="text-5xl font-black mb-6">
            ເປີດບັນຊີ XM
          </h2>

          <a
            href="https://affs.click/wLl9B"
            target="_blank"
            className="bg-black text-white px-10 py-5 rounded-2xl text-xl font-black inline-block"
          >
            ເປີດບັນຊີ XM
          </a>

        </div>

      </div>
    </main>
  );
}