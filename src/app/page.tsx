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

export default function Home() {
  return (
    <main className="max-w-lg mx-auto px-6 py-16 sm:py-24">
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

<hr className="my-10" />

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

      <hr className="my-10" />

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


      <hr className="my-10" />

      <div className="mt-16 text-[11px] text-gray-300/50 text-center">
        trying to be better than yesterday
      </div>
    </main>
  );
}
