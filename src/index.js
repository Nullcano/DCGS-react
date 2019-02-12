import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Options from "./pages/Options"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

ReactDOM.render(

    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/options" component={Options} />
      </Switch>
    </Router>,
  document.getElementById("root")
);
