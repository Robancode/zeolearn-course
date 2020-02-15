import React, { Component } from "react";
import "./index.css";
import {
  BrowserRouter as Router,
  Link,
  Route,
  NavLink
} from "react-router-dom";
import About from "./About";
import Blogs from "../Blogs";
import Calculator2 from "../Calculator2";
import Conditional from "../Conditional";

class Routing2 extends Component {
  state = {};
  render() {
    return (
      <div className="index">
        <Router className="router">
          <div className="nav-container">
            <ul className="nav-list-items">
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
          <div className="page-content">
            <Route exact path="/" component={Conditional} />
            <Route path="/blogs" component={Blogs} />
            <Route path="/calculator" component={Calculator2} />
          </div>
        </Router>
      </div>
    );
  }
}

export default Routing2;
