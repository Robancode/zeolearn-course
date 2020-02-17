import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Animal from "./Animal";
class Animals extends Component {
  state = {
    links: [
      { id: 1, link: "dog" },
      { id: 2, link: "cat" },
      { id: 3, link: "horse" },
      { id: 4, link: "tiger" }
    ]
  };
  inputref = React.createRef();
  addAnimal = () => {
    this.setState({
      links: [
        ...this.state.links,
        { id: this.state.links.length + 1, link: this.inputref.current.value }
      ]
    });
  };
  render() {
    return (
      <div>
        <h2>Animals</h2>
        <input ref={this.inputref} type="text" />
        <button onClick={this.addAnimal}>Add</button>
        <Router>
          <ul>
            {this.state.links.map(link => (
              <Link key={link.id} to={"/animals/" + link.link}>
                <li>{link.link}</li>
              </Link>
            ))}
            {/* <Link to="/animals/cat">
              <li>Cat</li>
            </Link>
            <Link to="/animals/horse">
              <li>Horse</li>
            </Link> */}
          </ul>
          <div style={{ background: "red" }}>
            <Route path="/animals/:name" component={Animal} />
            {/* <Route path="/animals/cat" render={() => <Animal animal="cat" />} />
            <Route
              path="/animals/horse"
              render={() => <Animal animal="horse" />}
            /> */}
          </div>
        </Router>
      </div>
    );
  }
}

export default Animals;
