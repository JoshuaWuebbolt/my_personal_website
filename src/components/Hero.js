import React from 'react';
import Typist from 'react-typist';
import "../styles/Hero.css"
import "../styles/Typist.css"

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
                <h1>
                    <Typist startDelay={3000} cursor={{hideWhenDone:true, hideWhenDoneDelay:3000}}>
                    code
                    <Typist.Backspace count={4} delay={1000}/>
                    music
                    <Typist.Backspace count={5} delay={1000} />
                    videos
                    <Typist.Backspace count={6} delay={1000} />
                    bad decisions :)
                    <Typist.Backspace count={16} delay={500} />
                    stuff.
                    </Typist>
                </h1>
            </div>
        </div>
    </div>
)
export default Hero;