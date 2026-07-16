import Link from "next/link";

// Co-Founder & Lead Developer is the Stylefinden role.

const siteUrl = "https://www.furkantitiz.dev";
const personId = `${siteUrl}/#person`;
const siteDescription =
  "AI Engineer and Co-Founder of Stylefinden, building agentic engineering systems and full-stack products with human-governed production workflows.";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": personId,
      name: "Furkan Titiz",
      url: siteUrl,
      image: `${siteUrl}/opengraph-image`,
      jobTitle: "AI Engineer",
      description: siteDescription,
      sameAs: [
        "https://www.linkedin.com/in/furkan-titiz/",
        "https://github.com/qrphy",
      ],
      worksFor: {
        "@type": "Organization",
        name: "Stylefinden",
        url: "https://stylefinden.com",
      },
      knowsAbout: [
        "Agentic AI systems",
        "AI engineering",
        "Full-stack product engineering",
        "Next.js",
        "Sanity",
        "Supabase",
        "API-connected workflows",
      ],
    },
    {
      "@type": "ProfilePage",
      "@id": `${siteUrl}/#profile`,
      url: siteUrl,
      name: "Furkan Titiz | AI Engineer building agentic systems",
      description: siteDescription,
      mainEntity: { "@id": personId },
      isPartOf: { "@id": `${siteUrl}/#website` },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Furkan Titiz",
      description: siteDescription,
      publisher: { "@id": personId },
    },
  ],
};

const infrastructure = [
  ["Sanity", "structured content and publishing"],
  ["Supabase", "application data and operational state"],
  ["Resend", "transactional and lifecycle email"],
  ["Vercel", "deployment, scheduled jobs, runtime"],
  ["Google Analytics", "product and content measurement"],
];

const workflowStages = [
  ["01", "Project Intent", "scope the problem and define the outcome"],
  ["02", "Vault-backed Context", "retrieve decisions, constraints, and prior work"],
  ["03", "Planner", "turn intent into ordered, verifiable tasks"],
  ["04", "Agents + Skills", "specialists implement, review, research, and document"],
  ["05", "Workflows + APIs", "connect product work to real systems and services"],
  ["06", "Verification", "tests, builds, browser checks, and human review"],
  ["07", "Human-approved Change", "I own the final architecture and production decision"],
];

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl space-y-20 px-6 py-16 sm:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <section>
        <h1 className="text-xl font-medium tracking-tight text-gray-100">Furkan Titiz</h1>
        <p className="mt-4 max-w-xl text-2xl leading-tight tracking-tight text-gray-100 sm:text-3xl">
          AI Engineer building agentic systems.
        </p>
        <p className="mt-5 max-w-xl text-sm leading-relaxed text-gray-400">
          I design the engineering systems that turn product intent into shipped work:
          project memory, specialized agents, reusable skills, API-connected workflows,
          and verification gates. Stylefinden is the production proof.
        </p>
        <div className="mt-6 flex flex-wrap gap-5 text-xs text-gray-300">
          <Link href="/ai-workflow" className="transition-colors hover:text-gray-100">explore the system →</Link>
          <a href="https://stylefinden.com" target="_blank" rel="noopener noreferrer" aria-label="View Stylefinden (opens in new tab)" className="transition-colors hover:text-gray-100">view Stylefinden ↗</a>
          <a href="mailto:furkan@furkantitiz.dev" className="transition-colors hover:text-gray-100">email</a>
          <a href="https://www.linkedin.com/in/furkan-titiz/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile (opens in new tab)" className="transition-colors hover:text-gray-100">linkedin ↗</a>
          <a href="https://github.com/qrphy" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile (opens in new tab)" className="transition-colors hover:text-gray-100">github ↗</a>
        </div>
      </section>

      <section>
        <h2 className="text-[11px] font-medium tracking-widest text-gray-300/50">Product in Practice</h2>
        <div className="mt-5 border-l border-amber-300/30 pl-5">
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <a href="https://stylefinden.com" target="_blank" rel="noopener noreferrer" aria-label="Stylefinden (opens in new tab)" className="text-lg font-medium text-gray-100 hover:text-gray-400">STYLEFINDEN ↗</a>
            <span className="text-[11px] text-gray-300">Co-Founder &amp; Lead Developer</span>
          </div>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-gray-400">
            A fashion discovery and editorial platform built from scratch. I own the product engineering end to end—from application development and CMS architecture to data systems, email infrastructure, analytics, and deployment.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {["Next.js", "Sanity", "Supabase", "Resend", "Vercel", "Google Analytics"].map((tag) => <span key={tag} className="rounded border border-gray-300/10 bg-gray-300/[0.04] px-2 py-0.5 text-[11px] text-gray-300">{tag}</span>)}
          </div>
        </div>
      </section>

      <section>
        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <h2 className="text-[11px] font-medium tracking-widest text-gray-300/50">Agentic Engineering System</h2>
          <Link href="/ai-workflow" className="text-[11px] text-amber-200/80 hover:text-amber-100">system details →</Link>
        </div>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-gray-400">
          A vault-backed memory layer, specialist agents, reusable skills, API integrations, and verification gates form a controlled development loop around Stylefinden.
        </p>
        <ol className="mt-6 grid gap-2 sm:grid-cols-2">
          {workflowStages.map(([number, title, detail]) => <li key={number} className="rounded-sm border border-gray-300/10 bg-gray-300/[0.03] p-3"><span className="font-mono text-[10px] text-amber-200/70">{number}</span><div className="mt-2 text-sm text-gray-200">{title}</div><p className="mt-1 text-[11px] leading-relaxed text-gray-400">{detail}</p></li>)}
        </ol>
      </section>

      <section>
        <h2 className="text-[11px] font-medium tracking-widest text-gray-300/50">Connected Product Infrastructure</h2>
        <div className="mt-5 grid gap-x-8 gap-y-3 sm:grid-cols-2">
          {infrastructure.map(([name, detail]) => <div key={name} className="flex items-baseline gap-3"><span className="text-sm text-gray-200">{name}</span><span className="text-[11px] text-gray-400">{detail}</span></div>)}
        </div>
      </section>

      <section>
        <h2 className="text-[11px] font-medium tracking-widest text-gray-300/50">Selected Work</h2>
        <div className="mt-5"><a href="https://museumofmymind.com" target="_blank" rel="noopener noreferrer" aria-label="Museum of My Mind (opens in new tab)" className="text-sm font-medium text-gray-100 hover:text-gray-400">museum of my mind ↗</a><p className="mt-2 max-w-xl text-sm leading-relaxed text-gray-400">Personal image archive for photographs and visual fragments, with gallery layouts and optimized delivery.</p></div>
      </section>

      <section className="border-t border-gray-300/10 pt-8"><p className="text-sm text-gray-300">Open to conversations about agentic product engineering, systems design, and thoughtful digital products.</p><a href="mailto:furkan@furkantitiz.dev" className="mt-4 inline-block text-xs text-amber-200/80 hover:text-amber-100">get in touch →</a></section>
    </main>
  );
}
