//getElementsByClassNameは「配列風オブジェクト」で取得するため配列として今回は取得しないように[0]と配列から特定の要素を取得している
const taskValue = document.getElementsByClassName("task_value")[0];
const taskSubmit = document.getElementsByClassName("task_submit")[0];
const taskList = document.getElementsByClassName("task_list")[0];

// 追加（Addボタン）の機能を実施
const addTasks = (task) => {
  // 入力したタスクを追加・表示
  const listItem = document.createElement("li");
  const showItem = taskList.appendChild(listItem);
  showItem.innerHTML = task;

  // 入力したタスクを削除するためのボタン
  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Delete";
  listItem.appendChild(deleteButton);

  // 削除ボタンをクリックした時のイベント
  deleteButton.addEventListener("click", (evt) => {
    evt.preventDefault();
    deleteTasks(deleteButton);
  });
};
// 削除ボタンに機能をつける
const deleteTasks = (deleteButton) => {
  const chosenTask = deleteButton.closest("li");
  taskList.removeChild(chosenTask);
};

// 追加ボタンを付与
taskSubmit.addEventListener("click", (evt) => {
  evt.preventDefault();
  const task = taskValue.value;
  addTasks(task);
  taskValue.value = "";
});
