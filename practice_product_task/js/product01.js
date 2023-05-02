const btn = document.getElementById("btn");
const box_wrap = document.getElementById("b_wrap");
const boxes = document.querySelectorAll(".box");

btn.addEventListener("click", () => {
  boxes.shift();
  // for (let i = 0; i < boxes.length; i++) {
  //   boxes[i].remove();
  // }
  console.log(typeof boxes);
});
