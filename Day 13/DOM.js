// DOM -- Document Object Model
// it represents the structure of a document (HTML, XML) as a tree of objects
// it is a programming interface for web documents
// it represents the page so that programs can change the document structure, style, and content
// it is an object-oriented representation of the web page, which can be modified with a scripting language like JavaScript

// ------------------------------------------------------

function changeMe(){
    document.getElementById("para1").innerHTML = "Paragraph changed by JS";
    document.querySelector(".heading").style.backgroundColor = "yellow";
}

// ------------------------------------------------------

// DOM Manipulation
// creating a new element and adding it to the DOM
function addElement(){
    // create a new paragraph element
    const newPara = document.createElement("p");
    // create a text node
    const textNode = document.createTextNode("This is a new paragraph added by JS");
    // append the text node to the paragraph element
    newPara.appendChild(textNode);
    // append the paragraph element to the body
    document.body.appendChild(newPara);
}   

// ------------------------------------------------------