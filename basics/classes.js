// class definition
var Rectangle = /** @class */ (function () {
    function Rectangle() {
        var _this = this;
        // member functions - methods
        this.area = function () {
            var area = _this.length * _this.breadth;
            console.log(area);
        };
        this.perimeter = function () {
            var perimeter = 2 * (_this.length + _this.breadth);
            console.log(perimeter);
        };
        console.log("constructor called");
    }
    return Rectangle;
}());
// create instance of class
var rect = new Rectangle();
var rect2 = new Rectangle();
// rect.length = 45;
// rect.breadth = 56;
// rect.area();
// rect.perimeter();
