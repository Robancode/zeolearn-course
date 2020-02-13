import React, { Component } from "react";
// child component (functional)
function Person(props) {
  console.log(props);
  return (
    <div>
      <h3>Person component</h3>
      <ul>
        <li>name: {props.name}</li>
        <li>color: {props.color}</li>
        <li>age: {props.age}</li>
      </ul>
    </div>
  );
}
// parent component (class)
class PropsDemo extends Component {
  state = {
    user: {
      name: "john",
      color: "blue",
      age: 34
    }
  };
  render() {
    return (
      <div>
        <h2>props demo component</h2>
        <Person
          name={this.state.user.name}
          color={this.state.user.color}
          age={this.state.user.age}
        />
        <PersonDemo />
      </div>
    );
  }
}

function PersonDemo(props) {
  return (
    <div>
      <h2>person demo component</h2>
      <Person name="alex" color="white" age="56" />
    </div>
  );
}

export default PropsDemo;
