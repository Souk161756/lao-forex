// app/hfm/page.tsx

export default function HFMPage() {
  return (
    <main className="bg-black text-white min-h-screen px-6 py-20">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-5xl font-black text-yellow-400 mb-8">
          HFM ດີບໍ? ຣີວິວ HFM ສໍາລັບຄົນລາວ
        </h1>

        <p className="text-xl text-gray-300 leading-9 mb-16">
          HFM ເປັນ broker ທີ່ມີ bonus ແລະ support ດີ.
        </p>

        <div className="bg-gradient-to-r from-yellow-500 to-yellow-300 rounded-[40px] p-12 text-black text-center">

          <h2 className="text-5xl font-black mb-6">
            ເປີດບັນຊີ HFM
          </h2>

          <a
            href="https://register.hfm.com/sv/en/new-live-account/?refid=30421077"
            target="_blank"
            className="bg-black text-white px-10 py-5 rounded-2xl text-xl font-black inline-block"
          >
            ເປີດບັນຊີ HFM
          </a>

        </div>

      </div>
    </main>
  );
}