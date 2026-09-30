
let firstName = "Hilary";
let lastName = "Onuigbo";
let age = 26;
let studentId = "STU-00123";
let isEnrolled = true;
let graduationDate = null;


const gpa = 4.25;

console.log("First Name:", firstName);
console.log("Last Name:", lastName);
console.log("Age:", age);
console.log("Student ID:", studentId);
console.log("GPA:", gpa);
console.log("Is Enrolled:", isEnrolled);
console.log("Graduation Date:", graduationDate);

// Reassign firstName to a nickname
firstName = "Hilly";

console.log("First Name after nickname:", firstName);



// TASK 2 — OPERATORS

let totalScore = 0;

console.log("Starting Score:", totalScore);

// Add first test score
totalScore += 45;
console.log("After first test:", totalScore);

// Add second test score
totalScore += 30;
console.log("After second test:", totalScore);

// Deduct 5 marks
totalScore -= 5;
console.log("After deduction:", totalScore);

// Double the score for bonus round
totalScore *= 2;
console.log("After bonus round:", totalScore);

// Add 1 point using increment operator
totalScore++;
console.log("After increment:", totalScore);

// Find the remainder when divided by 7
console.log("Remainder when divided by 7:", totalScore % 7);



// TASK 3 — TYPE CONVERSION

let studentAge = "19";
let examScore = "74.5";
let passMark = "50";
let studentName = 101;

// Convert studentAge to a whole number because the age
// should be represented as an integer.
studentAge = parseInt(studentAge, 10);

// Convert examScore to a decimal because exam scores
// can contain decimal values.
examScore = parseFloat(examScore);

// Convert passMark using Number() because the value
// is a numeric string that needs to become a number.
passMark = Number(passMark);

// Convert studentName to a string because the student's
// name should be stored as text.
studentName = String(studentName);

console.log("Student Age:", studentAge, "| Type:", typeof studentAge);
console.log("Exam Score:", examScore, "| Type:", typeof examScore);
console.log("Pass Mark:", passMark, "| Type:", typeof passMark);
console.log("Student Name:", studentName, "| Type:", typeof studentName);

// Check if the student passed
console.log("Exam Score > Pass Mark:", examScore > passMark);



// TASK 4 — CONDITIONAL STATEMENTS


function checkGrade(score) {
    if (score >= 70) {
        console.log("Score:", score, "| Grade: A — Distinction");
    } else if (score >= 60) {
        console.log("Score:", score, "| Grade: B — Merit");
    } else if (score >= 50) {
        console.log("Score:", score, "| Grade: C — Pass");
    } else if (score >= 40) {
        console.log("Score:", score, "| Grade: D — Near Pass");
    } else {
        console.log("Score:", score, "| Grade: F — Fail");
    }
}

// Test 1
checkGrade(73);

// Test 2
// checkGrade(65);

// Test 3
// checkGrade(35);