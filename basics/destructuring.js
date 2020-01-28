const sandwich = {
  bread: "dutch crunch",
  meat: "tuna",
  cheese: "swiss",
  toppings: ["lettuce", "tomato", "mustard"]
};
// object destructuring
let { bread, meat } = sandwich;
console.log(bread, sandwich);
bread = "garlic"; // temporary
bread = "pepper"; // temporary
bread = "chilly"; // temporary

sandwich.bread = bread;
console.log(bread, sandwich);

// sandwich.bread = "garlic";

// console.log(sandwich);
// console.log(sandwich.bread, sandwich.meat, sandwich.cheese, sandwich.toppings);

// var cart = [
//   {
//     product: "x",
//     color: "blue"
//   },
//   {
//     product: "y",
//     color: "red"
//   }
// ];

// const address1 = {
//     drno: 12,
//     apartment: 'my villa',
//     street: 'down street',
//     city: 'New York',
//     country: 'US'
// };
// const address2 = {};
