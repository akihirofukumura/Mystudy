//次に進むボタンの取得
const next = document.getElementById("next");
//前に戻るボタンの取得
const prev = document.getElementById("prev");
// 画像すべてを取得
const img = document.querySelectorAll("#slider li img");
// 消えてる画像の取得
const imgWrap = document.querySelectorAll("#slider li");
//画像の最大枚数 img.length

// アニメーションのKeyframe作成
const keyframe = [
  { transform: all },
  {
    opacity: 0,
  },
];

//箱をつくる。0にすることで最大枚数に達したときにも戻ってくる
let num = 0;
//クリックイベント
next.addEventListener("click", () => {
  imgWrap[num].style.display = "none";
  if (num < img.length - 1) {
    num += 1;
  } else {
    num = 0;
  }
  imgWrap[num].animate(keyframe, 3000);
  imgWrap[num].style.display = "block";
});
prev.addEventListener("click", () => {
  imgWrap[num].style.display = "none";
  if (num > 0) {
    num -= 1;
  } else {
    num = img.length - 1;
  }
  imgWrap[num].style.display = "block";
});
