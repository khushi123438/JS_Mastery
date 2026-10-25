// TOPIC: OUTPUT-BASED QUESTIONS
console.log(1 + "2"); // "12"
console.log("5" - 2); // 3
console.log(Boolean("")); // false

for (var i = 0; i < 3; i++) {
  // var is function-scoped; callbacks see the final value of i.
  setTimeout(() => console.log("var:", i), 0);
}
// Typical output: var: 3 (three times)

for (let j = 0; j < 3; j++) {
  // let creates a per-iteration binding.
  setTimeout(() => console.log("let:", j), 0);
}
// Typical output: let: 0, let: 1, let: 2

// Predict first, then run: node solutions.js
