const arr = [10, 20, 30, 40, 50];

const newArr = arr.map((arr) => arr * 2).filter((arr) => arr >= 50);
console.log(newArr);

// --------------------------------------------

let date = new Date();
console.log(date);
console.log(date.toUTCString());
console.log(date.toISOString());
