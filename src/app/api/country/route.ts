import { type NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
  const country = request.headers.get("x-vercel-ip-country") ?? "XX";
  return NextResponse.json({ country });
}
