let a = 5;
let b = a; // copying only values - primitive
console.log(a, b);
b = 10;
console.log(a, b);

let myfav = { color: "white", food: "sandwich", car: "bmw" };
// let yourfav = myfav; // copying the memory - reference - mutate
let yourfav = { ...myfav, holiday: "ooty" }; // spread operator - immutable
// yourfav.holiday = "ooty"; //
console.log(myfav, yourfav);
yourfav.car = "mercedes";
console.log(myfav, yourfav);

let mycourses = ["php", "java", "javascript"];
// let yourcourses = mycourses;
// console.log(mycourses, yourcourses);
let yourcourses = [...mycourses, "react"];
// yourcourses.push("react");
console.log(mycourses, yourcourses);
