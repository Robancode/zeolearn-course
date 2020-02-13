import React, { Component } from "react";
import Greeting from "./Greeting";
class Refs extends Component {
  state = { username: "john" };
  pref = React.createRef();
  inputref = React.createRef();
  usernameref = React.createRef();
  render() {
    return (
      <div>
        <Greeting username={this.state.username} />
        <label htmlFor="">User Name (with State)</label>
        <input
          type="text"
          value={this.state.username}
          onChange={e => {
            this.setState({ username: e.target.value });
          }}
        />
        <br />
        <label htmlFor="">User Name (with Refs)</label>
        <input type="text" ref={this.usernameref} />
        <button
          onClick={() => {
            if (this.usernameref.current.value.length < 4) {
              window.alert("invalid username");
            } else {
              this.setState({ username: this.usernameref.current.value });
            }
          }}
        >
          change username
        </button>
        <br />

        <p ref={this.pref}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          nostrum deleniti veritatis magni, nulla quod sunt aperiam! Ullam et
          sequi natus assumenda molestiae. Quia quos quidem, ducimus dolorum
          delectus veniam.
        </p>
        <input ref={this.inputref} type="text" />
        <button
          onClick={() => {
            console.log(this.pref.current);
            this.pref.current.style.background = "yellow";
            this.pref.current.innerText = this.inputref.current.value;
          }}
        >
          get result
        </button>
      </div>
    );
  }
}

export default Refs;
