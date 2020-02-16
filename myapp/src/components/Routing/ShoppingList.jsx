import React, { Component, useState } from "react";
import "./ShoppingList.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import List from "./List";

function ShoppingList() {
  const [links, setLinks] = useState([
    { id: 1, link: "apples" },
    { id: 2, link: "potatoes" },
    { id: 3, link: "milk" },
    { id: 4, link: "stock" }
  ]);
  const inputRef = React.createRef();
  const addItem = () => {
    if (inputRef.current.value == "") {
      return null;
    } // once the new link is set, clear the previous input ref
    else
      setLinks([
        ...links,
        { id: links.length + 1, link: inputRef.current.value }
      ]);
    inputRef.current.value = "";
  };
  return (
    <div className="shopping-list">
      <div className="shopping-list--paper">
        <Router>
          <div>
            <Route path="/shopping-list/:name" component={List} />
          </div>
          <div className="shopping-list--content">
            <h3>Add items to your shop</h3>
            <input type="text" ref={inputRef} />
            <button
              onClick={() => {
                addItem();
              }}
            >
              Add
            </button>
            {/* <Router> */}
            <ul>
              {links.map(link => (
                <Link key={link.id} to={"/shopping-list/" + link.link}>
                  <li>{link.link}</li>
                </Link>
              ))}
            </ul>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default ShoppingList;
