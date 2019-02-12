import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Map from "./pages/Map";
import Wiki from "./pages/Wiki";
import Settings from "./pages/Settings";
import About from "./pages/About";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

ReactDOM.render(

    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/map" component={Map} />
        <Route path="/wiki" component={Wiki} />
        <Route path="/settings" component={Settings} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>,
  document.getElementById("root")
);
