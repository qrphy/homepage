import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="w-full h-[12rem] mt-10 flex items-center">
      <div className="flex items-center justify-between w-full">
        <div>
          <Link href="/">
          <p className="text-[<2em>] font-bold">
            Furkan Titiz
          </p>
          </Link>
          <p className="text-sm font-normal ct-color">Frontend Developer</p>
        </div>
        </div>
        { /* 
        <div className="flex gap-5 text-sm font-medium items-right mt-6">
          <Link href="/">
          <p>Projects</p>
          </Link>
          <Link href="/">
          <p>Connect</p>
          </Link>
          <Link href="/bookmarks">
          <p>Bookmarks</p>
          </Link>
        </div> */}
    </header>
  );
};

export default Header;
