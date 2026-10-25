// TOPIC: MODERN JAVASCRIPT
const scores = [10, 20, 30];
const [first, ...remaining] = scores;
console.log(first, remaining); // 10 [20, 30]

const student = { name: "Asha", marks: 80 };
const improvedStudent = { ...student, marks: 90 };
console.log(improvedStudent); // { name: "Asha", marks: 90 }

const config = { display: { mode: "dark" } };
console.log(config.display?.mode ?? "light"); // dark

const names = ["Asha", "Ravi"].map(name => name.toUpperCase());
console.log(names); // ["ASHA", "RAVI"]
