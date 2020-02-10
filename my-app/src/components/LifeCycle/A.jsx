import React, { Component } from "react";
import B from "./B";
class A extends Component {
  componentDidMount() {
    console.log("Component did mount of A called");
  }
  // state = {}
  constructor(props) {
    super(props);
    this.state = {
      number: 1,
      loader: "https://media.giphy.com/media/xTk9ZvMnbIiIew7IpW/giphy.gif",
      loading: false
    };
    console.log("Constructor of A called");
  }
  render() {
    console.log("render of A called");
    return (
      <div>
        <h2>Component A</h2>
        <h3>{this.state.number}</h3>
        <img
          src={this.state.loader}
          style={{ display: this.state.loading ? "block" : "none" }}
          alt=""
        />
        <button
          onClick={() => {
            this.setState({ number: this.state.number + 1, loading: true });
          }}
        >
          Click Me
        </button>
        {/* <button
          onClick={() => {
            this.setState({ loading: !this.state.loading });
          }}
        >
          Toggle Loader
        </button> */}
        {!this.state.loading ? <B number={this.state.number} /> : ""}
      </div>
    );
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("component did update of A called");
    console.log(this.state.loading, prevState.loading);
    //   this.state
    // this.setState({ loading: !this.state.loading });
    return;
  }
  componentWillUnmount() {
    console.log("component A will unmount");
  }
}

export default A;

// webserver - webserver.com/users/john

// { id: 3, username: 'john', email: 'asdf@ad.com', country: 'US'} -> JSON

// localhost

// username - john
// <div id="mydiv"></div>
//     button - GET info
// // jquery handler
// $('button').click(function () {
//         // ajax call
//     $.get('webserver.com/users/john', function (data) {
//         $('#mydiv').html('<span>data.email</span>');
//     })
//     })
