const btn = document.querySelector("button");
const toDo = document.querySelector("li");

btn.addEventListener("click", () => {
  toDo.classList.add("done");
});
