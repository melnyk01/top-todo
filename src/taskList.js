export function taskList() {
    const list = {};
    list.show = function () {
        return list;
    }
    list.addTask = function (task) {
        list.task = task;
    }
    return list
}