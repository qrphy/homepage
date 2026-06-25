"use client";
import dynamic from "next/dynamic";

const GitHubCalendar = dynamic(
  () =>
    import("react-github-calendar").then((mod) => ({
      default: mod.GitHubCalendar,
    })),
  { ssr: false }
);

export function GitHubSection() {
  return (
    <div className="overflow-x-auto">
      <GitHubCalendar
        username="qrphy"
        colorScheme="light"
        fontSize={10}
        blockSize={11}
        blockMargin={3}
        errorMessage="GitHub activity could not be loaded."
      />
    </div>
  );
}
