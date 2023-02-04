// keyframeで背景色を変える時はグラデーションのような変化になるので近い色にする必要がある
const keyframes = {
  background: ["#fcc"],
  background: ["#f66"],
};

// jsのAnimate( , )には第一引数にkeyframeつまり動かす内容。第二関数には動きの詳細（タイミングなど）

// 暗い赤色から明るくしていく;
document.body.animate(keyframes, 3000);
