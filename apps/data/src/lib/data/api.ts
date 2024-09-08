import { notFound } from "next/navigation";
import { NextResponse } from "next/server";

type Params = {
  slug: string;
};

const allowedHeaders: HeadersInit = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

function isAllowedOrigin(origin: string | null) {
  if (!origin) return false;
  const allowedDomain = "bapairaew.com";
  const regex = new RegExp(`^https?://([a-zA-Z0-9-]+\\.)?${allowedDomain}$`);
  return regex.test(origin);
}

export const get = async <T extends Params>(request: Request, data: T[]) => {
  const origin = request.headers.get("Origin");
  let headers: HeadersInit | undefined = undefined;
  if (isAllowedOrigin(origin)) {
    headers = allowedHeaders;
  }
  const url = new URL(request.url);
  const params = new URLSearchParams(url.search);
  const slug = params.get("slug");
  const count = params.get("count");

  if (slug) {
    const match = data.find((p) => p.slug === slug);
    if (match) {
      return NextResponse.json([match], { headers });
    }
    return notFound();
  }

  const limit = count ? parseInt(count, 10) : 500;
  return NextResponse.json(data.slice(0, limit), { headers });
};
