import { Metadata } from 'next'
import localFont from "next/font/local";
import { Montserrat, Orbitron } from 'next/font/google';
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import { Providers } from "./providers";
import Idea from "@/app/components/layout/Idea";
import "./globals.css";
import { NextWebVitalsMetric } from 'next/app';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};


export const metadata: Metadata = {
  title: {
    default: 'Softium - Professional Web Development Studio',
    template: '%s | Softium'
  },
  description: 'Softium is a professional web development studio specializing in creating modern, functional websites and applications.',
  keywords: [
    'Softium', 
    'web development', 
    'software development', 
    'mobile apps', 
    'web design', 
    'IT solutions', 
    'Nukus web development',
    'Uzbekistan web studio',
    'website development company',
    'web development in nukus',
    'nukus web development',
    'web development agency',
    'web design studio',
    'web development services',
    'web development company',
    'web development studio',
    'web development in uzbekistan',
    'web development worldwide',

  ],
  authors: [{ name: 'Softium Team' }],
  creator: 'Softium',
  publisher: 'Softium',
  metadataBase: new URL('https://softium.uz'),
  alternates: {
    canonical: '/',
  },

 
 
  icons: {
    icon: [
      { url: '/img/playstore.png', sizes: 'any' },
      { url: '/img/playstore.png', sizes: '16x16', type: 'image/png' },
      { url: '/img/playstore.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/img/playstore.png',
    apple: [
      { url: '/img/playstore.png' },
    ],
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
    google: 'UBG41kbpqry-XY5Livekl2NwuCw641me0XiSNICDOjI',
  },
}

export function reportWebVitals(metric: NextWebVitalsMetric) {
  console.log(metric);
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <html lang="en">
        <head>
          <link rel="icon" href="/img/playstore.png" />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "Softium",
                "url": "https://softium.uz",
                "logo": "https://softium.uz/img/logo.png",
                "description": "Professional web development studio specializing in modern websites and applications",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Nukus",
                  "addressCountry": "UZ"
                },
                "sameAs": [
                  "https://linkedin.com/company/softium-web-studio",
                  "https://instagram.com/softium_nukus"
                ]
              })
            }}
          />
        </head>
        <body
          className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} ${orbitron.variable} antialiased`}
        >
          <Header />
          {children}
          <Idea />
          <Footer />
        </body>
      </html>
    </Providers>
  );
}
