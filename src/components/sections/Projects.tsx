export default function Projects() {
  return (
    <>
    <div className="w-full">
      <section className="w-full">
        <p>Currently building{" "}
        <a
            href="https://aurora-lamb.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="aurora-link decoration-current/40 hover:decoration-(--my-color) text-blue-500 underline-offset-3 transition-colors duration-200"
          >
            Aurora Lamb
          </a>
          , a fictional physical product brand as a frontend case study. My
          projects can be found on{" "}
          <a
            href="https://github.com/qrphy"
            target="_blank"
            rel="noopener noreferrer"
            className=" decoration-current/40 hover:decoration-(--my-color) hover:text-blue-300 text-blue-500 underline-offset-3 transition-colors duration-200"
          >
            GitHub
          </a>
          .
        </p>
      </section>
    </div>
    </>
  );
}