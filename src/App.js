import React from "react";
import "./App.css";
import Home from "./Home.js";

import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route path="/heroes">
            <section className="section pageHeader">
              <h1 className="title has-text-grey-lighter pageHeader">
                <Link to="/heroes" className="homeLink">
                  The Marvel Universe!
                </Link>
              </h1>
              <p className="has-text-grey has-text-centered has-text-weight-bold">(A <a href="https://reactjs.org/docs/hooks-intro.html">ReactJS Hooks</a> demo)</p>
            </section>
            <section className="section">
              <Home />
            </section>
          </Route>
          <Route path="/">
            <Redirect to="/heroes" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
