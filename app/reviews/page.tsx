export default function ReviewsPage() {
  const brokers = [
    {
      name: "XM",
      rating: "9.1/10",
      cashback: "$3/Lot",
      spread: "1.0 pip",
      deposit: "$30",
      bonus: "Bonus Available",
      link: "https://affs.click/wLl9B",
    },

    {
      name: "Exness",
      rating: "9.5/10",
      cashback: "$5/Lot",
      spread: "0.8 pip",
      deposit: "$10",
      bonus: "Popular Broker",
      link: "https://one.exnessonelink.com/a/ocvhdpugv1",
    },

    {
      name: "Vantage",
      rating: "9.0/10",
      cashback: "$4/Lot",
      spread: "0.9 pip",
      deposit: "$50",
      bonus: "Fast Withdraw",
      link: "https://vigco.co/la-com-inv/wmd8Y80S",
    },

    {
      name: "IUX",
      rating: "8.9/10",
      cashback: "$4/Lot",
      spread: "0.7 pip",
      deposit: "$50",
      bonus: "Low Spread",
      link: "https://iux.com/en/register?code=EPs5nw6M",
    },

    {
      name: "Market4you",
      rating: "8.7/10",
      cashback: "$3/Lot",
      spread: "1.2 pip",
      deposit: "$30",
      bonus: "Bonus Program",
      link: "https://account.markets4you.online/en/user-registration/?affid=bpblvtj",
    },

    {
      name: "HFM",
      rating: "9.0/10",
      cashback: "$5/Lot",
      spread: "0.9 pip",
      deposit: "$50",
      bonus: "Trusted Broker",
      link: "https://register.hfm.com/sv/en/new-live-account/?refid=30421077",
    },
  ];

  return (
    <main className="bg-black min-h-screen text-white px-6 py-16">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-5xl font-black text-center mb-6">
          Forex Broker Reviews Laos
        </h1>

        <p className="text-center text-gray-400 mb-16 text-lg">
          ລວມຣີວິວ broker Forex ທີ່ດີສຸດສຳລັບຄົນລາວ
        </p>

        <div className="grid md:grid-cols-2 gap-8">

          {brokers.map((broker) => (
            <div
              key={broker.name}
              className="bg-[#0f172a] border border-yellow-500 rounded-3xl p-8"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-4xl font-black">
                  {broker.name}
                </h2>

                <span className="bg-yellow-400 text-black px-4 py-2 rounded-full font-bold">
                  {broker.bonus}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">

                <div className="bg-[#111827] p-4 rounded-2xl">
                  <p className="text-gray-400">⭐ Rating</p>
                  <h3 className="text-3xl font-black text-yellow-400">
                    {broker.rating}
                  </h3>
                </div>

                <div className="bg-[#111827] p-4 rounded-2xl">
                  <p className="text-gray-400">💰 Cashback</p>
                  <h3 className="text-3xl font-black text-yellow-400">
                    {broker.cashback}
                  </h3>
                </div>

                <div className="bg-[#111827] p-4 rounded-2xl">
                  <p className="text-gray-400">⚡ Spread</p>
                  <h3 className="text-3xl font-black text-yellow-400">
                    {broker.spread}
                  </h3>
                </div>

                <div className="bg-[#111827] p-4 rounded-2xl">
                  <p className="text-gray-400">💳 Min Deposit</p>
                  <h3 className="text-3xl font-black text-yellow-400">
                    {broker.deposit}
                  </h3>
                </div>

              </div>

              <a
                href={broker.link}
                target="_blank"
                className="block w-full bg-yellow-400 text-black py-4 rounded-2xl font-black text-center text-xl"
              >
                ເປີດບັນຊີ {broker.name}
              </a>
            </div>
          ))}

        </div>
      </div>
    </main>
  );
}