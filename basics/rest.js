// adder = numbers => {
//   let length = numbers.length;
//   let sum = 0;

//   //   for (let index = 0; index < length; index++) {
//   //     sum = sum + numbers[index];
//   //   }
//   //   console.log("done with for loop");
//   //   return sum;
//   let result = numbers.forEach(function(number) {
//     sum = sum + number;
//   });
//   //   setTimeout(function() {
//   //     console.log("done with foreach", result);
//   //   }, 4000);
//   return sum;
// };
// // let numbers = [1, 2, 3, 4, 5];
// // console.log(adder(numbers));

function adder(...numbers) {
  // rest opertator
  let sum = 0;
  numbers.forEach(function(number) {
    sum = sum + number;
  });
  return sum;
}
console.log(adder(1, 2, 3, 4, 5, 34, 23, 534, 232));
