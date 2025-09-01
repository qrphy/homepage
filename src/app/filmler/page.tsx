"use client";

import { useEffect, useState } from "react";

type Status = "loading" | "error" | "success";

export default function Filmler() {
  const [posters, setPosters] = useState<string[]>([]);
  const [status, setStatus] = useState<Status>("loading");
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    const fetchPosters = async () => {
      try {
        const res = await fetch("/api/letterboxd");
        if (!res.ok) throw new Error("API does not respond");

        const data = await res.json();
        if (data.error) throw new Error(data.error);

        setPosters(data.posters || []);
        setStatus("success");
      } catch (err) {
        setErrorMessage(err instanceof Error ? err.message : "Unknown error");
        setStatus("error");
      }
    };

    fetchPosters();
  }, []);

  const renderContent = () => {
    switch (status) {
      case "loading":
        return <div className="text-sm">Loading..</div>;
      case "error":
        return <div className="text-red-500">Error: {errorMessage}</div>;
      case "success":
        return (
          <>
            <h1 className="text-lg font-bold mb-8 text-center">
              Some of my favorite films
            </h1>
            {posters.length === 0 ? (
              <div className="text-center text-gray-500">Index not found.</div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
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
          </>
        );
    }
  };

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-lg mx-auto">{renderContent()}</div>
    </div>
  );
}
