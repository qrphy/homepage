import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import "./App.css";


function App() {
  return (
    <Router>
      <div className="App">
        <header className="header">
          <div className="name">
              <h1>Furkan Titiz</h1>
          </div>
        </header>
        
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;