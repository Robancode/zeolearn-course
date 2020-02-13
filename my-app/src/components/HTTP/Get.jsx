import React, { Component } from "react";
import axios from "axios";
import Post from "./Post";

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
    console.log(this.state.users);
    return (
      <div>
        <h2>HTTP GET DEMO</h2>
        <table className="table table-dark table-hover">
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Website</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map(user => (
              <tr>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.website}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Post />
      </div>
    );
  }
}

export default HttpDemo;
