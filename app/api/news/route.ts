export async function GET() {
  try {
    const key = process.env.NEWSAPI_KEY;
    const res = await fetch(
      `https://newsapi.org/v2/everything?q=gold+trading+XAUUSD+forex+analysis&language=en&sortBy=publishedAt&pageSize=4&apiKey=${key}`,
      { next: { revalidate: 3600 } }
    );
    const data = await res.json();
    const items = (data.articles || []).map((a: {
      title: string;
      publishedAt: string;
      url: string;
    }) => ({
      title: a.title,
      date: a.publishedAt,
      url: a.url,
    }));
    return Response.json({ items });
  } catch {
    return Response.json({ items: [] });
  }
}