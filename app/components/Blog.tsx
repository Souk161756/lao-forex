"use client";

export default function Blog() {
  const posts = [
    {
      title: "Forex ແມ່ນຫຍັງ?",
      desc: "ຮຽນພື້ນຖານ Forex · ຄໍາສັບ · ຂັ້ນຕອນ · Tips",
      href: "/blog/how-to-start-forex-laos",
      color: "from-blue-400/20",
    },
    {
      title: "ໂບກເກີ້ Forex ທີ່ດີໃນລາວ",
      desc: "ປຽບທຽບໂບກເກີ້ ຝາກ-ຖອນ BCEL ໄດ້ · ທົດສອບຈິງ",
      href: "/blog",
      color: "from-yellow-400/20",
    },
    {
      title: "ລີວິວ Exness ສໍາລັບຄົນລາວ",
      desc: "ລີວິວ Exness ແບບລະອຽດ ທົດສອບຈິງ ໂດຍທີມລາວ",
      href: "/exness",
      color: "from-green-400/20",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-5 pb-20">
      <div className="mb-6">
        <p className="text-yellow-400 text-xs font-bold uppercase tracking-widest mb-1">
          ບົດຄວາມ
        </p>

        <h2 className="text-2xl font-black">
          ຮຽນ Forex ຟຣີ
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {posts.map((post) => (
          <a
            key={post.title}
            href={post.href}
            className="block rounded-2xl p-6 transition-all hover:-translate-y-1"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            <div
              className={`w-full h-28 rounded-xl mb-4 bg-gradient-to-br ${post.color} to-transparent`}
            />

            <h3 className="font-black mb-2 leading-snug text-white">
              {post.title}
            </h3>

            <p className="text-gray-500 text-sm leading-relaxed">
              {post.desc}
            </p>

            <div className="text-yellow-400 text-sm font-bold mt-4">
              ອ່ານເພີ່ມ →
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}