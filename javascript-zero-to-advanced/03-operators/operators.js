// TOPIC: OPERATORS
console.log(7 + 3);          // 10
console.log(7 % 3);          // 1 (remainder)
console.log(2 ** 3);         // 8
console.log("5" + 2);        // "52" (string concatenation)
console.log(5 === "5");      // false (type and value differ)
console.log(5 == "5");       // true (coercion; avoid when possible)

const quantity = 0;
console.log(quantity || 10); // 10
console.log(quantity ?? 10); // 0
