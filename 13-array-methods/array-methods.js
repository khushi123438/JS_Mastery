
// TOPIC: ARRAY METHODS

const numbers = [1, 2, 3, 4, 5];

// 1. map() - transforms every element and returns a new array
console.log("map:", numbers.map(n => n * 2));
// [2, 4, 6, 8, 10]

// 2. filter() - returns elements that satisfy a condition
console.log("filter:", numbers.filter(n => n % 2 === 0));
// [2, 4]

// 3. reduce() - combines elements into a single value
console.log("reduce:", numbers.reduce((sum, n) => sum + n, 0));
// 15

// 4. find() - returns the first matching element
console.log("find:", numbers.find(n => n > 3));
// 4

// 5. findIndex() - returns the index of the first match
console.log("findIndex:", numbers.findIndex(n => n > 3));
// 3

// 6. some() - true if at least one element matches
console.log("some:", numbers.some(n => n < 0));
// false

// 7. every() - true if all elements match
console.log("every:", numbers.every(n => n > 0));
// true

// 8. forEach() - performs an action for each element
numbers.forEach((n, index) => {
    console.log(`Index ${index}: ${n}`);
});

// 9. includes() - checks whether a value exists
console.log("includes:", numbers.includes(3));
// true

// 10. indexOf() and lastIndexOf()
const repeated = [1, 2, 3, 2, 4];

console.log("indexOf:", repeated.indexOf(2));
// 1

console.log("lastIndexOf:", repeated.lastIndexOf(2));
// 3

// 11. slice() - extracts elements without changing the original
console.log("slice:", numbers.slice(1, 4));
// [2, 3, 4]

// 12. splice() - adds, removes, or replaces elements in the original
const fruits = ["apple", "banana", "mango"];

fruits.splice(1, 1, "orange");
console.log("splice:", fruits);
// ["apple", "orange", "mango"]

// 13. push() and pop() - add/remove at the end
const stack = [10, 20];

stack.push(30);
console.log("push:", stack);
// [10, 20, 30]

stack.pop();
console.log("pop:", stack);
// [10, 20]

// 14. unshift() and shift() - add/remove at the beginning
stack.unshift(5);
console.log("unshift:", stack);
// [5, 10, 20]

stack.shift();
console.log("shift:", stack);
// [10, 20]

// 15. concat() - combines arrays without changing them
const first = [1, 2];
const second = [3, 4];

console.log("concat:", first.concat(second));
// [1, 2, 3, 4]

// 16. join() - converts array elements into a string
console.log("join:", ["JavaScript", "is", "fun"].join(" "));
// "JavaScript is fun"

// 17. sort() - sorts the original array
const scores = [40, 5, 100, 25];

console.log("ascending:", [...scores].sort((a, b) => a - b));
// [5, 25, 40, 100]

console.log("descending:", [...scores].sort((a, b) => b - a));
// [100, 40, 25, 5]

// 18. reverse() - reverses the original array
console.log("reverse:", [...numbers].reverse());
// [5, 4, 3, 2, 1]

// 19. flat() - flattens nested arrays
const nested = [1, [2, 3], [4, [5]]];

console.log("flat:", nested.flat());
// [1, 2, 3, 4, [5]]

console.log("flat depth 2:", nested.flat(2));
// [1, 2, 3, 4, 5]

// 20. flatMap() - maps elements and flattens one level
console.log("flatMap:", [1, 2, 3].flatMap(n => [n, n * 2]));
// [1, 2, 2, 4, 3, 6]

// 21. Array.from() - creates an array from an iterable
console.log("Array.from:", Array.from("hello"));
// ["h", "e", "l", "l", "o"]

console.log("Array.from with map:", Array.from([1, 2, 3], n => n * 2));
// [2, 4, 6]

// 22. Array.isArray() - checks whether a value is an array
console.log("isArray:", Array.isArray(numbers));
// true

// 23. at() - accesses an element using a positive or negative index
console.log("at:", numbers.at(2));
// 3

console.log("last element:", numbers.at(-1));
// 5

// 24. with() - returns a new array with one element replaced
console.log("with:", numbers.with(1, 99));
// [1, 99, 3, 4, 5]

// 25. toSorted() - sorts without changing the original (modern JavaScript)
console.log("toSorted:", scores.toSorted((a, b) => a - b));
// [5, 25, 40, 100]

// 26. toReversed() - reverses without changing the original
console.log("toReversed:", numbers.toReversed());
// [5, 4, 3, 2, 1]

// 27. reduce() with objects - count occurrences
const votes = ["yes", "no", "yes", "yes", "no"];

const voteCount = votes.reduce((count, vote) => {
    count[vote] = (count[vote] || 0) + 1;
    return count;
}, {});

console.log("voteCount:", voteCount);
// { yes: 3, no: 2 }

// 28. Practical example - filter and transform products
const products = [
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 500 },
    { name: "Keyboard", price: 1500 },
    { name: "Monitor", price: 12000 }
];

const affordableProducts = products
    .filter(product => product.price < 10000)
    .map(product => product.name);

console.log("affordable products:", affordableProducts);
// ["Mouse", "Keyboard"]

// 29. Calculate total shopping cost using reduce()
const cart = [
    { name: "Book", price: 300 },
    { name: "Pen", price: 20 },
    { name: "Bag", price: 800 }
];

const total = cart.reduce((sum, item) => sum + item.price, 0);

console.log("total:", total);
// 1120

// 30. Remove duplicate values using Set
const duplicateNumbers = [1, 2, 2, 3, 3, 4];

const uniqueNumbers = [...new Set(duplicateNumbers)];

console.log("unique:", uniqueNumbers);
// [1, 2, 3, 4]

// The original numbers array remains unchanged by map, filter, and reduce.
console.log("original:", numbers);
// [1, 2, 3, 4, 5]

