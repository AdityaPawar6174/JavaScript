// ++++++++++++++ Promises ++++++++++++++++++++++++++

// // Q1  --> Create a promise that resolves after 2 seconds with the message "Data loaded" and log it using .then().

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Data loaded");
//   }, 2000);
// });

// p1.then((data) => {
//   console.log(data);
// });

// // Q2 --> Create a promise that rejects after 3 seconds with the message "Server Error" and handle it using .catch().

// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("Server Error");
//   }, 2000);
// });

// p2.catch((err) => {
//   console.log(err);
// });

// // Q3 --> Write a promise that resolves if a random number is even and rejects if it’s odd.

// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let success = true;
//     if (success) {
//       resolve("Success!!!");
//     } else {
//       reject("ERROR!!!");
//     }
//   }, 3000);
// });

// p3.then((data) => console.log(data)).catch((err) => console.error(err));

// // Q4 --> Implement a function delay(ms) that returns a promise resolved after ms milliseconds.

// function delay() {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       let success = true;
//       if (success) {
//         res("success");
//       } else {
//         rej("Error");
//       }
//     }, 2000);
//   });
// }

// delay()
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

//+++++++++++++++++++++ Promises chaining +++++++++++++++++++++++

// function step1() {
//   return new Promise(resolve => {
//     setTimeout(() => resolve("Step 1 complete"), 1000);
//   });
// }

// function step2(previousResult) {
//   return new Promise(resolve => {
//     setTimeout(() => resolve(`${previousResult} → Step 2 complete`), 1000);
//   });
// }

// function step3(previousResult) {
//   return new Promise(resolve => {
//     setTimeout(() => resolve(`${previousResult} → Step 3 complete`), 1000);
//   });
// }

// step1()
//   .then(result => step2(result))
//   .then(result => step3(result))
//   .then(finalResult => console.log(finalResult))
//   .catch(error => console.error(error));

// Q1  --- Chain 3 promises — each should print a message after 1s delay, in order: "Start" → "Processing" → "Done".

// function start() {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res("Start...");
//     }, 1000);
//   });
// }

// function processing(prevResult) {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res(`${prevResult} Processing...`);
//     }, 2000);
//   }, 2000);
// }

// function done(prevResult) {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res(`${prevResult} Done...`);
//     }, 3000);
//   });
// }

// start()
//   .then((data1) => processing(data1))
//   .then((data2) => done(data2))
//   .then((data3) => console.log(data3))
//   .catch((error) => console.error(error));

// Q2 --- Create a function square(num) returning a promise that resolves to its square after 1s. Chain 3 calls: 2 → 4 → 16.

// function square(number) {
//   return new Promise((res, rej) => {
//     let square = number * number;
//     setTimeout(() => {
//       console.log(`Square of ${number} is ${square}`);
//       res(square);
//     }, 1000);
//   });
// }

// square(2)
//   .then((s1) => square(s1))
//   .then((s2) => square(s2))
//   .then((s3) => square(s3))
//   .catch((err) => console.error(err));

// Q3 --> Simulate 3 API calls using setTimeout and promises — fetch user, fetch posts by user, fetch comments for the post.

// ++++++++++++++++++++++++++ Promies.all +++++++++++++++++++++++++++++++++=

// Q1
// Using Promise.all:
// Create 3 promises that resolve after 1, 2, and 3 seconds respectively.
// Use Promise.all to log "All tasks done" after all complete.

// const p1 = new Promise((res, rej) => setTimeout(() => res("Sucess"), 1000));

// const p2 = new Promise((res, rej) => setTimeout(() => res("Success"), 2000));


// const p3 = new Promise((res, rej) =>
//   setTimeout(() => res({ name: "Aditya", age: 21 }), 3000)
// );

// const p4 = Promise.resolve("Solved")

// Promise.all([p1, p2, p3, p4])
//   .then((result) => console.log(result))
//   .catch((err) => console.error(err));

// +++++++++++++++++++ Async / Await ++++++++++++++++++++++

// Syntax --> 
// async function functionName() {
//   try {
//     // Await pauses the function until the promise resolves
//     const result1 = await promise1;
//     const result2 = await promise2;

//     // Code runs sequentially in a clean, readable way
//     console.log(result1, result2);
//   } catch (error) {
//     // Handles any rejected promise
//     console.error('Error occurred:', error);
//   }
// }


// Q1 --> Await with Delay: Recreate the earlier delay(ms) using async/await syntax.

function delay(ms) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      let success = true;
      if (success) {
        res("success");
      } else {
        rej("Error");
      }
    }, ms);
  });
}

// // With Promise
// delay()
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// with async await
async function asyncDelay() {
    
    try{
        const data = await delay(1000);
        console.log(data);

        const data2 = await delay(3000);
        console.log(data2);
    }
    catch(err){
        console.error("Error", err);
    }

}

asyncDelay();

// ---------------2nd Approach---------------------------

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function runWithDelay() {
  console.log("Task started...");

  await delay(2000); // waits for 2 seconds

  console.log("2 seconds have passed!");
  await delay(1000);

  console.log("3 seconds total elapsed.");
}

// Q2 --> 