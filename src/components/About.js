import React from "react";
import "../styles/About.css";

const About = (props) => (
  <div className="about-section" id="about-section">
    <h1>About Me</h1>
    <span>This is real, this is me, I'm exa-</span>
    <div className="about-info" >
      <div className="image-area">
        <img src="assets/about.jpg" alt="yeet" />
      </div>
      <p>
        Hey, thanks for stopping by! My name's Ethan, I'm a  computer science student at the University of Toronto.
        I'm currently working at Wish as a Software Engineer Intern. Previously, I was the marketing director for the Mathematics and Computational
        Society at UTM, the head teaching assistant for CSC301, and a Software Development Intern at HSBC! If you're reading this because we met at TechCrunch, 
        hi, how's it going, hope you're having a wonderful day and glad you're checking me out!
        <br /> <br />
        I'm interested in music, rock climbing, kayaking, and solving problems with code.
        If you wanna talk to me about any of that, send me a message!
        <br />
        <br />
        You can check out my résumé below, and scroll down to see all my projects:
      </p>
      <div className="self-contact-info">
        <a href="https://www.instagram.com/joshuajudewuebbolt/" className="class-a" target="_blank" rel="noopener noreferrer">
          <img src="assets/instagram.png" alt="follow me" />
        </a>
        <br />
        <a href="https://github.com/JoshuaWuebbolt" className="class-b" target="_blank" rel="noopener noreferrer">
          <img src="assets/twitter.png" alt="follow me" />
        </a>
        <br />
        <a href="https://www.youtube.com/channel/UCSsuc-_8laUQrkabS1iIrXQ?view_as=subscriber" className="class-c" target="_blank" rel="noopener noreferrer">
          <img src="assets/youtube.png" alt="subscribe!" />
        </a>
        <br />
        <a href="https://www.linkedin.com/in/joshua-wuebbolt-b5625a314/" className="class-d" target="_blank" rel="noopener noreferrer">
          <img src="assets/linkedin.png" alt="please give me a job" />
        </a>
      </div>
    </div>
    <div className="resume-area">
      <div className="invisible-spacer" />
      <a href="Joshua_Wuebbolt_resume.pdf" target="_blank" rel="noopener noreferrer">
        <button type="button">Résumé</button>
      </a>
    </div>
  </div>
);
export default About;