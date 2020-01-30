class Calculator {
  // data members
  numberOne: number;
  numberTwo: number;
  numberThree?: number;
  //  result:number;

  // member functions
  add = () => {
    // this.result= this.numberOne + this.numberTwo;
    let result = this.numberOne + this.numberTwo + this.numberThree;
    console.log(result);
  };
  subtract = () => {
    let result = this.numberOne - this.numberTwo;
    console.log(result);
  };
  multiply = () => {
    let result = this.numberOne * this.numberTwo;
    console.log(result);
  };
}

// create instance of class with
let calculatorTestRun = new Calculator();
calculatorTestRun.numberOne = 23;
calculatorTestRun.numberTwo = 7;
calculatorTestRun.add();
calculatorTestRun.subtract();
calculatorTestRun.multiply();

// questions:

// is there a way to auto gen the js file
// without running tsc file.ts each time?

// how can I allow for n number of inputs?

// linting says that Calculator is already declared in
// the .js file
