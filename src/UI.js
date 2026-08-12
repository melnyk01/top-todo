const taskList = JSON.parse(localStorage.getItem("list")) || [];
export function UI(taskList) {
    const content = document.getElementById('content');

    function renderTask(task) {
        const div = document.createElement('div');
        div.className = 'task';
        const label = document.createElement('label');
        const input = document.createElement('input');
        const removeBtn = document.createElement('button');
        div.id = task.id
        input.type = 'checkbox';
        input.id = 'cb';
        label.setAttribute('for', 'cb');
        label.textContent = task.name;
        removeBtn.className = 'remove';
        removeBtn.id = task.id
        removeBtn.textContent = 'Remove';

        removeBtn.addEventListener('click', (e) => {
            const task = document.getElementById(e.target.id);
            removeTask(task.id)
            content.removeChild(task);

        })

        div.appendChild(input);
        div.appendChild(label);
        div.appendChild(removeBtn);
        content.appendChild(div);
    }
    //Will separate the logic in next commits...
    function removeTask(id) {
        for (const task of taskList) {
            if (task.id == id) {
                console.table(taskList);
                const taskIndex = taskList.indexOf(task);
                taskList.splice(taskIndex, 1);
                console.table(taskList);
                localStorage.setItem("list", JSON.stringify(taskList))

            }
        }
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