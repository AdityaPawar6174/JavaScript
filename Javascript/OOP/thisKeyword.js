// this => reference to the object where THIS is used 
//         (the depends on the immediate context)
//         person.name = this.name

const person1 = {
   name: "Aditya",
   favFood: "Idli",
   sayHello: function(){console.log(`Hi! I'm ${this.name}...How are you?`)},
   eat : function(){console.log(`${this.favFood} is my favourite food...`)},
}

person1.sayHello();
person1.eat();
console.log(this);