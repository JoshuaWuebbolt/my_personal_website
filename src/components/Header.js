import React from "react";
import Typist from 'react-typist';
import "../styles/Header.css";

const header = props => (
  <div className="toolBar">
    <header>
      <Typist
        className="text"
        avgTypingDelay={40}
        stdTypingDelay={30}
        startDelay={400}
        cursor={{ hideWhenDone: true }}

      >
        <span>hi.</span>
        <Typist.Delay ms={400} />
        <span> my name's </span>
        <span className="name">ethan</span>
        <Typist.Delay ms={400} />
        <span>, and i make programs.</span>
        <Typist.Backspace count={10} delay={1000} />
        <span> music.</span>
        <Typist.Backspace count={6} delay={1000} />
        <span>videos.</span>
        <Typist.Backspace count={7} delay={1000} />
        <span>bad decisions, sometimes.</span>
        <Typist.Backspace count={25} delay={300} />
        <span>stuff :)</span>
      </Typist>
    </header>
  </div>
);
export default header;