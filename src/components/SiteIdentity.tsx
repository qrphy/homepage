import Image from "next/image";
import Link from "next/link";

export default function SiteIdentity() {
  return (
    <nav className="article-back" aria-label="Back to homepage">
      <Link href="/"><Image src="/profile.jpg" alt="" width={28} height={28} />Furkan Titiz</Link>
    </nav>
  );
}
