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
