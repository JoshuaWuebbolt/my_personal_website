import React from 'react';
import '../styles/NavBar.css';
import {Link} from "react-router-dom"
const NavBar = props => (
    <nav className="nav-bar">
        <Link to="/"> Ethan Lam </Link>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">About Me</a>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Coding</a>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Music</a>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Videos</a>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Other</a>
        <Link to="/blog">Blog</Link>
    </nav>
)
export default NavBar;