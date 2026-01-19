import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="w-full h-[7rem] mt-[51px] flex items-center">
      <div className="flex items-center justify-between w-full">
        <div>
          <Link href="/">
            <p className="text-dark">Furkan Titiz</p>
          </Link>
          <p className="ct-color mt-1 text-sm">Frontend Developer</p>
        </div>
      </div>
      {/*
        <div className="flex gap-5 text-sm font-medium items-right mt-6">
          <Link href="/">
          <p>projects</p>
          </Link>
          <Link href="/">
          <p>connect</p>
          </Link>
          <Link href="/bookmarks">
          <p>bookmarks</p>
          </Link>
        </div>
        */}
    </header>
  );
};

export default Header;
