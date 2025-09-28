// callback --> A function that is passed as an argument
//              to another function.


function hello(callback){
    console.log("Hello");
    callback();
}

function leave(){
    console.log("Leave");
}

function goodbye(){
    console.log("Goodbye!");
}

// hello(goodbye);

//---------------------------------------------------

function sum(callback, x, y){
    let result = x + y;
    callback(result);
}

function displayConsole(result){
    console.log(result);
}

sum(displayConsole, 5, 78);