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
      <Link to="/blog/things-i-like"> 
        <div className ="blogpost-area">
          <span className="date">Mar 1st, 2022</span>
          <h1 className="title">(An Incomplete List Of) Things I Like</h1>
          <span className="length"><i>Length: ~10min</i></span>
          <br></br>
          <span>Ethan Lam</span>
        </div>
      </Link>
      <Link to="/blog/how-i-landed-a-six-figure"> 
        <div className ="blogpost-area">
          <span className="date">Jan 20. 2022</span>
          <h1 className="title">How I Landed a Six-Figure Internship Before My 21st Birthday</h1>
          <span className="length"><i>Length: ~26min</i></span>
          <br></br>
          <span>Ethan Lam</span>
        </div>
      </Link>
      <Link to="/blog/new-year-resolutions-2022"> 
        <div className ="blogpost-area">
          <span className="date">Dec 29. 2021</span>
          <h1 className="title">What I Did in 2021, and Goals for 2022</h1>
          <span className="length"><i>Length: ~9min</i></span>
          <br></br>
          <span>Ethan Lam</span>
        </div>
      </Link>
      <Link to="/blog/things-i-learned-from-my-online-semester"> 
        <div className ="blogpost-area">
          <span className="date">Dec 21. 2020</span>
          <h1 className="title">Things I Learned From My Online Semester During The End of The World</h1>
          <span className="length"><i>Length: ~4min</i></span>
          <br></br>
          <span>Ethan Lam</span>
        </div>
      </Link>
      {/* <Link to="/blog/critical-review"> 
        <div className ="blogpost-area">
          <span className="date">Nov 17. 2020</span>
          <h1 className="title">Critically Reviewing an Article That’s Just a Critical Review of Interviews, Which Are Really Just Critical Reviews of People</h1>
          <span className="length"><i>Length: ~3min</i></span>
        </div>
      </Link> */}
      
      {/* <Link to="/blog/making-websites"> 
        <div className ="blogpost-area">
          <span className="date">Oct 29. 2020</span>
          <h1 className="title">Building Websites for Beginners: By a Beginner</h1>
          <span className="length"><i>Length: ~2min</i></span>
        </div>
      </Link> */}
    </ul>
  </div>
);
export default Blog;