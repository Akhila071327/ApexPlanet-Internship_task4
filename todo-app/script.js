const input = document.getElementById('taskInput');
const list = document.getElementById('taskList');
const addBtn = document.getElementById('addBtn');

addBtn.addEventListener('click', addTask);

function addTask() {
  const task = input.value.trim();
  if (task === "") return alert("Enter a task!");
  const li = document.createElement('li');
  li.textContent = task;
  li.addEventListener('click', () => li.classList.toggle('completed'));
  li.addEventListener('dblclick', () => {
    li.remove();
    saveData();
  });
  list.appendChild(li);
  input.value = "";
  saveData();
}

function saveData() {
  localStorage.setItem('tasks', list.innerHTML);
}

function loadData() {
  list.innerHTML = localStorage.getItem('tasks');
}

loadData();
