// .filter() --> creates a new array by filtering out elements

let numbers = [1,2,3,4,5,6,7,8,9,10];
let evenNum = numbers.filter(isEven);
let oddNum = numbers.filter(isOdd);

console.log(evenNum);
console.log(oddNum);

function isEven(element) {
    return element % 2 === 0;
}
function isOdd(element){
    return element % 2 !== 0; 
}