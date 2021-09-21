// What is DOM

// property of document (Not so important)
// console.dir(document);
// console.dir(document.URL);

// Selectors - id, class, tag, query
// const title = document.getElementById("title-banner");
// console.log(title);

// value
// console.log(title.textContent);
// console.log(title.innerText);
// console.log(title.innerHTML);

// title.innerHTML = "Let's learn DOM";
// title.textContent = "Let's learn DOM, today";
// title.textContent = "Let's learn DOM, <span>today</span>";
// title.innerText = "Let's learn DOM, <span>today</span>";
// title.innerHTML = "Let's learn DOM, <span>today</span>";

// by class
// const lis = document.getElementsByClassName("list-items");
// const lis = document.getElementsByTagName("li");
// const ul = document.getElementsByTagName("ul");
// console.log(ul);
// console.log(ul[0].textContent);
// console.log(ul[0].innerText);
// console.log(ul[0].innerHTML);

// console.log(lis[2].textContent);
// for (let i = 0; i < lis.length; i++) {
//   //   console.log(lis[i].innerHTML);
//   lis[i].style.color = "blue";
//   lis[i].style.backgroundColor = "#eaeaea";
// }

// querySelector
// const el = document.querySelector("#title");
// const el = document.querySelector(".list-items"); // only one
// console.log(el);

// const lis = document.querySelectorAll(".list-items");
// const lis1 = document.getElementsByClassName("list-items");
// console.log(lis);
// console.log(lis1);

// const lis = document.querySelectorAll(".list li");
// console.log(lis);

// Style
// Access DOM element
// const thridLi = document.querySelector(".list li:nth-child(3)");
// const fouthLi = document.querySelector(".list li:nth-child(4)");

// // mulpi
// thridLi.classList.remove("active");
// fouthLi.classList.add("active");

// Attributes
// const title = document.querySelector("#title-banner");
// console.log(title.getAttribute("title"));
// title.setAttribute("title", "Wow something new");
// console.log(title.getAttribute("title"));
