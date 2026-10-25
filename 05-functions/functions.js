
// ==================================================
// TOPIC: FUNCTIONS IN JAVASCRIPT
// Basic to Advanced
// ==================================================


// 1. FUNCTION DECLARATION

function add(a, b) {
  return a + b;
}

console.log(add(2, 3)); // 5


// 2. FUNCTION WITH NO PARAMETERS

function sayHello() {
  console.log("Hello, JavaScript!");
}

sayHello(); // Hello, JavaScript!


// 3. FUNCTION WITH PARAMETERS

function greetUser(name) {
  console.log("Hello, " + name);
}

greetUser("Khushi"); // Hello, Khushi


// 4. RETURN STATEMENT

function subtract(a, b) {
  return a - b;
}

const result = subtract(10, 4);
console.log(result); // 6

// Code after return is not executed.
function testReturn() {
  return "Returned";
  console.log("This will not execute");
}

console.log(testReturn()); // Returned


// 5. FUNCTION WITHOUT EXPLICIT RETURN

function showMessage() {
  console.log("Learning functions");
}

const output = showMessage();
// Learning functions

console.log(output); // undefined


// 6. FUNCTION EXPRESSION

const multiply = function (a, b) {
  return a * b;
};

console.log(multiply(4, 3)); // 12


// 7. ARROW FUNCTION

const divide = (a, b) => {
  return a / b;
};

console.log(divide(10, 2)); // 5


// 8. ARROW FUNCTION WITH IMPLICIT RETURN

const square = (num) => num * num;

console.log(square(5)); // 25

// Single parameter: parentheses are optional.
const double = num => num * 2;

console.log(double(6)); // 12

// No parameters: parentheses are required.
const sayHi = () => "Hi!";

console.log(sayHi()); // Hi!


// 9. DEFAULT PARAMETERS

function greet(name = "friend") {
  return `Hello, ${name}!`;
}

console.log(greet());       // Hello, friend!
console.log(greet("Ravi")); // Hello, Ravi!

function calculatePrice(price, tax = 10) {
  return price + (price * tax / 100);
}

console.log(calculatePrice(100));     // 110
console.log(calculatePrice(100, 18)); // 118


// 10. REST PARAMETERS (...)

// Accept any number of arguments.
function sumAll(...numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}

console.log(sumAll(1, 2, 3));       // 6
console.log(sumAll(10, 20, 30, 40)); // 100


// 11. ARGUMENTS OBJECT

function showArguments() {
  console.log(arguments);
  console.log(arguments[0]);
  console.log(arguments[1]);
}

showArguments("JavaScript", "Python");

// Note: arguments is available in regular functions,
// but not in arrow functions.


// 12. CALLBACK FUNCTIONS

function processNumber(num, callback) {
  return callback(num);
}

function squareNumber(n) {
  return n * n;
}

console.log(processNumber(5, squareNumber)); // 25

// Passing a function directly
console.log(processNumber(4, n => n + 10)); // 14


// 13. HIGHER-ORDER FUNCTION

function createMultiplier(multiplier) {
  return function (number) {
    return number * multiplier;
  };
}

const triple = createMultiplier(3);

console.log(triple(5)); // 15


// 14. IIFE (Immediately Invoked Function Expression)

// Function runs immediately after creation.
(function () {
  console.log("IIFE executed!");
})();

// Arrow function IIFE
(() => {
  console.log("Arrow IIFE executed!");
})();


// 15. ANONYMOUS FUNCTION

setTimeout(function () {
  console.log("This runs after 1 second");
}, 1000);


// 16. RECURSION

// A function calling itself.
function factorial(n) {
  if (n <= 1) {
    return 1; // Base case
  }

  return n * factorial(n - 1);
}

console.log(factorial(5)); // 120

// Dry run:
// factorial(5) = 5 * factorial(4)
//              = 5 * 4 * factorial(3)
//              = 5 * 4 * 3 * factorial(2)
//              = 5 * 4 * 3 * 2 * factorial(1)
//              = 120


// 17. RECURSION: FIBONACCI

function fibonacci(n) {
  if (n <= 1) {
    return n;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(6)); // 8


// 18. FUNCTION SCOPE

const globalVariable = "I am global";

function scopeExample() {
  const localVariable = "I am local";

  console.log(globalVariable);
  console.log(localVariable);
}

scopeExample();

// console.log(localVariable); // ReferenceError


// 19. BLOCK SCOPE

function blockScopeExample() {
  if (true) {
    let message = "Inside block";
    console.log(message);
  }

  // console.log(message); // ReferenceError
}

blockScopeExample();


// 20. CLOSURES

function outerFunction() {
  const message = "Hello from outer function";

  function innerFunction() {
    return message;
  }

  return innerFunction;
}

const inner = outerFunction();

console.log(inner()); // Hello from outer function


// 21. CLOSURE: PRIVATE COUNTER

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


// 22. PURE FUNCTION

// Same input always gives same output.
// Does not modify external state.
function pureAdd(a, b) {
  return a + b;
}

console.log(pureAdd(2, 3)); // 5


// 23. FUNCTION AS AN ARGUMENT

function calculate(a, b, operation) {
  return operation(a, b);
}

console.log(calculate(10, 5, (a, b) => a + b)); // 15
console.log(calculate(10, 5, (a, b) => a - b)); // 5
console.log(calculate(10, 5, (a, b) => a * b)); // 50


// 24. FUNCTION RETURNING AN OBJECT

function createStudent(name, marks) {
  return {
    name: name,
    marks: marks
  };
}

const student = createStudent("Khushi", 90);

console.log(student);
console.log(student.name);  // Khushi
console.log(student.marks); // 90


// 25. DESTRUCTURING PARAMETERS

function displayStudent({ name, marks }) {
  console.log(`${name} scored ${marks} marks`);
}

displayStudent({
  name: "Ravi",
  marks: 85
});
// Ravi scored 85 marks


// 26. ARRAY DESTRUCTURING IN PARAMETERS

function displayCoordinates([x, y]) {
  console.log("X:", x);
  console.log("Y:", y);
}

displayCoordinates([10, 20]);


// 27. FUNCTION HOISTING

// Function declarations can be called before their definition.
console.log(hoistedFunction()); // Available!

function hoistedFunction() {
  return "Available!";
}

// Function expressions assigned to const cannot be
// called before initialization.


// 28. ARROW FUNCTION VS REGULAR FUNCTION

const person = {
  name: "Khushi",

  regularFunction: function () {
    return this.name;
  },

  arrowFunction: () => {
    // Arrow functions do not have their own `this`.
    return this.name;
  }
};

console.log(person.regularFunction()); // Khushi

// person.arrowFunction() does not refer to person.name.
// Its result depends on the surrounding `this` context.


// 29. ASYNCHRONOUS FUNCTION

async function fetchMessage() {
  return "Data received";
}

fetchMessage().then(message => {
  console.log(message); // Data received
});


// 30. PROMISE WITH ASYNC/AWAIT

function getData() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Data loaded successfully");
    }, 500);
  });
}

async function displayData() {
  const data = await getData();
  console.log(data);
}

displayData();


// 31. ERROR HANDLING IN FUNCTIONS

function safeDivide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }

  return a / b;
}

try {
  console.log(safeDivide(10, 2)); // 5
  console.log(safeDivide(10, 0)); // Throws error
} catch (error) {
  console.log(error.message);
  // Cannot divide by zero
}


// 32. FUNCTION WITH VALIDATION

function checkAge(age) {
  if (typeof age !== "number" || !Number.isFinite(age)) {
    return "Please provide a valid number";
  }

  if (age < 0) {
    return "Age cannot be negative";
  }

  return age >= 18 ? "Adult" : "Minor";
}

console.log(checkAge(21));   // Adult
console.log(checkAge(15));   // Minor
console.log(checkAge(-2));   // Age cannot be negative
console.log(checkAge("20")); // Please provide a valid number


// 33. REST PARAMETERS WITH OTHER PARAMETERS

function introduce(greeting, ...names) {
  return `${greeting} ${names.join(", ")}`;
}

console.log(introduce("Hello", "Khushi", "Ravi", "Aman"));
// Hello Khushi, Ravi, Aman


// 34. FUNCTION COMPOSITION

function increment(n) {
  return n + 1;
}

function doubleNumber(n) {
  return n * 2;
}

console.log(doubleNumber(increment(4))); // 10


// 35. FUNCTION WITH EARLY RETURN

function getDiscount(price) {
  if (price <= 0) {
    return "Invalid price";
  }

  if (price >= 1000) {
    return price * 0.20;
  }

  return price * 0.10;
}

console.log(getDiscount(2000)); // 400
console.log(getDiscount(500));  // 50
console.log(getDiscount(-10));  // Invalid price


// END OF FUNCTIONS

console.log("JavaScript Functions completed!");
