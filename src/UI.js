export function UI(taskList) {
    const content = document.getElementById('content');

    function renderTask(task) {
        const div = document.createElement('div');
        div.className = 'task';
        const label = document.createElement('label');
        const input = document.createElement('input');
        const removeBtn = document.createElement('button');
        input.type = 'checkbox';
        input.id = 'cb';
        label.setAttribute('for', 'cb');
        label.textContent = task.name;
        removeBtn.className = 'remove';
        removeBtn.id = task.id
        removeBtn.textContent = 'Remove';

        removeBtn.addEventListener('click', () => {

        })

        div.appendChild(input);
        div.appendChild(label);
        div.appendChild(removeBtn);
        content.appendChild(div);
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