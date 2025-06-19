const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.post("/sum", (req, res) => {
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);
    res.json({
        sum: a + b
    });
});

app.listen(3000, () => {
    console.log("Server is running on port http://localhost:3000");
});

module.exports = app;