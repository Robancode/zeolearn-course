import React, { Component } from "react";
class Onchange extends Component {
  state = {
    form: { username: "john", email: "asdf@asdf.com", phone: "23423423" }
  };
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.form.username}
          onChange={event => {
            console.log(event.target.value);
            this.setState({
              form: { ...this.state.form, username: event.target.value }
            });
          }}
        />
        <input
          type="text"
          value={this.state.form.email}
          onChange={event => {
            console.log(event.target.value);
            this.setState({
              form: { ...this.state.form, email: event.target.value }
            });
          }}
        />
        <input
          type="text"
          value={this.state.form.phone}
          onChange={event => {
            console.log(event.target.value);
            this.setState({
              form: { ...this.state.form, phone: event.target.value }
            });
          }}
        />
        <button
          onClick={() => {
            this.setState({ username: "alex" });
          }}
        >
          change name
        </button>
      </div>
    );
  }
  componentDidUpdate(prevProps, prevState) {
    console.log(this.state.form);
  }
}

export default Onchange;
