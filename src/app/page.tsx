"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const maxScroll = 500;
  const scale = 1 + scrollY / 100;
  const opacity = Math.max(0, 1 - scrollY / maxScroll);

  return (
    <div className="relative text-[#00b919] h-[200vh]">
      <p
        className="fixed top-1/2 left-1/2 whitespace-nowrap text-xl font-mono pointer-events-none transition-transform duration-100 ease-in-out"
        style={{
          transform: `translate(-50%, -50%) scale(${scale})`,
          opacity: opacity,
        }}
      >
        coming soon...
      </p>
    </div>
  );

  /*
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <p className="hover:underline">coming soon...</p>
      </main>
    </div> */
}
