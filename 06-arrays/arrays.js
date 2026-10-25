// TOPIC: ARRAYS
const fruits = ["apple", "banana", "mango"];
console.log(fruits[0]); // apple
fruits.push("orange");
console.log(fruits.length); // 4
console.log(fruits.slice(1, 3)); // ["banana", "mango"]

for (const fruit of fruits) {
  console.log(fruit);
}
// apple, banana, mango, orange

// slice() returns a shallow copy; splice() changes the original array.
