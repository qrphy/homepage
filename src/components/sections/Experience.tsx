export default function Experience() {
  return (
    <div className="flex flex-col gap-2">
      <p className="ct-color text-sm font-medium">Experience</p>
      <div className="flex flex-col gap-1.5">
        <p className="text-sm">
          <a
            href="https://stylefinden.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mono-link"
          >
            STYLEFINDEN
          </a>
          {" "}Co-Founder & Frontend Developer
        </p>
        <p className="ct-color text-sm leading-relaxed">
          Fashion content platform built with Next.js. Responsible for full technical architecture,
          UI development and monetization integration (Google AdSense, affiliate
          links).
        </p>
        <p className="ct-color text-sm">April 2026 to Present</p>
      </div>
    </div>
  );
}
