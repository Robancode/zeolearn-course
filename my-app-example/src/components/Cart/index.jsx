import React, { Component } from "react";
import { items } from "./items";
import Item from "./item";
class Cart extends Component {
  state = { items: items };
  render() {
    console.log(this.state.items);
    return (
      <div>
        <h2>Items in cart</h2>
        {this.state.items.map(item => (
          <Item key={item.id} item={item} handleclick={this.clickHandler} />
        ))}
      </div>
    );
  }
  clickHandler = (action, id) => {
    switch (action) {
      case "add":
        console.log("adding item to " + id);
        let currentitems = [...this.state.items];
        currentitems.forEach(item => {
          if (item.id == id) {
            item.quantity++;
          }
        });
        console.log(currentitems);
        this.setState({ items: currentitems });
        break;
      case "remove":
        console.log(`removing item from ${id}`);
        let currentitems1 = [...this.state.items];
        currentitems1.forEach(item => {
          if (item.id == id && item.quantity > 0) {
            item.quantity--;
          }
        });
        console.log(currentitems1);
        this.setState({ items: currentitems1 });

        break;
    }
  };
}

export default Cart;
