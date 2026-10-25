// TOPIC: STRINGS AND NUMBERS
const message = "JavaScript";
console.log(message.length);          // 10
console.log(message.toUpperCase());   // JAVASCRIPT
console.log(message.includes("Script")); // true

const name = "Riya";
console.log(`Welcome, ${name}!`);      // Welcome, Riya!

console.log(Number("42"));             // 42
console.log(Number("hello"));          // NaN
console.log(Number.isNaN(Number("hello"))); // true
console.log(0.1 + 0.2);                // 0.30000000000000004
