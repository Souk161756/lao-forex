export async function GET() {
  try {
    const res = await fetch(
      "https://forexfactory.com/ff_calendar_thisweek.xml",
      { next: { revalidate: 3600 } }
    );
    const xml = await res.text();

    const items = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)].slice(0, 4).map((m) => {
      const title = m[1].match(/<title>(.*?)<\/title>/)?.[1] || "";
      const date = m[1].match(/<pubDate>(.*?)<\/pubDate>/)?.[1] || "";
      return { title, date };
    });

    return Response.json({ items });
  } catch {
    return Response.json({ items: [] });
  }
}