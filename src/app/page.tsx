import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="w-full mx-auto font-normal text-base flex flex-col gap-4">
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
