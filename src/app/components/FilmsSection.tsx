"use client";

import { useEffect, useState } from "react";

type Status = "loading" | "error" | "success";

export default function FilmsSection() {
  const [posters, setPosters] = useState<string[]>([]);
  const [status, setStatus] = useState<Status>("loading");
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    const fetchPosters = async () => {
      try {
        const res = await fetch("/api/letterboxd", {
          cache: 'no-store',
        });
        
        if (!res.ok) {
          const errorData = await res.json().catch(() => ({}));
          throw new Error(errorData.error || errorData.detail || `API error: ${res.status}`);
        }

        const data = await res.json();
        if (data.error) {
          throw new Error(data.error + (data.detail ? `: ${data.detail}` : ""));
        }

        console.log("FilmsSection API response:", data);
        console.log("Posters received:", data.posters);
        
        const postersArray = data.posters || [];
        if (postersArray.length === 0 && data.movies && data.movies.length > 0) {
          console.warn("Movies found but no posters:", data.movies);
        }
        
        setPosters(postersArray);
        setStatus("success");
      } catch (err) {
        console.error("FilmsSection fetch error:", err);
        setErrorMessage(err instanceof Error ? err.message : "Unknown error");
        setStatus("error");
      }
    };

    fetchPosters();
  }, []);

  if (status === "loading") {
    return <div className="ct-color text-sm">Loading..</div>;
  }

  if (status === "error") {
    return <div className="text-red-500">Error: {errorMessage}</div>;
  }

  return (
    <section id="films" className="mb-10">
      <h2 className="text-lg font-medium mb-4">Films</h2>
      {posters.length === 0 ? (
        <div className="ct-color text-sm">Nothing to show here.</div>
      ) : (
        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-3">
          {posters.map((poster, index) => (
            <div key={index} className="group">
              <img
                src={poster}
                alt={`Film ${index + 1}`}
                className="w-full h-auto rounded-lg shadow-md transition-transform duration-200 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
