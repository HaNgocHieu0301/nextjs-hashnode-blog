import { NextResponse, NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
//   console.log(`[next] Middleware triggered for path: ${pathname}`);

//   // Nếu truy cập root path (/)
//   if (pathname === '/') {
//     const url = new URL('/vi', request.url);
//     console.log(`[next] Redirecting from / to /vi`);
//     return NextResponse.redirect(url);
//   }

//   // Nếu path đã có tiền tố /en hoặc /vi (bao gồm các subpath)
//   if (pathname.startsWith('/en') || pathname.startsWith('/vi')) {
//     console.log(`[next] Path has language prefix, continuing: ${pathname}`);
//     return NextResponse.next();
//   }

//   // Bỏ qua các static assets, API routes, hoặc file có extension
//   if (
//     pathname.startsWith('/_next') ||
//     pathname.startsWith('/api') ||
//     pathname.includes('.') ||
//     pathname === '/favicon.ico'
//   ) {
//     console.log(`[next] Skipping middleware for: ${pathname}`);
//     return NextResponse.next();
//   }

//   // Redirect các path khác sang /vi
//   const url = new URL(`/vi${pathname}`, request.url);
//   console.log(`[next] Redirecting ${pathname} to /vi${pathname}`);
//   return NextResponse.redirect(url);
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)'],
};