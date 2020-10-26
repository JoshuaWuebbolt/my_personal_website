import React from 'react';
import '../styles/NavBar.css';


function NavBar(props) {
    return <nav className="nav-bar">
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Ethan Lam</a>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="desktop">About Me </a>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="desktop">Coding</a>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="desktop">Music</a>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="desktop">Videos</a>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="desktop">Other</a>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="desktop">Blog</a>

    </nav>
}

export default NavBar;