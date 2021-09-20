// Closure
// IIFE - Immediately Invoked Function Expression
// function fn() {
//   console.log("I'm inside fn");
// }

// fn();
// (function () {
//   console.log("I'm IIFE");
// })();

// (function findThis(arg1) {
//   console.log(a);
//   var a = 10;
//   console.log("I'm IIFE", arg1);
// })(", Hello IIFE");

// function findMe() {}

// console.log(window);

// Accessing outer scope
// (function () {
//   var firstName = "shashank";
//   console.log(firstName);
// })();

// var score = 0;
// function incr() {
//   score += 1;
//   console.log("called", score);
// }

// Memory leaks in variables and function due to global scope population.

// var b = 10;

// function sum(num1, num2) {
//   var total = num1 + num2;
//   console.log(total);
// }

// var score = 10;
// sum(1, b); // 11
// b = 20;
// sum(1, b); // 21

// // console.log(a);
// var a = 0;
// console.log(a, b); // 0, 20

// Nested function

// function sum(num1, num2) {
//   //   var total = num1 + num2;
//   //   return total;
//   return num1 + num2;
// }
// var result = sum(15, 10);
// console.log(result);

// function x() {
//   console.log("Hey i'm x, not your ex");
//   function y() {
//     console.log("hello i'm y, idk why i'm here");
//   }
//   y();
// }
// function outer() {
//   console.log("Hey i'm x, not your ex");
//   return function inner() {
//     console.log("hello i'm y, idk why i'm here!!!");
//   };
//   //   function inner() {
//   //     console.log("hello i'm y, idk why i'm here");
//   //   }
//   //   return inner;
// }

// function currying
// outer()();

// var fn = x();
// fn();

// var fn = x();
// console.log(fn);
// fn();

// x();

// x(5);
// x(4);

// Closure concept --- very important
// Teaching note: Showcase closure in devtools as well
// when a nested function is returned from a function, that nested function will bind it's lexical scope along with the function returned to it.

function outer() {
  var a = 10;
  function inner() {
    var b = 30;
    console.log(a, b);
  }
  a = 50;
  return inner;
}

var fn = outer();
console.log(fn);
fn();

// TODO: Pending topic cover (Arrow functions, Maps);
