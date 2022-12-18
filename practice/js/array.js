// pushを使って配列の取得
// push = 配列の最後に追加
const num = [100, 200, 300];
const fours = num.push(400);

console.log(fours);
console.log(num);

// pop(一番最後の要素を取り除く)を使って取得
const poping = [100, 200, 300, 400, 500];

console.log(poping.pop());

//配列ごと取る（上で500を取得しているから最後は400になっている）
poping.pop();

console.log(poping);
