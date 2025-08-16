export default function Home() {
  return (
    <div className="f-full bg-black text-white pt-16 m-6">
      <div className="max-w-sm mx-auto">
        <header className="mb-6">
          <h1 className="text-lg font-medium">Furkan Titiz</h1>
          <p className="text-xs font-medium text-gray-400">
            Frontend Developer
          </p>
        </header>
        <div className="mb-12 [&>p]:leading-snug text-sm font-medium">
          <p>
            I build digital products that transform ideas into effortless and
            enjoyable web experiences.
          </p>
          <br />
          <p>
            I&apos;m currently working on frontend projects and sharing them on{" "}
            <a
              href="https://github.com/qrphy"
              className="underline hover:no-underline"
            >
              GitHub
            </a>
            .
          </p>
        </div>
        <div>
          <h4 className="mb-3 text-lg font-medium">Contact</h4>
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
    </div>
  );
}
