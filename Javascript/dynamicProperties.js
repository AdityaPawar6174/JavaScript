// Bracket notation allows dynamic property access and assignment

const person = {
  firstName: "Jane",
  lastName: "Doe"
};

const propertyName = "firstName";
console.log(person[propertyName]); // Output: Jane

person["lastName"] = "Smith";
console.log(person.lastName); // Output: Smith


// Property names with Object Literals

const dynamicKey = "occupation";
const user = {
  name: "Alice",
  [dynamicKey]: "Software Engineer" // The key "occupation" is computed from the variable dynamicKey
};

console.log(user.occupation); // Output: Software Engineer



// -------------------------------

const key = "age"

const us1 = {
    name: "Aditya",
    [key]: 22
}

console.log(us1.age)

// ------------------------------




