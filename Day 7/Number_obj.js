// Number Object in JavaScript
// It is used to work with numerical values and perform various operations related to numbers.

let str = "123.456";
let num = 123.456;

console.log(Number(str)); // Output: 123.456
console.log(String(num)); // Output: "123.456"

console.log(parseInt(str)); // Output: 123

console.log(num.toFixed(2)); // Output: "123.46"
console.log(num.toPrecision(4)); // Output: "123.5"
console.log(num.toExponential(2)); // Output: "1.23e+2"
console.log(num.toLocaleString("en-IN")); // Output: "123.456" (format may vary based on locale) // en-IN for Indian format

console.log(Number.MAX_VALUE); // Output: 1.7976931348623157e+308
console.log(Number.MIN_VALUE); // Output: 5e-324

console.log(Number.POSITIVE_INFINITY); // Output: Infinity
console.log(Number.NEGATIVE_INFINITY); // Output: -Infinity

console.log(Number.isInteger(num)); // Output: false
console.log(Number.isNaN(NaN)); // Output: true

console.log("--------------------");

// write a js code to display the number 573506 as rs dollars
let amount = 573506;
console.log(amount.toLocaleString("en-IN", {style: "currency", currency: "INR"}));
console.log(amount.toLocaleString("en-US", {style: "currency", currency: "USD"}));

// BMI rounded to 2 decimal places
let weight = 70;
let height = 1.75;
let bmi = weight / (height * height);
console.log(bmi.toFixed(2)); // Output: 22.86
