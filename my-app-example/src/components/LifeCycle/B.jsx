import React, { Component } from "react";
class B extends Component {
  componentDidMount() {
    console.log("Component did mount of B called");
  }
  // state = {}
  constructor(props) {
    super(props);
    this.state = { number: 1 };
    console.log("Constructor of B called");
  }
  render() {
    console.log("render of B called");
    return (
      <div>
        <h2>Component B</h2>
        <h3>Number from A: {this.props.number}</h3>
      </div>
    );
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("component did update of B called");
  }
  componentWillUnmount() {
    console.log("component B will unmount");
  }
}

export default B;
