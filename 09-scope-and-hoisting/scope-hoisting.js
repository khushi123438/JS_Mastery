// TOPIC: SCOPE AND HOISTING IN JAVASCRIPT
// ==========================================


// ==========================================
// 1. GLOBAL SCOPE
// A variable declared outside functions/blocks
// ==========================================

const globalName = "Asha";

function showName() {
  console.log(globalName);
}

showName(); // Asha
console.log(globalName); // Asha


// ==========================================
// 2. FUNCTION SCOPE WITH var
// var is accessible throughout its function
// ==========================================

function demoVar() {
  var functionScoped = "Visible in function";

  if (true) {
    var insideBlock = "Declared inside block";
  }

  console.log(functionScoped);
  // Output: Visible in function

  console.log(insideBlock);
  // Output: Declared inside block
}

demoVar();

// var ignores ordinary block boundaries,
// but it does not escape its function.


// ==========================================
// 3. BLOCK SCOPE WITH let
// let is accessible only inside its block
// ==========================================

function demoLet() {
  if (true) {
    let blockScoped = "Inside block";

    console.log(blockScoped);
    // Output: Inside block
  }

  // console.log(blockScoped);
  // ReferenceError: blockScoped is not defined
}

demoLet();


// ==========================================
// 4. BLOCK SCOPE WITH const
// const is also block-scoped
// ==========================================

if (true) {
  const message = "Hello JavaScript";
  console.log(message);
  // Output: Hello JavaScript
}

// console.log(message);
// ReferenceError: message is not defined


// ==========================================
// 5. var vs let vs const
// ==========================================

// var: can redeclare and reassign
var age = 20;
var age = 21;
age = 22;

console.log(age); // 22


// let: can reassign, but cannot redeclare
// the same variable in the same scope
let score = 50;
score = 80;

console.log(score); // 80


// const: cannot reassign
const country = "India";

// country = "USA";
// TypeError: Assignment to constant variable

console.log(country); // India


// ==========================================
// 6. var REDECLARATION VS let REDECLARATION
// ==========================================

var x = 10;
var x = 20;

console.log(x); // 20

let y = 10;
// let y = 20;
// SyntaxError: Identifier 'y' has already been declared


// ==========================================
// 7. FUNCTION SCOPE
// Variables declared inside a function
// cannot be accessed outside it
// ==========================================

function calculate() {
  const result = 10 + 20;
  console.log(result);
}

calculate(); // 30

// console.log(result);
// ReferenceError: result is not defined


// ==========================================
// 8. NESTED SCOPE
// Inner scopes can access outer variables
// ==========================================

const outerVariable = "Outer";

function outerFunction() {
  const middleVariable = "Middle";

  function innerFunction() {
    const innerVariable = "Inner";

    console.log(outerVariable);
    console.log(middleVariable);
    console.log(innerVariable);
  }

  innerFunction();
}

outerFunction();

// Output:
// Outer
// Middle
// Inner


// ==========================================
// 9. LEXICAL SCOPE
// A function's access to variables depends
// on where the function is defined
// ==========================================

const language = "JavaScript";

function outer() {
  const framework = "React";

  function inner() {
    console.log(language);
    console.log(framework);
  }

  inner();
}

outer();

// Output:
// JavaScript
// React


// ==========================================
// 10. SCOPE CHAIN
// JavaScript searches from inner scope
// to outer scopes to find a variable
// ==========================================

const a = "Global";

function first() {
  const b = "Function";

  function second() {
    const c = "Inner function";

    console.log(c); // Inner function
    console.log(b); // Function
    console.log(a); // Global
  }

  second();
}

first();


// ==========================================
// 11. WHAT IS HOISTING?
// Declarations are processed before execution.
// Their behavior depends on declaration type.
// ==========================================


// Function declarations can be called early.
sayHi();

function sayHi() {
  console.log("Hi!");
}

// Output: Hi!


// ==========================================
// 12. var HOISTING
// var is hoisted and initialized with undefined
// ==========================================

console.log(myVar); // undefined

var myVar = 100;

console.log(myVar); // 100

// Conceptually, it behaves like:
//
// var myVar;
// console.log(myVar); // undefined
// myVar = 100;


// ==========================================
// 13. let HOISTING
// let is hoisted but cannot be accessed
// before its declaration is evaluated
// ==========================================

// console.log(myLet);
// ReferenceError: Cannot access 'myLet'
// before initialization

let myLet = 200;

console.log(myLet); // 200


// ==========================================
// 14. const HOISTING
// const also has a Temporal Dead Zone (TDZ)
// ==========================================

// console.log(myConst);
// ReferenceError: Cannot access 'myConst'
// before initialization

const myConst = 300;

console.log(myConst); // 300


// ==========================================
// 15. TEMPORAL DEAD ZONE (TDZ)
// The period before let/const initialization
// ==========================================

{
  // TDZ for 'points' starts at the beginning
  // of this block.

  // console.log(points);
  // ReferenceError

  let points = 50;

  console.log(points); // 50
}

// TDZ ends when the declaration is evaluated.


// ==========================================
// 16. FUNCTION DECLARATION HOISTING
// Entire function declaration is available
// before its position in the code
// ==========================================

greet();

function greet() {
  console.log("Welcome!");
}

// Output: Welcome!


// ==========================================
// 17. FUNCTION EXPRESSION HOISTING
// A var variable is hoisted, but its function
// value is assigned only when execution reaches it
// ==========================================

// sayHello();
// TypeError: sayHello is not a function

var sayHello = function () {
  console.log("Hello!");
};

sayHello(); // Hello!


// ==========================================
// 18. let WITH FUNCTION EXPRESSIONS
// The variable cannot be accessed before
// initialization
// ==========================================

// greetUser();
// ReferenceError

const greetUser = function () {
  console.log("Hello user!");
};

greetUser(); // Hello user!


// ==========================================
// 19. ARROW FUNCTION HOISTING
// The arrow function is stored in a variable
// ==========================================

const greetArrow = () => {
  console.log("Hello from arrow function");
};

greetArrow(); // Hello from arrow function

// Calling greetArrow() before its declaration
// would cause a ReferenceError.


// ==========================================
// 20. BLOCK SCOPE INSIDE A LOOP
// let creates a separate binding per iteration
// ==========================================

for (let i = 1; i <= 3; i++) {
  console.log(i);
}

// Output:
// 1
// 2
// 3

// console.log(i);
// ReferenceError: i is not defined


// ==========================================
// 21. var INSIDE A LOOP
// var is not block-scoped
// ==========================================

for (var j = 1; j <= 3; j++) {
  console.log(j);
}

console.log(j); // 4


// ==========================================
// 22. COMMON LOOP CLOSURE PROBLEM WITH var
// All callbacks share the same variable
// ==========================================

for (var k = 1; k <= 3; k++) {
  setTimeout(() => {
    console.log("var:", k);
  }, 100);
}

// Output after the loop:
// var: 4
// var: 4
// var: 4

// The callbacks run later and see the final k.


// ==========================================
// 23. FIX WITH let
// Each iteration gets its own binding
// ==========================================

for (let i = 1; i <= 3; i++) {
  setTimeout(() => {
    console.log("let:", i);
  }, 100);
}

// Output after the loop:
// let: 1
// let: 2
// let: 3


// ==========================================
// 24. CLOSURES
// An inner function remembers variables
// from the scope where it was created
// ==========================================

function outerClosure() {
  const message = "I am remembered";

  return function innerClosure() {
    console.log(message);
  };
}

const savedFunction = outerClosure();

savedFunction();
// Output: I am remembered


// ==========================================
// 25. PRACTICAL CLOSURE: COUNTER
// The inner function retains access to count
// ==========================================

function createCounter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const counter = createCounter();

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

// count remains accessible to the returned
// function, but cannot be accessed directly.


// ==========================================
// 26. CLOSURE WITH MULTIPLE COUNTERS
// Each function call creates a separate scope
// ==========================================

const counterA = createCounter();
const counterB = createCounter();

console.log(counterA()); // 1
console.log(counterA()); // 2
console.log(counterB()); // 1


// ==========================================
// 27. SHADOWING
// An inner variable can have the same name
// as an outer variable
// ==========================================

const fruit = "Apple";

function showFruit() {
  const fruit = "Mango";

  console.log(fruit); // Mango
}

showFruit();
console.log(fruit); // Apple


// ==========================================
// 28. ILLEGAL SHADOWING
// let/const cannot be redeclared by var
// in the same scope
// ==========================================

let amount = 100;

{
  // var amount = 200;
  // SyntaxError: var cannot redeclare
  // this outer let binding
}

// Valid shadowing with a new block-scoped name:
{
  let amount = 200;
  console.log(amount); // 200
}

console.log(amount); // 100


// ==========================================
// 29. GLOBAL OBJECT DIFFERENCE
// In browser classic scripts, top-level var
// may become a window property.
// Top-level let/const do not.
// ==========================================

// Browser-only example:
//
// var browserVar = "Hello";
// let browserLet = "World";
//
// console.log(window.browserVar); // "Hello"
// console.log(window.browserLet); // undefined
//
// This behavior differs for ES modules
// and does not apply the same way in Node.js.


// ==========================================
// 30. PRACTICAL EXAMPLE: SAFE VALIDATION
// ==========================================

function checkMarks(marks) {
  if (marks >= 40) {
    const result = "Pass";
    console.log(result);
  } else {
    const result = "Fail";
    console.log(result);
  }
}

checkMarks(75); // Pass
checkMarks(30); // Fail

// Each result variable belongs to its own block.


// ==========================================
// END OF SCOPE AND HOISTING
// ==========================================
