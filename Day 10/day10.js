// private data members 
// a variable within a class that can only be accessed and modified by the member functions

// using constructor function

function Personn(name){
    let _name = name;

    this.getName = function(){
        return name;
    };

    this.setName = function(newName){
        if(typeof newName === 'string' && newName.length > 0)
        {
            _name = newName;
        }
        else{
            console.log('Invalid Name');
        }
    };
};


const pp = new Personn('Ram');
console.log(pp.getName());

pp.setName('Sham');
console.log(pp.getName());


console.log("------------------");

// using ES6 class syntax
// using # to declare private data members

class Person{
    #name; // private data member
    constructor(name){
        this.#name = name;
    }

    get name(){
        return this.#name;
    }

    set name(newName){
        if(typeof newName === 'string' && newName.length > 0){
            this.#name = newName;
        }
        else{
            console.log("Invalid Name");
        }
    }
}

const p = new Person("Sham");
console.log(p.name);

p.name = "Ram";
console.log(p.name);

console.log("------------------");

// student #name #age #grade #marks[array] --- constructor getters setters -- method to calculate percentage of marks

class Student{
    #name;
    #age;
    #grade;
    #marks = [];

    constructor(name, age, grade){
        this.#name = name;
        this.#age = age;
        this.#grade = grade;
    }

    get name(){
        return this.#name;
    }

    set name(newName){
        if(typeof newName === 'string' && newName.length > 0){
            this.#name = newName;
        }
        else{
            console.log("Invalid Name");
        }
    }

    get age(){
        return this.#age;
    }

    set age(newAge){
        if(typeof newAge === 'number' && newAge > 0){
            this.#age = newAge;
        }
        else{
            console.log("Invalid Age");
        }
    }

    get grade(){
        return this.#grade;
    }

    set grade(newGrade){
        if(typeof newGrade === 'string' && newGrade.length > 0){
            this.#grade = newGrade;
        }
        else{
            console.log("Invalid Grade");
        }
    }

    get marks(){
        return this.#marks;
    }

    addMark(mark){
        if(typeof mark === 'number' && mark >= 0 && mark <= 100){
            this.#marks.push(mark);
        }
        else{
            console.log("Invalid Mark");
        }
    }

    calculatePercentage(){
        if(this.#marks.length === 0) return 0;
        const total = this.#marks.reduce((acc, mark) => acc + mark, 0);
        return (total / this.#marks.length);
    }
}

const student1 = new Student("Ram", 20, "A");
student1.addMark(85);
student1.addMark(90);
student1.addMark(78);
student1.addMark(90);
student1.addMark(78);

console.log(`
Name: ${student1.name}
Age: ${student1.age} 
Grade: ${student1.grade} 
Marks: ${student1.marks} 
Percentage: ${student1.calculatePercentage()}%`);

console.log("------------------");

// Multiple inheritance using mixins

class Animal {
    constructor(name) {
        this.name = name;
    }

    eat() {
        console.log(`${this.name} is eating.`);
    }
}

const CanFly = (Base) => class extends Base {
    fly() {
        console.log(`${this.name} is flying.`);
    }  
};

const CanSwim = (Base) => class extends Base {
    swim() {
        console.log(`${this.name} is swimming.`);
    }
};

class Duck extends CanSwim(CanFly(Animal)) {
    quack() {
        console.log(`${this.name} says Quack!`);
    }
}

const duck = new Duck("Donald");
duck.eat();
duck.fly();
duck.swim();
duck.quack();

console.log("------------------");

// Employee Management System
// employees, developers, designers, projects, techleads
// use mixin for multiple inheritance
// 1. Base class Employee --> name, age, salary, designation

class Employee {
    constructor(name, age, salary, designation) {
        this.name = name;
        this.age = age;
        this.salary = salary;
        this.designation = designation;
    }
    
    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}, Salary: ${this.salary}, Designation: ${this.designation}`;
    }      
}

// 2. Mixin for Developer
const Developer = (Base) => class extends Base {
    constructor(name, age, salary, designation, programmingLanguages) {
        super(name, age, salary, designation);
        this.programmingLanguages = programmingLanguages;
    }
    
    getDetails() {
        return `${super.getDetails()}, Programming Languages: ${this.programmingLanguages.join(", ")}`;
    }
};

// 3. Mixin for Designer
const Designer = (Base) => class extends Base {
    constructor(name, age, salary, designation, designTools) {
        super(name, age, salary, designation);
        this.designTools = designTools;
    }
    
    getDetails() {
        return `${super.getDetails()}, Design Tools: ${this.designTools.join(", ")}`;
    }
};

// 4. Mixin for TechLead
const TechLead = (Base) => class extends Base {
    constructor(name, age, salary, designation, teamSize) {
        super(name, age, salary, designation);
        this.teamSize = teamSize;
    }
    
    getDetails() {
        return `${super.getDetails()}, Team Size: ${this.teamSize}`;
    }
};

// 5. Developer class
class Dev extends Developer(Employee) {}

// 6. Designer class
class Des extends
Designer(Employee) {}

// 7. TechLead class
class TL extends TechLead(Employee) {}

// Creating instances
const dev1 = new Dev("Alice", 30, 70000, "Frontend Developer", ["JavaScript", "React"]);
const des1 = new Des("Bob", 28, 65000, "UI/UX Designer", ["Figma", "Sketch"]);
const tl1 = new TL("Charlie", 35, 90000, "Tech Lead", 5);

// Displaying details
console.log(dev1.getDetails());
console.log(des1.getDetails());
console.log(tl1.getDetails());

console.log("------------------");

// JSON --> JavaScript Object Notation

// object : key value pairs

const person = 
{
    "name" : "Aditya",
    "age" : 22,
    "isMarried" : false,
    "skills" : ["JavaScript", "React", "Node.js"],
    "address" : {
        "house" : "Omkar Niwas",
        "street" : "Girna Nagar",
        "city" : "Nandgaon",
        "zip" : "423106"
    }
}

console.log(person);

console.log("------------------");

// JSON.stringify() --> converts JavaScript object to JSON string

const jsonString = JSON.stringify(person);
console.log(jsonString);
console.log(typeof jsonString);

console.log("------------------");

// JSON.parse() --> converts JSON string to JavaScript object

const jsonStr = '{"name":"Aditya","age":22,"isMarried":false,"skills":["JavaScript","React","Node.js"],"address":{"house":"Omkar Niwas","street":"Girna Nagar","city":"Nandgaon","zip":"423106"}}';

const jsObject = JSON.parse(jsonStr);
console.log(jsObject);
console.log(typeof jsObject);

console.log("------------------");