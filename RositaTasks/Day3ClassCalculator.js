var Calculator = /** @class */ (function () {
    function Calculator() {
        var _this = this;
        //  result:number;
        // member functions
        this.add = function () {
            // this.result= this.numberOne + this.numberTwo;
            // let result = this.numberOne + this.numberTwo + this.numberThree;
            var result = Object.keys(_this.numbers || {})
                .map(function (key) { return _this.numbers[key]; })
                .reduce(function (total, number) { return total + number; }, 0);
            console.log(result);
        };
        this.subtract = function () {
            var result = _this.numberOne - _this.numberTwo;
            console.log(result);
        };
        this.multiply = function () {
            var result = _this.numberOne * _this.numberTwo;
            console.log(result);
        };
    }
    return Calculator;
}());
// create instance of class with
var calculatorTestRun = new Calculator();
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
