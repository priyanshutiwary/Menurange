import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Get the pathname of the request (e.g. /, /about, /blog/first-post)
  const path = request.nextUrl.pathname

  // If the path is already /early-access, don't redirect
  if (path === '/early-access') {
    return NextResponse.next()
  }

  // Redirect all other paths to /early-access
  return NextResponse.redirect(new URL('/early-access', request.url))
}

// Configure matcher to run middleware on all routes except api routes and static files
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}