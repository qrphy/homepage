import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="fixed bottom-10 left-1/2 -translate-x-1/2 pt-1 pb-1 bg-black text-sm rounded-4xl -translate-y-14 max-w-sm mx-auto px-4 shadow-lg shadow-gray-900/60 text-white underline-offset-3 md:pt-2 md:pb-2 md:text-md md:max-w-md">
      <div className="flex justify-around items-center gap-4 md:gap-6">
        <Link href="/" target="_self" rel="noopener noreferrer">
          <p className="hover:underline">Home</p>
        </Link>
        <Link href="https://github.com/qrphy" target="_blank" rel="noopener noreferrer">
          <p className="hover:underline">Projects</p>
        </Link>
        <Link href="/bookmarks" target="_self" rel="noopener noreferrer">
          <p className="hover:underline">Bookmarks</p>
        </Link>
        <Link href="https://www.linkedin.com/in/furkan-titiz/" target="_blank" rel="noopener noreferrer">
          <p className="hover:underline">Contact</p>
        </Link>
        <Link href="https://www.x.com/qrphy" target="_blank" rel="noopener noreferrer">
        <Image className="rounded-full cursor-pointer hover:brightness-90 transition-opacity w-8 h-8 md:w-10 md:h-10"
            src="/me.JPG"
            alt="furkan titiz"
            width={40}
            height={40}
          />
</Link>
      </div>
    </footer>
  );
}