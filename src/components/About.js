import React from "react";
import "../styles/About.css";

const About = (props) => (
  <div className="about-section" id="about-section">
    <h1>About Me</h1>
    <span>I can't wait to change the world!</span>
    <div className="about-info" >
      <div className="image-area">
        <img src="assets/about.jpg" alt="yeet" />
      </div>
      <p>
        Hey, hows it going? My name is Joshua and I'm a student at UofT (University of Toronto). I'm studying Computer Science and have a passion for creating program to fix problems and have fun! From streaming services to videogames I make it all.
        <br /> <br />
        I'm also very big into Urbanism and actually created an anvocacy group for it. If you wanna talk about walkable cites, public transport or even just the latest Not Just Bikes video I'm all ears.
        <br />
        <br />
        You can check out my résumé below, and scroll down to learn all about me!
      </p>
      <div className="self-contact-info">
        <a href="https://www.instagram.com/joshuajudewuebbolt/" className="class-a" target="_blank" rel="noopener noreferrer">
          <img src="assets/instagram.png" alt="Follow me!" />
        </a>
        <br />
        <a href="https://github.com/JoshuaWuebbolt" className="class-b" target="_blank" rel="noopener noreferrer">
          <img src="assets/github.png" alt="View my projects!" />
        </a>
        <br />
        <a href="mailto:joshua.wuebbolt@mail.utoronto.ca" className="class-c" target="_blank" rel="noopener noreferrer">
          <img src="assets/email.png" alt="Contact me!" />
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