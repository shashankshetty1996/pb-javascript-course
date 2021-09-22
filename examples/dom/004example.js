// Event Propagation Bubbling Capture
const outer = document.querySelector("#outer"); // blue box
const inner = document.querySelector("#inner"); // grey box
const vinner = document.querySelector("#very-inner"); // grey box

/*
<div id="outer">
    <div id="inner">
        <div id="very-inner"></div>
    </div>
</div>
*/

// Bubbling - event is propagated to it's parent Node
outer.addEventListener("click", (e) => {
  console.log(e.target);
  console.log("Clicked outer");
});
inner.addEventListener("click", (e) => {
  console.log(e.target);
  console.log("Clicked inner");
});
vinner.addEventListener("click", (e) => {
  //   e.stopPropagation();
  //   e.preventDefault();
  console.log("Clicked very inner");
});

// outer.addEventListener(
//   "click",
//   () => {
//     console.log("Capture Clicked outer");
//   },
//   true
// );
// inner.addEventListener(
//   "click",
//   (e) => {
//     // e.stopPropagation();
//     console.log("Capture Clicked inner");
//   },
//   true
// );
// vinner.addEventListener(
//   "click",
//   () => {
//     console.log("Capture Clicked very inner");
//   },
//   true
// );
