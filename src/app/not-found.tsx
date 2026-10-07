import type { Metadata } from "next";
import Link from "next/link";
import SiteIdentity from "@/components/SiteIdentity";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="portfolio-shell project-article">
      <SiteIdentity />
      <header className="article-intro"><h1>Page not found</h1><p>This page may have moved, or the link may be out of date.</p></header>
      <Link href="/" className="plain-entry not-found-link">Back to Furkan Titiz</Link>
    </main>
  );
}
