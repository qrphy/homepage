import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const response = await fetch("https://letterboxd.com/curny/films/");

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const html = await response.text();

    // Debug: HTML'den daha büyük parça göster
    const htmlPreview = html.substring(0, 2000);

    let movies: string[] = [];

    // Pattern 1: Film linkleri (en yaygın)
    const filmLinks = html.match(
      /<a[^>]*href="\/film\/[^"]*"[^>]*>([^<]+)<\/a>/g
    );
    if (filmLinks) {
      movies = filmLinks
        .map((match) => match.replace(/<[^>]*>/g, "").trim())
        .filter((title) => title.length > 0 && title.length < 100); // Çok uzun olmayan
    }

    // Pattern 2: Film poster alt yazıları
    const posterTitles = html.match(/<img[^>]*alt="([^"]*)"[^>]*>/g);
    if (posterTitles && movies.length === 0) {
      movies = posterTitles
        .map((match) => match.match(/alt="([^"]*)"/)?.[1] || "")
        .filter((title) => title.length > 0 && title.length < 100);
    }

    // Pattern 3: Film başlıkları (h2, h3, h4)
    const headings = html.match(/<h[234][^>]*>([^<]+)<\/h[234]>/g);
    if (headings && movies.length === 0) {
      movies = headings
        .map((match) => match.replace(/<[^>]*>/g, "").trim())
        .filter((title) => title.length > 0 && title.length < 100);
    }

    return NextResponse.json({
      success: true,
      movieCount: movies.length,
      movies: movies.slice(0, 10), // İlk 10 film
      method: "HTML scraping",
      htmlPreview: htmlPreview,
      patterns: {
        filmLinks: filmLinks?.length || 0,
        posterTitles: posterTitles?.length || 0,
        headings: headings?.length || 0,
      },
    });
  } catch (error) {
    console.error("Scraping hatası:", error);
    return NextResponse.json(
      {
        error: "Scraping hatası",
        detail: error instanceof Error ? error.message : "Bilinmeyen hata",
      },
      { status: 500 }
    );
  }
}
