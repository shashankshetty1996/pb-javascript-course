// Promise chaining
// Bonus interview question: Callback hell
const promise = new Promise((resolve, reject) => {
	// HOLD
	// reject("Oh, no now devdas mode on!");
	resolve("She: Like Soumya, forever!!!");
});

// console.log(promise);

// promise.then((data) => console.log(data)).catch((err) => console.log(err));

// const res = promise.then(function (data) {
// 	// console.log(data);
// 	// return "Soumya ki nikal padi";
// 	return 10;
// });
// // console.log(res);
// res.then(function (data) {
// 	console.log(data);
// });

// Promise chain - one is resulting another promise is called promise chain
// promise
// 	.then(function (data) {
// 		// console.log(data);
// 		return "Soumya ki nikal padi";
// 	})
// 	.then(function (data) {
// 		console.log(data);
// 	});

// promise
// 	.then(function (data) {
// 		console.log(data);
// 		return "Soumya ki nikal padi";
// 	})
// 	.then(function (res) {
// 		// After
// 		console.log(res);
// 		throw new Error("Kataaa!"); // custom error creation.
// 	})
// 	.catch(function (err) {
// 		// .catch ---> Error handling
// 		console.log(err);
// 	});

// state of promise

// Promise all
const promise1 = Promise.resolve("What is this?");
// what is this? (0)
// pending promise (1)
// fullfiled promise (2)
// console.log(promise1);
// promise1.then((data) => console.log(data));

const promise2 = new Promise((resolve, reject) => {
	setTimeout(function () {
		resolve("Any setTime promise");
		// reject("Oh, no, no no no");
	}, 2000);
});

// console.log(promise2);
// promise2.then(function (data) {
// 	console.log(data);
// });

// Promise.all([promise1, promise2])
// 	.then(function (data) {
// 		console.log(data);
// 	})
// 	.catch((err) => console.log(err));

// Promise race
const promise3 = new Promise((resolve) => {
	setTimeout(() => {
		resolve("I'm from promise 3");
	}, 3000);
});

// promise3.then((data) => console.log(data));
// Promise.race([promise2, promise3]).then((data) => console.log(data));

// Promise any homework (not used).
