import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const DEFAULT_LANGUAGE = "en";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Redirect only the bare root to the default locale.
  // All other unmatched paths fall through so Next.js can render the proper 404
  // (avoids soft-404s caused by catch-all redirects).
  if (pathname === "/") {
    return NextResponse.redirect(
      new URL(`/${DEFAULT_LANGUAGE}`, request.url),
      308,
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/",
};
