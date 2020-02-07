import React, { Component } from "react";

class Child extends Component {
  state = {
    name: "alex"
  };
  render() {
    console.log(this.props, this.state);
    return <h2>{/* {this.props.msg} and his age is {this.props.age} */}</h2>;
  }
}

export default Child;
