function test() {
  var a = 9; // it has a function scope
  if (a > 5) {
    const c = 6; // block scope and cannot be changed
    // c = 7;
    var b = 6; // block scope
    console.log(a, c);

    console.log(a + " is greater than 5");
  }
  if (b > 5) {
    const c = 10;
    console.log(b, c);
    console.log(b + " is greater than 5");
  }
}

// console.log(a);
test();
