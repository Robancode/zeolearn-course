// class definition
class Rectangle {
  // data members
  length: number;
  breadth: number;

  constructor() {
    console.log("constructor called");
  }
  // member functions - methods
  area = () => {
    const area = this.length * this.breadth;
    console.log(area);
  };
  perimeter = () => {
    const perimeter = 2 * (this.length + this.breadth);
    console.log(perimeter);
  };
}
// create instance of class
let rect = new Rectangle(); // rect -> object 1850
let rect2 = new Rectangle(); //2020
// rect.length = 45;
// rect.breadth = 56;
// rect.area();
// rect.perimeter();
