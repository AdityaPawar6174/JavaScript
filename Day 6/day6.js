// Array []

let colors = ["Red", "Green", "Blue"];
console.log(colors); 

let nums = new Array(1, 2, 3, 'hello', true);
console.log(nums);

console.log("--------------------------");


// Array properties and methods

let fruits = ["Apple", "Banana", "Orange"];
console.log(fruits.length); // 3

fruits.push("Mango"); // add to the end
console.log(fruits);

fruits.pop(); // remove from the end
console.log(fruits);

fruits.unshift("Strawberry"); // add to the beginning
console.log(fruits);

fruits.shift(); // remove from the beginning
console.log(fruits);

console.log("--------------------------");

// searching and checking

// indexOf()

let a = [1,2,3,4,5,6,7,3,8,9]
console.log(a.indexOf(9)); 
console.log(a.indexOf(10));
console.log(a.indexOf(3)); // first occurrence

console.log("--------------------------");

// lastIndexOf()

console.log(a.lastIndexOf(3)); // last occurrence
console.log(a.lastIndexOf(5));

console.log("--------------------------");

// includes()

console.log(a.includes(5));
console.log(a.includes(10));

console.log("--------------------------");

// find()

console.log(a.find(n => n > 3)); // first element that matches the condition --> 4
console.log(a.find(n => n > 10)); // undefined

console.log("--------------------------");

// way to find() first negative number in the array
let b = [1, -2, 3, 4, -5, 6, 7, 3, 8, 9];
console.log(b.find(n => n < 0)); // -2

// way to find() first even number in the array
console.log(b.find(n => n % 2 === 0));

console.log("--------------------------");

// findIndex()

console.log(b.findIndex(n => n < 0)); // index of first negative number --> 1
console.log(b.findIndex(n => n > 10)); // -1 (not found)

console.log("--------------------------");

// fill()

let c = new Array(10).fill(0);
console.log(c); // [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

b.fill(0, 1, 4); // fill with 0 from index 1 to 4 (4 not included)
console.log(b); // [1, 0, 0, 0, -5, 6, 7, 3, 8, 9]

console.log("--------------------------");

// slice()

let d = [1,2,3,4,5,6,7,8,9];
console.log(d.slice(2)); // from index 2 to end --> [3,4,5,6,7,8,9]
console.log(d.slice(2,5)); // from index 2 to 5 (5 not included) --> [3,4,5]

console.log("--------------------------");

// splice()

d.splice(2, 3);
console.log(d); // remove 3 elements from index 2 --> [1,2,6,7,8,9]

d.splice(2, 0, 3, 4, 5);
console.log(d); // add 3,4,5 at index 2 --> [1,2,3,4,5,6,7,8,9]

d.splice(2, 2, 10, 11);
console.log(d); // replace 2 elements at index 2 with 10,11 --> [1,2,10,11,5,6,7,8,9]

console.log("--------------------------");

// concat()

let e = [1,2,3];
let f = [4,5,6];
let g = e.concat(f);
console.log(g); // [1,2,3,4,5,6]

console.log("--------------------------");

// join()

let h = ['Hello', 'World'];
console.log(h.join(' '));
console.log(h.join(', '));
console.log(h.join('-'));

console.log("--------------------------");


// copyWithin() --> copies part of an array to another location in the same array and returns it without modifying its length.

let o = [1,2,3,4,5];
o.copyWithin(0, 3); // copy from index 3 to index 0
console.log(o); // [4,5,3,4,5]

o = [1,2,3,4,5];
o.copyWithin(1, 3, 4); // copy from index 3 to index 1 (4 not included)
console.log(o); // [1,4,3,4,5]

console.log("--------------------------");

// reverse()

let i = [1,2,3,4,5];
i.reverse();
console.log(i); // [5,4,3,2,1]

console.log("--------------------------");

// sort()

let j = [3,1,4,2,5];
j.sort();
console.log(j); // [1,2,3,4,5]

let k = ['Banana', 'Apple', 'Orange'];
k.sort();
console.log(k); // ['Apple', 'Banana', 'Orange']

console.log("--------------------------");

// forEach()

let p = ['a', 'b', 'c'];
p.forEach((element, index) => {
    console.log(index, element);
});
// 0 'a'
// 1 'b'
// 2 'c'

console.log("--------------------------");

// map()

let l = [1,2,3,4,5];
let m = l.map(n => n * 2);
console.log(m); // [2,4,6,8,10]

console.log("--------------------------");

// filter() --> creates a new array with all elements that pass the test implemented by the provided function.

let n = l.filter(n => n % 2 === 0);
console.log(n); // [2,4]

// find all odd numbers in the array
console.log(a.filter(n => n%2 !== 0)); // [1,3,5,7,3,9]

console.log("--------------------------");

// reduce()

let sum = l.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum); // 15

let product = l.reduce((accumulator, current) => accumulator * current, 1);
console.log(product); // 120

console.log("--------------------------");

// reduceRight()

let q = ['a', 'b', 'c'];
let concat = q.reduceRight((accumulator, current) => accumulator + current, '');
console.log(concat); // 'cba'

console.log("--------------------------");

// every() --> tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

console.log(l.every(n => n > 0));
console.log(l.every(n => n < 5));

console.log("--------------------------");

// some() --> tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value.

console.log(l.some(n => n > 4));
console.log(l.some(n => n > 5));

console.log("--------------------------");

// flat() --> creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

let r = [1, 2, [3, 4, [5, 6]]];
console.log(r.flat());
console.log(r.flat(2));

console.log("--------------------------");

// flatMap() --> first maps each element using a mapping function, then flattens the result into a new array. It is identical to a map followed by a flat of depth 1.

let s = [1, 2, 3];
let t = s.flatMap(n => [n, n * 2]);
console.log(t); // [1,2,2,4,3,6]

console.log("--------------------------");
