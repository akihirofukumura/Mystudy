// keyframeで背景色を変える時はグラデーションのような変化になるので近い色にする必要がある

// jsのAnimate( , )には第一引数にkeyframeつまり動かす内容。第二関数には動きの詳細（タイミングなど）

// 暗い赤色から明るくしていく;

const allWrap = document.querySelectorAll("#allWrap");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  if (allWrap.classList.contains("allWrap02")) {
    if ((allWrap.style.animationPlayState = "paused")) {
      console.log("スタート");
      allWrap.style.animationPlayState = "running";
    } else {
      console.log("ストップ");
      allWrap.style.animationPlayState = "paused";
    }
  } else {
    allWrap.classList.add("allWrap02");
  }
});

// btn.addEventListener("click", () => {

// if(allWrap.classList.contains("allWrap02")){
//   if(allWrap.style.animationPlayState == "paused"){
//     console.log("move")
//     allWrap.style.animationPlayState = "running";
//   }
//   else{
//     console.log("stop");
//     allWrap.style.animationPlayState = "paused";
//   }
// }
// else{
//   allWrap.classList.add("allWrap02");
