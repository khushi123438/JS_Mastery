
/*
==================================================
TOPIC: ARRAYS IN JAVASCRIPT
Basic to Advanced
==================================================
*/

// 1. CREATING ARRAYS

const fruits = ["apple", "banana", "mango"];
const numbers = [10, 20, 30, 40, 50];
const mixed = ["Khushi", 21, true, null];
const emptyArray = [];

console.log("Fruits:", fruits);
console.log("Numbers:", numbers);
console.log("Mixed:", mixed);
console.log("Empty:", emptyArray);


// 2. ACCESSING ARRAY ELEMENTS

console.log(fruits[0]);    // apple
console.log(fruits[1]);    // banana
console.log(fruits[2]);    // mango
console.log(fruits[10]);   // undefined

console.log("First:", fruits[0]);
console.log("Last:", fruits[fruits.length - 1]);


// 3. ARRAY LENGTH

console.log(fruits.length); // 3

const items = ["pen", "book", "bag"];
console.log(items.length); // 3


// 4. MODIFYING ELEMENTS

fruits[1] = "orange";
console.log(fruits);
// ["apple", "orange", "mango"]

// Restore original array for upcoming examples
fruits[1] = "banana";


// 5. ADDING ELEMENTS

const colors = ["red", "green"];

colors.push("blue");       // Add at the end
console.log(colors);

colors.unshift("yellow");  // Add at the beginning
console.log(colors);


// 6. REMOVING ELEMENTS

const vegetables = ["potato", "tomato", "onion"];

const lastVegetable = vegetables.pop();
console.log(lastVegetable); // onion
console.log(vegetables);    // ["potato", "tomato"]

const firstVegetable = vegetables.shift();
console.log(firstVegetable); // potato
console.log(vegetables);     // ["tomato"]


// 7. SLICE() - DOES NOT MODIFY ORIGINAL ARRAY

const nums = [10, 20, 30, 40, 50];

console.log(nums.slice(1, 3));
// [20, 30]

console.log(nums.slice(2));
// [30, 40, 50]

console.log(nums.slice(-2));
// [40, 50]

console.log(nums);
// Original array remains unchanged


// 8. SPLICE() - MODIFIES ORIGINAL ARRAY

const animals = ["cat", "dog", "lion", "tiger"];

animals.splice(1, 2);
console.log(animals);
// ["cat", "tiger"]

// Syntax: splice(startIndex, deleteCount, item1, item2...)

const letters = ["a", "b", "d"];

letters.splice(2, 0, "c");
console.log(letters);
// ["a", "b", "c", "d"]

letters.splice(1, 1, "B");
console.log(letters);
// ["a", "B", "c", "d"]


// 9. CONCAT() - MERGE ARRAYS

const a = [1, 2];
const b = [3, 4];

const merged = a.concat(b);

console.log(merged); // [1, 2, 3, 4]
console.log(a);      // [1, 2]


// 10. SPREAD OPERATOR (...)

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combined = [...arr1, ...arr2];

console.log(combined);
// [1, 2, 3, 4, 5, 6]

// Copy an array
const copiedArray = [...arr1];

console.log(copiedArray);


// 11. indexOf() AND lastIndexOf()

const scores = [10, 20, 30, 20, 40];

console.log(scores.indexOf(20));     // 1
console.log(scores.lastIndexOf(20)); // 3
console.log(scores.indexOf(100));    // -1


// 12. includes()

console.log(fruits.includes("apple"));  // true
console.log(fruits.includes("grapes")); // false


// 13. FIND()

const values = [5, 12, 18, 25, 30];

const found = values.find((num) => num > 20);

console.log(found); // 25


// 14. findIndex()

const foundIndex = values.findIndex((num) => num > 20);

console.log(foundIndex); // 3


// 15. filter() - RETURNS MATCHING ELEMENTS

const allNumbers = [10, 15, 20, 25, 30, 35];

const evenNumbers = allNumbers.filter((num) => num % 2 === 0);

console.log(evenNumbers);
// [10, 20, 30]


// 16. map() - TRANSFORM EACH ELEMENT

const original = [1, 2, 3, 4];

const squares = original.map((num) => num * num);

console.log(squares);
// [1, 4, 9, 16]

console.log(original);
// [1, 2, 3, 4]


// 17. forEach() - PERFORM AN ACTION FOR EACH ELEMENT

const names = ["Aman", "Khushi", "Riya"];

names.forEach((name) => {
  console.log("Hello", name);
});


// 18. REDUCE() - CALCULATE A SINGLE VALUE

const marks = [10, 20, 30, 40];

const total = marks.reduce((sum, mark) => sum + mark, 0);

console.log(total); // 100

const product = [2, 3, 4].reduce(
  (result, num) => result * num,
  1
);

console.log(product); // 24


// 19. SOME() - AT LEAST ONE ELEMENT MATCHES

const testNumbers = [1, 3, 5, 8];

console.log(testNumbers.some((num) => num % 2 === 0));
// true


// 20. EVERY() - ALL ELEMENTS MUST MATCH

console.log(testNumbers.every((num) => num > 0));
// true

console.log(testNumbers.every((num) => num % 2 === 0));
// false


// 21. SORT()

const unsorted = [40, 10, 100, 5, 25];

// Numeric ascending sort
const ascending = [...unsorted].sort((a, b) => a - b);

console.log(ascending);
// [5, 10, 25, 40, 100]

// Numeric descending sort
const descending = [...unsorted].sort((a, b) => b - a);

console.log(descending);
// [100, 40, 25, 10, 5]

// String sorting
const cityNames = ["Delhi", "Agra", "Kanpur"];

cityNames.sort();

console.log(cityNames);
// ["Agra", "Delhi", "Kanpur"]


// 22. REVERSE()

const sequence = [1, 2, 3, 4, 5];

console.log([...sequence].reverse());
// [5, 4, 3, 2, 1]

console.log(sequence);
// Original remains unchanged because we copied it first


// 23. JOIN() - ARRAY TO STRING

const words = ["JavaScript", "is", "easy"];

console.log(words.join(" "));
// JavaScript is easy

console.log(words.join("-"));
// JavaScript-is-easy


// 24. SPLIT() - STRING TO ARRAY

const sentence = "JavaScript is awesome";

const sentenceArray = sentence.split(" ");

console.log(sentenceArray);
// ["JavaScript", "is", "awesome"]


// 25. FLAT() - FLATTEN NESTED ARRAYS

const nested = [1, 2, [3, 4], [5, 6]];

console.log(nested.flat());
// [1, 2, 3, 4, 5, 6]

const deeplyNested = [1, [2, [3, [4]]]];

console.log(deeplyNested.flat(Infinity));
// [1, 2, 3, 4]


// 26. flatMap()

const flatMapResult = [1, 2, 3].flatMap((num) => [num, num * 2]);

console.log(flatMapResult);
// [1, 2, 2, 4, 3, 6]


// 27. FILL()

const filled = [1, 2, 3, 4, 5];

filled.fill(0, 1, 4);

console.log(filled);
// [1, 0, 0, 0, 5]


// 28. Array.isArray()

console.log(Array.isArray([1, 2, 3])); // true
console.log(Array.isArray("hello"));   // false


// 29. Array.from()

console.log(Array.from("hello"));
// ["h", "e", "l", "l", "o"]

console.log(Array.from({ length: 5 }, (_, index) => index + 1));
// [1, 2, 3, 4, 5]


// 30. Array.of()

console.log(Array.of(5));
// [5]

console.log(Array.of(1, 2, 3));
// [1, 2, 3]


// 31. DESTRUCTURING

const student = ["Khushi", 21, "CSE"];

const [studentName, age, branch] = student;

console.log(studentName); // Khushi
console.log(age);         // 21
console.log(branch);      // CSE


// 32. REST OPERATOR WITH DESTRUCTURING

const data = [10, 20, 30, 40, 50];

const [first, second, ...remaining] = data;

console.log(first);     // 10
console.log(second);    // 20
console.log(remaining); // [30, 40, 50]


// 33. LOOPING THROUGH ARRAYS

const programmingLanguages = ["Java", "Python", "JavaScript"];

// Traditional for loop
for (let i = 0; i < programmingLanguages.length; i++) {
  console.log(programmingLanguages[i]);
}

// for...of
for (const language of programmingLanguages) {
  console.log(language);
}

// forEach
programmingLanguages.forEach((language, index) => {
  console.log(index, language);
}


// 34. CHECKING EMPTY ARRAY

const userItems = [];

if (userItems.length === 0) {
  console.log("Array is empty");
}


// 35. REMOVE DUPLICATES

const duplicateNumbers = [1, 2, 2, 3, 3, 4, 5, 5];

const uniqueNumbers = [...new Set(duplicateNumbers)];

console.log(uniqueNumbers);
// [1, 2, 3, 4, 5]


// 36. MAXIMUM AND MINIMUM

const prices = [150, 40, 300, 90, 220];

console.log(Math.max(...prices)); // 300
console.log(Math.min(...prices)); // 40


// 37. SUM OF ARRAY ELEMENTS

const expenses = [100, 250, 50, 300];

const totalExpenses = expenses.reduce((sum, value) => sum + value, 0);

console.log(totalExpenses); // 700


// 38. CHECK IF AN ARRAY CONTAINS A VALUE

const availableItems = ["pen", "book", "laptop"];

const itemExists = availableItems.includes("book");

console.log(itemExists); // true


// 39. COPY AN ARRAY - SHALLOW COPY

const originalArray = [1, 2, 3];
const shallowCopy = [...originalArray];

shallowCopy.push(4);

console.log(originalArray); // [1, 2, 3]
console.log(shallowCopy);   // [1, 2, 3, 4]


// 40. MUTATING VS NON-MUTATING METHODS

const sample = [3, 1, 2];

// Mutates the original array
sample.push(4);
sample.splice(0, 1);
sample.sort((a, b) => a - b);
sample.reverse();

console.log("Mutated:", sample);

// Returns a new array
const originalSample = [1, 2, 3];

const newSample = originalSample.map((num) => num * 2);

console.log("Original:", originalSample);
console.log("New:", newSample);


// 41. MODERN NON-MUTATING METHODS (ES2023+)

// toSorted()
const sortSource = [3, 1, 2];
console.log(sortSource.toSorted((a, b) => a - b));
console.log(sortSource); // [3, 1, 2]

// toReversed()
console.log(sortSource.toReversed());

// toSpliced()
console.log(sortSource.toSpliced(1, 1, 99));
// [3, 99, 2]

// with()
console.log(sortSource.with(1, 99));
// [3, 99, 2]


// END OF ARRAYS
console.log("JavaScript Arrays completed!");
