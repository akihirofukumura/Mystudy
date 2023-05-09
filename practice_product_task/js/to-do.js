//getElementsByClassNameは「配列風オブジェクト」で取得するため配列として今回は取得しないように[0]と配列から特定の要素を取得している
const taskValue = document.getElementsByClassName("task_value")[0];
const taskSubmit = document.getElementsByClassName("task_submit")[0];
const taskList = document.getElementsByClassName("task_list")[0];

console.log(taskValue);
