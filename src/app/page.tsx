import About from "@/components/sections/About";
import Stack from "@/components/sections/Stack";
import GitHubActivity from "@/components/sections/GitHubActivity";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="w-full flex flex-col gap-10">
      <About />
      <Stack />
      <GitHubActivity />
      <Experience />
      <Contact />
    </main>
  );
}
