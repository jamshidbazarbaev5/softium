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
  description: 'Softium is a professional web development studio specializing in creating modern, functional websites and applications. Based in Nukus, we offer full-range web development services.',
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
    'web development agency',
    'web design studio',
    'web development services',
    'web development company',
    'web development studio',
    'web development in nukus',
    'nukus web development',
  ],
  authors: [{ name: 'Softium Team' }],
  creator: 'Softium',
  publisher: 'Softium',
  metadataBase: new URL('https://softium.uz'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Softium - Professional Web Development Studio',
    description: 'Professional web development studio specializing in modern websites and applications',
    url: 'https://softium.uz',
    siteName: 'Softium',
    locale: 'en_US',
    type: 'website',
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
