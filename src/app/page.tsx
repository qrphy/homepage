import Link from "next/link";
import Image from "next/image";
import { projects } from "@/content/projects";

// Co-Founder & Lead Developer is the Stylefinden role.

const siteUrl = "https://www.furkantitiz.dev";
const personId = `${siteUrl}/#person`;
const siteDescription =
  "AI Engineer and Co-Founder of Stylefinden, building web products, iOS apps, and agentic systems with thoughtful interfaces and verified engineering workflows.";

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

export default function Home() {
  return (
    <main className="portfolio-shell personal-home">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
      <header className="personal-intro">
        <Image className="profile-avatar" src="/profile.jpg" alt="Furkan Titiz" width={64} height={64} priority />
        <h1>Furkan Titiz</h1>
        <p>I’m an AI engineer in Türkiye, building web and iOS products. Currently co-founding <a href="https://stylefinden.com" target="_blank" rel="noopener noreferrer">Stylefinden</a> and making apps of my own.</p>
        <nav className="personal-links" aria-label="Contact and profiles"><a href="mailto:furkan@furkantitiz.dev">Email</a><a href="https://github.com/qrphy" target="_blank" rel="noopener noreferrer">GitHub</a><a href="https://www.linkedin.com/in/furkan-titiz/" target="_blank" rel="noopener noreferrer">LinkedIn</a><a href="/Furkan-Titiz-CV.pdf" target="_blank" rel="noopener noreferrer" aria-label="CV (PDF, opens in a new tab)">CV</a></nav>
      </header>

      <section className="personal-section" aria-labelledby="writing-heading">
        <h2 id="writing-heading">Writing</h2>
        <ul className="personal-list writing-list"><li><Link href="/ai-workflow">My agentic engineering system</Link></li></ul>
      </section>

      <section className="personal-section" aria-labelledby="projects-heading">
        <h2 id="projects-heading">Projects</h2>
        <ul className="personal-list project-index">
          {projects.map((project) => <li key={project.slug}><Link href={`/work/${project.slug}`}><span className="project-index-name">{project.name}</span>{" "}<span className="project-index-description">{project.summary}</span></Link></li>)}
        </ul>
      </section>
    </main>
  );
}
