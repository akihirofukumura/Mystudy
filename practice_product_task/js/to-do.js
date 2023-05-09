const btn = document.querySelectorAll("button");

console.log(btn);

btn.forEach((button) => {
  btn.addEventListener("click", () => {
    const toDo = btn.closet("li");
    toDo.classList.add("done");
  });
});
// btn.addEventListener("click", () => {
//   toDo.classList.add("done");
// });
