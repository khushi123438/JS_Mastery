
// TOPIC: STRINGS AND NUMBERS IN JAVASCRIPT
// ==========================================


// ==========================================
// PART 1: STRINGS
// ==========================================


// 1. CREATING STRINGS

const message = "JavaScript";
const singleQuote = 'Hello World';
const templateString = `Learning JS`;

console.log(message);        // JavaScript
console.log(singleQuote);    // Hello World
console.log(templateString); // Learning JS


// ==========================================
// 2. STRING LENGTH
// ==========================================

console.log(message.length); // 10

// Spaces are also counted.
console.log("Hello World".length); // 11


// ==========================================
// 3. ACCESSING CHARACTERS
// ==========================================

const language = "JavaScript";

console.log(language[0]); // J
console.log(language[4]); // S
console.log(language[9]); // t

// charAt()
console.log(language.charAt(1)); // a

// at() supports negative indexes.
console.log(language.at(-1)); // t
console.log(language.at(-2)); // p


// ==========================================
// 4. CHANGING LETTER CASE
// ==========================================

console.log(message.toUpperCase());
// Output: JAVASCRIPT

console.log(message.toLowerCase());
// Output: javascript

// Original string does not change.
console.log(message); // JavaScript


// ==========================================
// 5. includes()
// Checks whether a substring exists
// ==========================================

console.log(message.includes("Script")); // true
console.log(message.includes("script")); // false

// String matching is case-sensitive.


// ==========================================
// 6. startsWith() AND endsWith()
// ==========================================

const fileName = "notes.js";

console.log(fileName.startsWith("notes")); // true
console.log(fileName.endsWith(".js"));     // true
console.log(fileName.endsWith(".txt"));    // false


// ==========================================
// 7. indexOf() AND lastIndexOf()
// ==========================================

const text = "hello hello";

console.log(text.indexOf("hello"));     // 0
console.log(text.indexOf("world"));     // -1
console.log(text.lastIndexOf("hello")); // 6


// ==========================================
// 8. slice()
// Extracts part of a string
// Ending index is excluded
// ==========================================

const word = "JavaScript";

console.log(word.slice(0, 4));  // Java
console.log(word.slice(4));     // Script
console.log(word.slice(-6));    // Script
console.log(word.slice(0, -6)); // Java


// ==========================================
// 9. substring()
// Similar to slice(), but negative indexes
// are treated as 0
// ==========================================

console.log(word.substring(0, 4)); // Java
console.log(word.substring(4, 10)); // Script

// If start > end, substring swaps them.
console.log(word.substring(4, 0)); // Java


// ==========================================
// 10. trim(), trimStart(), trimEnd()
// Remove whitespace from string edges
// ==========================================

const userInput = "   Hello JS   ";

console.log(userInput.trim());
// Output: Hello JS

console.log(userInput.trimStart());
// Output: Hello JS   (trailing spaces remain)

console.log(userInput.trimEnd());
// Output:    Hello JS (leading spaces remain)


// ==========================================
// 11. replace() AND replaceAll()
// ==========================================

const sentence = "I like Java. Java is popular.";

console.log(sentence.replace("Java", "JavaScript"));
// Replaces the first matching occurrence.

console.log(sentence.replaceAll("Java", "JS"));
// Replaces all matching occurrences.


// ==========================================
// 12. repeat()
// ==========================================

console.log("Hi! ".repeat(3));
// Output: Hi! Hi! Hi!


// ==========================================
// 13. CONCATENATION
// Joining strings
// ==========================================

const firstName = "Riya";
const lastName = "Sharma";

console.log(firstName + " " + lastName);
// Output: Riya Sharma

console.log(firstName.concat(" ", lastName));
// Output: Riya Sharma


// ==========================================
// 14. TEMPLATE LITERALS
// Use backticks and ${expression}
// ==========================================

const name = "Riya";
const age = 21;

console.log(`Welcome, ${name}!`);
// Output: Welcome, Riya!

console.log(`My name is ${name} and I am ${age} years old.`);

// Expressions can also be used.
console.log(`10 + 20 = ${10 + 20}`);
// Output: 10 + 20 = 30


// ==========================================
// 15. SPLIT()
// Converts a string into an array
// ==========================================

const fruits = "Apple,Mango,Banana";

console.log(fruits.split(","));
// Output: [ 'Apple', 'Mango', 'Banana' ]

console.log("Hello".split(""));
// Output: [ 'H', 'e', 'l', 'l', 'o' ]

console.log("one two three".split(" "));
// Output: [ 'one', 'two', 'three' ]


// ==========================================
// 16. JOIN()
// Converts an array into a string
// ==========================================

const colors = ["Red", "Green", "Blue"];

console.log(colors.join(", "));
// Output: Red, Green, Blue

console.log(colors.join("-"));
// Output: Red-Green-Blue


// ==========================================
// 17. CHECKING EMPTY STRINGS
// ==========================================

const emptyString = "";

console.log(emptyString.length); // 0
console.log(emptyString === ""); // true
console.log(Boolean(emptyString)); // false


// ==========================================
// 18. STRINGS ARE IMMUTABLE
// Original strings cannot be changed in place
// ==========================================

let greeting = "hello";

greeting.toUpperCase();

console.log(greeting); // hello

greeting = greeting.toUpperCase();

console.log(greeting); // HELLO

// A new string is returned by toUpperCase().
// Reassign it if you want to store the result.


// ==========================================
// 19. COMPARING STRINGS
// ==========================================

console.log("apple" === "apple"); // true
console.log("apple" === "Apple"); // false

console.log("apple" < "banana"); // true

// String ordering is based on UTF-16 code units.
// For human-language sorting, use localeCompare().
console.log("apple".localeCompare("banana") < 0); // true


// ==========================================
// 20. PRACTICAL EXAMPLE: EMAIL CHECK
// ==========================================

const email = "user@example.com";

console.log(email.includes("@")); // true
console.log(email.endsWith(".com")); // true


// ==========================================
// PART 2: NUMBERS
// ==========================================


// ==========================================
// 21. CREATING NUMBERS
// ==========================================

const integer = 42;
const decimal = 3.14;
const negative = -10;

console.log(integer);  // 42
console.log(decimal);  // 3.14
console.log(negative); // -10


// ==========================================
// 22. BASIC ARITHMETIC
// ==========================================

console.log(10 + 5); // 15
console.log(10 - 5); // 5
console.log(10 * 5); // 50
console.log(10 / 5); // 2
console.log(10 % 3); // 1 (remainder)
console.log(2 ** 3); // 8 (power)


// ==========================================
// 23. INCREMENT AND DECREMENT
// ==========================================

let count = 5;

count++;
console.log(count); // 6

count--;
console.log(count); // 5


// ==========================================
// 24. CONVERTING STRINGS TO NUMBERS
// ==========================================

console.log(Number("42"));     // 42
console.log(Number("3.14"));   // 3.14
console.log(Number("hello"));  // NaN
console.log(Number(""));       // 0
console.log(Number("   "));    // 0
console.log(Number("42abc"));  // NaN


// ==========================================
// 25. parseInt() AND parseFloat()
// ==========================================

console.log(parseInt("42", 10));   // 42
console.log(parseInt("42.9", 10)); // 42
console.log(parseFloat("3.14"));   // 3.14

console.log(parseInt("42px", 10)); // 42
console.log(parseFloat("3.5kg"));  // 3.5

// Unlike Number("42px"), parseInt can read
// a valid integer from the beginning of a string.
console.log(Number("42px")); // NaN


// ==========================================
// 26. NaN (NOT A NUMBER)
// ==========================================

const invalidNumber = Number("hello");

console.log(invalidNumber); // NaN
console.log(Number.isNaN(invalidNumber)); // true

console.log(Number.isNaN(42)); // false

// NaN is not equal to itself.
console.log(NaN === NaN); // false


// ==========================================
// 27. CHECKING FINITE NUMBERS
// ==========================================

console.log(Number.isFinite(100));      // true
console.log(Number.isFinite(Infinity)); // false
console.log(Number.isFinite(NaN));      // false

console.log(Number.isFinite("100")); // false
// Number.isFinite does not convert strings.


// ==========================================
// 28. isInteger()
// ==========================================

console.log(Number.isInteger(10));   // true
console.log(Number.isInteger(10.5)); // false
console.log(Number.isInteger("10")); // false


// ==========================================
// 29. ROUNDING NUMBERS
// ==========================================

console.log(Math.round(4.4)); // 4
console.log(Math.round(4.5)); // 5

console.log(Math.floor(4.9)); // 4
console.log(Math.ceil(4.1));  // 5

console.log(Math.trunc(4.9));  // 4
console.log(Math.trunc(-4.9)); // -4


// ==========================================
// 30. toFixed()
// Returns a string with fixed decimal places
// ==========================================

const price = 19.567;

console.log(price.toFixed(2)); // "19.57"
console.log(price.toFixed(1)); // "19.6"

console.log(typeof price.toFixed(2)); // string


// ==========================================
// 31. Math METHODS
// ==========================================

console.log(Math.abs(-15));      // 15
console.log(Math.sqrt(64));      // 8
console.log(Math.pow(2, 3));      // 8
console.log(Math.max(10, 20, 5)); // 20
console.log(Math.min(10, 20, 5)); // 5

console.log(Math.sign(-8)); // -1
console.log(Math.sign(0));  // 0
console.log(Math.sign(8));  // 1


// ==========================================
// 32. RANDOM NUMBERS
// ==========================================

// Random decimal: 0 (inclusive) to 1 (exclusive)
console.log(Math.random());

// Random integer from 1 to 10, inclusive
const randomNumber = Math.floor(Math.random() * 10) + 1;
console.log(randomNumber);


// ==========================================
// 33. FLOATING-POINT PRECISION
// ==========================================

console.log(0.1 + 0.2);
// Output: 0.30000000000000004

console.log((0.1 + 0.2) === 0.3);
// Output: false

// Many decimal fractions cannot be represented
// exactly in binary floating-point format.

// For simple display:
console.log((0.1 + 0.2).toFixed(2)); // "0.30"

// For money calculations, consider integer
// minor units (e.g. paise) or a decimal library.


// ==========================================
// 34. COMPARING FLOATING-POINT NUMBERS
// ==========================================

const a = 0.1 + 0.2;
const b = 0.3;
const epsilon = 1e-10;

console.log(Math.abs(a - b) < epsilon); // true


// ==========================================
// 35. NUMBER CONSTANTS
// ==========================================

console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991

console.log(Number.MAX_VALUE); // Largest finite number
console.log(Number.MIN_VALUE); // Smallest positive value above 0

console.log(Infinity);  // Infinity
console.log(-Infinity); // -Infinity


// ==========================================
// 36. BIGINT
// For integers beyond Number's safe range
// ==========================================

const bigNumber = 12345678901234567890n;

console.log(bigNumber);
// Output: 12345678901234567890n

console.log(typeof bigNumber); // bigint

// BigInt and Number cannot be mixed directly.
// console.log(bigNumber + 1); // TypeError

console.log(bigNumber + 1n);
// Output: 12345678901234567891n


// ==========================================
// 37. NUMBER() VS UNARY PLUS
// ==========================================

console.log(Number("25")); // 25
console.log(+"25");        // 25

console.log(Number("abc")); // NaN
console.log(+"abc");        // NaN


// ==========================================
// 38. IMPLICIT TYPE CONVERSION
// ==========================================

console.log("5" + 2); // "52" (string concatenation)
console.log("5" - 2); // 3 (numeric conversion)
console.log("5" * 2); // 10
console.log("10" / 2); // 5

// Prefer explicit conversion when possible.


// ==========================================
// 39. PRACTICAL EXAMPLE: PRICE CALCULATION
// ==========================================

const itemPrice = 499;
const quantity = 3;
const totalPrice = itemPrice * quantity;

console.log("Total:", totalPrice);
// Output: Total: 1497


// ==========================================
// 40. PRACTICAL EXAMPLE: USER INPUT
// ==========================================

// Simulate an input value, which is usually a string.
const inputValue = "25";
const convertedValue = Number(inputValue);

if (Number.isFinite(convertedValue)) {
  console.log("Valid number:", convertedValue);
} else {
  console.log("Please enter a valid number");
}

// Output: Valid number: 25


// ==========================================
// END OF STRINGS AND NUMBERS
// ==========================================
