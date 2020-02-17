import React, { Component } from "react";
import axios from "axios";
//try to get some real time apis with real data from
// there are many
class Post extends Component {
  state = { formdata: { title: "", body: "", userid: "" } };
  titleref = React.createRef();
  bodyref = React.createRef();
  useridref = React.createRef();

  formHandler = e => {
    e.preventDefault(); // default will submit the form and reload page
    this.setState({
      formdata: {
        ...this.state.formdata,
        title: this.titleref.current.value,
        body: this.bodyref.current.value,
        userid: this.useridref.current.value
      }
    });
  };
  componentDidUpdate() {
    console.log("component did update");
    //axios post accepts two params
    axios
      .post("https://jsonplaceholder.typicode.com/posts", this.state.formdata)
      .then(data => console.log("Data reeives", data))
      .catch(err => console.log("Error occured", err));
  }
  render() {
    console.log(this.state.formdata);
    return (
      <div>
        <form onSubmit={this.formHandler}>
          {/*Js uses onSubmit for form submissions*/}
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
