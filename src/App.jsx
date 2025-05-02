import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Background from "./components/Background";
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import About from "./pages/About";
import Experience from "./pages/Experience";

function App() {
  return (
    <Router>
      <Background />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>
    </Router>
  );
}

export default App;
