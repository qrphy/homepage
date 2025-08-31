import { NextRequest, NextResponse } from "next/server";

const TMDB_API_KEY = process.env.TMDB_API_KEY;

export async function GET(request: NextRequest) {
  try {
    // Environment variable kontrolü
    if (!TMDB_API_KEY) {
      return NextResponse.json(
        { error: "TMDB_API_KEY environment variable is missing" },
        { status: 500 }
      );
    }

    // Liste sayfasından veri çek
    const response = await fetch("https://letterboxd.com/curny/list/homepage/");

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const html = await response.text();

    let movies: string[] = [];

    // Poster alt yazılarından film adlarını çek
    const posterTitles = html.match(/<img[^>]*alt="([^"]*)"[^>]*>/g);
    if (posterTitles) {
      movies = posterTitles
        .map((match) => match.match(/alt="([^"]*)"/)?.[1] || "")
        .filter((title) => title.length > 0 && title.length < 100)
        .slice(0, 10); // İlk 10 film
    }

    // TMDB'den posterleri çek
    const posters = await Promise.all(
      movies.map(async (title) => {
        try {
          const response = await fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(
              title
            )}`
          );

          if (!response.ok) {
            console.error(`TMDB API error for "${title}":`, response.status);
            return null;
          }

          const data = await response.json();
          if (
            data.results &&
            data.results.length > 0 &&
            data.results[0].poster_path
          ) {
            return `https://image.tmdb.org/t/p/w500${data.results[0].poster_path}`;
          }
          return null;
        } catch (error) {
          console.error(`Error fetching poster for "${title}":`, error);
          return null;
        }
      })
    );

    const validPosters = posters.filter(Boolean);

    return NextResponse.json({
      success: true,
      movieCount: movies.length,
      movies: movies,
      posters: validPosters,
      posterCount: validPosters.length,
      method: "Liste scraping + TMDB posters",
    });
  } catch (error) {
    console.error("Scraping Error:", error);
    return NextResponse.json(
      {
        error: "Scraping Error",
        detail: error instanceof Error ? error.message : "Error",
      },
      { status: 500 }
    );
  }
}
