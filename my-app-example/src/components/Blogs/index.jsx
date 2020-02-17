import React, { Component } from "react";
import "./Blogs.css";
import Article from "./article";
class Blogs extends Component {
  state = {
    blogs: [
      {
        id: 1,
        title: "first blog",
        content: "first blog content"
      },
      {
        id: 2,
        title: "second blog",
        content: "second blog content"
      },
      {
        id: 3,
        title: "third blog",
        content: "third blog content"
      },
      {
        id: 4,
        title: "fourth blog",
        content: "fourth blog content"
      }
    ]
  };
  render() {
    const headingStyle = { textAlign: "center", color: "green" };
    return (
      <React.Fragment>
        <h2 className="heading">Blogs</h2>
        <div>
          <Article />
        </div>
      </React.Fragment>
    );
  }
}

export default Blogs;
