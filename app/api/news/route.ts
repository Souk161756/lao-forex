import { NextResponse } from "next/server";

export async function GET() {
  try {
    const url =
      `https://newsdata.io/api/1/news?` +
      `apikey=${process.env.NEWSDATA_API}` +
      `&language=th` +
      `&country=th` +
      `&category=business` +
      `&q=ทองคำ OR ราคาทอง OR XAUUSD OR Forex OR ค่าเงินบาท OR USD OR น้ำมัน OR WTI OR Brent OR Bitcoin`;

    const response = await fetch(url, {
      next: { revalidate: 900 },
    });

    const data = await response.json();

    const articles = (data.results || [])
      .filter((item: any) => item.title)
      .map((item: any) => ({
        title: item.title,
        description: item.description || "",
        url: item.link,
        urlToImage:
          item.image_url && item.image_url.startsWith("http")
            ? item.image_url
            : `https://picsum.photos/800/500?random=${Math.floor(
                Math.random() * 1000
              )}`,
        publishedAt: item.pubDate,
        source: {
          name: item.source_id || "News",
        },
      }));

    return NextResponse.json({
      articles,
    });
  } catch (err) {
    console.log(err);

    return NextResponse.json({
      articles: [],
    });
  }
}