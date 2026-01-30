export default function Home() {
  const sectionData = [
    {
      title: "",
      content:
        "I focus on clean UI, performance-oriented frontend architecture, and real-world case studies.",
    },
    {
      title: "",
      content: (
        <>
          Currently building{" "}
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
        </>
      ),
    },
    {
      title: "",
      content: (
        <>
          I&apos;m open to junior frontend opportunities —{" "}
          <a
            href="mailto:furkantitiz44@gmail.com"
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
        </>
      ),
    },
  ];

  return (
    <div className="w-full">
      <section className="w-full mt-2">
        {sectionData.map((section, index) => (
          <div key={index} className="mb-8">
            <h1 className="">{section.title}</h1>
            <p className="">{section.content}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
