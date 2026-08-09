import { TaskList } from "./taskList";
import { renderTasks } from "./UI";

let myList = new TaskList;
export function createTask(taskName) {
    myList.addTask(taskName);
    renderTasks(myList.list);

};