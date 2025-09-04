export type Bookmark = {
  title: string;
  url: string;
  host: string;
};

export const linkBookmarks: Bookmark[] = [
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

export type BookBookmark = {
  title: string;
  author: string;
};

export const bookBookmarks: BookBookmark[] = [
  { title: "Simulacra and Simulation", author: "Jean Baudrillard" },
  { title: "Out Of Control", author: "Kevin Kelly" },
  { title: "21 Lessons for 21st Century", author: "Yuval Naah Harrari" },
];
