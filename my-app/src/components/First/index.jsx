import React, { Component } from "react";
import Child from "./Child";
class First extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { username: "john" };
  // }
  state = {
    username: "john",
    age: 32,
    hobbies: ["cooking", "gardening"],
    message: "john is here"
  };
  // user = { name: "derek" };
  render() {
    return (
      <React.Fragment>
        <h2>Username: {this.state.username}</h2>
        <h2>Age: {this.state.age}</h2>
        <h2>Hobbies: {this.state.hobbies}</h2>
        <h2>email: {this.state.email}</h2>
        <button onClick={this.clickHandler}>update state</button>
        <Child msg={this.state.message} age={this.state.age} />
      </React.Fragment>
    );
  }
  clickHandler = () => {
    console.log("button clicked");
    //this.state.age++; // not valid
    this.setState({ age: this.state.age + 1, email: "john@adsf.com" });
    console.log(this.state);
  };
}

export default First;
