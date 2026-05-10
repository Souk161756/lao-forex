import "./globals.css";

export const metadata = {
  title: "LaoForex.org - Best Forex Brokers Laos",
  description:
    "รีวิว Forex Brokers ในลาว เปรียบเทียบ XM Exness Vantage IUX HFM และ cashback Forex ล่าสุด",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}