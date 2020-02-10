import React, { Component } from "react";
import FunctionComponent from "./FunctionalComponent";
class ClassComponent extends Component {
  state = {};
  render() {
    return (
      <div>
        <h2>Class component</h2>
        <FunctionComponent message="i am from class component" />
      </div>
    );
  }
}

export default ClassComponent;
