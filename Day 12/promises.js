// creation of promise

// promise 1
const promise1 = new Promise(function (resolve, reject) {
  // Do an async task
  // DB calls, cryptography, network calls

  setTimeout(function () {
    console.log("asnyc task is complete");
    resolve();
  }, 1000);
});

promise1.then(function () {
  console.log("Promise 1 comsumed");
});

// -----------------------------------------------------------------------

// promise 2
// in the single operation
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("async task 2");
    resolve();
  }, 2000);
}).then(function () {
  console.log("async 2 resolved");
});

// -----------------------------------------------------------------------

// Promise 3
const promise3 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("promise 3 executing");
    resolve({ username: "adi", email: "adi@gmail.com" });
  }, 3000);
});

promise3.then(function (user) {
  console.log(user);
});

// -----------------------------------------------------------------------

// promise 4
const promise4 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false; // accroding to actual execution...errors will occcur
    if (!error) {
      console.log("promise 4 executing");
      resolve({ username: "aditya", password: "123" });
    } else {
      reject("ERROR: something went wrong");
    }
  }, 4000);
});

// chaining
const username = promise4
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    // promise chaining
    console.log(username);
  })
  .catch(function (error) {
    // handles errors
    console.log(error);
  })
  .finally(()=> console.log("promise either resolved or rejected"));    // this will be executed confirmed 

// -----------------------------------------------------------------------

// promise 5
const promise5 = new Promise((resolve, reject) => {
      setTimeout(function () {
    let error = true;
    if (!error) {
      console.log("promise 5 executing");
      resolve({ username: "JavaScript", password: "123" });
    } else {
      reject("ERROR: JS went wrong!!!");
    }
  }, 5000);  
}); 

// handling promise with async await

async function consumePromiseFive(){
    try {
        const response = await promise5;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive();

// -----------------------------------------------------------------------

// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

// getAllUsers();

// using above code in .then() .catch()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
})