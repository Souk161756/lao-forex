// app/iux/page.tsx

export default function IUXPage() {
  return (
    <main className="bg-black text-white min-h-screen px-6 py-20">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-5xl font-black text-yellow-400 mb-8">
          IUX ດີບໍ? ຣີວິວ IUX ສໍາລັບຄົນລາວ
        </h1>

        <p className="text-xl text-gray-300 leading-9 mb-16">
          IUX ເປັນ broker ທີ່ spread ຕໍ່າ ແລະ rebate ດີ.
        </p>

        <div className="grid md:grid-cols-4 gap-6 mb-20">

          <div className="bg-[#0f172a] p-8 rounded-3xl">
            <p className="text-gray-400">Spread</p>
            <h3 className="text-3xl font-black text-yellow-400">
              0.2 pip
            </h3>
          </div>

          <div className="bg-[#0f172a] p-8 rounded-3xl">
            <p className="text-gray-400">Leverage</p>
            <h3 className="text-3xl font-black text-yellow-400">
              1:3000
            </h3>
          </div>

          <div className="bg-[#0f172a] p-8 rounded-3xl">
            <p className="text-gray-400">Deposit</p>
            <h3 className="text-3xl font-black text-yellow-400">
              $10
            </h3>
          </div>

          <div className="bg-[#0f172a] p-8 rounded-3xl">
            <p className="text-gray-400">Rating</p>
            <h3 className="text-3xl font-black text-yellow-400">
              9.2/10
            </h3>
          </div>

        </div>

        <div className="bg-gradient-to-r from-yellow-500 to-yellow-300 rounded-[40px] p-12 text-black text-center">

          <h2 className="text-5xl font-black mb-6">
            ເປີດບັນຊີ IUX
          </h2>

          <a
            href="https://iux.com/en/register?code=EPs5nw6M"
            target="_blank"
            className="bg-black text-white px-10 py-5 rounded-2xl text-xl font-black inline-block"
          >
            ເປີດບັນຊີ IUX
          </a>

        </div>

      </div>
    </main>
  );
}