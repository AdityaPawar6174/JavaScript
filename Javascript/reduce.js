// .reduce() --> reduce the elements of an array to a single value.

let prizes = [25,50,67,12,10,45];
let total = prizes.reduce(sum);        // .reduce(callback);

    // console.log(`$${total}`);

function sum(accumulator, element){     // accumulator -> previous && element -> next 
    return accumulator + element;
}

// ----------------------------------------------------------------------------

let grades = [90, 87, 65, 35, 98, 44];
let maximum = grades.reduce(getMax);
let minimum = grades.reduce(getMin);

    // console.log(maximum);
    // console.log(minimum);

function getMax(accumulator, element){
    return Math.max(accumulator, element);
}

function getMin(accumulator, element){
    return Math.min(accumulator, element);
}