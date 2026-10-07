import type { Metadata, Viewport } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";

const geistSans = Inter({
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
    "AI Engineer and Co-Founder of Stylefinden, building web products, iOS apps, and agentic systems with thoughtful interfaces and verified engineering workflows.",
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
    title: "Furkan Titiz",
    description:
      "AI Engineer and Co-Founder of Stylefinden, building web products, iOS apps, and agentic systems with thoughtful interfaces and verified engineering workflows.",
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
    title: "Furkan Titiz",
    description:
      "AI Engineer and Co-Founder of Stylefinden, building web products, iOS apps, and agentic systems with thoughtful interfaces and verified engineering workflows.",
    images: ["/opengraph-image"],
  },
  manifest: "/site.webmanifest?v=20261003-2",
  icons: {
    icon: [
      { url: "/favicon.ico?v=20261003-2", sizes: "16x16 32x32 48x48", type: "image/x-icon" },
      { url: "/favicon-16x16.png?v=20261003-2", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png?v=20261003-2", sizes: "32x32", type: "image/png" },
      { url: "/android-chrome-192x192.png?v=20261003-2", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png?v=20261003-2", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.ico?v=20261003-2",
  },
  authors: [{ name: "Furkan Titiz", url: "https://www.furkantitiz.dev" }],
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
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
