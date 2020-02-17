import React, { Component } from "react";
import { addArticle } from "./js/actions/index";
import { connect } from "react-redux";

function mapDispatchToProps(dispatch) {
  return { addArticle: article => dispatch(addArticle(article)) };
}

class ConnectedForm extends Component {
  state = {};
  formHandler = e => {
    e.preventDefault();
    const { title } = this.state;
    this.props.addArticle({ title });
    this.setState({ title: "" });
  };
  changeHandler = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  render() {
    const { title } = this.state;
    return (
      <form onSubmit={this.formHandler}>
        <label htmlFor="">Title</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={this.changeHandler}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

const Form = connect(null, mapDispatchToProps)(ConnectedForm);
export default Form;
