import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, engineeringNotes } from "@/content/projects";
import SiteIdentity from "@/components/SiteIdentity";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return {};
  const url = `https://www.furkantitiz.dev/work/${slug}`;
  return {
    title: project.name,
    description: project.description,
    alternates: { canonical: url },
    openGraph: { title: `${project.name} | Furkan Titiz`, description: project.description, url, images: [{ url: project.image, alt: project.imageAlt }] },
    twitter: { card: "summary_large_image", title: `${project.name} | Furkan Titiz`, description: project.description, images: [project.image] },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  const nextProject = projects[(projects.indexOf(project) + 1) % projects.length];

  return (
    <main className="portfolio-shell project-article">
      <SiteIdentity />
      <article>
        <header className="article-intro"><h1>{project.name}</h1><p>{project.description}</p><div className="article-meta"><span>{project.role}</span><span>{project.status}</span></div>{project.url && <a className="article-link" href={project.url} target="_blank" rel="noopener noreferrer">Visit {project.name} <span aria-hidden="true">↗</span></a>}</header>
        <figure className={`article-figure figure-${project.slug}`}><Image src={project.image} alt={project.imageAlt} width={project.imageWidth} height={project.imageHeight} sizes={project.slug === "wakesay" || project.slug === "visual-plate" ? "120px" : "(max-width: 700px) 90vw, 640px"} priority /><figcaption>{project.slug === "visual-plate" || project.slug === "wakesay" ? "App icon · In development" : "A look at the live project"}</figcaption></figure>
        <div className="article-body">{project.sections.map((section) => <section key={section.title}><h2>{section.title}</h2><p>{section.text}</p></section>)}
          <section aria-labelledby="decisions-heading"><h2 id="decisions-heading">Engineering decisions</h2><div className="article-decisions">{engineeringNotes[project.slug]?.map((note) => <div key={note.title}><h3>{note.title}</h3><p>{note.text}</p></div>)}</div></section>
          <section><h2>Built with</h2><p>{project.stack.join(" · ")}</p></section>
        </div>
      </article>
      <aside className="article-related" aria-labelledby="related-heading"><h2 id="related-heading">Writing</h2><Link className="plain-entry" href="/ai-workflow">My agentic engineering system</Link></aside>
      <footer className="article-footer"><Link href="/">All projects</Link><Link href={`/work/${nextProject.slug}`}>{nextProject.name} <span aria-hidden="true">→</span></Link></footer>
    </main>
  );
}
