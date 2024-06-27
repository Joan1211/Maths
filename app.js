// Check if we're on the home page
if (document.getElementById('taskList')) {
    // Load tasks from localStorage
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // Function to render tasks
    function renderTasks() {
        const taskList = document.getElementById('taskList');
        taskList.innerHTML = '';
        tasks.forEach((task, index) => {
            const li = document.createElement('li');
            li.textContent = task;
            taskList.appendChild(li);
        });
    }

    // Render tasks on page load
    renderTasks();

    // Add Task button functionality
    document.getElementById('addTaskBtn').addEventListener('click', () => {
        window.location.href = 'add-task.html';
    });
}

// Check if we're on the add task page
if (document.getElementById('addTaskForm')) {
    document.getElementById('addTaskForm').addEventListener('submit', (e) => {
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

    document.getElementById('backBtn').addEventListener('click', () => {
        window.location.href = 'index.html';
    });
}
