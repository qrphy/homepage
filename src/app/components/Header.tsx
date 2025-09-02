import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="w-full h-[12rem] flex items-center">
      <div className="flex justify-between items-center w-full">
        {/*<div>
          <Link href="/" className="text-base font-medium">
            Furkan Titiz
          </Link>
          <p className="text-xs font-medium ct-color">Frontend Developer</p>
        </div>{" "}*/}
        <Link href="/">
          <Image
            src="/IMG_9550.JPG"
            alt="furkan titiz"
            width={48}
            height={48}
            className="rounded-full cursor-pointer hover:opacity-80 transition-opacity"
          />
        </Link>
        <div className="flex gap-3">
          <a href="/project">Project</a>
          <a href="/blog">Blog</a>
          <a href="/filmler">Bookmarks</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
