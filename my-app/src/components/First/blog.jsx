import React, { Component } from "react";
class Blog extends Component {
  state = { title: "My First Blog", content: "lorem adsf df asdf asdfasdfaf" };
  // data for my component
  // allows updating of the data on
  // re renders the dom on update state
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
