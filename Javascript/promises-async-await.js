// Promise based approaches
//------------------------------------------------------------------------------------------------------------------------

// function  setTimeoutPromisified(ms) {
//     let p = new Promise(resolve => setTimeout(resolve, ms));
//     return p;
// }

// function callback()
// {
//     console.log("5 second have passed");
// }

// setTimeoutPromisified(5000).then(callback);

// OR

// function waitFor3S(resolve) {
//     setTimeout(resolve, 10000);
// }

// function  setTimeoutPromisified(ms) {
//     return new Promise(waitFor3S);
// }

// function main() {
//     console.log("5 second have passed");
// }

// setTimeoutPromisified(3000).then(main);

//------------------------------------------------------------------------------------------------------------------------

// const fs = require("fs");

// console.log("-----top of the file-----");

// function readTheFile(resolve) {
//     console.log("readTheFile called");
//     setTimeout(function() {
//         console.log("callback based setTimeout completed");
//         resolve();
//     }, 3000);
// }

// function setTimeoutPromisified(fileName) {
//     console.log("setTimeoutPromisified called");
//     // read the file and return its value
//     return new  Promise(readTheFile);
// }

// const p = setTimeoutPromisified();

// function callback() {
//     console.log("timer is done");
// }

// p.then(callback);

// console.log("-----end of the file-----");

//------------------------------------------------------------------------------------------------------------------------

//creation of Promise Class

// class Promise1 {
//     constructor(fn) {
//         function afterDone() {
//             this.resolve();
//         }
//         fn(afterDone)
//     }
//     then(callback) {
//         this.resolve = callback;
//     }
// }

// function readTheFile(resolve) {
//     setTimeout(resolve, 3000);
// }

// function setTimeoutPromisified(fileName) {
//     return new  Promise1(readTheFile);
// }

// const p = setTimeoutPromisified();

// function callback() {
//     console.log("done");
// }

// p.then(callback);

//------------------------------------------------------------------------------------------------------------------------


// const fs = require("fs");

// function readTheFile(sendTheFileValueHere) {
//     fs.readFile("file.txt", "utf-8", function(err, data) {
//         sendTheFileValueHere(data);
//     })
// }

// function readFile(fileName) {
//     // read the file and return its value
//     return new Promise(readTheFile);
// }

// const p = readFile();

// function callback(contents) {
//     console.log(contents);
// }
// p.then(callback);

//------------------------------------------------------------------------------------------------------------------------

// Async - Await Syntax

// function setTimeoutPromisified(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }

// async function solve() {
// 	await setTimeoutPromisified(1000);
// 	console.log("hi");
// 	await setTimeoutPromisified(3000);
// 	console.log("hello");
// 	await setTimeoutPromisified(5000);
// 	console.log("hi there");
// }

// solve();