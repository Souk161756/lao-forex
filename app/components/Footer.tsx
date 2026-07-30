import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-[#08101d]">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-xl font-bold text-yellow-400">LaoForex.org</h3>
            <p className="mt-3 text-sm text-gray-400">
              ເວັບໄຊລາວສຳລັບ Forex ແລະ Gold Trading
            </p>
          </div>

          <div>
            <h4 className="mb-3 font-semibold">ເຄື່ອງມື</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/tools/lot-calculator">Lot Calculator</Link></li>
              <li><Link href="/tools/pip-calculator">Pip Calculator</Link></li>
              <li><Link href="/tools/margin-calculator">Margin Calculator</Link></li>
              <li><Link href="/tools/risk-calculator">Risk Calculator</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 font-semibold">ໂບຣກເກີ</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/reviews">Broker Reviews</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 font-semibold">ຂໍ້ມູນ</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/privacy-policy">Privacy Policy</Link></li>
              <li><Link href="/disclaimer">Disclaimer</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-5 text-center text-sm text-gray-500">
          © 2026 LaoForex.org
        </div>
      </div>
    </footer>
  );
}