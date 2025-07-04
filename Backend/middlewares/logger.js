const express = require("express");

const app = express();

function loggerMiddleware(req, res, next) {
    console.log("Method is: " + req.method);
    console.log("Url is: " + req.url);
    console.log("host is: " + req.hostname);
    console.log(new Date());
    next();
}

app.use(loggerMiddleware);

app.get("/sum", function(req, res) {
    const a = parseInt(req.query.a);
    const b = Number(req.query.b);
    res.json({
        ans: a + b
    })
});

app.get("/multiply", function(req, res) {
    const a = req.query.a;
    const b = req.query.b;
    res.json({
        ans: a * b
    })
});

app.get("/divide", function(req, res) {
    const a = req.query.a;
    const b = req.query.b;
    res.json({
        ans: a / b
    })

});

app.get("/subtract", function(req, res) {
    const a = req.query.a;
    const b = req.query.b;
    res.json({
        ans: a - b
    })
});

app.listen(3000);