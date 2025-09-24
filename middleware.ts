import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

const isPublicRoute = createRouteMatcher([
  '/',
  '/about',
  '/pricing',
  '/contact',
  '/bookdemo',
  '/api/(.*)'
])

export default clerkMiddleware(async (auth, req) => {
  if (isPublicRoute(req)) {
    return NextResponse.next()
  }
  const { userId, redirectToSignIn } = await auth()
  if (!userId) return redirectToSignIn()
  return NextResponse.next()
})

export const config = {
  matcher: [
    '/((?!.+\.[\w]+$|_next).*)',
    '/',
  ],
}
