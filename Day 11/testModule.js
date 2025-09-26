// Named export import
import { num1, num2, add } from "./module.js";

// default export import
import Calculator from "./module.js";

console.log(num1 + num2);
console.log(add(10, 20));

let calc = new Calculator();
console.log(calc.multiply(5, 6));

console.log("------------------");

// import Book class from BookClass.js
import Book from "./BookClass.js";

let book1 = new Book("Harry Potter", "J.K. Rowling", 2003, 1);
console.log(book1.getDetails());
console.log(book1.borrow());
// it will say not available
console.log(book1.borrow());
console.log(book1.returnBook());

console.log("------------------");