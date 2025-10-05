function createCourse(courseName) {
    let enrolledStudents = 0; // private variable

    // closure function to add a student
    return function enrollStudent(studentName) {
        enrolledStudents++;
        console.log(`${studentName} enrolled in ${courseName}. Total students: ${enrolledStudents}`);
    };
}

// Create a course instance
const jsCourse = createCourse("JavaScript Bootcamp");

// Enroll students
jsCourse("Alice");  // Alice enrolled in JavaScript Bootcamp. Total students: 1
jsCourse("Bob");    // Bob enrolled in JavaScript Bootcamp. Total students: 2
jsCourse("Charlie");// Charlie enrolled in JavaScript Bootcamp. Total students: 3


//------------------------------------------------

function makeFunc() {
  const name = "Mozilla";

  // closure function
  function displayName() {
    console.log(name);
  }

  return displayName;
}

const myFunc = makeFunc();

myFunc();