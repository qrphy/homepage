import React from 'react';

function About() {
  return (
    <div className="about-page">
      
      <div className="about-content">
        <div className="about-image">
          <img src="/me.JPG" alt="Young Knight by Vittore Carpaccio 1510" className="portrait-img" />
        </div>
        <div className="about-text">
            <h2>About Me</h2>
          <p>
            Hello! I'm Furkan, a Computer Programming graduate working in frontend development. I love creating user-friendly web applications. 
          </p>

          <h2>My Skills</h2>
          <h3>Frontend Technologies</h3>
          <p>
            React.js, JavaScript, HTML5, CSS3, Tailwind CSS
          </p>

          <h3>Tools & Others</h3>
          <p>
            Git, GitHub, VSCode, npm, Responsive Design
          </p>

          <h3>Contact</h3>
          <p>
            <a href="mailto:furkantitiz96@gmail.com">Mail</a> & <a href="https://www.linkedin.com/in/furkan-titiz/">LinkedIn</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;