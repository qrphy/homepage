import Image from "next/image";

export default function Home() {
  return (
    <div className="text-white h-[100vh] bg-black">
      <div className="flex flex-col items-center justify-center h-full">
        <Image
          src="/YoungKnight.jpg"
          style={{
            width: "300px",
            borderRadius: "15px",
            boxShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
            filter: "grayscale(40%)",
          }}
          alt="Young Knight"
        />
        <p className="fixed whitespace-nowrap text-xl pointer-events-none justify-center items-center flex w-full h-full">
          // rebuilding in progress...
        </p>
      </div>
    </div>
  );

  /*
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <p className="hover:underline">coming soon...</p>
      </main>
    </div> */
}
