import React from "react";
import "./BlogPosts.css"
import AmericanInternships from "./assets/howilanded/americaninternships.png";
import CanadianInternshipsTop from "./assets/howilanded/canadiantopinternships.png";
import CanadianInternships from "./assets/howilanded/canadianinternships.png";
import Dub from "./assets/howilanded/dub.png";
import HSBCResume from "./assets/howilanded/hsbcresume.png";
import WishResume from "./assets/howilanded/wishresume.png";
import Pain from "./assets/howilanded/pain.png";
import Home from "./assets/home.png"
import {Link} from "react-router-dom"


const MakingWebsites = props => (
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
            <h1 id="how-i-landed-a-six-figure-internship-before-my-21st-birthday">How I Landed a Six-Figure Internship Before My 21st Birthday</h1>
            <p>Okay to preface this, this one&#39;s might come off as a little braggy. I mean, it&#39;s hard to talk about this and <em>not</em> sound like you&#39;re bragging, but I promise the purpose of this blog is not (just) to brag.</p>
            <p>The goals of this blog:</p>
            <ol>
            <li>If you&#39;re going to go into CS at a University, or you <em>are</em> in CS at a University and you&#39;re looking for internships, hopefully this blog can help you out. I know in my first year, upper years gave me a lot of guidance about internships, and I promised myself that if I ever became as wise as them, I&#39;d try my best to help out the younger students as well. I never did become as wise as them, but I&#39;m gonna try this anyways. </li>
            <li>I know talking about salary and job details can be a little icky to people, but personally I think it&#39;s a good thing! Knowing how much others get paid can help you navigate your future job plans, and knowing how much people in your field are making is important so that you know how much you&#39;re worth.</li>
            <li>There are a lot of blogs out there that tell you how to do one very specific thing, but none that give a holistic view on <i>everything</i> that a person&#39;s done to get to where they are now. This is probably because no one&#39;s insane enough to write something that long, and also, not that many people are interested in reading something that long. But, <em>I</em> would&#39;ve loved to read this in my first year, and so I&#39;m writing it anyways. To kind of remedy the fact that this is so long, I&#39;ve added a table of contents — feel free to skip around.</li>
            <li>To brag. I mean, come on — It's kinda cool and I'm very hyped and just let me have this.</li>
            </ol>
                    <div className="positioner">
            <div className="fixed">
                <ul className="table-of-contents">
                    <li>
                        <a href="/blog/how-i-landed-a-six-figure">Jump to Top</a>
                    </li>
                    <li>
                        <a href="#my-offer">My Offer</a>
                    </li>
                    <li>
                        <a href="#pay-averages-in-toronto-and-elsewhere-but-mostly-toronto-">Pay Averages in Toronto  </a>
                    </li>
                    <li>
                        <a href="#should-you-register-for-co-op-through-your-school-">Should You Register for Co-op Through Your School?</a>
                    </li>
                    <li>
                        <a href="#there-are-multiple-pathways-to-success">There Are Multiple Pathways to Success</a>
                    </li>
                    <li>
                        <a href="#how-i-did-it-">How I Did It.</a>
                        <ul>
                            <li>
                                <a href="#before-university">Before University</a>
                            </li>
                            <li>
                                <a href="#first-year-make-post">First Year</a>
                            </li>
                            <li>
                                <a href="#summer-between-first-and-second-year-csc207-and-no-taships">Summer Between First and Second Year</a>
                            </li>
                            <li>
                                <a href="#second-year-fall-six-courses-does-not-make-covid-go-away">Second Year Fall</a>
                            </li>
                            <li>
                                <a href="#second-year-winter-comeback-kid">Second Year Winter</a>
                            </li>
                            <li>
                                <a href="#summer-between-second-and-third-year-the-part-where-i-actually-apply-to-jobs">Summer Between Second and Third Year</a>
                            </li>
                            <li>
                                <a href="#fall-2021-reaping-is-so-much-more-fun-than-sowing">Third Year Fall</a>
                            </li>
                            <li>
                                <a href="#present">Present</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#wrap-up">Wrap Up and Final Advice</a>
                        <ul>
                            <li>
                                <a href="#makepost">How do I make POSt?</a>
                            </li>
                            <li>
                                <a href="#leetcode">How do I get my Leetcode skills up to par?</a>
                            </li>
                            <li>
                                <a href="#projects">I don&#39;t know what kind of projects I should make?</a>
                            </li>
                            <li>
                                <a href="#interviews">I&#39;ve landed the interview, what do I do?</a>
                            </li>

                        </ul>
                    </li>
                </ul>
            </div>
        </div>
            
            <p>So, with that out of the way, let&#39;s get to the fun stuff. Where am I interning, for how long, and what are the details?</p>

            <h2 id="my-offer">My Offer</h2>
            <p>I&#39;m going to be joining <strong>Wish.com</strong> (the online retailer) as a <strong>Software Engineering Intern</strong> from May 2022 to April 2023. The pay is <strong>$8400 CAD</strong> a month (<strong>$100,400</strong> for the year), there&#39;s a <strong>$500 CAD</strong> remote work bonus, <strong>$75 USD</strong> a month for health stuff, and <strong>$50 USD</strong> a month in Wish cash to use on their products.</p>
            <p>But you&#39;re not here to listen to me gush over my offer, so let&#39;s talk about the good stuff. If you&#39;re just interested in how <em>I</em> landed my internship, skip to the &quot;How I Did It&quot; section, but otherwise I&#39;m gonna talk about some other things first.</p>
            <p><strong>Disclaimer, this is all <em>my</em> experience from things that <em>I&#39;ve</em> gone through and heard from my friends. I&#39;ve tried to keep this guide as factual as possible, but some things may be inaccurate. If you find something wrong with this guide, feel free to lemme know!</strong></p>
            
            <h2 id="pay-averages-in-toronto-and-elsewhere-but-mostly-toronto-">Pay Averages in Toronto (and Elsewhere, but Mostly Toronto)</h2>
            <p>First, let&#39;s talk about pay. Is 100k a normal amount, and how much should you be aiming for in your internships? </p>
            <p>Personally, I like using <a target="_blank" rel="noopener noreferrer" href="https://www.levels.fyi/internships/">levels.fyi</a> to view salaries. Online estimators aren&#39;t always the <em>most</em> accurate, but I&#39;ve found levels.fyi to be more accurate than other websites like Glassdoor. Let&#39;s look at some intern salaries:</p>
            
            <div className="small">
                <img src ={AmericanInternships} alt="American Internships" loading="lazy"/>
            </div>
            <p style={{fontSize:"12px", textAlign:"center"}}><em>I&#39;m pretty sure if you land Hudson River Trading, in addition to free food they just feed the food directly into your mouth while you&#39;re working</em></p>

            <p><em>Oh</em>. </p>
            <p>To be fair, these are the highest of the high, and they&#39;re all located in the US. Let&#39;s narrow our search to Toronto and look at the highest salaries from there:</p>

            <div className="small">
                <img src ={CanadianInternshipsTop} alt="The best Canadian internships" loading="lazy"/>
            </div>
            <p style={{fontSize:"12px", textAlign:"center"}}><em>note: i&#39;m pretty sure all these figures are in USD, so multiply by ~1.25 if you&#39;re looking for the Canadian equivalent</em></p>
            <p>Alright, two things:</p>
            <ol>
            <li>The top salaries have basically halved compared to the American ones</li>
            <li>Note that these aren&#39;t <em>all</em> the internships in Toronto. There are more that pay around this much (I know for a fact that at least Wish, Amazon, and Meta/Facebook hire interns in Toronto and pay around this much), but this is a good representative of the pay <strong>ceiling</strong> you&#39;re looking at</li>
            </ol>
            <p>Toronto salaries are a lot lower than the US. This is true of both internship salaries (see above) <em>and</em> new grad salaries. Obviously, salary is not the only reason to move anywhere, but if you&#39;re <em>just</em> trying to get the bag, know that you should be looking at American jobs. However, keep in mind that if salary is higher, competition will also be higher. </p>
            <p>Also, remember that these are the top of the top. This is the ceiling when it comes to internship offers. Realistically, if you&#39;re looking for your first internship in Toronto, it&#39;ll <em>probably</em> be at a bank, and it&#39;ll probably pay something closer to this:</p>
            
            <div className="small">
                <img src ={CanadianInternships} alt="Regular Canadian internships" loading="lazy"/>
            </div>
            <p style={{fontSize:"12px", textAlign:"center"}}><em>note, these may not be entirely accurate. I know for a fact from a friend that Citi is offering $41 CAD an hour for the Summer 2022 term</em></p>
            
            <p>I know these are lower, but keep in mind that these <strong>internship</strong> salaries are already close to the <a target="_blank" rel="noopener noreferrer" href="https://www.insurdinary.ca/average-income-in-canada/#:~:text=Average%20Household%20Income%20for%202021,they%20did%20a%20year%20ago.">average income in Canada</a>, so they&#39;re definitely nothing to scoff at.</p>
            <p>All this to say: if you&#39;re looking for your first internship in Toronto, you&#39;ll probably be looking at something between $20-30 an hour. For subsequent internships, you can start looking at some of the companies in the higher ranges. <em>Generally</em> it&#39;s easier to land a lower paying company first, and <em>then</em> aim for those higher paying ones after you have an internship under your belt.</p>
            <p>Also, if you go to a Canadian school that does <em>not</em> rhyme with &quot;Shwaterloo&quot;, then most of the job postings under your school&#39;s Co-op board will <em>probably</em> look like these $20-30 an hour jobs too. There will be some higher paying ones that go above $30, but they&#39;re fairly rare. If you&#39;re interested in the specific UofT numbers, <a target="_blank" rel="noopener noreferrer" href="https://engineeringcareers.utoronto.ca/files/2020/08/2020-2021-PEY-Co-op-Salary-Statistics.pdf">check out this link</a>. The median UofT PEY (our version of Co-op) annual salary last year was ~$52k (which is around $25 an hour), and I think for <em>most</em> UofT students their PEY is their first internship (which is bad, and I&#39;ll talk about that in a bit too). </p>
            <p>So with that in mind:</p>
            
            <h2 id="should-you-register-for-co-op-through-your-school-">Should You Register for Co-op Through Your School?</h2>
            <p>*note, this was written before the changes to UofT PEY in 2022, but the general advice should still be the same.</p>
            <p>After all, it looks like if you&#39;re shooting for the highest salaries then co-op isn&#39;t the way to go, AND if you do co-op your school will <em>probably</em> charge you a fee for it (I know UofT does), so is it still worth it?</p>
            <p><strong>Yes.</strong></p>
            <p>And take this from me, someone who <em>didn&#39;t</em> register for co-op through my school (I&#39;ll explain why later). It is worth it to register for Co-op through your school, <strong>even if your dream companies are not in your school&#39;s co-op portals</strong>.</p>
            <p>Why?</p>
            <ol>
            <li>You will have access to a job board that other people will not have access to. Only &quot;competing&quot; with people in your school is way easier than competing with <em>everybody that wants an internship</em>. (Side note, I hate to use the word &quot;competing&quot; — there are enough jobs in CS for all of us to help each other out) </li>
            <li>If you&#39;re the type of person who has issues with motivation, applying through your co-op portal is way easier than hunting down jobs elsewhere. Plus, everyone else will be doing it, so it almost feels like you <em>have</em> to be doing it.</li>
            <li>(I&#39;ve heard) the job application process is way easier through co-op boards. Friends of mine who applied to jobs through their co-op portal <em>and</em> outside of the co-op portal told me that their success rate was way higher when applying through their co-op portal. ALSO, they said the interview process was easier.</li>
            <li>Even if your dream company is not on your school&#39;s co-op board, always remember that there&#39;s a chance you won&#39;t be accepted by your dream company (especially on your first try). It pays to have backups. If you have the time and you&#39;re just trying to get your foot in the door, applying to as many places as possible is generally the play.</li>
            </ol>
            <p>I know it sucks that you&#39;ll have to pay more money to a school that you <em>probably</em> already pay a lot of money to go to, but overall in my opinion, paying the co-op fee is worth it and fairly miniscule when you take into account the money you&#39;ll be making at any internship.</p>
            <p>However, if you go to UofT, <strong>try to find an internship before your PEY</strong>. I&#39;m saying this simply because waiting until your third year to find internships is waiting too long. Students at other schools start looking for internships after their <strong>first</strong> year, but the fact that UofT has their <em>one</em> co-op term happen after third year leads many UofT students to believe that they aren&#39;t qualified until after their third year. I promise you, you&#39;re qualified after your <em>first</em>. Start looking early.</p>
            <p>Okay. One more thing before I talk about how I got my Wish internship. I know this is a little long, but this last part is very important to say before I talk about my journey:</p>
            
            <h2 id="there-are-multiple-pathways-to-success">There Are Multiple Pathways to Success</h2>
            <p>It&#39;s really really important that you know this. I&#39;m putting this before the part where I talk about myself just so you know that:</p>
            <ol>
            <li><p>You don&#39;t have to follow in my (or anyone&#39;s) footsteps to be successful. In fact, sometimes abandoning the path you&#39;re on to follow someone else&#39;s can be detrimental to your journey. </p>
            </li>
            <li><p>If I (or anyone else) did something that you didn&#39;t, that doesn&#39;t mean I&#39;m <em>ahead</em> of you. At the end of the day, the most important thing is that you&#39;re doing better than your past self. I&#39;m writing this blog to help give you an idea of what <em>one</em> pathway to success looks like, but ultimately, if you keep improving upon yourself you will find your own.</p>
            </li>
            <li><p>My path might not make you <em>happy</em>. The journey to get to where you want to go matters a ton. You should be happy during it. If there&#39;s something I did that just feels like it would make you miserable, don&#39;t do it. It won&#39;t be worth it. </p>
            </li>
            </ol>
            <p>Everyone I know who is successful did it differently from others. Even if their destinations were similar, generally their paths to get there were very different. I know people who didn&#39;t TA or get great grades and just grinded the job hunt, and ended up getting a FAANG first internship. I know people who were prepping for grad school who changed their mind and ended up using their algorithm knowledge to ace interviews and get a bunch of offers. I know people who didn&#39;t do any internships and graduated to pretty sick new grad jobs. </p>
            <p>There are infinite ways to be successful. If something&#39;s working out for you, don&#39;t abandon it just because you haven&#39;t seen it work out for other people.</p>
            <p>Anyway, that was the Philosophy minor in me speaking. Let&#39;s finally get to:</p>
            
            <h2 id="how-i-did-it-">How I Did It.</h2>
            <p>I&#39;m gonna split this up chronologically.</p>
            
            <h3 id="before-university">Before University</h3>
            <p>Nothing! Unless you count taking grade 11 and grade 12 computer science and learning very basic syntax <em>something</em>. Overall though, I always thought I&#39;d go into music, so I had no knowledge of how the CS world worked until university. If you&#39;re in this position, don&#39;t worry. Even though a lot of people <em>do</em> have coding experience going into first year, and you might feel like you&#39;re &quot;behind&quot; everyone, don&#39;t sweat it. You can do a lot in a short amount of time.</p>
            
            <h3 id="first-year-make-post">First Year: Make POSt</h3>
            <p>So, if you don&#39;t go to UofT, a little fun fact:</p>
            <p>In first year, you&#39;re not actually <em>in</em> CS yet. You apply to get into UofT, and then you apply again after first year to get into your program. Admission is based on your first year marks in two courses, and it is <em>not</em> guaranteed. In my first year (at the Mississauga campus), there were ~700 of us, and about 123 of us made POSt on our first try. (Granted, COVID had a lot to do with the lower number, and a lot of people tried again in the next year and made it). I think generally, the department likes to accept closer to 250-300 students, but I&#39;m not too sure on that.</p>
            <p>The point is, if you&#39;re in your first year at UofT, your main focus will probably be making POSt. I might write another blog post about making POSt in the future, but for now we&#39;ll keep things relevant to the job hunt.</p>
            <p>I didn&#39;t do much in first year to prep for finding internships. No personal projects, no community involvement, and I didn&#39;t apply to a single internship. Looking back <em>now</em>, I wish I would&#39;ve <strong>at least</strong> applied to some <a target="_blank" rel="noopener noreferrer" href="https://levelup.gitconnected.com/ten-internship-programs-for-1st-and-2nd-year-students-c1b5d34dfc50">first year exclusive internships</a>. There aren&#39;t too many of them, so applying wouldn&#39;t have taken a long time. I have no idea if I would&#39;ve actually made it, considering my resume had 0 projects on it, but it&#39;s always worth giving it a try.</p>
            <p>Overall, if you&#39;re in UofT in your first year, I&#39;d recommend focussing on making POSt over anything else. If you don&#39;t make POSt, you can definitely get amazing CS internships and jobs with just a CS minor, but the major does help with the job search. I think in first year, the goals are: make POSt, try and become acquainted with your school community/clubs and meet people, apply to first year exclusive internships, and try and get one or two personal projects (like a <a target="_blank" rel="noopener noreferrer" href="https://youtu.be/DzRhE3GY95E">personal website</a>) up.</p>
            <p><strong>What I Did Well</strong></p>
            <ul>
            <li>Made POSt and got good grades</li>
            <li>Made good friends with a lot of people, and developed a pretty solid network</li>
            <li>Took MAT137 instead of MAT135, which helped a lot with learning MAT102 (but more on that in the &quot;how to make POSt&quot; blog, if I ever write that)</li>
            </ul>
            <p><strong>What I Wish I Did Better</strong></p>
            <ul>
            <li>Spent less time on academics. Full disclosure, I ended with a 97 in MAT102 (Intro to Proofs), and a 91 in CSC148 (Intro to CS), when realistically I just needed a 73 and 80 in both those courses (respectively) to make POSt. For me personally, it definitely would&#39;ve been worth it to divert some of the time I spent on those courses towards personal projects, learning dev skills, and applying to jobs.</li>
            <li>Spent more time getting to know profs. I only really got to know one prof (shout out to my man Dr. Paul Vrbik), and he left UofT after my first year, so I went into second year with 0 connections. I definitely wish I had spent more time in office hours during non-test/assignment weeks just to chill and get to know my professors, all of whom were really awesome people.</li>
            </ul>
            
            <h3 id="summer-between-first-and-second-year-csc207-and-no-taships">Summer Between First and Second Year: CSC207 and No TAships</h3>
            <p>The summer between my first and second year, I took CSC207 (Intro to Software Design) at the UTSG campus, and wrote my first actual big project in a team of developers. If you&#39;re a UTM student in first year reading this, I <em>highly</em> recommend taking CSC207 at UTSG. I don&#39;t know if I&#39;ll get in trouble saying this but uhhhhhh</p>
            <p>CSC207 at UTM kinda sucks.</p>
            <p>I&#39;m saying this as someone who saw his friends take it at UTM, as well as someone who&#39;s <em>TAed</em> the course at UTM. At UTSG, we spent more time with design patterns (and less on Java, something you should be able to learn on your own), did a longer (and larger) project, and worked in a bigger team (7 students in my year, vs 4 at UTM). </p>
            <p>If you&#39;re reading this in first year, grab some friends and convince them to take CSC207 at UTSG. It&#39;s worth it. I finished the semester with a project I was quite proud of and put on my resume, got to work in a large group, and learned what working on a big project and using design patterns feels like.</p>
            <p>I also applied to be a TA for second year. Generally, they don&#39;t let second years be TAs, but that rule is waived if you:</p>
            <ol>
            <li>Have good grades</li>
            <li>Know the profs that are choosing TAs</li>
            </ol>
            <p>If you wanna be a TA in your second year, this is the blueprint. You have to do both of these.</p>
            <p>I did not do both of these, and so I was rejected. I had good grades, but to the professors choosing TAs, I was just some random student. Maybe if I had spent more time getting to know my profs in first year, it would&#39;ve been different.</p>
            <p><strong>What I Did Well</strong></p>
            <ul>
            <li>Took CSC207 at UTSG and somehow weaseled my way into an amazing group of students and made an awesome product</li>
            <li>Applied for a TAship (even though I didn&#39;t get it, applying for <strong>anything</strong> is always a W)</li>
            </ul>
            <p><strong>What I Wish I Did Better</strong></p>
            <ul>
            <li>Made connections with profs in first year so I actually got a TAship</li>
            <li>Still could&#39;ve applied to first/second year exclusive internships, still didn&#39;t do it, like an idiot</li>
            <li>Done more side projects. CSC207 was a nice side project, but picking up some web dev skills would&#39;ve put me ahead of schedule for sure</li>
            </ul>
            
            <h3 id="second-year-fall-six-courses-does-not-make-covid-go-away">Second Year Fall: Six Courses Does Not Make Covid Go Away</h3>
            <p>Second year fall was bad. I decided to take 6 courses (generally at UofT you do 4-5 courses a semester), which was a mistake. I don&#39;t think taking 6 courses in <em>general</em> is a mistake if you can handle it, but taking 6 courses to try and distract yourself from a pandemic?</p>
            <p>Not a great idea.</p>
            <p>Anyway, there were three things I did this semester that helped me with the job hunt:</p>
            <ul>
            <li>Took CSC236 (Introduction to the Theory of Computation) and learned about big O notation and runtime analysis (this is important for interviewing and you can definitely learn it on your own, but if you don&#39;t then you&#39;ll learn it through this course)</li>
            <li>Took CSC290 (Communication Skills for Computer Scientists), which is no longer offered by the school, but don&#39;t worry — the big takeaway from that course was how to fix my resume and take it from <em>bad</em> to <em>okay</em>. Online resources helped take it from <em>okay</em> to <em>good</em> later on, so you should probably just <a target="_blank" rel="noopener noreferrer" href="https://www.freecodecamp.org/news/writing-a-killer-software-engineering-resume-b11c91ef699d/">skip to those</a>.</li>
            <li>Created my own <a href="https://www.ethanlam.ca/">personal website</a> (you&#39;re on it right now!)</li>
            </ul>
            <p>Learning Big O isn&#39;t too difficult to wrap your head around, and you could probably do it yourself (generally runtime analysis is the easier part of a technical problem, the harder part is <em>solving the technical problem</em>). </p>
            <p>Resume skills are a bit harder, but overall there are a million resources online to help build your CS resume. What I like to do is look at the resumes of high-achieving people, and try and copy their format. I use <a href="https://www.overleaf.com/latex/templates/jakes-resume/syzfjbzwjncs">this template</a> for my resume, because more successful people told me to. I also include a lot of metrics (improved by x%) in my resume, because more successful people told me to. </p>
            <p>Building your own personal website probably the hardest out of these three, but there are a lot of online resources you can use (<a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=DzRhE3GY95E&amp;t=5s">like this one</a>) to get you started. It&#39;s very rewarding when you finally do it, and I recommend everyone try it out. I&#39;ve seen many application forms where they ask for your personal website/portfolio, and it feels good to not leave that form blank. Plus, I&#39;ve heard from a friend that has Google Analytics enabled on his website that after he applies to jobs, he can see people from California visiting his website, meaning that the recruiters are <em>actually</em> looking at it. </p>
            <p><strong>What I Did Well</strong></p>
            <ul>
            <li>Made my own website (even if you&#39;re not going into web dev, I really recommend doing this!)</li>
            <li>Learned Big O/runtime analysis to prep for interviews</li>
            <li>Took &quot;Camp Counselor&quot; <em>off</em> my resume, and actually adjusted it for the CS world</li>
            </ul>
            <p><strong>What I Wish I Did Better</strong></p>
            <ul>
            <li>Not taking on so much academically. Taking on too much academically stifled my ability to grow in other areas: I didn&#39;t have time to invest in any extracurriculars, I didn&#39;t have much time to work on projects, and I didn&#39;t have enough time to devote to applying to jobs.</li>
            <li>Not joining more communities/spending more time on my mental health. This isn&#39;t a supposed to be a super deep blog post so I&#39;lll keep it light, but if you ever feel as though you&#39;re taking on too much, take a break. You&#39;ll be more productive, happier, and overall <em>better</em> afterwards. </li>
            <li>STILL NOT APPLYING TO ANY JOBS. This is a BIG BIG one. If you&#39;re looking for internships, it&#39;s best to start applying <em>early</em>. Seriously. <em>Do it</em>. For American internships (especially at the highest paying ones), if there&#39;s a May 2022 position, it&#39;s filled by October 2021. For Canadian/smaller company internships they&#39;re a bit more forgiving, and you have about a semester more of leeway (so May 2022 positions will mostly be filled by February 2022), and there are <em>some</em> situations where a May 2022 position will be open until April 2022, but those are <em>rare</em>. Applying early is very important. I have a friend who&#39;s gotten interviews with Google, Amazon, Facebook, and Microsoft, and he says applying early is the best thing you can do. </li>
            </ul>
            
            <h3 id="second-year-winter-comeback-kid">Second Year Winter: Comeback Kid</h3>
            <p>If I were to graph how my second year winter went (out of 10), it would look like a 5/10 in the first part of January, and then plummet to a 1/10 for 2.5 months, and then <em>shoot</em> up to a 8/10 in April. The semester started rough, got worse due to personal reasons, but then <em>sharply</em> turned around at the end, partially because vaccinations started to speed up, and partially because in April 2021, literally everything happened.</p>
            <p>But let&#39;s start at the beginning. The game changer for me this semester was Hackathons. Hackathons are a GOATED way to get stuff on your resume. In the early months of 2021, I landed back to back Ws in two school hackathons (<a href="https://pyjac.devpost.com/">PyJaC</a> and <a href="https://devpost.com/software/track-19-sczex8">Hack the Case</a>), and made <a href="https://devpost.com/software/operation-guesser">Operation Guesser</a> and <a href="https://devpost.com/software/track-19-sczex8">Track-19</a>, two projects that are <em>still</em> on my resume now. </p>
            <div className="small">
                <img src ={Dub} alt="Dub" loading="lazy"/>
            </div>
            <p style={{fontSize:"12px", textAlign:"center"}}><em>pictured: two of the reasons for my ego</em></p>

            <p>If you&#39;re struggling with finding projects to add to your resume, I CANNOT reccomend hackathons enough. Grab some friends, <a target="_blank" rel="noopener noreferrer" href="https://mlh.io">find some hackathons that seem cool</a>, drink a few gallons of caffeine, and crank something out to put on your resume. </p>
            <p>Another cool thing that happened in January was that I started getting more involved in clubs. I didn&#39;t join any as an exec/associate, but I started hanging out around some of UTM&#39;s club discord servers, and met some very awesome people (one of which ended up mentoring me through the internship process a few months later). </p>
            <p>The final shining light of the early semester was taking CSC263 (Data Structures and Algorithms). As someone who hates grinding leetcode, the knowledge from this course came in clutch a million times. </p>
            <p>Then, February and March were absolutely terrible and I really didn&#39;t do anything of note. I probably (again) should&#39;ve taken less courses (I only took 5 this semester, but they were on average pretty hard courses), <em>especially</em> in light of the personal events happening that I mentioned earlier. Remember to take breaks, kids. It&#39;s good for you.</p>
            <p>And then, everything happened in April.</p>
            <p>First of all, in April, I decided to be proactive, and email a prof to ask if I could TA for him in the fall. I knew my chances were decent because:</p>
            <ol>
            <li>I had taken a course with him in the fall and had done well</li>
            <li>He <em>knew</em> me</li>
            </ol>
            <p>Remember the two rules to getting a TAship? Well, this time I followed them, and lo and behold, not <em>only</em> did he say yes, he said yes to me TAing for him in the <em>summer</em>. </p>
            <p>Second of all, I was messaged by an upper year at UTM to ask if I would be interested in joining his startup. This opportunity <em>only</em> happened because I had been active in the club discord servers, and had started talking to him about projects + a shared mutual interest. Engaging with the people in your school community is really important, don&#39;t forget it. </p>
            <p>Third, I decided (and by decided I mean my friend convinced me to, thanks Maryam) to run for a position as an executive for the <a href="https://linktr.ee/UTM_MCSS">Mathemetical and Computational Sciences Society at UTM</a> (MCSS for short), and I won! And, just like that, I was heavily involved in the events happening in and around the school. </p>
            <p>Aaaaand <em>fourth</em>, I decided to enrol in CSCC01 (Introduction to Software Engineering — It&#39;s called CSC301 at UTM/UTSG but at the Scarborough campus they use ABC instead of 123 because they like to be different with their course codes) with some friends over the summer. Remember CSC207 last summer? This course is the big brother of that course. This course is the GOAT course for internships at UofT. This course, out of everything, probably landed me my first internship. (But more on that in the next section).</p>
            <p>So much happened in April that I actually had to turn a few opportunities <em>down</em>. I don&#39;t know <em>why</em> this happened all at once; my best guess is that a combination of me being more active in the community/talking to more people mixed with winning those school hackathons meant that people now wanted to collab with me on a bunch of stuff, but all of a sudden I had a <em>packed</em> summer planned, even without an internship. </p>
            <p><strong>What I Did Well</strong></p>
            <ul>
            <li>Engaged with the community way more. Met a lot of people that would help me out greatly in the future, and it&#39;s just <em>nice</em> to make friends! (this is the part where I plug the <a target="_blank" rel="noopener noreferrer" href="https://discord.gg/wfJUZyXjfM">MCSS discord server</a>, go join it if you&#39;re not in it)</li>
            <li>Participated in Hackathons. These padded my resume, gave me something to put on my website, and gave me (a little bit of) rep moving forward. Plus, it was a nice ego boost to say that I was 2 for 2 on Hackathon wins.</li>
            <li>Took CSC263 to prep for interviews. If you don&#39;t mind grinding leetcode and studying independently, then you don&#39;t have to pay that much attention in your Data Structures/Algorithms class, but for me it was easier to learn data structures in this class than learn everything on my own. </li>
            <li><strong>Sought out opportunities</strong>. Three out of the four things that I got in April all happened to me because I went out of my way to make them happen. Even the thing that I didn&#39;t seek out (the startup) only happened because I had won hackathons and was active in the community. <strong>All opportunities are a result of you going out of your way to work at something, even if it&#39;s something you did in the past.</strong></li>
            </ul>
            <p><strong>What I Should&#39;ve Done Better</strong></p>
            <ul>
            <li>Taken on less academically (again). Continuing the saga of <em>Ethan Prioritizes School Over Mental Health</em>, taking 5 courses this semester when I <em>knew</em> that the courses would be hard <strong>and</strong> I knew that I would have far more personal responsibilities than usual <strong><em>AND</em></strong> A PANDEMIC WAS STILL HAPPENING — was the dumbest thing I could&#39;ve done. </li>
            <li><strong><em>STILL NOT APPLYING TO (many) JOBS</em></strong>. I wanted a summer internship, but I <em>still</em> didn&#39;t really put in the work to get one. Thankfully, things worked out and I did a lot of other things over the summer, but if the April opportunities <em>didn&#39;t</em> happen, I would&#39;ve had nothing. In fact, one of the reasons I was so down in March was because of the lack of summer internship, despite the fact that I really only applied to ~10 jobs, didn&#39;t really work on my resume, and did <em>no</em> research on what CS internships were out there.</li>
            </ul>
            
            <h3 id="summer-between-second-and-third-year-the-part-where-i-actually-apply-to-jobs">Summer Between Second and Third Year: The Part Where I Actually Apply to Jobs</h3>
            <p>The summer of 2021 was a hectic mess of deadlines, new responsibilities, and challenges I had never faced before.</p>
            <p>And it was <em>so</em> fun. </p>
            <p>I mean, a lot of it wasn&#39;t fun <em>while</em> I was going through it, but in retrospect, it was very fun. Turns out, being busy doing work that is actually rewarding/meaningful feels a <em>lot</em> better than being busy doing work that you&#39;re not very attached to. </p>
            <p>First, I did another hackathon and made <a target="_blank" rel="noopener noreferrer" href="https://devpost.com/software/lectern-hezyqc">Lectern</a>, another project to go on the resume. We didn&#39;t win, but it was still a great time AND I worked with some new tech I had never worked with before. W.</p>
            <p>Second, TAing ended up being a blast. I was very nervous at the start about teaching, but it ended up being extremely fulfilling. I got to guide some students through some important concepts, and I met some really amazing other TAs who also gave me a lot of advice regarding the job hunt, upper year courses, etc. </p>
            <p>Third, the startup gave me experience designing mobile apps, something I had never tried before. We didn&#39;t have enough time over the summer to finish our app, but overall I was still grateful for the opportunity. </p>
            <p>Fourth, CSCC01 was probably one of the heaviest courses I&#39;ve ever taken, <em>but</em> I came out of it with so much:</p>
            <ul>
            <li>An awesome full-stack app I could put on my resume</li>
            <li>More experience working in a team over a long period of time</li>
            <li>Knowledge of what agile development is and feels like</li>
            <li>Wayyyy more full stack knowledge (we used the MERN stack for our app, which looks very Very <strong>Very</strong> good on a resume)</li>
            <li>Understanding of how to use databases</li>
            <li>Software architectural knowledge to pull out during interviews</li>
            <li>Usage of <em>actual</em> git flow (in CSC207 we kind of used git, but we couldn&#39;t branch and so we didn&#39;t <em>really</em> use git)</li>
            <li>A good grade (CSCC01 is a heavy course, but also one of those courses where putting in the work will almost guarantee you a high grade due to the generous mark distribution)</li>
            </ul>
            <p>When I say CSCC01 got me my internship, I <em>mean</em> that. I (still) milk this project during interviews. </p>
            <p>Finally, getting involved in MCSS was <em>so</em> much fun. </p>
            <p>I was director of marketing, and while I had never done any bona fide marketing before, I loved making cool things and sharing them with people (<a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/p/CVTI3JcDoNO/">this one&#39;s</a> my favorite). Also, getting involved in the community is super rewarding. Before the semester even started, we had already done a few events, and it felt  awesome to be part of a team doing cool things for students at the school!</p>
            <p>(This is the part where I, again, encourage you to participate in the community at your school. Not just for career help, but also because your school experience will be <em>better</em> if you do. Full disclosure, I don&#39;t get paid as an MCSS exec and employers probably aren&#39;t that wowed by it, but to me it&#39;s still worth it just because it&#39;s a lot of fun)</p>
            <p>And then there was applying to jobs. </p>
            <p>I decided around July that I didn&#39;t want to go back to school in September (just because I was pretty burnt out from courses). That, combined with the fact that I technically didn&#39;t have a summer internship (as well as a lot of helpful pushing from my friends) spurred me to start looking for Fall 2021 internships. Unfortunately, as mentioned earlier, if I was looking for Fall 2021 internships I should&#39;ve started 6-12 months in advance, not <em>2</em>. </p>
            <p>I applied <em>everywhere</em> bro. LinkedIn, Indeed, Angel, these random job sites that promised me jobs and then <em>didn&#39;t</em> deliver. I filled in the same information that was on my resume into online forms dozens of times. I was <em>desperate</em>. </p>
            <p>And then, I got an email. </p>
            <p>ONE email, offering ONE online assessment with ONE company. </p>
            <p>It was HSBC (a global bank), for a &quot;Full Stack Developer Intern&quot; position. This was essentially my <em>one</em> shot to make something happen, and so I was super determined to see it through. My prep was pretty standard: </p>
            <ol>
            <li>I went over my resume and made sure that for every project on there I had talking points prepared, I knew what my contribution to the project was, and I had stories I could tell from their development that would emphasize communication skills and teamwork. <strong>Every company will ask you about your resume. Make sure to do this</strong>.</li>
            <li>I practiced (admittedly not enough) leetcode — although I mostly hoped that the info from my Data Structures and Algorithms course would carry me.</li>
            <li>I skimmed the job description for the technologies that they would be using, and made sure to refresh myself with the quirks of the technologies listed so I could answer questions about them.</li>
            </ol>
            <p>The interview process happened in July, and went like this:</p>
            <ul>
            <li>Online Assessment (OA). This was a personality test where I was given some multiple choice questions, and I had to answer based on what I would do in that situation. I can&#39;t give too much advice on this because I don&#39;t know what companies look for, but my best guess would be emphasize that you&#39;re a team player and can communicate well.</li>
            <li>30 minute technical screening where we went over my resume. This is where the resume prep comes in clutch. Also, try and take the initiative and talk about projects that you&#39;re proud of. Showing excitement about coding is a good thing.</li>
            <li>20 minute HR call where we talked about my salary expectations (they didn&#39;t say anything about salary), location availability, and timing.</li>
            <li>1 hour technical where I was asked some short general programming questions about JS syntax, React, Multithreading, given an easy Leetcode question, and then was asked to implement a small stateful React component. Again, this type of interview is very standard, so make sure you&#39;re prepping for it by practicing leetcode and working on side projects using the languages you want to learn.</li>
            <li>1 hour one-way video interview with HR, where I was given questions and had to record answers to them on the fly. Generally, most companies will ask you the same <em>types</em> of questions about working in a team, leadership, communication, etc, so make sure to have a few stories prepared about things you done that you can pull out when needed.</li>
            </ul>
            <p>Through a lot of luck and support, I got the offer! </p>
            <p>A lot of people ask me what my resume looked like at the time of getting my first internship, so here it is:</p>
            <div>
                <img src ={HSBCResume} alt="HSBCResume" loading="lazy"/>
            </div>
            <p style={{fontSize:"12px", textAlign:"center"}}><em>I think it&#39;s a decent pre-first internship resume, but it could definitely could use some work. what the hell is with those margins?</em></p>
            
            <p>Aaaand then I got a litttle bit greedy. their offer was around $20/21 an hour, and I knew that other banks were offering closer to $25. I wouldn&#39;t say I recommend this, but I ended up responding to their offer with a counteroffer that was closer to $23 an hour. If you&#39;re curious what the negotiation email looked like, it essentially looked like:</p>
           <p>Looking back, I probably wouldn&#39;t have do this again. I&#39;ve almost never heard of anyone losing an offer from negotiating, generally the worst thing they&#39;ll say is <em>no</em>. But, the extra <em>$2</em> an hour really didn&#39;t amount to much over 4 months. Plus, I really was in no position to negotiate anything, considering I had <em>no</em> experience at the time AND I didn&#39;t even have a <em>phone call</em> from any other company. I won&#39;t lie, this was mostly an ego-driven decision.</p>
            <p>However, it actually paid off! They accepted my counteroffer, and I was a go for Fall 2021. </p>
            <p>So yeah. Crazy summer.</p>
            <p><strong>What I Did Well</strong></p>
            <ul>
            <li>Learned to balance my responsibilities a <em>little</em> better. While I technically had more to do over ths summer, I think the fact that the responsibilities were all pretty <em>different</em> helped me avoid burnout. When I was tired of marking, I could apply to jobs. When I was tired of that, I would work on some MCSS stuff. That isn&#39;t to say that the summer wasn&#39;t stressful — there were periods of <em>insane</em> stress. But there were never any lows as bad as in Winter 2021, and looking back I don&#39;t think I would &quot;cut&quot; anything from this summer if I did it again.</li>
            <li>Got very involved in the community. </li>
            <li><strong>Actually applied to jobs.</strong> Crazy how you get things when you actually look for them.</li>
            </ul>
            <p><strong>What I Wish I Did Better</strong></p>
            <ul>
            <li>I feel like I kind of still took on too much — I know I&#39;m kind of contradicting myself here, but I&#39;m only one semester removed from this summer, and so it&#39;s difficult to really look at it objectively. On one hand, I loved everything I did, but on the other hand, I still didn&#39;t really get a &quot;break&quot;. But like I said, I don&#39;t think I would cut anything from this summer, so I guess I&#39;m a little unsure. Ask me again in a year.</li>
            <li><strong>I applied to jobs <em>way</em> too late</strong>. Applying to September jobs in July makes it very difficult to actually get those jobs. Do not do that. I got <strong><em>RIDICULOUSLY</em></strong> lucky (I actually found out that the ONLY reason HSBC was still hiring so late was because it was the first time that my HSBC team was hiring interns <em>ever</em>, and so they were late because they had to figure out a bunch of logistical things). <strong>APPLY EARLY.</strong></li>
            </ul>
            <p>Whew. That was long. One more to go, and this is the one that you&#39;ve been waiting for:</p>
            
            <h3 id="fall-2021-reaping-is-so-much-more-fun-than-sowing">Third Year Fall: Reaping is So Much More Fun Than Sowing</h3>
            <p>In a way, Fall 2021 was a continuation of Summer 2021 in that my responsibilities were still pretty diverse:</p>
            <p>I took on TAships for MAT102 (Intro to Proofs), CSC207 (Intro to Software Design), and CSCC01 (Intro to Software Engineering), I started as a Full Stack Developer at HSBC, and my MCSS responsibilities really kicked into high gear. </p>
            <p>TAing three courses was a novel experience. I met a lot of cool people and got to teach a plethora of subjects, but overall I don&#39;t think I would do it again; especially not while trying to juggle an internship and all the marketing responsibilities for an academic society. Still haven&#39;t learned my lesson of not taking on too many things. </p>
            <p>The internship itself went great; I got lucky and joined a team right as they were starting up a new project, and so I actually got to help architect their solution; something I&#39;ve been told you very rarely get the chance to do as an intern. I learned a lot about working with code on a massive scale, dealing with loads of data, and introducing redunancy to processes to ensure resiliency. (I also learned that working with Scala is very difficult, because there are 0 tutorials online on how to do <em>anything</em> with Scala).</p>
            <p>MCSS was still rewarding, and I got to market a lot more cool events. <strong>Go see if the clubs at your school need help; <em>they probably do</em> and would be down to add you to the team</strong>. </p>
            <p>The only thing left to do for this semester was to apply for PEY (UofT&#39;s coop program). I knew my chances of getting a good one were pretty high; I had past experience, I was a TA, I had a bunch of projects, I had good grades. Everything was looking up baybeee-</p>
             <div className="small">
                <img src ={Pain} alt="pain" loading="lazy"/>
            </div>
            <p style={{fontSize:"12px", textAlign:"center"}}><em>pictured: pain</em></p>
            
            <p>Sooooooooooo.</p>
            <p>There are some rules when it comes to registering for PEY. You have to have a certain amount of credits, be in good academic standing, and be a full time student at UofT.</p>
            <p>Since I had taken a semester off classes to work, I was not a full time student at UofT.</p>
            <p><em>The <strong>one</strong> semester I decided to take an academic break just had to be this one huh.</em></p>
            <p>I had done <em>everything</em> at this point to prep, and I was locked out of my school&#39;s co-op board. </p>
            <p>Anyway, so what that meant was that I had to (again) look elsewhere for summer internships. </p>
            <p>And this semester, just because I was <em>forced</em> to, I discovered the biggest tool at your disposal when it comes to getting internships.</p>
            <p><em>Referrals</em>.</p>
            <p>None of the interviews I got this semester were through actively applying to things. In fact, I applied to ~30 places through linkedin, and didn&#39;t hear back from any of them. I <em>did</em> however, end up getting three interviews, and two offers. I&#39;ll go through them one by one. </p>
            <p>This was my resume when I got all of these: </p>

            <div>
                <img src ={WishResume} alt="wishr resume" loading="lazy"/>
            </div>
            <p style={{fontSize:"12px", textAlign:"center"}}>nice</p>
            
            <p><strong>1. Konrad</strong></p>
            <p>Someone from UTSG that I had met through doing MCSS things had interned with Konrad in the past, and he referred me to one of their recruiters. </p>
            <p>Here&#39;s how the process went:</p>
            <ul>
            <li>15 minute call with the recruiter, where we talked about the position, why I wanted it, and I got to ask questions about the company. You&#39;re gonna go through a lot of these when applying for jobs. My best advice would be to just be yourself, be confident, and be curious about the role!</li>
            <li>45 minute technical interview where I was asked some short answer general programming questions (similar to HSBC), a very small system design question (which I don&#39;t think I did too well on, but they didn&#39;t seem to mind too much about it), and a medium Leetcode question.</li>
            <li>A three hour take-home assessment where I had to work on a full-stack app using React.</li>
            <li>A final interview with a senior dev where we talked about culture, fit, expectations, etc.</li>
            </ul>
            <p>The interview process was similar to HSBC&#39;s in some aspects — there were short answer questions on JS and a leetcode. The leetcode was a little more difficult, but still definitely not too bad if you know your data structures and have practice. </p>
            <p>If you don&#39;t know what a system design question is, it&#39;s as the name implies: they&#39;ll describe an app to you, and you have to describe (on a high level) how you would architect the app — the tools you would use, how they would communicate with each other, etc. The system design question was definitely new — I think most internships won&#39;t ask you anything system design-esque, but if they do and you&#39;re stuck, try to at least demonstrate that you have a knowledge of the tools you would use to to answer the question. I fumbled a bit on this question, but the interviewer was nice about it and nudged me in the right direction. Generally, I woudn&#39;t stress too much about prepping for system design questions if you&#39;re looking for internships, your time will probably be better spent learning tech tools and practicing leetcode.</p>
            <p>Finally, for the take-home, I had some time to prep before I started it, so I spent some time refining my React skills and brushing up on how full stack apps work. The best prep you can do for any form of take-home assessment would be to just create your own projects — my knowledge from my website and CSCC01 project definitely came in clutch for this.</p>
            <p>Overall, interviewing with Konrad was extremely pleasant. They were super accomodating every step of the way, their workplace looked <em>sick</em> (pool tables, foosball, and snacks?), and I legit vibed with everyone I talked to from there (one of them even added me on LinkedIn after I told them I was going to work somewhere else, which I thought was super sick). I got the vibe that they cared a lot about having a very social culture, they were a very young workplace, and they valued their interns. The pay offer was definitely higher than the average PEY pay, so if you get the chance, I would 100% recommend trying to interview with them.</p>
            <p><strong>2. Facebook/Meta</strong></p>
            <p>This came out of the blue LOL.</p>
            <p>If you weren&#39;t convinced yet that applying to jobs is very luck-based, look no further — at this point in the semester, I had applied to a few banks/other lower paying jobs, and hadn&#39;t even gotten an OA back. And then out of <em>nowhere</em>, without even <em>applying</em>, I got an email from a <strong>Facebook</strong> recruiter.</p>
            <p><em>You&#39;re telling me I&#39;m good enough to be on Facebook&#39;s radar, but not good enough for Loblaws to return my emails?</em></p>
            <p>For the record, getting this was definitely mostly luck, but you <em>can</em> do things to try and tilt the odds in your favour more. My biggest guess was that I got this because of my fixed up LinkedIn profile — I had updated my experience to list HSBC, TAing, and MCSS, I had my website and resume up there, and I had a bio that&#39;s a little cringy but not completely &quot;LinkedIn-y&quot;, but also very me.</p>
            <p>Anyway, this was the process:</p>
            <ul>
            <li>Facebook email from a recruiter</li>
            <li>Me freaking out for an hour at my school&#39;s smash tournament and then being distracted for the rest of the day (and I maintain that <em>that</em> is the reason why I didn&#39;t win)</li>
            <li>Being added to the Facebook recruiting portal, where they gave me practice problems and the ability to do a mock interview </li>
            <li>A tech interview where I was given two medium leetcodes to solve in 40 minutes, that I failed spectacularly on.</li>
            <li>Rejection :(</li>
            </ul>
            <p>Overall, this was definitely more unique than the other interview processes. The interview portal had a lot of practice questions, many of which were <em>way</em> harder than I could do on my own, The fact that I couldn&#39;t solve many of the practice problems definitely got in my head a bit. However, if you&#39;re in this spot, I wouldn&#39;t worry too much because the two questions they asked in the interview ended up being quite a bit easier than the practice ones.</p>
            <p>The interview portal also had the ability to simulate a mock interview, but only <em>once</em>. My advice would be to save this prep for a day or two before your interview, almost as if this mock interview was the interview itself. There wasn&#39;t anyone on the other side, but the mock interview had 2 questions using the same platform that the real interview would be on, each with a 20 minute time limit.</p>
            <p>If you end up interviewing for Facebook, definitely take advantage of all the resources in the interviewing portal. Despite being difficult, the practice problems were still pretty useful. </p>
            <p>Also, solving two questions in 40 minutes is pretty rough; I felt like I was being rushed the whole way through. If I were to do this again, I definitely would&#39;ve booked some practice sessions with some friends where I practiced solving some medium leetcodes with a 20 minute time crunch. Looking back, if I was a little more calm and had more practice with the time crunch, I probably could&#39;ve passed the interview, but nerves and time limits definitely got in my head.</p>
            <p><strong>3. Wish</strong></p>
            <p>This is a prime example on why referrals matter, and why you should try and look for them anywhere you can. UofT did an event called Industry Day where companies would present to students, and there was a Slack created for it. My friend added me to the slack and told me that there was someone there who worked for Wish and was willing to give referrals if you emailed him. I emailed him with my Resume + website + a good word, and I was connected with a recruiter. </p>
            <p>The Wish process was actually the most straightforward process I&#39;ve ever been through:</p>
            <ul>
            <li>15 minute call with a recruiter where we talked about the internship duration, my experience, why I wanted to work for Wish, etc. Very similar to Konrad&#39;s, and the same advice applies here.</li>
            <li>A one hour technical interview where I was asked some short answer questions and given a medium leetcode to solve. The short answer questions weren&#39;t too hard, although I did stumble a bit on one of them. Most short answer questions can be answered just by working with languages and doing projects, but for some, try and review the knowledge in your systems programming courses. </li>
            <li>Another one hour technical interview where they went over my resume and asked questions about my contribution to the projects I did and my HSBC internship, and asked me another leetcode medium question. </li>
            </ul>
            <p>Overall, the Wish interview process was very smooth. The leetcodes asked were leetcode mediums — similar difficulty to Facebook&#39;s but with more time given (40 minutes instead of 20, which made <em>all</em> the difference). I was able to solve everything that they threw at me, talk through my thought process, and even handle the more difficult twist to the Leetcode they threw in after I solved the initial question.</p>
            <p>When going over my resume, I made to talk about the work that I&#39;d been doing at HSBC architecting a large-scale solution, as well as recite the talking points I had memorized about my projects. For Wish, my best advice would be to prep for the techncial aspects, but also to try and be personable during your interview. Don&#39;t come off as a robot, and don&#39;t go too fast since you have a decent amount of time and can talk through all your thought processes. If you&#39;re solving the question super quick, use the time to emphasize your communication skills!</p>
            <p>Finally, someone asked me why I didn&#39;t negotiate, especially given the fact that apparently some people are making a bit more as Wish interns. I wish I could say there&#39;s some grand philosophical reason why I didn&#39;t, but the truth is:</p>
            <p><em>100k is way more money than I&#39;ve ever seen in my life, and I freaked out and accepted the offer almost immediately LMAO.</em></p>
            <p>So, yeah. Maybe looking back I would&#39;ve negotiated? But like, it&#39;s such a jump from any money I&#39;ve ever made before that I figure I can save the negotiation for my <em>next</em> job.</p>
            
            <h3 id="present">Present: What I'm Currently Up To</h3>
            <p>Taking a break :)</p>
            <p>You can catch me in 3, and <i>only 3</i>, courses (MAT344, PHL346, CSC309). You can also find me hanging around CSC301, I'm the head TA this sem, but it's the <i>only</i> course I'm TAing. And, you can always find me doing MCSS things.</p>
            <p>Hope you're proud of me. Finally taking my own advice. Like I said, the goal this sem is to <a target="_blank" rel="noopener noreferrer" href="https://www.ethanlam.ca/blog/new-year-resolutions-2022">fix my sleep schedule and get buff. </a></p>

            <p>Check back in a few months to read about how that went. So far, the exercise part seems easy, and the waking up part seems hard.</p>
            
            <h2 id="wrap-up">Wrap Up and Final Advice</h2>
            <p>So, yeah. That was my journey to go from not knowing what a for loop is, to landing a six figure software job within ~3-4 years. I really hope this was helpful to at least someone — the reason I wrote this was because when I was in first year, I saw these upper years doing these very cool things, and it felt impossible for me to get from where I was to where <em>they</em> were. The path just didn&#39;t seem visible at all.</p>
            <p>Well, now I&#39;m pretty much where they were, and the path was not nearly as smooth as I thought it would be. I made mistakes during basically every single semester, at <em>no</em> point (including right now) did I feel like I had things figured out, and I never knew if I was making the right decisions or not.</p>
            <p>But, there <em>is</em> a path, and this was mine. You&#39;ll find your own, one way or another. </p>
            <p>Also, as a final disclaimer, I&#39;m not a dev with years of experience in the industry or anything, a lot of what I&#39;m saying <em>could</em> be unoptimal in some way. But, this is everything I&#39;ve learned over the last few years, and now you know it too.</p>
            <p>Overall, the things I did do well were:</p>
            <ul>
            <li>(I eventually) tried to always seek out opportunities, even if I felt unprepared for them. News flash — we all feel unprepared for things. Out of all the unprepared people, the unprepared person who gets the job is the unprepared person who takes the initiative to seek it out. Start <em>everything</em> before you&#39;re ready. You&#39;ll learn what you need to on the way.</li>
            <li>I got a <em>lot</em> of advice from a <em>lot</em> of smart people. I thought about listing every person who had helped me in some way at the end here, but I didn&#39;t really want to hunt down 50+ people and ask them if they were okay with me putting their names on my blog. Everything I learned about the industry I learned because I had conversations with people who were kind enough to mentor me, or refer me to resources where I could learn, or even work with me on projects that got me to where I am now.</li>
            <li>I spent a lot of time grinding. There&#39;s no way around this one. I regret some of the ways I distributed my time grinding (too much time on schoolwork, not enough time on side projects and applying), but overall you&#39;ll have to grind. Try and find a balance to where you&#39;re not burning out, but you&#39;re getting things done.</li>
            </ul>
            <p>A few last things before I end:</p>
            <h4 id="makepost"><em>How do I make POSt?</em></h4>
            <ul>
            <li>Go to office hours, study early, make sure you understand all the concepts on a <em>high</em> level and then work your way down to the details, and don&#39;t ever miss any free marks. Also, <a target="_blank" rel="noopener noreferrer" href="https://discord.gg/wfJUZyXjfM">join the MCSS discord</a>, and feel free to ask any questions you have in the #ask-an-upper-year channel. More detail on this in a future blog post.</li>
            </ul>
            <h4 id="leetcode"><em>How do I get my Leetcode skills up to par?</em></h4>
            <ul>
            <li>If you don&#39;t know anything about data structures, start there. Learn about linked lists, trees, graphs, stacks, queues, and hash tables. Try coding them from scratch, and memorize their time and space complexities.</li>
            <li>Once you&#39;re comfortable with those data structures, jump straight into solving questions with them. One way is just diving into Leetcode.com and doing whichever problems seem interesting, but if you want a curated list of problems, try the <a target="_blank" rel="noopener noreferrer" href="https://leetcode.com/discuss/general-discussion/460599/blind-75-leetcode-questions">blind 75</a>. <strong>You don&#39;t need to solve all of these to pass an interview</strong>, but try out some of the easier ones to start. If you make your way through this entire list (I haven&#39;t), you&#39;ll probably be able to ace almost any leetcode question an interviewer can throw at you.</li>
            <li>If you have an interview with a specific company, join the <a target="_blank" rel="noopener noreferrer" href="https://cscareers.dev/discord">cscareers discord</a>. They have a bot that can show you questions that specific companies are more likely to ask. </li>
            <li>Finally, there&#39;s also the holy grail: <a target="_blank" rel="noopener noreferrer" href="https://www.amazon.ca/Cracking-Coding-Interview-Programming-Questions/dp/0984782850">Cracking the Coding Interview</a>. I have not read this thoroughly (I&#39;ve skimmed it), but it&#39;s regarded as pretty much <em>the</em> book to get you past a coding interview.</li>
            </ul>
            <h4 id="projects"><em>I don&#39;t know what kind of projects I should make?</em></h4>
            <ul>
            <li>Go to a hackathon. They generally have workshops that will teach you how to use tools. Also, the time crunch really forces you to make something, <em>even if it&#39;s bad</em>, which is actually why hackathons are so useful. The only way to make good things is to make bad things first, and hackathons force you to make bad things. Make a lot of bad things. Check out <a href="https://mlh.io/">MLH</a> for hackathons in your area.</li>
            <li>If you have no preference as to what tech stack you want to learn, go look at job positions you&#39;d be interested in, read the technologies that they use, and try to make a project using those technologies. Having a <a target="_blank" rel="noopener noreferrer" href="https://www.mongodb.com/mern-stack">MERN</a> project on my resume really helped in my HSBC interview, since the technology was relevant to the position.</li>
            <li>Just start. This is especially true of Web Dev, but basically true of anything. Pick some stupid idea that comes to your head in the next 10 seconds, and just start your project with very little information, and learn as you go. Often, that&#39;s really the only way to do things. Just start, and once you reach a bump, grind through it.</li>
            </ul>
            <h4 id="interviews"><em>I&#39;ve landed the interview, what do I do?</em></h4>
            <ul>
            <li>Prep your leetcode. Do practice problems, especially ones that you know are similar to ones that the company will ask you.</li>
            <li>Prep talking points for your projects. Talk about your individual contribution, the challenges you faced and how you overcame them, and things you learned from them.</li>
            <li>Do some brushing up on the tech stack that the job works with. They&#39;ll almost definitely ask you questions about those technologies.</li>
            <li>Research the company beforehand and make sure you have a good grasp on their corporate values/culture. I was more serious for my HSBC interviews, and more casual for my Wish/Konrad interviews. Knowing your audience is really important.</li>
            <li>Do a mock interview. These help, because they really get you into the interviewing mindset. You can do leetcode silently to yourself all day long, but in the actual interview, you&#39;ll be under a time crunch, and you&#39;ll have to explain your thought process eloquently to your interviewer. </li>
            <li>Don&#39;t neglect your communication skills. Listen — I&#39;ve met a lot of people in CS who are technically brilliant, but are terrible communicators. The communication aspect is <strong>just</strong> as important as the technical aspects in your interview. You don&#39;t know the answer to a specific tech question a company asks? That&#39;s fine, they can teach you that on the job. You come off as someone who&#39;s unteachable or unpleasant to work with? They probably won&#39;t be as down to teach you how to be a human.</li>
            <li>Ask questions at the end of the interview to show that you&#39;re interested in the position.</li>
            </ul>
            <p>Recently, a few people have tried to ask me if there&#39;s any &quot;trick&quot;, any &quot;secret&quot; to success that I know that could help them. Generally, I respond with:</p>
            <p>&quot;i have no idea im a third year student lol&quot;</p>
            <p>But also, one thing I <em>do</em> know is this: there is no <em>complex but easy</em> trick to getting ahead. I think people are looking for some trick that&#39;s complex enough where no one else is doing it, but easy enough where they can learn it in a month. Unfortunately, everything I&#39;ve experienced points to the &quot;secret&quot; being the opposite. It&#39;s <em>simple and hard</em>. </p>
            <p>Everything I&#39;ve described, if you boil it down, is very simple: study hard + effectively to make POSt. Go to hackathons and do random projects to add to your resume and learn skills. Engage with your school community and find people who will lift you up (and vice versa). Fix up your resume, and apply everywhere you can, even though it&#39;s tedious and soul sucking. Seek out referrals at school events and LinkedIn. Spend <em>a lot of time</em> practicing leetcode and other interview skills. </p>
            <p>It&#39;s simple, but hard. Everyone can do this, but it just takes a <em>lot</em> of time, a <em>lot</em> of dedication, and lots of slow, daily progress.</p>
            <p>Anyway, that&#39;s it. I think this is the longest thing I&#39;ve ever written. If you&#39;ve made it this far, I hope this was worth your time, and it helped you out. If it did, feel free to shoot me a DM, I&#39;d love to hear that all the time I spent writing this made an actual impact on <em>someone</em>. </p>
            <p>Tune in next month, when I write a completely different blog post about something way less serious, like my phobia of fish or whatever.</p>
            <p>Peace out.</p>
            <div className="spacer"/>


        </article>
    </div>
    </div>
)
export default MakingWebsites;