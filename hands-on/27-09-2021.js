(function () {
	// const arr1 = [{
	//   id : 1,
	//   text : "todo1",
	// }]
	// const arr2 = [];
	// addtodo(arr1, "todo2");
	// // addtodo(arr1, "todo2");
	// addtodo(arr2, "zuber is good boy");
	// function addtodo(arr, text) {
	//     var counter = 0;
	//     arr.push({id : ++counter, text});
	// }
	// console.log(arr1);
	// console.log(arr2);
	// n-th of list (3)
	// structure same - [{ id: UNIQUE_NUMBER_AUTO_INCREMENT, text: STRING }]
	// const arr1 = initiator();
	// const arr2 = initiator();
	// const arr3 = initiator();
	// function initiator() {
	// 	const arr = [];
	// 	let counter = 0;
	// 	function addTodo(text) {
	// 		arr.push({ id: ++counter, text: text });
	// 	}
	// 	function deleteTodo(id) {}
	// 	function showArrayItems() {
	// 		console.log(arr);
	// 	}
	// 	// revealing modular pattern in js
	// 	return {
	// 		addTodo: addTodo,
	// 		showArrayItems: showArrayItems,
	// 	};
	// }
	// const add1 = initiator();
	// add1.addTodo("todo1");
	// add1.showArrayItems();
	// add1.addTodo("todo2");
	// add1.showArrayItems();
	// const add2 = initiator();
	// add2.addTodo("test 1");
	// add2.showArrayItems();
	// addTodo(arr1, text)
})();

(function () {
	// // bind
	// const person = {
	// 	firstName: "Shashank",
	// 	lastName: "Shetty",
	// 	fullName: function () {
	// 		// print fullname
	// 		return `${this.firstName} ${this.lastName}`;
	// 	},
	// };
	// const person1 = {
	// 	firstName: "Viraj",
	// 	lastName: "something",
	// };
	// let fun = person.fullName.bind(person1);
	// console.log(fun());
	// console.log(person.fullName.call(person1));
	// console.log(person.fullName());
	// function constructor
	// function person(firstName, lastName) {
	// 	this.firstName = firstName;
	// 	this.lastName = lastName;
	// 	this.fullName = function () {
	// 		console.log(`${this.firstName} ${this.lastName}`);
	// 	};
	// 	this.whatWasIt = function (arg1, arg2) {
	// 		// console.log(arguments);
	// 		console.log(arg1, arg2);
	// 	};
	// }
	// const rahul = new person("Rahul", "Shrestha");
	// rahul.fullName();
	// const aakash = new person("aakash", "pawar");
	// aakash.fullName();
	// const soumya = { firstName: "Soumya", lastName: "Banerjee" };
	// const soumyaFullName = rahul.fullName.bind(soumya);
	// soumyaFullName();
	// rahul.whatWasIt(1, "one");
	// rahul.whatWasIt.call(soumya, "something", "other thing", "nothing");
	// rahul.whatWasIt.apply(soumya, ["what is that", "other thing", "nothing"]);
	// function initiator(id) {
	// 	this.arr = [];
	// 	this.counter = 0;
	// 	this.id = id;
	// 	function addTodo(text) {
	// 		this.arr.push({ id: ++this.counter, text: text });
	// 	}
	// 	function showArrayItems() {
	// 		console.log(this.arr);
	// 	}
	// 	this.addTodo = addTodo;
	// 	this.showArrayItems = showArrayItems;
	// 	// // revealing modular pattern in js
	// 	// return {
	// 	// 	addTodo: addTodo,
	// 	// 	showArrayItems: showArrayItems,
	// 	// };
	// }
	// const add1 = new initiator("Add1");
	// add1.addTodo("todo1");
	// add1.showArrayItems();
	// add1.addTodo("todo2");
	// add1.showArrayItems();
	// const add2 = new initiator("add2");
	// add2.addTodo("test 1");
	// add2.showArrayItems();
	// const adder = add1.addTodo.bind(add2);
	// adder("test 1");
	// add1.showArrayItems();
	// add2.showArrayItems();
})();
