var Rectangle = (function () {
    function Rectangle() {
    }
    // member functions
    Rectangle.prototype.area = function () {
        var area = this.length * this.breadth;
        console.log(area);
    };
    Rectangle.prototype.perimeter = function () {
        var perimeter = 2 * (this.length + this.breadth);
        console.log(perimeter);
    };
    return Rectangle;
})();
var rect = new Rectangle();
rect.length = 45;
rect.breadth = 56;
rect.area();
rect.perimeter();
