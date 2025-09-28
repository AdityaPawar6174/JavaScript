// variable scope --> where variable is accessed 
//                    locally or globally
let z = 3; // global var

function function1(){
    let x = 1; // local var
    console.log(x);
}


function function2(){
    let y = 2;
    console.log(y);
    console.log(z);
}

function1();
function2();