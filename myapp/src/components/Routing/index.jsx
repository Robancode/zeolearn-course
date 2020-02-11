import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  NavLink
} from "react-router-dom";
import About from "./About";
import Blogs from "../Blogs/";
import Calculator from "../Calculator";
import Conditional from "../Conditional";

class Routing extends Component {
  state = {};
  render() {
    return (
      <Router>
        <div>
          <ul>
            <NavLink
              exact
              activeStyle={{ color: "purple", fontWeight: "bold" }}
              to="/"
            >
              <li>Home</li>
            </NavLink>
            <NavLink
              activeStyle={{ color: "purple", fontWeight: "bold" }}
              to="/blogs"
            >
              <li>Blogs</li>
            </NavLink>
            <NavLink
              activeStyle={{ color: "purple", fontWeight: "bold" }}
              to="/calculator"
            >
              <li>Calculator</li>
            </NavLink>
          </ul>
        </div>
        <div>
          <Route exact path="/" component={Conditional} />
          <Route path="/blogs" component={Blogs} />
          <Route path="/calculator" component={Calculator} />
        </div>
      </Router>
    );
  }
}

export default Routing;
