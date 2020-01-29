// function printhello() {
//   console.log("hello");
// }
// function printhola() {
//   console.log("hola");
// }
// // synchronous
// // printhello();
// // printhola();
// // asynchronous
// setTimeout(printhello, 1000);
// setTimeout(printhola, 500);
greet = () => console.log("hi");

// add = (a, b, callback) => {
//   setTimeout(() => console.log(a + b), 3000);
//   callback();
// };
// add(45, 32, greet);

function add2(x, y) {
  console.log(x + y);
  greet();
}
add2(234, 234);
