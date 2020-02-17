import React, { Component } from "react";
class Greeting extends Component {
  state = {};
  render() {
    return (
      <div>
        <h2>Welcome {this.props.username}</h2>
      </div>
    );
  }
}

export default Greeting;
