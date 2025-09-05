import { Bookmark, linkBookmarks, bookBookmarks, BookBookmark } from "./data";

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

function BookItem({ title, author }: BookBookmark) {
  return (
    <li className="mb-6">
      <h2 className="text-base">{title}</h2>
      <p className="ct-color text-xs">{author}</p>
    </li>
  );
}

export default function Bookmarks() {
  return (
    <div className="w-full">
      <div className="text-base font-medium mb-14">
        <h1 className="mb-2">Bookmarks</h1>
        <p className="ct-color font-normal">
          Archive for my bookmarked links and things.
        </p>
      </div>

      <section className="mb-10">
        <h2 className="text-lg font-medium mb-4">Links</h2>
        <ul aria-label="Links">
          {linkBookmarks.map((b) => (
            <BookmarkItem key={b.url} {...b} />
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-lg font-medium mb-4">Books</h2>
        <ul aria-label="Books">
          {bookBookmarks.length === 0 ? (
            <li className="ct-color text-sm">Nothing to see here.</li>
          ) : (
            bookBookmarks.map((b) => (
              <BookItem key={`${b.title}-${b.author}`} {...b} />
            ))
          )}
        </ul>
      </section>
    </div>
  );
}
