import React, { Component } from "react";
class userValidation extends Component {
  state = { firstname: "", secondname: "", password: "" };
  firstnameRef = React.createRef();
  secondnameRef = React.createRef();
  passwordRef = React.createRef();
  pref = React.createRef();

  render() {
    return (
      <div>
        <p>
          <label>First Name</label>
          <input type="text" ref={this.firstnameRef} />
          <button
            onClick={() => {
              if (this.firstnameRef.current.value.length < 3) {
                window.alert("username too short");
              } else {
                this.setState({ firstname: this.firstnameRef.current.value });
              }
            }}
          >
            submit firstname
          </button>
        </p>
        <p ref={this.pref}>
          <label>Second Name</label>
          <input type="text" ref={this.secondnameRef}></input>
          <button
            onClick={() => {
              if (this.secondnameRef.current.value.length < 3) {
                this.pref.current.style.background = "yellow";
                window.alert("secondname too short");
              } else {
                this.setState({ secondname: this.secondnameRef.current.value });
              }
            }}
          >
            submit second name
          </button>
        </p>
      </div>
    );
  }
}

export default userValidation;
