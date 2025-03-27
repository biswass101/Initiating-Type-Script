function printTodos(todos: string[] | null) {
    if(todos) {
        todos.map((todo) => console.log(todo));
    }
    else {
        console.log("no todos");
    }
}

const todso = ["todo1", "todo2"];
printTodos(todso);