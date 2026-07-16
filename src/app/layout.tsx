import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
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
  metadataBase: new URL("https://www.furkantitiz.dev"),
  alternates: {
    canonical: "https://www.furkantitiz.dev",
  },
  title: {
    default: "Furkan Titiz | AI Engineer building agentic systems",
    template: "%s | Furkan Titiz",
  },
  description:
    "AI Engineer and Co-Founder of Stylefinden, building agentic engineering systems and full-stack products with human-governed production workflows.",
  keywords: [
    "Furkan Titiz",
    "AI Engineer",
    "Agentic Systems",
    "Next.js Developer",
    "React Developer",
    "TypeScript Developer",
    "JavaScript Developer",
    "Tailwind CSS",
    "Web Developer",
    "Co-Founder",
    "STYLEFINDEN",
    "Portfolio",
    "Full-Stack Product Engineering",
  ],
  openGraph: {
    title: "Furkan Titiz | AI Engineer building agentic systems",
    description:
      "AI Engineer and Co-Founder of Stylefinden, building agentic engineering systems and full-stack products with human-governed production workflows.",
    url: "https://www.furkantitiz.dev",
    siteName: "Furkan Titiz",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Furkan Titiz — AI Engineer building agentic systems",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Furkan Titiz | AI Engineer building agentic systems",
    description:
      "AI Engineer and Co-Founder of Stylefinden, building agentic engineering systems and full-stack products with human-governed production workflows.",
    images: ["/opengraph-image"],
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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <GoogleAnalytics />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
