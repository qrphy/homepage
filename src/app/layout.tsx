import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
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
  description:
    "Furkan Titiz — Frontend Developer building with Next.js, TypeScript and Tailwind CSS. Co-founder of STYLEFINDEN. Open to frontend opportunities.",
  keywords: [
    "Furkan Titiz",
    "Frontend Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript Developer",
    "JavaScript Developer",
    "Tailwind CSS",
    "Web Developer",
    "Co-Founder",
    "STYLEFINDEN",
    "Portfolio",
    "Frontend Geliştirici",
  ],
  openGraph: {
    title: "Furkan Titiz",
    description:
      "Furkan Titiz — Frontend Developer building with Next.js, TypeScript and Tailwind CSS. Co-founder of STYLEFINDEN. Open to frontend opportunities.",
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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased px-6 pt-16 pb-8 flex flex-col min-h-screen w-full max-w-2xl mx-auto`}
      >
        <ThemeProvider>
          <Header />
          {children}
          <GoogleAnalytics />
          <Analytics />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
