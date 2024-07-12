import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Coding from "./Coding";
import Urbanism from "./Urbanism";
import MCSS from "./MCSS";
import Videos from "./Videos";
import Other from "./Other";
import "../styles/MainPage.css"
import Sidebar from "./Sidebar";
import Footer from "./Footer"

const MainPage = (props) => {
  return  <div className="main-page">
      <Navbar/>
      <Sidebar/>
      <Hero />
      <div className="main-body">
        <div className="spacer"/>
        <div className="main-content">
          <About/>
          <Coding />
          <MCSS/>
          <Videos />
          <Urbanism />
          <Other />
          <Footer/>
        </div>
        <div className="spacer"/>

      </div>
    </div>;
    }

export default MainPage;