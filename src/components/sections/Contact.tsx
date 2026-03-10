export default function Contact() {
  return (
    <>
    <div className="w-full">
      <section className="w-full">
        <p>
            I&apos;m open to junior frontend opportunities -{" "}
            <a
            href="mailto:furkan@furkantitiz.dev"
            className="decoration-current/40 hover:decoration-(--my-color) hover:text-blue-300 text-blue-500 underline-offset-3 transition-colors duration-200"
          >
            email
          </a>{" "}
          or{" "}
          <a
            href="https://www.linkedin.com/in/furkan-titiz/"
            target="_blank"
            className="decoration-current/40 hover:decoration-(--my-color) hover:text-blue-300 text-blue-500 underline-offset-3 transition-colors duration-200"
          >
            LinkedIn
          </a>
          .
        </p>
      </section>
    </div>
    </>
  );
}