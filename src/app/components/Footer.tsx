import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto pt-2 pb-2 bg-black text-md rounded-4xl -translate-y-14 max-w-md mx-auto px-4 shadow-lg shadow-gray-900/60 dark:shadow-white/40 dark:bg-gray-200 dark:text-black dark:hover:text-ct-color transition-colors text-white underline-offset-3">
      <div className="flex justify-around items-center gap-6">
        <Link href="/" target="_self" rel="noopener noreferrer">
          <p className="hover:underline">home</p>
        </Link>
        <Link href="https://github.com/qrphy" target="_blank" rel="noopener noreferrer">
          <p className="hover:underline">projects</p>
        </Link>
        <Link href="/bookmarks" target="_self" rel="noopener noreferrer">
          <p className="hover:underline">bookmarks</p>
        </Link>
        <Link href="https://www.linkedin.com/in/furkan-titiz/" target="_blank" rel="noopener noreferrer">
          <p className="hover:underline">contact</p>
        </Link>
        <Link href="https://www.x.com/qrphy" target="_blank" rel="noopener noreferrer">
        <Image className="rounded-full   cursor-pointer hover:brightness-90 transition-opacity"
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