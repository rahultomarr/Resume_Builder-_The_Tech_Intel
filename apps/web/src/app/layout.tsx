import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'TechIntel Resume Builder — Build Resumes That Get You Hired',
    template: '%s | TechIntel Resume Builder',
  },
  description:
    '100+ ATS-optimized templates, AI-guided builder, and powerful editor. Build professional resumes that pass ATS systems and land interviews.',
  keywords: [
    'resume builder',
    'ATS resume',
    'professional resume',
    'job application',
    'CV builder',
    'AI resume',
  ],
  authors: [{ name: 'TechIntel' }],
  creator: 'TechIntel',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://techintel.ai',
    siteName: 'TechIntel Resume Builder',
    title: 'TechIntel Resume Builder — Build Resumes That Get You Hired',
    description: '100+ ATS-optimized templates. AI-guided builder. Get your dream job.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'TechIntel Resume Builder',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TechIntel Resume Builder',
    description: '100+ ATS-optimized templates. AI-guided builder. Get your dream job.',
    images: ['/og-image.png'],
    creator: '@techintelhq',
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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
