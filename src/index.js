import "./style.css";
import { UI } from "./UI";
import { Task } from "./create-task";

const taskList = JSON.parse(localStorage.getItem("list")) || [];
UI(taskList);

const createTaskBtn = document.querySelector('#create-task');
createTaskBtn.addEventListener('click', () => {
    taskList.push(new Task);
    localStorage.setItem("list", JSON.stringify(taskList))
    UI(taskList);

})
