import React, { useState, useEffect } from "react";
import axios from "axios";

function Post() {
  const [formdata, setFormdata] = useState({
    formdata: { title: "", body: "", userid: "" }
  });

  const titleref = React.createRef();
  const bodyref = React.createRef();
  const useridref = React.createRef();
  const formHandler = e => {
    e.preventDefault(); // default will submit the form and reload page
    console.log(titleref.current.value);
    setFormdata({
      ...formdata,
      title: titleref.current.value,
      body: bodyref.current.value,
      userid: useridref.current.value
    });
  };

  useEffect(() => {
    axios
      .post("https://jsonplaceholder.typicode.com/posts", formdata)
      .then(data => console.log("Data recieves", data))
      .catch(err => console.log("Error occured", err));
  }, []);
  return (
    <div>
      <form onSubmit={formHandler}>
        {/*Js uses onSubmit for form submissions*/}
        <input ref={titleref} type="text" placeholder="title" />
        <br />
        <input ref={bodyref} type="text" placeholder="body" />
        <br />
        <input ref={useridref} type="text" placeholder="user id" />
        <button type="submit">Add Post</button>
      </form>
    </div>
  );
}

export default Post;
