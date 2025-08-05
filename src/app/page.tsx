"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const text = "// redesign in progress...";
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setIndex(index + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [index, text.length]);

  return (
    <div className="text-white h-[100vh] bg-black">
      <div className="flex flex-col items-center justify-center h-full">
        <p className="fixed whitespace-nowrap text-xl pointer-events-none justify-center items-center flex w-full h-full font-system">
          {text.slice(0, index)}
        </p>
      </div>
    </div>
  );
}
