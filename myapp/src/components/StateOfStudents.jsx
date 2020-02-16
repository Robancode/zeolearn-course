import React, { Component, useState } from "react";

class StateOfStudents extends React.Component {
  state = {
    students: [
      { name: "amy", score: 10 },
      { name: "George", score: 6 },
      { name: "Fatima", score: 7 }
    ]
  };
  render() {
    return (
      <StudentScore name={this.state.students} score={this.state.students} />
    );
  }
}

function StudentScore(props) {
  {
    console.log(props);
    return <h1>{console.log(props.map(item => item.name))}</h1>;
  }
}

export default StateOfStudents;
