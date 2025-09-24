import { auth, currentUser } from '@clerk/nextjs/server'
import Link from 'next/link'

export default async function DashboardPage() {
  const { userId, redirectToSignIn } = await auth()
  if (!userId) {
    redirectToSignIn()
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-6">
        <h1 className="text-3xl font-bold">Please sign in</h1>
        <div className="flex gap-4">
          <Link href="/sign-in" className="text-primary-600 underline">Sign In</Link>
          <Link href="/sign-up" className="text-primary-600 underline">Sign Up</Link>
        </div>
      </div>
    )
  }
  const user = await currentUser()
  const first = user?.firstName || user?.username || 'there'
  const email = user?.primaryEmailAddress?.emailAddress || 'your account'

  return (
    <div className="max-w-none mx-auto px-2 sm:px-4 lg:px-6 py-16">
  <h1 className="text-3xl md:text-4xl font-bold mb-4 lobster-two-regular">Welcome, {first}!</h1>
  <p className="text-gray-600">You are signed in with {email}.</p>
    </div>
  )
}
