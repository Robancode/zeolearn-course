import React, { Component, useState } from "react";

function ChildComponent(props) {
  return <div>Email: {props.email}</div>;
}

function FunctionDemoForState() {
  const [count, setCount] = useState(0);
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
        CLICK ME
      </button>
      {/* <h2>{info}</h2> */}
      <p>
        id: {info.id}
        <br />
        name: {info.name}
        <br />
        email: {info.email}
      </p>
      <button
        onClick={() => {
          setInfo({ ...info, email: "test@example.com" });
          //   console.log(info);
        }}
      >
        Add Email
      </button>
    </div>
  );
}

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
//         >
//           CLICK ME
//         </button>
//       </div>
//     );
//   }
// }

// export default ClassDemoForState;
export default FunctionDemoForState;
