import React, { Component } from "react";
import "./App.css";
import First from "./components/First";
import Second from "./components/Second";
import Blog from "./components/First/blog";
import Blogs from "./components/Blogs";
import Conditional from "./components/Conditional";
import Cart from "./components/Cart";
import ClassComponent from "./components/ClassComponent";
import FunctionComponent from "./components/FunctionalComponent";
import A from "./components/LifeCycle/A";
import Onchange from "./components/Inputs/Onchange";
export default class App extends Component {
  // lifecycle hook
  // class variable
  classdata = "test data";
  render() {
    // local variable
    const localdata = "local value";
    return (
      <React.Fragment>
        <Onchange />
        {/* <A /> */}
        {/* <ClassComponent /> */}
        {/* <FunctionComponent /> */}
        {/* <Cart /> */}
        {/* <Conditional /> */}
        {/* <Blogs /> */}
        {/* <First /> */}
        {/* <Second /> */}
        {/* <h1>Hello world</h1>
        <h2>
          {this.classdata} {localdata}
        </h2>
        <img
          className="myimg"
          src="https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/ce2ece60-9b32-11e6-95ab-00163ed833e7/260663710/the-test-fun-for-friends-screenshot.jpg"
        /> */}
      </React.Fragment>
    );
    // return React.createElement(
    //   "div",
    //   { className: "App", id: "myid", style: { color: "red" } },
    //   React.createElement("img", {
    //     className: "myimg",
    //     src:
    //       "https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/ce2ece60-9b32-11e6-95ab-00163ed833e7/260663710/the-test-fun-for-friends-screenshot.jpg"
    //   })
    // );
  }
}
// export default App;
