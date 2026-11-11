import React from "react";
import "../styles/FunFacts.css"

const facts = [
    "I held a world record for 2 weeks",
    "I can make an Ethernet cable from scratch; the longest one I made was 60 metres (about 200ft)",
    "I have completed The Legend of Zelda: Ocarina of Time",
    "I absolutely hate Kingdom Hearts",
    "I can hold my breath for 2 minutes 46 seconds",
    "I am minoring in Game Studies",
    "EmberHacks was the first Hackathon I ever won",
];

// The list is rendered twice and the track scrolls up by exactly half its
// height, so the second copy lands where the first started: a seamless loop.
const FunFacts = props => (
    <div className="FunFacts-section" id="FunFacts-section">
        <h1>Fun Facts</h1>
        <span>Fun facts about me!</span>

        <div id="scroll-container">
            <div id="scroll-text">
                {[0, 1].map(copy => (
                    <ul key={copy} aria-hidden={copy === 1}>
                        {facts.map(fact => <li key={fact}>{fact}</li>)}
                    </ul>
                ))}
            </div>
        </div>
    </div>
);

export default FunFacts;
