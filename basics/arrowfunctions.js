// tradtional function
// function add() {
//   let a = 5;
//   let b = 6;
//   console.log(a + b);
// }

// creating function as a variable
// const add = function () {
//   let a = 5;
//   let b = 6;
//   console.log(a + b);
// };

// fat arrow functional - statement - inplace functions
const add = (greeting, x, y) => {
  let a = 5;
  let b = 6;
  if (x > 0) {
    a = x; // a = 4
  }
  if (y > 0) {
    b = y;
  }
  console.log(a, b, greeting, a + b);
};

const greetUser = (user = "alex", age = 18) =>
  // template strings
  console.log(`hello ${user} you are ${age} years old`);

add("result", 4, 0);
add("result*10", 40, 50);
greetUser("john", 34);
greetUser("krishna");
greetUser();

// task: implement a basic arthimetic calculator using arrow functions.

// calculator('add', 4,5);
// result is 9
