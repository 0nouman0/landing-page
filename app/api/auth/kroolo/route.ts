import { NextRequest, NextResponse } from 'next/server'

// Placeholder Kroolo SSO redirect endpoint
// Fill in your Kroolo SSO init URL and any parameters needed.
export async function GET(req: NextRequest) {
  const url = new URL(req.url)
  const returnTo = url.searchParams.get('returnTo') || '/'

  // TODO: Replace with your Kroolo SSO init URL
  const KROOLO_SSO_URL = process.env.KROOLO_SSO_URL || 'https://example.com/kroolo/sso/start'

  const redirectUrl = `${KROOLO_SSO_URL}?returnTo=${encodeURIComponent(returnTo)}`
  return NextResponse.redirect(redirectUrl)
}
