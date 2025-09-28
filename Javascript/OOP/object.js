// object => a collection of related properties and/or methods
//           can represent real world objects (people, places0)
//           object = {key: value,
//                     function()}

const person1 = {
    firstName : "Spongebob",
    lasatNAme : "Squarepants",
    age : 22,
    isEmployed : true,
    greet : function(){console.log("Hey! I'm Spongebob!")},
    eat : () => console.log("I'm Eating a chocolate..."),
}

const person2 = {
    firstName : "Patrick",
    lasatNAme : "Star",
    age : 45,
    isEmployed : false,
    greet : function(){console.log("Hey! I'm Patrick!")},
    eat : () => {console.log("I'm Eating a banana...")},
}


console.log(person1.age);
console.log(person1.firstName);
console.log(person1.isEmployed);
person1.greet();
person1.eat();

person2.eat();
// console.log(person2.age);
// console.log(person2.firstName);
// console.log(person2.isEmployed);
