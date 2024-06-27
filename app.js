// Function to render tasks
function renderTasks() {
    const taskList = document.getElementById('taskList');
    if (taskList) {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        taskList.innerHTML = '';
        tasks.forEach((task, index) => {
            const li = document.createElement('li');
            li.textContent = task;
            taskList.appendChild(li);
        });
    }
}

// Add Task button functionality
const addTaskBtn = document.getElementById('addTaskBtn');
if (addTaskBtn) {
    addTaskBtn.addEventListener('click', () => {
        window.location.href = 'add-task.html';
    });
}

// Handle form submission on add-task page
const addTaskForm = document.getElementById('addTaskForm');
if (addTaskForm) {
    addTaskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const taskInput = document.getElementById('taskInput');
        const newTask = taskInput.value.trim();
        if (newTask) {
            const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
            tasks.push(newTask);
            localStorage.setItem('tasks', JSON.stringify(tasks));
            window.location.href = 'index.html';
        }
    });
}

// Back button functionality on add-task page
const backBtn = document.getElementById('backBtn');
if (backBtn) {
    backBtn.addEventListener('click', () => {
        window.location.href = 'index.html';
    });
}

// Render tasks on page load
renderTasks();