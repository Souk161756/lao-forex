"use client";

export default function ContactCTA() {
  return (
    <section className="max-w-6xl mx-auto px-5 pb-20">
      <div
        className="rounded-[24px] p-8 text-center"
        style={{
          background:
            "linear-gradient(135deg, rgba(250,204,21,0.06), rgba(249,115,22,0.06))",
          border: "1px solid rgba(250,204,21,0.15)",
        }}
      >
        <h2 className="font-black text-2xl mb-3">
          💬 ມີຄໍາຖາມ? ຕິດຕໍ່ເຮົາໄດ້ເລີຍ
        </h2>

        <p
          className="text-gray-400 text-sm mb-6"
          style={{ lineHeight: "2" }}
        >
          ທີມງານລາວ · ຕອບ 24/7 · ຟຣີ ·
          ບໍ່ມີຄ່າໃຊ້ຈ່າຍ
        </p>

        <div className="flex items-center justify-center gap-4 flex-wrap">
          <a
            href="https://wa.me/8562029826898"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-7 py-3.5 rounded-xl font-black text-white transition-all hover:scale-105"
            style={{
              background: "#25D366",
              boxShadow: "0 8px 32px rgba(37,211,102,0.3)",
            }}
          >
            💬 WhatsApp
          </a>

          <a
            href="https://t.me/laofx_org"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-7 py-3.5 rounded-xl font-black text-white transition-all hover:scale-105"
            style={{
              background: "#229ED9",
              boxShadow: "0 8px 32px rgba(34,158,217,0.3)",
            }}
          >
            ✈️ Telegram
          </a>
        </div>
      </div>
    </section>
  );
}