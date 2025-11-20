import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="w-full h-[16rem] flex items-center">
      <div className="flex items-center justify-between w-full">
        <div>
          <p className="text-lg font-medium">
            Furkan Titiz
          </p>
          <p className="text-base font-normal ct-color">Frontend Developer</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
