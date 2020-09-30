import React from "react";
import "./BlogPosts.css"
import GraphBefore from "./assets/graphbefore.png";
import GraphAfter from "./assets/graphafter.png";
import Whoa from "./assets/whoa.png"
import Before from "./assets/before.png"
import After from "./assets/after.png"
import Delete from "./assets/todelete.png"
import First from "./assets/firstwebsite.png"
import Style from "./assets/style.png"
import Red from "./assets/butredthistime.png"
import Build from "./assets/build-settings.png"


const MakingWebsites = props => (
    <div className="blog-area">
        <h1>Building Websites for Beginners: By a Beginner</h1>
        <p>
            It’s been about a month since I’ve gotten into front-end development, and if I were to graph how my learning experience went, it would look like this:
        </p>
        <img src={GraphBefore} alt="yeet" />
        <p>
        If you have no experience with front-end, making a website seems daunting.
        </p>
        <p className="italics">
        HTML? CSS? Javascript? I have to learn 3 languages? Frameworks? React? Domains?
        </p>
        <p>
        The internet didn’t help when it came to all of this. Every tutorial either assumed some front-end experience, or was super long, and super overwhelming. So, by the end of this blog, you’ll have a basic website up on the actual internet, and you’ll know enough to know what you need to learn moving forward.
        </p>
        <img src={GraphAfter} alt="yeet" />
        <h1>
        Things to Install
        </h1>
        <p>
        First, install node.js. Then, go to your command line and type “npx create-react-app [name-of-project]”. You should see-
        </p>
        <img src={Whoa} alt="yeet" />
        <p>
        Whoa. That’s a lot of stuff. Okay, don’t be overwhelmed. A facet of front-end development that I’ve learned is that you’re just gonna learn this stuff later. Let’s focus on getting a website up for now. I’m assuming you know how to connect this folder to GitHub, so go ahead and do that.
        </p>
        <h1>
        What You Do Need to Know, Lightning Round:
        </h1><p>
        HTML code is the building blocks of your website. They’re the actual substance of your website.
        <br></br>
        CSS makes HTML look good. In my opinion, this is where you’ll spend most of your time. CSS takes your code from this:
        </p>
        <img src={Before} alt="yeet" />
        <p>
        To this.
        </p>
        <img src={After} alt="yeet" />
        <p>
        If you’re just building a static website, HTML and CSS is all you’ll need. If you want your website to be dynamic (the user can interact and make changes to your website), you’ll need to use JavaScript. (But you can worry about JS later).
        </p>
        <h1>
        Writing Your First Bit of Code
        </h1>
        <p>
        Open src/App.js, and delete everything inside of the first div tag after the return statement:
        </p>
        <img src={Delete} alt="yeet" />
        <p>
        Then, type {"<h1>"} Hello World {"</h1>"} in there instead. If you want to see the fruits of your work, go to your command line, navigate to your repository, and type “npm start”.
        </p>
        <img src={First} alt="yeet" />
        <p>
        To style it, go to src/App.css, find .App, and type color: red;
        </p>
        <img src={Style} alt="yeet" />
        <p>
        There you go! Now your text is red.
        </p> 
        <img src={Red} alt="yeet" />
        <p>
        Boom. That’s a website. I think that’s good enough to put online.
        </p>
        <h1>
        Getting Your Website Online
        </h1>
        <p>
        The easiest way I’ve found to get your website online is to use Netlify. Create an account, and click “New Site from Git”. 
        <br></br>
        From there, select the git repository that you created, set your branch to master, your build command set to “npm run build”, and your publish directory set to “build/”, and click *deploy site*. 
        </p>
        <img src={Build} alt="yeet" />
        <p className="italics">
        That’s it. You have a website now. 
        </p>
        <h1>
        Where to Go From Here
        </h1>
        <p>
        Congratulations! You’ve gotten past the hurdle of *starting*. From here, you’ll need to learn HTML, then CSS, and once you’re comfortable with that, JS and React. But for now, you’ve done the tricky stuff of putting a website up on the internet, and you know what you need to learn from here. 
        <br/>
        If you wanna talk to me about this, you can <a href="https://www.instagram.com/ethannomiddlenamelam/">follow me on instagram</a>.
        </p>

    </div>
)
export default MakingWebsites;