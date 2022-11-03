const container = document.getElementById("container");
const box = document.getElementById("box");
console.log(container);

container.addEventListener("mousemove",function(e){
  const x = e.clientX;
  const y = e.clientY;
  console.log("動いた");
})
