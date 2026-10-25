// TOPIC: CALLBACKS
function processNumber(number, callback) {
  return callback(number);
}
const result = processNumber(5, n => n * n);
console.log(result); // 25

const numbers = [1, 2, 3];
const doubled = numbers.map(n => n * 2);
console.log(doubled); // [2, 4, 6]

// Callback style lets the caller customize behavior.
function greet(name, formatter) {
  console.log(formatter(name));
}
greet("Asha", name => `Hello, ${name}!`); // Hello, Asha!
