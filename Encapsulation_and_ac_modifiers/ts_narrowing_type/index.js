function printTodos(todos) {
    if (todos) {
        todos.map(function (todo) { return console.log(todo); });
    }
    else {
        console.log("no todos");
    }
}
var todso = ["todo1", "todo2"];
printTodos(todso);
