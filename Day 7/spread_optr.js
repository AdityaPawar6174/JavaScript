// Spread Operator

// The spread operator (...) allows an iterable such as an array or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.

let nums = [1, 2, 3];
console.log(...nums); // Output: 1 2 3

let num1 = [...nums];
console.log(num1); // Output: [1, 2, 3]

let num2 = [10, 20, 30, 40];

// Merging two arrays using spread operator
let num3 = [...num1, ...num2];
console.log(num3); // Output: [1, 2, 3, 10, 20, 30, 40]

let str = "Hello";
console.log([...str]); // Output: ['H', 'e', 'l', 'l', 'o']


function sum(a, b, c){
    return a + b + c;
}

let result = sum(...num2);
console.log(result); // Output: 60 (10 + 20 + 30)

console.log("--------------------");

// copy an array of numbers and add 2 extra numbers at the end
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [...arr1, 6, 7];
console.log(arr2); // Output: [1, 2, 3, 4, 5, 6, 7]

// find maximum and minimum number in an array
let arr3 = [10, 20, -30, 40, 50];
console.log(Math.max(...arr3)); // Output: 50
console.log(Math.min(...arr3)); // Output: -30

