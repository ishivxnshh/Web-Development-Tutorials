const fs = require("fs");
const express = require("express");
const app = express();

app.use(express.json());

function getTodos() {
    return JSON.parse(fs.readFileSync("todos.json", "utf8"));
}

function saveTodos(todos) {
    fs.writeFileSync("todos.json", JSON.stringify(todos, null, 2));
}

app.get("/", (req, res) => {
    res.json(getTodos());
});

app.post("/", (req, res) => {
    const todos = getTodos();
    const newTodo = { id: Date.now(), title: req.body.title, completed: false };
    todos.push(newTodo);
    saveTodos(todos);
    res.json(newTodo);
});

app.put("/:id", (req, res) => {
    const todos = getTodos();
    const todo = todos.find(t => t.id == req.params.id);
    if (!todo) return res.status(404).json({ message: "Todo not found" });
    todo.title = req.body.title;
    todo.completed = req.body.completed;
    saveTodos(todos);
    res.json(todo);
});

app.delete("/:id", (req, res) => {
    let todos = getTodos();
    todos = todos.filter(t => t.id != req.params.id);
    saveTodos(todos);
    res.json({ message: "Todo deleted" });
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
