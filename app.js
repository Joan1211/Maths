document.addEventListener('DOMContentLoaded', function() {
  const taskList = document.getElementById('task-list');
  const addTaskButton = document.getElementById('add-task-button');
  const taskForm = document.getElementById('task-form');
  const taskInput = document.getElementById('task-input');
  const backButton = document.getElementById('back-button');

  // Load tasks from localStorage
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

  function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
      const li = document.createElement('li');
      li.textContent = task;
      taskList.appendChild(li);
    });
  }

  renderTasks();

  // Add task button click event
  if (addTaskButton) {
    addTaskButton.addEventListener('click', function() {
      window.location.href = 'add-task.html';
    });
  }

  // Task form submit event
  if (taskForm) {
    taskForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const task = taskInput.value.trim();
      if (task) {
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        window.location.href = 'index.html';
      }
    });
  }

  // Back button click event
  if (backButton) {
    backButton.addEventListener('click', function() {
      window.location.href = 'index.html';
    });
  }
});
