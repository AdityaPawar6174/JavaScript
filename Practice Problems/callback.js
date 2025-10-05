function performAction(data, callback) {

  setTimeout(() => {
    const processedData = data.toUpperCase();
    callback(processedData); 
  }, 1000);
}

function displayResult(result) {
  console.log("The processed data is:", result);
}

performAction("hello world", displayResult);

// ===============


function hello(callback1, callback2){
    console.log("Hiiii");
    callback1();
    callback2();
}

function bye(){
    console.log("Good bye");
}

function greet()
{
    console.log("how are you");
    
}

hello(bye, greet);