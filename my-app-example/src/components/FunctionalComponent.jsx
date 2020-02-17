import React from "react";

function FunctionComponent(props) {
  console.log(props);
  return (
    <div>
      <h2>Function Component Demo. {props.message}</h2>
    </div>
  );
}

export default FunctionComponent;
