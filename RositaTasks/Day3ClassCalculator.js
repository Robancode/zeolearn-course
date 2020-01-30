var Calculator = /** @class */ (function () {
    function Calculator() {
        var _this = this;
        //  result:number;
        // member functions
        this.add = function () {
            // this.result= this.numberOne + this.numberTwo;
            var result = _this.numberOne + _this.numberTwo + _this.numberThree;
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
