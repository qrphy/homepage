import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.furkantitiz.dev"),
  alternates: {
    canonical: "https://www.furkantitiz.dev",
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
    url: "https://www.furkantitiz.dev",
    siteName: "Furkan Titiz",
    locale: "tr_TR",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
  authors: [{ name: "Furkan Titiz", url: "https://www.furkantitiz.dev" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <GoogleAnalytics />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
