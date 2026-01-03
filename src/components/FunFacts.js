import React, { useEffect, useRef } from "react";
import "../styles/FunFacts.css"

const FunFacts = props => {
    const scrollTextRef = useRef(null);

    useEffect(() => {
        const scrollElement = scrollTextRef.current;
        if (!scrollElement) return;

        const scrollContent = scrollElement.innerHTML;
        scrollElement.innerHTML = scrollContent + scrollContent;

        let scrollPosition = 0;
        const originalHeight = scrollElement.scrollHeight / 2;

        const interval = setInterval(() => {
            scrollPosition += 1;
            scrollElement.parentElement.scrollLeft = scrollPosition;

            if (scrollPosition >= originalHeight) {
                scrollPosition = 0;
                scrollElement.parentElement.scrollLeft = 0;
            }
        }, 30);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="FunFacts-section" id="FunFacts-section">
            <h1>FunFacts</h1>
            <span>Fun facts about me!</span>

            <div id="scroll-container">
                <div id="scroll-text" ref={scrollTextRef}>
                    I held a world record for 2 weeks<br></br><br></br>
                    I can make an Ethernet cable from scratch; the longest one I made was 60 metres (about 200ft)<br></br><br></br>
                    I have completed  The Legend of Zelda: Ocarina of Time<br></br><br></br>
                    I absolutely hate kingdom hearts<br></br><br></br>
                    I can hold my breath for 2 minuets 46 seconds<br></br><br></br>
                    I have never flown on a plane<br></br><br></br>
                    EmberHacks was the first Hackathon I ever won<br></br><br></br>
                </div>
                
            </div>
        </div>
    );
};

export default FunFacts;