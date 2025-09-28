// mathod chaining ----> calling one method after
// another in one continous line of code

let username = window.prompt("Enter your user name");

// No method chaining

/*
username = username.trim();
let letter = username.charAt(0);
letter = letter.toUpperCase();

let extraChars = username.slice(1);
extraChars = extraChars.toLowerCase();
username = letter + extraChars;

console.log(username);

let element = document.getElementById("element");
element.onclick = function(){
    element.textContent = username;
}
*/

// method chaining

username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
console.log(username);

let element = document.getElementById("element");
element.onclick = function(){
    element.textContent = username;
}
