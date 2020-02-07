import React, { Component } from "react";
import ImgForComponent from "./ImgForConditional";

class Conditional extends Component {
  state = {
    isHuman: false,
    humanLegs: 2,
    animalLegs: 4,
    message: "default message",
    image:
      "https://www.vets4pets.com/siteassets/species/dog/puppy/puppy-running-playing.jpg?width=1040"
  };
  clickHandler = message => {
    this.setState({
      isHuman: !this.state.isHuman,
      message: message,
      image: !this.state.isHuman
        ? "https://d17zbv0kd7tyek.cloudfront.net/wp-content/uploads/2015/06/leonardo-dicaprio-fb.jpg"
        : "https://www.vets4pets.com/siteassets/species/dog/puppy/puppy-running-playing.jpg?width=1040"
    });
  };
  render() {
    return (
      <div>
        <h5>Img Component</h5>
        <h6>{this.state.message}</h6>
        <p style={{ color: this.state.isHuman ? "green" : "red" }}>
          Yay! I have{" "}
          {this.state.isHuman ? this.state.humanLegs : this.state.animalLegs}{" "}
          Legs
        </p>
        <button
          onClick={() => {
            this.clickHandler("button on parent component is clicked");
          }}
        >
          Toggle Creature
        </button>

        <ImgForComponent info={this.state} handleClick={this.clickHandler} />
      </div>
    );
  }
}

export default Conditional;
