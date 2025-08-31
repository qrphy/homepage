export default function Home() {
  return (
    <div className="f-full">
      <section className="text-sm font-medium">
        <div className="mb-12">
          <h1 className="mb-3">About</h1>
          <p className="custom-text-color">
            I enjoy creating digital products that turn ideas into enjoyable web
            experiences.
          </p>
        </div>
        <div className="mb-12">
          <h1 className="mb-3">Current</h1>
          <p className="custom-text-color">
            Currently working on frontend projects check them out on{" "}
            <a
              href="https://github.com/qrphy"
              className="underline underline-offset-2 hover:text-blue-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            .
          </p>
        </div>
        <div className="mb-12">
          <h1 className="mb-3">Contact</h1>
          <p className="custom-text-color">
            I&apos;d love to connect send me an{" "}
            <a
              href="mailto:furkantitiz44@gmail.com"
              className="underline underline-offset-2 hover:text-blue-600"
            >
              email
            </a>{" "}
            or catch me on{" "}
            <a
              href="https://www.linkedin.com/in/furkan-titiz/"
              className="underline underline-offset-2 hover:text-blue-600"
            >
              LinkedIn
            </a>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
