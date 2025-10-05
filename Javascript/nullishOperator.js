// Nullish Operator -->
// ?? is used to provide a default value when a variable is null or undefined.
// It does NOT trigger on falsy values like 0, "", or false.

class Person {
  constructor(name, age, email) {
    this.name = name ?? "Diksha"; // if null/undefined, default = "Unknown"
    this.age = age ?? 18; // default age = 18
    this.email = email ?? "Not provided"; // default email text
  }

  displayInfo() {
    console.log(`Name: ${this.name}`);
    console.log(`Age: ${this.age}`);
    console.log(`Email: ${this.email}`);
  }
}

// Example 1: All details given
const p1 = new Person(null, 21, "diksha@example.com");
p1.displayInfo();


console.log("---------------------------------");



// -----------Empoloyee management System

class Employee {

    constructor(empId, name, age, salary, departemnt){
        this.empId = empId;
        this.name = name ?? "Unknown";
        this.age = age ?? 22;
        this.salary = salary ?? 20000;
        this.departemnt = departemnt ?? undefined;
    }

    showDetails(){
        console.log(`Employee ID: ${this.empId}`);        
        console.log(`Employee Name: ${this.name}`);        
        console.log(`Employee Age: ${this.age}`);        
        console.log(`Employee Salary: ${this.salary}`);        
        console.log(`Employee Department: ${this.departemnt}`);        
    }
}

const emp1 = new Employee(1, "Aditya", 21, 50000, null);
emp1.showDetails();

const emp2 = new Employee(2, "Diksha", null, null, "IT");
emp2.showDetails();