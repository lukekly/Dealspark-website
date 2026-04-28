import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.dealspark.io'),
  title: {
    default: 'DealSpark | B2B Lead Generation and Outbound Sales Agency | Ireland, UK and USA',
    template: '%s | DealSpark',
  },
  description:
    'DealSpark is an outbound business development partner delivering qualified meetings and sales pipeline through cold calling, email, and LinkedIn. Serving clients across Ireland, UK, and USA.',
  keywords: [
    'cold calling agency',
    'cold calling agency Ireland',
    'cold calling agency UK',
    'cold calling agency USA',
    'outbound sales agency',
    'B2B lead generation',
    'meeting setter',
    'sales meetings',
    'appointment setting',
    'B2B appointment setting',
    'cold email agency',
    'cold email outreach',
    'outbound agency Ireland',
    'lead gen agency',
    'GTM partner',
    'B2B pipeline generation',
  ],
  authors: [{ name: 'DealSpark' }],
  creator: 'DealSpark',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://dealspark.io',
    siteName: 'DealSpark',
    title: 'DealSpark | B2B Lead Generation and Outbound Sales Agency | Ireland, UK and USA',
    description:
      'DealSpark is an outbound business development partner delivering qualified meetings and sales pipeline through cold calling, email, and LinkedIn. Serving clients across Ireland, UK, and USA.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'DealSpark: B2B Lead Generation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DealSpark | B2B Lead Generation and Outbound Sales Agency | Ireland, UK and USA',
    description:
      'DealSpark is an outbound business development partner delivering qualified meetings and sales pipeline through cold calling, email, and LinkedIn. Serving clients across Ireland, UK, and USA.',
    images: ['/og-image.png'],
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-LKYL19SSJC"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-LKYL19SSJC');
          `}
        </Script>
      </head>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
