// Template Literal
// it is a way to embed expressions inside string literals, using backticks (`) instead of single or double quotes.

function greet(name){
    return `hello, ${name}`;
}

console.log(greet("Aditya"));
console.log(`The greeting message is: ${greet("Aditya")}`);

let num1 = 10;
let num2 = 20;

console.log(num1 + num2);
console.log(`sum of ${num1} and ${num2} is ${num1 + num2}`);

// multiline strings

str = `I am 
aditya`;
console.log(str);

console.log("--------------------------------------------------");

// High Order Functions
// A higher-order function is a function that either takes one or more functions as arguments or returns a function as its result.

function prepareInput(callback){
    let name = "Aditya";
    return callback(name);
}

console.log(prepareInput(greet));

// define a function calculates square that takes a number and returns a string 
// The square of 4 is 16
// process number that takes a number and callback function as arguments

function calculatesSquare(num){
    return `The square of ${num} is ${num * num}`;
}

function processNumber(num, callback){
    return callback(num);
}

console.log(processNumber(4, calculatesSquare));

console.log("--------------------------------------------------");

// Arrow Functions
// Arrow functions provide a more concise syntax for writing function expressions.

// no parameter
const msg = () => console.log("Welcome");
msg();

// one parameter
const findCube = (x) => x * x * x;
console.log(findCube(3));

// two parameters
const add = (num1, num2) => {
    return num1 + num2;
}
console.log(add(5,6));

// default parameters
const multiply = (a, b = 2) => a * b;
console.log(multiply(5));

// arrow function as callback
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(n => n * n);
console.log(squares);

// write an arrow function calculateAverage() that takes 4 numbers and returns their average
const calculateAverage = (a, b, c, d) => (a + b + c + d) / 4;
console.log(calculateAverage(4, 8, 12, 16));


// Develop a simple math calculator using arrow function
const calculator = (num1, num2, operation) => {
    switch(operation){
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            return "Invalid operation";
    }
}

console.log(calculator(10, 5, '+'));
console.log(calculator(10, 5, '-'));
console.log(calculator(10, 5, '*'));
console.log(calculator(10, 5, '/'));

console.log("--------------------------------------------------");

// Pure VS Impure Functions
// Pure Function: A pure function is a function that, given the same input, will always return the same output and does not have any side effects (it does not modify any external state or variables).
// Impure Function: An impure function is a function that may produce different outputs for the same input or has side effects (it modifies external state or variables).

// Pure Function Example
let pi = 3.14; // external variable

function calculateArea(radius){
    return pi * radius * radius; // uses external variable but does not modify it
}

console.log(calculateArea(5)); // 78.5
console.log(calculateArea(5)); // 78.5

// Impure Function Example
let counter = 0; // external variable

function incrementCounter(){
    counter++; // modifies external variable
    return counter;
}

console.log(incrementCounter()); // 1
console.log(incrementCounter()); // 2

console.log("--------------------------------------------------");

// Built-in functions

// parseInt()
console.log(parseInt("123")); // 123
console.log(parseFloat("122.25"));

// isNan()
console.log(isNaN("Hello")); // true

// isFinite()
console.log(isFinite(123)); // true
console.log(isFinite(Infinity)); // false

// Number()
console.log(Number("123")); // 123
console.log(Number("123abc")); // NaN

// String()
console.log(String(123)); // "123"
console.log(String(true)); // "true"

// Boolean()
console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean("Hello")); // true
console.log(Boolean("")); // false

console.log("--------------------------------------------------");

// 1. String Functions
let text = "Hello, welcome to the world of JavaScript";

// length
console.log(text.length); // 36

// toUpperCase
console.log(text.toUpperCase()); // "HELLO, WELCOME TO THE WORLD OF JAVASCRIPT"

// toLowerCase
console.log(text.toLowerCase()); // "hello, welcome to the world of javascript"

// includes
console.log(text.includes("JavaScript")); // true

// replace
console.log(text.replace("JavaScript", "Programming")); // "Hello, welcome to the world of Programming"

// split
console.log(text.split(" ")); // ["Hello,", "welcome", "to", "the", "world", "of", "JavaScript"]

console.log("--------------------------------------------------");

// 2. Array Functions
let num = [1, 2, 3, 4, 5];

// push
numbers.push(6);
console.log(num); // [1, 2, 3, 4, 5, 6]

// pop
numbers.pop();
console.log(num); // [1, 2, 3, 4, 5]

// shift
numbers.shift();
console.log(num); // [2, 3, 4, 5]

// unshift
numbers.unshift(0);
console.log(num); // [0, 2, 3, 4, 5]

// map
let squaresArr = numbers.map(n => n * n);
console.log(squaresArr); // [0, 4, 9, 16, 25]

// filter
let evenNumbers = numbers.filter(n => n % 2 === 0);
console.log(evenNumbers); // [0, 2, 4]

console.log("--------------------------------------------------");

