import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

const TMDB_API_KEY = process.env.TMDB_API_KEY;

export async function GET() {
  try {
    if (!TMDB_API_KEY) {
      return NextResponse.json(
        { error: "TMDB_API_KEY environment variable is missing" },
        { status: 500 }
      );
    }

    const response = await fetch("https://letterboxd.com/qrpy/list/homepage/");

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const html = await response.text();

    let movies: string[] = [];

    // Önce data-film-name'i dene (en güvenilir)
    const filmNameMatches = html.match(/data-film-name="([^"]+)"/g);
    if (filmNameMatches && filmNameMatches.length > 0) {
      movies = filmNameMatches
        .map((match) => {
          const name = match.match(/data-film-name="([^"]+)"/)?.[1] || "";
          return decodeURIComponent(name).trim();
        })
        .filter((title) => title.length > 0 && title.length < 100)
        .slice(0, 10);
    }

    // Sonra data-film-slug'ı dene
    if (movies.length === 0) {
      const filmSlugMatches = html.match(/data-film-slug="([^"]+)"/g);
      if (filmSlugMatches && filmSlugMatches.length > 0) {
        movies = filmSlugMatches
          .map((match) => {
            const slug = match.match(/data-film-slug="([^"]+)"/)?.[1] || "";
            const parts = slug.split('-');
            const yearIndex = parts.findIndex(part => /^\d{4}$/.test(part));
            const titleParts = yearIndex > 0 ? parts.slice(0, yearIndex) : parts.slice(0, -1);
            if (titleParts.length === 0) return null;
            return titleParts
              .map(word => word.charAt(0).toUpperCase() + word.slice(1))
              .join(' ');
          })
          .filter((title): title is string => title !== null && title.length > 0 && title.length < 100)
          .slice(0, 10);
      }
    }
    // Son olarak href'leri dene
    if (movies.length === 0) {
      const filmLinks = html.match(/href="\/film\/([^"]+)\/"/g);
      if (filmLinks) {
        const uniqueSlugs = new Set<string>();
        filmLinks.forEach((match) => {
          const slug = match.match(/\/film\/([^"]+)\//)?.[1] || "";
          if (slug) uniqueSlugs.add(slug);
        });
        
        movies = Array.from(uniqueSlugs)
          .map((slug) => {
            const parts = slug.split('-');
            const yearIndex = parts.findIndex(part => /^\d{4}$/.test(part));
            const titleParts = yearIndex > 0 ? parts.slice(0, yearIndex) : parts.slice(0, -1);
            if (titleParts.length === 0) return null;
            return titleParts
              .map(word => word.charAt(0).toUpperCase() + word.slice(1))
              .join(' ');
          })
          .filter((title): title is string => title !== null && title.length > 0 && title.length < 100)
          .slice(0, 10);
      }
    }

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
          if (data.results && data.results.length > 0) {
            // İlk 3 sonuca bak, poster_path olan ilkini al
            for (const result of data.results.slice(0, 3)) {
              if (result.poster_path) {
                return `https://image.tmdb.org/t/p/w500${result.poster_path}`;
              }
            }
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
