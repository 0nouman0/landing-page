import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://polygap.com'),
  title: 'Polygap | AI-Powered Document Analysis Platform',
  description: 'Transform your document workflow with AI-powered analysis and insights. Streamline processes with intelligent suggestions and enterprise-grade security.',
  keywords: 'AI document analysis, document workflow, business automation, document processing, team collaboration, productivity tools',
  authors: [{ name: 'Polygap' }],
  creator: 'Polygap',
  publisher: 'Polygap',
  openGraph: {
    title: 'Polygap | AI-Powered Document Analysis Platform',
    description: 'Transform your document workflow with AI-powered analysis and insights. Streamline processes with intelligent suggestions.',
    url: 'https://polygap.com',
    siteName: 'Polygap',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Polygap - AI Document Analysis Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Polygap | AI-Powered Document Analysis Platform',
    description: 'Transform your document workflow with AI-powered analysis and insights. Streamline processes with intelligent suggestions.',
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
    google: 'polygap-verification-code',
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
        {children}
      </body>
    </html>
  )
}
