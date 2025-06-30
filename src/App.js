import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import "./App.css";

function HeaderContent() {
  const location = useLocation();
  const tooltipText = location.pathname === "/" ? "about" : "home";
  
  return (
    <div className="name">
      <Link 
        to={location.pathname === "/" ? "/about" : "/"} 
        className="home-link"
        data-tooltip={tooltipText}
      >
        <h1>furkan titiz</h1>
      </Link>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <header className="header">
          <HeaderContent />
        </header>
        
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;