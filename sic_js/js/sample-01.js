console.log("Hello World.");

console.log(100+14);

//数字と数値の足し算
// console.jog("100"+14);

console.log(true);

// 計算プログラム
console.log(100/3);

console.log((100+2)*10);

// 100/3 = 33 あまり 3
// 小数点の扱い＞小数点以下は切り捨て
// Math > 算術を提供
console.log(Math.round(100/3))

console.log(100 +"÷" +3 +" = " + Math.round(100/3) + "余り"+ 100%3);

// 200 ÷ 3 = 66余り2
let num1 = 300;
    num2 = 1;
console.log(num1 +"÷"+num2+"="+Math.round(num1/num2)+"余り"+num1%num2);

// Window.prompt()
// データ入力を表示
// 入力されたデータを返す
num1 = prompt("数値を入力してください")
num2 = prompt("数値を入力してください")
console.log(num1 +"÷"+num2+"="+Math.round(num1/num2)+"余り"+num1%num2);
// 
console.log(`${num1} ÷ ${num2} = ${Math.round(num1/num2)} 余り ${nu1%num2}`)