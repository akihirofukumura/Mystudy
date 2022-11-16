const names = document.getElementById("name");
const decide = document.getElementById("decide");
const clear = document.getElementById("clear");
const yname = document.querySelector(".yourName");

decide.addEventListener("click", () => {
  yname.innerHTML += names.value;
});

clear.addEventListener("click", () => {
  yname.innerHTML = "";
});

// function htmlChange(e) {
//   yname.innerHTML += e;
// }

// decide.addEventListener("click", () => {
//   htmlChange(names.value);
// });

// clear.addEventListener("click", () => {
// yname.innerHTML = "";
// });
