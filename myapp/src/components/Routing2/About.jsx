import React, { Component } from "react";
import { Link } from "react-router-dom";
class About extends Component {
  state = {};
  render() {
    return (
      <>
        <h2>About page</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.{" "}
          <Link to="contact">contact</Link>Delectus aperiam maiores,
          necessitatibus, ea reprehenderit corporis iusto deleniti illum neque
          dolorem odio illo quibusdam, fuga accusamus aliquam ducimus reiciendis
          est dicta.
        </p>
      </>
    );
  }
}

export default About;
