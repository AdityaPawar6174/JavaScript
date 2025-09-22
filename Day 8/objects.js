// Object oriented programming in JavaScript
// Object is a collection of properties and methods
// Properties are key-value pairs
// Methods are functions that are associated with an object

let studentt = {
    name : "Aditya",
    age : 21,
    course : "Computer Science",
    // method
    bio: function(){
        console.log(`My name is ${this.name}, I am ${this.age} years old and I study ${this.course}.`);
    }

};

console.log(studentt.name); // dot notation
console.log(studentt["age"]); // bracket notation

studentt.bio(); // calling method

console.log("--------------------");

// Nested Object

let person = {
    name: "John",
    age: 30,
    address: {
        street: "123 Main St",
        city: "New York",
        country: "USA"
    }
}

console.log(`${person.name}`);
console.log(`${person.age}`);
console.log(`${person.address.street}, ${person.address.city}, ${person.address.country}`);

// output: John
// 30
// 123 Main St, New York, USA

console.log("--------------------");

// Array in Objects

let employee = {
    name: "Alice",
    age: 22,
    skills: ["JavaScript", "React", "Node.js"]
}

console.log(`${employee.name}`);
console.log(`${employee.age}`);
// specific skill
console.log(`${employee.skills[2]}`);
// all skills
for(let skill of employee.skills){
    console.log(skill);
}

// output: Alice    
// 22
// Node.js
// JavaScript
// React
// Node.js

console.log("--------------------");

// Dynamic property names

// let key = "dynamicKey";
// let obbj = {
//     [key] : "value"
// };

let propName = "salary";

let employeee = {
    name: "Bob",
    [propName] : 50000
};

console.log(employeee.salary); // Output: 50000

console.log("--------------------");

// Computed property names

let i = 1;

let marks = {
    ["subject_" + i++] : "Maths",
    ["subject_" + i++] : "Science",
    ["subject_" + i++] : "English"
}
console.log(marks.subject_1); // Output: Maths
console.log(marks.subject_2); // Output: Science
console.log(marks.subject_3); // Output: English

console.log("--------------------");

// handling key and value pairs dynamically

// Go to the index.html file 

console.log("--------------------");

// short hand method definitions

let name = "Adi";
let age = 21;

let user = {
    name,
    age,
    // short hand method
    bio(){
        console.log(`Hiii...!!!\nMy name is ${this.name}, I am ${this.age} years old.`);
    }
};

user.bio(); // Output: Hiii...!!! My name is Adi, I am 21 years old.

console.log("--------------------");

// create an object called book with propeties title, author, method getDetails()

let book = {
    title: "Wings of Fire",
    author: "A.P.J. Abdul Kalam",
    getDetails(){
        console.log(`Title: ${this.title}, Author: ${this.author}`);
    }
};
book.getDetails(); 

console.log("--------------------");

// create an object laptop with nested object specifications... Ram, CPU, storage, processor... print the object

let laptop = {
    brand: "Acer",
    model: "Aspire 5",
    specs: {
        RAM: "8GB",
        CPU: "Intel i5",
        storage: "512GB SSD",
        GPU: "NVIDIA RTX"
    },
    getSpecs(){
        console.log(`Brand: ${this.brand}, Model: ${this.model}`);
        console.log(`Specifications: RAM: ${this.specs.RAM}, CPU: ${this.specs.CPU}, Storage: ${this.specs.storage}, GPU: ${this.specs.GPU}`);
    }
};

laptop.getSpecs();

// Output: 
// Brand: Acer, Model: Aspire 5
// Specifications: RAM: 8GB, CPU: Intel i5, Storage: 512GB SSD, GPU: NVIDIA RTX

console.log("--------------------");

// create an object Student with name,  marks(Array), getArray() that return the avrage marks

let student = {
    name: "Aditya",
    marks: [85,75,98,74,58,88],
    getAverage: function(){
        let total = 0;

        for(let mark of this.marks){
            total += mark;
        }
        return (total / this.marks.length).toFixed(2);
    }
};

console.log("Average marks: ", student.getAverage());

// Output: Average marks:  79.67

console.log("--------------------");

// delete a property from an object

let car = {
    brand: "Toyota",
    model: "Camry",
    year: 2020
};

console.log(car); // before deletion

delete car.year; // deleting property year

console.log(car); // after deletion

console.log("--------------------");

// update a property in an object

let mobile = {
    brand: "Samsung",
    model: "Galaxy S21",
    price: 799
};

console.log(mobile); // before update

mobile.price = 699; // updating price

console.log(mobile); // after update

console.log("--------------------");

// create an object employee : name age dept salary
// perform CRUD operations
// add new property -- designation
// update salary
// delete dept
// read all the properties

let employee1 = {
    name: "Aditya",
    age: 21,
    dept: "IT",
    salary: 50000
};

console.log(employee1); // read all properties

employee1.designation = "Software Engineer";
console.log(employee1); // after adding designation

// update salary
employee1.salary = 60000;
console.log(employee1); // after updating salary

// delete dept
delete employee1.dept;
console.log(employee1); // after deleting dept

// Final Output:
// { name: 'Aditya', age: 21, dept: 'IT', salary: 50000 }
// { name: 'Aditya', age: 21, dept: 'IT', salary: 50000, designation: 'Software Engineer' }
// { name: 'Aditya', age: 21, dept: 'IT', salary: 60000, designation: 'Software Engineer' }
// { name: 'Aditya', age: 21, salary: 60000, designation: 'Software Engineer' }

console.log("--------------------");

// Mini project

// console based Student Management System using objects
// CRUD operations

// student : id name age marks
// findTopper()
// Menu

let students = [];

function addStudent(id, name, age, marks){
    let student = {
        id,
        name,
        age,
        marks
    };
    students.push(student);
    console.log("Student added successfully.");
}

function viewStudents(){
    console.log("List of Students:");
    for(let student of students){
        console.log(`ID: ${student.id}, Name: ${student.name}, Age: ${student.age}, Marks: ${student.marks}`);
    }
}

function updateStudent(id, name, age, marks){
    for(let student of students){
        if(student.id === id){
            student.name = name || student.name;
            student.age = age || student.age;
            student.marks = marks || student.marks;
            console.log("Student updated successfully.");
            return;
        }
    }
    console.log("Student not found.");
}

function deleteStudent(id){
    students = students.filter(student => student.id !== id);
    console.log("Student deleted successfully.");
}

function findTopper(){
    if(students.length === 0){
        console.log("No students available.");
        return;
    }
    let topper = students[0];
    for(let student of students){
        if(student.marks > topper.marks){
            topper = student;
        }
    }
    console.log(`Topper: ID: ${topper.id}, Name: ${topper.name}, Age: ${topper.age}, Marks: ${topper.marks}`);
}

// Sample operations
addStudent(1, "Aditya", 21, 85);
addStudent(2, "Ujjwal", 22, 90);
addStudent(3, "Diksha", 20, 95);

viewStudents();

updateStudent(2, "Ujjwal Pingle", 23, 92);
viewStudents(); 

deleteStudent(2);
viewStudents();

findTopper();

console.log("--------------------");

// End of Day 8