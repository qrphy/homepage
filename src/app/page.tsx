export default function Home() {
  return (
    <div className="f-full bg-black text-white pt-16 m-6">
      <div className="max-w-lg mx-auto">
        <h1 className="text-xl font-semibold mb-6">Furkan Titiz</h1>
        <p className="mb-3 text-base">
          I'm currently working on frontend projects and sharing them on
          <a
            href="https://github.com/qrphy"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 underline ml-1"
          >
            GitHub
          </a>
          .
        </p>
        <p className="mb-3 text-base">
          Feel free to check them out and reach out for{" "}
          <a
            href="mailto:furkantitiz96@gmail.com"
            className="hover:text-blue-500 underline"
          >
            collaboration
          </a>
          .
        </p>
        <p className="mb-12 text-base">
          Outside of coding, I enjoy watching F1 races, tennis matches, and
          listening to music.
        </p>
        <h4 className="text-xl font-semibold mb-3">Contact</h4>
        <p className="text-base">
          Catch me on{" "}
          <a
            href="https://www.linkedin.com/in/furkan-titiz/"
            className="hover:text-blue-500 underline"
          >
            LinkedIn
          </a>
          .
        </p>
      </div>
    </div>
  );
}
