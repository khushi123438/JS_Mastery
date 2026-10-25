// TOPIC: VARIABLES AND DATA TYPES
const name = "Asha";       // string
let score = 95;            // number; reassignment is allowed
const isLearning = true;   // boolean
let pending;               // undefined
const emptyValue = null;   // intentional absence of a value

score += 5;
console.log(name, score, isLearning); // Asha 100 true
console.log(typeof name);             // string
console.log(typeof pending);          // undefined
console.log(typeof null);             // object (historical JavaScript quirk)

const learner = { level: "beginner" };
learner.level = "intermediate"; // Allowed: object is mutable.
console.log(learner.level);     // intermediate
