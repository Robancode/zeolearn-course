import React, { Component } from "react";
import ImgForComponent from "./ImgForConditional";
class Conditional extends Component {
  state = {
    isHuman: false,
    humanLegs: 2,
    animalsLegs: 4,
    message: "default message",
    image:
      "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12231413/Labrador-Retriever-MP.jpg"
  };
  clickHandler = message1 => {
    this.setState({
      isHuman: !this.state.isHuman,
      message: message1,
      image: !this.state.isHuman
        ? "https://d17zbv0kd7tyek.cloudfront.net/wp-content/uploads/2015/06/leonardo-dicaprio-fb.jpg"
        : "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12231413/Labrador-Retriever-MP.jpg"
    });
  };
  render() {
    return (
      <div>
        <h5>Conditional component</h5>
        <h6>{this.state.message}</h6>
        <p style={{ color: this.state.isHuman ? "green" : "red" }}>
          Yay! I have{" "}
          {this.state.isHuman ? this.state.humanLegs : this.state.animalsLegs}{" "}
          Legs
        </p>
        <button
          onClick={() => this.clickHandler("button on parent is clicked")}
        >
          Toggle Creature
        </button>
        <ImgForComponent info={this.state} handleclick={this.clickHandler} />
      </div>
    );
  }
}

export default Conditional;
