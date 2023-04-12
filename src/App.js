import React from "react";
import { Routes, Route } from "react-router-dom";

import './App.css';
import About from "./Components/About";
import Projects from "./Components/Projects";
import Api from "./Components/Api";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="api" element={<Api />} />
      </Routes>
    </div>
  );
}
export default App;
