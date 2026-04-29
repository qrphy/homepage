"use client";
import { GitHubCalendar } from "react-github-calendar";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const darkTheme = {
  dark: ["#1a1a1a", "#14532d", "#166534", "#15803d", "#4ade80"],
};

const lightTheme = {
  light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
};

export default function GitHubActivity() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <div className="flex flex-col gap-2">
      <p className="ct-color text-sm font-medium">Recent GitHub Activity</p>
      <GitHubCalendar
        username="qrphy"
        colorScheme={isDark ? "dark" : "light"}
        theme={isDark ? darkTheme : lightTheme}
        fontSize={11}
        blockSize={13}
        blockMargin={3}
        errorMessage="GitHub activity could not be loaded."
      />
    </div>
  );
}
