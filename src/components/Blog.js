import React from "react";
import {Link}from "react-router-dom";
import "../styles/Blog.css"

const Blog = (props) => (
  <div className="blog">
    <nav className="blog-nav"> 
      <h2>Stuff I Write</h2>
      <Link to="/"> 
        <img src="assets/home.png" alt="go home"/>
      </Link>
    </nav>
    <ul className="blog-list">
      <Link to="/blog/making-websites"> 
        <div className ="blogpost-area">
          <span className="date">Oct 29. 2020</span>
          <h1 className="title">Building Websites for Beginners: By a Beginner</h1>
          <span className="length"><i>Length: ~2min</i></span>
          <p> hello</p>
        </div>
      </Link>
      <Link to="/blog/making-websites"> 
        <div className ="blogpost-area">
          <span className="date">Oct 29. 2020</span>
          <h1 className="title">Building Websites for Beginners: By a Beginner</h1>
          <span className="length"><i>Length: ~2min</i></span>
          <p> hello</p>
        </div>
      </Link>
    </ul>
  </div>
);
export default Blog;