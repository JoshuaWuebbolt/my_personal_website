import React from "react";
import "../styles/Music.css"
const Music = props => (
    <div className = "music-section">
        <h1>Music</h1>
        <span>Interviewers reading can stop here (unless you want some new tunes)</span>
        <div className="music-info">
            <div className="music-contact-info">
                <a href="https://www.instagram.com/_revivalmusic/">
                    <img src="instagram.png" alt="follow us" />
                </a>
                <br />
                <a href="https://www.youtube.com/channel/UCPD4iZI5-6IkUZc4p1JQw2Q/videos">
                    <img src="youtube.png" alt="watch us" />
                </a>
                <br />
                <a href="https://open.spotify.com/artist/44FK2ZMsWgDucYVasjJ5p9?si=EYXDeRgmSEm7OQHLkq_tTw">
                    <img src="spotify.png" alt="stream us " />
                </a>
            </div>
            <p> 
                I'm in a band, you should check us out. We make music, and it'll be on streaming platforms soon(tm). In the meantime you can check out our socials!
            </p>
            <div className="music-image-area">
                <img src="placeholder-image.png" alt="REVIVAL" />
            </div>
        </div>
        
    </div>
)
export default Music;