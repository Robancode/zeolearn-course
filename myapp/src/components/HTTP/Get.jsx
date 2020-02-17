import React, { Component } from "react";
import axios from "axios";

// using axios to connect to the backend endpoint
// call it as a url in the state.
// communicate with the url to get data.
// this is a side effect
// it is an ajax call made from the component.
// can get data required by component with componentDidMount

class HttpDemo extends Component {
  state = {
    url: "https://jsonplaceholder.typicode.com/users",
    users: []
  };
  componentDidMount() {
    axios
      .get(this.state.url)
      .then(data => {
        console.log(data.data);
        this.setState({ users: data.data });
      })
      .catch(err => console.log(err));
    // this is a promise, which is an advanced type of callback
    // it will return two types of state. if there is an error it will catch it
  }
  render() {
    console.log(this.state.users); //want to show this data in a react table
    return (
      <div>
        <h2>http get demo</h2>
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
            <tr>
              <td>name</td>
              <td>username</td>
              <td>email</td>
              <td>website</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default HttpDemo;
