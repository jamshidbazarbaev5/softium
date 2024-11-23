import { Metadata } from 'next'
import localFont from "next/font/local";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import { Providers } from "./providers";
import Idea from "@/app/components/layout/Idea";
import "./globals.css";

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

export const metadata: Metadata = {
  title: {
    default: 'Softium - Web Development Studio',
    template: '%s | Softium'
  },
  description: 'Softium is a professional web development studio specializing in creating modern, functional websites and applications.',
  keywords: ['web development', 'software development', 'mobile apps', 'web design', 'IT solutions', 'Softium'],
  authors: [{ name: 'Softium Team' }],
  creator: 'Softium',
  publisher: 'Softium',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/img/logo.png',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
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
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
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
