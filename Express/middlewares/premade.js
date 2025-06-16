const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.post("/sum", function(req, res) {
    const a = parseInt(req.body.a);
    const b = Number(req.body.b);
    res.json({
        sum: a + b
    });
});

app.listen(3000, function() {
    console.log("Server is running on port http://localhost:3000");
});
module.exports = app;