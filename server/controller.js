const todos = [];
let id = 0;

module.exports = {
    getTodos: (req, res) => {
        res.status(200).send(todos)
    },
    addTodo: (req, res) => {
        const {task} = req.body;
        let todo = {id, task, complete: false};
        todos.push(todo);
        id++;
        res.status(200).send(todos);
    },
    completeTodo: (req, res) => {
        let index = todos.findIndex(todo => todo.id === +req.params.id)
        todos[index].complete = !todos[index].complete
        res.status(200).send(todos);
    },
    deleteTodo: (req, res) => {
        let index = todos.findIndex(todo => todo.id === +req.params.id)
        todos.splice(index, 1);
        res.status(200).send(todos);
    },
}