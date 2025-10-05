// arrow function

const sub = (x, y) => (x - y); 

console.log(sub(4, 2));


// normal function

function add(x, y){
    return (x + y);
}

console.log(add(4, 2));

// callback function
function processUserInput(callback) {
    var name = "John";
    callback(name);
}

function greetUser(name) {
    console.log("Hello, " + name + "!");
}

processUserInput(greetUser);

// funt