import React, { Component, useState } from "react";

const List = props => {
  return (
    <div>
      <h2>Don't forget {props.match.params.name}!</h2>
    </div>
  );
};
export default List;
