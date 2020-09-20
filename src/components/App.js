import React from 'react';
import '../styles/App.css';

import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";

function App() {
  return (
    <div className="app">
      <Navbar/>
      <Hero/>
      <About/>
      <h1> Code</h1>
      <h1>Code</h1>
    </div>
  );
}

export default App;
