import React, { Component } from "react";
import "./Articles.css";
class Article extends Component {
  state = { id: 1, title: "first article", content: "first article content" };
  render() {
    return (
      <React.Fragment>
        <div className="articleblock">
          <h2>{this.state.title}</h2>
          <p>{this.state.content}</p>
        </div>
      </React.Fragment>
    );
  }
}

export default Article;
