// Classes

// class Rectangle {
//     constructor(width, height, color) {
//         this.width = width;
//         this.height = height;
//         this.color= color;
//     }

//     area() {
//         const area = this.height * this.width;
//         const area2 = () => {
//             return this.height * this.width;
//         }
//         console.log(`area2: ${area2()}`);
//         return area;
//     }

//     paint() {
//         console.log(`Painting with color ${this.color}`);
//     }
// }

// const rect = new Rectangle(2, 4, "red"); // creation of object called rect from the class rectangle

// const rect2 = new Rectangle(10, 20, "black");
// const area = rect.area();
// const area2 = rect2.area();

// // rect.destroy();
// console.log(area);

//------------------------------------------------------------------------------------------------------------------------

// Inheritance in classes

// // Base class
// class Shape {
//     constructor(color) {
//         this.color = color;
//     }

//     paint() {
//         console.log(`Painting with color ${this.color}`);
//     }

//     area() {
//         throw new Error('The area method must be implemented in the subclass');
//     }

//     getDescription() {
//         return `A shape with color ${this.color}`;
//     }
// }

// // Circle inherits from Shape
// class Circle extends Shape {
//     constructor(radius, color) {
//         super(color);
//         this.radius = radius;
//     }

//     area() {
//         return Math.PI * this.radius * this.radius;
//     }

//     getDescription() {
//         return `A circle with radius ${this.radius} and color ${this.color}`;
//     }
// }

// // Rectangle inherits from Shape
// class Rectangle2 extends Shape {
//     constructor(width, height, color) {
//         super(color);
//         this.width = width;
//         this.height = height;
//     }

//     area() {
//         return this.width * this.height;
//     }

//     getDescription() {
//         return `A rectangle with width ${this.width}, height ${this.height} and color ${this.color}`;
//     }
// }

// // Create and use Circle
// const circle = new Circle(2, "red");
// const circleArea = circle.area();
// console.log("Circle area:", circleArea);
// circle.paint();
// console.log(circle.getDescription());

// // Create and use Rectangle2
// const rect3 = new Rectangle2(5, 10, "blue");
// const rect3Area = rect3.area();
// console.log("Rectangle area:", rect3Area);
// rect3.paint();
// console.log(rect3.getDescription());

//------------------------------------------------------------------------------------------------------------------------

// Some more classes

// Date
// const date = new Date();
// console.log(date.getMonth());

// Maps
// const map = new Map();
// map.set('name', 'Alice');
// map.set('age', 30);
// console.log(map.get('name'));

// Strings
// var str = "harkirat";
// str.toLocaleLowerCase();
// console.log(str);

//------------------------------------------------------------------------------------------------------------------------