import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const isLoggedIn = request.cookies.has('sb-access-token');

  const protectedPaths = ['/dashboard', '/records'];

  if (protectedPaths.some((path) => request.nextUrl.pathname.startsWith(path)) && !isLoggedIn) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/records/:path*'],
};