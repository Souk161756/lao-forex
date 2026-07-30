export default function Hero() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-yellow-500/20 bg-gradient-to-r from-[#111827] via-[#0F172A] to-[#1E293B] px-8 py-12">

      <div className="max-w-3xl">

        <span className="rounded-full bg-yellow-500/10 px-4 py-2 text-sm font-medium text-yellow-400">
          🇱🇦 LaoForex.org
        </span>

        <h1 className="mt-6 text-4xl font-bold leading-tight md:text-5xl">
          ເຄື່ອງມື Forex ສຳລັບນັກເທຣດຊາວລາວ
        </h1>

        <p className="mt-5 text-lg leading-8 text-gray-300">
          ລວມເຄື່ອງມືຄຳນວນ, ຂໍ້ມູນຕະຫຼາດ, ລາຄາທອງຄຳ,
          ຂ່າວເສດຖະກິດ ແລະ ບົດຮຽນ Forex ໃນພາສາລາວ.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#tools"
            className="rounded-xl bg-yellow-500 px-6 py-3 font-semibold text-black hover:bg-yellow-400"
          >
            ເລີ່ມໃຊ້ເຄື່ອງມື
          </a>

          <a
            href="/reviews"
            className="rounded-xl border border-gray-700 px-6 py-3 hover:border-yellow-400"
          >
            ຣີວິວໂບຣກເກີ
          </a>
        </div>

      </div>

    </section>
  );
}