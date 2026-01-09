export default function Home() {
  const sectionData = [
    {
      title: "About",
      content:
"I spend most of my time exploring frontend projects and love turning ideas into digital products that make the web more enjoyable.",
    },
    {
      title: "Current",
      content: (
        <>
        Currently building{" "}
          <a
            href="https://aurora-lamb.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-current/40 hover:decoration-(--my-color) underline-offset-3 transition-colors duration-200"
          >
            Aurora Lamb
          </a>
          ,
          {" "}
          a fictional physical product brand as a frontend case study.
          {" "}
          My projects can be found on{" "}
          <a
            href="https://github.com/qrphy"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-current/40 hover:decoration-(--my-color) underline-offset-3 transition-colors duration-200"
          >
            GitHub
          </a>
          .
        </>
      ),
    },
    {
      title: "Contact",
      content: (
        <>
          I&apos;d love to connect send me an{" "}
          <a
            href="mailto:furkantitiz44@gmail.com"
            className="underline decoration-current/40 hover:decoration-(--my-color) underline-offset-3 transition-colors duration-200"
          >
            email
          </a>{" "}
          or catch me on{" "}
          <a
            href="https://www.linkedin.com/in/furkan-titiz/"
            target="_blank"
            className="underline decoration-current/40 hover:decoration-(--my-color) underline-offset-3 transition-colors duration-200"
          >
            LinkedIn
          </a>
          .
        </>
      ),
    },
  ];

  return (
    <div className="w-full">
      <section className="w-full">
        {sectionData.map((section, index) => (
          <div key={index} className="mb-12">
            <h1 className="mb-3 font-medium text-lg">{section.title}</h1>
            <p className="font-normal ct-color text-base">{section.content}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
