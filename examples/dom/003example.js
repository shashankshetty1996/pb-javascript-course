// form
// Teaching note: (keydown, keyup, focus, blur, input, change) event and accessing value from input
// (function () {
//   const auth = [
//     {
//       name: "soumya",
//       password: "zuber is my gf",
//     },
//     {
//       name: "parneet",
//       password: "I don't like const",
//     },
//     {
//       name: "test",
//       password: "test",
//     },
//   ];

//   // Access all the DOM Element
//   const nameInput = document.querySelector("input[type='text']");
//   const passwordInput = document.querySelector("input[type='password']");
//   const btn = document.getElementById("btn");
//   const msg = document.getElementById("output");

//   // Add event listeners
//   btn.addEventListener("click", loginSubmit);
//   btn.addEventListener("submit", loginSubmit);

//   function loginSubmit(e) {
//     e.preventDefault();
//     const name = nameInput.value;
//     const password = passwordInput.value;

//     // let valid = false;
//     // auth.forEach((user) => {
//     //   if (
//     //     name.toLowerCase() === user.name.toLowerCase() &&
//     //     password === user.password
//     //   ) {
//     //     valid = true;
//     //     msg.innerHTML = `<h1>${name} is valid</h1>`;
//     //   }
//     // });
//     // if (!valid) {
//     //   msg.innerHTML = `<h1>${name} is invalid</h1>`;
//     // }

//     const isValidUser = auth.find((user) => {
//       return (
//         name.toLowerCase() === user.name.toLowerCase() &&
//         password === user.password
//       );
//     });

//     if (isValidUser) {
//       msg.innerHTML = `<h1>${name} is valid</h1>`;
//     } else {
//       msg.innerHTML = `<h1>${name} is invalid</h1>`;
//     }
//   }
// })();
// const nameInput = document.querySelector("input[type='text']");

// const handleEvent = (event) => {
//   console.log(event.type);
//   //   alert("Cheater copying now");
// };

// nameInput.addEventListener("keydown", handleEvent);
// nameInput.addEventListener("keyup", handleEvent);
// nameInput.addEventListener("copy", handleEvent);
// nameInput.addEventListener("cut", handleEvent);
// nameInput.addEventListener("paste", handleEvent);
// nameInput.addEventListener("input", handleEvent);
