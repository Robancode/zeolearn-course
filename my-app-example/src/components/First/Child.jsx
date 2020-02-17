import React, { Component } from "react";
class Child extends Component {
  state = { name: "alex" };
  render() {
    console.log(this.props, this.state);
    return (
      <div>
        <h2>{/* {this.props.msg} and his age is {this.props.age} */}</h2>
      </div>
    );
  }
}

export default Child;
