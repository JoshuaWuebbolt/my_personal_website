import React from 'react';
import Typist from 'react-typist';
import "../styles/Hero.css"

const Hero = props => (
    <div className="hero-area">
        <div className="hero-image"/>
        <div className="hero-box">
            <div className="text-line">
                <div className="spacer"/>
                    <h1>Hi. My name's Ethan,</h1>
            </div>
            <div className="text-line">
                <div className="spacer" />
                    <h1>and I make</h1>
            </div>
            <div className="text-line">
                <div className="spacer" />
                <Typist startDelay={1500}>
                    <h1>code
                    <Typist.Backspace count={4} delay={1000}/>
                    music
                    <Typist.Backspace count={5} delay={700} />
                    videos
                    <Typist.Backspace count={6} delay={700} />
                    bad decisions (sometimes)
                    <Typist.Backspace count={25} delay={500} />
                    stuff.
                    </h1>
                </Typist>
            </div>
        </div>
    </div>
)
export default Hero;