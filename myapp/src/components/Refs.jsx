import React, { Component } from "react";
class Refs extends Component {
  state = {};
  pref = React.createRef();
  inputRef = React.createRef();
  render() {
    return (
      <div>
        <p ref={this.pref}>lorem ipsum</p>
        <input ref={this.inputref} type="text" />
        <button
          onClick={() => {
            console.log(this.pref.current);
            this.pref.current.style.background = "yellow";
            this.pref.current.innerText = "test changed by event";
          }}
        >
          get result
        </button>
      </div>
    );
  }
}

export default Refs;
