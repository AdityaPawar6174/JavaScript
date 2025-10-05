// by value

function update(a) {
  a++;
  console.log(a);
}

console.log("pass by value:");
update(5); // 6

// by refernces

let obj = { name: "John" };

function changeName(o) {
  o.name = "Doe";
}

changeName(obj);
console.log("pass by reference:", obj.name); // Doe


// bracket method
console.log(obj["name"]);

