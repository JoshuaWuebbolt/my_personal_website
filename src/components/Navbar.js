import React from 'react';
import '../styles/NavBar.css';
import {Link} from "react-router-dom"
import {Link as scrollLink, animateScroll as scroll} from "react-scroll"

function NavBar(props) {
    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    return <nav className="nav-bar">
            <button className="home" onClick={scrollToTop}><h2>Ethan Lam</h2></button>
            <div className="mobile"></div>
            <scrollLink
                className="nav-item"
                activeClass="active"
                to="about-section"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                About
              </scrollLink>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="desktop">Coding</a>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="desktop">Music</a>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="desktop">Videos</a>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="desktop">Other</a>
            <Link to="/blog" className="desktop">Blog</Link>
    </nav>

}

export default NavBar;