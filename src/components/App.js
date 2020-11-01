import React from 'react';
import {Switch, Route, BrowserRouter} from "react-router-dom";
import MainPage from "./MainPage"
import Blog from "./Blog"
import MakingWebsites from "./Blogs/MakingWebsites";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={MainPage} exact/>
          <Route path="/blog" component = {Blog} exact/>
          <Route path="/blog/making-websites" component = {MakingWebsites} exact/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
