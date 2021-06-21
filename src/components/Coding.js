import React from "react";
import "../styles/Coding.css"

const Coding = props => (
    <div className="coding-area" id="coding-section">
        <h1>Coding</h1>
        <span>Click the icons to see more!</span>
        <div className="coding1">
            <a href="https://devpost.com/software/lectern-hezyqc">

                <img src="assets/lectern.jpeg" alt="lectern symbol"></img>
            </a>
            <p>
                Learning shouldn't be confined by borders. We utilized blockchain technology to create our own cryptocurrency that can be used by students and tutors on our 
                very own e-learning platform, which was created as a project for TOHacks 2021! I coded the cryptocurrency, and used chakra-ui to create a responsive and 
                dynamic site. Click the image to check out our devpost page!
            </p>
        </div>
        <div className="coding1">
            <a href="https://devpost.com/software/track-19-sczex8">

                <img src="assets/track19.jpg" alt="track-19 symbol"></img>
            </a>
            <p>
                TLDR: Ontario's covid reponse app was so bad, even a group of kids competing in UTM's Hack The Case Hackathon/Case Competition hybrid could write a better one 
                in three days. We used Next.js for the front end, and firebase for the back end. My focus was on the front end and presentation. We ended up taking home first place! 
                Click the image to check out our devpost page.
            </p>
        </div>
        <div className="coding1">
            <a href="https://devpost.com/software/operation-guesser">

                <img src="assets/Basic_arithmetic_operators.png" alt="math symbols"></img>
            </a>
            <p>
                This was a project designed by me and two friends for UTM's PyJaC competition. On the front end, it's a math game. On the back end, 
                it's an algorithm that can guess mathematical operations given a set of numbers. I helped optimize and debug our backend, contributed
                to our front end, and presented the code on competition day. We ended up winning in our category! Click the image to check out our devpost
                page. 
            </p>
        </div>
        <div className="coding1">
            <a href="https://github.com/EthanLam1/my_website">
                <img src="assets/website.png" alt="do it"></img>
            </a>
            <p> 
                <i>Breathtaking. Flawless. An absolute masterpiece. </i>
                <br></br>
                These are just some of the words I've used to describe my very own website. I created this as an excuse to teach myself React.js and so I have a place to put my portfolio, personal projects, contact information, and pretty much anything cool I do. Click the image to check out the repository on github.
            </p>
        </div>
        <div className="coding1">
            <a href="https://github.com/nigow/TradingSystem">
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