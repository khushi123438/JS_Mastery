// TOPIC: MODULES
// This file demonstrates syntax; imports/exports are normally split across files.
// math.js:
// export const add = (a, b) => a + b;
// export default function square(n) { return n * n; }
//
// app.js:
// import square, { add } from "./math.js";
// console.log(add(2, 3)); // 5
// console.log(square(4)); // 16
//
// Run ES modules in Node.js using .mjs files or package.json "type": "module".
