import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import Post from "./Post";

function HttpDemoHooks() {
  const [url, setUrl] = useState("https://jsonplaceholder.typicode.com/users");
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get(url)
      .then(data => setUsers(data.data))
      .catch(err => console.log(err));
  });
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
          {users.map(user => (
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

export default HttpDemoHooks;
