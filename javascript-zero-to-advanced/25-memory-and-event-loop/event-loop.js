// TOPIC: MEMORY AND EVENT LOOP
console.log("A");

setTimeout(() => console.log("B: timer"), 0);

Promise.resolve().then(() => console.log("C: promise"));

console.log("D");

// Typical output:
// A
// D
// C: promise
// B: timer
// Why: synchronous code runs first, then promise microtasks, then timer task.
