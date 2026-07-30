export default function Hero() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-gray-800 bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#1e293b] px-8 py-16">

      <div className="absolute -left-16 -top-16 h-52 w-52 rounded-full bg-yellow-500/10 blur-3xl"></div>
      <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl"></div>

      <div className="relative z-10 max-w-3xl">

        <span className="rounded-full bg-yellow-500/20 px-4 py-1 text-sm font-semibold text-yellow-400">
          🇱🇦 LaoForex Tools
        </span>

        <h1 className="mt-6 text-5xl font-extrabold leading-tight text-white">
          Forex Trading
          <span className="block text-yellow-400">
            Calculators & Tools
          </span>
        </h1>

        <p className="mt-6 text-lg leading-8 text-gray-300">
          ເຄື່ອງມືສຳລັບນັກເທຣດ Forex ພາສາລາວ
          ຄຳນວນ Lot Size, Pip Value, Margin, Risk,
          ຕິດຕາມລາຄາຄຳ ແລະ ຂ່າວ Forex ໄດ້ໃນບ່ອນດຽວ.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#calculators"
            className="rounded-xl bg-yellow-500 px-6 py-3 font-bold text-black transition hover:bg-yellow-400"
          >
            ເລີ່ມໃຊ້ເຄື່ອງມື
          </a>

          <a
            href="/reviews"
            className="rounded-xl border border-gray-600 px-6 py-3 font-semibold text-white transition hover:border-yellow-400 hover:text-yellow-400"
          >
            ເບິ່ງ Broker Reviews
          </a>
        </div>
      </div>
    </section>
  );
}