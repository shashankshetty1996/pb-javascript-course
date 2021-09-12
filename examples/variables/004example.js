// Operations in JavaScript
// @reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators

// Arithmetic operators

// Comparison operators

// Bitwise operators

// logical operators

// Ternary operator

// Assignment operators

// post
var x = 2;
var y = x++;

// assign then increase the value by one - out x:3, y:2

// pre -
var x = 2;
var y = ++x;

// increase by 1 then assign - out x:3, y:3

// post dec
var x = 2;
var y = x--;

// out x: 1, y: 2

// pre desc
var x = 2;
var y = --x;

// out x: 1, y: 1

// condition statement
var age = 15;
if (age > 18) {
  console.log("Adult");
} else if (age > 13) {
  console.log("in High school");
} else {
  console.log("Do your homework kid!!!!");
}
// console.log("wow, mom cooked good dinner now");

var res =
  age > 18 ? "Adult" : age > 13 ? "in High school" : "Do your homework kid!!!!";
console.log(res);

var age = 20;
var isAdult;
if (age >= 18) {
  isAdult = true;
} else {
  isAdult = false;
}

//
var isAdult = age >= 18 ? true : false;

var month = 2;
switch (month) {
  case 1:
    console.log("Jan");
    break;
  case 2:
    console.log("Feb");
    break;
  case 3:
    console.log("Mar");
  case 4:
    console.log("Apr");

  default:
    console.log("Not 1st 4");
    break;
}

var currentMonth = 9;
var birthdayMonth = 9;
if (birthdayMonth == currentMonth) {
  console.log("This is you're birthday");
}
