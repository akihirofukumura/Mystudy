//
// workbook-01.js
// 問題番号：01 ~ 09
// 各設問に対するプログラムを{}の中に実装しましょう。
//

const q01 = () => {
  // ----------------------------------------
  // 01. 「Hello World!」を表示する
  // ----------------------------------------
  console.log(`Hello World!`);
};

// <-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*->

const q02 = () => {
  // ----------------------------------------
  // 02. 「EC」と「C」を連結して「ECC」を表示する
  // ----------------------------------------
  console.log("EC" + "C");
};

// <-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*->

const q03 = () => {
  // ----------------------------------------
  // 03. データの入力と表示
  // ----------------------------------------

  let message = prompt(`Q03. メッセージを入力`);
  console.log(message);
};

// <-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*->

const q04 = () => {
  // ----------------------------------------
  // 04. ２つの数値を入力して、その合計を表示する
  // ----------------------------------------

  let str1 = prompt(`Q04. １つ目の数値を入力`);
  let str2 = prompt(`Q04. ２つ目の数値を入力`);

  let num1 = parseInt(str1);
  let num2 = parseInt(str2);
  console.log(num1 + num2);
};

// <-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*->

const q05 = () => {
  // ----------------------------------------
  // 05. ２つの数値を入力して、その余りを表示する
  // ----------------------------------------
  console.log(`05. ２つの数値を入力して、その余りを表示する`);

  let str1 = prompt(`Q05. １つ目の数値を入力`);
  let str2 = prompt(`Q05. ２つ目の数値を入力`);

  let num1 = parseInt(str1);
  let num2 = parseInt(str2);
  console.log(num1 % num2);
};

// <-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*->

const q06 = () => {
  // ----------------------------------------
  // 06. 2つの整数値を入力して、その和・差・積・商と余りを表示する
  // ----------------------------------------
  console.log(`06. 2つの整数値を入力して、その和・差・積・商・余を表示する`);

  let str1 = prompt(`Q06. １つ目の数値を入力`);
  let str2 = prompt(`Q06. ２つ目の数値を入力`);

  let num1 = parseInt(str1);
  let num2 = parseInt(str2);
  console.log(`和${num1 + num2}`);
  console.log(`差${num1 - num2}`);
  console.log(`積${num1 * num2}`);
  console.log(`余り${num1 % num2}`);
};

// <-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*->

const q07 = () => {
  // ----------------------------------------
  // 07. 消費税の計算
  // ----------------------------------------
  console.log(
    `07. 金額と消費税率を入力して、消費税の金額をコンソールに表示する`
  );

  prompt(`Q07. 金額を入力`);
  prompt(`Q07. 消費税率を入力（%）`);
};

// <-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*->

const q08 = () => {
  // ----------------------------------------
  // 08. 円の面積
  // ----------------------------------------
  console.log(`08. 半径を入力して、円の面積をコンソールに表示する`);

  let str1 = prompt(`Q08. 円の半径を入力`);
  let num1 = parseInt(str1);

  console.log(`${num1 * 2 * Math.PI}`);
};

// <-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*->

const q09 = () => {
  //
  // 09. 小数点の桁数指定
  //

  let str1 = prompt(`Q09. １つ目の数値を入力`);
  let str2 = prompt(`Q09. ２つ目の数値を入力`);

  let num1 = parseInt(str1);
  let num2 = parseInt(str2);

  console.log(`そのまま${num1 / num2}`);
  console.log(`小数点${Math.toFixed(num1 / num2)}`);
};
