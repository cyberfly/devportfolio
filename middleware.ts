import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);

  if (request.nextUrl.pathname.startsWith("/portfolio/p/")) {
    requestHeaders.set(
      "x-next-project-slug",
      request.nextUrl.pathname.replace("/portfolio/p/", "")
    );
  }

  if (request.nextUrl.pathname.startsWith("/blog/p/")) {
    requestHeaders.set(
      "x-next-article-slug",
      request.nextUrl.pathname.replace("/blog/p/", "")
    );
  }

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}
