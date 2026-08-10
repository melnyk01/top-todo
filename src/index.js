import "./style.css";
import { displayList } from "./UI";

const taskList = JSON.parse(localStorage.getItem("list")) || [];

displayList(taskList);

const createTaskBtn = document.querySelector('#create-task');
createTaskBtn.addEventListener('click', () => {
    taskList.push(prompt('Name?!'));
    localStorage.setItem("list", JSON.stringify(taskList))
    displayList(taskList);

})
