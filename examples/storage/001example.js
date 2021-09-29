// local storage - forever storage
// Insert into localStorage
// localStorage.setItem("secret", "Actually this is my last js only");

// access key into localStorage.
// console.log(localStorage.getItem("secret"));

// Delete an key
// localStorage.removeItem("secret");

// removal all;
// localStorage.clear()

// console.log(localStorage.getItem("secret"));

// username --> in localStorage

// localStorage.setItem("username", "_shashankshetty");
// skills ---> ["javascript", "react"];
// const skills = ["javascript", "react"];

// Very important
// JSON.stringify => any datatype to string
// JSON.parse => any stringify string to datatype

// localStorage.setItem("skills", JSON.stringify(skills));

// const username = localStorage.getItem("username");
// console.log(username);

// const lsSkills = localStorage.getItem("skills");
// console.log(lsSkills, typeof lsSkills);
// const parsedSkills = JSON.parse(lsSkills);
// console.log(parsedSkills, typeof parsedSkills);
// console.log(`Number of skills are: ${parsedSkills.length}`);

// session storage
// add into sessionStorage
// sessionStorage.setItem("key", "tata bye bye");

// access item
// const res = sessionStorage.getItem("key");
// console.log(res);

// delete item
// sessionStorage.removeItem("key");
// console.log(sessionStorage.getItem("key"));

// cookie
// const currentDate = new Date();
// console.log(currentDate);

// const twoMinuteFuture = new Date(currentDate.getTime() + 1000 * 60 * 2);
// console.log(twoMinuteFuture);

// document.cookie = "supratim=awesome";

// document.cookie = `supratim=awesome; expires=${twoMinuteFuture}`;

// TODO
// Medium blog user signup pop-up removal

// function newPromise() {
// 	return new Promise((resolve, reject) => {
// 		// resolve("yo working");
// 		reject("This is a error");
// 	});
// }

// async function asyncFn() {
// 	try {
// 		const data = await newPromise();
// 		console.log(data);
// 	} catch (error) {
// 		console.log(error);
// 	}
// }

// asyncFn();
