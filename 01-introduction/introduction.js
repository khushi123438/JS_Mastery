
// ==================================================
// TOPIC: INTRODUCTION TO JAVASCRIPT
// Basic to Advanced Fundamentals
// Run: node introduction.js
// ==================================================


// 1. FIRST JAVASCRIPT PROGRAM

console.log("Hello, JavaScript!");
// Output: Hello, JavaScript!

console.log(10 + 20);
// Output: 30


// 2. VARIABLES: var, let, const

var name = "Khushi";
let age = 20;
const language = "JavaScript";

console.log(name);     // Khushi
console.log(age);      // 20
console.log(language); // JavaScript

// var can be reassigned
var city = "Kanpur";
city = "Delhi";
console.log(city); // Delhi

// let can be reassigned
let marks = 80;
marks = 90;
console.log(marks); // 90

// const cannot be reassigned
const country = "India";
// country = "USA"; // TypeError


// 3. DATA TYPES

// String
const firstName = "Khushi";

// Number
const score = 95;
const price = 99.99;

// Boolean
const isStudent = true;
const isGraduated = false;

// Undefined
let result;

// Null
const selectedItem = null;

// BigInt
const bigNumber = 12345678901234567890n;

// Symbol
const uniqueId = Symbol("id");

// Object
const student = {
  name: "Khushi",
  age: 20
};

// Array
const subjects = ["JavaScript", "Java", "Python"];

console.log(typeof firstName);    // string
console.log(typeof score);        // number
console.log(typeof isStudent);    // boolean
console.log(typeof result);       // undefined
console.log(typeof selectedItem); // object (historical JS behavior)
console.log(typeof bigNumber);    // bigint
console.log(typeof uniqueId);     // symbol
console.log(typeof student);      // object
console.log(typeof subjects);     // object


// 4. BASIC MATHEMATICAL OPERATIONS

console.log(10 + 5);  // 15: Addition
console.log(10 - 5);  // 5: Subtraction
console.log(10 * 5);  // 50: Multiplication
console.log(10 / 5);  // 2: Division
console.log(10 % 3);  // 1: Remainder
console.log(2 ** 3);  // 8: Exponentiation


// 5. INCREMENT AND DECREMENT

let count = 5;

count++;
console.log(count); // 6

count--;
console.log(count); // 5

// Prefix vs postfix
let x = 5;

console.log(x++); // 5: use first, increment later
console.log(x);   // 6

let y = 5;

console.log(++y); // 6: increment first, then use


// 6. COMPARISON OPERATORS

console.log(10 > 5);   // true
console.log(10 < 5);   // false
console.log(10 >= 10); // true
console.log(5 <= 3);   // false

console.log(5 == "5");  // true: loose equality
console.log(5 === "5"); // false: different types
console.log(5 != "5");  // false
console.log(5 !== "5"); // true

// Prefer === and !== for predictable comparisons.


// 7. LOGICAL OPERATORS

const hasID = true;
const hasTicket = true;

console.log(hasID && hasTicket); // true: AND
console.log(hasID || hasTicket); // true: OR
console.log(!hasID);             // false: NOT


// 8. CONDITIONAL STATEMENTS

const votingAge = 20;

if (votingAge >= 18) {
  console.log("Eligible to vote");
} else {
  console.log("Not eligible to vote");
}


// 9. ELSE IF

const studentMarks = 85;

if (studentMarks >= 90) {
  console.log("Grade A+");
} else if (studentMarks >= 80) {
  console.log("Grade A");
} else if (studentMarks >= 70) {
  console.log("Grade B");
} else {
  console.log("Needs improvement");
}
// Output: Grade A


// 10. TERNARY OPERATOR

const userAge = 17;

const eligibility =
  userAge >= 18 ? "Eligible" : "Not eligible";

console.log(eligibility); // Not eligible


// 11. SWITCH STATEMENT

const day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Unknown day");
}


// 12. STRINGS

const greeting = "Hello";
const person = "Khushi";

console.log(greeting + " " + person);
// Hello Khushi

console.log(`${greeting}, ${person}!`);
// Hello, Khushi!

console.log(person.length);        // 6
console.log(person.toUpperCase()); // KHUSHI
console.log(person.toLowerCase()); // khushi
console.log(person.includes("ush")); // true
console.log(person.slice(0, 3));   // Khu
console.log("  hello  ".trim());   // hello


// 13. TYPE CONVERSION

console.log(Number("123"));   // 123
console.log(String(100));     // "100"
console.log(Boolean(1));      // true
console.log(Boolean(0));      // false
console.log(parseInt("25px", 10)); // 25
console.log(parseFloat("10.5"));   // 10.5

console.log(Number("hello")); // NaN
console.log(Number.isNaN(Number("hello"))); // true


// 14. TRUTHY AND FALSY VALUES

console.log(Boolean("hello")); // true
console.log(Boolean(100));     // true
console.log(Boolean([]));      // true
console.log(Boolean({}));      // true

console.log(Boolean(""));      // false
console.log(Boolean(0));       // false
console.log(Boolean(false));   // false
console.log(Boolean(null));    // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN));     // false


// 15. NULLISH COALESCING (??)

const username = null;

console.log(username ?? "Guest");
// Guest

console.log(0 ?? 100);
// 0, because 0 is not null or undefined


// 16. OPTIONAL CHAINING (?.)

const user = {
  profile: {
    city: "Kanpur"
  }
};

console.log(user.profile?.city); // Kanpur
console.log(user.address?.city); // undefined


// 17. LOOPS

// for loop
for (let i = 1; i <= 5; i++) {
  console.log("Number:", i);
}

// while loop
let j = 1;

while (j <= 3) {
  console.log("While:", j);
  j++;
}

// do...while loop
let k = 1;

do {
  console.log("Do while:", k);
  k++;
} while (k <= 3);


// 18. BREAK AND CONTINUE

for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue; // Skip 3
  }

  if (i === 5) {
    break; // Stop loop
  }

  console.log(i);
}
// Output: 1, 2, 4


// 19. ARRAYS

const fruits = ["apple", "banana", "mango"];

console.log(fruits[0]); // apple
console.log(fruits.length); // 3

fruits.push("orange");

console.log(fruits);
// ["apple", "banana", "mango", "orange"]

for (const fruit of fruits) {
  console.log(fruit);
}


// 20. OBJECTS

const employee = {
  name: "Ravi",
  age: 25,
  role: "Developer"
};

console.log(employee.name);      // Ravi
console.log(employee["role"]);   // Developer

employee.age = 26;
employee.city = "Kanpur";

console.log(employee);


// 21. FUNCTIONS

function add(a, b) {
  return a + b;
}

console.log(add(2, 3)); // 5

const multiply = (a, b) => a * b;

console.log(multiply(4, 3)); // 12


// 22. FUNCTION DEFAULT PARAMETERS

function greet(name = "friend") {
  return `Hello, ${name}!`;
}

console.log(greet());       // Hello, friend!
console.log(greet("Ravi")); // Hello, Ravi!


// 23. ARRAY METHODS

const numbers = [1, 2, 3, 4, 5];

console.log(numbers.map(n => n * 2));
// [2, 4, 6, 8, 10]

console.log(numbers.filter(n => n % 2 === 0));
// [2, 4]

console.log(numbers.find(n => n > 3));
// 4

console.log(numbers.reduce((sum, n) => sum + n, 0));
// 15


// 24. SPREAD OPERATOR

const firstArray = [1, 2, 3];
const secondArray = [4, 5, 6];

const combined = [...firstArray, ...secondArray];

console.log(combined);
// [1, 2, 3, 4, 5, 6]


// 25. DESTRUCTURING

const studentInfo = {
  studentName: "Khushi",
  branch: "CSE"
};

const { studentName, branch } = studentInfo;

console.log(studentName); // Khushi
console.log(branch);      // CSE

const coordinates = [10, 20];

const [a, b] = coordinates;

console.log(a, b); // 10 20


// 26. SET AND MAP

const uniqueNumbers = new Set([1, 2, 2, 3, 3]);

console.log([...uniqueNumbers]);
// [1, 2, 3]

const userMap = new Map();

userMap.set("name", "Khushi");
userMap.set("age", 20);

console.log(userMap.get("name")); // Khushi
console.log(userMap.has("age"));  // true


// 27. ERROR HANDLING

try {
  const value = JSON.parse("{invalid JSON}");
  console.log(value);
} catch (error) {
  console.log("Error:", error.message);
}


// 28. STRICT MODE

"use strict";

// Strict mode helps catch certain coding mistakes.
// It is automatically enabled in JavaScript modules.
// This directive must be at the beginning of a script
// or function body to enable strict mode there.


// 29. DATE AND TIME

const currentDate = new Date();

console.log(currentDate);
console.log(currentDate.getFullYear());
console.log(currentDate.getMonth() + 1); // Months: 0-11
console.log(currentDate.getDate());


// 30. MATH METHODS

console.log(Math.round(4.6)); // 5
console.log(Math.floor(4.9)); // 4
console.log(Math.ceil(4.1));  // 5
console.log(Math.max(10, 20, 30)); // 30
console.log(Math.min(10, 20, 30)); // 10
console.log(Math.sqrt(64));   // 8
console.log(Math.abs(-10));   // 10


// 31. JSON

const product = {
  name: "Laptop",
  price: 50000
};

const jsonString = JSON.stringify(product);

console.log(jsonString);
// {"name":"Laptop","price":50000}

const parsedProduct = JSON.parse(jsonString);

console.log(parsedProduct.name); // Laptop


// 32. SYNCHRONOUS EXECUTION

console.log("First");
console.log("Second");
console.log("Third");

// Output:
// First
// Second
// Third


// 33. ASYNCHRONOUS JAVASCRIPT

console.log("Start");

setTimeout(() => {
  console.log("Timer completed");
}, 1000);

console.log("End");

// Output:
// Start
// End
// Timer completed


// 34. PROMISE AND ASYNC/AWAIT

function getMessage() {
  return Promise.resolve("Promise completed");
}

async function showMessage() {
  const message = await getMessage();
  console.log(message);
}

showMessage();


// 35. NODE.JS VS BROWSER JAVASCRIPT

console.log("Running JavaScript in Node.js");

// Node.js does not provide browser DOM APIs by default.
// document.querySelector("h1") works in a browser,
// but not in plain Node.js.


// 36. FINAL OUTPUT

console.log("JavaScript introduction completed!");
