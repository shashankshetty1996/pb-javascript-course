// How to initialize object (Object literals)
// key - unique - basic (string, number)
// value - data which are asso to the key, (number, string, boolean, object, array, function)
// var obj = {
//   name: "Shashank",
//   age: 25,
//   skills: ["javascript", "react", "node"],
//   "full name": "Shashank",
// };
// console.log(obj);

// Dot and Box notation
// console.log(obj.name);
// console.log(obj["name"]);
// console.log(obj["full name"]);

// Adding new entry
// obj.height = "182 cm";
// obj.name = "Aditya";
// obj["weight"] = 80;
// console.log(obj);

// Dynamic adding key
// var height = "full height";
// obj[height] = 160;
// var height = "height";
// console.log(obj);
// var room = { [height]: 30 };
// console.log(room);

// Deleting key from object
// delete obj["full name"];

// var skills = obj.skills;
// skills.pop();
// obj.skills = skills;

// console.log(obj);
// Accessing data within the object
// var firstName = "Hariom";
// var obj = {
//   firstName: "Shashank",
//   lastName: "Shetty",
//   age: 25,
//   skills: ["javascript", "react", "node"],
//   greet: function () {
//     console.log(this);
//     console.log("Hello", this.firstName);
//     // console.log("Hello ", this.firstName);
//   },
// };
// var obj1 = {
//   firstName: "Paritosh",
//   lastName: "Shetty",
//   age: 25,
//   skills: ["javascript", "react", "node"],
//   greet: function () {
//     console.log(this);
//     console.log("Hello ", this.firstName);
//   },
// };

// console.log(obj);
// console.log(obj.age); // object property
// obj.greet(); // object method

// Get all the keys and values in the object
// var keysArr = Object.keys(obj);
// console.log(keysArr);
// console.log(typeof null);
// console.log(typeof keysArr);
// console.log(Array.isArray(keysArr)); // array - true
// console.log(Array.isArray(obj)); // obj - false

// var valueArr = Object.values(obj);
// console.log(valueArr);

// destructuring
// var firstName = obj.firstName;
// var skills = obj.skills;

// var { firstName, skills, age } = obj;
// console.log(firstName);
// var { firstName: pName } = obj1;
// var pName = obj1.firstName;
// console.log(obj1);

// console.log(firstName, pName);
// console.log(skills);
// console.log(age);

// console.log(obj.middleName);
// var { middleName } = obj;
// console.log(middleName);

// Doubts
// var arr = ["f", "f", "m", "f", "m", "un"];

// number of f in the array
// var count = 0;
// for (var i = 0; i < arr.length; i++) {
//   if (arr[i] === "f") {
//     count++;
//   }
// }

// reduce
// var count = arr.reduce(function (result, value) {
//   if (value === "f") {
//     result += 1;
//   }

//   return result;
// }, 0);

// console.log(count);

// var listFemale = arr.reduce(function (result, value) {
//   if (value === "f") {
//     result.push("Female");
//   }

//   return result;
// }, []);

// console.log(listFemale);

// Splice
// var std = ["Fahad", "Soumya", "Rahul", "Viraj"];
// console.log(std);
// splice (position, noOfItemToBeDeleted, ...listOfItemToBeAdd)

// console.log(std.splice(1, 1));
// console.log(std);
// std.splice(1, 1, "Parneet", "Zuber");
// std.splice(1, 0, "Parneet", "Zuber");

// console.log(std);
// std.splice(2, 3);
// console.log(std);

// var arr = ["a", "f", "e"];
// console.log(arr);
// arr.splice(1, 1);
// console.log(arr);
// arr.splice(1, 2, "b", "c", "d");
// console.log(arr);

// [1, 2, 3, 4, 5]
// [1, 4, 9, 16, 25]

// var arr = [1, 2, 3, 4, 5];
// console.log(arr);
// var square = arr.map(function (value, index) {
//   return Math.pow(value, 2);
// });
// var ones = arr.map(function (value, index) {
//   return 1;
// });
// console.log(arr);
// console.log(square);
// console.log(ones);
// var evenArr = arr.filter(function (value, index) {
//   // true - then value will be present in result
//   // false - value won't be there,
//   var isEven = value % 2 === 0;
//   console.log(value, isEven);
//   return isEven;
// });

// console.log(evenArr);
