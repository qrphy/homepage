import React from "react";

function Projects() {
  return (
    <div className="projects-page">
      <h2>My Projects</h2>

      <div className="project">
        <h3>Personal Web Site</h3>
        <p>
          A modern and responsive personal website built with React. I used
          React Router to handle page navigation and create a smooth user
          experience.
        </p>
        <p>
          <strong>Tecnologies</strong> React, JavaScript, CSS3, React Router
        </p>
      </div>
      <div className="project">
        <h3>Mersin Sanal</h3>
        <p>
          Sanal museum about Mersin.
        </p>
        <p>
          <strong>Tecnologies</strong> Next.js, JavaScript
        </p>
      </div>
    </div>
  );
}

export default Projects;
