"use client";
import dynamic from "next/dynamic";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

const GitHubCalendar = dynamic(
  () =>
    import("react-github-calendar").then((mod) => ({
      default: mod.GitHubCalendar,
    })),
  { ssr: false }
);

export function GitHubSection() {
  const { resolvedTheme } = useTheme();
  const mounted = useSyncExternalStore(subscribe, () => true, () => false);

  const colorScheme = mounted && resolvedTheme === "dark" ? "dark" : "light";

  return (
    <div className="overflow-x-auto">
      <GitHubCalendar
        username="qrphy"
        colorScheme={colorScheme}
        fontSize={10}
        blockSize={11}
        blockMargin={3}
        errorMessage="GitHub activity could not be loaded."
        theme={
          colorScheme === "dark"
            ? {
                dark: ["#1f2937", "#166534", "#16a34a", "#22c55e", "#4ade80"],
              }
            : undefined
        }
      />
    </div>
  );
}
