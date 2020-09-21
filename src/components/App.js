import React from 'react';
import '../styles/App.css';

import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Coding from "./Coding";
import Music from "./Music";
import Videos from "./Videos";
import Other from "./Other";

function App() {
  return (
    <div className="app">
      <Navbar/>
      <Hero/>
      <About/>
      <Coding/>
      <Music/>
      <Videos/>
      <Other/>
    </div>
  );
}

export default App;
