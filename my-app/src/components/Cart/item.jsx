import React, { Component } from "react";
class Items extends Component {
  state = {};
  render() {
    return (
      <div
        style={{
          background: "#eee",
          border: "1px solid grey",
          padding: "5px",
          margin: "5px",
          textAlign: "center"
        }}
      >
        <h2>{this.props.item.title}</h2>
        <h3>Quantity: {this.props.item.quantity}</h3>
        <button
          onClick={() => this.props.handleclick("add", this.props.item.id)}
        >
          +
        </button>
        <button
          onClick={() => this.props.handleclick("remove", this.props.item.id)}
        >
          -
        </button>
      </div>
    );
  }
}

export default Items;
