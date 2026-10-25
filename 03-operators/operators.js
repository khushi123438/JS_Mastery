
// ==================================================
// TOPIC: OPERATORS IN JAVASCRIPT
// Basic to Advanced
// Run: node operators.js
// ==================================================


// 1. ARITHMETIC OPERATORS

console.log(7 + 3);  // 10: Addition
console.log(7 - 3);  // 4: Subtraction
console.log(7 * 3);  // 21: Multiplication
console.log(7 / 3);  // 2.333...: Division
console.log(7 % 3);  // 1: Remainder
console.log(2 ** 3); // 8: Exponentiation

// Real-life example
const price = 100;
const quantity = 3;

console.log(price * quantity); // 300: Total price


// 2. ASSIGNMENT OPERATORS

let score = 10;

score += 5; // score = score + 5
console.log(score); // 15

score -= 3; // score = score - 3
console.log(score); // 12

score *= 2; // score = score * 2
console.log(score); // 24

score /= 4; // score = score / 4
console.log(score); // 6

score %= 4; // score = score % 4
console.log(score); // 2

score **= 3; // score = score ** 3
console.log(score); // 8


// 3. INCREMENT AND DECREMENT OPERATORS

let count = 5;

count++;
console.log(count); // 6

count--;
console.log(count); // 5

// Post-increment: use the value first
let a = 5;

console.log(a++); // 5
console.log(a);   // 6

// Pre-increment: increment first
let b = 5;

console.log(++b); // 6
console.log(b);   // 6

// Pre-decrement and post-decrement
let c = 5;

console.log(c--); // 5
console.log(--c); // 3


// 4. COMPARISON OPERATORS

console.log(10 > 5);   // true
console.log(10 < 5);   // false
console.log(10 >= 10); // true
console.log(5 <= 3);   // false

console.log(5 === 5);   // true
console.log(5 === "5"); // false
console.log(5 !== "5"); // true

// Loose equality performs type coercion
console.log(5 == "5");  // true
console.log(5 != "6");  // true

// Prefer === and !== in most cases.


// 5. LOGICAL AND (&&)

console.log(true && true);   // true
console.log(true && false);  // false
console.log(false && true);  // false

const age = 22;
const hasID = true;

console.log(age >= 18 && hasID); // true

// && returns the first falsy operand,
// or the last operand if all are truthy.
console.log(0 && "Hello");       // 0
console.log("Hi" && "Hello");    // Hello


// 6. LOGICAL OR (||)

console.log(true || false);  // true
console.log(false || false); // false

const username = "";

console.log(username || "Guest"); // Guest

// || returns the first truthy operand,
// or the last operand if all are falsy.
console.log(0 || 100);       // 100
console.log("Hi" || "Hello"); // Hi


// 7. LOGICAL NOT (!)

console.log(!true);  // false
console.log(!false); // true
console.log(!0);     // true
console.log(!"Hi");  // false

const isLoggedIn = false;

if (!isLoggedIn) {
  console.log("Please log in");
}


// 8. NULLISH COALESCING (??)

const quantity = 0;

console.log(quantity || 10); // 10
console.log(quantity ?? 10); // 0

console.log(null ?? "Default");      // Default
console.log(undefined ?? "Default"); // Default
console.log(false ?? true);          // false
console.log("" ?? "Guest");          // ""

// ?? uses the right value only when the left
// value is null or undefined.


// 9. TERNARY OPERATOR

const marks = 75;

const result = marks >= 40 ? "Pass" : "Fail";

console.log(result); // Pass

const number = 7;

console.log(number % 2 === 0 ? "Even" : "Odd");
// Odd


// 10. STRING CONCATENATION

console.log("Hello " + "JavaScript");
// Hello JavaScript

console.log("5" + 2); // "52"
console.log(5 + "2"); // "52"

console.log("Age: " + 20);
// Age: 20

// Template literals are often easier to read.
const name = "Khushi";
const userAge = 20;

console.log(`My name is ${name} and I am ${userAge}`);
// My name is Khushi and I am 20


// 11. TYPE COERCION

console.log("5" - 2); // 3
console.log("5" * 2); // 10
console.log("10" / 2); // 5

console.log(true + 1);  // 2
console.log(false + 1); // 1

console.log(1 + 2 + "3"); // "33"
console.log("1" + 2 + 3); // "123"


// 12. BITWISE OPERATORS

console.log(5 & 1);  // 1: AND
console.log(5 | 1);  // 5: OR
console.log(5 ^ 1);  // 4: XOR
console.log(~5);     // -6: NOT
console.log(5 << 1); // 10: Left shift
console.log(5 >> 1); // 2: Signed right shift

// These work on 32-bit integer representations
// for ordinary Number operands.


// 13. TYPE OPERATORS

console.log(typeof 100);       // "number"
console.log(typeof "Hello");   // "string"
console.log(typeof true);      // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null);      // "object" (historical quirk)

const fruits = ["apple", "mango"];

console.log(Array.isArray(fruits)); // true

console.log("name" in { name: "Khushi" }); // true


// 14. OPTIONAL CHAINING (?.)

const user = {
  profile: {
    city: "Kanpur"
  }
};

console.log(user.profile?.city); // Kanpur
console.log(user.address?.city); // undefined

// Prevents an error when accessing a property
// through null or undefined.


// 15. SPREAD OPERATOR (...)

const firstArray = [1, 2, 3];
const secondArray = [4, 5, 6];

const combined = [...firstArray, ...secondArray];

console.log(combined);
// [1, 2, 3, 4, 5, 6]

const original = { name: "Khushi", age: 20 };
const updated = { ...original, age: 21 };

console.log(updated);
// { name: "Khushi", age: 21 }


// 16. REST OPERATOR (...)

// Collects remaining arguments into an array.
function sum(...numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}

console.log(sum(1, 2, 3));     // 6
console.log(sum(10, 20, 30));  // 60


// 17. OPERATOR PRECEDENCE

console.log(2 + 3 * 4);   // 14
console.log((2 + 3) * 4); // 20

console.log(10 - 2 ** 2); // 6

// Parentheses can make the intended order clear.


// 18. SHORT-CIRCUIT EVALUATION

const isAdmin = false;

isAdmin && console.log("Admin access granted");
// Does not print anything

const isGuest = true;

isGuest || console.log("This will not execute");
// Does not print anything


// 19. DELETE OPERATOR

const profile = {
  name: "Khushi",
  age: 20
};

delete profile.age;

console.log(profile);
// { name: "Khushi" }


// 20. VOID OPERATOR

console.log(void 0); // undefined

// void evaluates an expression and returns undefined.


// 21. INSTANCEOF OPERATOR

const date = new Date();

console.log(date instanceof Date);   // true
console.log([] instanceof Array);    // true
console.log({} instanceof Object);   // true


// 22. COMMA OPERATOR

let firstValue;
let secondValue;

const finalValue = (firstValue = 10, secondValue = 20, firstValue + secondValue);

console.log(finalValue); // 30


// 23. REAL-LIFE EXAMPLE: DISCOUNT

const productPrice = 1000;
const discount = 10;

const finalPrice = productPrice - (productPrice * discount / 100);

console.log(finalPrice); // 900


// 24. REAL-LIFE EXAMPLE: ELIGIBILITY

const studentAge = 20;
const attendance = 85;

const eligible = studentAge >= 18 && attendance >= 75;

console.log(eligible); // true


// 25. REAL-LIFE EXAMPLE: DEFAULT SETTINGS

const userQuantity = 0;
const defaultQuantity = 10;

// || treats 0 as falsy.
console.log(userQuantity || defaultQuantity); // 10

// ?? preserves valid values such as 0 and false.
console.log(userQuantity ?? defaultQuantity); // 0


// END OF OPERATORS

console.log("JavaScript Operators completed!");
