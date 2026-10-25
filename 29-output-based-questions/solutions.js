// 1. Type Coercion
console.log(1 + "2");       // "12"
console.log("5" - 2);       // 3
console.log("5" * "2");     // 10
console.log("10" / 2);      // 5
console.log(1 + 2 + "3");   // "33"
console.log("1" + 2 + 3);   // "123"
console.log(true + 1);      // 2
console.log(false + 5);     // 5
console.log(null + 1);      // 1
console.log(undefined + 1); // NaN


// 2. Boolean Conversion
console.log(Boolean(""));      // false
console.log(Boolean("hello")); // true
console.log(Boolean(0));       // false
console.log(Boolean("0"));     // true
console.log(Boolean([]));      // true
console.log(Boolean({}));      // true
console.log(Boolean(null));    // false


// 3. Equality Operators
console.log(5 == "5");   // true
console.log(5 === "5");  // false
console.log(null == undefined);  // true
console.log(null === undefined); // false
console.log(false == 0);  // true
console.log(false === 0); // false


// 4. NaN
console.log(typeof NaN);        // "number"
console.log(NaN === NaN);       // false
console.log(Number.isNaN(NaN)); // true


// 5. var vs let in Loops
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log("var:", i), 0);
}
// var: 3
// var: 3
// var: 3

for (let j = 0; j < 3; j++) {
    setTimeout(() => console.log("let:", j), 0);
}
// let: 0
// let: 1
// let: 2


// 6. Hoisting with var
console.log(a); // undefined
var a = 10;

// console.log(b); // ReferenceError if uncommented
let b = 20;


// 7. Function Hoisting
sayHello(); // Hello!

function sayHello() {
    console.log("Hello!");
}


// 8. Function Expression
// greet(); // TypeError: greet is not a function
var greet = function () {
    console.log("Hi!");
};

greet(); // Hi!


// 9. Scope
var x = 10;

if (true) {
    var x = 20;
}

console.log(x); // 20

let y = 10;

if (true) {
    let y = 20;
}

console.log(y); // 10


// 10. Closure
function outer() {
    let count = 0;

    return function () {
        count++;
        return count;
    };
}

const counter = outer();

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3


// 11. Array References
const arr1 = [1, 2];
const arr2 = arr1;

arr2.push(3);

console.log(arr1); // [1, 2, 3]
console.log(arr2); // [1, 2, 3]


// 12. Shallow Copy
const original = { name: "Asha", address: { city: "Delhi" } };
const copied = { ...original };

copied.name = "Riya";
copied.address.city = "Mumbai";

console.log(original.name);          // "Asha"
console.log(original.address.city);  // "Mumbai"


// 13. Array Methods
const numbers = [1, 2, 3, 4];

console.log(numbers.map(n => n * 2));        // [2, 4, 6, 8]
console.log(numbers.filter(n => n > 2));     // [3, 4]
console.log(numbers.reduce((a, b) => a + b, 0)); // 10
console.log(numbers.find(n => n > 2));       // 3

console.log(numbers); // [1, 2, 3, 4]


// 14. Truthy and Falsy with ||
console.log("" || "Default");  // "Default"
console.log("Hello" || "Default"); // "Hello"
console.log(0 || 100);         // 100


// 15. Nullish Coalescing
console.log(null ?? "Default");      // "Default"
console.log(undefined ?? "Default"); // "Default"
console.log(0 ?? 100);               // 0
console.log("" ?? "Default");        // ""


// 16. Optional Chaining
const user = { profile: { name: "Asha" } };

console.log(user.profile?.name); // "Asha"
console.log(user.address?.city); // undefined


// 17. Object Property Lookup
const parent = { role: "learner" };
const child = Object.create(parent);

child.name = "Ravi";

console.log(child.role); // "learner"
console.log(Object.hasOwn(child, "role")); // false
console.log("role" in child); // true


// 18. this in an Object Method
const person = {
    name: "Asha",
    greet() {
        return this.name;
    }
};

console.log(person.greet()); // "Asha"


// 19. Spread and Rest
const nums = [1, 2, 3];
const [first, ...rest] = nums;

console.log(first); // 1
console.log(rest);  // [2, 3]
console.log([...nums, 4]); // [1, 2, 3, 4]


// 20. Set Removes Duplicates
console.log([...new Set([1, 2, 2, 3, 3])]);
// [1, 2, 3]


// 21. Synchronous vs Asynchronous Output
console.log("A");

setTimeout(() => console.log("B"), 0);

console.log("C");

// A
// C
// B


// 22. Promise and setTimeout
console.log("Start");

setTimeout(() => console.log("Timeout"), 0);

Promise.resolve().then(() => console.log("Promise"));

console.log("End");

// Start
// End
// Promise
// Timeout


// 23. Promise Chaining
Promise.resolve(5)
    .then(n => n * 2)
    .then(n => n + 1)
    .then(result => console.log(result));
// 11


// 24. Short-Circuit Evaluation
console.log(false && "Hello"); // false
console.log(true && "Hello");  // "Hello"
console.log(true || "World");  // true


// 25. Increment Operators
let n = 5;

console.log(n++); // 5
console.log(n);   // 6
console.log(++n); // 7


// 26. String Immutability
let text = "hello";

text.toUpperCase();

console.log(text); // "hello"

text = text.toUpperCase();

console.log(text); // "HELLO"


// 27. Default Parameters
function multiply(a, b = 2) {
    return a * b;
}

console.log(multiply(5));     // 10
console.log(multiply(5, 3));  // 15
console.log(multiply(5, 0));  // 0


// 28. Destructuring Defaults
const [p = 10, q = 20] = [5];

console.log(p, q); // 5 20


// 29. Sorting Numbers
const scores = [10, 2, 30, 4];

console.log([...scores].sort());
// [10, 2, 30, 4] - lexicographic order

console.log([...scores].sort((a, b) => a - b));
// [2, 4, 10, 30]


// 30. Finally Block
function test() {
    try {
        return "try";
    } finally {
        console.log("finally executed");
    }
}

console.log(test());
// finally executed
// try
