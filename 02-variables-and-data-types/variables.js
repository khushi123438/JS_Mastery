
// ==================================================
// TOPIC: VARIABLES AND DATA TYPES
// Basic to Advanced
// Run: node variables.js
// ==================================================


// 1. VARIABLES: var, let, const

var city = "Kanpur";
let score = 95;
const language = "JavaScript";

console.log(city);     // Kanpur
console.log(score);    // 95
console.log(language); // JavaScript


// 2. REASSIGNMENT

var country = "India";
country = "Japan";
console.log(country); // Japan

let age = 20;
age = 21;
console.log(age); // 21

const pi = 3.14159;
// pi = 3.14; // TypeError: Assignment to constant variable


// 3. REDECLARATION

var x = 10;
var x = 20; // Allowed
console.log(x); // 20

let y = 10;
// let y = 20; // SyntaxError in the same scope

const z = 10;
// const z = 20; // SyntaxError in the same scope


// 4. BASIC DATA TYPES

const name = "Asha";            // String
let marks = 95;                 // Number
const isLearning = true;        // Boolean
let pending;                    // Undefined
const emptyValue = null;        // Null
const bigNumber = 123456789n;   // BigInt
const uniqueKey = Symbol("id"); // Symbol

console.log(typeof name);        // string
console.log(typeof marks);       // number
console.log(typeof isLearning);  // boolean
console.log(typeof pending);     // undefined
console.log(typeof emptyValue);  // object (historical quirk)
console.log(typeof bigNumber);   // bigint
console.log(typeof uniqueKey);   // symbol


// 5. UNDEFINED

let result;

console.log(result);        // undefined
console.log(typeof result); // undefined

result = 100;

console.log(result); // 100


// 6. NULL

let selectedUser = null;

console.log(selectedUser);        // null
console.log(typeof selectedUser); // object

selectedUser = "Khushi";

console.log(selectedUser); // Khushi


// 7. STRINGS

const firstName = "Khushi";
const lastName = 'Pandey';

console.log(firstName);
console.log(lastName);

// Template literals
const fullName = `${firstName} ${lastName}`;

console.log(fullName); // Khushi Pandey

console.log(fullName.length);        // 13
console.log(fullName.toUpperCase()); // KHUSHI PANDEY
console.log(fullName.toLowerCase()); // khushi pandey


// 8. NUMBERS

const integer = 100;
const decimal = 99.99;
const negative = -25;

console.log(integer);
console.log(decimal);
console.log(negative);

console.log(10 / 0); // Infinity
console.log(-10 / 0); // -Infinity
console.log("hello" * 2); // NaN

console.log(Number.isNaN(NaN));       // true
console.log(Number.isFinite(100));    // true
console.log(Number.isFinite(Infinity)); // false
console.log(Number.isInteger(10));    // true
console.log(Number.isInteger(10.5));  // false


// 9. TYPE CONVERSION

const stringNumber = "50";

console.log(Number(stringNumber)); // 50
console.log(typeof Number(stringNumber)); // number

const numberValue = 100;

console.log(String(numberValue)); // "100"
console.log(typeof String(numberValue)); // string

console.log(Boolean(1));       // true
console.log(Boolean(0));       // false
console.log(Boolean("Hello")); // true
console.log(Boolean(""));      // false

console.log(parseInt("25px", 10)); // 25
console.log(parseFloat("12.5"));   // 12.5


// 10. IMPLICIT TYPE CONVERSION

console.log("5" + 2); // "52": string concatenation
console.log("5" - 2); // 3: numeric conversion
console.log("5" * 2); // 10
console.log(true + 1); // 2
console.log(false + 1); // 1


// 11. PRIMITIVE DATA TYPES

let a = 10;
let b = a;

b = 20;

console.log(a); // 10
console.log(b); // 20

// Primitive values are copied by value.


// 12. OBJECT DATA TYPE

const learner = {
  name: "Asha",
  level: "beginner",
  score: 95
};

console.log(learner.name);  // Asha
console.log(learner.level); // beginner

// const prevents reassignment of the binding,
// but object properties can still be modified.

learner.level = "intermediate";

console.log(learner.level); // intermediate

learner.city = "Kanpur";

console.log(learner.city); // Kanpur

// learner = {}; // TypeError: cannot reassign const


// 13. ARRAYS

const subjects = ["JavaScript", "Python", "Java"];

console.log(subjects[0]); // JavaScript

subjects.push("C++");

console.log(subjects);
// ["JavaScript", "Python", "Java", "C++"]

console.log(typeof subjects); // object
console.log(Array.isArray(subjects)); // true


// 14. OBJECT REFERENCE BEHAVIOR

const original = {
  value: 10
};

const reference = original;

reference.value = 50;

console.log(original.value);  // 50
console.log(reference.value); // 50

// Both variables refer to the same object.


// 15. BLOCK SCOPE: let AND const

if (true) {
  let blockMessage = "Inside block";
  const blockNumber = 100;

  console.log(blockMessage);
  console.log(blockNumber);
}

// console.log(blockMessage); // ReferenceError
// console.log(blockNumber);  // ReferenceError


// 16. FUNCTION SCOPE: var

function testVarScope() {
  var message = "Function scoped";
  console.log(message);
}

testVarScope();

// console.log(message); // ReferenceError


// 17. VAR AND BLOCK SCOPE

if (true) {
  var accessible = "var is not block scoped";
  let inaccessible = "let is block scoped";
}

console.log(accessible); // var is not block scoped
// console.log(inaccessible); // ReferenceError


// 18. CONST WITH ARRAYS AND OBJECTS

const numbers = [1, 2, 3];

numbers.push(4); // Allowed
numbers[0] = 100; // Allowed

console.log(numbers); // [100, 2, 3, 4]

const user = {
  name: "Asha"
};

user.name = "Riya"; // Allowed

console.log(user.name); // Riya


// 19. OBJECT DESTRUCTURING

const student = {
  studentName: "Khushi",
  age: 20,
  branch: "CSE"
};

const { studentName, branch } = student;

console.log(studentName); // Khushi
console.log(branch);      // CSE


// 20. ARRAY DESTRUCTURING

const colors = ["red", "green", "blue"];

const [first, second, third] = colors;

console.log(first);  // red
console.log(second); // green
console.log(third);  // blue


// 21. DEFAULT VALUES

const { country: studentCountry = "India" } = student;

console.log(studentCountry); // India

const [one = 10, two = 20] = [5];

console.log(one); // 5
console.log(two); // 20


// 22. SPREAD OPERATOR

const oldArray = [1, 2, 3];
const newArray = [...oldArray, 4, 5];

console.log(newArray); // [1, 2, 3, 4, 5]

const oldObject = { name: "Asha", age: 20 };
const newObject = { ...oldObject, age: 21 };

console.log(newObject);
// { name: "Asha", age: 21 }


// 23. REST OPERATOR

const [head, ...tail] = [10, 20, 30, 40];

console.log(head); // 10
console.log(tail); // [20, 30, 40]


// 24. VARIABLE HOISTING

console.log(hoistedVar); // undefined
var hoistedVar = 10;

// let and const are also hoisted internally,
// but cannot be accessed before initialization.

// console.log(hoistedLet); // ReferenceError
let hoistedLet = 20;


// 25. typeof OPERATOR

console.log(typeof "Hello");     // string
console.log(typeof 123);         // number
console.log(typeof true);        // boolean
console.log(typeof undefined);   // undefined
console.log(typeof null);        // object
console.log(typeof {});          // object
console.log(typeof []);          // object
console.log(typeof function () {}); // function


// 26. CHECKING NULL AND UNDEFINED

let value = null;

console.log(value === null); // true

let anotherValue;

console.log(anotherValue === undefined); // true

console.log(value == undefined);  // true
console.log(value === undefined); // false

// Prefer strict comparisons (===) for clarity.


// 27. SYMBOLS

const id1 = Symbol("id");
const id2 = Symbol("id");

console.log(id1 === id2); // false

const account = {
  [id1]: 101
};

console.log(account[id1]); // 101


// 28. BIGINT

const bigIntA = 9007199254740991n;
const bigIntB = 10n;

console.log(bigIntA + bigIntB);
// 9007199254741001n

// BigInt and Number cannot be mixed directly.
// console.log(bigIntA + 10); // TypeError


// 29. CONSTANTS AND MUTABILITY

const profile = {
  skills: ["JavaScript"]
};

profile.skills.push("Python");

console.log(profile.skills);
// ["JavaScript", "Python"]

// Object.freeze() prevents ordinary property changes,
// but only freezes the object shallowly.

const frozenUser = Object.freeze({
  name: "Asha"
});

// frozenUser.name = "Riya"; // Fails to change in strict mode
console.log(frozenUser.name); // Asha


// 30. FINAL PRACTICE

const userName = "Khushi";
let scoreValue = 95;
const isLearningJS = true;
let futureGoal;

scoreValue += 5;

console.log(userName, scoreValue, isLearningJS);
// Khushi 100 true

console.log(typeof userName);   // string
console.log(typeof futureGoal); // undefined
console.log(typeof null);       // object

console.log("Variables and data types completed!");
