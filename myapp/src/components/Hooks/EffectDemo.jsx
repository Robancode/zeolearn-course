import React, { Component, useEffect, useState } from "react";
function EffectDemo() {
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(25);
  useEffect(() => {
    //useEffect is equivalent of componnetDidMount, componentDididUpdate etc
    console.log("button clicked");
    document.title = "you clicked " + count + "times";
  }, [count]);

  //  useEffect(function) == componentDidUpdate
  // useEffect(function, []) == componentDidMount
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        click me
      </button>
      <button
        onClick={() => {
          setAge(age + 1);
        }}
      >
        add age
      </button>
    </div>
  );
}

// import React, { Component } from "react";
// class EffectDemo extends Component {
//   state = { count: 0 };
//   componentDidUpdate() {
//     console.log("component updated");
//     document.title = "you clicked " + this.state.count + "times";
//   }
//   render() {
//     return (
//       <div>
//         <button
//           onClick={() => {
//             this.setState({ count: this.state.count } + 1);
//           }}
//         >
//           Click me
//         </button>
//       </div>
//     );
//   }
// }

export default EffectDemo;
