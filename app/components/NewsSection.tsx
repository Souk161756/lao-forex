"use client";

import { useEffect, useState } from "react";

interface News {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  source: {
    name: string;
  };
}

export default function NewsSection() {
  const [news, setNews] = useState<News[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadNews() {
      try {
        const res = await fetch("/api/news");
        const data = await res.json();

        setNews(data.articles || []);
      } catch (err) {
        console.error(err);
        setNews([]);
      } finally {
        setLoading(false);
      }
    }

    loadNews();
  }, []);

  return (
    <section className="py-20 bg-[#0B1120]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="mb-10">
          <span className="text-yellow-400 font-semibold">
            📰 ຂ່າວ Forex • Gold • Oil • Crypto
          </span>

          <h2 className="mt-2 text-4xl font-bold text-white">
            Latest Market News
          </h2>

          <p className="mt-3 text-gray-400">
            ອັບເດດຂ່າວອັດຕະໂນມັດ
          </p>
        </div>

        {loading ? (
          <div className="text-center text-gray-400 py-20">
            Loading...
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {news.map((item, index) => (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 hover:border-yellow-400 hover:-translate-y-1 transition-all"
              >

                <img
                  src={item.urlToImage}
                  alt={item.title}
                  className="w-full h-56 object-cover"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src =
                      "https://picsum.photos/800/500?random=" + index;
                  }}
                />

                <div className="p-6">

                  <span className="rounded-full bg-yellow-500/20 px-3 py-1 text-xs text-yellow-300">
                    {item.source?.name}
                  </span>

                  <h3 className="mt-4 text-white text-xl font-bold line-clamp-2">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-gray-400 text-sm line-clamp-3">
                    {item.description}
                  </p>

                  <div className="mt-5 flex justify-between items-center">

                    <span className="text-xs text-gray-500">
                      {new Date(item.publishedAt).toLocaleDateString()}
                    </span>

                    <span className="text-yellow-400 font-bold">
                      ອ່ານຕໍ່ →
                    </span>

                  </div>

                </div>

              </a>
            ))}

          </div>
        )}

      </div>
    </section>
  );
}