const Header = () => {
  return (
    <header className="w-full pt-3">
      <div className="flex justify-between items-center text-lg font-medium text-sm">
        <div>
          <a href="/">Furkan Titiz</a>
          <p className="text-xs font-medium text-gray-400">
            Frontend Developer
          </p>
        </div>
        <div className="flex justify-between items-center gap-4">
          <a href="/projects">Projects</a>
          <a href="/bookmarks">Bookmarks</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
