// Promise
// A Promise is an object representing the eventual completion or failure of an asynchronous operation.
// const promise = new Promise(function (resolve, reject) {
//   //   console.log("Hello inside promise");

//   setTimeout(() => {
//     resolve("Resolved after 1sec");
//   }, 1000);

//   // For example sake, I'm giving async operation
//   setTimeout(() => {
//     reject("This is too slow");
//   }, 2000);
//   //   async ----

//   //   resolve("I want to enjoy weekends");
//   //   reject("I want to enjoy weekends");
// });

// // if resolve => then , if reject => catch by Ashish
// promise
//   .then(function (data) {
//     console.log("Inside then block");
//     console.log(data);
//   })
//   .catch(function (data) {
//     console.log("Inside catch block");
//     console.log(data);
//   });

// age > 13 -> allowed to movie, else you'll be kicked out.

// const isAllow = new Promise((resolve, reject) => {
//   setTimeout(function () {
//     const age = Math.ceil(Math.random() * 100);

//     console.log(`Age is ${age}`);
//     if (age < 18) {
//       reject("Not allowed");
//     } else {
//       resolve("Allowed");
//     }
//   }, 3000);
// });

// isAllow
//   .then(function (data) {
//     console.log("Resolve was called");
//     console.log(data);
//   })
//   .catch(function (err) {
//     console.log("Reject was called");
//     console.log(err);
//   })
//   .finally(function () {
//     console.log("I'll be called no matter resolve or reject");
//   });

// Syntax

// Bonus section error handle with then block
