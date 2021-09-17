// this - recap

// var obj = {
//   firstName: "shashank",
//   greet: function () {
//     console.log(this);
//     console.log("Hello", this.firstName);
//   },
// };

// obj.greet();

// console.log(this);

// var a = 10;
// console.log(this.a);
// console.log(window.a);

// console.log(window);

// bind, call, apply
// var firstName = "Soumya";

// var obj = {
//   firstName: "Paritosh",
// };

// var obj1 = {
//   firstName: "Rahul",
//   lastName: "Shrestha",
//   greet: function (argument1) {
//     console.log(this);
//     console.log("Hello", this.firstName, "By", argument1);
//     // console.log("Hello", this.firstName, this.lastName);
//   },
// };

// obj1.greet("Zuber");
// var fn = obj1.greet.bind(obj);
// fn("Zuber");
// var fn = obj1.greet.bind(obj, "Parneet");
// fn();
// window.greet();

// call
// obj1.greet.call(obj);
// obj1.greet.call(obj, "aakash");

// apply
// obj1.greet.apply(obj, ["aakash"]);
