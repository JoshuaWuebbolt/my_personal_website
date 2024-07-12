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
                    <h1>Hi. My name's Joshua,</h1>
            </div>
            <div className="text-line">
                <div className="spacer" />
                    <h1>and I am a</h1>
            </div>
            <div className="text-line">
                <div className="spacer" />
                <h1>
                    <Typist startDelay={2000} cursor={{hideWhenDone:true, hideWhenDoneDelay:3000}}>
                    programmer
                    <Typist.Backspace count={10} delay={1000}/>
                    urbanist
                    <Typist.Backspace count={8} delay={1000} />
                    student
                    <Typist.Backspace count={11} delay={1000} />
                    cool guy :)
                    <Typist.Backspace count={11} delay={1000} />
                    full stack developer
                    </Typist>
                </h1>
            </div>
        </div>
    </div>
)
export default Hero;