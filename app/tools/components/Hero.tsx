export default function Hero() {
  return (
    <section className="relative overflow-hidden rounded-[32px] border border-yellow-500/20 bg-[#0F172A] px-8 py-16 lg:px-14">

      {/* Glow */}
      <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-yellow-500/10 blur-[120px]" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-blue-500/10 blur-[140px]" />

      <div className="relative z-10 max-w-4xl">

        <div className="inline-flex items-center gap-2 rounded-full border border-yellow-500/20 bg-yellow-500/10 px-5 py-2">
          <span className="h-2.5 w-2.5 rounded-full bg-green-400 animate-pulse"></span>
          <span className="text-sm font-semibold text-yellow-400">
             LaoForex Tools
          </span>
        </div>

        <h1 className="mt-8 text-5xl font-black leading-tight text-white lg:text-6xl">
          ເຄື່ອງມື
          <br />

          <span className="bg-gradient-to-r from-yellow-300 via-orange-400 to-yellow-500 bg-clip-text text-transparent">
            Forex
          </span>

          <br />

          ສຳລັບນັກເທຣດຊາວລາວ
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-9 text-gray-300">
          ລວມເຄື່ອງມືຄຳນວນ Forex ຄົບວົງຈອນ ເຊັ່ນ Lot Calculator,
          Margin Calculator, Pip Calculator, Risk Calculator ພ້ອມຂໍ້ມູນ
          ຕະຫຼາດ ແລະ ຂ່າວສານ ສຳລັບນັກເທຣດຊາວລາວ.
        </p>

        <div className="mt-10 flex flex-wrap gap-5">

          <a
            href="#tools"
            className="rounded-2xl bg-gradient-to-r from-yellow-400 to-yellow-500 px-8 py-4 font-bold text-black shadow-lg transition hover:scale-105"
          >
            🚀 ເລີ່ມໃຊ້ເຄື່ອງມື
          </a>

          <a
            href="/reviews"
            className="rounded-2xl border border-white/10 bg-white/5 px-8 py-4 font-bold text-white transition hover:border-yellow-400 hover:bg-white/10"
          >
            📚 ຣີວິວໂບຣກເກີ
          </a>

        </div>

      </div>
    </section>
  );
}