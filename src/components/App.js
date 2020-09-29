import React from 'react';
import {Switch, Route} from "react-router-dom";
import MainPage from "./MainPage"
import Blog from "./Blog"

function App() {
  return (
    <div className="app">
      <Switch>
        <Route path="/" component={MainPage} exact/>
        <Route path="/blog" component = {Blog} exact/>

      </Switch>
    </div>
  );
}

export default App;
