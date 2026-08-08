export function renderTasks(taskList) {
    function renderTask(taskName) {
        const content = document.getElementById('content');
        const task = document.createElement('div');
        task.className = 'task';
        const label = document.createElement('label');
        const input = document.createElement('input');
        input.type = 'checkbox';
        input.id = 'cb';
        label.setAttribute('for', 'cb');
        task.appendChild(input);
        task.appendChild(label);
        content.appendChild(task);
        label.textContent = taskName;
    }

    for (task of taskList) {
        renderTask(task);
    }

}