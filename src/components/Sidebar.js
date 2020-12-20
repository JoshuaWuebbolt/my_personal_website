import React, {useState} from "react";
import "../styles/Sidebar.css";
import {Link} from "react-scroll"
import {Link as Direct} from "react-router-dom"

function Sidebar(props) {
    const [xPosition, setX] = useState(100);
    const [scrollLock, setScrollLock] = useState("")
    function triggerSidebar() {
        setX(xPosition === 100 ? 0:100);
        setScrollLock(xPosition === 100? "hidden":"")
    }
    document.body.style.overflow = scrollLock
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
            <div className="spacer"> </div>
        </div>
    </div>
}

export default Sidebar;