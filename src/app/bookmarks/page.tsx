export default function Bookmarks() {
  return (
    <div className="w-full">
      <div className="font-medium mb-10">
        <h1 className="mb-2 text-base">Bookmarks</h1>
        <p className="text-sm">Archive for my bookmarked links and things.</p>
      </div>
      <div className="mb-5">
        <h1>GeoHot Blog</h1>
        <p>
          <a
            href="https://geohot.github.io/blog/"
            className="text-sm hover:underline underline-offset-2 ct-color hover:text-blue-600 transition-colors duration-200"
          >
            geohot.github.io
          </a>
        </p>
      </div>
      <div className="mb-5">
        <h1>Lex Fridman Podcast #400: Elon Musk Round 4</h1>
        <a
          href="https://youtu.be/JN3KPFbWCy8?si=nt562R_J1RER3_08"
          className="text-sm hover:underline underline-offset-2 ct-color hover:text-blue-600 transition-colors duration-200"
        >
          youtube.com
        </a>
      </div>
    </div>
  );
}
