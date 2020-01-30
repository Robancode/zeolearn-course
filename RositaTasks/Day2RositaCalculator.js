const calculate = (calculation = "add", x = 1, y = 2) => {
  if (calculation == "add") {
    console.log("adding " + (x + y));
  }
  if (calculation == "subtract") {
    console.log("subtrating " + (x - y));
  }
  if (calculation == "multiply") {
    console.log("multiplied " + x * y);
  }
};
calculate("subtract", 5, 3);
