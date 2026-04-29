import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://furkantitiz.dev"),
  alternates: {
    canonical: "https://furkantitiz.dev",
  },
  title: {
    default: "Furkan Titiz",
    template: "%s | Furkan Titiz",
  },
  description: "Frontend Developer",
  keywords: [
    "Furkan Titiz",
    "Furkan",
    "Titiz",
    "Frontend Developer",
    "Web Developer",
  ],
  openGraph: {
    title: "Furkan Titiz",
    description: "Frontend Developer",
    url: "https://furkantitiz.dev",
    siteName: "Furkan Titiz",
    locale: "tr_TR",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
  authors: [{ name: "Furkan Titiz", url: "https://furkantitiz.dev" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased p-4 flex flex-col min-h-screen w-full max-w-xl mx-auto bg-white dark:bg-black text-black dark:text-white`}
      >
        <Header />
        {children}
        <GoogleAnalytics />
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
