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

const FILE_NAME = "todos.json";

// Helper function to load todos from file
function loadTodos() {
  if (!fs.existsSync(FILE_NAME)) {
    return [];
  }
  const data = fs.readFileSync(FILE_NAME, "utf8");
  return JSON.parse(data);
}

// Helper function to save todos to file
function saveTodos(todos) {
  fs.writeFileSync(FILE_NAME, JSON.stringify(todos, null, 2));
}

program
  .name("todo")
  .description("CLI Todo App using Filesystem")
  .version("1.0.0");

// Add command
program
  .command("add")
  .description("Add a new todo")
  .argument("<task>", "The todo task")
  .action(function (task) {
    const todos = loadTodos();
    todos.push({ task: task, done: false });
    saveTodos(todos);
    console.log('✅ Added todo: "' + task + '"');
  });

// List command
program
  .command("list")
  .description("List all todos")
  .action(function () {
    const todos = loadTodos();
    if (todos.length === 0) {
      console.log("🗒️ No todos found.");
    } else {
      todos.forEach(function (todo, index) {
        const status = todo.done ? "✅" : "❌";
        console.log((index + 1) + ". " + status + " " + todo.task);
      });
    }
  });

// Mark as done command
program
  .command("done")
  .description("Mark a todo as done")
  .argument("<index>", "Index of the todo to mark as done")
  .action(function (index) {
    const todos = loadTodos();
    const idx = parseInt(index) - 1;
    if (idx >= 0 && idx < todos.length) {
      todos[idx].done = true;
      saveTodos(todos);
      console.log("🎉 Marked todo #" + index + " as done");
    } else {
      console.log("❌ Invalid index");
    }
  });

// Delete command
program
  .command("delete")
  .description("Delete a todo")
  .argument("<index>", "Index of the todo to delete")
  .action(function (index) {
    const todos = loadTodos();
    const idx = parseInt(index) - 1;
    if (idx >= 0 && idx < todos.length) {
      const removed = todos.splice(idx, 1);
      saveTodos(todos);
      console.log('🗑️ Deleted todo: "' + removed[0].task + '"');
    } else {
      console.log("❌ Invalid index");
    }
  });

program.parse();

//------------------------------------------------------------------------------------------------------------------------