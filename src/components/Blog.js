import React from "react";
import {Link}from "react-router-dom";
import "../styles/Blog.css"

const Blog = (props) => (
  <div className="blog">
    <nav className="blog-nav"> 
      <Link to="/blog"> 
        <h2>Stuff I Write</h2>
      </Link>
      <Link to="/"> 
        <img src="assets/home.png" alt="go home"/>
      </Link>
    </nav>
    <ul className="blog-list">
      <Link to="/blog/critical-review"> 
        <div className ="blogpost-area">
          <span className="date">Nov 17. 2020</span>
          <h1 className="title">Critically Reviewing an Article That’s Just a Critical Review of Interviews, Which Are Really Just Critical Reviews of People</h1>
          <span className="length"><i>Length: ~3min</i></span>
        </div>
      </Link>
      <Link to="/blog/making-websites"> 
        <div className ="blogpost-area">
          <span className="date">Oct 29. 2020</span>
          <h1 className="title">Building Websites for Beginners: By a Beginner</h1>
          <span className="length"><i>Length: ~2min</i></span>
        </div>
      </Link>
    </ul>
  </div>
);
export default Blog;