export class Task {
    constructor() {
        const task = {}
        task.name = prompt('Name?!');
        task.status = 'uncompleted';
        task.id = Math.random().toString(36).slice(2, 10);
        return task
    }

}