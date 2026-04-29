import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <div className="w-full mb-12 flex justify-between items-start">
      <div>
        <p className="text-base font-medium">Furkan Titiz</p>
        <p className="ct-color text-sm mt-0.5">Frontend Developer</p>
      </div>
      <ThemeToggle />
    </div>
  );
}
