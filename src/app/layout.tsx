"use client";
import localFont from "next/font/local";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import { Providers } from "./providers";
import Idea from "@/app/components/layout/Idea";

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
