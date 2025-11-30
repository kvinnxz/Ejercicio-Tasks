
const API_URL = "https://692c543ec829d464006f3d13.mockapi.io/tasks";
window.onload = loadTasks;

async function loadTasks() {
  const res = await fetch(API_URL);
  const tasks = await res.json();
  tasks.forEach(renderTask);
}

async function addTask() {
  const input = document.getElementById("taskInput");
  const text = input.value.trim();
  if (text === "") return;

  const newTask = {
    title: text,
    completed: false
  };

  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newTask)
  });

  const savedTask = await res.json();
  renderTask(savedTask);
  input.value = "";
}

function renderTask(task) {
  const li = document.createElement("li");
  if (task.completed) li.classList.add("completed");

  li.innerHTML = `
    <span>${task.title}</span>
    <div class="actions">
      <button onclick="toggleComplete(${task.id}, this)">✔</button>
      <button onclick="deleteTask(${task.id}, this)">🗑️</button>
    </div>
  `;

  document.getElementById("taskList").appendChild(li);
}

async function toggleComplete(id, element) {
  const li = element.closest("li");
  const completed = !li.classList.contains("completed");

  await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ completed })
  });

  li.classList.toggle("completed");
}

async function deleteTask(id, element) {
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
  element.closest("li").remove();
}
