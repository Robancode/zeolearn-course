import React, { Component, useState } from "react";

function ChildComponent(props) {
  return <div>Email: {props.email}</div>;
}

function FunctionDemoForState() {
  const [count, setCount] = useState(0); //destructuring
  const [info, setInfo] = useState({ id: 1, name: "john" });

  return (
    <div>
      <h2>You clicked {count} times</h2>
      <ChildComponent email={info.email} />
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        click me
      </button>
      <p>
        id:{info.id} <br />
        name: {info.name}
        <br />
      </p>
      email: {info.email}{" "}
      <button
        onClick={() => {
          setInfo({ ...info, email: "text@example.com" });
        }}
      >
        add email
      </button>
    </div>
  );
}

// import React, { Component } from "react";
// class ClassDemoForState extends Component {
//   state = { count: 0 };
//   render() {
//     return (
//       <div>
//         <h2>You clicked {this.state.count} times</h2>
//         <button
//           onClick={() => {
//             this.setState({ count: this.state.count + 1 });
//           }}
//         ></button>
//       </div>
//     );
//   }
// }

// export default ClassDemoForState;
export default FunctionDemoForState;
