import React from "react";

function Home() {
  return (
    <>
      <p>
        I'm currently working on frontend projects and sharing them on
        <a
          href="https://github.com/qrphy"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          GitHub
        </a>
        .
      </p>
      <p>
        Feel free to check them out and reach out for{" "}
        <a href="mailto:furkantitiz96@gmail.com">collaboration</a>.
      </p>
      <br />
      <p>
        Outside of coding, I enjoy watching F1 races, tennis matches, and
        listening to music.
      </p>
      <h4>Contact</h4>
      <p>
        You can reach me via email at{" "}
        <a href="mailto:furkantitiz96@gmail.com">furkantitiz96@gmail.com</a>,
        or catch me on{" "}
        <a href="https://www.linkedin.com/in/furkan-titiz/">LinkedIn</a>.
      </p>
      
      <div className="home-image">
          <img src="/youngknight.jpg" alt="Young Knight by Vittore Carpaccio 1510" className="portrait-img" />
        <p>Young Knight by Vittore Carpaccio 1510</p>
      </div>
    </>
  );
}

export default Home;
