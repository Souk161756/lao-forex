import "./globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://laoforex.org"),

  title: {
    default: "LaoForex.org | ໂບກເກີ Forex ທີ່ດີທີ່ສຸດໃນລາວ",
    template: "%s | LaoForex.org",

  },
manifest: "/manifest.webmanifest",

  description:
    "ປຽບທຽບ XM, Exness, Vantage, IUX, HFM ແລະ Broker ອື່ນໆ ພ້ອມ Cashback, Spread, ຂ່າວ Forex ແລະ XAUUSD ສໍາລັບຄົນລາວ.",

  keywords: [
    "Forex Laos",
    "LaoForex",
    "XM",
    "Exness",
    "Vantage",
    "IUX",
    "HFM",
    "Gold",
    "XAUUSD",
    "Cashback",
  ],

  openGraph: {
    title: "LaoForex.org",
    description:
      "ເວັບລວມ Broker Forex ສໍາລັບຄົນລາວ",
    url: "https://laoforex.org",
    siteName: "LaoForex",
    locale: "lo_LA",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "LaoForex.org",
    description: "Forex Broker ສໍາລັບຄົນລາວ",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="lo">
      <body style={{ margin: 0, padding: 0, background: "#141920", fontFamily: "'Noto Serif Lao', 'Phetsarath OT', serif" }}>
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "LaoForex.org",
      url: "https://laoforex.org",
      logo: "https://laoforex.org/logo.png",
      description:
        "ເວັບລວມໂບກເກີ Forex ສໍາລັບຄົນລາວ",
      sameAs: [
        "https://www.facebook.com/",
        "https://t.me/laofx_org",
      ],
    }),
  }}
/>
        <style>{`
          .nav-link { color: #9ca3af; font-size: 13px; font-weight: 600; text-decoration: none; padding: 6px 12px; border-radius: 8px; transition: color 0.2s; }
          .nav-link:hover { color: #facc15; }
          .nav-desktop { display: flex; align-items: center; gap: 6px; }
          .nav-mobile { display: none; align-items: center; gap: 8px; }
          .float-btn { transition: transform 0.2s; }
          .float-btn:hover { transform: scale(1.1); }
          @media (max-width: 768px) {
            .nav-desktop { display: none !important; }
            .nav-mobile { display: flex !important; }
          }
        `}</style>

        {/* ══ GLOBAL NAVBAR ══ */}
        <nav style={{
          position: "sticky", top: 0, zIndex: 100,
          background: "rgba(7,8,15,0.95)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}>
          <div style={{
            maxWidth: "1200px", margin: "0 auto",
            padding: "10px 20px",
            display: "flex", alignItems: "center", justifyContent: "space-between",
          }}>

            {/* LOGO */}
            <a href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "12px" }}>
              <div style={{
                width: "44px", height: "44px", borderRadius: "12px", overflow: "hidden",
                background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)",
                display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
              }}>
                <img src="/logo.png" alt="LaoForex" style={{ width: "36px", height: "36px", objectFit: "contain" }} />
              </div>
              <div>
                <div style={{ fontWeight: 900, fontSize: "20px", color: "#facc15", lineHeight: 1 }}>LaoForex</div>
                <div style={{ fontSize: "10px", color: "#6b7280", lineHeight: 1, marginTop: "3px" }}>ໂບກເກີ້ Forex ສໍາລັບຄົນລາວ</div>
              </div>
            </a>

            {/* Desktop Nav */}
            <div className="nav-desktop">
              <a href="/" className="nav-link">ໜ້າຫຼັກ</a>
<a href="/reviews" className="nav-link">ລີວິວ</a>
<a href="/blog/how-to-start-forex-laos" className="nav-link">ບົດຄວາມ</a>
<a href="/#brokers" className="nav-link">ໂບກເກີ້</a>
<a href="/tools" className="nav-link">🧮 Tools</a>
              <div style={{ width: "1px", height: "20px", background: "rgba(255,255,255,0.1)", margin: "0 6px" }} />
              <a href="https://wa.me/8562029826898" target="_blank" style={{
                background: "#25D366", color: "#fff", padding: "7px 14px",
                borderRadius: "20px", fontSize: "12px", fontWeight: 700,
                textDecoration: "none", display: "flex", alignItems: "center", gap: "5px",
                boxShadow: "0 4px 12px rgba(37,211,102,0.3)",
              }}>💬 WhatsApp</a>
              <a href="https://t.me/laofx_org" target="_blank" style={{
                background: "#229ED9", color: "#fff", padding: "7px 14px",
                borderRadius: "20px", fontSize: "12px", fontWeight: 700,
                textDecoration: "none", display: "flex", alignItems: "center", gap: "5px",
                boxShadow: "0 4px 12px rgba(34,158,217,0.3)",
              }}>✈️ Telegram</a>
            </div>

            {/* Mobile Nav */}
            <div className="nav-mobile">
              <a href="https://wa.me/8562029826898" target="_blank" style={{
                width: "38px", height: "38px", borderRadius: "50%", background: "#25D366",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "16px", textDecoration: "none",
              }}>💬</a>
              <a href="https://t.me/laofx_org" target="_blank" style={{
                width: "38px", height: "38px", borderRadius: "50%", background: "#229ED9",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "16px", textDecoration: "none",
              }}>✈️</a>
            </div>

          </div>
        </nav>

        {children}

        {/* FLOATING BUTTONS */}
        <div style={{ position: "fixed", bottom: "24px", right: "24px", zIndex: 50, display: "flex", flexDirection: "column", gap: "12px" }}>
          <a href="https://wa.me/8562029826898" target="_blank" className="float-btn" style={{
            width: "56px", height: "56px", borderRadius: "50%", background: "#25D366",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "24px", textDecoration: "none",
            boxShadow: "0 8px 32px rgba(37,211,102,0.4)",
          }} title="WhatsApp">💬</a>
          <a href="https://t.me/laofx_org" target="_blank" className="float-btn" style={{
            width: "56px", height: "56px", borderRadius: "50%", background: "#229ED9",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "24px", textDecoration: "none",
            boxShadow: "0 8px 32px rgba(34,158,217,0.4)",
          }} title="Telegram">✈️</a>
        </div>

        <script async src="https://www.googletagmanager.com/gtag/js?id=G-KE4H9XCRXN" />
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KE4H9XCRXN');
          `,
        }} />

      </body>
    </html>
  );
}
