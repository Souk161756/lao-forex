// app/market4you/page.tsx

export default function Market4YouPage() {
  return (
    <main className="bg-black text-white min-h-screen px-6 py-20">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-5xl font-black text-yellow-400 mb-8">
          Market4You ດີບໍ? ຣີວິວ Market4You ສໍາລັບຄົນລາວ
        </h1>

        <p className="text-xl text-gray-300 leading-9 mb-16">
          Market4You ເປັນ broker ທີ່ເໝາະສໍາລັບມືໃໝ່.
        </p>

        <div className="bg-gradient-to-r from-yellow-500 to-yellow-300 rounded-[40px] p-12 text-black text-center">

          <h2 className="text-5xl font-black mb-6">
            ເປີດບັນຊີ Market4You
          </h2>

          <a
            href="https://account.markets4you.online/en/user-registration/?affid=bpblvtj"
            target="_blank"
            className="bg-black text-white px-10 py-5 rounded-2xl text-xl font-black inline-block"
          >
            ເປີດບັນຊີ Market4You
          </a>

        </div>

      </div>
    </main>
  );
}