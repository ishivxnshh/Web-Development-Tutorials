const request = require('supertest');
const assert = require('assert');
const express = require('express');

const app = express();
let errorCount = 0;

app.get('/user', function (req, res) {
    let a; // undefined variable to trigger an error
    a.length; // This will throw an error
    // throw new Error('This is an error'); // Uncommenting this line will also trigger the error handler
    res.status(200).json({ name: 'John' });
});

app.post('/user', function (req, res) {
    res.status(200).json({ message: 'Dummy User Created' });
})

app.get('/errorCount', function (req, res) {
    res.status(200).json({ errorCount: errorCount });
});

// You have been given an express server which has a few endpoints.
// Your task is to
// 1. Ensure that if there is ever an exception, the end user sees a status code of 404
// 2. Maintain the errorCount variable whose value should go up every time there is an exception in any endpoint

// Error handling middleware for Express
app.use(function (err, req, res, next) {
    errorCount++;
    res.status(404).send('Not Found');
});

app.listen(3000, function () {
    console.log('Server is running on port http://localhost:3000');
});

module.exports = app;