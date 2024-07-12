import React from "react";
import Home from "./assets/home.png"
import {Link} from "react-router-dom"
import "./BlogPosts.css"

const WhyILoveCS = props => (
    <div className="blog-page">
        <nav className="blog-nav"> 
            <Link to="/blog">
                <h2>Back to blogs</h2>
            </Link>
            <Link to="/"> 
                <img src={Home} alt="go home" />
            </Link>
        </nav>
 <div className="content-area">

        <article>
            <h1 id="Why I love programming">(An Incomplete List Of) Things I Like</h1>
            <span className="tag">Joshua Wuebbolt</span>
                            <div className="positioner">
                </div>
           <p>One of the most common questions I was asked in grade 12 before getting into university was "Why do you want to go into computer science".
            My answer has always been the same: I find programming to be the most amazing and freeing activity and art form that anyone can do.
            I love how boundless I am with just a laptop and an idea. I can create a streaming service, a social media platform, a video game, a website, a mobile app, and so much more.
            <br />
            <br />
            When I was younger I played with Legos, kenects, Liberty Logs, building blocks and anything I could get my hands on. I loved being able to create something from nothing.
            whatever my mind could think of. But I always would run out of pieces. I could try to have a huge battle with my lego minifigures but the battle
            in my head had 100s or 1000s and I only had a few. I could try to build a tower as tall as me but I'd run out of liberty logs. In programming 
            you don't run into barries like that. I can create a game with 1000s of enemies, a webstie for millions of users to visit, an AI bot that can
            talk just like me! The only limit is my skill and time.
            <br />
            <br />
            When I first got into programming I would look at the programs around me and think "I could never do that". But as I have learned more and more
            I've discovered that there is nothing that I can't program. As long as I have google and a laptop nothing is out of reach!
            <br />
            <br />
            I love programming because it is true freedom to do absolutely anything.
           </p>

            <div className="spacer"/>
        </article>
    </div>
    </div>
)
export default WhyILoveCS;