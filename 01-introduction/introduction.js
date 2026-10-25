// TOPIC: INTRODUCTION TO JAVASCRIPT
// Run in Node.js: node introduction.js
// Browser APIs such as document are not available in plain Node.js.

console.log("Hello, JavaScript!"); // Output: Hello, JavaScript!
console.log(10 + 20);             // Output: 30

const language = "JavaScript";    // const prevents reassignment of this binding.
console.log(language);            // Output: JavaScript

const age = 20;
if (age >= 18) {
  console.log("Eligible to vote");
} else {
  console.log("Not eligible to vote");
}
// Output: Eligible to vote
