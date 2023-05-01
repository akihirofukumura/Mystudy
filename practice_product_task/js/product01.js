const btn = document.getElementById("btn");
const box_wrap = document.getElementById("b_wrap");
const boxes = document.querySelectorAll(".box");
console.log(boxes);

btn.addEventListener("click", () => {
  if (boxes.length > 0) {
    boxes[3].style.display = "none";
    console.log(boxes);
  }
});
