import React from "react";
import Home from "./assets/home.png"
import {Link} from "react-router-dom"
import "./BlogPosts.css"
import OtherBlog from "./assets/otherblog.png"
import NewYoutube from "./assets/youtubevidlate.png"


const NewYearResolutions2022 = props => (
    <div className="blog-page">
        <nav className="blog-nav"> 
            <Link to="/blog">
                <h2>Stuff I Write</h2>
            </Link>
            <Link to="/"> 
                <img src={Home} alt="go home"/>
            </Link>
        </nav>
    <div className="content-area">
        <article>
            <h1 id="what-i-did-in-2021-and-goals-for-2022">What I did in 2021, and Goals for 2022</h1>
                <div className="positioner">
                    <div className="fixed">
                        <ul className="table-of-contents">
                            <li>
                                <a href="/blog/new-year-resolutions-2022">Jump to Top</a>
                            </li>
                            <li>
                                <a href="#thisyear">What I Did This Year</a>
                            </li>
                            <li>
                                <a href="#thingsilearned">What I Learned This Year</a>
                            </li>
                            <li>
                                <a href="#whining">Whining</a>
                            </li>
                            <li>
                                <a href="#so-">My Goals For Next Year</a>
                            </li>
                            <ol>
                                <li>
                                    <a href="#1-focus-more-on-creative-projects">Creativity</a>
                                </li>
                                <li>
                                    <a href="#2-give-myself-more-time">Free Time</a>
                                </li>
                                <li>
                                    <a href="#3-focus-on-my-health">Health</a>
                                </li>
                                <li>
                                    <a href="#4-fix-my-sleep-schedule">Sleep</a>
                                </li>
                                <li>
                                    <a href="#5-spend-more-time-with-friends">Friends</a>
                                </li>
                            </ol>
                        </ul>
                    </div>
                </div>
                
            <p>Heyyo!</p>
            <p>Hope everyone&#39;s doing well. It&#39;s the one time of the year where I actually have time to write -</p>
                    <div className="small">
                            <img src ={OtherBlog} alt="an old blog post" loading="lazy"/>
                        </div>
            <p id="thisyear" style={{fontSize:"12px", textAlign:"center"}}><em>pictured: my one and only other blog post on this website, also written during winter break</em></p>
            <p>and I am very excited about it. </p>
            <p>It&#39;s been... a crazy year. This year I:</p>
            <ul>
            <li><p>Became a TA, and immediately overdid it by TAing a first year (MAT102), second year (CSC207), <em>and</em> third year (CSCC01) course in the same semester. </p>
            </li>
            <li><p>Made a lot of projects, did a few hackathons, and even <a target="_blank" rel="noopener noreferrer" href="https://devpost.com/EthanLam1?ref_content=user-portfolio&amp;ref_feature=portfolio&amp;ref_medium=global-nav">won some of them!</a></p>
            </li>
            <li><p>Joined a startup created by some of my friends. We don&#39;t have anything public yet, but we did some good work over the summer, and I learned a lot!</p>
            </li>
            <li><p>Decided extremely late that I wanted a tech internship, and then floundered around until I lucked into the <em>one</em> place that was still hiring Fall interns in July (&lt;3 HSBC).</p>
            </li>
            <li><p><em>Did</em> the tech internship, realized that industry is actually pretty cool, and was able to say that I contributed to software in one of the biggest banks in the world!</p>
            </li>
            <li><p>Released an EP (and an acoustic one) with the <a target="_blank" rel="noopener noreferrer" href="https://open.spotify.com/artist/44FK2ZMsWgDucYVasjJ5p9?si=JtjGn4g6RQqbttwrmT8M2w">band I&#39;m a part of</a>, although if I&#39;m being honest, I was definitely carried by them (Dan if you&#39;re reading this, you&#39;re a music production GOAT and don&#39;t let anyone tell you otherwise)</p>
            </li>
            <li><p id="thingsilearned">Joined the <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/utmmcss/">Mathematics and Computational Sciences Society</a> at UTM as an executive, and fulfilled my dream of making club marketing <em>not</em> boring!</p>
            </li>
            </ul>
            <p>As for things I learned this year:</p>
            <ul>
            <li><p><strong>You can do a <em>lot</em> in a year</strong>. I read this online somewhere: people overestimate how much they can get done in a day, and underestimate how much they can get done in a year. I was looking back on my <a target="_blank" rel="noopener noreferrer" href="https://www.ethanlam.ca/Ethan_Lam_Resume.pdf">resume</a> and found that basically everything on there had been accomplished in 2021. Don&#39;t ever feel like it&#39;s too late to do anything.</p>
            </li>
            <li><p><strong>Opportunities only happen if you look for them.</strong> Pretty much every opportunity I had this year happened because I communicated with someone. This year, I learned that very rarely does anything just <em>happen</em> to you. However, <em>making</em> things happen is not as difficult as I originally thought it&#39;d be. A lot of the time, talking to people and telling them that you&#39;re interested in something (working on a project together, a job, a TAship) actually does a lot to get your foot in the door.</p>
            </li>
            </ul>
            <p id="whining">And the most important lesson of all:</p>
            <ul>
            <li><strong>I am tired.</strong></li>
            </ul>
            <p>yeeaaaaaaah,</p>
            <p>listen, </p>
            <p>i&#39;ve done a lot this year, and don&#39;t get me wrong i am <strong>very</strong> grateful for the opportunities i&#39;ve had, as well as everyone i interacted with who helped me get the opportunities i had-</p>
            <p>but man,</p>
            <p>there has not been a week where i haven&#39;t had a million things with a million meetings and deadlines and responsibilities in a long time </p>
            <p>and,</p>
            <p>yknow, there is something to be said about the &quot;grindset&quot;; hustling <em>did</em> get me really far this year: i put my head down, accomplished a lot of things, and i can look back on this year and think to myself </p>
            <p>&quot;wow, i did a lot,&quot;</p>
            <p>but i think overall, i burnt myself out last year - </p>
            <p>my sleep schedule was all messed up, when i wasn&#39;t working i didn&#39;t have energy to do anything, and there were many times where my work stuff bled <em>into</em> my fun stuff: </p>
            <ul>
            <li>i had my work laptop with me on what were supposed to be fun nights out, </li>
            <li>i would have to sneak away for an hour to attend meetings when i was hanging out with my friends, </li>
            <li>and i didn&#39;t get to fully enjoy things the way i would&#39;ve liked to -</li>
            </ul>
            <p>i am tired. </p>
            <h3 id="so-">So.</h3>
            <p>Keeping in mind that it&#39;s been a full year of academic and career hustling, my goals for next year look a little different than they did for this year.</p>
            <p>Before I list them though, a little caveat (because I can be as long winded as I want because this is my blog): these goals are not quantifiable. I recently read a <a target="_blank" rel="noopener noreferrer" href="https://www.amazon.ca/Subtle-Art-Not-Giving-Counterintuitive/dp/0062457713">pretty cool book</a> that talked about how quantifiable goals often lead to us being less happy than abstract ones. I highly recommend you read it, the author explains why far better than I ever could. I thought the book was really eye-opening, so I figure I might as well take its advice into action this year.</p>
            <h2 id="1-focus-more-on-creative-projects">1. Focus more on creative projects</h2>
            <p>Did you know I have a <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCSsuc-_8laUQrkabS1iIrXQ">youtube channel</a>? It&#39;s okay if you forgot, seems like I did too.</p>
                    <div className="small">
                            <img src ={NewYoutube} alt="an old youtube video" loading="lazy"/>
                        </div>
                        <p style={{fontSize:"12px", textAlign:"center"}}><em>pictured: my most recent upload, if you can even call this recent</em></p>

            <p> This year, I&#39;m gonna put more effort into it, and maybe (just maybe) actually get a few videos up. The goal isn&#39;t to go viral or anything (although that would be nice), I just want to make fun videos that I think are cool, and I can look back on and be proud of.</p>
            <p>This also means writing more! I actually have a lot of things that I <em>do</em> want to write about on my blog, but I didn&#39;t have time to write them.  This year, I will. </p>
            <p>There&#39;s also some changes I want to add to my personal website. Animations, more interactive parts, bells, whistles, etc. All that will be prioritized this year.</p>
            <h2 id="2-give-myself-more-time">2. Give myself more time</h2>
            <p>To be perfectly candid, I kind of have the skeleton of next year planned out, which is kind of a first for me! I know that I&#39;ll be taking courses and TAing from Jan-April, and then I get a month break, and then I&#39;m working at [to be disclosed] from May-the end of the year.</p>
            <p>And so, with that in mind, I can actually work to ensure that I do not overwork myself. I&#39;m definitely taking less than 5 courses in the winter, I&#39;m making sure that they&#39;re <em>easy</em> courses, and I&#39;m only TAing one course. And then, once work starts, you best believe that is the <em>only</em> thing I&#39;m taking on. I want to do well at that internship, and I want to have time when I&#39;m <em>not</em> doing the internship to chill out. Enjoy myself. <del>Spend the money I&#39;ll be earning</del>.</p>
            <h2 id="3-focus-on-my-health">3. Focus on my health</h2>
            <p>There are a lot of benefits when it comes to being healthy; a longer lifespan, more energy, a higher stress tolerance blah blah blah blah listen. I&#39;l be real with you.</p>
            <p><em>I wanna be buff</em>. </p>
            <p>It&#39;s like, the <em>one</em> thing in life that I&#39;ve always <em>wanted</em> but have not done. And I know - this is kind of quantifiable and I&#39;m lowkey breaking my own rule here but this is my blog and my goals and so I can be a hypocrite. Don&#39;t @ me. </p>
            <p>So - what does that mean?</p>
            <p>It means eating healthier. I can do that. I need to buy the right ingredients and tools, but if I have time, this is achieveable.</p>
            <p>It means working out more. I bought some weights and I can definitely start using them more, and then hopefully when (if) campus opens, I can actually use the campus gym.</p>
            <p>It means waking up earlier, and -</p>
            <p>oh god.</p>
            <h2 id="4-fix-my-sleep-schedule">4. Fix my sleep schedule</h2>
            <p>Honestly, this should be number one. This should be number <em>zero</em>. This should&#39;ve been solved when I got a 9-5 internship, this should&#39;ve been solved when I entered university - or high school,  hell this should&#39;ve been solved 15 <em>years</em> ago.</p>
            <p>But it hasn&#39;t, and my sleep schedule is <em>still</em> garbage. Fun fact, I&#39;m currently on vacation with my family alone in the hotel room, because I couldn&#39;t wake up early enough to eat <em>lunch</em> with them. At 2pm.</p>
            <p>This is priority numero uno. This is my white whale. If I accomplish this, it truly feels like everything else will be <em>easier</em>. I&#39;ll have more time in the morning to get the stuff I need to do done, meaning I can focus my evenings on creative projects or being with friends. Or, I could work out in the mornings and get that done with early. <em>Or</em>, I could, at the very least, eat a nutritious breakfast. That would be nice.</p>
            <p>I don&#39;t know, this is the <em>one</em> thing that has always eluded me. Left to my own devices, I very quickly start waking up at 5(pm) and sleeping at 6(am). Maybe I&#39;ll write another blog post partway through 2022 detailing my process on trying to fix my sleep schedule. I know I&#39;m gonna be trying <em>everything</em>. </p>
            <h2 id="5-spend-more-time-with-friends">5. Spend more time with friends</h2>
            <p>It&#39;s telling that every year, I say I&#39;m going to do this more, and at the end of every year, I think &quot;wow, I wish I had done this more&quot;. </p>
            <p>I learned in PSY100 that when most people are on their deathbed, there's always one common thing that they all regret, and it's not that they wished they had made more money, or achieved more things, or anything like that.</p>
            <p>It&#39;s that they wished that they had spent more time with the people that they love. </p>
            <p>And so, I really truly believe that you cannot get enough time with people that matter to you. Some of my favourite times have been trips with my friends where nothing that special happened, but we were all together and that itself was special enough.</p>
            <p>Covid willing, I hope that this year I can spend a lot more time with my friends. Go on a road trip, or have people over more, or <em>something</em> like that. </p>
            <p>So yeah, those are my goals for the new year. Not much to do with my career, or school, but I think that&#39;s okay! There are more important things. </p>
            <p>And, real quick, I recognize there&#39;s a lot of privilege in saying all this. The person who&#39;s doing well with their school and career obviously can tell you that it doesn&#39;t matter and that they&#39;re prioritizing it less. It&#39;s like a millionaire telling you that money isn&#39;t everything - <em>screw you guy who has the thing telling me that the thing doesn&#39;t matter and i shouldn&#39;t want it, i want the thing</em>.</p>
            <p>But this isn&#39;t a self-help blog, it&#39;s <em>my</em> blog. This isn&#39;t for you, it&#39;s for me. The <em>next</em> blog I write might be for you, so go read that one, but this one is for me. And these are my resolutions.</p>
            <p>Check back next year to see if I follow through with them! In the meantime, you can keep up with me <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/ethannomiddlenamelam/">here</a>, or <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCSsuc-_8laUQrkabS1iIrXQ">here</a>, or <a target="_blank" rel="noopener noreferrer" href="https://www.ethanlam.ca/">here</a>.</p>
            <p>Here&#39;s to 2022. </p>
            <div className="spacer"/>

        </article>
    </div>
    </div>
)
export default NewYearResolutions2022;