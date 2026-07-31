"use client";

interface Broker {
  name: string;
  logo: string;
  rating: number;
  ratingText: string;
  cashback: string;
  spread: string;
  deposit: string;
  leverage: string;
  badge: string;
  badgeBg: string;
  glowColor: string;
  accentColor: string;
  borderColor: string;
  tag: string;
  tagStyle: React.CSSProperties;
  link: string;
  review: string;
  highlight: boolean;
}

interface Props {
  brokers: Broker[];
}

export default function ComparisonTable({
  brokers,
}: Props) {
  return (
    <section className="max-w-6xl mx-auto px-5 pb-20">
      <div
        className="rounded-[24px] overflow-hidden"
        style={{
          background: "rgba(255,255,255,0.02)",
          border: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        <div
          className="px-8 py-6 border-b"
          style={{
            borderColor: "rgba(255,255,255,0.06)",
          }}
        >
          <p className="text-yellow-400 text-xs font-bold uppercase tracking-widest mb-1">
            ປຽບທຽບ
          </p>

          <h2 className="text-2xl font-black">
            ປຽບທຽບໂບກເກີ້
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px]">
            <thead>
              <tr
                style={{
                  borderBottom:
                    "1px solid rgba(255,255,255,0.06)",
                  background: "rgba(0,0,0,0.2)",
                }}
              >
                {[
                  "ໂບກເກີ້",
                  "ຄະແນນ",
                  "Spread",
                  "Cashback",
                  "ຝາກຕໍ່າ",
                  "ເປີດບັນຊີ",
                ].map((head) => (
                  <th
                    key={head}
                    className="p-4 text-left text-yellow-400 text-sm font-bold"
                  >
                    {head}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {brokers.map((broker) => (
                <tr
                  key={broker.name}
                  className="transition-colors"
                  style={{
                    borderBottom:
                      "1px solid rgba(255,255,255,0.04)",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background =
                      "rgba(255,255,255,0.03)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background =
                      "transparent")
                  }
                >
                  <td className="p-4 font-black text-white">
                    {broker.name}
                  </td>

                  <td
                    className="p-4 font-bold text-sm"
                    style={{
                      color: broker.accentColor,
                    }}
                  >
                    {broker.ratingText}
                  </td>

                  <td className="p-4 text-gray-300 text-sm">
                    {broker.spread}
                  </td>

                  <td className="p-4 text-gray-300 text-sm">
                    {broker.cashback}
                  </td>

                  <td className="p-4 text-gray-300 text-sm">
                    {broker.deposit}
                  </td>

                  <td className="p-4">
                    <a
                      href={broker.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-black text-black px-4 py-2 rounded-lg inline-block hover:opacity-90 transition"
                      style={{
                        background:
                          "linear-gradient(135deg,#facc15,#f97316)",
                      }}
                    >
                      ເປີດບັນຊີ
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}