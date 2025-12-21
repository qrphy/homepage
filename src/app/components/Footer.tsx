import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto pt-2 pb-20">
      <div className="flex justify-end">
        <Link href="/bookmarks" target="_self" rel="noopener noreferrer">
        <Image className="rounded cursor-pointer hover:opacity-80 transition-opacity"
            src="/IMG_9550.jpg"
            alt="furkan titiz"
            width={50}
            height={50}
          />
</Link>
      </div>
    </footer>
  );
}