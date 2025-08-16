export default function Home() {
  return (
    <div className="f-full bg-black text-white pt-16 m-6">
      <div className="max-w-sm mx-auto">
        <header className="mb-6">
          <h1 className="text-sm font-semibold">Furkan Titiz</h1>
          <p className="text-xs font-medium text-gray-500">
            Frontend Developer
          </p>
        </header>
        <div className="mb-12 [&>p]:leading-loose text-sm font-normal">
          <p>
            I focus on developing frontend projects using JavaScript,
            TypeScript, React, Next.js, and TailwindCSS.
          </p>

          <p>
            Outside of coding, I enjoy watching F1 races, tennis matches, and
            listening to music.
          </p>
        </div>
        <h4 className="mb-3 text-sm font-semibold">Contact</h4>
        <p className="text-sm">
          Drop me an{" "}
          <a
            href="mailto:furkantitiz44@gmail.com"
            className="underline hover:no-underline"
          >
            {""}email
          </a>{" "}
          or catch me on{" "}
          <a
            href="https://www.linkedin.com/in/furkan-titiz/"
            className="underline hover:no-underline"
          >
            {" "}
            LinkedIn
          </a>
          .
        </p>
      </div>
    </div>
  );
}
