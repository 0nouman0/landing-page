import React from 'react'
import { SignIn } from '@clerk/nextjs'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function Page() {
  const enabled = Boolean(process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY)
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-white">
      <Header />
      <main className="flex-1">
        <section className="py-16">
          <div className="max-w-none mx-auto px-2 sm:px-4 lg:px-6">
            <div className="mx-auto grid gap-10 lg:grid-cols-2 items-center">
              {/* Left: Marketing copy */}
              <div className="order-2 lg:order-1">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 lobster-two-regular">Welcome back</h1>
                <p className="text-gray-600 mb-6">
                  Sign in to continue your AI-assisted contract reviews and compliance workflows.
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-primary-600"></span> Google or email & password</li>
                  <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-secondary-600"></span> Enterprise SSO (Okta, etc.)</li>
                  <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-accent-600"></span> Secure by default</li>
                </ul>
              </div>

              {/* Right: Auth card */}
              <div className="order-1 lg:order-2 w-full max-w-md justify-self-center">
                {enabled ? (
                  <SignIn
                    appearance={{
                      variables: { colorPrimary: '#2563eb' },
                      elements: {
                        card: 'shadow-xl border border-gray-200 rounded-2xl',
                        headerTitle: 'lobster-two-regular',
                      },
                    }}
                    fallbackRedirectUrl="/dashboard"
                    signUpUrl="/sign-up"
                  />
                ) : (
                  <div className="bg-white p-8 rounded-2xl shadow border border-gray-200">
                    <h2 className="text-2xl font-bold mb-2">Sign in</h2>
                    <p className="text-gray-600 mb-6">Set NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY to enable live authentication.</p>
                    <div className="space-y-4">
                      <button disabled className="w-full bg-gray-100 text-gray-500 px-4 py-3 rounded-lg font-medium flex items-center justify-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-5 h-5"><path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303C33.731 31.645 29.267 35 24 35c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.951 3.049l5.657-5.657C34.869 5.099 29.7 3 24 3 12.955 3 4 11.955 4 23s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.651-.389-3.917z"/><path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.371 16.467 18.83 13 24 13c3.059 0 5.842 1.154 7.951 3.049l5.657-5.657C34.869 5.099 29.7 3 24 3 16.318 3 9.656 7.337 6.306 14.691z"/><path fill="#4CAF50" d="M24 43c5.159 0 10.267-1.977 14.057-5.657L32.057 31.7C30.018 33.26 27.093 35 24 35c-5.243 0-9.644-3.34-11.292-7.819l-6.49 5.002C9.517 39.421 16.227 43 24 43z"/><path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303c-1.346 3.645-5.81 7-11.303 7-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.951 3.049l5.657-5.657C34.869 5.099 29.7 3 24 3c-11.045 0-20 8.955-20 20s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.651-.389-3.917z"/></svg>
                        Continue with Google
                      </button>
                      <div className="relative text-center">
                        <span className="absolute inset-0 flex items-center"><span className="w-full border-t"/></span>
                        <span className="relative bg-white px-3 text-gray-500 text-sm">or</span>
                      </div>
                      <form className="space-y-4">
                        <input disabled type="email" placeholder="Email" className="w-full border border-gray-300 rounded-lg px-4 py-3" />
                        <input disabled type="password" placeholder="Password" className="w-full border border-gray-300 rounded-lg px-4 py-3" />
                        <button disabled className="w-full bg-primary-600 text-white px-4 py-3 rounded-lg font-semibold opacity-60">Sign In</button>
                      </form>
                      <p className="text-sm text-gray-600 text-center">Don&apos;t have an account? <Link href="/sign-up" className="text-primary-600 font-semibold">Sign up</Link></p>
                    </div>
                  </div>
                )}
                {/* Kroolo SSO */}
                <div className="mt-4 text-center">
                  <Link href="/api/auth/kroolo?returnTo=/dashboard" className="inline-flex items-center justify-center gap-2 text-primary-700 hover:text-primary-800 font-semibold">
                    <span>Enterprise SSO (Kroolo)</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
