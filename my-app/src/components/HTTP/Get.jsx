import React, { Component } from "react";
import axios from "axios";

class HttpDemo extends Component {
  state = {
    url: "https://jsonplaceholder.typicode.com/users",
    users: []
  };
  componentDidMount() {
    axios
      .get(this.state.url)
      .then(data => {
        // console.log(data.data);
        this.setState({ users: data.data });
      })
      .catch(err => console.log(err));
  }
  render() {
    console.log(this.state);
    return (
      <div>
        <h2>HTTP GET DEMO</h2>
      </div>
    );
  }
}

export default HttpDemo;
