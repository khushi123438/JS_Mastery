// TOPIC: MODULES

// ==================================================
// 1. NAMED EXPORTS (ES MODULES)
// File: math.js
// ==================================================

export const PI = 3.14159;

export const add = (a, b) => a + b;

export const subtract = (a, b) => a - b;

export function multiply(a, b) {
    return a * b;
}


// ==================================================
// 2. DEFAULT EXPORT
// File: calculator.js
// ==================================================

export default function square(number) {
    return number * number;
}

// A module can have multiple named exports,
// but only one default export.


// ==================================================
// 3. IMPORT NAMED AND DEFAULT EXPORTS
// File: app.js
// ==================================================

import square, { add, subtract, multiply, PI } from "./math-tools.js";

console.log(add(2, 3));
console.log(subtract(10, 4));
console.log(multiply(3, 4));
console.log(PI);

// Note: This example shows import syntax.
// For a real project, import from the correct files.


// ==================================================
// 4. NAMED IMPORT ALIASES
// ==================================================

import { add as sum } from "./math.js";

console.log(sum(5, 7));
// 12


// ==================================================
// 5. DEFAULT IMPORT ALIAS
// ==================================================

import calculateSquare from "./calculator.js";

console.log(calculateSquare(4));
// 16

// Default imports can use any local name.


// ==================================================
// 6. IMPORT ALL NAMED EXPORTS
// ==================================================

import * as MathUtils from "./math.js";

console.log(MathUtils.add(2, 3));
// 5

console.log(MathUtils.PI);
// 3.14159


// ==================================================
// 7. EXPORTING AFTER DECLARATION
// ==================================================

const appName = "Learning App";

function greet(name) {
    return `Hello, ${name}!`;
}

export { appName, greet };


// ==================================================
// 8. RE-EXPORTING
// File: utils/index.js
// ==================================================

export { add, subtract } from "./math.js";

export { default as square } from "./calculator.js";

// Another file can import from this index module:
// import { add, square } from "./utils/index.js";


// ==================================================
// 9. DYNAMIC IMPORT
// ==================================================

async function loadMath() {
    const math = await import("./math.js");

    console.log(math.add(10, 20));
}

loadMath();

// Dynamic import returns a Promise.
// It can load a module when needed.


// ==================================================
// 10. COMMONJS EXPORTS
// File: math.cjs
// ==================================================

const multiplyNumbers = (a, b) => a * b;

function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }

    return a / b;
}

module.exports = {
    multiplyNumbers,
    divide
};


// ==================================================
// 11. COMMONJS REQUIRE
// File: app.cjs
// ==================================================

const { multiplyNumbers, divide } = require("./math.cjs");

console.log(multiplyNumbers(4, 5));
// 20

console.log(divide(20, 4));
// 5


// ==================================================
// 12. COMMONJS EXPORTS VS MODULE.EXPORTS
// ==================================================

// Add a property to the existing exported object:
exports.greet = name => `Hello, ${name}!`;

// Replace the complete exported value:
module.exports = function subtract(a, b) {
    return a - b;
};

// Important: exports is initially a reference to module.exports.
// Reassigning exports alone does not replace module.exports.


// ==================================================
// 13. COMMONJS MODULE CACHING
// ==================================================

// When a CommonJS module is required again,
// Node.js normally reuses its cached exports.
//
// const first = require("./math.cjs");
// const second = require("./math.cjs");
//
// Both references normally receive the cached export value.


// ==================================================
// 14. ES MODULES IN NODE.JS
// ==================================================

// Option A: Use .mjs files
// math.mjs  -> exports
// app.mjs   -> imports

// Option B: Use .js files with package.json:
// {
//   "type": "module"
// }

// Then use import/export syntax in .js files.


// ==================================================
// 15. COMMONJS IN NODE.JS
// ==================================================

// Option A: Use .cjs files
// math.cjs -> module.exports
// app.cjs  -> require()

// Option B: Use .js files with package.json:
// {
//   "type": "commonjs"
// }

// Then use CommonJS syntax in .js files.


// ==================================================
// 16. CIRCULAR DEPENDENCIES
// ==================================================

// A circular dependency happens when:
// moduleA imports/requires moduleB
// and moduleB imports/requires moduleA.
//
// Avoid unnecessary circular dependencies because
// they can cause partially initialized exports
// or access-before-initialization errors.


// ==================================================
// 17. MODULE SCOPE
// ==================================================

// Variables declared in a module are scoped to that
// module; they do not automatically become globals.
//
// File: secret.js
const secret = "private module value";

export function getSecret() {
    return secret;
}

// Another file can access secret only through
// an exported interface such as getSecret().


// ==================================================
// 18. PRACTICAL EXAMPLE: USER MODULE
// File: user.js
// ==================================================

export function createUser(name, role = "learner") {
    return {
        name,
        role,
        active: true
    };
}

export function getUserSummary(user) {
    return `${user.name} is a ${user.role}`;
}

// File: main.js
// import { createUser, getUserSummary } from "./user.js";
//
// const user = createUser("Asha", "developer");
// console.log(getUserSummary(user));
// Asha is a developer
