
// -----------For Each------------------ 

let coding = ['js', 'ruby', 'java', 'python', 'cpp'];

const value = coding.forEach((item) => {
    console.log(item); 
})

console.log(value);


const num = [1,2,3,4,5,6,7,8,9] 
const newNum = [];
 
num.forEach((num) => {
    if(num > 4){
        newNum.push(num);
    }
});

console.log(newNum);


// ----------Filter---------------

const nums = [1,2,3,4,5,6,7,8,9] 

let newNums = nums.filter( (num) => {
    return num > 4
});

console.log(newNums)

// -------------------------

const books = [
    {title: "Book 1", genre: "Sci-fi", pages: 200, publish: 1990, edition: 1995},
    {title: "Book 2", genre: "Fantasy", pages: 300, publish: 2000, edition: 2005},
    {title: "Book 3", genre: "Mystery", pages: 250, publish: 2010, edition: 2011},
    {title: "Book 4", genre: "Sci-fi", pages: 400, publish: 2020, edition: 2021},
    {title: "Book 5", genre: "Fantasy", pages: 150, publish: 2021, edition: 2022},
    {title: "Book 6", genre: "Mystery", pages: 350, publish: 2022, edition: 2023},
    {title: "Book 7", genre: "Sci-fi", pages: 500, publish: 2023, edition: 2024},
    {title: "Book 8", genre: "Fantasy", pages: 450, publish: 2024, edition: 2025},
    {title: "Book 9", genre: "Mystery", pages: 600, publish: 2025, edition: 2026},
    {title: "Book 10", genre: "Sci-fi", pages: 700, publish: 2026, edition: 2027}
];

let userBooks = books.filter((book) => book.genre === 'Mystery');

userBooks = books.filter((book) => { return book.publish >= 1995});

console.log(userBooks);



// ------------------------------

const myNumbers = [1,2,3,4,5,6,7,8,9];

let newNumbers = myNumbers.map((num) => {
    return num + 10;
})

console.log(newNumbers);

//----Chaining------

newNumbers = myNumbers
            .map((num) => num * 10)
            .map((num) => num + 1)
            .filter((num) => num >= 40)

console.log(newNumbers)

// ---------- Reduce -----------------
// It is used to reduce the array to a single value...simply like sum of all the numbers in an array
// it takes two arguments, --
        // first is a callback function and 
        // second is an initial value for the accumulator

// The callback function takes two arguments, first is the accumulator and second is the current value

// The accumulator --> is the value that is returned from the previous iteration of the callback function
// The current value --> is the current element in the array that is being processed

const myNums = [1,2,3]

// const total = myNums.reduce(function (accumulator, currentValue){
     
//     console.log(`accumulator: ${accumulator} and current Value: ${currentValue}`);
    
//     return accumulator + currentValue;
// }, 3)


const ttl = myNums.reduce((acc, crr) => acc+crr, 0)

console.log("Total: ",ttl);
