import type { Metadata } from "next";
import Link from "next/link";
import SiteIdentity from "@/components/SiteIdentity";
import WorkflowGraph from "./graph";

export const metadata: Metadata = {
  title: "Agentic Engineering System",
  description:
    "Explore Furkan Titiz's personal engineering system across web and iOS products: project memory, specialist agents, APIs, skills, and verification.",
  alternates: {
    canonical: "https://www.furkantitiz.dev/ai-workflow",
  },
  openGraph: {
    title: "Agentic Engineering System | Furkan Titiz",
    description:
      "Explore Furkan Titiz's personal engineering system across web and iOS products: project memory, specialist agents, APIs, skills, and verification.",
    url: "https://www.furkantitiz.dev/ai-workflow",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Furkan Titiz's personal agentic engineering system",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Agentic Engineering System | Furkan Titiz",
    description:
      "Explore Furkan Titiz's personal engineering system across web and iOS products: project memory, specialist agents, APIs, skills, and verification.",
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
      "A durable context layer for each project's decisions, constraints, code, research, and history.",
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
    <main className="portfolio-shell system-page workflow-article">
      <SiteIdentity />
      <header className="article-intro">
        <h1>
          Agentic Engineering System
        </h1>
        <p className="workflow-lead">
          A personal approach to building software with AI: project context,
          specialist agents, reusable skills, and verification. I use it across
          my projects; Stylefinden is one example of it in practice.
        </p>
        <p className="workflow-opening">
          I built this approach to keep decisions and constraints connected to
          the work. An individual AI response is useful, but product development
          also needs continuity, clear scope, and evidence that a change works.
        </p>
      </header>

      <WorkflowGraph
        nodes={graphNodes}
        satellites={satelliteNodes}
        edges={meshLines}
        coreId="index"
      />

      <section aria-labelledby="how-it-works-heading" className="system-explanation">
        <h2 id="how-it-works-heading">How I work with the system</h2>
        <div className="system-principles">
          <div><h3>Context before action</h3><p>Each task starts with the relevant code, project constraints, and prior decisions. I keep context focused on the problem rather than loading everything. Useful findings return to project memory so the next session can build on them.</p></div>
          <div><h3>Specialized work</h3><p>Work is scoped into manageable steps. Agents bring roles such as planning, implementation, and review; skills provide reusable methods for those roles. The combination depends on the task, with more scrutiny for changes that affect production.</p></div>
          <div><h3>Evidence before release</h3><p>A generated change is a candidate, not a finished result. Tests, builds, browser checks, and review help establish what works. Findings can send the task back for revision before I decide whether it is ready.</p></div>
        </div>
      </section>

      <div className="workflow-reference">
        <section>
          <h2 className="mb-4 text-sm font-medium text-gray-500">
            System Loops
          </h2>
          <div className="workflow-loops">
            {workflows.map((workflow) => (
              <div key={workflow.title}>
                <h3>{workflow.title}</h3>
                <p className="workflow-chain">
                  {workflow.chain}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-sm font-medium text-gray-500">
            Skill Matrix
          </h2>
          <p className="workflow-skills">{skills.join(" · ")}</p>
        </section>
      </div>

      <section>
        <h2 className="mb-4 text-sm font-medium text-gray-500">
          Connected Infrastructure
        </h2>
        <p className="mb-5 text-sm leading-relaxed text-gray-600">These are services behind Stylefinden, rather than the agent system itself. Scoped workflows can interact with them where the task and permissions allow.</p>
        <dl className="workflow-services">
          {infrastructure.map((service) => (
            <div
              key={service.name}
              className="workflow-service"
            >
              <dt>{service.name}</dt>
              <dd>
                {service.responsibility}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section>
        <h2 className="mb-4 text-sm font-medium text-gray-500">
          Control Model
        </h2>
        <div className="workflow-control">
          <div>
            <div className="text-[13px] text-gray-800">Agents operate</div>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">
              Scoped planning, implementation, review, testing, documentation,
              and selected content or service workflows.
            </p>
          </div>
          <div>
            <div className="text-[13px] text-gray-800">I retain control</div>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">
              Architecture, credentials, publishing rules, verification standards,
              and every production decision remain human-governed.
            </p>
          </div>
        </div>
      </section>
      <section>
        <h2 className="mb-4 text-sm font-medium text-gray-500">
          System in Practice
        </h2>
        <p className="max-w-lg text-sm leading-relaxed text-gray-600">
          At Stylefinden, I use this approach for application development,
          content operations, and maintenance. The project combines a web
          application, editorial content, localization, and connected services,
          so a change needs more context than the file being edited.
        </p>
        <p className="mt-4 max-w-lg text-sm leading-relaxed text-gray-600">
          For a localization change, the workflow starts with the relevant
          routes and market rules, then scopes the implementation and review.
          UI, API, and SEO checks help verify the result; confirmed decisions
          are recorded for future work. This is a recurring way of working,
          rather than a claim that every task follows an identical pipeline.
        </p>
        <p className="mt-4 max-w-lg text-sm leading-relaxed text-gray-600">
          Content work follows the same principle: research and drafting are
          separate from editorial review and publication. AI supports the work;
          architecture, verification standards, and production decisions remain
          my responsibility.
        </p>
        <div className="system-project-link"><Link href="/work/stylefinden" className="plain-entry">Stylefinden <span>A fashion discovery and editorial platform</span></Link></div>
      </section>
      <footer className="article-footer"><Link href="/">All writing</Link><Link href="/work/stylefinden">Stylefinden <span aria-hidden="true">→</span></Link></footer>
    </main>
  );
}
