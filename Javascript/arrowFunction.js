// arrow function --> a concise way to write function expressions good for simple functions that you use only once 
//                    (parameters) => some code

const hello = () => console.log("Hello");

const hey = (name, age) => {
    console.log(`Hey ${name}`);
    console.log(`You are ${age} years old`);
}

// ------------------------------------------------------------------

const numbers = [1,2,3,4,5,6];

const squares = numbers.map((element) => Math.pow(element, 2));
const cubes = numbers.map((element) => Math.pow(element, 3));
const evenNum = numbers.filter((element) => element % 2 === 0);
const oddNum = numbers.filter((element) => element & 2 !== 0);
const sum = numbers.reduce((accumulator, element) => accumulator + element);


console.log(squares);
console.log(cubes);
console.log(evenNum);
console.log(oddNum);
console.log(sum);


