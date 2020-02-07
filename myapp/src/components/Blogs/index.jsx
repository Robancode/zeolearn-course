import React, { Component } from "react";
import "./Blogs.css";
import Article from "./Article";

class Blogs extends Component {
  state = {
    blogs: [
      {
        id: 1,
        title: "first blog",
        content: "lorem ipsum dolor sit amet, consectetur adipiscing"
      },
      {
        id: 2,
        title: "second blog",
        content: "lorem ipsum dolor sit amet, con"
      },
      {
        id: 3,
        title: "third blog",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
        id: 4,
        title: "fourth blog",
        content:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
      }
    ]
  };
  render() {
    //  const headingStyle = { textAlign: "center", color: "green" };
    return (
      <React.Fragment>
        <h1 className="heading">My Blog!</h1>
        <div className="article-container">
          {this.state.blogs.map(item => (
            <Article key={item.id} title={item.title} content={item.content} />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Blogs;
