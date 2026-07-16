import type { Metadata } from "next";
import Link from "next/link";
import WorkflowGraph from "./graph";

export const metadata: Metadata = {
  title: "Agentic Engineering System",
  description:
    "Explore the vault-backed agentic engineering system Furkan Titiz uses to build Stylefinden through specialist agents, APIs, skills, and verification gates.",
  alternates: {
    canonical: "https://www.furkantitiz.dev/ai-workflow",
  },
  openGraph: {
    title: "Agentic Engineering System | Furkan Titiz",
    description:
      "Explore the vault-backed agentic engineering system Furkan Titiz uses to build Stylefinden through specialist agents, APIs, skills, and verification gates.",
    url: "https://www.furkantitiz.dev/ai-workflow",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Furkan Titiz's agentic engineering system for Stylefinden",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Agentic Engineering System | Furkan Titiz",
    description:
      "Explore the vault-backed agentic engineering system Furkan Titiz uses to build Stylefinden through specialist agents, APIs, skills, and verification gates.",
    images: ["/opengraph-image"],
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
    label: "Vault Memory",
    group: "memory",
    x: 50,
    y: 50,
    size: "lg",
    description:
      "A durable context layer for project decisions, constraints, code, research, and Stylefinden history.",
  },
  {
    id: "orchestrator",
    label: "Orchestrator",
    group: "agent",
    x: 71,
    y: 28,
    size: "lg",
    description: "Routes scoped work through the right agents, skills, tools, and quality gates.",
  },
  {
    id: "agents",
    label: "Agents",
    group: "agent",
    x: 76,
    y: 57,
    size: "md",
    description: "Specialized roles plan, implement, review, test, document, and operate selected workflows.",
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
    id: "tools",
    label: "Tools + APIs",
    group: "tooling",
    x: 28,
    y: 56,
    size: "lg",
    description: "Code tools and controlled service integrations execute product and content work.",
  },
  {
    id: "verify",
    label: "Verification",
    group: "quality",
    x: 17,
    y: 75,
    size: "sm",
    description: "Tests, builds, browser checks, and human review close the loop.",
  },
  {
    id: "output",
    label: "Production",
    group: "ship",
    x: 84,
    y: 76,
    size: "sm",
    description: "The result is a human-approved product change, published content, or a documented decision.",
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
  ["intent", "orchestrator"],
  ["orchestrator", "agents"],
  ["agents", "skills"],
  ["agents", "tools"],
  ["skills", "tools"],
  ["agents", "verify"],
  ["tools", "verify"],
  ["verify", "output"],
];

const workflows = [
  {
    title: "Feature Development",
    chain: "scope -> plan -> implement -> review -> test -> document -> ship",
  },
  {
    title: "Content Operations",
    chain: "research -> draft -> review -> Sanity -> publish -> measure",
  },
  {
    title: "Production Maintenance",
    chain: "detect -> reproduce -> patch -> verify -> deploy",
  },
  {
    title: "Memory Continuity",
    chain: "decision -> document -> vault update -> future retrieval",
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

const infrastructure = [
  { name: "Sanity", responsibility: "Structured content and controlled publishing workflows." },
  { name: "Supabase", responsibility: "Application data and operational state." },
  { name: "Resend", responsibility: "Transactional and lifecycle email infrastructure." },
  { name: "Vercel", responsibility: "Deployment, scheduled jobs, and production runtime." },
  { name: "Google Analytics", responsibility: "Product and content measurement." },
] as const;

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
          Agentic Engineering System
        </h1>
        <p className="mt-4 max-w-lg text-sm leading-relaxed text-gray-400">
          This is the system I designed to build Stylefinden: a vault-backed memory
          layer, specialist agents, reusable skills, API-connected workflows, and
          verification gates. Agents can operate selected steps; I remain responsible
          for architecture, credentials, publishing rules, and every production decision.
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
          Connected Infrastructure
        </h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {infrastructure.map((service) => (
            <div
              key={service.name}
              className="border-l border-gray-300/10 pl-3"
            >
              <div className="text-[13px] text-gray-200">{service.name}</div>
              <p className="mt-1 text-[11px] leading-relaxed text-gray-400">
                {service.responsibility}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-[11px] font-medium tracking-widest text-gray-300/50">
          Control Model
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <div className="text-[13px] text-gray-200">Agents operate</div>
            <p className="mt-2 text-sm leading-relaxed text-gray-400">
              Scoped planning, implementation, review, testing, documentation,
              and selected content or service workflows.
            </p>
          </div>
          <div>
            <div className="text-[13px] text-gray-200">I retain control</div>
            <p className="mt-2 text-sm leading-relaxed text-gray-400">
              Architecture, credentials, publishing rules, verification standards,
              and every production decision remain human-governed.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-[11px] font-medium tracking-widest text-gray-300/50">
          System in Practice
        </h2>
        <p className="max-w-lg text-sm leading-relaxed text-gray-400">
          Stylefinden is the production environment for this system. It supports
          feature development, project memory, content operations, verification,
          and coordination across the services behind the product.
        </p>
      </section>

      <div className="text-center text-[11px] text-gray-300/50">
        trying to be better than yesterday
      </div>
    </main>
  );
}
