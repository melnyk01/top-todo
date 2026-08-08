import "./style.css";
import { createTask } from "./task";
import { TaskList } from "./taskList";
import { renderTasks } from "./UI";

const myList = new TaskList();
console.log(myList.list);
myList.addTask();
renderTasks(myList.list);
createTask();