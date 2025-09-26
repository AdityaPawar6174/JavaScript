// Exception Handling
// It is a way to handle errors gracefully without crashing the program

console.log("------------------");

try{
    let result = 10 / 0;
    console.log("result is", result);
}
catch(error){
    console.log(error.message);
}
finally{
    console.log("Finally always executes");
}

console.log("------------------");

function divide(a, b){

    if(b === 0){
        throw new Error("Division by zero is not allowed");
    }
    return a / b;
}

try{
    console.log(divide(10,0));
}
catch(error){
    console.log(error.message);
}

console.log("------------------");

// parseUserData(jsonString) to an JSON Object....if Json is invalid handle the exception and return a Default Object with NAme = unknown, age=0

function parseUserData(jsonString){

    try{
        let user = JSON.parse(jsonString);
        return user;
    }
    catch(error){
        console.log("Invalid JSON string, returning default user");
        return {name: "unknown", age: 0};
    }
}

let data = '{"name": "Aditya", "age": 22}';
let user = parseUserData(data);
console.log(user);

let data2 = '{"name": "Aditya", "age": 22'; 
let user2 = parseUserData(data2);
console.log(user2);

console.log("------------------");

// ES6 modules

// create variables / functions / classes and export them

// ---> check module1.js <---
// --> check testModule.js <---

