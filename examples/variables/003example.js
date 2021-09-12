// Note: To check data type of variables we can use typeof keyword in front of a variable
console.log(typeof num); // "number"
console.log(typeof firstName); // "string"
console.log(typeof isJavaScript); // "boolean"

var item;
console.log(typeof item); // "undefined"

item = null;
console.log(typeof item); // "object"

// Newer syntax of declaration.
let scope;
scope = true;

//
const MAX_AGE = 18;
MAX_AGE = 20; // Error
