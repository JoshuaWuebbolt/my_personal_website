import React from "react";
import "../styles/Coding.css"

const Coding = props => (
    <div className="coding-area" id="coding-section">
        <h1>Coding</h1>
        <span>Click the icons to see more!</span>

        <div className="coding1">
            <h3>Global City Data Pipeline for Urban Planning</h3>
            <a href="https://www.miretaurban.com/about" target="_blank" rel="noopener noreferrer">
                <img src="assets/gcdpup.png" alt="Global City Data Pipeline for Urban Planning"></img>
            </a>
            <p>
                Global City Data Pipeline for Urban Planning (GCDPUP) is a browser-based interactive mapping platform developed in <b>partnership with Mireta Urban Dynamics</b>, 
                a leading biology-inspired urban design firm. The platform consolidates fragmented urban planning data into a unified visualization tool, allowing planners to search any city 
                worldwide and toggle data layers including roads, transit, water bodies, and points of interest.
                <br></br>
                <br></br>
                As a <b>Full-Stack Developer</b>, I had the privilege of leading development on critical data visualization components. I specifically developed the <b>Population Density data layer </b> 
                and the <b>Land Use data layer</b>, implementing complex geospatial rendering using D3.js and handling large-scale geographical datasets. Additionally, I designed and built the <b>landing page</b>, 
                crafting a professional user experience that introduces urban planners to the platform's capabilities. The project utilizes <b>React</b>, <b>TypeScript</b>, <b>Python FastAPI</b>, and <b>PostGIS </b> 
                for geospatial data management.
            </p>
        </div>

        <div className="coding1">
            <h3>Vamsi</h3>
            <a href="https://devpost.com/software/vamsi" target="_blank" rel="noopener noreferrer">
                <img src="assets/vamsi.png" alt="Vamsi"></img>
            </a>
            <p>
                Vamsi is the <b>first place winner</b> at EmberHacks 2025. It is a learning assistant for professors and teachers. Students
                download a vs-code extension with has an AI assistant which gives coding advice and encouragement while sending information
                about where students’ strengths and weaknesses are. This information is then sent to the professor and summarized. 
                <br></br>
                <br></br>
                An example of how a professors could use Vamsi would be to give an in-class assignment to reverse a linked list for 
                students to do in class. Vamsi would then inform the professor of where students struggled. Maybe some students 
                struggle with syntax while others do not understand the difference between a regular list and a linked list. This information
                can then be used to improve the professors lesson plan and address the holes in students’ knowledge. 
            </p>
        </div>

        <div className="coding1">
            <h3>ODC Games</h3>
            <a href="https://github.com/JoshuaWuebbolt/ODC_Games" target="_blank" rel="noopener noreferrer">
                <img src="assets/ODC_Games.png" alt="ODC Games"></img>
            </a>
            <p>
                ODC Games is an <b>interactive educational web platform</b> designed to teach members of the <b>Open Design Colaboratory (ODC)</b> at UTM how to safely and effectively use the equipment available in the makerspace. The ODC is a design hub that provides access to various fabrication tools and machines.
                <br></br>
                <br></br>
                The platform features multiple <b>mini-games and interactive challenges</b> that educate users on different pieces of equipment including sewing machines, 3D printers, Cricut cutting machines, and xTool laser cutters. Each game teaches essential skills through engaging gameplay, covering topics like equipment operation, safety best practices, and proper material handling. The application is built with <b>Next.js</b>, <b>TypeScript</b>, and <b>React</b>, providing a responsive and modern learning experience.
                <br></br>
                <br></br>
                As the <b>Full-Stack Developer</b> and creator, I designed and implemented the entire platform to make makerspace education accessible and engaging. The project demonstrates my ability to create educational technology that combines learning objectives with an intuitive user interface. <a href="https://odc-games-nu.vercel.app/" target="_blank" rel="noopener noreferrer">You can play the games here.</a>
            </p>
        </div>

        <div className="coding1">
            <h3>Stock Charity</h3>
            <a href="https://github.com/utmgdsc/StockCharity" target="_blank" rel="noopener noreferrer">
                <img src="assets/stockCharity.svg" alt="Stock Charity Logo"></img>
            </a>
            <p>
                Stock Charity is a project I created in <b>partnership with Google</b> through the UTM GDSC <b>(University of Toronto Mississauga Google Developer Student Club)</b>.
                The goal of Stock Charity was to give charities a consistent and reliable source of income through stock dividends.
                Stock Charity aims to allow users to have their donations buy a stock for a charity of their choice. We would then pay out the dividends of each stock to the respective charities. This allows charities to have consistent and reliable revenue streams.
                <br></br>
                <br></br>
                My contribution to this project was as a <b>full stack developer</b>. I used <b>React</b>, <b>Tailwind</b> and <b>TypeScript</b> to build up the front end. Building the user account and NavBar for the website.
                The backend was built with <b>Django</b>, <b>the REST Framework</b>, <b>SQLite</b> and <b>Axios</b>. My contributions where <b>developing APIs</b> for donations and users. 
                I created functionality that allowed for donations to be created and saved to a <b>SQLite database</b>. 
                
            </p>
        </div>

        <div className="coding1">
            <h3>Streamer</h3>
            <a href="https://github.com/JoshuaWuebbolt/Streamer" target="_blank" rel="noopener noreferrer">

                <img src="assets/streamer.jpeg" alt="Streamer Logo"></img>
            </a>
            <p>
                Streamer allows users to stream and download music from a server. I programmed both the
                client and server side using C, making use of makefiles to compile code. The server
                can connect to multiple clients and stream at a maximum speed of 20MB/s. The server side
                can request songs in the server's library to download or stream. A circular buffer is
                used to maximize space and speed efficiency. Although made for music files, any file type
                can transfered between the server and the client.
            </p>
        </div>
        <div className="coding1">
            <h3>The Great Adventure</h3>
            <a href="https://mcsscm.utm.utoronto.ca/csc207_20239/group_90" target="_blank" rel="noopener noreferrer">

                <img src="assets/The_Great_Adventure.png" alt="The Great Adventure Screenshot"></img>
            </a>
            <p>
                Working as a group is a necessary skill for developers. While developing this dungen crawler game in Java, I acted as
                the scrum master and lead programmer. Through various scrum meetings where we discussed which feature to impliment, who would 
                program them, estimate for how long the feature would take to program, and how to test the feature. We were able to create a fully
                functional game with features such as accessibility options for the visually impaired and those hard of hearing, as well as game play
                features such as a shop, inventory, a minimap, and a save/load feature.
            </p>
        </div>
        {/* <div className="coding1">
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
        </div> */}
        <div className="coding1">
            <h3>Waste Watchers</h3>
            <a href="https://devpost.com/software/waste-watchers-6g3kbe" target="_blank" rel="noopener noreferrer">

                <img src="assets/waste_watchers.jpeg" alt="Waste Watchers"></img>
            </a>
            <p>
                This was a project I made with a friend for a hackathon. The goal was to create a program that would help people reduce their waste
                by itendifying their waste and providing information on where it should go (recycling, compost, garbage). For example if you were throwing out
                a banna peel the website would tell you to first take off any sticker on the fruit and to put it in the recycling and then to place the bannana
                peel in the compost. Through this website we aimed to reduce the amount of waste that goes to the landfill and to help people understand
                how to properly dispose of their waste.
            </p>
        </div>
        {/* <div className="coding1">
            <a href="https://github.com/JoshuaWuebbolt/my_personal_website" target="_blank" rel="noopener noreferrer">
                <img src="assets\favico.jpg" alt="My website :)"></img>
            </a>
            <p> 
                
                <br></br>
                I made this website to show off my projects and to help me learn React. I use it to show off my projects and anything else that I do that I think might be website worthy!<br></br><br></br>
            </p>
        </div> */}

                


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