import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    // Liste sayfasından veri çek
    const response = await fetch("https://letterboxd.com/curny/list/homepage/");

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const html = await response.text();

    let movies: string[] = [];

    // Poster alt yazılarından film adlarını çek (bu pattern çalışıyor)
    const posterTitles = html.match(/<img[^>]*alt="([^"]*)"[^>]*>/g);
    if (posterTitles) {
      movies = posterTitles
        .map((match) => match.match(/alt="([^"]*)"/)?.[1] || "")
        .filter((title) => title.length > 0 && title.length < 100)
        .slice(0, 10); // İlk 10 film
    }

    return NextResponse.json({
      success: true,
      movieCount: movies.length,
      movies: movies,
      method: "Liste scraping",
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
