import React, { Component } from "react";

import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import About from "./About";
import ShoppingList from "./ShoppingList";

function Routing() {
  return (
    <Router>
      <div>
        <ul>
          <NavLink exact activeStyle={{ color: "pink" }} to="/">
            <li>Home</li>
          </NavLink>
          <NavLink exact activeStyle={{ color: "pink" }} to="/about">
            <li>About</li>
          </NavLink>
          <NavLink exact activeStyle={{ color: "pink" }} to="/contact">
            <li>Contact</li>
          </NavLink>
          <NavLink exact activeStyle={{ color: "pink" }} to="/shopping-list">
            <li>Shopping List</li>
          </NavLink>
        </ul>
      </div>
      <div>
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
        <Route path="/shopping-list" component={ShoppingList} />
      </div>
    </Router>
  );
}

export default Routing;
