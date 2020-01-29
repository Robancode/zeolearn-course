let numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// let squares = [];
// numbers.forEach(number => {
//   squares.push(number * number);
// });

let squares = numbers.map(number => number * number); // immutable
squares.push(56);
console.log(squares, numbers);
