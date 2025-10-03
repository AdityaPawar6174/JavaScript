// Async and await 
// thes are special keywords in JS to work with promises more easily

// async --> used to declare a function as asynchronous
// await --> used to wait for a promise to resolve or reject

async function getNumber() {
    return 5;
}

getNumber().then(console.log); // 5

console.log(getNumber()); // Promise { 5 }
// return value of async function is always a promise

// ------------------------------------------------------

async function demo(){
    
    let num = await getNumber();
    console.log(num); // 5
}

demo();

// ------------------------------------------------------

// example with fetch API
// fetch is used to make network requests and it returns a promise

fetch("https://jsonplaceholder.typicode.com/posts/1")
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log(error));

// using async await

async function fetchData(){
    try{
        let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        let data = await response.json();
        console.log(data);
    }catch(error){
        console.log(error);
    }
}

fetchData();

// ------------------------------------------------------

// AJAX -- Asynchronous JavaScript and XML
// it is used to make asynchronous requests to the server without reloading the page
// it is used in combination with DOM manipulation to update the UI dynamically

// example using XMLHttpRequest

let xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1", true);

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
        let data = JSON.parse(xhr.responseText);
        console.log(data);
    }
};

xhr.send();

// it is giving error due to CORS policy, use it in the Browser environment

// ------------------------------------------------------
