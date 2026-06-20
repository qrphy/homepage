const contentLinkClass =
  "text-[#4a9bf6] no-underline hover:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#4a9bf6]";

const socialLinkClass =
  "text-base text-[#999] no-underline hover:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#4a9bf6]";

const paragraphClass =
  "m-0 text-[17px] leading-[1.34] tracking-[-0.015em] max-sm:text-base max-sm:leading-[1.4]";

export default function Home() {
  return (
    <main className="flex min-h-svh items-center justify-center bg-white px-[22px] py-12 font-[Arial,Helvetica,sans-serif] text-[#282828] max-sm:min-h-dvh max-sm:py-6">
      <article className="w-full max-w-[470px]">
        <header>
          <h1 className="m-0 text-[17px] leading-[1.35] font-normal">
            Furkan Titiz
          </h1>
        </header>

        <div className="mt-7 grid gap-[22px]">
          <p className={paragraphClass}>
            Co-founder of{" "}
            <a
              href="https://stylefinden.com"
              target="_blank"
              rel="noopener noreferrer"
              className={contentLinkClass}
            >
              stylefinden
            </a>.
          </p>
          <p className={paragraphClass}>
            We build fashion content, interactive tools, and software with
            Next.js, TypeScript, Sanity, Supabase, and Vercel.
          </p>
          <p className={paragraphClass}>
            I also keep a personal image archive at{" "}
            <a
              href="https://museumofmymind.com"
              target="_blank"
              rel="noopener noreferrer"
              className={contentLinkClass}
            >
              museum of my mind
            </a>.
          </p>
        </div>

        <nav className="mt-[38px] flex gap-[18px]" aria-label="Links">
          <a href="mailto:furkan@furkantitiz.dev" className={socialLinkClass}>
            email
          </a>
          <a
            href="https://github.com/qrphy"
            target="_blank"
            rel="noopener noreferrer"
            className={socialLinkClass}
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/furkan-titiz/"
            target="_blank"
            rel="noopener noreferrer"
            className={socialLinkClass}
          >
            LinkedIn
          </a>
        </nav>
      </article>
    </main>
  );
}
