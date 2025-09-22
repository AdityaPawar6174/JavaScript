// ------------non primitive data types in javascript-----------------

// 1. Arrays
let arr = [1,2,3,4,5,"Aditya",true];
console.log(typeof arr);
console.log(arr[5]);

// 2. Objects

let person = {
    name: "Aditya",
    age:22,
    dob: "03-09-2003"
};

console.log(typeof person);
console.log(person);

// 3. Functions

function add(a,b) {
    return a+b;
}

console.log(typeof add);
console.log(add(5,6));

// ------------- calculator -----------------

let num1 = 10;
let num2 = 5;

console.log("Addition: ", num1+num2);
console.log("Subtraction: ", num1-num2);
console.log("Multiplication: ", num1*num2);
console.log("Division: ", num1/num2);
console.log("Modulus: ", num1%num2);
console.log("Exponentiation: ", num1**num2);


// ------------- comparison operators -----------------

console.log(5 == '5'); //loose equality operator
console.log(5 === '5'); //strict equality operator
console.log(5 != '5'); //loose not equal operator
console.log(5 !== '5'); //strict not equal operator
console.log(5 > 3);
console.log(5 < 3);
console.log(5 >= 5);
console.log(5 <= 3);

// ------------- logical operators -----------------

console.log(true && true);
console.log(true && false);
console.log(false && false);

console.log(true || true);
console.log(true || false);
console.log(false || false);

console.log(!true);
console.log(!false);

// ------------- ternary operator -----------------

let age = 18;
let canVote = (age >= 18) ? "Yes" : "No";
console.log(canVote);

// the largest among 3 numbers using ternary operator

let a = 10;
let b = 20;
let c = 15;

let largest = (a >= b) ? ( (a >= c) ? a : c ) : ( (b >= c) ? b : c );
console.log("Largest number is: ", largest);

// int value and print its absolute value
let val = -10;
let absVal = (val >= 0) ? val : -val;
console.log("Absolute value is: ", absVal);

// odd or even
let number = 7;
let oddEven = (number % 2 == 0) ? "Even" : "Odd";
console.log("The number is: ", oddEven);