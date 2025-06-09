const express = require('express');
const app = express();

function isOldEnoughMiddleware(req, res, next) {
    if (req.query.age >= 14) {
        next();
    } else {
        res.status(411).json({
            msg: "Sorry, you are not of age yet!"
        });
    }
}

app.get("/ride3", isOldEnoughMiddleware, function (req, res) {
    res.json({
        msg: "You have successfully ridden the third ride!"
    });
})

app.use(isOldEnoughMiddleware); // for all the endpoints below this line

app.get("/ride2", function (req, res) {
    res.json({
        msg: "You have successfully ridden the second ride!"
    });
})

app.get("/ride1", function (req, res) {
    res.json({
        msg: "You have successfully ridden the first ride!"
    });
})

app.listen(3000, () => {
    console.log("Server is running on port http://localhost:3000/");
});

// node middlewares/index.js