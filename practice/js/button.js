//dirでタグがどこにあるのか構造を見れる
const btn = document.getElementById("btn");
const txt = document.getElementById("txt");
const form = document.getElementById("txt_form");

console.dir(document.getElementById("txt"));


btn.addEventListener("click",()=>{
  form.innerHTML = `${txt.value}よろしくお願いします`
})



