// string.slice(start, end)

const fullName = "Aditya Pawar";

// let firstName = fullName.slice(0, 6);
// let lastName = fullName.slice(7);

// let firstChar = fullName.slice(0,1);
// let lastChar = fullName.slice(-1);

// console.log(firstName);
// console.log(lastName);

// console.log(firstChar);
// console.log(lastChar);

/*****************************************/

let firstName = fullName.slice(0, fullName.indexOf(" "));
let lastName = fullName.slice(fullName.indexOf(" ")+1);

console.log(firstName);
console.log(lastName);