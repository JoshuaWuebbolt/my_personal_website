import React from "react";
import Home from "./assets/home.png"
import {Link} from "react-router-dom"
import "./BlogPosts.css"
import Sad from "./assets/discordsad.png"

const ThingsILearned = props => (
    <div className="blog-page">
        <nav className="blog-nav"> 
            <Link to="/blog">
                <h2>Stuff I Write</h2>
            </Link>
            <Link to="/"> 
                <img src={Home} alt="go home" />
            </Link>
        </nav>
 <div className="content-area">

        <article>
            <h1 id="things-i-learned-from-my-online-semester-during-the-end-of-the-world">Things I Learned From My Online Semester During The End of The World</h1>
            <span className="tag">Ethan Lam</span>
                            <div className="positioner">
                    <div className="fixed">
                        <ul className="table-of-contents">
                            <li>
                                <a href="/blog/things-i-learned-from-my-online-semester">Jump to Top</a>
                            </li>
                            <li>
                                <a href="#its-okay-to-be-sad">It’s Okay to be Sad</a>
                            </li>
                            <li>
                                <a href="#in-the-meantime-take-care-of-yourself">In The Meantime, Take Care of Yourself</a>
                            </li>
                            <li>
                                <a href="#also-your-professors-are-mostly-trying-to-help-you">Also, Your Professors Are (Mostly) Trying to Help You</a>
                            </li>
                            <li>
                                <a href="#cherish-the-people-you-care-about">Cherish The People You Care About</a>
                            </li>
                        </ul>
                    </div>
                </div>
            <p>So, the plague came back this year.</p>
            <p>Also, wildfires. And botched missile operations. Racism (although that’s not exactly new). Oh, and has anyone heard anything about the killer hornets recently? Did we all just <em>forget</em> about those or are those going to be the secret final boss of 2020?</p>
            <p>Anyways, somehow in the midst of this we were still expected to perform academically? Wild. Here are four things I learned that helped me out throughout this cursed, godforsaken, lonely, absolutely ridiculously dif-</p>
            <h2 id="its-okay-to-be-sad">It’s Okay to be Sad</h2>
            <p>My sister has this saying (she’s 15, but wise beyond her years):</p>
            <p><em>It’s okay to not be okay, it’s not okay to not do anything about it.</em></p>
            <p>And, to be honest, that helped a lot. Overall, this semester was rough. I was sad a lot of the time, for many different reasons, some of which I weren’t even consciously aware of at the time.</p>
            <div className="small">
                <img src ={Sad} alt="Text: I'm sad" loading="lazy"/>
            </div>
            <p>And honestly, that’s okay. I think somehow in the midst of all the chaos this year, we forgot something very important:</p>
            <p><em>Everything is weird right now</em>.</p>
            <p>I’ve spent more time at home this year than I have, ever, in my life. The news AND social media became infinitely more depressing this year. I haven’t hugged anyone aside from my grandma (who I live with) for like 5 months.</p>
            <p>People kept saying this is the <em>new normal</em>, but honestly? I think that did more harm than good. It normalized the idea that all this isolation and sadness is normal. That <em>this is how it is now</em>. But, it really isn’t.</p>
            <p>So if you’re sad about things right now, that’s okay. You’re not used to this. This is weird. This is gonna get better. You’ll get better.</p>
            <h2 id="in-the-meantime-take-care-of-yourself">In The Meantime, Take Care of Yourself</h2>
            <p>When quarantine started, I both threw myself into my work while also putting off as much of my work as possible, and I know you know exactly what I mean by that. I somehow spent basically all my days doing schoolwork, but also got less done than before. If you relate to this, please find your nearest mirror, and read the following sentence out loud, to yourself.</p>
            <p><strong>TAKE. CARE. OF. YOURSELF.</strong></p>
            <p>GO OUTSIDE. BREATHE AIR THAT ISN’T THE SAME AIR THAT’S BEEN IN YOUR ROOM FOR 8 MONTHS. RUN UP AND DOWN YOUR STAIRS. DO 1 (one) PUSHUP. TALK TO YOUR FRIENDS. ANSWER THOSE TEXT MESSAGES YOU’VE BEEN PUTTING OFF. SIT SOMEWHERE IN YOUR HOUSE YOU HAVEN’T SAT IN FOR A YEAR AND WATCH YOUR FAVORITE TV SHOW.</p>
            <p>You know what made my semester infinitely better? One afternoon, I went outside, and I just rode my longboard around my block. Originally, I meant to be out for like 5 minutes. I ended up cruising around for about 50. It was legitimately super nice to just be not-home, doing <em>some</em> exercise, and listening to music.</p>
            <p>Now, that might not work for you, but I trust you to find the things that do. Some other stuff that worked for me:</p>
            <p>I bought some resistance bands and started working out. Not regularly or consistently, but they were <em>there</em>. And them just being <em>there</em> meant that, when I wanted to watch a tv show or listen to a podcast or anything, I could put it on and absentmindedly do some reps.</p>
            <p>I started prioritizing friends again. I (tried to) consciously make an effort to talk to my friends and do what we could to “hang out” virtually.</p>
            <p>I scheduled time off. 5-7pm. When I finished my classes, instead of jumping straight into homework, I would ride my longboard around, watch an episode of tv, or talk to people. Guilt-free. And then, when 7pm came around, I started my work with a fresh mind.</p>
            <p>Sleep better.</p>
            <p>Lemme say that again.</p>
            <p><strong>Sleep Better</strong>.</p>
            <p>I spent 2 months sleeping from 4am to 1pm. I figured it was fine, I was still sleeping a good number of hours, whatever.</p>
            <p>I also wasn’t eating well, and my face kept breaking out. Specifically, there was this 
                <em> one pimple </em> 
                that wouldn’t go away, it was worse than any of my  acne had ever been before. 
                I tried creams, I tried cutting out certain foods, I tried washing my face more, I tried washing my face <em>less</em>, every time I thought it would be gone, it was back the next day.</p>
            <p>And then, legitimately 4 days ago, I slept at 1am instead of 4am.</p>
            <p>I woke up, and the pimple was gone. Also, I ate breakfast for the first time in 2 months.</p>
            <p><em>That was all it took?</em> I was equal parts relieved and upset that all I needed was to not watch netflix until pre-dawn. Sleep is important, and it’s important that you get it at the <em>right time</em>.</p>
            <h2 id="also-your-professors-are-mostly-trying-to-help-you">Also, Your Professors Are (Mostly) Trying to Help You</h2>
            <p>DISCLAIMER: MOSTLY.</p>
            <p>Listen. You’re paying way too much money to attend a school online. Take advantage of your resources. <em>Talk to your profs</em>. I guarantee most of the time, they’ll be nice people who legitimately want to see you succeed. If you’re struggling with a concept or assignment, <em>ask the actual person you are paying to teach you, to teach you</em>.</p>
            <p>Side note, if you’re at UTM and you ever get a math course with Andie, you’re in for a good time. I actually enjoyed calculus because of her, a task I previously thought would be impossible.</p>
            <p>Anyway, there's not much else to say here. Your professors are people too. Just talk to them. </p>
            <h2 id="cherish-the-people-you-care-about">Cherish The People You Care About</h2>
            <p>That’s all.</p>
            <p>This year has taught me the importance of cherishing the people that I get to spend my time with. Friends, family, whoever, it’s super important to make the best of the time you have with them, and I learned that <em>hard</em> this year. Chances are, if you’re reading this, you’re one of those people for me.</p>
            <p>I appreciate you &lt;3</p>
            <p>also, buy my hoodies.</p>
            <p>thanks, <a href="https://www.instagram.com/ethannomiddlenamelam/">ethan</a>.</p>
            <div className="spacer"/>
        </article>
    </div>
    </div>
)
export default ThingsILearned;