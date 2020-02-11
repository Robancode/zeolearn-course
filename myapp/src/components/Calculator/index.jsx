import React, { Component } from "react";

class Calculator extends Component {
  constructor(props) {
    super(props);
    //how do we define a blank number?
    this.state = { value: 0, valueTwo: 0, answer: 0 };
    this.handleChange = this.handleChange.bind(this);
    //needs refactoring
    this.handleChangeTwo = this.handleChangeTwo.bind(this);
    // this.handleSubmitTwo = this.handleSubmitTwo.bind(this);
  }
  handleChange(e) {
    this.setState({ value: e.target.value });
  }
  handleChangeTwo(e) {
    this.setState({ valueTwo: e.target.value });
  }

  add = () => {
    this.setState({
      answer: parseInt(this.state.value) + parseInt(this.state.valueTwo)
    });
    console.log(this.state.answer);
  };
  subtract = () => {
    this.setState({
      answer: parseInt(this.state.value) - parseInt(this.state.valueTwo)
    });
    console.log(this.state.answer);
  };
  multiply = () => {
    this.setState({
      answer: parseInt(this.state.value) * parseInt(this.state.valueTwo)
    });
  };

  render() {
    return (
      <div
        style={{
          margin: "auto",
          width: "50%",
          padding: 50,
          textAlign: "center"
        }}
      >
        <form>
          <input
            type="number"
            name="first number"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <input
            type="number"
            name="second number"
            value={this.state.valueTwo}
            onChange={this.handleChangeTwo}
          />
        </form>
        <button onClick={this.add}>Add</button>
        <button onClick={this.multiply}>Multiply</button>
        <button onClick={this.subtract}>Subtract</button>
        <h1>the answer is {this.state.answer}</h1>
      </div>
    );
  }
}

export default Calculator;
