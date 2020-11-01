import React from 'react';
import '../styles/NavBar.css';
import {Link} from "react-router-dom"

function NavBar(props) {
    return <nav className="nav-bar">
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="home">Ethan Lam</a>
            <div className="mobile"></div>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="desktop">About Me </a>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="desktop">Coding</a>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="desktop">Music</a>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="desktop">Videos</a>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="desktop">Other</a>
            <Link to="/blog">Blog</Link>
    </nav>

}

export default NavBar;