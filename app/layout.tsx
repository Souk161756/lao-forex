import "./globals.css";

export const metadata = {
  title: "LaoForex",
  description: "Forex Brokers Laos",
  icons: {
    icon: "/logo.png",
  },
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