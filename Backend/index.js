// import chalk from 'chalk';

// console.log(chalk.blue('Hello, world!'));
// console.log(chalk.red.bold('This is an error message.'));
// console.log(chalk.green.underline('This is a success message.'));

//------------------------------------------------------------------------------------------------------------------------

// Create a command line interface that lets the user specify a file path and the nodejs process counts the number of words inside it.

// const fs = require("fs");
// function main(fileName) {
//   console.log(process.argv);
//   fs.readFile(fileName, "utf-8", function (err, data) {
//     let total = 0;
//     for (let i = 0; i < data.length; i++) {
//       if(data[i] === " ")
//         total++;
//     }
//     console.log(total);
//   });
// }
// main(process.argv[2]);

// Using commander library

// const fs = require("fs");
// const { Command } = require("commander");
// const program = new Command();

// program
//   .name("counter")
//   .description("CLI to do file based tasks")
//   .version("0.8.0");

// program
//   .command("count")
//   .description("Count the number of words in a file")
//   .argument("<file>", "file to count words in")
//   .action(function (file) {
//     fs.readFile(file, "utf8", function (err, data) {
//       if (err) {
//         console.log(err);
//       } else {
//         // Split by whitespace and filter out empty strings
//         const words = data.trim() === "" ? 0 : data.trim().split(" ").length;
//         console.log(`There are ${words} words in ${file}`);
//       }
//     });
//   });

// program.parse();

//------------------------------------------------------------------------------------------------------------------------

// Filesystem based todo list.
// Create a cli that lets a user: Add a todo, Delete a todo, Mark a todo as done, Store all the data in files (todos.json)

const fs = require("fs");
const { Command } = require("commander");
const program = new Command();




//------------------------------------------------------------------------------------------------------------------------

