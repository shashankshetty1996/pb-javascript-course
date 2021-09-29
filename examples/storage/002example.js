// "Write callback function to print numbers from 1 to 7, in which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on.

// Explain callback hell.
// Numbers
// 1 - 1s
// 2 - 3s
// 3 - 6s
// 4 - 10s
// 5 - 15s
// 6 - 21s
// 7

// 1 to 7 - loop
// setTimeout - every using timer

// function printing(i, timer) {
// 	setTimeout(function () {
// 		console.log(i);
// 	}, timer);
// }

// let timer = 0;
// for (let i = 1; i <= 7; i++) {
// 	timer = timer + i * 1000;
// 	printing(i, timer);
// }

// Say no to var
// function printnum(n) {
// 	for (let i = 1; i <= n; i++) {
// 		setTimeout(() => {
// 			console.log(i);
// 		}, i * 1000);
// 	}
// }
// printnum(7);
