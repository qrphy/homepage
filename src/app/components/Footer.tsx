export default function Footer() {
  return (
    <footer className="mt-auto py-8 text-center text-base ct-color">
      <div className="flex justify-between items-center">
        <div className="flex justify-between items-center gap-4 text-base font-normal">
          <a
            href="/bookmarks"
            className="hover:underline hover:text-blue-600 underline-offset-2 transition-colors duration-200"
            aria-label="Go to bookmarks page"
          >
            Bookmarks
          </a>
          <a
            href="/bookmarks#films"
            className="hover:underline hover:text-blue-600 underline-offset-2 transition-colors duration-200"
          >
            Films
          </a>
        </div>
        <p>&copy; 2025</p>
      </div>
    </footer>
  );
}
