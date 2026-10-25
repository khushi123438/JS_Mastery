// ==========================================
// TOPIC: CONDITIONALS AND LOOPS IN JAVASCRIPT
// ==========================================


// ==========================================
// 1. IF STATEMENT
// ==========================================

const age = 20;

if (age >= 18) {
  console.log("You are eligible to vote");
}

// Output: You are eligible to vote


// ==========================================
// 2. IF-ELSE STATEMENT
// ==========================================

const number = 7;

if (number % 2 === 0) {
  console.log("Even number");
} else {
  console.log("Odd number");
}

// Output: Odd number


// ==========================================
// 3. IF - ELSE IF - ELSE
// ==========================================

const marks = 82;

if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 75) {
  console.log("Grade B");
} else if (marks >= 50) {
  console.log("Grade C");
} else {
  console.log("Keep practising");
}

// Output: Grade B


// ==========================================
// 4. NESTED IF
// An if statement inside another if statement
// ==========================================

const studentAge = 20;
const hasID = true;

if (studentAge >= 18) {
  if (hasID) {
    console.log("Entry allowed");
  } else {
    console.log("Please show your ID");
  }
} else {
  console.log("Entry not allowed");
}

// Output: Entry allowed


// ==========================================
// 5. SWITCH STATEMENT
// Useful when checking one value against
// multiple possible cases
// ==========================================

const day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;

  case 2:
    console.log("Tuesday");
    break;

  case 3:
    console.log("Wednesday");
    break;

  case 4:
    console.log("Thursday");
    break;

  default:
    console.log("Invalid day");
}

// Output: Wednesday


// ==========================================
// 6. SWITCH WITHOUT BREAK
// Fall-through: execution continues into
// the next case if break is missing
// ==========================================

const value = 1;

switch (value) {
  case 1:
    console.log("One");

  case 2:
    console.log("Two");
    break;

  default:
    console.log("Other");
}

// Output:
// One
// Two


// ==========================================
// 7. TERNARY OPERATOR
// Short form of if-else
// condition ? valueIfTrue : valueIfFalse
// ==========================================

const userAge = 17;

const result = userAge >= 18 ? "Adult" : "Minor";

console.log(result);

// Output: Minor


// ==========================================
// 8. FOR LOOP
// Used when you know how many times to repeat
// ==========================================

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// Output:
// 1
// 2
// 3
// 4
// 5


// ==========================================
// 9. FOR LOOP: REVERSE COUNTING
// ==========================================

for (let i = 5; i >= 1; i--) {
  console.log(i);
}

// Output: 5, 4, 3, 2, 1


// ==========================================
// 10. WHILE LOOP
// Repeats while the condition is true
// ==========================================

let count = 0;

while (count < 3) {
  console.log("count:", count);
  count++;
}

// Output:
// count: 0
// count: 1
// count: 2


// ==========================================
// 11. DO-WHILE LOOP
// Runs at least once, even if condition is false
// ==========================================

let x = 5;

do {
  console.log("Value:", x);
  x++;
} while (x < 3);

// Output: Value: 5


// ==========================================
// 12. BREAK STATEMENT
// Stops the loop immediately
// ==========================================

for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    break;
  }

  console.log(i);
}

// Output:
// 1
// 2


// ==========================================
// 13. CONTINUE STATEMENT
// Skips the current iteration
// ==========================================

for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue;
  }

  console.log(i);
}

// Output:
// 1
// 2
// 4
// 5


// ==========================================
// 14. NESTED LOOPS
// A loop inside another loop
// ==========================================

for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 2; j++) {
    console.log("i:", i, "j:", j);
  }
}

// Output:
// i: 1 j: 1
// i: 1 j: 2
// i: 2 j: 1
// i: 2 j: 2
// i: 3 j: 1
// i: 3 j: 2


// ==========================================
// 15. MULTIPLICATION TABLE
// ==========================================

const tableNumber = 5;

for (let i = 1; i <= 10; i++) {
  console.log(`${tableNumber} x ${i} = ${tableNumber * i}`);
}

// Output:
// 5 x 1 = 5
// 5 x 2 = 10
// ...
// 5 x 10 = 50


// ==========================================
// 16. SUM OF NUMBERS FROM 1 TO 5
// ==========================================

let sum = 0;

for (let i = 1; i <= 5; i++) {
  sum += i;
}

console.log("Sum:", sum);

// Output: Sum: 15


// ==========================================
// 17. FACTORIAL OF A NUMBER
// 5! = 5 x 4 x 3 x 2 x 1 = 120
// ==========================================

const n = 5;
let factorial = 1;

for (let i = 1; i <= n; i++) {
  factorial *= i;
}

console.log("Factorial:", factorial);

// Output: Factorial: 120


// ==========================================
// 18. FOR...OF LOOP
// Used to iterate over values of arrays/strings
// ==========================================

const fruits = ["Apple", "Mango", "Banana"];

for (const fruit of fruits) {
  console.log(fruit);
}

// Output:
// Apple
// Mango
// Banana


// ==========================================
// 19. FOR...IN LOOP
// Used to iterate over enumerable object keys
// ==========================================

const student = {
  name: "Khushi",
  age: 20,
  course: "CSE"
};

for (const key in student) {
  console.log(key, ":", student[key]);
}

// Output:
// name : Khushi
// age : 20
// course : CSE


// ==========================================
// 20. ARRAY LOOP USING FOR
// ==========================================

const numbers = [10, 20, 30, 40];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// Output: 10, 20, 30, 40


// ==========================================
// 21. ARRAY LOOP USING FOR...OF
// ==========================================

for (const num of numbers) {
  console.log(num);
}

// Output: 10, 20, 30, 40


// ==========================================
// 22. LOOP THROUGH A STRING
// ==========================================

const word = "CODE";

for (const character of word) {
  console.log(character);
}

// Output:
// C
// O
// D
// E


// ==========================================
// 23. CHECK PRIME NUMBER
// ==========================================

const primeNumber = 7;
let isPrime = primeNumber >= 2;

for (let i = 2; i * i <= primeNumber; i++) {
  if (primeNumber % i === 0) {
    isPrime = false;
    break;
  }
}

console.log(isPrime ? "Prime number" : "Not a prime number");

// Output: Prime number


// ==========================================
// 24. FIZZBUZZ
// Multiples of 3 -> Fizz
// Multiples of 5 -> Buzz
// Multiples of both -> FizzBuzz
// ==========================================

for (let i = 1; i <= 15; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}


// ==========================================
// 25. OPTIONAL CHAINING WITH CONDITIONALS
// ==========================================

const person = {
  name: "Aman"
};

if (person.address?.city) {
  console.log(person.address.city);
} else {
  console.log("City not available");
}

// Output: City not available


// ==========================================
// 26. COMMON INFINITE LOOP WARNING
// ==========================================

// Avoid running this example:
// let i = 1;
// while (i <= 5) {
//   console.log(i);
//   // Missing i++ means the loop never ends.
// }


// ==========================================
// END OF CONDITIONALS AND LOOPS
// ==========================================
