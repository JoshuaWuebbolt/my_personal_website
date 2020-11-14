import React, {useState} from "react";
import "../styles/Sidebar.css";



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
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">About Me</a>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Coding</a>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Music</a>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Videos</a>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Other</a>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Blog</a>
        </div>
    </div>
}

export default Sidebar;