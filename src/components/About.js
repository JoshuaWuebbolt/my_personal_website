import React from "react";
import "../styles/About.css";
import {Link} from "react-router-dom";

const About = (props) => (
  <div className="about-section">
    <h1>About Me</h1>
    <span>This is real, this is me, I'm exa-</span>
    <div className="about-info">
      <div className="image-area">
        <img src="placeholder-image.png" alt="yeet" />
      </div>
      <p>
        I'm currently a second year student at the University of Toronto,
        specializing in Computer Science, and (hopefully) minoring in psych and
        philosophy.
        <br /> <br />
        I'm interested in music, rock climbing, kayaking, and front-end
        development. If you wanna talk to me about any of that, send me a
        message!
        <br />
        <br />
        I'm currently seeking employment, you can check out my résumé below:
      </p>
      <div className="contact-info">
        <a href="https://www.instagram.com/ethannomiddlenamelam/">
          <img src="instagram.png" alt="follow me" />
        </a>
        <br />
        <a href="https://twitter.com/ethannmnlam">
          <img src="twitter.png" alt="follow me" />
        </a>
        <br />
        <a href="https://www.youtube.com/channel/UCSsuc-_8laUQrkabS1iIrXQ?view_as=subscriber">
          <img src="youtube.png" alt="subscribe!" />
        </a>
        <br />
        <a href="https://www.linkedin.com/in/ethan-lam-b19529193/">
          <img src="linkedin.png" alt="please give me a job" />
        </a>
        <br />
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
          <img src="email.png" alt="send me an email!" />
        </a>
      </div>
    </div>
    <div className="resume-area">
      <div className="invisible-spacer" />
      <a href="ethan-technical-resume.pdf">
        <button type="button">Résumé</button>
      </a>
    </div>
  </div>
);
export default About;