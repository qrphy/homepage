import Script from 'next/script';
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/layout/Header";
import GoogleAnalytics from './components/analytics/GoogleAnalytics';
import Footer from "../components/layout/Footer";
import VercelAnalytics from './components/analytics/VercelAnalytics';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Furkan Titiz",
  description: "Furkan Titiz's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased p-4 flex flex-col min-h-screen w-full max-w-xl mx-auto bg-white dark:bg-black text-black dark:text-white`}
      >
        <Header />
        {children}
        <GoogleAnalytics />
        <VercelAnalytics />
        <Footer />
      </body>
    </html>
  );
}
