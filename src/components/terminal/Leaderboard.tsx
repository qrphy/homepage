"use client";
import { useEffect, useState } from "react";
import { supabase, type ScoreRow } from "@/lib/supabase";

function toFlag(code: string): string {
  if (!code || code.length !== 2 || code === "XX") return "🌍";
  return [...code.toUpperCase()]
    .map((c) => String.fromCodePoint(0x1f1e0 + c.charCodeAt(0) - 65))
    .join("");
}

export function Leaderboard({
  accentColor,
  highlightId,
  refreshKey,
}: {
  accentColor: string;
  highlightId: string | null;
  refreshKey: number;
}) {
  const [scores, setScores] = useState<ScoreRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState(false);

  useEffect(() => {
    if (!supabase) {
      setLoading(false);
      return;
    }
    setLoading(true);
    setFetchError(false);
    supabase
      .from("scores")
      .select("id, nickname, score, country_code")
      .order("score", { ascending: false })
      .limit(10)
      .then(({ data, error }) => {
        if (error) { setFetchError(true); }
        else if (data) setScores(data as ScoreRow[]);
        setLoading(false);
      });
  }, [refreshKey]);

  if (!supabase) return null;

  return (
    <div className="flex flex-col gap-1 text-xs mt-2">
      <div className="flex items-center gap-2">
        <span className="text-gray-700 uppercase tracking-widest text-[10px]">
          leaderboard
        </span>
        <div className="flex-1 border-t border-gray-900" />
      </div>

      {loading ? (
        <p className="text-gray-800 py-1">loading...</p>
      ) : fetchError ? (
        <p className="text-gray-800 py-1">could not load scores</p>
      ) : scores.length === 0 ? (
        <p className="text-gray-800 py-1">no scores yet — be the first!</p>
      ) : (
        <div className="flex flex-col gap-0.5 py-0.5">
          {scores.map((row, i) => {
            const isNew = row.id === highlightId;
            return (
              <div key={row.id} className="flex items-center gap-2">
                <span className="text-gray-800 w-3 text-right shrink-0 tabular-nums">
                  {i + 1}
                </span>
                <span className="w-5 shrink-0 leading-none">
                  {toFlag(row.country_code)}
                </span>
                <span
                  className="flex-1 truncate"
                  style={{ color: isNew ? accentColor : "#4b5563" }}
                >
                  {row.nickname}
                </span>
                <span
                  className="tabular-nums shrink-0 font-medium"
                  style={{ color: isNew ? accentColor : "#374151" }}
                >
                  {row.score}
                </span>
                {isNew && (
                  <span style={{ color: accentColor }} className="shrink-0">
                    ←
                  </span>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
