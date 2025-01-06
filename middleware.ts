import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  console.log('Middleware triggered for path:', pathname);

  // Skip middleware for static files and special routes
  if (
    pathname.startsWith('/_next') || // Static files (CSS, JS, etc.)
    pathname.startsWith('/api') || // API routes
    pathname === '/favicon.ico' || // Favicon
    pathname === '/robots.txt' || // Robots.txt
    pathname === '/sitemap.xml' // Sitemap (if applicable)
  ) {
    return NextResponse.next();
  }

  // Supported language prefixes
  const supportedLanguages = ['en', 'pl', 'ua'];
  
  // Check if the path starts with any supported language and has more than just the language segment
  const isValidLang = supportedLanguages.some((lang) => {
    return pathname.startsWith(`/${lang}/`) || pathname === `/${lang}`;
  });

  // If the path is valid but has extra segments like /en/asdf, redirect to /en
  if (!isValidLang || pathname.split('/').length > 2) {
    return NextResponse.redirect(new URL('/en', request.url));
  }

  return NextResponse.next();
}

// Matcher configuration (optional, simplifies logic)
export const config = {
  matcher: '/:path*',
};
