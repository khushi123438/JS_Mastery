// TOPIC: REGEX AND DATES
const pattern = /^[A-Z]{2}\d{4}$/;
console.log(pattern.test("AB1234")); // true
console.log(pattern.test("ab1234")); // false

const date = new Date("2026-01-15T12:00:00Z");
console.log(date.toISOString()); // 2026-01-15T12:00:00.000Z
console.log(date.getUTCFullYear()); // 2026

// Use UTC methods when you need timezone-independent components.
