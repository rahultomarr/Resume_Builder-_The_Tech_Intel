import { auth } from '@/auth'
import { NextResponse } from 'next/server'

export default auth((req) => {
  const { nextUrl } = req
  const isLoggedIn = !!req.auth

  const isApiRoute = nextUrl.pathname.startsWith('/api')
  const isAppRoute = nextUrl.pathname.startsWith('/app') || 
    nextUrl.pathname.startsWith('/dashboard') ||
    nextUrl.pathname.startsWith('/builder') ||
    nextUrl.pathname.startsWith('/editor') ||
    nextUrl.pathname.startsWith('/templates') ||
    nextUrl.pathname.startsWith('/settings') ||
    nextUrl.pathname.startsWith('/institution')
  const isAuthRoute = nextUrl.pathname.startsWith('/login') || 
    nextUrl.pathname.startsWith('/register') || 
    nextUrl.pathname.startsWith('/forgot-password')

  // Redirect authenticated users away from auth pages
  if (isLoggedIn && isAuthRoute) {
    return NextResponse.redirect(new URL('/dashboard', nextUrl))
  }

  // Protect app routes
  if (!isLoggedIn && isAppRoute) {
    const loginUrl = new URL('/login', nextUrl)
    loginUrl.searchParams.set('redirect', nextUrl.pathname)
    return NextResponse.redirect(loginUrl)
  }

  return NextResponse.next()
})

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}
