import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([
    {
      tag: "🔥 Breaking",
      title: "Forex News API Ready",
      time: new Date().toLocaleString(),
      color: "#22c55e",
      href: "#",
    },
  ]);
}