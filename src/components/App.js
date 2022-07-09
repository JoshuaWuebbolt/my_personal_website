import React from 'react';
import {Switch, Route, BrowserRouter} from "react-router-dom";
import MainPage from "./MainPage"
import Blog from "./Blog"
import MakingWebsites from "./Blogs/MakingWebsites";
import CriticalReview from "./Blogs/CriticalReview";
import ThingsILearned from "./Blogs/ThingsILearnedFromMyOnlineSemester";
import NewYearResolutions2022 from "./Blogs/NewYearResolutions2022";
import HowILandedASixFigure from "./Blogs/HowILandedASixFigure"
import ThingsILike from './Blogs/ThingsILike';
import Reroute from './Reroute';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={MainPage} exact/>
          <Route path="/blog" component = {Blog} exact/>
          <Route path="/blog/making-websites" component = {MakingWebsites} exact/>
          <Route path="/blog/critical-review" component = {CriticalReview} exact/>
          <Route path="/blog/things-i-like" component = {ThingsILike} exact/>
          <Route path="/blog/things-i-learned-from-my-online-semester" component = {ThingsILearned} exact/>
          <Route path="/blog/new-year-resolutions-2022" component = {NewYearResolutions2022} exact/>
          <Route path="/blog/how-i-landed-a-six-figure" component = {HowILandedASixFigure} exact/>
          <Route path="/qr" component = {Reroute} exact/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
