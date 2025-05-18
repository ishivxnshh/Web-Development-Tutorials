// 1. Variables
var x = 10; // function-scoped
let y = 5;  // block-scoped
const PI = 3.14; // block-scoped, cannot change

// 2. Data Types
let str = "Hello";
let num = 42;
let bool = true;
let obj = { name: "Alice" };
let arr = [1, 2, 3];
let n = null;
let u; // undefined
let sym = Symbol("id");

// 3. Operators
let sum = 2 + 3;
let isEqual = (5 === '5'); // false
let and = (true && false);

// 4. Functions
function greet(name) { return "Hello, " + name; }
const add = (a, b) => a + b;

// 5. Conditionals
if (x > 5) {
    console.log("x is big");
} else {
    console.log("x is small");
}

// 6. Loops
for (let i = 0; i < 3; i++) { console.log(i); }
let i = 0;
while (i < 3) { console.log(i); i++; }
do { console.log(i); i++; } while (i < 3);

// 7. Arrays
let fruits = ["apple", "banana"];
fruits.push("cherry");
console.log(fruits[0]); // "apple"

// 8. Objects
let person = { name: "Bob", age: 25 };
console.log(person.name);