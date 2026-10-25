// TOPIC: ARRAY METHODS
const numbers = [1, 2, 3, 4, 5];
console.log(numbers.map(n => n * 2)); // [2, 4, 6, 8, 10]
console.log(numbers.filter(n => n % 2 === 0)); // [2, 4]
console.log(numbers.reduce((sum, n) => sum + n, 0)); // 15
console.log(numbers.find(n => n > 3)); // 4
console.log(numbers.some(n => n < 0)); // false
console.log(numbers.every(n => n > 0)); // true

// map/filter/reduce do not mutate the original array in these examples.
