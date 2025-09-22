// Math Object in JavaScript

console.log(Math.PI); // 3.141592653589793
console.log(Math.E); // 2.718281828459045

console.log(Math.LN2); // 0.6931471805599453
console.log(Math.LN10); // 2.302585092994046
console.log(Math.LOG2E); // 1.4426950408889634
console.log(Math.SQRT2); // 0.41421356237309503
console.log(Math.SQRT1_2); // 0.7071067811865476

// Math methods

console.log(Math.sqrt(16)); // 4

console.log(Math.round(4.7)); // 5
console.log(Math.ceil(4.2)); // 5
console.log(Math.floor(4.7)); // 4

console.log(Math.trunc(4.9)); // 4 // removes decimal part

console.log(Math.pow(2, 3)); // 8 // 2^3
console.log(Math.cbrt(27)); // 3 // cube root

console.log(Math.abs(-7.5)); // 7.5 // absolute value --> removes negative sign
console.log(Math.sign(-7.5)); // -1 // returns -1 for negative numbers, 1 for positive numbers, 0 for zero

console.log(Math.min(3, 5, 1, 8, -2)); // -2
console.log(Math.max(3, 5, 1, 8, -2)); // 8

console.log(Math.log(10)); // 2.302585092994046 // natural logarithm of 10
console.log(Math.log2(8)); // 3 // base 2 logarithm of 8
console.log(Math.log10(100)); // 2

console.log(Math.exp(2)); // 7.38905609893065 // e^2

console.log(Math.sin(60)); // 0.8660254037844387 // sine of 60 radians
console.log(Math.cos(60)); // -0.9524129804151563 // cosine of 60 radians
console.log(Math.tan(60)); // -1.995200412208242 // tangent of 60 radians

console.log(Math.random()); // random number between 0 and 1

console.log("--------------------------");

// write a function to generate the random OTP of 4 digits

function generateOTP(){
    return Math.floor(1000 + Math.random() * 9000); // generates a random number between 1000 and 9999
}
console.log(generateOTP());

console.log("--------------------------");

// find the area and volumn of circle using Math.PI

function circleArea(radius){
    return Math.PI * Math.pow(radius, 2);
}
console.log(circleArea(5)); // area of circle with radius 5

function circleVolume(radius, height){
    return circleArea(radius) * height; // volume = area * height
}
console.log(circleVolume(5, 10)); // volume of cylinder with radius 5 and height 10

console.log("--------------------------");

