// object = A collection of related properties and/or methods can represent 
//          real world objects (people, products, places)
//          object = {key: value, function()} 

const person1 = {
    firstName : "Spongebob",
    lastName : "SquarePants",
    age : 30,
    isEmployed : true,
    sayHello : function(){console.log("Hi! I am SpongeBob")},
    sayBye : function(){console.log("GoodBye!")}
};

const person2 = {
    firstName : "Patrick",
    lastName : "star",
    age : 42,
    isEmployed : false,
    sayHello : () => {console.log("Hi! I am Patrick")},
    sayBye : function(){console.log("Bye...")}
};

console.log(person1.)