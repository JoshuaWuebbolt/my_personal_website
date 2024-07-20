import React from "react";
import "../styles/FunFacts.css"

const FunFacts = props => (
    <div className="FunFacts-section" id="FunFacts-section">
        <h1>FunFacts</h1>
        <span>Fun facts about me!</span>

        {/* Try 2 */}
        <section class="container">
            <p class="loop-text-first">his is conttinuous text</p>
            <p class="loop-text-first">this is continuous text</p>
            <p class="loop-text-first">this is continuous text</p>
        </section>
        
        <section class="container">
            <p class="loop-text-second">this 2 is continuous text</p>
            <p class="loop-text-second">this 2 is continuous text</p>
            <p class="loop-text-second">this 2 is continuous text</p>
        </section>

        <section class="container">
            <p class="loop-text-third">this is continuous text 3</p>
            <p class="loop-text-third">this is continuous text 3</p>
            <p class="loop-text-third">this is continuous text 3</p>
        </section>

        <p>test</p>
    </div>
);

export default FunFacts;
