import React, {useState} from "react";
import "../styles/Sidebar.css";
import {Link, animateScroll} from "react-scroll"
import {Link as Direct} from "react-router-dom"

function Sidebar(props) {
    const [xPosition, setX] = useState(100);
    function triggerSidebar() {
        setX(xPosition === 100 ? 0:100);
    }
    return <div className="sidebar">
        <button onClick={triggerSidebar}> 
                <img src="assets/menu.png" alt="menu"/>
        </button>
        <div className="menu" 
        style={{transform: `translatex(${xPosition}vw)`}}> 
            <Link to={"about-section"} smooth={true} duration={1000} offset={-50} onClick={triggerSidebar}>About</Link>
            <Link to={"coding-section"} smooth={true} duration={1000} offset={-50} onClick={triggerSidebar}>Coding</Link>
            <Link to={"music-section"} smooth={true} duration={1000} offset={-50} onClick={triggerSidebar}>Music</Link>
            <Link to={"video-section"} smooth={true} duration={1000} offset={-50} onClick={triggerSidebar}>Videos</Link>
            <Link to={"other-section"} smooth={true} duration={1000} offset={-50} onClick={triggerSidebar}>Other</Link>
            <Direct to="/blog">Blog</Direct>
        </div>
    </div>
}

export default Sidebar;