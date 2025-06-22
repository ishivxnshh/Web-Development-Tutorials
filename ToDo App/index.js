const express = require('express');
const jwt = require('jsonwebtoken');
const JWT_SECRET = "randomshivanshlovekiara";

const app = express();

app.use(express.json());

const users = [];

app.post("/signup", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username: username,
        password: password
    });

    res.json({
        message: "User registered successfully"
    });
});

app.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const foundUser = users.find(function (u) {
        if (u.username === username && u.password === password) {
            return true;
        }
        return false;
    })

    if (foundUser) {
        const token = jwt.sign({
            username: username
        }, JWT_SECRET);

        // foundUser.token = token;
        res.json({
            message: "Login successful",
            token: token
        });
    } else {
        res.status(401).json({
            message: "Invalid username or password"
        });
    }
    console.log(users);
});

app.get("/me", (req, res) => {
    const token = req.headers.token;
    const decodedInformation = jwt.verify(token, JWT_SECRET); // {username: "shivansh@gmail.com"}
    const username = decodedInformation.username;

    // password is not available here, so just find by username
    const foundUser = users.find(function (u) {
        if (u.username === username) {
            return true;
        }
        return false;
    })

    if (foundUser) {
        res.json({
            username: foundUser.username,
            password: foundUser.password
        })
    } else {
        res.json({
            message: "Invalid token"
        });
    }
});


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

app.listen(3000, () => {
    console.log("Server is running on port http://localhost:3000");
});