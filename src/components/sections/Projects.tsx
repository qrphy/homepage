export default function Projects() {
  return (
    <section className="w-full">
      <p>
        Co-founding{" "}
        <a
          href="https://stylefinden.com"
          target="_blank"
          rel="noopener noreferrer"
          className="aurora-link decoration-current/40 hover:decoration-(--my-color) text-blue-500 underline-offset-3 transition-colors duration-200"
        >
          STYLEFINDEN
        </a>
        {" "}— a fashion content platform built with Next.js, monetized through
        AdSense and affiliate integrations. Other projects on{" "}
        <a
          href="https://github.com/qrphy"
          target="_blank"
          rel="noopener noreferrer"
          className="decoration-current/40 hover:decoration-(--my-color) hover:text-blue-300 text-blue-500 underline-offset-3 transition-colors duration-200"
        >
          GitHub
        </a>
        .
      </p>
    </section>
  );
}
