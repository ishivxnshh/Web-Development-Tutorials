const bcrypt = require("bcrypt");
const express = require("express");
const { userModel, todoModel } = require("./db");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const zod = require("zod");
const JWT_SECRET = "ishivansh";

mongoose.connect("mongodb+srv://admin:admin12345@cluster0.m7sfi.mongodb.net/todo-shivansh");
const app = express();
app.use(express.json());

app.post("/signup", async (req, res) => {
    const requiredBodySchema = zod.object({
        email: zod.string().email(),
        password: zod.string().min(6),
        name: zod.string().min(1)
    });

    const parsedDataWithSuccess = requiredBodySchema.safeParse(req.body);

    if (!parsedDataWithSuccess.success) {
        return res.status(400).json({
            message: "Invalid input",
            errors: parsedDataWithSuccess.error
        });
    }

    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    let errorThrown = false;
    try {
        const hashedPassword = await bcrypt.hash(password, 5);

        await userModel.create({
            email: email,
            password: hashedPassword,
            name: name
        })
    } catch (error) {
        return res.status(500).json({
            message: "User already exists!"
        });
        errorThrown = true;
    }
    if (!errorThrown) {
        res.json({
            message: "User created successfully!"
        });
    }
});

app.post("/login", async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    const response = await userModel.findOne({
        email: email
    });

    if (!response) {
        return res.status(403).json({
            message: "User not found!"
        });
    }

    const passwordMatch = await bcrypt.compare(password, response.password);

    if (passwordMatch) {
        const token = jwt.sign(
            { id: response._id.toString() },
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