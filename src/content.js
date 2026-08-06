export function createTask() {
    const content = document.getElementById('content');
    const createTaskBtn = document.querySelector('#create-task');
    createTaskBtn.addEventListener('click', () => {
        const label = document.createElement('label');
        const task = document.createElement('input');
        task.type = 'checkbox';
        task.id = 'cb';
        const taskName = prompt('name?!');
        label.setAttribute('for', 'cb');
        label.textContent = taskName;
        content.appendChild(task);
        content.appendChild(label);

    });

}