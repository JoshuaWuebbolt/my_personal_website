import React from "react";
import "../styles/Videos.css";

const Videos = props => (
    <div className="videos-area">
        <h1>Videos</h1>
        <span> Please subscribe to my youtube channel. Tuition's expensive.</span>
        <div className="videos-info">
            <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/ozb5Jn1v0qs" 
                title="i tried to break a world record (it went as well as you'd expect)"
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen/>
            <p> Lorem Ipsum heaoueghaldiuvhadsfosa oasdhfaseoif soiv sohoshfos osefhos ohosfsohfoh sow owhfoshfaoseg sp;zhoihsvoiash gos  soghsofgi eihi ih ih fs vosj sfoj sfoj sfoj foj dagoaihdg dsaogh  spisgfpsfjspfojw s</p>
                 
        </div>
    </div>
)
export default Videos;