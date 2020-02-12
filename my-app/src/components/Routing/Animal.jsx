import React, { Component } from "react";
class Animal extends Component {
  state = {};
  render() {
    console.log(this.props.match.params.name);
    return (
      <div>
        <h1>Animal Comonent</h1>
        <h2>{this.props.match.params.name} selected</h2>
      </div>
    );
  }
}

export default Animal;
