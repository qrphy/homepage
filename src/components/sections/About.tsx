import Projects from "../sections/Projects";
import Contact from "../sections/Contact";
export default function About() {
  return (
    <>
    <div className="w-full font-normal text-md">
      <section className="w-full flex flex-col gap-4">
        <p>
        I focus on clean UI, performance-oriented frontend architecture, and
        real-world case studies.
      </p>
      <section><Projects /></section>
      <section><Contact /></section>
      </section>
      </div>
    </>
  );
}
