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
        colorScheme="dark"
        fontSize={11}
        blockSize={11}
        blockMargin={3}
        blockRadius={10}
        errorMessage="GitHub activity could not be loaded."
      />
    </div>
  );
}
