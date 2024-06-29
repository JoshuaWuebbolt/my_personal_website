import React from "react";
import "../styles/Urbanism.css"
const Urbanism = props => (
    <div className = "urbanism-section" id="urbanism-section">
        <h1>Urbanism</h1>
        <span>I LOVE URBANISM</span>
        <div className="urbanism-info">

            <div classname = "urbanism-image-and-info">
                <div className="urbanism-image-area">
                    <img src="assets/UTM_Urbanism_logo.png" alt="REVIVAL" />
                </div>

                <div className="urbanism-contact-info">
                    <a href="https://twitter.com/utmurbanism" target="_blank" rel="noopener noreferrer">
                        <img src="assets/twitter.png" alt="Twitter" />
                    </a>
                    <br />
                    <a href="https://www.instagram.com/utmurbanism/" target="_blank" rel="noopener noreferrer">
                        <img src="assets/instagram.png" alt="Instagram" />
                    </a>
                    <br />
                    <a href="https://linktr.ee/utmurbanism" target="_blank" rel="noopener noreferrer">
                        <img src="assets/linktree.png" alt="Linktree" />
                    </a>
                </div>
            </div>

            <p> 
                I've been intereted in Urbanism for years and in 2023 me and three other students go togeather to create <b>UTM Urbanism</b>. From just the four of us we have grown to over <b>200 members</b>!
                <br />
                We are active in our local municipality and have been able to make a difference. Through advocasy we pushed Mississauga City Council to add an express bus that will run along a major transit corridor to the UTM Campus.
                <br />
                We have also been able to make talk directly to now previous <b>Mississauga mayor Joe Hornick</b>, as well as two word councilers Alvin Tedjo and Dipika Damerla. Through talking to members of our local government we push for more walkable livable cities, improved public transportation, and more dence and afordable housing.  
            </p>


        </div>
        
    </div>
)
export default Urbanism;