import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="name">
          <h1>furkan titiz</h1>
        </div>
        <nav className="nav-links">
          <a href="#about">about</a>
          <a href="#projects">projects</a>
        </nav>
      </header>
      
      <main className="main-content">
        <p>
          I’m currently working on frontend projects and sharing them on<a href='https://github.com/qrphy' target='_blank'> GitHub</a>.</p>
          <p>
          Feel free to check them out and reach out for <a href="mailto:furkantitiz96@gmail.com">collaboration</a>.</p>
          <p>
          Outside of coding, I enjoy watching F1 races, tennis matches, and listening to music.
        </p>
      </main>
    </div>
  );
}

export default App;