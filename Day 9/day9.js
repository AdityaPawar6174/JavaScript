class Person {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    showInfo() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

const p1 = new Person("Aditya", 25);
p1.showInfo(); // Output: Name: Aditya, Age: 25

console.log("-------------------");

// create class employee that has constructor with name, designation, salary use default values too and use displayDetails() method

class Employee {

    constructor(name = "unknown", designation = "employee", salary = 30000) {
        this.name = name;
        this.designation = designation;
        this.salary = salary;
    }

    displayDetails(){
        console.log(`Name: ${this.name}, Designation: ${this.designation}, Salary: ${this.salary}`);
    }
}

const e1 = new Employee("Aditya", "Developer", 50000);
e1.displayDetails();

const e2 = new Employee();
e2.displayDetails(); 

const e3 = new Employee("Diksha");
e3.displayDetails();

console.log("-------------------");

class Car{
    constructor({company="unknown", model="unknown", year=null}={}){ // {} = {} is used to avoid error when no argument is passed
        this.company = company;
        this.model = model;
        this.year = year;
    }

    getDetails(){
        console.log(`${this.model} ${this.company} ${this.year}`);
    }

    showInfo(){
        console.log(`${this.company ?? 'No company'} ${this.model ?? 'No model'} ${this.year ?? 'No year'}`);
    }
}

const car = new Car({company:"BMW", model:"X5", year:2023}); // {} is used to pass object as argument
car.getDetails();

const car2 = new Car(); 
car2.getDetails();
car2.showInfo();

console.log("-------------------");

// Static method and property

// Static members are called on the class itself, not on instances of the class.

class MyClass {

    static imSTATIC = "I am static";

    static demo(){
        console.log("This is a static method");
    }
}

console.log(MyClass.imSTATIC); // Output: I am static
MyClass.demo(); // Output: This is a static method

console.log("-------------------");

// create a class calculator with static methods add, subtract, exponent

class Calculator {
    
    static add(a, b){
        return a + b;
    }
    static subtract(a, b){
        return a - b;
    }
    static exponent(a, b){
        return a ** b;
    }
}

console.log(Calculator.add(5, 3)); 
console.log(Calculator.subtract(5, 3));
console.log(Calculator.exponent(2, 3)); 

console.log("-------------------");

// create a user class with static property - totalusers = 0
// instance property - usernameclass Calculator {
// static method getTotalUsers() - returns totalusers 

class User{
    static totalUsers = 0;

    constructor(username){
        this.username = username;
        User.totalUsers++;
    }

    static getTotalUsers(){
        return User.totalUsers;
    }
}

const user1 = new User("john");
const user2 = new User("bob");
console.log(User.getTotalUsers()); 

console.log("-------------------");

// Inheritance

class Animal {
    constructor(name){
        this.name = name;
    }

    speak(){
        console.log(`${this.name} makes a noise`);
    }
}

class Dog extends Animal {
    constructor(name, breed){
        super(name); // call the parent class constructor  
        this.breed = breed;
    }
    
    speak(){
        console.log(`${this.name} barks`);
    }
    
    info(){
        console.log(`${this.name} is a ${this.breed}`);
    }
}

const dog = new Dog("Buddy", "Golden Retriever");
dog.speak();
dog.info();

console.log("-------------------");

// create a class Vehicle constructor with brand ...displayDetails() method
// Car class inherits Vehicle and has constructor with brand + model ... displayDetails() method super keyword
// print brand and model

class Vehicle {
    constructor(brand){
        this.brand = brand;
    }

    displayDetails(){
        console.log(`Brand: ${this.brand}`);
    }
}

class Car2 extends Vehicle {
    constructor(brand, model){
        super(brand);
        this.model = model;
    }

    displayDetails(){
        super.displayDetails();
        console.log(`Model: ${this.model}`);
    }
}

const myCar = new Car2("Mahindra", "xUV700");
myCar.displayDetails(); 

console.log("-------------------");

// Multilevel Inheritance

class GrandParent {
    constructor(name){
        this.name = name;
    }
    
    showGrandParent(){  
        console.log(`GrandParent Name: ${this.name}`);
    }
}

class Parent extends GrandParent {
    constructor(name, parentName){
        super(name);
        this.parentName = parentName;
    }

    showParent(){
        console.log(`Parent Name: ${this.parentName}`);
    }
}

class Child extends Parent {
    constructor(name, parentName, childName){
        super(name, parentName);
        this.childName = childName;
    }

    showChild(){
        console.log(`Child Name: ${this.childName}`);
    }
}

const child = new Child("John Sr.", "John Jr.", "Johnny");
child.showGrandParent();
child.showParent();
child.showChild();

console.log("-------------------");