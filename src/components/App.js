import React from 'react';
import {Switch, Route, BrowserRouter} from "react-router-dom";
import MainPage from "./MainPage"
import Blog from "./Blog"
import WhyILoveCS from "./Blogs/WhyILoveCS";
import Reroute from './Reroute';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={MainPage} exact/>
          <Route path="/blog" component = {Blog} exact/>
          <Route path="/blog/WhyILoveCS" component = {WhyILoveCS} exact/>
          <Route path="/qr" component = {Reroute} exact/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
