// TOPIC: DESTRUCTURING AND SPREAD
const [first, second] = ["red", "blue"];
console.log(first, second); // red blue

const { name: userName, role = "learner" } = { name: "Asha" };
console.log(userName, role); // Asha learner

const original = [1, 2];
const copy = [...original, 3];
console.log(copy); // [1, 2, 3]

const profile = { name: "Ravi", active: true };
const updatedProfile = { ...profile, active: false };
console.log(updatedProfile); // { name: "Ravi", active: false }

function total(...values) {
  return values.reduce((sum, value) => sum + value, 0);
}
console.log(total(2, 3, 4)); // 9
