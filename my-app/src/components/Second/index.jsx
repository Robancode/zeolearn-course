import React from "react";

function Second() {
  const greeting = "hello";
  return (
    <React.Fragment>
      <h2>This is second component {greeting}</h2>
      <Third />
    </React.Fragment>
  );
}

function Third() {
  const greeting = "good morning";
  return <h2>{greeting}</h2>;
}
export default Second;
