import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full pt-3">
      <div className="flex justify-between items-center text-lg font-medium text-sm">
        <div>
          <Link href="/">Furkan Titiz</Link>
          <p className="text-xs font-medium text-gray-400">
            Frontend Developer
          </p>
        </div>
        <div className="flex justify-between items-center gap-4">
          <Link href="/projects">Projects</Link>
          <Link href="/bookmarks">Bookmarks</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
