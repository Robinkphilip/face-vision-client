import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import Auth from "./components/Auth/Auth";
import Home from "./components/Home/Home";
import ParticlesBackground from "./components/Particles/particlesBackground";

export default function App() {

  return (
    <div className="app">
      <ParticlesBackground />
      <Router>
        <Routes>
          <Route path="/auth" element={<Auth/>} />
           <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}
