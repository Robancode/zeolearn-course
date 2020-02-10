import React, { Component } from "react";
import "./Article.css";
class Article extends Component {
  state = {
    date: "7/2/2020"
  };
  render() {
    // console.log(this.props, this.state);
    return (
      <div>
        <div className="article-block" id={this.props.article.id}>
          <button onClick={() => this.props.handleClick()}>
            Change Title!
          </button>
          <h2>{this.props.article.title}</h2>
          <p>{this.state.date}</p>
          <p className="article-paragraph">{this.props.article.content}</p>
        </div>
      </div>
    );
  }
}

export default Article;
