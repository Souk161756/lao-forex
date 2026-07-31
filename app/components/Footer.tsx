import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-yellow-500/10 bg-[#050A12]">
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Logo */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-yellow-400 to-orange-500 text-xl">
                💹
              </div>

              <div>
                <h3 className="text-2xl font-black text-white">
                  Lao<span className="text-yellow-400">Forex</span>
                </h3>

                <p className="text-xs uppercase tracking-[3px] text-gray-500">
                  Broker Reviews
                </p>
              </div>
            </div>

            <p className="leading-8 text-gray-400">
              ເວັບໄຊລວບລວມການຈັດອັນດັບ ແລະ ລີວິວໂບຣກເກີ Forex
              ສຳລັບນັກເທຣດຊາວລາວ.
            </p>
          </div>

          {/* Menu */}
          <div>
            <h4 className="mb-5 text-lg font-bold text-white">
              ເມນູ
            </h4>

            <div className="space-y-3">

              <Link href="/" className="block text-gray-400 hover:text-yellow-400">
                ໜ້າຫຼັກ
              </Link>

              <Link href="/reviews" className="block text-gray-400 hover:text-yellow-400">
                ໂບຣກເກີ
              </Link>

              <Link href="/blog" className="block text-gray-400 hover:text-yellow-400">
                ບົດຮຽນ Forex
              </Link>

              <Link href="/tools" className="block text-gray-400 hover:text-yellow-400">
                ເຄື່ອງມື
              </Link>

            </div>
          </div>

          {/* Brokers */}
          <div>
            <h4 className="mb-5 text-lg font-bold text-white">
              ໂບຣກເກີແນະນຳ
            </h4>

            <div className="space-y-3 text-gray-400">
              <p>Exness</p>
              <p>IC Markets</p>
              <p>Pepperstone</p>
              <p>XM</p>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="mb-5 text-lg font-bold text-white">
              ຕິດຕາມພວກເຮົາ
            </h4>

            <div className="space-y-3">

              <Link href="#" className="flex items-center gap-2 text-gray-400 hover:text-yellow-400">
                📘 Facebook
              </Link>

              <Link href="#" className="flex items-center gap-2 text-gray-400 hover:text-yellow-400">
                💬 Telegram
              </Link>

              <Link href="#" className="flex items-center gap-2 text-gray-400 hover:text-yellow-400">
                ▶️ YouTube
              </Link>

            </div>
          </div>

        </div>

        {/* Risk Warning */}

        <div className="mt-14 rounded-3xl border border-yellow-500/20 bg-yellow-500/5 p-6">

          <h3 className="mb-3 text-lg font-bold text-yellow-400">
            ⚠️ ຄຳເຕືອນຄວາມສ່ຽງ
          </h3>

          <p className="leading-8 text-gray-400">
            Forex ແລະ CFD ເປັນການລົງທຶນທີ່ມີຄວາມສ່ຽງສູງ
            ຜູ້ລົງທຶນຄວນສຶກສາຂໍ້ມູນ ແລະ
            ບໍລິຫານຄວາມສ່ຽງກ່ອນຕັດສິນໃຈລົງທຶນ.
          </p>

        </div>

        {/* Bottom */}

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-gray-500 md:flex-row">

          <p>
            © {new Date().getFullYear()} LaoForex.org
            • All Rights Reserved
          </p>

          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-yellow-400">
              Privacy Policy
            </Link>

            <Link href="/terms" className="hover:text-yellow-400">
              Terms
            </Link>

            <Link href="/contact" className="hover:text-yellow-400">
              Contact
            </Link>
          </div>

        </div>

      </div>
    </footer>
  );
}