// map, filter, arrow fns

// arrow function

// function sum(a, b) {
//     return a + b;
// }

// const sum = (a, b) => {
//     return a + b;
// }

// app.get("/", function(req, res) {

// })

// app.get("/", (req, res) => {

// })

// const ans = sum(1, 2);
// console.log(sum);

//----------------------------------------------------------------------------------------------------------------------------------------------

// map

// const input = [1, 2, 3, 4, 5];

// transform = (i) => {
//     return i * 2;
// }

// const ans = input.map(transform);
// console.log(ans);

//----------------------------------------------------------------------------------------------------------------------------------------------

// filter

const input = [1, 2, 3, 4, 5];

const ans = input.filter((n) => {
    return n % 2 === 0;
});

console.log(ans);