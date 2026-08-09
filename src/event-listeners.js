import { createTask } from "./create-task";
export function listeners() {
    const createTaskBtn = document.querySelector('#create-task');
    createTaskBtn.addEventListener('click', () => {
        createTask(prompt('Name?!'));
    })
}