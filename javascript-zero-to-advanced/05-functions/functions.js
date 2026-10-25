// TOPIC: FUNCTIONS
function add(a, b) {
  return a + b;
}
console.log(add(2, 3)); // 5

const multiply = (a, b) => a * b;
console.log(multiply(4, 3)); // 12

function greet(name = "friend") {
  return `Hello, ${name}!`;
}
console.log(greet());       // Hello, friend!
console.log(greet("Ravi")); // Hello, Ravi!

// A function without an explicit return returns undefined.
