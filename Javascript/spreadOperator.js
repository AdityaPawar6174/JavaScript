// spread operator = (...) allows an iterable such as an array and string
//                       to be expanded into separate elements (unpack the elements)

let numbers = [1,2,3,4,5];
let maximum = Math.max(...numbers);
let minimum = Math.min(...numbers);

// console.log(maximum);
// console.log(minimum);

// string

let username = "bro code";
let letters = [...username].join("");

console.log(letters);