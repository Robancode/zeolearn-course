import React, { Component, useState } from "react";

function PropsDemo() {
  const [user, setUser] = useState({ name: "john", age: 45, pet: "dog" });
  return (
    <>
      <h2>A person</h2>
      <Person name={user.name} age={user.age} pet={user.pet}></Person>
      <PersonDemo />
    </>
  );
}

function Person(props) {
  return (
    <>
      <h2>Name: {props.name}</h2>
      <h2>Age: {props.age}</h2>
      <h2>Pet: {props.pet}</h2>
    </>
  );
}

function PersonDemo(props) {
  return (
    <>
      <h2>person demo</h2>
      <Person name="rosita" />
    </>
  );
}

export default PropsDemo;
