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
            <a href="https://devpost.com/software/operation-guesser" target="_blank" rel="noopener noreferrer">

                <img src="assets/Basic_arithmetic_operators.png" alt="math symbols"></img>
            </a>
            <p>
                This was a project designed by me and two friends for UTM's PyJaC competition. On the front end, it's a math game. On the back end, 
                it's an algorithm that can guess mathematical operations given a set of numbers. I used dynamic programming to optimize our backend, contributed
                to our front end, and presented the code on competition day. We ended up winning in our category! Click the image to check out our devpost
                page. 
            </p>
        </div>
        <div className="coding1">
            <a href="https://github.com/EthanLam1/my_website" target="_blank" rel="noopener noreferrer">
                <img src="assets/website.png" alt="do it"></img>
            </a>
            <p> 
                <i>Breathtaking. Flawless. An absolute masterpiece. </i>
                <br></br>
                These are just some of the words I've used to describe my very own website. I created this as an excuse to teach myself React.js and so I have a place to put my portfolio, personal projects, contact information, and pretty much anything cool I do. Click the image to check out the repository on github.
            </p>
        </div>
        <div className="coding1">
            <a href="https://github.com/nigow/TradingSystem" target="_blank" rel="noopener noreferrer">
                <img src="assets/trading.png" alt="trading interface menu"></img>
            </a>
            <p>
                <i>Think Amazon mixed with Uber mixed with a municipal library system. </i>
                <br></br>
                This was a large-scale trading platform created by me and my friends for UofT's CSC207 culminating project. Users can create accounts, put items up for trading, and trade items with other people. The program runs off of a database,
                and can support multiple users trading items in real time. Click the icon to check out our repository. 
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