var Calculator = /** @class */ (function () {
    function Calculator() {
        var _this = this;
        // numberThree?: number;
        //  result:number;
        // member functions
        this.add = function () {
            // this.result= this.numberOne + this.numberTwo;
            var result = _this.numberOne + _this.numberTwo; //+ this.numberThree;
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
calculatorTestRun.add();
calculatorTestRun.subtract();
calculatorTestRun.multiply();
// questions:
// is there a way to auto gen the js file
// without running tsc file.ts each time?
// how can I allow for n number of inputs?
// linting says that Calculator is already declared in
// the .js file
