import Link from "next/link";

const menus = [
  { name: "ໜ້າຫຼັກ", href: "/" },
  { name: "ເຄື່ອງມື", href: "/tools" },
  { name: "ໂບຣກເກີ", href: "/reviews" },
  { name: "ບົດຮຽນ", href: "/blog" },
  { name: "ຕິດຕໍ່", href: "/contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-800 bg-[#0B1220]/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="text-2xl font-bold text-yellow-400">
          LaoForex
        </Link>

        <nav className="hidden gap-6 md:flex">
          {menus.map((menu) => (
            <Link
              key={menu.href}
              href={menu.href}
              className="text-gray-300 transition hover:text-yellow-400"
            >
              {menu.name}
            </Link>
          ))}
        </nav>

        <Link
          href="/exness"
          className="rounded-lg bg-yellow-500 px-4 py-2 font-semibold text-black hover:bg-yellow-400"
        >
          ເປີດບັນຊີ
        </Link>
      </div>
    </header>
  );
}