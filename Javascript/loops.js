// while loop ******************************

/*
let userName = "";

while(userName === "" || userName === null){
    userName = window.prompt();
}

console.log(`Hello ${userName}`);
*/

// Do-while loop ******************************

/*
let userName;

do{
    userName = window.prompt();
}
while(userName === "" || userName === null)

console.log(`Hello ${userName}`);
*/
/*
let login = false;
let userName;
let password;

while(!login){
    userName = window.prompt(`Enter your username`);
    password = window.prompt(`Enter your password`);

    if(userName === "myUsername" && password === "myPassword"){
        login = true;
        console.log("you are login");
    }
    else{
        console.log("invalid credentials");
    }
}
*/

// for loop ***********************************

for(let i = 0; i <= 10; i++){
    console.log(i);
}
