import "./globals.css";

export const metadata = {
  title: "LaoForex.org",
  description: "Best Forex Brokers In Laos",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-KE4H9XCRXN"
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-KE4H9XCRXN');
            `,
          }}
        />
      </body>
    </html>
  );
}