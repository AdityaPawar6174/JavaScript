// Asynchronous programming in JavaScript

console.log("task 1");

setTimeout(() => {
  console.log("task 2 after 2 seconds");
}, 2000);

console.log("task 3"); // task 3 will be executed before task 2 because setTimeout is asynchronous

// key components of asynchronous programming
// 1. Call stack --> manages the execution of code
// 2. web api --> provides browser APIs for asynchronous tasks
// 3. callback queue --> holds callbacks to be executed after the current stack is empty
// 4. event loop --> continuously checks the call stack and the callback queue

let users = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
  { id: 3, name: "Doe" },
];

function getUsers() {
  setTimeout(() => {
    let user = users.find((u) => u.id === 2);
    console.log("user fetched", user);
    return user;
  }, 4000);
}

console.log("start");
let user = getUsers(1);
console.log("Result: ", user); // undefined because getUsers is asynchronous
console.log("end");

// calculate sum with callback (Call back hell)
// async funcs add multiply subtract
// each function take 2 arguments and a callback
// ((5+10)*2)-5

function add(a, b, callback) {
  setTimeout(() => {
    let sum = a + b;
    console.log("sum: ", sum);
    callback(sum);
  }, 2000);
}

function multiply(a, b, callback) {
  setTimeout(() => {
    let product = a * b;
    console.log("product: ", product);
    callback(product);
  }, 2000);
}

function subtract(a, b, callback) {
  setTimeout(() => {
    let difference = a - b;
    console.log("difference: ", difference);
    callback(difference);
  }, 2000);
}

add(5, 10, (sum) => {
  multiply(sum, 2, (product) => {
    subtract(product, 5, (difference) => {
      console.log("final result: ", difference);
    });
  });
});

// callback hell can be avoided using promises and async/await
