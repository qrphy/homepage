import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mt-auto py-8">
      <div className="flex justify-end">
        <Image
            src="/IMG_9550.jpg"
            alt="furkan titiz"
            width={50}
            height={50}
          />
      </div>
    </footer>
  );
}
