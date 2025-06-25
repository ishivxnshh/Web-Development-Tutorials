const express = require("express");
const { userModel, todoModel } = require("./db");
const JWT_SECRET = "ishivansh";
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());

app.post("/signup", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;

    await userModel.insert({
        email: email,
        password: password,
        name: name
    })

    res.json({
        message: "You are signed up successfully!"
    })
});

app.post("/login", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const user = await userModel.findOne({
        email: username,
        password: password
    });

    console.log(user);

    if (user) {
        const token = jwt.sign(
            { id: user._id },
            JWT_SECRET
        );

        res.json({
            token: token
        });
    } else {
        res.status(403).json({
            message: "Invalid credentials!"
        })
    }
});

app.post("/todo", (req, res) => {
});

app.get("/todos", (req, res) => {
});

app.listen(3000);