class Calculator {
  // data members
  //   numberOne: number;
  //   numberTwo: number;
  //   numberThree?: number;
  numbers?: Record<string, number>;
  //  result:number;

  // member functions
  add = () => {
    // this.result= this.numberOne + this.numberTwo;
    // let result = this.numberOne + this.numberTwo + this.numberThree;
    let result = Object.keys(this.numbers || {})
      .map(key => this.numbers[key])
      .reduce((total, number) => total + number, 0);
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
// calculatorTestRun.subtract();
// calculatorTestRun.multiply();
calculatorTestRun.numbers = {
  numberThree: 100,
  numberFour: 200
};

calculatorTestRun.add();
// questions:

// is there a way to auto gen the js file
// without running tsc file.ts each time?

// how can I allow for n number of inputs?

// linting says that Calculator is already declared in
// the .js file
