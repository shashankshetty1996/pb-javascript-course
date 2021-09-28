// async and await
const promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		const num = Math.ceil(Math.random() * 10);
		resolve(num);
	}, 1000);
});

function guessANum() {
	// promise
	// 	.then(function (num) {
	// 		console.log(num);
	// 		if (num % 2 === 0) {
	// 			return "even";
	// 		} else {
	// 			return "odd";
	// 		}
	// 	})
	// 	.then(function (data) {
	// 		console.log(data);
	// 	})
	// 	.catch(function (err) {
	// 		console.log(err);
	// 	});
	// const result = promise
	// 	.then(function (num) {
	// 		console.log(num);
	// 		if (num % 2 === 0) {
	// 			return "even";
	// 		} else {
	// 			return "odd";
	// 		}
	// 	})
	// 	.catch(function (err) {
	// 		console.log(err);
	// 	});
	// result
	// 	.then(function (data) {
	// 		console.log(data);
	// 	})
	// 	.catch(function (err) {
	// 		console.log(err);
	// 	});
}

// guessANum();

function resolveAfter2Seconds() {
	const promise = new Promise((resolve) => {
		setTimeout(() => {
			resolve("resolved");
		}, 2000);
	});

	return promise;
}

function prom() {
	const promise = resolveAfter2Seconds();
	console.log(1);
	promise.then(function (data) {
		console.log(data);
	});
	console.log(2);
}
// prom();

async function asyncCall() {
	const promise = resolveAfter2Seconds();
	console.log(1);
	const data = await promise;
	console.log(2);
	console.log(data);
	console.log(3);
}

// asyncCall();

// async function asyncCall() {
//   console.log('calling');
//   const result = await resolveAfter2Seconds();
//   console.log(result);
//   // expected output: "resolved"
// }

// asyncCall();

// setTimeout(function () {
// 	console.log("setTimeout called here");
// }, 2000);
// const interval = setTimeout(function () {
// 	console.log("setTimeout with cancel");
// }, 2000);

// clearTimeout(interval);
// function updateUI(){}

// const interval = setInterval(function () {
// 	console.log("Hello again");
// }, 1000);

// clearInterval(interval);
