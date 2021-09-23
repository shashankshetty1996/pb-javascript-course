// Event Delegation
// capturing and bubbling allow us to implement one of most powerful event handling patterns called event delegation.
const lis = document.querySelectorAll(".wrapper li");
// lis.forEach(function (li) {
//   //   console.log(li);
//   li.addEventListener("click", handler);
// });

document.querySelector(".wrapper").addEventListener("click", function (e) {
  //   console.log("Wrapper click");
  //   console.log(e);
  const entry = e.target.dataset.entry;
  console.log(entry);
});

// function handler(e) {
//   //   const entry = e.target.getAttribute("data-entry");
//   const entry = e.target.dataset.entry;
//   //   console.log(e.target.dataset.entry);
//   //   console.log(e.target.getAttribute("data-entry"));
//   console.log(entry);
// }
