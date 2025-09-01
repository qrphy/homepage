export default function Footer() {
  return (
    <footer className="mt-auto py-8 text-center text-base text-gray-600 dark:text-gray-400">
      <div className="flex justify-between items-center gap-4 px-4">
        <a
          href="/filmler"
          className="hover:underline hover:text-blue-600 underline-offset-2 transition-colors duration-200"
          aria-label="Go to bookmarks page"
        >
          Bookmarks
        </a>
        <p>&copy; 2025</p>
      </div>
    </footer>
  );
}
