import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="header">
          <div className="name">
            <Link to="/" className="home-link">
              <h1>furkan titiz</h1>
            </Link>
          </div>
          <nav className="nav-links">
            <Link to="/about">about</Link>
            <Link to="/projects">projects</Link>
          </nav>
        </header>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
