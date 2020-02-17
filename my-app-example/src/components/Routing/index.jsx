import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  NavLink
} from "react-router-dom";
import About from "./About";
import Animals from "./Animals";
class Routing extends Component {
  state = {};
  render() {
    return (
      <Router>
        <div>
          <ul>
            <NavLink
              exact
              activeStyle={{ color: "green", fontWeight: "bold" }}
              to="/"
            >
              <li>Home</li>
            </NavLink>
            <NavLink
              to="/about"
              activeStyle={{ color: "green", fontWeight: "bold" }}
            >
              <li>About</li>
            </NavLink>
            <NavLink
              activeStyle={{ color: "green", fontWeight: "bold" }}
              to="/contact"
            >
              <li>Contact</li>
            </NavLink>
            <NavLink
              activeStyle={{ color: "green", fontWeight: "bold" }}
              to="/animals"
            >
              <li>Animals</li>
            </NavLink>
          </ul>
        </div>
        <hr />
        <div style={{ background: "yellow" }}>
          <Route
            exact
            path="/"
            component={() => {
              return <h2>Home</h2>;
            }}
          />
          <Route path="/about" component={About} />
          <Route
            path="/contact"
            component={() => {
              return <h2>Contact</h2>;
            }}
          />
          <Route path="/animals" component={Animals} />
        </div>
      </Router>
    );
  }
}

export default Routing;
