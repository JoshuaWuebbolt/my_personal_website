import React from "react";
import "../styles/MCSS.css"

const MCSS = props => (
    <div className = "MCSS-section" id="MCSS-section">
        <h1>MCSS</h1>
        <span>Mathematical & Computational Sciences Society</span>

        <div className="MCSS-info">

            <div classname = "MCSS-image-and-info">
                <div className="MCSS-image-area">
                    <img src="assets/MCSS.png" alt="MCSS Logo" />
                </div>

                <div className="MCSS-contact-info">
                    <a href="https://mcss.club/" target="_blank" rel="noopener noreferrer">
                        <img src="assets/general_website.png" alt="MCSS Website" />
                    </a>
                    <br />
                    <a href="https://www.instagram.com/utmmcss/?hl=en" target="_blank" rel="noopener noreferrer">
                        <img src="assets/instagram.png" alt="MCSS Instagram" />
                    </a>
                    <br />
                    <a href="https://discord.gg/x3zPJDUq" target="_blank" rel="noopener noreferrer">
                        <img src="assets/discord.png" alt="MCSS Discord" />
                    </a>
                </div>
            </div>

            <p> 
                I've been involved with the Mathematical & Computational Sciences Society (MCSS) since my first year at UTM. I am now a part of the <b>MCSS executive team</b>.
                <br />
                MCSS is a student-run organization that represents all students in the Mathematical & Computational Sciences department at UTM. We host a variety of events throughout the year, including <b>academic seminars</b>, social events, and <b>professional development workshops</b>. 
                <br />
                The most impressive event is <b>DeerHacks</b>. A 3 day long hackathon hosted by MCSS that last year had <b>over 300 participants</b>. With sponsers such
                as <b>Uber</b>, <b>Amazon</b>, the <b>University of Toronto</b>, <b>MLH (Major League Hacking)</b>, and more!
            </p>

        </div>

        <div className="MCSS-info">

        {/* Deerhacks */}


        <div classname = "MCSS-image-and-info">
            <div className="MCSS-deerhacks-image-area">
                <img src="assets/Deerhacks.png" alt="Deerhacks Logo" />
            </div>

        </div>

        <p> 
            The most impressive event is <b>DeerHacks</b>. A 3 day long hackathon hosted by MCSS that last year had <b>over 300 participants</b>. With sponsers such
            as <b>Uber</b>, <b>Amazon</b>, the <b>University of Toronto</b>, <b>MLH (Major League Hacking)</b>, and more!
        </p>

        </div>




    </div>
)
export default MCSS;