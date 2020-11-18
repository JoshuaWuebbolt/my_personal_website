import React from "react";
import Home from "./assets/home.png"
import {Link} from "react-router-dom"
import "./BlogPosts.css"


const CriticalReview = props => (
    <div className="blog-page">
        <nav className="blog-nav"> 
            <Link to="/blog">
                <h2>Stuff I Write</h2>
            </Link>
            <Link to="/"> 
                <img src={Home} alt="go home"/>
            </Link>
        </nav>
        <article>
            <h1 id="critically-reviewing-an-article-thats-just-a-critical-review-of-interviews-which-are-really-just-critical-reviews-of-people">Critically Reviewing an Article That’s Just a Critical Review of Interviews, Which Are Really Just Critical Reviews of People</h1>
            <p>In this blog post, I’ll be summarizing Aline Lerner’s article, <a href="Here&#39;s%20the%20data.%20http://blog.interviewing.io/technical-interview-performance-is-kind-of-arbitrary-heres-the-data/">Technical interview performance is kind of arbitrary</a>, and analyzing what I liked and disliked about the methodology used to reach their conclusions.</p>
            <h2 id="summary">Summary</h2>
            <p>In Lerner’s article, her team states that single interview outcomes are not reliable when it comes to determining an applicant’s quality. They used interviewing.io, a platform for anonymous practice interviews, to conduct 299 interviews with 67 candidates. After each interview, they had their interviewers rate candidates on a scale from one to four on various desirable qualities. Then, they took a weighted average of all the qualities to assign a score to the candidate. Finally, they ensured that every candidate was interviewed by multiple interviewers. They found that the performance of a candidate from interviewer to interviewer varied greatly. In fact, some candidates scored a perfect score of 4/4 with one interviewer, but didn’t even pass the threshold for “good” with another interviewer. Because of their findings, Lerner concluded that a single interview is not adequate for accurately assessing a candidate’s worth.</p>
            <h2 id="what-i-liked">What I Liked</h2>
            <p>Nothing in particular about their methodology stuck out as <em>amazing</em>, but the researchers did do many little things right. The sample size was large enough to draw valid conclusions from their data. Also, using interviewing.io, a website where people practice interviews, would ensure that anyone doing the interview would be trying to hone their interviewing skills and therefore would take the interviews seriously. In addition, they used experienced interviewers who had previously conducted interviews for large companies. This eliminated any possible discrepancies between the people conducting interviews in the experiment and the people who would be interviewing candidates in real life - the people conducting interviews in the experiment <em>were</em> the people who would be doing it in real life. Finally, the analysis of the data is thorough. To further illustrate the point that they’re trying to make, they calculate the odds that a participant with a given score would fail an interview. They did this by rounding up all participants with the same Technical Scores into cohorts, resampling their data using multinomial distribution, and finally using that data to run <em>10,000 simulations</em>. Overall, the researchers did a great job at covering their bases with their methods.</p>
            <h2 id="what-i-disliked">What I Disliked</h2>
            <p>Unlike the “What I liked” section, I can only name one thing that I disliked about the researchers’ methodology. Using a scale from 1 to 4 seems like it wouldn’t give the interviewers enough options to distinguish between candidates. Since there aren’t many options to classify candidates under, the experiment runs into an issue where a <em>good</em> candidate and a <em>great</em> candidate might end up under the same category, while a <em>good</em> candidate and a <em>decent</em> candidate might be in separate ones. Having such broad categories could’ve been responsible for some of the discrepancies in the data. I think that changing the scale to go from 1 to 10 would’ve made a lot of sense here. This way, the interviewers could’ve been more precise in how they ranked candidates. This precision would’ve been especially relevant when it came to differentiating between <em>great</em> candidates and <em>excellent</em> candidates, since generally that’s what’s important to companies.</p>
            <h2 id="conclusion">Conclusion</h2>
            <p>Overall, I thought the article was good. While I stand by my one critique, it does not take away from the great work that the researchers did. Their research was thorough, their sample sizes were adequately large/relevant, and their mock interviews were good replications of real-life interviews. I would definitely recommend this article to anyone in charge of conducting interviews for a company (and hey, if you’re one those people, you should check out my resume on the <a href="ethanlam.ca">home page of this website</a>).</p>
            <p>Thanks for reading,</p>
            <p>Ethan.</p>
        </article>
    </div>
)
export default CriticalReview;