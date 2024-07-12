import React from 'react';
import '../styles/NavBar.css';
import {Link as Direct} from "react-router-dom"
import {Link, animateScroll} from "react-scroll"

function NavBar(props) {
    const scrollToTop = () => {
      animateScroll.scrollToTop();
    };
    

    return <nav className="nav-bar" >
      
            <button className="home" onClick={scrollToTop}><h2>Joshua Wuebbolt</h2></button>
            <div className="mobile"></div>
            
            <Link to={"about-section"} smooth={true} duration={1000} offset={-50} className="desktop">About</Link>
            <Link to={"coding-section"} smooth={true} duration={1000} offset={-50} className="desktop">Coding</Link>
            <Link to={"MCSS-section"} smooth={true} duration={1000} offset={-50} className="desktop">MCSS</Link>
            <Link to={"urbanism-section"} smooth={true} duration={1000} offset={-50} className="desktop">Urbanism</Link>
            <Link to={"other-section"} smooth={true} duration={1000} offset={-50} className="desktop">Other</Link>
            <Direct to="/blog" className="desktop">Blog</Direct>

            
    </nav>

}

export default NavBar;