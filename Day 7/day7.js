// Date and Time in JavaScript

// Ways to create a date object
let date0 = new Date(); // Current date and time
console.log(date0);

let date1 = new Date(2024, 5, 20, 10, 33, 30, 0); // year, month (0-11), day, hours, minutes, seconds, milliseconds
console.log(date1);

let date2 = new Date("2025-06-20"); // ISO (International Standard Organization) format 
console.log(date2);

let date3 = new Date("June 20, 2025 10:33:30"); // Long date format
console.log(date3);

console.log("--------------------");

// Date Methods
let date = new Date();

// getters
console.log("Full Year:", date.getFullYear());
console.log("Month:", date.getMonth() + 1); // Months are zero-based
console.log("Date:", date.getDate());
console.log("Hours:", date.getHours());
console.log("Minutes:", date.getMinutes());
console.log("Seconds:", date.getSeconds());

// setters
date.setFullYear(2030); 
date.setMonth(11); // December
date.setDate(25); 
date.setHours(15); 
date.setMinutes(45); 
date.setSeconds(30);

console.log(date);

console.log("--------------------");

// Date to String conversions

let dt = new Date();
console.log("Date to Object:", dt);

console.log("Date to String:", dt.toString());

console.log("Date to Date String:", dt.toDateString()); // e.g. "Sat Jun 15 2024"
console.log("Date to Time String:", dt.toTimeString()); // e.g. "14:30:15 GMT+0530 (India Standard Time)"

console.log("Date to UTC String:", dt.toUTCString()); // Universal Time Coordinated (UTC)
console.log("Date to ISO String:", dt.toISOString()); // International Standard Organization (ISO)

console.log("Date to Locale String:", dt.toLocaleString()); // time and date based on local time zone
console.log("Date to Locale Date String:", dt.toLocaleDateString());
console.log("Date to Locale Time String:", dt.toLocaleTimeString()); 

console.log("--------------------");

// Date static methods

console.log(Date.now()); 
console.log(Date.parse("2025-06-20")); // milliseconds since January 1, 1970
console.log(Date.UTC(2025, 5, 20)); // milliseconds since January 1, 1970 for a specific date

console.log("--------------------------");

// write a function that takes a date string (""2025-06-20"") and prints the day of week
function getDayWeek(date){
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let d = new Date(date);
    return days[d.getDay()];
}
console.log(getDayWeek("2025-06-20")); // Friday

console.log("--------------------------");

// write a function that calculates the a person's age based on their birthdate

function calculateAge(bithdate){
    let birthdate = new Date(bithdate);

    let today = new Date();

    let age = today.getFullYear() - birthdate.getFullYear();
    return age;
}
console.log(calculateAge("03-09-2003")); // 21

console.log("--------------------------");

// write a program that as 10 days to the current date and prints the new date

function addDays(numDays){
    let today = new Date();
    today.setDate(today.getDate() + numDays);
    return today.toDateString();
}
console.log(addDays(10));

console.log("--------------------------");

// write a function that calculates the how many days are left until 30th november 2025

function daysUntil(targetDate){
    let today = new Date();
    let target = new Date(targetDate);
    let diffTime = target - today;
    let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
}
console.log(daysUntil("2025-11-30"));

console.log("--------------------------");

// A function returns the date in format in YYYY/MM/DD

function formatDate(date){
    let d = new Date(date);
    let year = d.getFullYear();
    let month = String(d.getMonth() + 1).padStart(2, '0');
    let day = String(d.getDate()).padStart(2, '0');
    return `${year}/${month}/${day}`;
}
console.log(formatDate("June 5, 2025"));
console.log(formatDate("2024-3-9"));

console.log("--------------------------");

// Check if a year is a leap year

function isLeapYear(year){
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
console.log(isLeapYear(2024)); // true
console.log(isLeapYear(2023)); // false
console.log(isLeapYear(2000)); // true
console.log(isLeapYear(1900)); // false

console.log("--------------------------");

// write a program to display next 7 days starting from today

function next7Days(){
    let days = [];
    let today = new Date();
    for(let i = 1; i <= 7; i++){
        let nextDay = new Date(today);
        nextDay.setDate(today.getDate() + i);
        days.push(nextDay.toDateString());
    }
    return days;
}
console.log(next7Days());

console.log("--------------------------");

