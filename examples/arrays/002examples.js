// Higher order methods --- Very Very Important
// filter
// var arr = [1, 2, 3, 4, 5, 6];
// console.log(arr);

// var arr1 = new Array(10);
// console.log(arr1, arr1.length);

// fill
// var arr1 = [1, 2, 3, 4].fill(1);
// console.log(arr1);

// const arr = new Array(10);
// console.log(arr);
// [
//     undefined,
//     undefined,
//     undefined,
//     undefined,
//     undefined,
//     undefined,
//     undefined,
//     undefined,
//     undefined,
//     undefined,
//     100
// ]

// arr.push(100);
// for (var i = 0; i < arr.length; i++) {
//   //   console.log(i, arr[i]);
//   if (i === 0) {
//     arr[i] = 100;
//   }
// }

// console.log(arr);

// arr.forEach(function (value, index) {
//   console.log(value, index);
// });

// console.log(arr);

// arr1.forEach(function (value, index) {
//   arr1[index] = Math.floor(Math.random() * 100);
// });
// console.log(arr1);

// for (var index = 0; index < arr.length; index++) {
//   console.log(arr[index]);
// }

// callback function
// arr.forEach(function (i, j) {
//   console.log(i, j);
// });

// var evenArr = [];
// arr.forEach(function (value) {
//   if (value % 2 === 0) {
//     //   even number
//     evenArr.push(value);
//   }
// });
// console.log(evenArr);

// if return true, then that value/item will be there in return array
// if return false, then that value/item will not be there in return array
// var evenArr = arr.filter(function (value, index) {
//   return value % 2 === 0;
// });
// console.log(evenArr);

// var pass = ["m", "f", "f", "f", "m", "m"];
// var femalePass = pass.filter(function (value) {
//   return value === "f";
// });
// console.log(pass);
// console.log(femalePass);

// TASK: Find number of element whose value are more then 100.

// map
// var doubleArr = arr.map(function(value) {
//     return value * 2;
// });
// console.log(doubleArr);

// var newArr = arr.map(function (value, idx) {
//   // odd - 0 && even same (for index)
//   if (idx % 2 === 0) {
//     // even
//     return value;
//   }
//   return 0;
// });

// console.log(newArr);
// TASK: using map create array of 10 items with random numbers in it.

// reduce
// TASK: Find number of item in a array. Whose last digit are divisible by 2.
// var sum = 0;
// arr.forEach(function (value) {
//   sum = sum + value;
// });
// console.log(sum);

// var sum = arr.reduce(function (acc, value) {
//   acc = acc + value;
//   return acc;
// }, 0);
// console.log(sum);

// var pass = ["m", "f", "f", "f", "m", "m"];
// var onlyFemale = pass.filter(function (value) {
//   return value === "f";
// });
// var onlyFemale = onlyFemale.map(function (value) {
//   return "female";
// });

// var onlyFemale = pass.reduce(function (result, value) {
//   if (value === "f") {
//     result.push("female");
//   }
//   return result;
// }, []);
// ["female", "female", "female"];
// var onlyFemale = pass.reduce(function (acc, gender) {
//   if (gender === "f") {
//     acc.push("female");
//   }
//   return acc;
// }, []);
// console.log(pass);
// console.log(onlyFemale);

// splice
// TASK: Delete all numbers from list which are divisible by 5
// var animals = ["ant", "cat", "camel", "duck", "elephant"];
