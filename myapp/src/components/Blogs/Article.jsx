import React, { Component } from "react";
import "./Article.css";
class Article extends Component {
  render() {
    return (
      <div>
        <div className="article-block" id={this.props.id}>
          <h2>{this.props.title}</h2>
          <p className="article-paragraph">{this.props.content}</p>
        </div>
      </div>
    );
  }
}

export default Article;
