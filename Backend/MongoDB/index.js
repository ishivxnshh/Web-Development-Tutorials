const express = require("express");
const { userModel, todoModel } = require("./db");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "ishivansh";

mongoose.connect("mongodb+srv://admin:admin12345@cluster0.m7sfi.mongodb.net/todo-shivansh");
const app = express();
app.use(express.json());

app.post("/signup", async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    await userModel.create({
        email: email,
        password: password,
        name: name
    })

    res.json({
        message: "You are signed up successfully!"
    })
});

app.post("/login", async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    const user = await userModel.findOne({
        email: email,
        password: password
    });

    console.log(user);

    if (user) {
        const token = jwt.sign(
            { id: user._id.toString() },
            JWT_SECRET
        );

        res.json({
            token: token
        });
    } else {
        res.status(403).json({
            message: "Incorrect credentials!"
        })
    }
});

auth = (req, res, next) => {
    const token = req.headers.token;
    const user_Id = jwt.verify(token, JWT_SECRET);
    if (user_Id) {
        req.userId = user_Id.id;
        next();
    } else {
        res.status(403).json({
            message: "You are not authorized!"
        });
    }
}

app.use(auth);

app.post("/todo", async (req, res) => {

    const userId = req.userId;
    const title = req.body.title;

    await todoModel.create({
        title: title,
        done: false,
        userId: userId
    });

    res.json({
        userId: userId
    });
});

app.get("/todos", async (req, res) => {
    const userId = req.userId;
    const todos = await todoModel.findOne({
        userId: userId
    });

    res.json({ todos });
});

app.listen(3000);