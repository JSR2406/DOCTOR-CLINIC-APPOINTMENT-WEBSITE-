import type { Metadata, Viewport } from 'next'
import { Inter, Poppins } from 'next/font/google'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { WhatsAppButton } from '@/components/shared/whatsapp-button'
import { AIChatbot } from '@/components/shared/ai-chatbot'
import { PWAInstallPrompt } from '@/components/shared/pwa-install-prompt'
import { Toaster } from '@/components/ui/sonner'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-heading',
  display: 'swap',
})

export const viewport: Viewport = {
  themeColor: '#059669',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://www.dranshitarathore.com'),
  title: {
    default:
      'Dr. Anshita Singh Rathore - Expert Homeopathic Consultant | Pune & Mumbai',
    template: '%s | Dr. Anshita Singh Rathore',
  },
  description:
    'Expert homeopathic treatment for autoimmune diseases, thyroid disorders, PCOS, infertility, and lifestyle disorders. Book your consultation at our Pune & Mumbai clinics.',
  keywords: [
    'homeopathy',
    'homeopathic doctor',
    'Pune',
    'Mumbai',
    'autoimmune treatment',
    'thyroid treatment',
    'PCOS treatment',
    'infertility treatment',
    'Dr. Anshita Singh Rathore',
  ],
  authors: [{ name: 'Dr. Anshita Singh Rathore' }],
  creator: 'Dr. Anshita Singh Rathore',
  publisher: 'Dr. Anshita Singh Rathore Clinic',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Dr. Anshita Clinic',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.dranshitarathore.com',
    siteName: 'Dr. Anshita Singh Rathore - Homeopathic Clinic',
    title: 'Dr. Anshita Singh Rathore - Expert Homeopathic Consultant',
    description:
      'Expert homeopathic treatment for autoimmune diseases, thyroid, PCOS, and lifestyle disorders.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Dr. Anshita Singh Rathore Homeopathic Clinic',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. Anshita Singh Rathore - Expert Homeopathic Consultant',
    description:
      'Expert homeopathic treatment for autoimmune diseases, thyroid, PCOS, and lifestyle disorders.',
    images: ['/twitter-image.jpg'],
    creator: '@dranshita',
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
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} font-sans antialiased bg-white text-slate-900`}
      >
        <Header />
        <main className="min-h-screen pt-20">{children}</main>
        <Footer />
        <WhatsAppButton />
        <AIChatbot />
        <PWAInstallPrompt />
        <Toaster />
      </body>
    </html>
  )
}
