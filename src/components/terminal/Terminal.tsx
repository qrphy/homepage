"use client";
import {
  useState,
  useRef,
  useEffect,
  createContext,
  useContext,
  type ReactNode,
  type KeyboardEvent,
} from "react";
import {
  siJavascript,
  siTypescript,
  siNextdotjs,
  siTailwindcss,
  siNodedotjs,
  siGit,
  siGithub,
  siCursor,
  siFigma,
  siAnthropic,
  siVercel,
} from "simple-icons";
import dynamic from "next/dynamic";

const GitHubCalendar = dynamic(
  () =>
    import("react-github-calendar").then((mod) => ({
      default: mod.GitHubCalendar,
    })),
  { ssr: false }
);

type Line =
  | { type: "command"; text: string }
  | { type: "output"; node: ReactNode };

type ThemeKey = "green" | "blue" | "purple" | "amber";
type BgMode = "dark" | "light";

type ThemeColors = {
  accent: string;
  accentHover: string;
  accentMuted: string;
  ghColors: string[];
};

const THEMES: Record<ThemeKey, ThemeColors> = {
  green: {
    accent: "text-green-400",
    accentHover: "hover:text-green-300",
    accentMuted: "text-green-400/80",
    ghColors: ["#0d1117", "#0d4a1e", "#1a7a32", "#26a641", "#39d353"],
  },
  blue: {
    accent: "text-blue-400",
    accentHover: "hover:text-blue-300",
    accentMuted: "text-blue-400/80",
    ghColors: ["#0d1117", "#0d2a4a", "#0d4580", "#1a6abf", "#2d8fe0"],
  },
  purple: {
    accent: "text-purple-400",
    accentHover: "hover:text-purple-300",
    accentMuted: "text-purple-400/80",
    ghColors: ["#0d1117", "#1e0d4a", "#3a1a7a", "#5e26a6", "#8339d3"],
  },
  amber: {
    accent: "text-amber-400",
    accentHover: "hover:text-amber-300",
    accentMuted: "text-amber-400/80",
    ghColors: ["#0d1117", "#3d2200", "#7a4500", "#b36700", "#e88c00"],
  },
};

const ThemeCtx = createContext<ThemeKey>("green");

function useTheme(): ThemeColors {
  return THEMES[useContext(ThemeCtx)];
}

const PROMPT = "~/portfolio $";

const VSCODE_PATH =
  "M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z";

const OPENAI_PATH =
  "M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z";

const techIcons = [
  { path: siJavascript.path, label: "JavaScript" },
  { path: siTypescript.path, label: "TypeScript" },
  { path: siNextdotjs.path, label: "Next.js" },
  { path: siVercel.path, label: "Vercel" },
  { path: siTailwindcss.path, label: "Tailwind CSS" },
  { path: siNodedotjs.path, label: "Node.js" },
  { path: siGit.path, label: "Git" },
  { path: siGithub.path, label: "GitHub" },
  { path: VSCODE_PATH, label: "VS Code" },
  { path: siCursor.path, label: "Cursor" },
  { path: siFigma.path, label: "Figma" },
  { path: siAnthropic.path, label: "Claude" },
  { path: OPENAI_PATH, label: "ChatGPT" },
];

function WelcomeOutput() {
  const t = useTheme();
  return (
    <div className="flex flex-col gap-1 text-sm">
      <p>
        <span className={`${t.accent} font-medium`}>Furkan Titiz</span>
        <span className="text-gray-600"> — </span>
        <span className="text-gray-400">Frontend Developer</span>
      </p>
      <p className="text-gray-600">
        type <span className={t.accent}>help</span> to see available commands
      </p>
    </div>
  );
}

function HelpOutput() {
  const t = useTheme();
  const cmds: [string, string, string][] = [
    ["about", "who i am", "alt+a"],
    ["stack", "tools & technologies", "alt+s"],
    ["experience", "work history", "alt+e"],
    ["contact", "get in touch", "alt+c"],
    ["github", "contribution graph", "alt+g"],
    ["theme", "change accent color", "alt+t"],
    ["clear", "clear terminal history", "ctrl+l"],
  ];
  return (
    <div className="text-sm flex flex-col gap-0.5">
      {cmds.map(([cmd, desc, shortcut]) => (
        <p key={cmd}>
          <span className={`${t.accent} inline-block w-24`}>{cmd}</span>
          <span className="text-gray-600">— {desc}</span>
          <span className="text-gray-700 ml-3 text-xs">[{shortcut}]</span>
        </p>
      ))}
    </div>
  );
}

function AboutOutput() {
  const t = useTheme();
  return (
    <p className="text-sm text-gray-300 leading-relaxed max-w-lg">
      Frontend developer based in Turkey. I build clean, performance-oriented
      interfaces with Next.js, TypeScript, and Tailwind CSS. Co-founder of{" "}
      <a
        href="https://stylefinden.com"
        target="_blank"
        rel="noopener noreferrer"
        className={`${t.accent} underline underline-offset-2 ${t.accentHover} transition-colors`}
      >
        STYLEFINDEN
      </a>
      . Open to junior frontend opportunities.
    </p>
  );
}

function StackOutput() {
  const t = useTheme();
  return (
    <div className="flex flex-wrap gap-x-5 gap-y-2.5">
      {techIcons.map(({ path, label }) => (
        <div key={label} className="flex items-center gap-1.5">
          <svg
            viewBox="0 0 24 24"
            width="13"
            height="13"
            fill="currentColor"
            className={`${t.accentMuted} shrink-0`}
          >
            <path d={path} />
          </svg>
          <span className="text-xs text-gray-400">{label}</span>
        </div>
      ))}
    </div>
  );
}

function ExperienceOutput() {
  const t = useTheme();
  return (
    <div className="text-sm flex flex-col gap-1.5">
      <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
        <a
          href="https://stylefinden.com"
          target="_blank"
          rel="noopener noreferrer"
          className={`${t.accent} font-medium underline underline-offset-2 ${t.accentHover} transition-colors`}
        >
          STYLEFINDEN
        </a>
        <span className="text-gray-600">—</span>
        <span className="text-gray-300">Co-Founder & Frontend Developer</span>
      </div>
      <p className="text-gray-600 text-xs">April 2026 → Present</p>
      <p className="text-gray-400 leading-relaxed max-w-lg">
        Fashion content platform built with Next.js. Full technical
        architecture, UI development and monetization integration (Google
        AdSense, affiliate links).
      </p>
    </div>
  );
}

function ContactOutput() {
  const t = useTheme();
  const links: [string, string, string][] = [
    ["email", "furkan@furkantitiz.dev", "mailto:furkan@furkantitiz.dev"],
    [
      "linkedin",
      "linkedin.com/in/furkan-titiz",
      "https://www.linkedin.com/in/furkan-titiz/",
    ],
    ["github", "github.com/qrphy", "https://github.com/qrphy"],
  ];
  return (
    <div className="text-sm flex flex-col gap-1">
      <p className="text-gray-400 mb-0.5">
        Open to junior frontend opportunities.
      </p>
      {links.map(([label, display, href]) => (
        <p key={label}>
          <span className="text-gray-600 inline-block w-16">{label}</span>
          <a
            href={href}
            target={href.startsWith("mailto") ? undefined : "_blank"}
            rel="noopener noreferrer"
            className={`${t.accent} underline underline-offset-2 ${t.accentHover} transition-colors`}
          >
            {display}
          </a>
        </p>
      ))}
    </div>
  );
}

function GitHubOutput() {
  const t = useTheme();
  return (
    <GitHubCalendar
      username="qrphy"
      colorScheme="dark"
      theme={{ dark: t.ghColors }}
      fontSize={10}
      blockSize={12}
      blockMargin={3}
      errorMessage="GitHub activity could not be loaded."
    />
  );
}

function ThemeOutput({ current }: { current: ThemeKey }) {
  const t = useTheme();
  const list: [ThemeKey, string][] = [
    ["green", "Matrix green"],
    ["blue", "Ocean blue"],
    ["purple", "Neon purple"],
    ["amber", "Retro amber"],
  ];
  return (
    <div className="text-sm flex flex-col gap-0.5">
      <p className="text-gray-400 mb-0.5">Available themes:</p>
      {list.map(([key, label]) => (
        <p key={key}>
          <span
            className={`inline-block w-16 ${key === current ? t.accent : "text-gray-600"}`}
          >
            {key}
          </span>
          <span className="text-gray-600">
            — {label}
            {key === current ? " (active)" : ""}
          </span>
        </p>
      ))}
      <p className="text-gray-600 mt-1">
        usage: <span className="text-gray-400">theme {"<name>"}</span>
      </p>
    </div>
  );
}

function BgSwitcher({ mode, toggle }: { mode: BgMode; toggle: () => void }) {
  const t = useTheme();
  return (
    <button
      className={`fixed top-4 right-4 z-50 ${t.accent} opacity-30 hover:opacity-70 transition-opacity font-mono text-base leading-none`}
      style={{ background: "none", border: "none", cursor: "pointer", padding: "4px 6px" }}
      onClick={(e) => { e.stopPropagation(); toggle(); }}
      title={mode === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      aria-label={mode === "dark" ? "Switch to light mode" : "Switch to dark mode"}
    >
      {mode === "dark" ? "☀" : "☾"}
    </button>
  );
}

function NotFoundOutput({ cmd }: { cmd: string }) {
  const t = useTheme();
  return (
    <p className="text-red-400/80 text-sm">
      bash: {cmd}: command not found — type{" "}
      <span className={t.accent}>help</span> for available commands
    </p>
  );
}

function getOutput(raw: string): ReactNode | null {
  const cmd = raw.trim().toLowerCase();
  if (!cmd) return null;
  if (cmd === "help" || cmd === "-h" || cmd === "--help") return <HelpOutput />;
  if (
    cmd === "about" ||
    cmd === "whoami" ||
    cmd === "cat about.txt" ||
    cmd === "cat about"
  )
    return <AboutOutput />;
  if (cmd.startsWith("ls") || cmd === "stack" || cmd === "tech")
    return <StackOutput />;
  if (
    cmd === "experience" ||
    cmd === "cat experience.txt" ||
    cmd === "cat experience"
  )
    return <ExperienceOutput />;
  if (cmd === "contact" || cmd === "./contact.sh" || cmd === "contact.sh")
    return <ContactOutput />;
  if (cmd === "github" || cmd === "git" || cmd.startsWith("git log"))
    return <GitHubOutput />;
  return <NotFoundOutput cmd={raw.trim()} />;
}

const WELCOME: Line = { type: "output", node: <WelcomeOutput /> };

const ALT_CMDS: Record<string, string> = {
  KeyH: "help",
  KeyA: "about",
  KeyS: "stack",
  KeyE: "experience",
  KeyC: "contact",
  KeyG: "github",
  KeyT: "theme",
};

export default function Terminal() {
  const [lines, setLines] = useState<Line[]>([WELCOME]);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [histIdx, setHistIdx] = useState(-1);
  const [theme, setTheme] = useState<ThemeKey>("green");
  const [bgMode, setBgMode] = useState<BgMode>("dark");
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  const t = THEMES[theme];
  const bgHex = bgMode === "light" ? "#fafafa" : "#0c0c0c";

  useEffect(() => {
    document.body.style.backgroundColor = bgHex;
  }, [bgHex]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [lines]);

  const focus = () => inputRef.current?.focus();

  const resetToWelcome = () =>
    setLines([{ type: "output", node: <WelcomeOutput /> }]);

  const run = (raw: string) => {
    const cmd = raw.trim();
    if (!cmd) return;

    const lower = cmd.toLowerCase();

    if (lower === "clear") {
      resetToWelcome();
      return;
    }

    const themeMatch = lower.match(/^theme(?:\s+(\w+))?$/);
    if (themeMatch) {
      const requested = themeMatch[1];
      let node: ReactNode;
      if (requested && requested in THEMES) {
        const next = requested as ThemeKey;
        setTheme(next);
        node = (
          <p className="text-sm text-gray-400">
            Theme changed to{" "}
            <span className={THEMES[next].accent}>{next}</span>.
          </p>
        );
      } else {
        node = <ThemeOutput current={theme} />;
      }
      setLines((prev) => [
        ...prev,
        { type: "command", text: cmd },
        { type: "output", node },
      ]);
      return;
    }

    const out = getOutput(cmd);
    setLines((prev) => [
      ...prev,
      { type: "command", text: cmd },
      ...(out ? [{ type: "output" as const, node: out }] : []),
    ]);
  };

  const handleKey = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      run(input);
      if (input.trim()) setHistory((h) => [input.trim(), ...h]);
      setHistIdx(-1);
      setInput("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const idx = Math.min(histIdx + 1, history.length - 1);
      setHistIdx(idx);
      if (history[idx] !== undefined) setInput(history[idx]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const idx = Math.max(histIdx - 1, -1);
      setHistIdx(idx);
      setInput(idx === -1 ? "" : (history[idx] ?? ""));
    } else if (e.ctrlKey && e.key === "l") {
      e.preventDefault();
      resetToWelcome();
    } else if (e.ctrlKey && e.key === "c") {
      setInput("");
    } else if (e.altKey && !e.ctrlKey) {
      const cmd = ALT_CMDS[e.code];
      if (cmd) {
        e.preventDefault();
        run(cmd);
        setHistory((h) => [cmd, ...h]);
        setHistIdx(-1);
        setInput("");
      }
    }
  };

  return (
    <ThemeCtx.Provider value={theme}>
      <BgSwitcher mode={bgMode} toggle={() => setBgMode((m) => (m === "dark" ? "light" : "dark"))} />
      <div
        className={`min-h-screen font-mono text-sm cursor-text${bgMode === "light" ? " light-mode" : ""}`}
        style={{ backgroundColor: bgHex }}
        onClick={focus}
      >
        <div className="max-w-2xl mx-auto px-6 py-12 flex flex-col gap-3">
          {lines.map((line, i) =>
            line.type === "command" ? (
              <div key={i} className="flex items-start gap-2">
                <span className={`${t.accent} shrink-0 select-none`}>
                  {PROMPT}
                </span>
                <span className="text-gray-200 break-all">{line.text}</span>
              </div>
            ) : (
              <div key={i} className="py-0.5">
                {line.node}
              </div>
            )
          )}

          <div className="flex items-center gap-2">
            <span className={`${t.accent} shrink-0 select-none`}>
              {PROMPT}
            </span>
            <div className="relative flex-1 flex items-center overflow-hidden">
              <span className="text-gray-200 whitespace-pre">{input}</span>
              <span className={`cursor-blink ${t.accent} leading-none`}>█</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                autoFocus
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck={false}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKey}
                className="absolute inset-0 opacity-0 w-full cursor-text"
                aria-label="Terminal input"
              />
            </div>
          </div>

          <div ref={bottomRef} />
        </div>
      </div>
    </ThemeCtx.Provider>
  );
}
