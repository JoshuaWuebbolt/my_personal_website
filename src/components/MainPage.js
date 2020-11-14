import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Coding from "./Coding";
import Music from "./Music";
import Videos from "./Videos";
import Other from "./Other";
import "../styles/MainPage.css"
import Sidebar from "./Sidebar";

const MainPage = (props) => {
  return  <div className="main-page">
      <Navbar/>
      <Sidebar/>
      <Hero />
      <About/>
      <Coding />
      <Music />
      <Videos />
      <Other /> 
    </div>;
    }

export default MainPage;