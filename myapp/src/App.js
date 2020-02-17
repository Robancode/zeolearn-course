import React, { Component } from "react";
import "./App.css";
import First from "./components/First";
import Second from "./components/Second";
import Blog from "./components/First/Blog";
import Blogs from "./components/Blogs";
import Conditional from "./components/Conditional";
import Cart from "./components/Cart";
import Calculator from "./components/Calculator";
import Refs from "./components/Refs";
import UserValidation from "./components/UserValidation";
// import cat from "./catimg.jpeg";
import Routing from "./components/Routing";
import Routing2 from "./components/Routing2";
import Calculator2 from "./components/Calculator2";
import ClassDemoForState from "./components/Hooks/ClassDemoForState";
import FunctionDemoForState from "./components/Hooks/ClassDemoForState";
import EffectDemo from "./components/Hooks/EffectDemo";
import PropsDemo from "./components/PropsDemo";
import StateOfStudents from "./components/StateOfStudents";
import HttpDemo from "./components/HTTP/Get";
export default class App extends Component {
  classdata = "test data";
  render() {
    return (
      <>
        <HttpDemo />
        {/* <StateOfStudents /> */}
        {/* <PropsDemo /> */}
        {/* <EffectDemo /> */}
        {/* <ClassDemoForState /> */}
        {/* <FunctionDemoForState /> */}
        {/* <Calculator2 /> */}
        {/* <Routing2 /> */}
        {/* <Routing /> */}
        {/* <UserValidation /> */}
        {/* <Refs /> */}
        {/* <Calculator /> */}
        {/* <Cart /> */}
        {/* <Conditional /> */}
        {/* <Blogs /> */}
        {/* <Blog /> */}
        {/* <First /> */}
        {/* <Second /> */}
      </>
      // <div className="App" id="myid">
      //   <h1>Hello world</h1>
      //   <h2>{this.classdata}</h2>
      //   <img
      //     src="https://images.pexels.com/photos/3571551/pexels-photo-3571551.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      //     className="myimg"
      //   />
      // </div>
    );
    // return React.createElement(
    //   "div",
    //   { className: "App", id: "myid", style: { color: "red" } },
    //   React.createElement("img", {
    //     className: "myimg",
    //     src:
    //       "https://images.pexels.com/photos/3571551/pexels-photo-3571551.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    //   })
    // );
  }
}
// export default App;
