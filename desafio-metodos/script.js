let tasks = [
  { id: 1, description: "Hacer la compra", completed: false },
  { id: 2, description: "Lavar la ropa", completed: true },
  { id: 3, description: "Estudiar para el examen", completed: false },
];

function renderTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";
  tasks.forEach((task) => {
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task");
    if (task.completed) {
      taskDiv.classList.add("completed-task");
    }
    taskDiv.innerHTML = `
            <span>ID: ${task.id}</span>
            <span>Tarea: ${task.description}</span>
            <input type="checkbox" ${
              task.completed ? "checked" : ""
            } onclick="toggleTask(${task.id})">
            <button onclick="deleteTask(${task.id})">Eliminar</button>
        `;
    taskList.appendChild(taskDiv);
  });

  updateSummary();
}

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const description = taskInput.value.trim();
  if (description !== "") {
    const newTask = {
      id: tasks.length + 1,
      description: description,
      completed: false,
    };
    tasks.push(newTask);
    renderTasks();
    taskInput.value = "";
  }
}

function deleteTask(id) {
  tasks = tasks.filter((task) => task.id !== id);
  renderTasks();
}

function toggleTask(id) {
  const task = tasks.find((task) => task.id === id);
  if (task) {
    task.completed = !task.completed;
    renderTasks();
  }
}

function updateSummary() {
  const totalTasks = tasks.length;
  const totalCompletedTasks = tasks.filter((task) => task.completed).length;
  const summary = document.getElementById("summary");
  const completedSummary = document.getElementById("completedSummary");
  summary.textContent = `Total de tareas: ${totalTasks}`;
  completedSummary.textContent = `Tareas completadas: ${totalCompletedTasks}`;
}

renderTasks();
