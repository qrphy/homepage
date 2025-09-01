export default function Home() {
  const sectionData = [
    {
      title: "About",
      content:
        "I enjoy creating digital products that turn ideas into enjoyable web experiences.",
    },
    {
      title: "Current",
      content: (
        <>
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
        </>
      ),
    },
  ];

  return (
    <div className="w-full">
      <section className="text-base font-medium">
        {sectionData.map((section, index) => (
          <div key={index} className="mb-12">
            <h1 className="mb-3">{section.title}</h1>
            <p className="custom-text-color">{section.content}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
