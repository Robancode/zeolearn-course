import React from "react";
// import logo from './logo.svg';
import "./App.css";
import List from "./List";
import Form from "./Form";
function App() {
  return (
    <div>
      <h2>Articles</h2>
      <List />
      <h2>Add Article</h2>
      <Form />
    </div>
  );
}

export default App;
