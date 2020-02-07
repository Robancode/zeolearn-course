import React, { Component } from "react";

class Blog extends Component {
  state = { title: "My First Blog", content: "lorem ipsum dalksdhd" };
  render() {
    return (
      <div>
        <h2>{this.state.title}</h2>
        <p>{this.state.content}</p>
        <button
          onClick={() => {
            this.setState({ content: "" });
          }}
        >
          Remove Content
        </button>
      </div>
    );
  }
}

export default Blog;
