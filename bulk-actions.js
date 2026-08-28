// bulk-actions.js — bulk operations for the todo list

function deleteAllTodos() {
    localStorage.clear();
    location.reload();
}

function markAllComplete() {
    for (var i = 0; i < todolist.length; i++) {
        todolist[i].isActive = "false";
    }
    saveTodolist();
    render(todolist);
}

var bulkBar = document.getElementById("bulk-actions");
if (bulkBar) {
    document.getElementById("delete-all-btn").addEventListener("click", deleteAllTodos);
    document.getElementById("mark-all-btn").addEventListener("click", markAllComplete);
}
