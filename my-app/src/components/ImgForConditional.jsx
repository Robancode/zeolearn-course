import React, { Component } from "react";
class ImgForComponent extends Component {
  state = {};
  render() {
    return (
      <div>
        <h5>Img component</h5>
        <img src={this.props.info.image} alt="" />
        <button
          onClick={() =>
            this.props.handleclick("button on child component is clicked")
          }
        >
          Toggle Creature
        </button>
      </div>
    );
  }
}

export default ImgForComponent;
