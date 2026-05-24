"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import { supabase } from "@/lib/supabase";
import { Leaderboard } from "./Leaderboard";

const COLS = 20;
const ROWS = 12;
const TICK = 140;

type Pos = { x: number; y: number };
type Dir = "up" | "down" | "left" | "right";
type Phase = "idle" | "playing" | "over";

const OPP: Record<Dir, Dir> = { up: "down", down: "up", left: "right", right: "left" };

const HEX: Record<string, string> = {
  green:  "#4ade80",
  blue:   "#60a5fa",
  purple: "#c084fc",
  amber:  "#fbbf24",
};
const DIM: Record<string, string> = {
  green:  "#14532d",
  blue:   "#1e3a5f",
  purple: "#3b0764",
  amber:  "#451a03",
};

function randFood(snake: Pos[]): Pos {
  if (snake.length >= COLS * ROWS) return { x: 0, y: 0 };
  const occ = new Set(snake.map((s) => `${s.x},${s.y}`));
  let p: Pos;
  do { p = { x: (Math.random() * COLS) | 0, y: (Math.random() * ROWS) | 0 }; }
  while (occ.has(`${p.x},${p.y}`));
  return p;
}

const INIT: Pos[] = [{ x: 10, y: 6 }, { x: 9, y: 6 }, { x: 8, y: 6 }];

export function SnakeGame({
  themeKey,
  onQuit,
}: {
  themeKey: string;
  onQuit: (score: number) => void;
}) {
  const ac = HEX[themeKey] ?? HEX.green;
  const dm = DIM[themeKey] ?? DIM.green;

  // Game state
  const [phase, setPhase] = useState<Phase>("idle");
  const [snake, setSnake] = useState<Pos[]>(INIT);
  const [food,  setFood]  = useState<Pos>(() => randFood(INIT));
  const [score, setScore] = useState(0);
  const [best,  setBest]  = useState(0);

  // Save & leaderboard state
  const [nickInput,   setNickInput]   = useState("");
  const [saving,      setSaving]      = useState(false);
  const [savedId,     setSavedId]     = useState<string | null>(null);
  const [promptDone,  setPromptDone]  = useState(false);
  const [lbKey,       setLbKey]       = useState(0);
  const [saveError,   setSaveError]   = useState<string | null>(null);

  // Game loop refs
  const phaseR = useRef<Phase>("idle");
  const snakeR = useRef<Pos[]>(INIT);
  const foodR  = useRef<Pos>(food);
  const nDir   = useRef<Dir>("right");
  const cDir   = useRef<Dir>("right");
  const scoreR = useRef(0);
  const quitR  = useRef(onQuit);
  quitR.current = onQuit;

  // Save flow refs
  const nickFocused = useRef(false);
  const promptDoneR = useRef(false);
  const nickRef     = useRef<HTMLInputElement>(null);

  // Stable setter that keeps ref + state in sync
  const setDone = useCallback((val: boolean) => {
    promptDoneR.current = val;
    setPromptDone(val);
  }, []);

  const start = useCallback(() => {
    const s = [...INIT];
    const f = randFood(s);
    snakeR.current = s;
    foodR.current  = f;
    nDir.current   = "right";
    cDir.current   = "right";
    scoreR.current = 0;
    phaseR.current = "playing";
    promptDoneR.current = false;
    setSnake(s); setFood(f); setScore(0); setPhase("playing");
    setNickInput(""); setPromptDone(false); setSavedId(null); setSaveError(null);
  }, []);

  // Global keyboard handler
  useEffect(() => {
    const MAP: Record<string, Dir> = {
      ArrowUp: "up",   w: "up",   W: "up",
      ArrowDown: "down", s: "down", S: "down",
      ArrowLeft: "left", a: "left", A: "left",
      ArrowRight: "right", d: "right", D: "right",
    };

    const fn = (e: KeyboardEvent) => {
      // User is typing in the nickname input — don't intercept
      if (nickFocused.current) return;

      const p = phaseR.current;

      if (p === "idle") {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); start(); }
        else if (e.key === "Escape" || e.key === "q") quitR.current(scoreR.current);
        return;
      }

      if (p === "over") {
        if (!promptDoneR.current) {
          // Save prompt visible — only Escape (skip) and q (quit) work
          if (e.key === "Escape") { e.preventDefault(); setDone(true); }
          else if (e.key === "q") quitR.current(scoreR.current);
        } else {
          // Prompt dismissed — r/enter restart, q quit
          if (e.key === "r" || e.key === "R" || e.key === "Enter" || e.key === " ") {
            e.preventDefault(); start();
          } else if (e.key === "Escape" || e.key === "q") {
            quitR.current(scoreR.current);
          }
        }
        return;
      }

      // playing
      const d = MAP[e.key];
      if (d) {
        e.preventDefault();
        if (d !== OPP[cDir.current]) nDir.current = d;
      } else if (e.key === "Escape" || e.key === "q") {
        quitR.current(scoreR.current);
      }
    };

    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [start]);

  // Game loop
  useEffect(() => {
    if (phase !== "playing") return;
    const id = setInterval(() => {
      if (phaseR.current !== "playing") return;
      const d = nDir.current;
      cDir.current = d;
      const h = snakeR.current[0];
      const nh: Pos = {
        x: h.x + (d === "right" ? 1 : d === "left" ? -1 : 0),
        y: h.y + (d === "down"  ? 1 : d === "up"   ? -1 : 0),
      };
      if (
        nh.x < 0 || nh.x >= COLS || nh.y < 0 || nh.y >= ROWS ||
        snakeR.current.some((s) => s.x === nh.x && s.y === nh.y)
      ) {
        setBest((b) => Math.max(b, scoreR.current));
        phaseR.current = "over";
        setPhase("over");
        return;
      }
      const ate = nh.x === foodR.current.x && nh.y === foodR.current.y;
      const ns = [nh, ...snakeR.current];
      if (!ate) ns.pop();
      snakeR.current = ns;
      setSnake([...ns]);
      if (ate) {
        scoreR.current += 10;
        setScore(scoreR.current);
        foodR.current = randFood(ns);
        setFood({ ...foodR.current });
      }
    }, TICK);
    return () => clearInterval(id);
  }, [phase]);

  // Auto-focus nickname input on desktop when game ends
  useEffect(() => {
    if (phase !== "over") return;
    const isTouchOnly = window.matchMedia("(hover: none)").matches;
    if (isTouchOnly) return;
    const t = setTimeout(() => nickRef.current?.focus(), 150);
    return () => clearTimeout(t);
  }, [phase]);

  const steer = (d: Dir) => {
    if (phaseR.current !== "playing") return;
    if (d !== OPP[cDir.current]) nDir.current = d;
  };

  const handleSave = async () => {
    const nick = nickInput.trim().replace(/[^\p{L}\p{N}_\-. ]/gu, "").slice(0, 20);
    if (!nick || saving || savedId || !supabase) return;
    setSaveError(null);
    setSaving(true);
    try {
      // Check if nickname already exists (case-insensitive)
      const { count } = await supabase
        .from("scores")
        .select("*", { count: "exact", head: true })
        .ilike("nickname", nick);

      if (count && count > 0) {
        setSaveError("nickname already taken");
        return;
      }

      let country = "XX";
      try {
        const res = await fetch("/api/country");
        if (res.ok) ({ country } = (await res.json()) as { country: string });
      } catch { /* country stays XX */ }

      const { data } = await supabase
        .from("scores")
        .insert({ nickname: nick, score: scoreR.current, country_code: country })
        .select("id")
        .single();

      if (data?.id) {
        setSavedId(data.id as string);
        setDone(true);
        setLbKey((k) => k + 1);
      }
    } catch (err) {
      console.error("Failed to save score:", err);
      setSaveError("save failed");
    } finally {
      setSaving(false);
    }
  };

  // Swipe on grid
  const ts = useRef<{ x: number; y: number } | null>(null);

  const snakeSet = new Set(snake.map((s) => `${s.x},${s.y}`));

  return (
    <div className="flex flex-col gap-2 select-none">
      {/* Score bar */}
      <div className="flex items-center justify-between text-xs">
        <span style={{ color: ac }} className="font-medium tracking-widest">SNAKE</span>
        <span className="text-gray-600">
          score <span className="text-gray-400">{score}</span>
          {" · "}
          best <span className="text-gray-400">{best}</span>
        </span>
      </div>

      {/* Grid */}
      <div
        onTouchStart={(e) => {
          ts.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
        }}
        onTouchEnd={(e) => {
          if (!ts.current) return;
          const dx = e.changedTouches[0].clientX - ts.current.x;
          const dy = e.changedTouches[0].clientY - ts.current.y;
          ts.current = null;
          if (Math.abs(dx) < 15 && Math.abs(dy) < 15) return;
          steer(Math.abs(dx) > Math.abs(dy) ? (dx > 0 ? "right" : "left") : (dy > 0 ? "down" : "up"));
        }}
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${COLS}, 1fr)`,
          gap: "1px",
          padding: "4px",
          backgroundColor: "#0f0f0f",
          border: "1px solid #1c1c1c",
          borderRadius: "3px",
          touchAction: "none",
        }}
      >
        {Array.from({ length: ROWS * COLS }, (_, i) => {
          const x = i % COLS;
          const y = (i / COLS) | 0;
          const head = snake[0]?.x === x && snake[0]?.y === y;
          const body = !head && snakeSet.has(`${x},${y}`);
          const fd   = food.x === x && food.y === y;
          return (
            <div
              key={i}
              style={{
                aspectRatio: "1",
                backgroundColor: head ? ac : body ? dm : fd ? "#f87171" : "transparent",
                borderRadius: fd ? "50%" : "1px",
              }}
            />
          );
        })}
      </div>

      {/* Status / Save Prompt */}
      <div className="text-xs flex flex-col gap-1.5 min-h-[36px] justify-center">
        {phase === "idle" && (
          <span className="text-gray-700 text-center">
            press <span style={{ color: ac }}>enter</span> to start
            {" · "}
            <span className="text-gray-800">q</span> to quit
          </span>
        )}

        {phase === "playing" && (
          <span className="text-gray-800 hidden sm:block text-center">
            wasd / arrows · q to quit
          </span>
        )}

        {phase === "over" && (
          <>
            <div className="flex items-center justify-between">
              <span className="text-red-400/60">game over</span>
              <span className="text-gray-600">
                score <span style={{ color: ac }}>{score}</span>
              </span>
            </div>

            {!promptDone ? (
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-gray-700">nick:</span>
                <input
                  ref={nickRef}
                  value={nickInput}
                  onChange={(e) => setNickInput(e.target.value.slice(0, 20))}
                  onFocus={() => { nickFocused.current = true; }}
                  onBlur={() => { nickFocused.current = false; }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter")  { e.preventDefault(); handleSave(); }
                    if (e.key === "Escape") { e.preventDefault(); nickRef.current?.blur(); setDone(true); }
                  }}
                  placeholder="nickname"
                  maxLength={20}
                  spellCheck={false}
                  autoComplete="off"
                  autoCorrect="off"
                  autoCapitalize="off"
                  className="bg-transparent border-b border-gray-700 outline-none text-gray-300 w-32 px-0.5 placeholder:text-gray-800"
                  style={{ fontFamily: "inherit", fontSize: "inherit" }}
                />
                <button
                  type="button"
                  onClick={handleSave}
                  disabled={!nickInput.trim() || saving || !supabase}
                  className="text-gray-500 disabled:opacity-30 hover:text-gray-300 transition-colors"
                  style={{ fontFamily: "inherit", background: "none", border: "none", cursor: "pointer", padding: 0 }}
                >
                  {saving ? "..." : "save"}
                </button>
                <span className="text-gray-800">·</span>
                <button
                  type="button"
                  onClick={() => setDone(true)}
                  className="text-gray-700 hover:text-gray-500 transition-colors"
                  style={{ fontFamily: "inherit", background: "none", border: "none", cursor: "pointer", padding: 0 }}
                >
                  skip
                </button>
                {saveError && (
                  <span className="text-red-400/60">{saveError}</span>
                )}
              </div>
            ) : (
              <span>
                {savedId && (
                  <>
                    <span style={{ color: ac }}>✓ saved</span>
                    <span className="text-gray-700"> · </span>
                  </>
                )}
                <span style={{ color: ac }}>r</span>
                <span className="text-gray-700"> restart · </span>
                <span className="text-gray-800">q</span>
                <span className="text-gray-700"> quit</span>
              </span>
            )}
          </>
        )}
      </div>

      {/* Mobile D-pad */}
      <div className="flex flex-col items-center gap-1.5 sm:hidden mt-1">
        <DPadBtn ac={ac} onClick={() => {
          if (phase === "playing") steer("up");
          else if (phase === "idle" || promptDone) start();
        }}>↑</DPadBtn>
        <div className="flex gap-2">
          <DPadBtn ac={ac} onClick={() => {
            if (phase === "playing") steer("left");
            else if (phase === "idle" || promptDone) start();
          }}>←</DPadBtn>
          <DPadBtn
            ac={ac}
            muted
            onClick={() => {
              if (phase === "playing") quitR.current(scoreR.current);
              else if (phase === "idle" || promptDone) start();
            }}
          >
            {phase === "playing" ? "■" : "▶"}
          </DPadBtn>
          <DPadBtn ac={ac} onClick={() => {
            if (phase === "playing") steer("right");
            else if (phase === "idle" || promptDone) start();
          }}>→</DPadBtn>
        </div>
        <DPadBtn ac={ac} onClick={() => {
          if (phase === "playing") steer("down");
          else if (phase === "idle" || promptDone) start();
        }}>↓</DPadBtn>
      </div>

      {/* Leaderboard — hidden during play */}
      {phase !== "playing" && (
        <Leaderboard
          accentColor={ac}
          highlightId={savedId}
          refreshKey={lbKey}
        />
      )}
    </div>
  );
}

function DPadBtn({
  children,
  onClick,
  ac,
  muted,
}: {
  children: React.ReactNode;
  onClick: () => void;
  ac: string;
  muted?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        color: muted ? "#4b5563" : ac,
        WebkitTapHighlightColor: "transparent",
        border: "1px solid #1f2937",
        background: "transparent",
        borderRadius: "4px",
        width: "44px",
        height: "36px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        fontSize: "16px",
        touchAction: "manipulation",
        fontFamily: "inherit",
      }}
    >
      {children}
    </button>
  );
}
