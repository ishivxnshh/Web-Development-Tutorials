// function setTimeoutPromisified(duration) {
//     return new Promise(function (resolve) {
//         setTimeout(resolve, duration);
//     });
// }

// // setTimeout ==>> promisified setTimeout
// function callback() {
//     console.log("5 seconds have passed");
// }

// setTimeoutPromisified(5000).then(callback);

//------------------------------------------------------------------------------------------------------------------------

/* Q: Write code that
logs hi after 1 second
logs hello 3 seconds after step 1
logs hello there 5 seconds after step 2 */

// with callback hell
// setTimeout(function () {
//   console.log("hi");
//   setTimeout(function () {
//     console.log("hello");

//     setTimeout(function () {
//       console.log("hello there");
//     }, 5000);
//   }, 3000);
// }, 1000);

// this doesn't really have callback hell
// function step3Done() {
//   console.log("hello there");
// }
// function step2Done() {
//   console.log("hello");
//   setTimeout(step3Done, 5000);
// }
// function step1Done() {
//   console.log("hi");
//   setTimeout(step2Done, 3000);
// }
// setTimeout(step1Done, 1000);

// Promisified version with callback hell
// function setTimeoutPromisified(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

// setTimeoutPromisified(1000).then(function () {
//   console.log("hi");
//   setTimeoutPromisified(3000).then(function () {
//     console.log("hello");
//     setTimeoutPromisified(5000).then(function () {
//       console.log("hello there");
//     });
//   });
// });

// Alt solution (doesnt really have callback hell)
// setTimeoutPromisified(1000)
//   .then(function () {
//     console.log("hi");
//     return setTimeoutPromisified(3000);
//   })
//   .then(function () {
//     console.log("hello");
//     return setTimeoutPromisified(5000);
//   })
//   .then(function () {
//     console.log("hello there");
//   });

//------------------------------------------------------------------------------------------------------------------------

// Async Await Syntax

// async function solve() {
// 	await setTimeoutPromisified(10000);
// 	console.log("hi");
// 	await setTimeoutPromisified(3000);
// 	console.log("hello");
// 	await setTimeoutPromisified(5000);
// 	console.log("hi there");
// }

// solve();

//------------------------------------------------------------------------------------------------------------------------

// err first callback vs rejects in promises

// const fs = require("fs")
// function afterDone(err, data) {
//   if (err) {
//     console.log("Error while reading file");
//   } else {
//     console.log(data)
//   }
// }

// fs.readFile("a.txt", "utf-8", afterDone);

// PROMISIFIED
// Promises use the reject  argument to propagate errors
const fs = require("fs");

function readFilePromisified(filePath) {
  return new Promise(function (resolve, reject) {
    fs.readFile(filePath, "utf-8", function (err, data) {
      if (err) {
        reject("Error while reading file");
      } else {
        resolve(data);
      }
    });
  });
}

function onDone(data) {
  console.log(data);
}

function onError(err) {
  console.log("Error: " + err);
}

readFilePromisified("file.txt").then(onDone).catch(onError);