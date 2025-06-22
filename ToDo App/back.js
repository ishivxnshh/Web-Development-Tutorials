const fs = require("fs");
const express = require("express");
const app = express();

const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Todo List HomePage")
});

function getTodos() {
    return JSON.parse(fs.readFileSync("todos.json", "utf8"));
}

function saveTodos(todos) {
    fs.writeFileSync("todos.json", JSON.stringify(todos, null, 2));
}

app.get("/todos", (req, res) => {
    res.json(getTodos());
});

app.get("/todos/:id", (req, res) => {
    console.log(req.params.id);
    const todos = getTodos();
    let todo = todos.filter((todo) => todo.id == req.params.id);
    res.json(todo);
});

app.post("/todos", (req, res) => {
    const todos = getTodos();
    const newTodo = {
        id: Date.now(),
        title: req.body.title,
        completed: false
    };
    todos.push(newTodo);
    saveTodos(todos);
    res.json(todos);
});

app.put("/todos/:id", (req, res) => {
    const todos = getTodos();
    const todo = todos.find(t => t.id == req.params.id);
    if (todo) {
        todo.title = req.body.title;
        todo.completed = req.body.completed;
    }
    else {
        return res.status(404).json({ message: "Todo not found" });
    }
    saveTodos(todos);
    res.json(todo);
});

app.delete("/todos/:id", (req, res) => {
    let todos = getTodos();
    let index = todos.findIndex(todo => todo.id == req.params.id);
    todos.splice(index, 1);
    saveTodos(todos);
    res.json({ message: "Todo deleted successfully" });
});


app.listen(port, () => {
    console.log("Server running at http://localhost:3000");
});