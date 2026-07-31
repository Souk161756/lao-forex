"use client";

interface NewsItem {
  tag: string;
  title: string;
  time: string;
  color: string;
  href: string;
}

interface Props {
  news: NewsItem[];
}

export default function NewsSection({ news }: Props) {
  return (
    <section className="max-w-6xl mx-auto px-5 pb-12">
      <div className="mb-5">
        <p className="text-yellow-400 text-xs font-bold uppercase tracking-widest mb-1">
          📰 ຂ່າວ & ວິເຄາະ
        </p>

        <h2 className="text-2xl font-black">
          ຂ່າວ Forex ລ່າສຸດ
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-3">
        {news.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="flex items-start gap-4 p-4 rounded-2xl transition-all hover:-translate-y-0.5"
            style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            <div
              className="flex-shrink-0 px-2.5 py-1 rounded-lg text-[10px] font-black mt-0.5"
              style={{
                background: `${item.color}15`,
                color: item.color,
                border: `1px solid ${item.color}30`,
              }}
            >
              {item.tag}
            </div>

            <div className="flex-1 min-w-0">
              <p className="text-white text-sm font-bold leading-snug mb-1">
                {item.title}
              </p>

              <p className="text-gray-600 text-xs">
                {item.time}
              </p>
            </div>

            <span className="text-gray-600 text-lg flex-shrink-0">
              ›
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}