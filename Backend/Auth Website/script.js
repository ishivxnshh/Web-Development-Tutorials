const express = require('express');
const jwt = require('jsonwebtoken');
const JWT_SECRET = "randomshivanshlovekiara";

const app = express();

app.use(express.json());

const users = [];

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

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
});

function auth(req, res, next) {
    const token = req.headers.token;
    const decodedData = jwt.verify(token, JWT_SECRET);

    if (decodedData.username) {
        req.username = decodedData.username;
        next();
    } else {
        res.json({
            message: "You are not logged in"
        });
    }
}

app.use(auth);

app.get("/me", (req, res) => {

    const currentUser = req.username;
    const foundUser = users.find(function (u) {
        if (u.username === currentUser) {
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

app.listen(3000, () => {
    console.log("Server is running on port http://localhost:3000");
});