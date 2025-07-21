import { Helmet } from 'react-helmet';

export default function SEO() {
  return (
    <Helmet>
      <title>Furkan Titiz</title>
      <meta name="title" content="Furkan Titiz - Frontend Developer" />
      <meta
        name="description"
        content="Furkan Titiz, 21 years old graduated Frontend Developer."
      />
      <meta
        name="keywords"
        content="frontend developer, web developer, react developer, javascript, html, css, web tasarım, furkan titiz"
      />
      <meta name="author" content="Furkan Titiz" />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <link rel="canonical" href="https://furkantitiz.dev/" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://furkantitiz.dev/" />
      <meta property="og:title" content="Furkan Titiz" />
      <meta
        property="og:description"
        content="Furkan Titiz, 21 years old graduated Frontend Developer."
      />
      <meta
        property="og:image"
        content="https://furkantitiz.dev/YoungKnight.jpg"
      />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta
        property="og:image:alt"
        content="Furkan Titiz - Frontend Developer"
      />
      <meta property="og:site_name" content="Furkan Titiz Portfolio" />
      <meta property="og:locale" content="tr_TR" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://furkantitiz.dev/" />
      <meta
        property="twitter:title"
        content="Furkan Titiz - Frontend Developer"
      />
      <meta
        property="twitter:description"
        content="Furkan Titiz, 21 years old graduated Frontend Developer."
      />
      <meta
        property="twitter:image"
        content="https://furkantitiz.dev/YoungKnight.jpg"
      />
      <meta
        property="twitter:image:alt"
        content="Furkan Titiz - Frontend Developer"
      />

      {/* Schema.org JSON-LD */}
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Furkan Titiz",
            "url": "https://furkantitiz.dev",
            "jobTitle": "Frontend Developer",
            "description": "21 years old graduated Frontend Developer",
            "image": "https://furkantitiz.dev/YoungKnight.jpg",
            "sameAs": [
              "https://www.linkedin.com/in/furkan-titiz/",
              "https://github.com/qrphy"
            ],
            "knowsAbout": [
              "React",
              "JavaScript",
              "HTML",
              "CSS",
              "Frontend Development",
              "Web Development"
            ],
            "worksFor": {
              "@type": "Organization",
              "name": "Freelance"
            }
          }
        `}
      </script>
    </Helmet>
  );
}