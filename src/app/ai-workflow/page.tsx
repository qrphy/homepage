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
    id: "index",
    label: "Index",
    group: "memory",
    x: 50,
    y: 50,
    size: "lg",
    description:
      "Everything the system knows, and how it finds it again: notes, prior decisions, code, and the research it runs on its own.",
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
    x: 24,
    y: 27,
    size: "md",
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

// Peer relationships only. Every node also gets a spoke to the core, drawn by
// the graph itself — naming the core here would double the line.
const meshLines = [
  ["intent", "planner"],
  ["planner", "builder"],
  ["builder", "reviewer"],
  ["builder", "skills"],
  ["reviewer", "skills"],
  ["verify", "builder"],
  ["reviewer", "verify"],
  ["verify", "output"],
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
    <main className="mx-auto max-w-3xl px-6 py-16 sm:py-24 space-y-16">
      <header>
        <Link
          href="/"
          className="text-xs text-gray-300 transition-colors hover:text-gray-500"
        >
          ← Furkan Titiz
        </Link>

        <h1 className="mt-8 text-xl font-medium tracking-tight text-gray-100">
          Personal AI Workflow
        </h1>
        <p className="mt-4 max-w-lg text-sm leading-relaxed text-gray-400">
          I don&apos;t use AI as a chat box. I use it as a system: vague ideas go
          in, and plans, code, reviews, tests, and shipped work come out. Pull the
          graph around — every node is a real step I run.
        </p>
      </header>

      <WorkflowGraph
        nodes={graphNodes}
        satellites={satelliteNodes}
        edges={meshLines}
        coreId="index"
      />

      <div className="grid gap-10 sm:grid-cols-2">
        <section>
          <h2 className="mb-4 text-[11px] font-medium tracking-widest text-gray-300/50">
            System Loops
          </h2>
          <div className="flex flex-col gap-4">
            {workflows.map((workflow) => (
              <div key={workflow.title}>
                <div className="text-[13px] text-gray-200">{workflow.title}</div>
                <div className="mt-1 font-mono text-[11px] leading-relaxed text-gray-400">
                  {workflow.chain}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-[11px] font-medium tracking-widest text-gray-300/50">
            Skill Matrix
          </h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded border border-gray-300/10 bg-gray-300/[0.03] px-2 py-0.5 text-[11px] text-gray-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
      </div>

      <section>
        <h2 className="mb-4 text-[11px] font-medium tracking-widest text-gray-300/50">
          Principle
        </h2>
        <p className="max-w-lg text-sm leading-relaxed text-gray-400">
          Nothing ships on a claim. Lint, build, tests, and the real UI decide —
          and if any of them disagree with me, they win.
        </p>
      </section>

      <div className="text-center text-[11px] text-gray-300/50">
        trying to be better than yesterday
      </div>
    </main>
  );
}
