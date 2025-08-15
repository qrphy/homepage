export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Furkan Titiz</h1>
        <p className="mb-4 text-lg">
          I'm currently working on frontend projects and sharing them on
          <a
            href="https://github.com/qrphy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 underline ml-1"
          >
            GitHub
          </a>
          .
        </p>
        <p className="mb-4 text-lg">
          Feel free to check them out and reach out for{" "}
          <a
            href="mailto:furkantitiz96@gmail.com"
            className="text-blue-400 hover:text-blue-300 underline"
          >
            collaboration
          </a>
          .
        </p>
        <p className="mb-6 text-lg">
          Outside of coding, I enjoy watching F1 races, tennis matches, and
          listening to music.
        </p>
        <h4 className="text-xl font-semibold mb-4">Contact</h4>
        <p className="text-lg">
          Catch me on
          <a
            href="https://www.linkedin.com/in/furkan-titiz/"
            className="text-blue-400 hover:text-blue-300 underline ml-1"
          >
            LinkedIn
          </a>
          .
        </p>
      </div>
    </div>
  );
}
