export default function Contact() {
  return (
    <div className="flex flex-col gap-2">
      <p className="ct-color text-sm font-medium">Contact</p>
      <p className="text-sm leading-relaxed">
        Open to junior frontend opportunities —{" "}
        <a href="mailto:furkan@furkantitiz.dev" className="mono-link">
          email
        </a>
        {" "}or{" "}
        <a
          href="https://www.linkedin.com/in/furkan-titiz/"
          target="_blank"
          rel="noopener noreferrer"
          className="mono-link"
        >
          LinkedIn
        </a>
        . Other projects on{" "}
        <a
          href="https://github.com/qrphy"
          target="_blank"
          rel="noopener noreferrer"
          className="mono-link"
        >
          GitHub
        </a>
        .
      </p>
    </div>
  );
}
