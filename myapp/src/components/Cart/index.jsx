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
          <Item key={item.id} item={item} handleClick={this.clickHandler} />
        ))}
      </div>
    );
  }
  // based on the action, i want to do something with the id
  clickHandler = (action, id) => {
    switch (action) {
      case "add":
        console.log("adding item to " + id);
        //get instance of state and save into new variable
        //spread operator makes the state immutable
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
        let currentitems2 = [...this.state.items];
        currentitems2.forEach(item => {
          if (item.id == id && item.quantity > 0) {
            item.quantity--;
          }
        });
        console.log(currentitems2);
        this.setState({ items: currentitems2 });
        console.log(`removing item from ${id}`);
        break;
    }
  };
}

export default Cart;
