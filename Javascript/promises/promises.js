
// promise 1

// creation of promises
const promise1 = new Promise(function(resolve, reject){
    // Do an async task
    // DB calls, cryptography, network calls

    setTimeout(function(){
        console.log("asnyc task is complete");
        resolve();
    }, 1000);
})


promise1.then(function(){
     console.log("Promise comsumed");
})


// promise 2
// in the single operation 
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("async task 2");
        resolve();
    }, 2000);
}).then(function(){
    console.log("async 2 resolved");
})

// Promise 3
const promise3 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "adi", email:"adi@gmail.com"})
    },3000)
})

promise3.then(function(user){
    console.log(user);
})

// promise 4
const promise4 = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:"aditya", password:"123"});
        } else {
            reject('ERROR: something went wrong')
        }
    }, 4000)
})
promise4.then().catch()