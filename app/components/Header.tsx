import Link from "next/link";

const menus = [
  { name: "ໜ້າຫຼັກ", href: "/" },
  { name: "ໂບຣກເກີ", href: "/reviews" },
  { name: "ຮຽນ Forex", href: "/blog" },
  { name: "ເຄື່ອງມື", href: "/tools" },
  { name: "ຕິດຕໍ່", href: "/contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-yellow-500/10 bg-[#060B14]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-yellow-400 to-orange-500 text-xl shadow-lg shadow-yellow-500/20">
            💹
          </div>

          <div>
            <h1 className="text-2xl font-black tracking-wide text-white">
              Lao<span className="text-yellow-400">Forex</span>
            </h1>

            <p className="text-[11px] uppercase tracking-[3px] text-gray-500">
              Broker Reviews
            </p>
          </div>
        </Link>

        {/* Menu */}
        <nav className="hidden items-center gap-8 lg:flex">
          {menus.map((menu) => (
            <Link
              key={menu.href}
              href={menu.href}
              className="relative font-medium text-gray-300 transition duration-300 hover:text-yellow-400 after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-yellow-400 after:transition-all hover:after:w-full"
            >
              {menu.name}
            </Link>
          ))}
        </nav>

        {/* Right */}
        <div className="flex items-center gap-3">

          <Link
            href="/search"
            className="hidden rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300 transition hover:border-yellow-400 hover:text-yellow-400 md:flex"
          >
            🔍 ຄົ້ນຫາ
          </Link>

          <Link
            href="/exness"
            className="rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 px-5 py-3 font-bold text-black shadow-lg shadow-yellow-500/30 transition duration-300 hover:scale-105"
          >
            🚀 ເປີດບັນຊີ
          </Link>

        </div>
      </div>
    </header>
  );
}