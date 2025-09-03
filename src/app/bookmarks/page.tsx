type Bookmark = {
  title: string;
  url: string;
  host: string;
};

const bookmarks: Bookmark[] = [
  {
    title: "GeoHot Blog",
    url: "https://geohot.github.io/blog/",
    host: "geohot.github.io",
  },
  {
    title: "Anthropic courses",
    url: "https://anthropic.skilljar.com",
    host: "anthropic.skilljar.com",
  },
  {
    title: "Lex Fridman Podcast #333: Andrej Karpathy",
    url: "https://youtu.be/cdiD-9MMpb0?si=PZxMlg7AYpCmBvti",
    host: "youtube.com",
  },
  {
    title: "Lex Fridman Podcast #400: Elon Musk Round 4",
    url: "https://youtu.be/JN3KPFbWCy8?si=nt562R_J1RER3_08",
    host: "youtube.com",
  },
  {
    title: "MCP nedir?",
    url: "https://x.com/benfurkankilic/status/1962821941095739802",
    host: "x.com",
  },
];

function BookmarkItem({ title, url, host }: Bookmark) {
  return (
    <li className="mb-6">
      <h2 className="text-base">{title}</h2>
      <p className="ct-color text-xs">
        <a
          href={url}
          className="hover:underline underline-offset-2 hover:text-blue-600 transition-colors duration-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          {host}
        </a>
      </p>
    </li>
  );
}

export default function Bookmarks() {
  return (
    <div className="w-full">
      <div className="font-medium mb-12">
        <h1 className="mb-2 text-base">Bookmarks</h1>
        <p className="text-xs">Archive for my bookmarked links and things.</p>
      </div>

      <ul aria-label="Bookmarks">
        {bookmarks.map((b) => (
          <BookmarkItem key={b.url} {...b} />
        ))}
      </ul>
    </div>
  );
}
