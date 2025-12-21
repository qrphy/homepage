import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="w-full h-[12rem] flex items-center">
      <div className="flex items-center justify-between w-full">
        <div>
          <Link href="/">
          <p className="text-base font-medium">
            Furkan Titiz
          </p>
          </Link>
          <p className="text-sm font-normal ct-color">Frontend Developer</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
