import React, { Component, useState } from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div>
      <h2>About Page</h2>
      <p>
        Lorem ipsum dolor sit amet <Link to="/contact">Contact</Link>consectetur
        adipisicing elit. Minus iste sunt inventore hic vero accusamus eos ad
        quidem perferendis tempore velit provident, repudiandae at in incidunt
        fuga officiis autem fugit?
      </p>
    </div>
  );
}

export default About;
