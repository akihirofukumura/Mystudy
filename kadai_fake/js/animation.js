// keyframeで背景色を変える時はグラデーションのような変化になるので近い色にする必要がある

// jsのAnimate( , )には第一引数にkeyframeつまり動かす内容。第二関数には動きの詳細（タイミングなど）

// 暗い赤色から明るくしていく;

const allWrap = document.querySelectorAll("#allWrap");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  if (allWrap.classLisit.contains("allWrap02")) {
    allWrap.classLisit.remove("allWrap02");
  } else {
    allWrap.classLisit.add("allWrap02");
  }
});
