const container = document.getElementById("container");
const box = document.getElementById("box");
let isMauseDown = false;

box.addEventListener("mousedown",function() {
  isMauseDown = true;
})

box.addEventListener("mouseup",function () {
  isMauseDown = false;
})

container.addEventListener("mousemove",function(e){
  const x = e.clientX;
  const y = e.clientY;
  console.log("動いた");


if(isMauseDown){
  box.style.top = `${y-50}px`
  box.style.left = `${x-50}px`
} 

})


// console.log( container.addEventListener("mousemove",function(e){
// }));