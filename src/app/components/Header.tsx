import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="w-full h-[12rem] flex items-center">
      <div className="flex justify-between items-center w-full">
        <div>
          <Link href="/" className="text-base font-medium">
            Furkan Titiz
          </Link>
          <p className="text-xs font-medium ct-color">Frontend Developer</p>
        </div>{" "}
        {/* 
        <Link href="/">
          <Image
            src="/me.JPG"
            alt="furkan titiz"
            width={46}
            height={46}
            className="rounded-full cursor-pointer hover:opacity-80 transition-opacity"
          />
        </Link>*/}
        <div className="flex gap-3">
          <p>Project</p>
          <p>Blog</p>
          <p>Bookmarks</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
