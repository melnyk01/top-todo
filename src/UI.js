export function displayList(taskList) {
    const content = document.getElementById('content');

    function renderTask(taskName) {
        const task = document.createElement('div');
        task.className = 'task';
        const label = document.createElement('label');
        const input = document.createElement('input');
        input.type = 'checkbox';
        input.id = 'cb';
        label.setAttribute('for', 'cb');
        label.textContent = taskName;
        task.appendChild(input);
        task.appendChild(label);
        content.appendChild(task);
    }

    function clearList() {
        while (content.lastChild) {
            content.removeChild(content.lastChild);
        }
    }

    clearList();
    for (const task of taskList) {
        renderTask(task);
    }
}