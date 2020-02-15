import React, { Component, useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Animal from "./Animal";

function Animals() {
  const [links, setLinks] = useState([
    { id: 1, link: "dog" },
    { id: 2, link: "cat" },
    { id: 3, link: "horse" },
    { id: 4, link: "tiger" }
  ]);
  const inputRef = React.createRef();
  const addAnimal = () => {
    setLinks([
      ...links,
      { id: links.length + 1, link: inputRef.current.value }
    ]);
  };
  return (
    <div>
      <h2>Animals</h2>
      <input type="text" ref={inputRef} />
      <button
        onClick={() => {
          addAnimal();
        }}
      >
        Add
      </button>
      <Router>
        <ul>
          {links.map(link => (
            <Link key={link.id} to={"/animals/" + link.link}>
              <li>{link.link}</li>
            </Link>
          ))}
        </ul>
        <div>
          <Route path="/animals/:name" component={Animal} />
        </div>
      </Router>
    </div>
  );
}

export default Animals;
