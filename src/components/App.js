import React from 'react';
import '../styles/App.css';

import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Coding from "./Coding";
import Music from "./Music";
import Other from "./Other";

function App() {
  return (
    <div className="app">
      <Navbar/>
      <Hero/>
      <About/>
      <Coding/>
      <Music/>
      <Other/>
    </div>
  );
}

export default App;
