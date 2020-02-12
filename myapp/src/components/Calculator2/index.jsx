import React, { Component } from "react";
import "./index.css";
import Button from "./components/Button";
import Input from "./components/Input";
import ClearButton from "./components/ClearButton";

class Calculator2 extends Component {
  state = {
    input: "",
    previousNumber: "",
    currentNumber: "",
    operator: ""
  };
  addToInput = val => {
    this.setState({ input: this.state.input + val });
  };

  addZeroToInput = val => {
    //if this state input is not empty, then add zero
    if (this.state.input !== "") {
      this.setState({ input: this.state.input + val });
    }
  };

  addDecimalToInput = val => {
    // only add decimal if there is no decimal in the current input area
    if (this.state.input.indexOf(".") === -1) {
      this.setState({ input: this.state.input + val });
    }
  };

  clearInput = () => {
    this.setState({ input: "" });
  };

  add = () => {
    this.state.previousNumber = this.state.input;
    this.setState({ input: "" });
    this.state.operator = "plus";
  };

  subtract = () => {
    this.state.previousNumber = this.state.input;
    this.setState({ input: "" });
    this.state.operator = "subtract";
  };

  multiply = () => {
    this.state.previousNumber = this.state.input;
    this.setState({ input: "" });
    this.state.operator = "multiply";
  };

  divide = () => {
    this.state.previousNumber = this.state.input;
    this.setState({ input: "" });
    this.state.operator = "divide";
  };
  evaluate = () => {
    this.state.currentNumber = this.state.input;

    switch (this.state.operator) {
      case "plus":
        this.setState({
          input:
            parseInt(this.state.previousNumber) +
            parseInt(this.state.currentNumber)
        });
        break;
      case "subtract":
        this.setState({
          input:
            parseInt(this.state.previousNumber) -
            parseInt(this.state.currentNumber)
        });
        break;
      case "multiply":
        this.setState({
          input:
            parseInt(this.state.previousNumber) *
            parseInt(this.state.currentNumber)
        });
        break;
      case "divide":
        this.setState({
          input:
            parseInt(this.state.previousNumber) /
            parseInt(this.state.currentNumber)
        });
        break;
    }
  };
  render() {
    return (
      <div className="Index">
        <div className="calc-wrapper">
          <div className="row">
            <Input>{this.state.input}</Input>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>7</Button>
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>9</Button>
            <Button handleClick={this.divide}>/</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>6</Button>
            <Button handleClick={this.multiply}>*</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
            <Button handleClick={this.add}>+</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addDecimalToInput}>.</Button>
            <Button handleClick={this.addZeroToInput}>0</Button>
            <Button handleClick={this.evaluate}>=</Button>
            <Button handleClick={this.subtract}>-</Button>
          </div>
          <div className="row">
            <ClearButton handleClear={this.clearInput}>Clear</ClearButton>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator2;
