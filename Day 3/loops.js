// ----------------Loop Statements-----------------

// 1. While Loop

let num = 1;

while(num < 10){
    console.log(num);
    num = num + 2;
}

console.log('------------------------------');

// WAP that counts the number of digits in a number

let number = 123456;
let count = 0;

while(number != 0){
    number = Math.floor(number / 10);
    count++;
}

console.log('Number of digits:', count);    

console.log('------------------------------');

// take a number random check weather it is palindrome or not

let x = 393;
let revNum = 0;

let originalNum = x;

while(x > 0){
    let digit = x % 10;
    revNum = revNum * 10 + digit;
    x = Math.floor(x / 10);
}

if(originalNum === revNum){
    console.log(originalNum, 'is a palindrome number');
} else {
    console.log(originalNum, 'is not a palindrome number');
}

console.log('------------------------------');

// 2. Do While Loop

let i = 1;

do {
    console.log(i);
    i++;
} while(i <= 10);

console.log('------------------------------');

// first n fibonacci numbers using do while loop

let n = 10;
let a = 0, b = 1;
let cnt = 0;

do {
    console.log(a);
    let next = a + b;
    a = b;
    b = next;
    cnt++;
} while(cnt < n);

console.log('------------------------------');

// 3. For Loop

for(let i = 1; i <= 10; i++){
    console.log(i);
}

console.log('------------------------------');

let ccount = 1;
for(; ccount <= 10; ccount++){
    console.log(ccount);
}

console.log('------------------------------');

// find the factorial of number using for loop in function

function factorial(num){
    let fact = 1;
    for(let i = 1; i <= num; i++){
        fact = fact * i;
    }
    return fact;
}

let numx = 5;
let result = factorial(numx);
console.log('Factorial of', numx, 'is', result);

console.log('------------------------------');

// infinite loop for loop
// for(;;){
//     console.log("Hello");
// }

// infinite loop but no body
// for(;;);

console.log('------------------------------');

// print multiplication table of a given number 6

let numm = 6;

for(let i = 1; i <= 10; i++){
    console.log(numm, 'x', i, '=', numm * i);
}

console.log('------------------------------');
// write a code to check weather given num is perferct number or not in function
// A perfect number is a positive integer that is equal to the sum of its proper positive divisors, excluding the number itself.

function isPerfectNumber(num){
    let sum = 0;
    for(let i = 1; i <= num / 2; i++){
        if(num % i === 0){
            sum += i;
        }
    }
    return sum === num;
}

let numberToCheck = 28;
if(isPerfectNumber(numberToCheck)){
    console.log(numberToCheck, 'is a perfect number');
} else {
    console.log(numberToCheck, 'is not a perfect number');
}

console.log('------------------------------');

// to check weather a number is Strong number or not
// A strong number is a number in which the sum of the factorial of each digit is equal to the original number.

function factorialOfDigit(digit){
    let fact = 1;
    for(let i = 1; i <= digit; i++){
        fact *= i;
    }
    return fact;
}

function isStrongNumber(num){
    let sum = 0;
    let originalNum = num;
    
    while(num > 0){
        let digit = num % 10;
        sum += factorialOfDigit(digit);
        num = Math.floor(num / 10);
    }
    
    return sum === originalNum;
}

let strongNumToCheck = 145;
if(isStrongNumber(strongNumToCheck)){
    console.log(strongNumToCheck, 'is a strong number');
} else {
    console.log(strongNumToCheck, 'is not a strong number');
}

console.log('------------------------------');

// ArmStrong Number
// An Armstrong number is a number that is equal to the sum of its own digits each raised to the power of the number of digits.

function isArmstrongNumber(num){
    let sum = 0;
    let originalNum = num;
    let digits = num.toString().length;
    
    while(num > 0){
        let digit = num % 10;
        sum += Math.pow(digit, digits);
        num = Math.floor(num / 10);
    }
    
    return sum === originalNum;
}

let armstrongNumToCheck = 153;
if(isArmstrongNumber(armstrongNumToCheck)){
    console.log(armstrongNumToCheck, 'is an Armstrong number');
} else {
    console.log(armstrongNumToCheck, 'is not an Armstrong number');
}

console.log('------------------------------');


// 4. For...in Loop

let person = {
    name: 'John',
    age: 30,
    city: 'New York'
};

for(let key in person){
    console.log(key + ': ' + person[key]);
}

console.log('------------------------------');

// create array of 5 elements  try to find sum of all elements in array 

let arr = [1, 2, 3, 4, 5];
let sum = 0;

for(let index in arr){
    sum += arr[index];
}

console.log('Sum of array elements:', sum);

console.log('------------------------------');