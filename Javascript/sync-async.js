// SYNCHRONOUS CODE

// typescript or parse it to a number

// function sum(a, b) {
//     return parseInt(a) + b;
// }

// let ans = sum("20", 3);
// console.log(ans);

//------------------------------------------------------------------------------------------------------------------------

// CPU bound task

// function sum(n) {
//     let ans = 0;
//     for (let i = 1; i <= n; i++) {
//         ans += i;
//     }
//     return ans;
// }

// const ans = sum(100);
// console.log(ans);

//------------------------------------------------------------------------------------------------------------------------

// const fs = require("fs");

// const contents = fs.readFile("file.txt", "utf-8"); // asynchronously ~ I/O bound task
// console.log(contents);

// const contents1 = fs.readFileSync("file1.txt", "utf-8"); // synchronously
// console.log(contents1);

//------------------------------------------------------------------------------------------------------------------------

// Synchronously (One by one)

// const fs = require("fs");

// const contents = fs.readFileSync("file.txt", "utf-8");
// console.log(contents);

// const contents2 = fs.readFileSync("file1.txt", "utf-8");
// console.log(contents2);

// const contents3 = fs.readFileSync("file2.txt", "utf-8");
// console.log(contents3);

//------------------------------------------------------------------------------------------------------------------------

// Start all 3 tasks together, and wait for them to finish. 

// const fs = require("fs");

// fs.readFile("file.txt", "utf-8", function (err, contents) {
//   console.log(contents);
// });

// fs.readFile("file1.txt", "utf-8", function (err, contents) {
//   console.log(contents);
// });

// fs.readFile("file2.txt", "utf-8", function (err, contents) {
//   console.log(contents);
// });

//------------------------------------------------------------------------------------------------------------------------

// Asynchronous code, callbacks: Let’s look at the code to read from a file asynchronously. Here, we pass in a function as an argument. This function is called a callback since the function gets called back when the file is read 

// const fs = require("fs");
// function print(err, contents) {
//     if(err) {
//         console.log("File not found!")
//     } else {
//         console.log(contents);
//     }
// }
// fs.readFile("file.txt", "utf-8", print); // asynchronously

// fs.readFile("file1.txt", "utf-8", print); // asynchronously

// console.log("Done!");

//------------------------------------------------------------------------------------------------------------------------

// setTimeout: setTimeout is another asynchronous function that executes a certain code after some time

// function run() {
// 	console.log("I will run after 1s");
// }

// console.log("Hii !");

// setTimeout(run, 1000);

// console.log("I will run immedietely");

// let c = 0;
// for (let i = 0; i < 10000000000; i++) {
//     c += 1;
// }

// console.log("Expensive Operation Done!");

//------------------------------------------------------------------------------------------------------------------------

// function setTimeoutSync(timeout) {
//     let startTime = new Date();
//     while(1) {
//         let currentTime = new Date();
//         if (currentTime.getTime() - startTime.getTime() > timeout) {
//             break;
//         }
//     }
// }

// setTimeoutSync(1000);

// console.log("Hii there");