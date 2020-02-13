import React, { Component } from "react";
import axios from "axios";
class Post extends Component {
  state = { formdata: { title: "", body: "", userId: "" } };
  titleref = React.createRef();
  bodyref = React.createRef();
  useridref = React.createRef();
  formHandler = e => {
    e.preventDefault();
    console.log(this.titleref.current.value);
    this.setState({
      formdata: {
        ...this.state.formdata,
        title: this.titleref.current.value,
        body: this.bodyref.current.value,
        userId: this.useridref.current.value
      }
    });
  };
  componentDidUpdate() {
    console.log("component did UPDATE");
    axios
      .post("https://jsonplaceholder.typicode.com/posts", this.state.formdata)
      .then(data => console.log("DATA RECEIVED", data))
      .catch(err => console.log("ERROR OCCURED", err));
  }
  render() {
    console.log(this.state.formdata);
    return (
      <div>
        <form onSubmit={this.formHandler}>
          <input ref={this.titleref} type="text" placeholder="title" />
          <br />
          <input ref={this.bodyref} type="text" placeholder="body" />
          <br />
          <input ref={this.useridref} type="text" placeholder="user id" />
          <button type="submit">Add Post</button>
        </form>
      </div>
    );
  }
}

export default Post;
