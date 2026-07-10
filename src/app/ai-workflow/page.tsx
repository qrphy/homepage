import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Personal AI Workflow",
  description:
    "A modular agent system I use to turn vague ideas into plans, code, reviews, tests, content, and shipped work.",
  alternates: {
    canonical: "https://www.furkantitiz.dev/ai-workflow",
  },
};

const graphNodes = [
  {
    id: "intent",
    label: "Intent",
    group: "input",
    x: 50,
    y: 13,
    size: "md",
    description: "Vague project ideas, bugs, drafts, and questions enter the system.",
  },
  {
    id: "context",
    label: "Context",
    group: "memory",
    x: 24,
    y: 27,
    size: "sm",
    description: "Relevant files, notes, decisions, and constraints are pulled into view.",
  },
  {
    id: "planner",
    label: "Planner",
    group: "agent",
    x: 71,
    y: 28,
    size: "lg",
    description: "Ambiguous intent is broken into scoped, ordered, verifiable work.",
  },
  {
    id: "builder",
    label: "Builder",
    group: "agent",
    x: 28,
    y: 56,
    size: "md",
    description: "Implementation agents turn the plan into working product changes.",
  },
  {
    id: "reviewer",
    label: "Reviewer",
    group: "agent",
    x: 76,
    y: 57,
    size: "md",
    description: "Review loops catch regressions, weak reasoning, and missing tests.",
  },
  {
    id: "skills",
    label: "Skills",
    group: "tooling",
    x: 50,
    y: 78,
    size: "lg",
    description: "Reusable capabilities handle frontend, content, SEO, QA, and deployment.",
  },
  {
    id: "verify",
    label: "Verify",
    group: "quality",
    x: 17,
    y: 75,
    size: "sm",
    description: "Builds, linting, browser checks, and visual review close the loop.",
  },
  {
    id: "output",
    label: "Output",
    group: "ship",
    x: 84,
    y: 76,
    size: "sm",
    description: "The result is shipped code, published writing, or a clear decision.",
  },
];

const satelliteNodes = [
  { x: 15, y: 18, tone: "green" },
  { x: 33, y: 16, tone: "muted" },
  { x: 82, y: 18, tone: "green" },
  { x: 10, y: 43, tone: "muted" },
  { x: 39, y: 39, tone: "white" },
  { x: 61, y: 40, tone: "green" },
  { x: 89, y: 42, tone: "muted" },
  { x: 12, y: 91, tone: "green" },
  { x: 36, y: 91, tone: "muted" },
  { x: 66, y: 91, tone: "white" },
  { x: 90, y: 89, tone: "green" },
  { x: 7, y: 65, tone: "white" },
  { x: 93, y: 64, tone: "white" },
];

const meshLines = [
  ["intent", "context"],
  ["intent", "planner"],
  ["context", "builder"],
  ["planner", "reviewer"],
  ["builder", "skills"],
  ["reviewer", "skills"],
  ["verify", "skills"],
  ["output", "skills"],
  ["context", "skills"],
  ["planner", "skills"],
  ["verify", "builder"],
  ["reviewer", "output"],
];

const workflows = [
  {
    title: "Build Feature",
    chain: "idea -> plan -> implement -> review -> test -> ship",
  },
  {
    title: "Write Article",
    chain: "topic -> research -> outline -> draft -> edit -> publish",
  },
  {
    title: "Debug Issue",
    chain: "symptom -> reproduce -> isolate -> patch -> verify",
  },
];

const skills = [
  "Planning",
  "Frontend",
  "Code Review",
  "Browser QA",
  "SEO",
  "Content",
  "Research",
  "Deployment",
  "Memory",
  "Verification",
];

function getNode(id: string) {
  const node = graphNodes.find((item) => item.id === id);

  if (!node) {
    throw new Error(`Missing graph node: ${id}`);
  }

  return node;
}

function nodeSize(size: string) {
  if (size === "lg") {
    return "h-16 w-16 text-[11px]";
  }

  if (size === "md") {
    return "h-13 w-13 text-[10px]";
  }

  return "h-10 w-10 text-[9px]";
}

function nodeTone(group: string) {
  if (group === "agent") {
    return "border-violet-300/55 bg-violet-400/18 text-violet-100 shadow-[0_0_34px_rgba(139,92,246,0.28)]";
  }

  if (group === "quality" || group === "ship") {
    return "border-emerald-300/40 bg-emerald-400/12 text-emerald-100";
  }

  if (group === "memory" || group === "tooling") {
    return "border-zinc-100/35 bg-zinc-100/12 text-zinc-100";
  }

  return "border-amber-200/45 bg-amber-300/12 text-amber-100";
}

function satelliteTone(tone: string) {
  if (tone === "green") {
    return "bg-emerald-400/45";
  }

  if (tone === "white") {
    return "bg-zinc-100/80";
  }

  return "bg-zinc-500/35";
}

export default function AiWorkflowPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-zinc-100">
      <section className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-5 py-8 sm:px-8 lg:px-10">
        <div>
          <Link
            href="/"
            className="text-[11px] uppercase tracking-[0.28em] text-zinc-500 transition-colors hover:text-zinc-200"
          >
            Furkan Titiz
          </Link>
          <h1 className="mt-5 max-w-2xl text-3xl font-medium tracking-tight text-zinc-50 sm:text-5xl">
            Personal AI Workflow
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-6 text-zinc-400">
            A modular agent system I use to turn vague ideas into plans, code,
            reviews, tests, content, and shipped work.
          </p>
        </div>

        <div className="mt-10 grid flex-1 gap-6 lg:grid-cols-[minmax(0,1fr)_300px]">
          <div className="relative min-h-[560px] overflow-hidden rounded border border-zinc-800/90 bg-[#101010] shadow-2xl shadow-black/50">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.16),transparent_34%),radial-gradient(circle_at_25%_70%,rgba(34,197,94,0.12),transparent_24%),linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:100%_100%,100%_100%,42px_42px,42px_42px]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent,rgba(0,0,0,0.78)_78%)]" />

            <svg
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              {meshLines.map(([from, to]) => {
                const start = getNode(from);
                const end = getNode(to);

                return (
                  <line
                    key={`${from}-${to}`}
                    x1={start.x}
                    y1={start.y}
                    x2={end.x}
                    y2={end.y}
                    className="stroke-zinc-500/16"
                    strokeWidth="0.18"
                  />
                );
              })}
              {graphNodes
                .filter((node) => node.id !== "skills")
                .map((node) => {
                  const core = getNode("skills");

                  return (
                    <line
                      key={`core-${node.id}`}
                      x1={core.x}
                      y1={core.y}
                      x2={node.x}
                      y2={node.y}
                      className="stroke-violet-400/50"
                      strokeWidth="0.28"
                    />
                  );
                })}
            </svg>

            {satelliteNodes.map((node, index) => (
              <span
                key={`${node.x}-${node.y}-${index}`}
                className={`absolute h-2.5 w-2.5 rounded-full ${satelliteTone(
                  node.tone,
                )}`}
                style={{ left: `${node.x}%`, top: `${node.y}%` }}
              />
            ))}

            {graphNodes.map((node) => (
              <div
                key={node.id}
                className="group absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${node.x}%`, top: `${node.y}%` }}
              >
                <div
                  className={`${nodeSize(
                    node.size,
                  )} flex items-center justify-center rounded-full border text-center font-medium transition duration-300 group-hover:scale-110 group-hover:border-zinc-100/70 ${nodeTone(
                    node.group,
                  )}`}
                >
                  {node.label}
                </div>
                <div className="pointer-events-none absolute left-1/2 top-full z-10 mt-3 w-48 -translate-x-1/2 rounded border border-zinc-700 bg-zinc-950/95 p-3 text-xs leading-5 text-zinc-300 opacity-0 shadow-xl shadow-black/40 transition duration-200 group-hover:opacity-100">
                  {node.description}
                </div>
              </div>
            ))}

            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-4 border-t border-zinc-800/90 pt-4 text-[11px] text-zinc-500">
              <span>
                intent {"->"} orchestration {"->"} execution {"->"} verification
              </span>
              <span className="hidden text-violet-200/70 sm:inline">
                structured workflow, not a chat box
              </span>
            </div>
          </div>

          <aside className="grid content-start gap-4">
            <div className="rounded border border-zinc-800 bg-zinc-950/70 p-4">
              <h2 className="text-[11px] font-medium uppercase tracking-[0.22em] text-zinc-500">
                System Loops
              </h2>
              <div className="mt-4 grid gap-3">
                {workflows.map((workflow) => (
                  <div
                    key={workflow.title}
                    className="border-l border-violet-300/30 pl-3"
                  >
                    <div className="text-sm font-medium text-zinc-100">
                      {workflow.title}
                    </div>
                    <div className="mt-1 text-xs leading-5 text-zinc-500">
                      {workflow.chain}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded border border-zinc-800 bg-zinc-950/70 p-4">
              <h2 className="text-[11px] font-medium uppercase tracking-[0.22em] text-zinc-500">
                Skill Matrix
              </h2>
              <div className="mt-4 grid grid-cols-2 gap-2">
                {skills.map((skill) => (
                  <div
                    key={skill}
                    className="rounded border border-zinc-800 bg-zinc-900/50 px-2 py-2 text-[11px] text-zinc-300"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded border border-emerald-300/20 bg-emerald-400/5 p-4">
              <div className="text-[11px] uppercase tracking-[0.22em] text-emerald-200/70">
                Principle
              </div>
              <p className="mt-3 text-sm leading-6 text-zinc-300">
                Every project starts as unclear intent. The workflow turns it
                into context, tasks, specialist agents, reusable skills, and a
                verification loop.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
