// Functions

function hello(){
    console.log("Hello, World!");
}

hello();

// self invoking function

(function greet(){
    console.log("Greetings!");
})
();

console.log("--------------------");

// write a function that takes two numbers as arguments and returns their sum

function add(a, b){
    return a + b;
}

console.log(add(2, 3)); 
console.log("--------------------");

// define a function that takes a number and returns the factorial of that number

function factorial(n){
    if(n === 0 || n === 1){
        return 1;
    }
    return n * factorial(n - 1);
}

console.log(factorial(5));
console.log("--------------------");


// Varible scope

{
    let x = 10;  // block scope
    const y = 20; // block scope
    var z = 30;   // function scope
    console.log(x);
    console.log(y);
}

// console.log(x); // ReferenceError: x is not defined
// console.log(y); // ReferenceError: y is not defined
console.log(z); // 30

console.log("--------------------");

// hoisting 
// It is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compile phase. 
// This means that you can use variables and functions before they are declared in the code.
console.log(a); // undefined
var a = 5;
console.log(a); // 5

console.log("--------------------");

// closure                        
// inner function remembers the environment in which it was created

function outer(){
    let outerVariable = "I'm outer variable";

    function inner(){
        console.log(outerVariable);
    }

    return inner;
}

let closure = outer();
closure();


console.log("--------------------");

// write a function that returns counter = 0 increament() count++ print count

function counter(){
    let count = 0;
    return function(){
        count++;
        return count;
    };
}

let increment = counter();
console.log(increment());
console.log(increment());
console.log(increment());

console.log("--------------------");


// Nested function

function outerFunction(){
    console.log("This is the outer function");
    
    function innerFunction(){
        console.log("This is the inner function");
    }
    innerFunction();
}

outerFunction();

console.log("--------------------");


function sum(a=3, b){
	console.log(a+b);
}

sum(10);

console.log("--------------------");

function addition(... numbers){
    let sum = 0;

    for(let number of numbers){
        sum += number;
    }
    return sum;
}

console.log("Addition:",addition(1,2,3,4,5));

console.log("--------------------");

// average that accepts any number of arguments and returns the average of those numbers

function average(... nums){
    let sum = 0;

    for(let num of nums){
        sum += num;
    }
    return sum / nums.length;
}

console.log("Average:", average(1,2,3,4,5));

console.log("--------------------");

// Pass by reference vs Pass by value
// pass by value
function update(a){
    a++;
    console.log(a);
}

console.log("pass by value:");
update(5); // 6

// pass by reference
let obj = {name: "John"};

function changeName(o){
    o.name = "Doe";
}

changeName(obj);
console.log("pass by reference:",obj.name); // Doe

console.log("--------------------");

// Destructure function parameters
// A way to extract values from objects or arrays and assign them to variables in a more concise way.

function showdata({name, age}){
    console.log("Name:", name);
    console.log("Age:", age);
}

let user = {name: "Alice", age: 25};
showdata(user);

console.log("--------------------");

