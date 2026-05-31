import { DarkModeToggle } from "@/components/DarkModeToggle";
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
  siSupabase,
  siSanity,
} from "simple-icons";
import { GitHubSection } from "@/components/GitHubSection";

const VSCODE_PATH =
  "M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z";

const techStack = [
  { path: siJavascript.path, label: "JavaScript" },
  { path: siTypescript.path, label: "TypeScript" },
  { path: siNextdotjs.path, label: "Next.js" },
  { path: siVercel.path, label: "Vercel" },
  { path: siTailwindcss.path, label: "Tailwind CSS" },
  { path: siNodedotjs.path, label: "Node.js" },
  { path: siSupabase.path, label: "Supabase" },
  { path: siSanity.path, label: "Sanity" },
  { path: siGit.path, label: "Git" },
  { path: siGithub.path, label: "GitHub" },
  { path: VSCODE_PATH, label: "VS Code" },
  { path: siCursor.path, label: "Cursor" },
  { path: siFigma.path, label: "Figma" },
  { path: siAnthropic.path, label: "Claude" },
];

const projects = [
  {
    name: "STYLEFINDEN",
    href: "https://stylefinden.com",
    role: "Co-Founder & Frontend Developer",
    period: "Apr 2026 → Present",
    description:
      "Fashion content platform. Full technical architecture, UI development and monetization integration (Google AdSense, affiliate links).",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Sanity", "Supabase", "Vercel", "AI SDK", "Resend", "Zod"],
    githubHref: null,
  },
  {
    name: "Portfolio",
    href: "https://www.furkantitiz.dev",
    role: "Personal Site",
    period: null,
    description:
      "Personal portfolio built with Next.js App Router and Tailwind CSS.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Vercel"],
    githubHref: "https://github.com/qrphy",
  },
];

export default function Home() {
  return (
    <main className="max-w-xl mx-auto px-6 py-16 sm:py-24">
      {/* Hero */}
      <section>
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
            Furkan Titiz
          </h1>
          <DarkModeToggle />
        </div>
        <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">Frontend Developer</p>
        <p className="mt-5 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
          Building clean, performance-oriented interfaces with Next.js and
          TypeScript. Co-founder of{" "}
          <a
            href="https://stylefinden.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 dark:text-white underline underline-offset-2 decoration-gray-300 dark:decoration-gray-600 hover:decoration-gray-600 dark:hover:decoration-gray-300 transition-colors"
          >
            STYLEFINDEN
          </a>
          . Open to junior frontend opportunities.
        </p>
        <div className="flex gap-5 mt-5">
          <a
            href="mailto:furkan@furkantitiz.dev"
            className="text-xs text-gray-400 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
          >
            email
          </a>
          <a
            href="https://www.linkedin.com/in/furkan-titiz/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-gray-400 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
          >
            linkedin
          </a>
          <a
            href="https://github.com/qrphy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-gray-400 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
          >
            github
          </a>
        </div>
      </section>

      <hr className="border-gray-100 dark:border-gray-800 my-12" />

      {/* Projects */}
      <section>
        <h2 className="text-[11px] font-medium text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-8">
          Projects
        </h2>
        <div className="flex flex-col gap-8">
          {projects.map((p) => (
            <div key={p.name}>
              <div className="flex items-baseline justify-between gap-4">
                <div className="flex items-baseline gap-3">
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-gray-900 dark:text-white hover:text-gray-500 dark:hover:text-gray-400 transition-colors"
                  >
                    {p.name} ↗
                  </a>
                  {p.githubHref && (
                    <a
                      href={p.githubHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
                    >
                      github ↗
                    </a>
                  )}
                </div>
                {p.period && (
                  <span className="text-[11px] text-gray-400 dark:text-gray-500 shrink-0">
                    {p.period}
                  </span>
                )}
              </div>
              <p className="text-[11px] text-gray-400 dark:text-gray-500 mt-0.5">{p.role}</p>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 leading-relaxed">
                {p.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                {p.stack.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/8 px-2 py-0.5 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr className="border-gray-100 dark:border-gray-800 my-12" />

      {/* Stack */}
      <section>
        <h2 className="text-[11px] font-medium text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-6">
          Stack
        </h2>
        <div className="flex flex-wrap gap-x-5 gap-y-3">
          {techStack.map(({ path, label }) => (
            <div key={label} className="flex items-center gap-1.5">
              <svg
                viewBox="0 0 24 24"
                width="13"
                height="13"
                fill="currentColor"
                className="text-gray-400 dark:text-gray-500 shrink-0"
              >
                <path d={path} />
              </svg>
              <span className="text-xs text-gray-500 dark:text-gray-400">{label}</span>
            </div>
          ))}
        </div>
      </section>

      <hr className="border-gray-100 dark:border-gray-800 my-12" />

      {/* GitHub Activity */}
      <section>
        <h2 className="text-[11px] font-medium text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-6">
          GitHub Activity
        </h2>
        <GitHubSection />
      </section>

      <div className="mt-16 text-[11px] text-gray-300 dark:text-gray-600 text-center">
        trying to be better than yesterday
      </div>
    </main>
  );
}
