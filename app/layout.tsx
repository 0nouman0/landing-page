import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://poligap.com'),
  title: 'Poligap | All-in-One Legal & Compliance Monitoring Tool',
  description: 'Comprehensive legal and compliance monitoring assessments powered by AI. Streamline legal workflows with intelligent document analysis, risk assessment, and regulatory compliance tracking.',
  keywords: 'legal compliance, compliance monitoring, legal document analysis, risk assessment, regulatory compliance, legal technology, compliance tools',
  authors: [{ name: 'Poligap' }],
  creator: 'Poligap',
  publisher: 'Poligap',
  openGraph: {
    title: 'Poligap | All-in-One Legal & Compliance Monitoring Tool',
    description: 'Comprehensive legal and compliance monitoring assessments powered by AI. Streamline legal workflows with intelligent document analysis.',
    url: 'https://poligap.com',
    siteName: 'Poligap',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Poligap - AI Document Analysis Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Poligap | All-in-One Legal & Compliance Monitoring Tool',
    description: 'Comprehensive legal and compliance monitoring assessments powered by AI. Streamline legal workflows with intelligent document analysis.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'poligap-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`} suppressHydrationWarning={true}>
        {process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY ? (
          <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
            {children}
          </ClerkProvider>
        ) : (
          // Fallback: render without auth provider until keys are configured
          <>{children}</>
        )}
      </body>
    </html>
  )
}
