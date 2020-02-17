import React, { Component } from "react";
import { Link } from "react-router-dom";
class About extends Component {
  state = {};
  render() {
    return (
      <div>
        <h2>About Page</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum nam
          asperiores aliquam illum laboriosam itaque reiciendis id maiores porro
          go to <Link to="/contact">Contact </Link> Contact in, adipisci
          distinctio cupiditate. Sit vitae rem beatae earum at!
        </p>
      </div>
    );
  }
}

export default About;
