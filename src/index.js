import "./style.css";
import { createTask } from "./create-task";
import { taskList } from "./taskList";

taskList().addTask(createTask());
console.table(taskList().show());

