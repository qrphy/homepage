import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Header from "./components/Header";

const GA_ID = "G-1FTZJ3VKTT";

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
      <head>
        {GA_ID && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            />
            <Script
              id="gtag-init"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_ID}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased dark:bg-black dark:text-white max-w-xl mx-auto p-4`}
      >
        <Header />
        <main>
          {children}
          <SpeedInsights />{" "}
        </main>
      </body>
    </html>
  );
}
