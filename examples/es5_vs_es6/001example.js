// var, let and const
// year 2015 - ES6

// tata bye bye to var!
// console.log(a);
// temporal dead zone - access variable before declare throws error incase of let and const.
// let a;
// a = 10;
// let a = 10;

// console.log(a);

// const - declare and initialize the variable together. re-initialization will throw error
// const a = 10; //valid
// const b = 20;
// b = 5; // error
// const c; // error

// Do NOT
// ==     ===
// var    let and const

// 1hr  - 60 min, 1 min - 60 sec, 1 sec - 1000ms
// console.log("Started");
// // Event Loop
// setTimeout(function () {
//   console.log("Hello, I came late to party!");
// }, 5000);
// console.log("Hello");

// function sayHi(i) {
//   console.log("HI", i);
// }

// 3 iteration.
// for (var i = 1; i <= 3; i++) {
//   //   sayHi(i);
//   setTimeout(function () {
//     console.log("timer", i);
//   }, 2000 * i);
//   console.log("Normal me", i, j);
// }
// let j = 2;
// for (let i = 1; i <= 3; i++) {
//   //   sayHi(i);
//   setTimeout(function () {
//     console.log("timer", i);
//   }, 2000 * i);
//   console.log("Normal me", i, j);
// }

// console.log("hello");
// console.log("Hey value of i is: ", i);

// fat arrow function
// const fn = function () {
//   console.log("im fn");
// };
// const fn = () => {
//   console.log("im arrow fn");
// };
// fn();

// const total = (num1, num2) => num1 + num2;
// let total1 = (num1, num2) => {
//   return num1 + num2;
// };

// console.log(total(5, 3));
// console.log(total(4, 5));

// const obj = {
//   fullName: "Shashank Shetty",
//   username: "_shashankshetty",
//   fn: function () {
//     console.log(this);
//     const obj1 = {
//       sm: () => console.log(this),
//       smFn: function () {
//         console.log(this);
//       },
//     };
//     return obj1;
//   },
//   arrow: () => {
//     // Doesn't change value of this
//     console.log(this);
//     const obj1 = {
//       sm: () => console.log(this),
//       smFn: function () {
//         console.log(this);
//       },
//     };
//     return obj1;
//   },
// };

// const ref = obj.arrow();
// const ref = obj.fn();
// ref.sm();
// ref.smFn();
// obj.fn1();

// console.log(total1(4, 5));

// cloning array and object
