// .map() --> accepts a callback and applies that function to each elemenet
//            of array, then return a new array

const numbers = [1,2,3,4,5];
const squares = numbers.map(square);

console.log(squares);

function square(element){
    return Math.pow(element, 2);
}

// -----------------------------------------------------------

const students = ["Doraemon", "Shinchan", "Ben10", "Hattori"];
const upper = students.map(upperCase);

console.log(upper);

function upperCase(element){
    return element.toUpperCase();
}

//-------------------------------------------------------------------------

const dates = ["2024-01-10", "2024-09-03", "2024-03-30"];
const formattedDates = dates.map(formatDates);

console.log(formattedDates);

function formatDates(elememnt){
    const parts = elememnt.split("-");
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
}
