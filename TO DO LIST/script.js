document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById('todo-input');
    const addBtn = document.getElementById('add-btn');
    const todoList = document.getElementById('todo-list');

    // Add task
    addBtn.addEventListener('click', addTask);
    input.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') addTask();
    });

    function addTask() {
        const task = input.value.trim();
        if (!task) return;
        const li = document.createElement('li');
        li.className = 'todo-item';

        const span = document.createElement('span');
        span.textContent = task;
        span.className = 'todo-text';

        // Toggle completion
        span.addEventListener('click', function() {
            li.classList.toggle('completed');
        });

        // Delete button
        const del = document.createElement('button');
        del.textContent = 'Delete';
        del.className = 'delete-btn';
        del.addEventListener('click', function() {
            todoList.removeChild(li);
        });

        li.appendChild(span);
        li.appendChild(del);
        todoList.appendChild(li);
        input.value = '';
    }
});