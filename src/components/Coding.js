import React from "react";
import "../styles/Coding.css"

const Coding = props => (
    <div className="coding-area" id="coding-section">
        <h1>Coding</h1>
        <span>Click the icons to see more!</span>
        <div className="coding1">
            <a href="https://github.com/JoshuaWuebbolt/Streamer" target="_blank" rel="noopener noreferrer">

                <img src="assets/streamer.jpeg" alt="Streamer Logo"></img>
            </a>
            <p>
                Streamer allows user to stream and download music from a server. I programmed both
                client and server side using C and making use of makefiles to compile code. The server
                can connect to multiple clients and stream at a maximum speed of 20MB/s. The server side
                can request songs in the server's library to download or stream. A circular buffer is
                used to maximize space and speed efficiency. Although made for music files, any file type
                can transfered between the server and the client.
            </p>
        </div>
        <div className="coding1">
            <a href="https://mcsscm.utm.utoronto.ca/csc207_20239/group_90" target="_blank" rel="noopener noreferrer">

                <img src="assets/The_Great_Adventure.png" alt="The Great Adventure Screenshot"></img>
            </a>
            <p>
                Working as a group is a necessary skill for developers. While developing this dungen crawler game in Java, I acted as
                the scrum master and lead programmer. Through various scrum meetings where we discussed which feature to impliment, who would 
                program them, estimate for how long the feature would take to program, and how to test the feature, we were able to create a fully
                functional game with features such as accessibility options for the visually impaired and those hard of hearing. As well as game play
                features such as a shop, inventory, a minimap, and a save/load feature.
            </p>
        </div>
        <div className="coding1">
            <a href="https://github.com/JoshuaWuebbolt" target="_blank" rel="noopener noreferrer">

                <img src="assets/omaTV.jpeg" alt="OmaTV Logo"></img>
            </a>
            <p>
                Whenever I see a problem I try to think of how I can code a solution. My Oma (German for Grandmother) pays $117 a month for cable and it
                is riddled with ads. Of course it would be great to just get her a subscription to Netflix or some other streaming service, but
                she has trouble with technology and doesn't want to learn a new system. This is why I am developing OmaTV. A streaming service with
                an interface that emulates cable TV. You can scroll through channels each with a different show playing. One channel may be the 
                Jepordy channel, antoher a movie channel with hallmark movies and another a news channel. All your Oma (or grandmother) has to know
                to enjoy all her favorite movies and shows is how to change the channel.
                <br></br>
                <br></br>
                To add on to this project I am currently pitching a similar idea to all the major streaming services (Netflix, Disney+, Amazon Prime, etc.)
                for a "Cable Mode" which will work in the same way as OmaTV but with all the shows and movies from the streaming service.
            </p>
        </div>
        <div className="coding1">
            <a href="https://devpost.com/software/waste-watchers-6g3kbe" target="_blank" rel="noopener noreferrer">

                <img src="assets/waste_watchers.jpeg" alt="Waste Watchers"></img>
            </a>
            <p>
                This was a project I made with a friend for Hacknado. The goal was to create a program that would help people reduce their waste
                by itendifying their waste and providing information on where it should go (recycling, compost, garbage). For example if you were throwing out
                a banna peel the website would tell you to first take off any sticker on the fruit and to put it in the recycling and then to place the bannana
                peel in the compost. Through this website we aimed to reduce the amount of waste that goes to the landfill and to help people understand
                how to properly dispose of their waste.
            </p>
        </div>
        <div className="coding1">
            <a href="https://github.com/JoshuaWuebbolt/my_personal_website" target="_blank" rel="noopener noreferrer">
                <img src="assets\favico.jpg" alt="My website :)"></img>
            </a>
            <p> 
                <i>Breathtaking. Flawless. An absolute masterpiece. </i>
                <br></br>
                These are just some of the words I've used to describe my very own website. I built this website to show off all the cool projects I've done and to just show off a little bit. I got to familiarize myself with React and node.js and brush up on my HTML and CSS skills. I hope you enjoy my website! :)
            </p>
        </div>

        {/* 
        <div className="coding1">
            <img src="logo.png" alt="very original"></img>
            <p>
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
            </p>
        </div> */}
    </div>
)
export default Coding;