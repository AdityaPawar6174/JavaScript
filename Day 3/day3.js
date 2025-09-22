// ---------------PROPERTIES OF LOGICAL OPERATORS-------------------

var num1 = 10;
var num2 = num1++;

console.log(num1);
console.log(num2);  

// explanation:
// In the code above, we have two variables: num1 and num2.
// num1 is initialized to 10. The expression num1++ is a post-increment operation, 
// which means that the current value of num1 (which is 10) is assigned to num2 first, and then num1 is incremented by 1.
// Therefore, after the execution of these lines:
// - num1 becomes 11 (after the increment).
// - num2 is assigned the value 10 (the original value of num1 before the increment).
// When we log the values to the console:
// - console.log(num1); outputs 11.
// - console.log(num2); outputs 10.

console.log('------------------------------');
// ----------------------------------

let a1 = 10;
let b1 = 0;
let c1 = b1++ && a1++;

console.log(a1); 
console.log(b1); 
console.log(c1);

console.log('------------------------------');
// ----------------------------------


let a2 = 10;
let b2 = 0;
let c2 = ++b2 && a2++;

console.log(a2); 
console.log(b2); 
console.log(c2);

console.log('------------------------------');
// ----------------------------------

let a3 = 10;
let b3 = 0;
let c3 = ++b3 || a3++;

console.log(a3); 
console.log(b3); 
console.log(c3);

console.log('------------------------------');


// ------------BIT WISE OPERATORS----------------------

// write a js code to check weather the given number is even or odd using bitwise operator

let number = 5;

if (number & 1) {
    console.log("Number is odd");
} else {
    console.log("Number is even");
}

// swap two numbers using 3rd variable

let x = 5;
let y = 10;
let temp;

temp = x;
x = y;
y = temp;

console.log("After swapping using 3rd variable: x =", x, "y =", y);
console.log('------------------------------');

// ---------Switch Case Statement-----------------
// Multiway decision making

let day = 3;


switch(day)
{
    case 1:
        console.log("Moday");
        break;
    
    case 2:
        console.log("Tuesday");
        break;
        
    case 3:
        console.log("Wednesday");
        break;

    case 4: 
        console.log("Thursday");
        break;

    case 5:
        console.log("Friday");
        break;
        
    case 6:
        console.log("Saturday");
        break;

    case 7:
        console.log("Sunday");
        break;
    
    default:    
        console.log("Invalid day");
        break;
}

console.log('------------------------------');

// calculator ---> num1, num2,  Operation, ( + - * / %)

let num1 = 10;
let num2 = 5;
let operation = '*';

switch(operation)
{
    case '+':
        console.log(num1 + num2);
        break;
        
    case '-':
        console.log(num1 - num2);
        break; 
    
    case '*':
        console.log(num1 * num2);
        break;
    
    case '/':
        console.log(num1 / num2);
        break;
    
    case '%':
        console.log(num1 % num2);
        break;
    
    default:
        console.log("Invalid operation");
        break;            
}

console.log('------------------------------');

