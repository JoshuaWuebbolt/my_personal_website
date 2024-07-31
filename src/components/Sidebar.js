import React, {useState} from "react";
import "../styles/Sidebar.css";
import {Link} from "react-scroll"
import {Link as Direct} from "react-router-dom"

function Sidebar(props) {
    const [xPosition, setX] = useState(100);
    const [scrollLock, setScrollLock] = useState("visible")
    function triggerSidebar() {
        setX(xPosition === 100 ? 0:100);
        setScrollLock(scrollLock === "visible"? "hidden":"visible")

    }
    function toggleLock() {
        document.body.style.overflow = "visible"
    }
    document.body.style.overflow = scrollLock
    return <div className="sidebar">
        <button className="sidebar-button" onClick={triggerSidebar}> 
                <img src="assets/menu.png" alt="menu"/>
        </button>
        <div className="menu" 
        style={{transform: `translatex(${xPosition}vw)`}}> 
            <Link to={"about-section"} smooth={true} duration={1000} offset={-50} onClick={triggerSidebar}>About</Link>
            <Link to={"coding-section"} smooth={true} duration={1000} offset={-50} onClick={triggerSidebar}>Coding</Link>
            <Link to={"urbanism-section"} smooth={true} duration={1000} offset={-50} onClick={triggerSidebar}>Urbanism</Link>
            <Link to={"MCSS-section"} smooth={true} duration={1000} offset={-50} onClick={triggerSidebar}>MCSS</Link>
            <Link to={"FunFacts-section"} smooth={true} duration={1000} offset={-50} onClick={triggerSidebar}>Fun Fact</Link>

            <Direct onClick={toggleLock} to="/blog" >Blog</Direct>
            <div className="spacer"> </div>
        </div>
    </div>
}

export default Sidebar;