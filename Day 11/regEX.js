// RegEX - regular expressions
// It is a sequence of characters that forms a search pattern
// It is used for pattern matching within strings

// literal notation

let pattern = /hello/;

let patter1 = new RegExp("hello");

console.log(pattern);
console.log(patter1);

let str = "sdgysagbfj hjello";
console.log(patter1.test(str)); // false

let str1 = "hello world";
console.log(patter1.test(str1)); // true

// metacharacters
// \d - any digit
// \w - any word character (alphanumeric + _)
// \s - whitespace character
// \D - non-digit
// \W - non-word character
// \S - non-whitespace character
// . - any character except newline
// ^ - start of string
// $ - end of string

let pattern2 = /\d/;
console.log(pattern2.test("abc")); // false
console.log(pattern2.test("abc123")); // true

let pattern3 = /\w/;
console.log(pattern3.test("!!!")); // false
console.log(pattern3.test("abc_123")); // true

/*

// quantifiers
// these specify how many times the preceding element should occur

    * --> 0 or more
    + --> 1 or more
    ? --> 0 or 1
    {n} --> exactly n times
    {n,} --> n or more times
    {n,m} --> between n and m times
    | --> OR operator
    () --> group

    e.g. 
    \d{3} --> exactly 3 digits
    \d{3,} --> 3 or more digits
    \d{3,5} --> between 3 and 5 digits
    (abc|def) --> either abc or def
    ^abc --> string starts with abc
    abc$ --> string ends with abc
    ^abc$ --> string is exactly abc

*/