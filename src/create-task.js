export function createTask() {
    const content = document.getElementById('content');
    const createTaskBtn = document.querySelector('#create-task');
    createTaskBtn.addEventListener('click', () => {
        const task = document.createElement('div');
        task.className = 'task';
        const label = document.createElement('label');
        const input = document.createElement('input');
        input.type = 'checkbox';
        input.id = 'cb';
        const taskName = prompt('name?!');
        label.setAttribute('for', 'cb');
        label.textContent = taskName;
        task.appendChild(input);
        task.appendChild(label);
        content.appendChild(task);

        return task
    });

}