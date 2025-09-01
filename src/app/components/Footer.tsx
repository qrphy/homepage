export default function Footer() {
  return (
    <footer className="mt-auto py-8 text-center text-base text-gray-600 dark:text-gray-400">
      <div className="flex justify-between items-center w-full">
        <a
          href="/filmler"
          className="hover:underline hover:text-blue-600 underline-offset-2"
        >
          Bookmarks
        </a>
        <p>&copy; 2025</p>
      </div>
    </footer>
  );
}
