import React from "react";
import "../styles/Videos.css";

const Videos = props => (
    <div className="videos-area">
        <h1>Videos</h1>
        <span> Please subscribe to my youtube channel. Tuition's expensive.</span>
        <iframe 
            src="https://www.youtube.com/embed/ozb5Jn1v0qs"
            title="i tried to break a world record (it went as well as you'd expect)"
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen/>
    </div>
)
export default Videos;