import Link from "next/link";

const experience = [
  {
    name: "STYLEFINDEN",
    href: "https://stylefinden.com",
    role: "Co-Founder & Lead Developer",
    period: "Apr 2026 → Present",
    description:
      "A fashion platform where people find outfit ideas and style inspiration — content, tools, and commerce built from scratch.",
    stack: ["Next.js", "Sanity", "Supabase", "Vercel", "Resend", "Zod"],
    githubHref: null,
  },
];

const projects = [
  {
    name: "museum of my mind",
    href: "https://museumofmymind.com",
    role: "Personal Image Archive",
    period: null,
    description:
      "Personal image archive for photographs and visual fragments, with gallery layouts and optimized delivery.",
    stack: ["Next.js", "Cloudinary", "Vercel"],
    githubHref: null,
  },
];

type AiWorkflowNode = {
  id: string;
  label: string;
  detail: string;
  parallel?: boolean;
};

const aiWorkflowNodes: AiWorkflowNode[] = [
  {
    id: "01",
    label: "Intent",
    detail: "A vague idea is sharpened into one sentence I can be held to.",
  },
  {
    id: "02",
    label: "Context",
    detail:
      "Constraints, prior decisions, and the code that matters get loaded first.",
  },
  {
    id: "03",
    label: "Planner",
    detail: "The work becomes a numbered plan before a line is written.",
  },
  {
    id: "04",
    label: "Specialist Agents",
    detail: "Planning, building, reviewing, and debugging run as separate roles.",
    parallel: true,
  },
  {
    id: "05",
    label: "Skills",
    detail: "Reusable procedures — design, QA, SEO, docs — invoked on demand.",
    parallel: true,
  },
  {
    id: "06",
    label: "Verification",
    detail: "Nothing ships on a claim; lint, build, tests, and the real UI decide.",
  },
  {
    id: "07",
    label: "Output",
    detail: "Working code, published writing, or a decision I can defend later.",
  },
];

// Consecutive parallel nodes render side by side as one branch in the diagram.
const aiWorkflowRows = aiWorkflowNodes.reduce<AiWorkflowNode[][]>(
  (rows, node) => {
    const previous = rows[rows.length - 1];
    if (node.parallel && previous?.[0].parallel) previous.push(node);
    else rows.push([node]);
    return rows;
  },
  []
);

export default function Home() {
  return (
    <main className="max-w-lg mx-auto px-6 py-16 sm:py-24 space-y-16">
      {/* Hero */}
      <section>
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-medium tracking-tight text-gray-100">
            Furkan Titiz
          </h1>
        </div>
        <p className="mt-4 text-sm text-gray-400 leading-relaxed">
          Building clean, fast products that bring ideas to life with Next.js, Sanity, and Supabase.
        </p>
        <div className="flex gap-5 mt-5">
          <a
            href="mailto:furkan@furkantitiz.dev"
            className="text-xs text-gray-300 hover:text-gray-700 transition-colors"
          >
            email
          </a>
          <a
            href="https://www.linkedin.com/in/furkan-titiz/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-gray-300 hover:text-gray-700 transition-colors"
          >
            linkedin
          </a>
          <a
            href="https://github.com/qrphy"
            target="_blank"
            rel="noopener noreferrer"
              className="text-xs text-gray-300 hover:text-gray-700 transition-colors"
          >
            github
          </a>
        </div>
      </section>

      {/* Experience */}
      <section>
        <h2 className="text-[11px] font-medium text-gray-300/50 tracking-widest mb-4">
          Experience
        </h2>
        <div className="flex flex-col gap-8">
          {experience.map((p) => (
            <div key={p.name}>
              <div className="flex items-baseline justify-between gap-4">
                <div className="flex items-baseline gap-3">
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-gray-100 hover:text-gray-500 transition-colors"
                  >
                    {p.name} ↗
                  </a>
                </div>
                {p.period && (
                  <span className="text-[11px] text-gray-300 shrink-0">
                    {p.period}
                  </span>
                )}
              </div>  
              <p className="text-[11px] text-gray-300 mt-0.5">{p.role}</p>
              <p className="text-sm text-gray-400 mt-2 leading-relaxed">
                {p.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                {p.stack.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] text-gray-300 bg-gray-300/10 border border-gray-300/10 px-2 py-0.5 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section>
        <h2 className="text-[11px] font-medium text-gray-300/50 tracking-widest mb-4">
          Selected Work
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
                    className="text-sm font-medium text-gray-100 hover:text-gray-500 transition-colors"
                  >
                    {p.name} ↗
                  </a>
                  {p.githubHref && (
                    <a
                      href={p.githubHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] text-gray-300 hover:text-gray-600 transition-colors"
                    >
                      github ↗
                    </a>
                  )}
                </div>
                {p.period && (
                  <span className="text-[11px] text-gray-300 shrink-0">
                    {p.period}
                  </span>
                )}
              </div>
              <p className="text-[11px] text-gray-300 mt-0.5">{p.role}</p>
              <p className="text-sm text-gray-400 mt-2 leading-relaxed">
                {p.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                {p.stack.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] text-gray-300 bg-gray-300/10 border border-gray-300/10 px-2 py-0.5 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Personal AI Workflow */}
      <section aria-labelledby="ai-workflow-heading">
        <h2
          id="ai-workflow-heading"
          className="text-[11px] font-medium text-gray-300/50 tracking-widest mb-4"
        >
          Personal AI Workflow
        </h2>
        <p className="text-sm text-gray-400 leading-relaxed">
          A modular agent system I use to turn vague ideas into plans, code,
          reviews, tests, content, and shipped work.
        </p>

        <ol className="relative mt-6 flex flex-col gap-2.5 pl-6">
          <span
            aria-hidden
            className="absolute left-[3px] top-2 bottom-2 w-px bg-gray-300/10"
          />
          {aiWorkflowRows.map((row) => (
            <li key={row[0].id} className="relative">
              <span
                aria-hidden
                className="absolute -left-6 top-[9px] h-[7px] w-[7px] rotate-45 border border-gray-300/40 bg-[#060606]"
              />
              <div
                className={
                  row.length > 1
                    ? "grid gap-2.5 sm:grid-cols-2"
                    : "grid gap-2.5"
                }
              >
                {row.map((node) => (
                  <div
                    key={node.id}
                    className="group rounded-sm border border-gray-300/10 bg-gray-300/[0.03] px-3 py-2.5 transition-colors hover:border-gray-300/25"
                  >
                    <div className="flex items-baseline gap-2">
                      <span
                        className={`font-mono text-[10px] transition-colors ${
                          node.parallel
                            ? "text-amber-400/60 group-hover:text-amber-400"
                            : "text-gray-300/40 group-hover:text-gray-300/70"
                        }`}
                      >
                        {node.id}
                      </span>
                      <span className="text-[13px] text-gray-200">
                        {node.label}
                      </span>
                    </div>
                    <p className="mt-1 text-[12px] leading-relaxed text-gray-400">
                      {node.detail}
                    </p>
                  </div>
                ))}
              </div>
            </li>
          ))}
        </ol>

        <Link
          href="/ai-workflow"
          className="mt-5 inline-block text-xs text-gray-300 transition-colors hover:text-gray-500"
        >
          see the full system ↗
        </Link>
      </section>


      <div className="text-[11px] text-gray-300/50 text-center">
        trying to be better than yesterday
      </div>
    </main>
  );
}
