import React from "react";
import "./App.css";
import Home from "./Home.js";

import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="container">
        <section className="section pageHeader">
          <div className="container is-fluid">
            <h1 className="title has-text-grey-lighter pageHeader">
              {/* TODO: Programmatic nav */}
              <a href="/" className="homeLink">
                The Marvel Universe!
              </a>
            </h1>
          </div>
        </section>
        <section className="section">
          <Switch>
            <Route path="/heroes">
              <Home />
            </Route>
            <Route path="/">
              <Redirect to="/heroes" />
            </Route>
          </Switch>
        </section>
      </div>
    </Router>
  );
}

export default App;
