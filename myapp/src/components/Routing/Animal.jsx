import React, { Component, useState } from "react";

const Animal = props => {
  return (
    <div>
      <h1>Animal Component</h1>
      <h2>{props.match.params.name} selected</h2>
    </div>
  );
};
export default Animal;
