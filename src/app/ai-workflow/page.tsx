import type { Metadata } from "next";
import Link from "next/link";
import WorkflowGraph from "./graph";

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
            I don&apos;t use AI as a chat box. I use it as a system: vague ideas go
            in, and plans, code, reviews, tests, and shipped work come out. Pull
            the graph around — every node is a real step I run.
          </p>
        </div>

        <div className="mt-10 grid flex-1 gap-6 lg:grid-cols-[minmax(0,1fr)_300px]">
          <WorkflowGraph
            nodes={graphNodes}
            satellites={satelliteNodes}
            edges={meshLines}
            coreId="skills"
          />

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
                Nothing ships on a claim. Lint, build, tests, and the real UI
                decide — and if any of them disagree with me, they win.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
